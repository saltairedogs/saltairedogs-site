#!/usr/bin/env tsx
import fs from 'node:fs'
import path from 'node:path'

type Graph = Map<string, Set<string>> // file -> imported files

const projectRoot = path.resolve(__dirname, '..')
const SRC_DIR = path.join(projectRoot, 'src')
const APP_DIR = path.join(SRC_DIR, 'app')
const PUBLIC_DIR = path.join(projectRoot, 'public')

const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']

function isCodeFile(p: string) {
  return EXTENSIONS.includes(path.extname(p))
}

function shouldSkip(p: string) {
  return p.includes('node_modules') || p.includes('/.next/') || p.includes('/dist/')
}

async function walk(dir: string, acc: string[] = []): Promise<string[]> {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (shouldSkip(full)) continue
    if (e.isDirectory()) {
      await walk(full, acc)
    } else if (isCodeFile(full)) {
      acc.push(full)
    }
  }
  return acc
}

function resolveImport(fromFile: string, spec: string): string | null {
  // alias @/ -> src/
  if (spec.startsWith('@/')) {
    const rel = spec.replace(/^@\//, '')
    return resolveWithExtensions(path.join(SRC_DIR, rel))
  }
  // absolute from src (rare): '/src/...'
  if (spec.startsWith('/src/')) {
    return resolveWithExtensions(path.join(projectRoot, spec.slice(1)))
  }
  if (spec.startsWith('.') || spec.startsWith('..')) {
    const base = path.dirname(fromFile)
    return resolveWithExtensions(path.resolve(base, spec))
  }
  // external module
  return null
}

function resolveWithExtensions(baseNoExt: string): string | null {
  // Try as-file with ext, index variants, and as-is when already has ext
  if (isCodeFile(baseNoExt)) return fs.existsSync(baseNoExt) ? baseNoExt : null
  for (const ext of EXTENSIONS) {
    const p = baseNoExt + ext
    if (fs.existsSync(p)) return p
  }
  // index.*
  for (const ext of EXTENSIONS) {
    const p = path.join(baseNoExt, 'index' + ext)
    if (fs.existsSync(p)) return p
  }
  return null
}

function findImports(source: string): string[] {
  const imports: string[] = []
  const importRegex = /import\s+(?:[^'"\n]+?\s+from\s+)?['"]([^'"]+)['"]/g
  const exportFromRegex = /export\s+(?:\*|{[^}]+})\s+from\s+['"]([^'"]+)['"]/g
  const dynImportRegex = /import\(\s*['"]([^'"]+)['"]\s*\)/g
  const nextDynamicRegex = /dynamic\([^)]*?import\(\s*['"]([^'"]+)['"]\s*\)/g
  let m: RegExpExecArray | null
  while ((m = importRegex.exec(source))) imports.push(m[1])
  while ((m = exportFromRegex.exec(source))) imports.push(m[1])
  while ((m = dynImportRegex.exec(source))) imports.push(m[1])
  while ((m = nextDynamicRegex.exec(source))) imports.push(m[1])
  return imports
}

function isRouteFile(p: string): boolean {
  const bn = path.basename(p)
  const routeNames = new Set(['page.tsx', 'layout.tsx', 'route.ts', 'loading.tsx', 'error.tsx', 'not-found.tsx'])
  return p.startsWith(APP_DIR) && routeNames.has(bn)
}

async function buildGraph(): Promise<{ graph: Graph; files: string[]; assets: Set<string> }> {
  const files = await walk(SRC_DIR)
  const graph: Graph = new Map()
  const assets = new Set<string>()

  for (const f of files) {
    try {
      const src = await fs.promises.readFile(f, 'utf8')
      const specs = findImports(src)
      for (const spec of specs) {
        const resolved = resolveImport(f, spec)
        if (!graph.has(f)) graph.set(f, new Set())
        if (resolved) graph.get(f)!.add(resolved)
      }
      // crude asset detection: src="/..." or images array in metadata
      const assetRegex = /src=\"(\/[^"]+)\"|['\"](\/[\w\-\./]+\.(?:png|jpg|jpeg|webp|svg))['\"]/gi
      let m: RegExpExecArray | null
      while ((m = assetRegex.exec(src))) {
        const pth = (m[1] || m[2]) as string
        if (pth && pth.startsWith('/')) {
          const abs = path.join(PUBLIC_DIR, pth)
          assets.add(abs)
        }
      }
    } catch (e) {
      // ignore parse/read errors conservatively
    }
  }
  return { graph, files, assets }
}

