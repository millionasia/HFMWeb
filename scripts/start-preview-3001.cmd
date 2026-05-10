@echo off
cd /d "%~dp0.."
set HOST=127.0.0.1
set PORT=3001
node .output\server\index.mjs
