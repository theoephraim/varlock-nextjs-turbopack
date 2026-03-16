#!/bin/bash
set -e

# Builds locally with vercel build, then deploys the prebuilt output
# This avoids needing Vercel to have access to the varlock packages

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

echo "Building with vercel build..."
pnpm exec vercel build

echo ""
echo "Deploying prebuilt output..."
pnpm exec vercel deploy --prebuilt
