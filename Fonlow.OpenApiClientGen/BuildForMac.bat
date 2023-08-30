cd %~dp0
set targetSite=C:\Release\OpenApiClientGen\Mac\
set target=%targetSite%

del /S /Q %target%*

dotnet publish -r osx-x64 --output %target% --configuration release --self-contained false

