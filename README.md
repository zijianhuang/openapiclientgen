# Strongly Typed OpenAPI Client Generators
Reading an OpenAPI / Swagger YAML/JSON definition file, OpenApiClientGen generates strongly typed client API codes in C# and in TypeScript for Angular, Axios, Fetch API, Aurelia and jQuery, as well as Angular strictly typed reactive forms.

This program is based on Fonlow.TypeScriptCodeDomCore and Fonlow.Poco2TsCore which are core components of [WebApiClientGen](https://github.com/zijianhuang/webapiclientgen), thus the codes generated share similar characteristics.

Generated TypeScript codes conform to the [TypeScript strict mode](https://www.typescriptlang.org/tsconfig#strict), and the generated Angular 2+ codes conform to the [Angular strict mode](https://angular.io/guide/strict-mode).

**Hints**

If you are using ASP.NET or ASP.NET Core to develop Web API and would support C# clients and TypeScript clients, WebApiClientGen may provide an alternative solution that covers what offered by Swashbuckle+NSwag. And in some contexts it is more efficient, effective and comprehensive to use WebApiClientGen in SDLC without involving Open API / Swagger YAML/JSON definitions.

## Examples of Generated Codes

OpenApiClientGen had been tested upon over 2,000 Open API definitions in v3 formats and in v2 formats.

*  [pet.yaml](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/DemoClientApi/pet.yaml), [C# Client API codes generated](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/DemoClientApi/PetAuto.cs) of client API lib, and   [Integration Tests](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagApiTests).
* [Generated TypeScript codes for Angular 5+](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/SwagTsTests/NG2Results/) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/ng2/src)
* [Generated TypeScript codes for Angular Reactive Typed Forms](https://github.com/zijianhuang/openapiclientgen/blob/master/Tests/SwagTsTests/NG2FormGroupResults) 
* [Generated TypeScript codes for Aurelia](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/AureliaResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/aurelia/src)
* [Generated TypeScript codes for AXIOS](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/AxiosResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/axios/src)
* [Generated TypeScript codes for Fetch API](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/FetchResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/fetchapi/src)
* [Generated TypeScript codes for jQuery](https://github.com/zijianhuang/openapiclientgen/tree/master/Tests/SwagTests/JqResults) and [integration tests for pet.yaml](https://github.com/zijianhuang/openapiclientgen/tree/master/jq/src)

## Data Mappings

This section describes only mappings for simple and primitive types in OpenAPI definition, C# and TypeScript.

### To C# Codes

```c#
static readonly Dictionary<string, Type> basicClrTypeDic = new()
{
	{"integer_int32", typeof(int) },
	{"integer_int64", typeof(long) },
	{"integer", typeof(int) },
	{"integer_uint32", typeof(uint) },
	{"number_float", typeof(float) },
	{"number_double", typeof(double) },
	{"number_decimal", typeof(decimal) },
	{"number", typeof(double) }, //C# by default use double for number literal
	{"string", typeof(string) },
	{"boolean", typeof(bool) },
	{"string_date", typeof(DateOnly) },
	{"string_date-time", typeof(DateTimeOffset) },
};
```

### To TypeScript Codes

```c#
static readonly Dictionary<string, string> basicTsTypeDic = new()
{
	{"integer_int32", "number" },
	{"integer_int64", "number" },
	{"integer", "number" },
	{"integer_uint32", "number" },
	{"number_float", "number" },
	{"number_double", "number" },
	{"number_decimal", "number" },
	{"number", "number" },
	{"string", "string" },
	{"boolean", "boolean" },
	{"string_date", "Date" },
	{"string_date-time", "Date" },
};
```

And "integer_int64" is actually mapped to "string" because JS supports integral precision up to 53 bits.

**References:**
* [Dealing with Large Integral Numbers in JavaScript for Integral Types of ASP.NET Core Web API](https://www.codeproject.com/Articles/5377807/Dealing-with-Large-Integral-Numbers-in-JavaScript)

## Validation Mappings

### OpenAPI validation to .NET validation

| Schema | .NET Attribute |
| ------ | ---- |  
| MinLength | MinLength |
| MaxLength | MaxLength |
| MinLength + MaxLength | Length |
| Minimum, Maximum | Range(min, max) or Range(TypeFullName, min, max) |
| MinItems | MinLength |
| MaxItems | MaxLength |
| MinItems + MaxItems | Length |
| Pattern | RegularExpression |

### OpenAPI validation to Angular Reactive Forms Validation

| Schema | Angular Reactive Forms Validation |
| ----- | ---- |
| Required | required |
| MinLength, MaxLength, MinItems, MaxItems | minLength, maxLength |
| Minimum, Maximum | min, max |
| Pattern | pattern |

## Installation
OpenApiClientGen is a .NET Core console app.

**Prerequisites**

* .NET 8 (since v3.2)

**Remarks**

* The generated C# codes could be built with .NET Frameworks in addition to .NET.


### Source Installation
Check out this repository or one of its tags, then do a release build or a Visual Studio's Publish.

**Hints**

The plugin assemblies should be copied accordingly after a release build.

### Binary Download

Download one the [zip files](https://github.com/zijianhuang/openapiclientgen/releases) of the releases and extract to a local folder. The console app includes the following plugins for JavaScript/TypeScript libs or frameworks:

* Fonlow.OpenApiClientGen.Aurelia
* Fonlow.OpenApiClientGen.Axios
* Fonlow.OpenApiClientGen.Fetch
* Fonlow.OpenApiClientGen.JQ
* Fonlow.OpenApiClientGen.NG2
* Fonlow.OpenApiClientGen.NG2FormGroup


#### MacOS
If you are using Mac OS or Linux for development, you may use "dotnet publish", for example:

`dotnet publish -r osx-x64 --output %target% --configuration release --self-contained false`

Under folder "Fonlow.OpenApiClienGen", there are 2 batch files to build a release for MacOS:
* BuildForMac.bat
* BuildForMacSelfContained.bat

On Mac, you may run 

```dotnet Fonlow.OpenApiClientGen.dll my.yaml codegen.json```

or 

```./Fonlow.OpenApiClientGen my.yaml codegen.json```

After running `chmod 755 Fonlow.OpenApiClientGen` once.

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

### Settings

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

The JSON file is mapped to the following [C# codes](https://github.com/zijianhuang/openapiclientgen/blob/master/Fonlow.OpenApiClientGen.ClientTypes/Settings.cs) which describes each setting:
```c#
	public class Settings : ISettings
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
		/// Assuming the client API project is the sibling of Web API project. Relative path to the WebApi project should be fine. C# only.
		/// </summary>
		public string ClientLibraryProjectFolderName { get; set; }

		/// <summary>
		/// The name of the CS file to be generated under client library project folder. The default is OpenApiClientAuto.cs.
		/// </summary>
		public string ClientLibraryFileName { get; set; } = "OpenApiClientAuto.cs";

		/// <summary>
		/// Generated data types will be decorated with DataContractAttribute and DataMemberAttribute in C#.
		/// </summary>
		public bool DecorateDataModelWithDataContract { get; set; }

		/// <summary>
		/// When DecorateDataModelWithDataContract is true, this is the namespace of DataContractAttribute. For example, "http://mybusiness.com/09/2019
		/// </summary>
		public string DataContractNamespace { get; set; }

		/// <summary>
		/// Serialize enum to string. For C#, effective if DecorateDataModelWithDataContract is true, and the enum type is decorated by
		/// [JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))] or [System.Text.Json.Serialization.JsonConverter(typeof(System.Text.Json.Serialization.JsonStringEnumConverter))].
		/// For TypeScript, the output is string enums.
		/// </summary>
		public bool EnumToString { get; set; }

		/// <summary>
		/// Decorate the Data Model with the System.SerializableAttribute attribute
		/// </summary>
		public bool DecorateDataModelWithSerializable { get; set; }

		/// <summary>
		/// For .NET client, generate both async and sync functions for each Web API function. When false, only async.
		/// </summary>
		public bool GenerateBothAsyncAndSync { get; set; }

		/// <summary>
		/// Replace EnsureSuccessStatusCode with EnsureSuccessStatusCodeEx for specific unsuccessful HTTP status handling, which throws YourClientWebApiRequestException.
		/// </summary>
		public bool UseEnsureSuccessStatusCodeEx { get; set; }

		/// <summary>
		/// Default  is true so the code block is included in the generated codes.
		/// Defined if UseEnsureSuccessStatusCodeEx is true. Respective code block will be included the code gen output. However, if you have a few client APIs generated to be used in the same application,
		/// and you may want these client APIs share the same code block, then put the WebApiRequestException code block to an assembly or a standalone CS file.
		/// </summary>
		public bool IncludeEnsureSuccessStatusCodeExBlock { get; set; } = true;

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
		/// Function parameters contain a callback to handle HTTP request headers
		/// </summary>
		public bool HandleHttpRequestHeaders { get; set; }

		/// <summary>
		/// Allow cancellation in Send
		/// </summary>
		public bool CancellationTokenEnabled { get; set; }

		/// <summary>
		/// Use System.Text.Json instead of Newtonsoft.Json
		/// </summary>
		public bool UseSystemTextJson { get; set; }

		/// <summary>
		/// For date type, generate DateOnly property. Default true. If false, generate DateTimeOffset decorated by System.ComponentModel.DataAnnotations.DataTypeAttribute(System.ComponentModel.DataAnnotations.DataType.Date)
		/// </summary>
		public bool DateToDateOnly { get; set; } = true;

		/// <summary>
		/// Generated data types will be decorated with System.Text.Json.Serialization.JsonPropertyNameAttribute or Newtonsoft.Json.JsonPropertyAttribute with the original property name defined in YAML.
		/// </summary>
		public bool DecorateDataModelWithPropertyName { get; set; }

		/// <summary>
		/// OpenApClinetGen declares all value type properties including enum properties as nullable by default in generated C#, and all properties as nullable by default in generated TypeScript codes, unless the property is required. 
		/// This is to prevent serializer from creating payload for properties not assigned.  
		/// There might be situations in which you don't want such default features and want the codegen to respect OpenApi v3 option nullable. Then turn this setting to true, which affects generated C# codes only.
		/// Please note, Some Open API definition files do not define nullable for some premitive types and enum, however, the respective backends do not expect some properties presented in the payload of the request.
		/// therefore you need to build some integration test suites to find out what the backend would like.
		/// If the YAML file defines a reference type property as nullable, the codegen ignores this setting since in C# a nullable reference type property is invalid, unless you set UseNullableReferenceType to true.
		/// </summary>
		public bool DisableSystemNullableByDefault { get; set; }

		/// <summary>
		/// Use T? instead of System.Nullable<T> for value types, while by default System.Nullable<T> is used. C# 2.0 feature
		/// </summary>
		public bool UseNullableQuestionMark { get; set; }

		/// <summary>
		/// Use T? for reference types. C# 8.0 feature: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types
		/// https://docs.microsoft.com/en-us/dotnet/csharp/nullable-migration-strategies: The global nullable context does not apply for generated code files.
		/// Therefore it is up to you application programmers to make the compiler recognize the generated file is not of generated codes.
		/// Check test case: Test_vimeo()
		/// </summary>
		public bool UseNullableReferenceType { get; set; }

		/// <summary>
		/// Create the Model classes only
		/// </summary>
		public bool GenerateModelsOnly { get; set; }

		/// <summary>
		/// Use Guid for format:uuid specifier, defaults to string.
		/// </summary>
		public bool UseGuid { get; set; }

		/// <summary>
		/// By default, array type will be array in generated C#. You may generated IEnumerable and some of its derived types.
		/// </summary>
		public ArrayAsIEnumerableDerived ArrayAs { get; set; }

		/// <summary>
		/// Use pascal case for properties and model class names
		/// </summary>
		public bool UsePascalCase { get; set; }

		/// <summary>
		/// Prefix class names with enclosing Type name. Default True.
		/// </summary>
		public bool PrefixWithTypeName { get; set; } = true;

		/// <summary>
		/// Create destination folder if not exists. Applied to both CS and TS.
		/// </summary>
		public bool CreateFolder { get; set; }

		/// <summary>
		/// Type name with dots will have the dotted segments become namespace. APIs\presalytics.io\ooxml\0.1.0 has this, with namespace and type name collisions.
		/// </summary>
		public bool DotsToNamespaces { get; set; }

		/// <summary>
		/// When generating codes, sort types, member properties and methods by alphabetic order.
		/// </summary>
		public bool SortTypesMembersAndMethods { get; set; }

		/// <summary>
		/// Meta for plugins that generate TypeScript/JavaScript codes.
		/// </summary>
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
		None = 0,

		/// <summary>
		/// Use tags
		/// </summary>
		Tags = 1,

		/// <summary>
		/// Use path as resource for grouping, as a container class name.
		/// </summary>
		Path = 2,
	}

	public enum ArrayAsIEnumerableDerived
	{
		Array = 0,

		IEnumerable = 1,
		IList = 2,
		ICollection = 3,
		IReadOnlyList = 4,
		IReadOnlyCollection = 5,

		List = 6,
		Collection = 7,
		ReadOnlyCollection = 8,
	}

	/// <summary>
	/// A DTO class, not part of the CodeGen.json 
	/// </summary>
	public class JSOutput
	{
		public string JSPath { get; set; }

		public bool AsModule { get; set; }

		///// <summary>
		///// HTTP content type used in POST of HTTP of NG2. so text/plain could be used to avoid preflight in CORS.
		///// </summary>
		public string ContentType { get; set; }
	}

	public class JSPlugin
	{
		/// <summary>
		/// Assembly file name without extension dll and dir. The assembly file should be in the same directory of the main program.
		/// </summary>
		public string AssemblyName { get; set; }

		/// <summary>
		/// Related path or absolute path. It is recommended to use slash / to sepparate. If you use backlash \, \\ should be used.
		/// </summary>
		public string TargetDir { get; set; }

		/// <summary>
		/// Generated TS file name. For example, MyNgClientAuto.ts
		/// </summary>
		public string TSFile { get; set; }

		///// <summary>
		///// HTTP content type used in POST of HTTP of NG2. For example, "application/json;charset=UTF-8".
		///// </summary>
		public string ContentType { get; set; }

		/// <summary>
		/// True to have "export namespace"; false to have "namespace". jQuery wants "namespace" while Angular 2+ wants "export namespace".
		/// </summary>
		public bool AsModule { get; set; }
	}

```

For more details, especially the contexts of using these settings, please check [Settings Explained](https://github.com/zijianhuang/openapiclientgen/wiki/Settings-Explained).

## Comparison with NSwag

* [Quick Comparison](https://github.com/zijianhuang/openapiclientgen/wiki/Comparison-with-NSwag)
* [Detailed Comparison](https://github.com/zijianhuang/OpenApiExamples/wiki)

## Articles

In addition to Wiki, please refer to these articles:


* [OpenApiClientGen to Generate Strongly Typed Client API Codes Based on Open API Definitions](https://www.codeproject.com/Articles/5262184/OpenApiClientGen-to-Generate-Strongly-Typed-Client)
* [Generate Typed Forms of Angular Reactive Forms from Swagger / OpenAPI definitions](https://www.codeproject.com/Articles/5375552/Generate-Typed-Forms-of-Angular-Reactive-Forms-fro)