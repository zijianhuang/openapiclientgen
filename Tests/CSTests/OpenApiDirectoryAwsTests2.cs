using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class OpenapiDirectoryAwsTests2
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryAwsTests2(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}