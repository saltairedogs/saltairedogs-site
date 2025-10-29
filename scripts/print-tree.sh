#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${1:-src/app}"

echo "=== FILE TREE (${APP_DIR}) ==="
find "$APP_DIR" -maxdepth 6 -type d -name "node_modules" -prune -o -print | sed 's|^|  |'

echo
echo "=== CANDIDATE ROUTES (page.tsx / page.jsx) ==="
# List folders that contain a page.tsx|jsx and convert to route paths
# - strip APP_DIR prefix
# - remove route groups like (site)
# - turn /page.tsx into a directory path
# - normalise index route
find "$APP_DIR" -type f \( -name "page.tsx" -o -name "page.jsx" \) \
  | sed -E "s#^$APP_DIR/?##" \
  | sed -E 's#/page\.(tsx|jsx)$##' \
  | sed -E 's#\(([^)]+)\)/?#/#g' \
  | sed -E 's#^$#/#' \
  | sed -E 's#//+#/#g' \
  | sort -u

echo
echo "=== DYNAMIC SEGMENTS (review manually for sitemap) ==="
find "$APP_DIR" -type d -name "\[*\]" \
  | sed -E "s#^$APP_DIR/?#/#" \
  | sed -E 's#\(([^)]+)\)/?#/#g' \
  | sed -E 's#//+#/#g' \
  | sort -u
