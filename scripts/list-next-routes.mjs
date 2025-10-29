#!/usr/bin/env node
import { readdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

const APP_DIR = process.argv[2] || 'src/app'

// Helpers
const isRouteGroup = (name) => name.startsWith('(') && name.endsWith(')')
const dropRouteGroups = (segments) => segments.filter(s => !isRouteGroup(s))
const toWebPath = (segments) => {
  const clean = dropRouteGroups(segments)
  const p = '/' + clean.join('/')
  return p === '//' ? '/' : p.replace(/\/+/g, '/')
}

const staticRoutes = new Set()
const dynamicRoutes = new Set()

function walk(dir, segs = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) {
      if (name === 'node_modules') continue
      walk(full, [...segs, name])
      continue
    }
    if (/^page\.(tsx|jsx)$/.test(name)) {
      const web = toWebPath(segs)
      staticRoutes.add(web === '' ? '/' : web)
    }
  }
  if (segs.some((s) => /\[.+\]/.test(s))) {
    dynamicRoutes.add(toWebPath(segs))
  }
}

walk(APP_DIR)

const out = {
  appDir: APP_DIR,
  generatedAt: new Date().toISOString(),
  staticRoutes: [...staticRoutes].sort(),
  dynamicSegments: [...dynamicRoutes].sort(),
}

console.log(JSON.stringify(out, null, 2))
writeFileSync('routes.json', JSON.stringify(out, null, 2))
console.error(`Wrote routes.json with ${out.staticRoutes.length} static route(s).`)
