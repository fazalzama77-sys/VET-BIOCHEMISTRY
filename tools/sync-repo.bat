@echo off
set "ROOT=%~dp0.."
robocopy "%ROOT%" "%ROOT%\repo" /MIR /XD repo .git .claude tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul
echo Mirror updated in repo\
