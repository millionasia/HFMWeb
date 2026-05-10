$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

$env:NUXT_HOST = '127.0.0.1'
$env:NUXT_PORT = '3001'

corepack pnpm dev
