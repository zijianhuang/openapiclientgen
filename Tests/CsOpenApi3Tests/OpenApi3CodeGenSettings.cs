using Fonlow.OpenApiClientGen.ClientTypes;

namespace SwagTests
{
	public static class OpenApi3CodeGenSettings
	{
		public static readonly ISettings Default = new Settings()
		{
			ClientNamespace = "MyNS",
			PathPrefixToRemove = "/api",
			ContainerClassName = "Misc",
			ContainerNameStrategy = ContainerNameStrategy.None,
			ActionNameStrategy = ActionNameStrategy.Default,
			DataContractNamespace = "http://fonlow.com/TestOpenApi/2024/01",
			DecorateDataModelWithDataContract = true, // good for property names invalid in C#
			GenerateBothAsyncAndSync = false,
			UseEnsureSuccessStatusCodeEx = true,
			DataAnnotationsEnabled = true,
			DataAnnotationsToComments = true,
			UseSystemTextJson = false,
		};

		public static ISettings WithActionNameStrategy(ActionNameStrategy ans)
		{
			return new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.None,
				DataContractNamespace = "http://fonlow.com/TestOpenApi/2024/01",
				DecorateDataModelWithDataContract = true, // good for property names invalid in C#
				ActionNameStrategy = ans,
				GenerateBothAsyncAndSync = false,
				DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
				UseSystemTextJson = false
			};
		}
	}
}
