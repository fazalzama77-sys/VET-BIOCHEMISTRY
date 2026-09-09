@echo off
cd /d "%~dp0.."
start "Veterinary Biochemistry Studio" http://localhost:5199/index.html#/
node tools\local-server.js 5199
