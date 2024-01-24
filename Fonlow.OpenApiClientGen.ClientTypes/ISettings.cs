namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public interface ISettings
	{
		ActionNameStrategy ActionNameStrategy { get; set; }
		ArrayAsIEnumerableDerived ArrayAs { get; set; }
		bool CancellationTokenEnabled { get; set; }
		string ClientLibraryFileName { get; set; }
		string ClientLibraryProjectFolderName { get; set; }
		string ClientNamespace { get; set; }
		string ContainerClassName { get; set; }
		ContainerNameStrategy ContainerNameStrategy { get; set; }
		string ContainerNameSuffix { get; set; }
		bool CreateFolder { get; set; }
		bool DataAnnotationsEnabled { get; set; }
		bool DataAnnotationsToComments { get; set; }
		string DataContractNamespace { get; set; }
		bool DateToDateOnly { get; set; }
		bool DecorateDataModelWithDataContract { get; set; }
		bool DecorateDataModelWithPropertyName { get; set; }
		bool DecorateDataModelWithSerializable { get; set; }
		bool DisableSystemNullableByDefault { get; set; }
		bool DotsToNamespaces { get; set; }
		bool EnumToString { get; set; }
		bool GenerateBothAsyncAndSync { get; set; }
		bool GenerateModelsOnly { get; set; }
		bool HandleHttpRequestHeaders { get; set; }
		bool IncludeEnsureSuccessStatusCodeExBlock { get; set; }
		string PathPrefixToRemove { get; set; }
		JSPlugin[] Plugins { get; set; }
		bool PrefixWithTypeName { get; set; }
		string RegexForNormalizedOperationId { get; set; }
		bool UseEnsureSuccessStatusCodeEx { get; set; }
		bool UseGuid { get; set; }
		bool UseNullableQuestionMark { get; set; }
		bool UseNullableReferenceType { get; set; }
		bool UsePascalCase { get; set; }
		bool UseSystemTextJson { get; set; }
	}
}