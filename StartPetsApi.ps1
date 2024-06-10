#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot/PetWebApi"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "run --project $path/PetWebApi.csproj --no-build"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs