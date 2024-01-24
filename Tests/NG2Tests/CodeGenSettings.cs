using Fonlow.OpenApiClientGen.ClientTypes;

namespace SwagTests
{
	public static class CodeGenSettings
	{
		public static readonly ISettings Default = new Settings()
		{
			ClientNamespace = "MyNS",
			ContainerClassName = "MyClient",
			ContainerNameStrategy = ContainerNameStrategy.None,
			ActionNameStrategy = ActionNameStrategy.Default,
			DataAnnotationsToComments = true,
		};

		public static ISettings WithActionNameStrategy(ActionNameStrategy ans)
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
	}
}
