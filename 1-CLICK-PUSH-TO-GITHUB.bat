@echo off
setlocal
title 1-Click Upload to GitHub
color 0B
echo.
echo ============================================================
echo   VETERINARY BIOCHEMISTRY STUDIO - 1-CLICK GITHUB UPLOADER
echo ============================================================
echo.

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"
set "REPO_URL=https://github.com/fazalzama77-sys/VET-BIOCHEMISTRY.git"

cd /d "%ROOT%"

:: Step 0: Ensure Git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    color 0C
    echo [ERROR] Git is not installed or not in your system PATH.
    echo Please install Git from https://git-scm.com and try again.
    goto :finish
)

:: Step 0b: Ensure Git repository is initialized
if not exist "%ROOT%\.git" (
    echo [*] Initializing local Git repository...
    git init >nul 2>&1
)

:: Ensure current branch is 'main'
git branch -M main >nul 2>&1

:: Ensure origin remote is correctly configured
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [*] Setting remote origin to %REPO_URL%...
    git remote add origin %REPO_URL%
) else (
    git remote set-url origin %REPO_URL%
)

:: Ensure user identity is set
git config user.name >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    git config user.name "fazalzama77-sys"
)
git config user.email >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    git config user.email "fazalzama77@gmail.com"
)

:: Step 1: Generate the version and synchronize the offline repo folder
echo [1/3] Generating the version and synchronizing 'repo' folder...
node tools\build-version.js
if errorlevel 1 goto :build_error
call :mirror
if errorlevel 1 goto :build_error

:: Step 2: Stage and commit local changes
echo [2/3] Checking for modified files...
git add -A
if errorlevel 1 goto :build_error

git diff --cached --quiet
if %ERRORLEVEL% EQU 0 (
    echo No local changes to commit. Proceeding to sync with remote...
) else (
    echo Saving updates to local Git...
    git commit -m "Update Biochemistry Studio content (%date% %time%)"
    if errorlevel 1 goto :build_error
)

:: Step 3: Upload to GitHub
echo [3/3] Uploading to GitHub...
set ATTEMPT=1

:try_push
git pull --rebase --autostash origin main >nul 2>&1
if not errorlevel 1 (
    rem A pull can introduce new site content after the initial build.
    node tools\build-version.js
    if errorlevel 1 goto :build_error
    git diff --quiet -- index.html service-worker.js version.json
    if errorlevel 1 (
        git add -- index.html service-worker.js version.json
        if errorlevel 1 goto :build_error
        git commit -m "Regenerate Biochemistry Studio version after sync"
        if errorlevel 1 goto :build_error
    )
    call :mirror
    if errorlevel 1 goto :build_error
    git push -u origin main
    if not errorlevel 1 goto :push_success
)

set /a ATTEMPT+=1
if %ATTEMPT% LEQ 3 (
    echo [!] Network or DNS busy. Retrying in 3 seconds (Attempt %ATTEMPT% of 3)...
    timeout /t 3 /nobreak >nul
    goto :try_push
)

color 0C
echo.
echo ============================================================
echo   [NOTICE] Upload encountered an issue after 3 attempts.
echo   - Check your internet connection (DNS resolution).
echo   - Check if GitHub is reachable.
echo   - Your local changes are safely committed in Git!
echo ============================================================
goto :finish

:build_error
color 0C
echo [ERROR] Could not generate or save the versioned site. Check the errors above.
goto :finish

:push_success
color 0A
echo.
echo ============================================================
echo   [SUCCESS] ALL CHANGES UPLOADED TO GITHUB!
echo   Repository: %REPO_URL%
for /f "tokens=*" %%c in ('git log -1 --oneline') do echo   Latest Commit: %%c
echo   Open app tabs will refresh automatically after GitHub Pages deploys the update.
echo ============================================================

:finish
echo.
echo Press any key to close this window...
pause >nul
exit /b

:mirror
robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul
if errorlevel 8 exit /b 1
exit /b 0
