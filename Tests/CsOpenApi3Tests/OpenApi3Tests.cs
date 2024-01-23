using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using SwagTests;

namespace OpenApiDirTests
{
	public partial class OpenApi3Tests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		const string openDirName= "openapi-directory20240114";
		public OpenApi3Tests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

	}
}