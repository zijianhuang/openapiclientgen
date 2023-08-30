cd %~dp0
set targetSite=C:\Release\OpenApiClientGen\MacSelfContained\
set target=%targetSite%

del /S /Q %target%*

dotnet publish -r osx-x64 --output %target% --configuration release
