using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using SwagTests;

namespace OpenApiDirTests
{
	public partial class OpenApi3Tests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenApi3Tests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}