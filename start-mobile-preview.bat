@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动生日相册手机预览...
echo.
if exist "C:\Program Files\nodejs\node.exe" (
  "C:\Program Files\nodejs\node.exe" mobile-server.js
) else (
  node mobile-server.js
)
pause
