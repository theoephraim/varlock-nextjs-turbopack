#!/bin/bash
set -e

# Packs varlock and @varlock/nextjs-integration from local source into .tgz files
# Then updates package.json to point to them

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR/.."
VARLOCK_ROOT="$PROJECT_DIR/../../../varlock"
PACKED_DIR="$PROJECT_DIR/.packed"

mkdir -p "$PACKED_DIR"

# Build varlock and @varlock/nextjs-integration
echo "Building varlock and @varlock/nextjs-integration..."
(cd "$VARLOCK_ROOT" && bunx turbo build --filter=varlock --filter=@varlock/nextjs-integration)

# pack them into tgz files
echo "Packing varlock..."
VARLOCK_TGZ=$(cd "$VARLOCK_ROOT/packages/varlock" && bun pm pack --destination "$PACKED_DIR" 2>&1 | grep '\.tgz$')
echo "Packing @varlock/nextjs-integration..."
NEXTJS_TGZ=$(cd "$VARLOCK_ROOT/packages/integrations/nextjs" && bun pm pack --destination "$PACKED_DIR" 2>&1 | grep '\.tgz$')

echo ""
echo "Packed files:"
ls -la "$PACKED_DIR"/*.tgz

# Update package.json to use local tgz files
echo ""
echo "Updating package.json..."
cd "$PROJECT_DIR"

# Get just the filenames
VARLOCK_FILE=$(basename "$VARLOCK_TGZ")
NEXTJS_FILE=$(basename "$NEXTJS_TGZ")

# Use node to update package.json cleanly
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.dependencies['varlock'] = 'file:.packed/${VARLOCK_FILE}';
pkg.dependencies['@varlock/nextjs-integration'] = 'file:.packed/${NEXTJS_FILE}';
pkg.pnpm.overrides['@next/env'] = 'file:.packed/${NEXTJS_FILE}';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"

echo "Updated package.json:"
echo "  varlock -> .packed/$VARLOCK_FILE"
echo "  @varlock/nextjs-integration -> .packed/$NEXTJS_FILE"
echo "  @next/env override -> .packed/$NEXTJS_FILE"
echo ""

pnpm install