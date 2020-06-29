using Fonlow.OpenApiClientGen.ClientTypes;

namespace SwagTests
{
	public static class CodeGenSettings
	{
		public static readonly Settings Default = new Settings()
		{
			ClientNamespace = "MyNS",
			ContainerClassName = "MyClient",
			ContainerNameStrategy = ContainerNameStrategy.None,
			ActionNameStrategy = ActionNameStrategy.Default,
			GenerateBothAsyncAndSync = true,
			UseEnsureSuccessStatusCodeEx = true,
			DataAnnotationsEnabled = true,
			DataAnnotationsToComments = true,
		};

		public static Settings WithActionNameStrategy(ActionNameStrategy ans)
		{
			return new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ans,
				GenerateBothAsyncAndSync = true,
				DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
			};
		}
	}
}
