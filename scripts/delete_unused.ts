#!/usr/bin/env tsx
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(__dirname, '..')
const reportsDir = path.join(projectRoot, 'reports')
const candidatesPath = path.join(reportsDir, 'candidates.json')

type Candidates = { safeCandidates: string[]; risky: string[] }

function usage() {
  console.log('Usage: tsx scripts/delete_unused.ts [--dry-run]')
}

async function main() {
  const dryRun = process.argv.includes('--dry-run') || !process.stdout.isTTY
  if (!fs.existsSync(candidatesPath)) {
    console.error('Missing report:', path.relative(projectRoot, candidatesPath))
    process.exit(1)
  }
  const data = JSON.parse(await fs.promises.readFile(candidatesPath, 'utf8')) as Candidates
  const deletions: string[] = []
  for (const p of data.safeCandidates) {
    const abs = path.isAbsolute(p) ? p : path.join(projectRoot, p)
    if (abs.startsWith(path.join(projectRoot, 'src')) && fs.existsSync(abs)) {
      deletions.push(abs)
    }
  }

  const planPath = path.join(reportsDir, 'deletion-plan.md')
  const lines: string[] = []
  lines.push('# Deletion Plan (safe candidates)')
  lines.push('')
  lines.push(`Generated at: ${new Date().toISOString()}`)
  lines.push('')
  for (const d of deletions) {
    lines.push(`- ${path.relative(projectRoot, d)}`)
  }
  await fs.promises.mkdir(reportsDir, { recursive: true })
  await fs.promises.writeFile(planPath, lines.join('\n') + '\n', 'utf8')

  if (dryRun) {
    console.log('Dry-run: wrote', path.relative(projectRoot, planPath))
    return
  }

  for (const d of deletions) {
    await fs.promises.rm(d, { recursive: false, force: true })
    console.log('Deleted', path.relative(projectRoot, d))
  }
}

main().catch(err => { console.error(err); usage(); process.exit(1) })
