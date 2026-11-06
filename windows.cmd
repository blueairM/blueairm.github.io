@echo off
if exist "%~dp0..\env.cmd" call "%~dp0..\env.cmd"
cd /d "%~dp0"
if "%~1"=="" (
  cmd /k
) else (
  call npm.cmd %*
)
