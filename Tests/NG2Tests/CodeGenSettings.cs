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

				DataAnnotationsToComments = true,
				HandleHttpRequestHeaders = true,
			};
		}

		public static readonly bool BuildToValidate = false;
	}
}
