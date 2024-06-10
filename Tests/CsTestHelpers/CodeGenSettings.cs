using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.OpenApiClientGen.TestHelpers
{
	public static class CodeGenSettings
	{
		public static readonly ISettings Default = WithActionNameStrategy(ActionNameStrategy.Default);

		public static ISettings WithActionNameStrategy(ActionNameStrategy ans)
		{
			return new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ans,
				GenerateBothAsyncAndSync = false,
				DecorateDataModelWithSerializable = true,
				DecorateDataModelWithDataContract = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
				EnumToString = true,
			};
		}
	}
}
