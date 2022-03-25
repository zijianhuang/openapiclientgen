namespace Fonlow.OpenApiClientGen.ClientTypes
{
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
		/// For date type, generate DateOnly property. Default true. If false, generate DateTimeOffset decorated by System.ComponentModel.DataAnnotations.DataTypeAttribute(System.ComponentModel.DataAnnotationsDataType.Date)
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
		/// Meta for plugins that generate TypeScript/JavaScript codes.
		/// </summary>
		public JSPlugin[] Plugins { get; set; }
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
}
