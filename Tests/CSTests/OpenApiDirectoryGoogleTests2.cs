using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class OpenapiDirectoryGoogleTests2
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryGoogleTests2(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}