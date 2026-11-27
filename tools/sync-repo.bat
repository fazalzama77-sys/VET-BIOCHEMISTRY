@echo off
set "ROOT=%~dp0.."
node "%ROOT%\tools\build-version.js"
if errorlevel 1 exit /b 1
robocopy "%ROOT%" "%ROOT%\repo" /MIR /XD repo .git .claude tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul
if errorlevel 8 exit /b 1
echo Mirror updated in repo\
