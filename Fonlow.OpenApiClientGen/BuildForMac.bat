cd %~dp0
set target=C:\Release\OpenApiClientGen\Mac\
set mainDir=bin\Release\net7.0\

del /S /Q %target%*

dotnet publish -r osx-x64 --output %target% --configuration release --self-contained false

copy /Y %mainDir%Fonlow.OpenApiClientGen.Aurelia.dll %target%
copy /Y %mainDir%Fonlow.OpenApiClientGen.Axios.dll %target%
copy /Y %mainDir%Fonlow.OpenApiClientGen.Fetch.dll %target%
copy /Y %mainDir%Fonlow.OpenApiClientGen.JQ.dll %target%
copy /Y %mainDir%Fonlow.OpenApiClientGen.NG2.dll %target%
copy /Y %mainDir%Fonlow.OpenApiClientGen.NG2FormGroup.dll %target%
