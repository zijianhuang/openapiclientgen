using Fonlow.OpenApiClientGen.ClientTypes;

namespace SwagTests
{
	public static class CodeGenSettings
	{
		public static readonly Settings Default = new()
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
		};

		public static Settings WithActionNameStrategy(ActionNameStrategy ans)
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
			};
		}
	}
}
