using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class OpenapiDirectoryAwsTests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryAwsTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}