function seeds(files: string[]): Set<string> {
  const s = new Set<string>()
  for (const f of files) if (isRouteFile(f)) s.add(f)
  // root layout always seed if exists
  const rootLayout = path.join(APP_DIR, 'layout.tsx')
  if (fs.existsSync(rootLayout)) s.add(rootLayout)
  return s
}

function bfsUsed(graph: Graph, start: Set<string>): Set<string> {
  const used = new Set<string>(start)
  const q: string[] = Array.from(start)
  while (q.length) {
    const cur = q.shift()!
    const deps = graph.get(cur)
    if (deps) {
      for (const dep of Array.from(deps)) {
        if (!used.has(dep)) {
          used.add(dep)
          q.push(dep)
        }
      }
    }
  }
  return used
}

async function main() {
  const { graph, files, assets } = await buildGraph()
  const seedSet = seeds(files)
  const used = bfsUsed(graph, seedSet)

  const configFiles = [
    'tailwind.config.js','postcss.config.js','tsconfig.json','next.config.js','package.json','package-lock.json','.eslintrc.json','.prettierrc.json'
  ].map(f=>path.join(projectRoot,f))

  const routeConvention = files.filter(isRouteFile)

  const usedFiles = new Set<string>(
    Array.from(used).concat(routeConvention, configFiles.filter(f=>fs.existsSync(f)))
  )

  const candidates = files.filter(f => !usedFiles.has(f))

  // Risky candidates heuristic: any file containing dynamic import with non-literal, or using require/context-like
  const risky = new Set<string>()
  for (const f of candidates) {
    const src = await fs.promises.readFile(f, 'utf8').catch(()=>null)
    if (!src) continue
    if (/import\(\s*[^'"`]/.test(src) || /require\([^'"`]/.test(src)) {
      risky.add(f)
    }
  }

  const safeCandidates = candidates.filter(f => !risky.has(f))

  // assets referenced vs present
  const referencedAssets = Array.from(assets)
  const missingAssets = referencedAssets.filter(a => !fs.existsSync(a))

  // Write report
  const reportsDir = path.join(projectRoot, 'reports')
  await fs.promises.mkdir(reportsDir, { recursive: true })
  const reportPath = path.join(reportsDir, 'usage-audit.md')

  const toTable = (rows: string[][]) => {
    if (!rows.length) return '\n(none)\n'
    const header = ['Path','Notes']
    const lines = [ `| ${header.join(' | ')} |`, `| ${header.map(()=>"---").join(' | ')} |`, ...rows.map(r=>`| ${r[0]} | ${r[1]??''} |`) ]
    return '\n'+lines.join('\n')+'\n'
  }

  const usedRows = Array.from(usedFiles).filter(f=>f.startsWith(projectRoot)).sort().map(f=>[path.relative(projectRoot,f), ''])
  const candRows = safeCandidates.sort().map(f=>[path.relative(projectRoot,f), 'no inbound edges'])
  const riskyRows = Array.from(risky).sort().map(f=>[path.relative(projectRoot,f), 'dynamic import/require detected'])
  const missingAssetRows = missingAssets.sort().map(a=>[path.relative(projectRoot,a), 'missing but referenced'])

  const md = `# Usage Audit\n\n`+
    `Generated at: ${new Date().toISOString()}\n\n`+
    `## Seeds (route convention files)\n\n`+
    toTable(routeConvention.sort().map(f=>[path.relative(projectRoot,f),'route']))+
    `\n## Files confirmed used\n`+
    toTable(usedRows)+
    `\n## Candidate unused files (safe)\n`+
    toTable(candRows)+
    `\n## Risky candidates (do NOT delete automatically)\n`+
    toTable(riskyRows)+
    `\n## Missing referenced public assets\n`+
    toTable(missingAssetRows)+
    `\n`

  await fs.promises.writeFile(reportPath, md, 'utf8')

  // Also emit a JSON with candidates for the deletion script
  const jsonPath = path.join(reportsDir, 'candidates.json')
  await fs.promises.writeFile(jsonPath, JSON.stringify({ safeCandidates, risky: Array.from(risky) }, null, 2), 'utf8')

  console.log('Wrote', path.relative(projectRoot, reportPath))
  console.log('Wrote', path.relative(projectRoot, jsonPath))
}

main().catch(err => { console.error(err); process.exit(1) })
