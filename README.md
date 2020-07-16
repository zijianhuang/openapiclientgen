# OpenApiClientGen
Reading an Open API / Swagger YAML/JSON definition file, OpenApiClientGen generates strongly typed client API codes in C# and in TypeScript for Angular, Axios, Fetch API, Aurelia and jQuery.

This program is based on Fonlow.TypeScriptCodeDomCore and Fonlow.Poco2TsCore which are core components of [WebApiClientGen](https://github.com/zijianhuang/webapiclientgen), thus the codes generated share the same characteristics.

**Hints**

If you are using ASP.NET or ASP.NET Core to develop Web API and would support C# clients and TypeScript clients, WebApiClientGen may provide an alternative solution that covers what offered by Swashbuckle+NSwag. And in some contexts it is more efficient, effective and comprehensive to use WebApiClientGen in SDLC without involving Open API / Swagger YAML/JSON definitions.

## Installation
OpenApiClientGen is a .NET Core console app.

**Prerequisites**

* .NET Core 3.1.

**Remarks**

The generated C# codes could be built with .NET Frameworks in addition to .NET Core.

### Source Installation
Check out this repository or one of its tags, then do a release build or a Visual Stuido's Publish.

**Hints**

The plugin assemblies should be copied accordingly after a release build.

### Binary Download

Download the [zip files](https://github.com/zijianhuang/openapiclientgen/releases) and extract to a local folder.


## Code Generation

When running the program without valid parameters, you get some simple hints:
```
Parameter 1: Open API YAML/JSON definition file
Parameter 2: Settings file in JSON format.
Example:  
  Fonlow.OpenApiClientGen.exe my.yaml
  Fonlow.OpenApiClientGen.exe my.yaml myproj.json
  Fonlow.OpenApiClientGen.exe my.yaml ..\myproj.json
```

A typical CodeGen JSON file is like this ["DemoCodeGen.json"](https://github.com/zijianhuang/openapiclientgen/blob/master/DemoCodeGen.json):
```json
{
	"ClientNamespace": "My.Pet.Client",
	"ClientLibraryProjectFolderName": "./Tests/DemoClientApi",
	"ContainerClassName": "PetClient",
	"ClientLibraryFileName": "PetAuto.cs",
	"ActionNameStrategy": 4,
	"UseEnsureSuccessStatusCodeEx": true,
	"DecorateDataModelWithDataContract": true,
	"DataContractNamespace": "http://pet.domain/2020/03",
	"DataAnnotationsEnabled": true,
	"DataAnnotationsToComments": true,
	"HandleHttpRequestHeaders": true,

	"Plugins": [
		{
			"AssemblyName": "Fonlow.OpenApiClientGen.NG2",
			"TargetDir": "./ng2/src/clientapi",
			"TSFile": "ClientApiAuto.ts",
			"AsModule": true,
			"ContentType": "application/json;charset=UTF-8"
		}
	]

}
```

You may run the code generator through a batch file:
```batch
cd %~dp0
c:\green\OpenApiClientGen\Fonlow.OpenApiClientGen.exe some_service.yaml mycodegen.json
```

The JSON file is mapped to the following which describes each setting:
```c#
public class Settings
{
	/// <summary>
	/// The generated codes should be contained in a namespace. The default is My.Namespace.
	/// </summary>
	public string ClientNamespace { get; set; } = "My.Namespace";

	/// <summary>
	/// To compose client function name through removing path prefix. Typically / or /api. The default is /.
	/// The lenght of the prefix is used to remove path prefix. Applied when ActionNameStrategy is PathMethodQueryParameters.
	/// </summary>
	public string PathPrefixToRemove { get; set; } = "/";

	public ActionNameStrategy ActionNameStrategy { get; set; }

	/// <summary>
	/// The default is \w* for picking up alphanumeric words from some crikey operationIds through matching a list of words 
	/// which will be merged into a function name in Pascal or camel casing. 
	/// Applied when ActionNameStrategy is NorrmalizedOperationId.
	/// </summary>
	public string RegexForNormalizedOperationId { get; set; } = @"\w*";

	public ContainerNameStrategy ContainerNameStrategy { get; set; }

	/// <summary>
	/// Container class name when ContainerNameStrategy is None. The default is Misc.
	/// </summary>
	public string ContainerClassName { get; set; } = "Misc";

	/// <summary>
	/// Suffix of container class name if ContainerNameStrategy is not None. The default is "Client".
	/// </summary>
	public string ContainerNameSuffix { get; set; } = "Client";

	/// <summary>
	/// Assuming the client API project is the sibling of Web API project. Relative path to the WebApi project should be fine.
	/// </summary>
	public string ClientLibraryProjectFolderName { get; set; }

	/// <summary>
	/// The name of the CS file to be generated under client library project folder. The default is OpenApiClientAuto.cs.
	/// </summary>
	public string ClientLibraryFileName { get; set; } = "OpenApiClientAuto.cs";

	/// <summary>
	/// Generated data types will be decorated with DataContractAttribute and DataMemberAttribute.
	/// </summary>
	public bool DecorateDataModelWithDataContract { get; set; }

	/// <summary>
	/// When DecorateDataModelWithDataContract is true, this is the namespace of DataContractAttribute. For example, "http://mybusiness.com/09/2019
	/// </summary>
	public string DataContractNamespace { get; set; }

	public bool DecorateDataModelWithSerializable { get; set; }

	/// <summary>
	/// For .NET client, generate both async and sync functions for each Web API function
	/// </summary>
	public bool GenerateBothAsyncAndSync { get; set; }

	/// <summary>
	/// Replace EnsureSuccessStatusCode with EnsureSuccessStatusCodeEx for specific unsuccessful HTTP status handling, which throws YourClientWebApiRequestException.
	/// </summary>
	public bool UseEnsureSuccessStatusCodeEx { get; set; }


	/// <summary>
	/// System.ComponentModel.DataAnnotations attributes are to be copied over, including Required, Range, MaxLength, MinLength and StringLength. Applied to C# only.
	/// What defined in "default" of YAML will become the default value of respective property.
	/// </summary>
	public bool DataAnnotationsEnabled { get; set; }

	/// <summary>
	/// System.ComponentModel.DataAnnotations attributes are translated into Doc Comments, 
	/// including Required, Range, MaxLength, MinLength, StringLength, DataType and RegularExpression. Applied to C# and TypeScript.
	/// </summary>
	public bool DataAnnotationsToComments { get; set; }

	/// <summary>
	/// C# function parameters contain a callback to handle HTTP request headers
	/// </summary>
	public bool HandleHttpRequestHeaders { get; set; }

	public JSPlugin[] Plugins { get; set; }

}

public enum ActionNameStrategy
{
	/// <summary>
	/// Either OperationId or MethodQueryParameters
	/// </summary>
	Default = 0,

	OperationId = 1,

	/// <summary>
	/// Compose something like GetSomeWhereById1AndId2. Generally used with ContainerNameStrategy.Path
	/// </summary>
	MethodQueryParameters = 2,

	PathMethodQueryParameters = 3,

	/// <summary>
	/// According to Open API specification, it is RECOMMENDED that the naming of operationId follows common programming naming conventions. 
	/// However, some YAML may name operationId after a valid function name. For example, "list-data-sets", "Search by name" or "SearchByName@WkUld". 
	/// Regular expression (regex) may be needed to pick up alphanumeric words from such operationId and create a valid function name.
	/// The default RegexForNormalizedOperationId is /w*.
	/// </summary>
	NormalizedOperationId = 4,
}

public enum ContainerNameStrategy
{
	/// <summary>
	/// All client functions will be constructed in a god class named after ContainerClassName
	/// </summary>
	None,

	/// <summary>
	/// Use tags
	/// </summary>
	Tags,

	/// <summary>
	/// Use path as resource for grouping, as a container class name.
	/// </summary>
	Path,
}

public class JSPlugin
{
	/// <summary>
	/// Assembly file name without extension dll and dir. The assembly file should be in the same directory of the main program.
	/// </summary>
	public string AssemblyName { get; set; }

	public string TargetDir { get; set; }

	public string TSFile { get; set; }

	///// <summary>
	///// HTTP content type used in POST of HTTP of NG2. so text/plain could be used to avoid preflight in CORS.
	///// </summary>
	public string ContentType { get; set; }

	/// <summary>
	/// True to have "export namespace"; false to have "namespace". jQuery wants "namespace".
	/// </summary>
	public bool AsModule { get; set; }
}
```



## Examples of Generated Codes

OpenApiClientGen had been tested upon over 1000 Open API definitions in v3 formats and in v2 formats.

* [Open API definitions in YAML or JSON](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/SwagMock)
* [Generated C# codes](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/Results) and [Integration Tests](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagApiTests) for [Client API codes generated](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/DemoClientApi/PetAuto.cs) from [pet.yaml](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/DemoClientApi/pet.yaml)
* [Generated TypeScript codes for Angular 5+](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/NG2Results) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/ng2/src)
* [Generated TypeScript codes for Aurelia](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/AureliaResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/aurelia/src)
* [Generated TypeScript codes for AXIOS](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/AxiosResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/axios/src)
* [Generated TypeScript codes for Fetch API](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/FetchResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/fetchapi/src)
* [Generated TypeScript codes for jQuery](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/JqResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/jq/src)

## [Comparison with NSwag](https://github.com/zijianhuang/openapiclientgen/wiki/Comparison-with-NSwag)
