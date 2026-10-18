@echo off
title Harry Potter Game of Knowledge
echo Starting Harry Potter Game of Knowledge Web App...
start "" python -m http.server 8000
timeout /t 2 /nobreak >nul
start http://localhost:8000/index.html
echo The game is ready in your browser!
pause
