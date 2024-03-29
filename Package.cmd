@ECHO OFF
SETLOCAL

IF "%~1"=="" (
   SET /P Version=Version ^(x.y.z^): 
) ELSE (
   SET Version=%~1
)

MKDIR "%~dp0dist\sircl-%Version%"
COPY "%~dp0src\VsNetSrc\wwwroot\lib\sircl\*.*" "%~dp0dist\sircl-%version%\"
DEL "%~dp0dist\sircl-latest\*.*" /q
COPY "%~dp0src\VsNetSrc\wwwroot\lib\sircl\*.*" "%~dp0dist\sircl-latest\"

ECHO {^
 "name": "sircl",^
 "version": "%version%",^
 "description": "Serverside Rendering Coding Library",^
 "author": "Codetuner",^
 "main": "sircl-full.min.js",^
 "repository": {^
 "type": "git",^
 "url": "https://github.com/codetuner/Sircl"^
 },^
 "license": "MIT"^
}>"%~dp0dist\sircl-%version%\package.json"

PAUSE
ECHO.
ECHO Publish on NPM ?
PAUSE

PUSHD "%~dp0dist\sircl-%Version%"

CALL NPM login
CALL NPM publish

POPD

PAUSE