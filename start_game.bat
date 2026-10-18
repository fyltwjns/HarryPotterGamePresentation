@echo off
title Harry Potter Game of Knowledge
echo ===================================================
echo   Harry Potter and the Game of Knowledge
echo   Interactive Presentation Web App Launcher
echo ===================================================
echo.
echo Starting local web server on port 8000...
start "" python -m http.server 8000
timeout /t 2 /nobreak >nul
echo Opening game in your default web browser...
start http://localhost:8000/index.html
echo.
echo [OK] Game is running! You can press Ctrl+C in the server window to close.
pause
