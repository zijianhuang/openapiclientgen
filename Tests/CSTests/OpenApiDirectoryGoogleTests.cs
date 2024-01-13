using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class OpenapiDirectoryGoogleTests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryGoogleTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}