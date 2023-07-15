#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot\PetWebApi\bin\Debug\net7.0"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "$path\PetWebApi.dll"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs