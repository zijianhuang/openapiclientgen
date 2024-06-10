# after buildRelease of the sln
cd $PSScriptRoot
$target="../Release/MacSelfContained"
$mainDir="bin/Release/net7.0/"

Remove-Item -Recurse $target*

dotnet publish -r osx-x64 --output $target --configuration release --self-contained true

Write-Output $mainDir
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.Aurelia.dll" -Destination $target
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.Axios.dll" -Destination $target
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.Fetch.dll" -Destination $target
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.JQ.dll" -Destination $target
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.NG2.dll" -Destination $target
Copy-Item "$($mainDir)Fonlow.OpenApiClientGen.NG2FormGroup.dll" -Destination $target
