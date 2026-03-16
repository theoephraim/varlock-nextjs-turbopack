#!/bin/bash
set -e

# Swaps package.json back to link: style for local development

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.dependencies['varlock'] = 'link:../../../varlock/packages/varlock';
pkg.dependencies['@varlock/nextjs-integration'] = 'link:../../../varlock/packages/integrations/nextjs';
pkg.pnpm.overrides['@next/env'] = 'link:../../../varlock/packages/integrations/nextjs';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"

echo "Switched package.json back to link: references"
pnpm install
