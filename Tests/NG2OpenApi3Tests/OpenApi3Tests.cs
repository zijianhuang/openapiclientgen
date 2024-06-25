using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using SwagTests;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace OpenApiDirTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public partial class OpenApi3Tests
	{
		readonly IOpenApiDirTestHelper helper; 
		const string openDirName= "openapi-directory20240114";
		public OpenApi3Tests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output,
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true),
			(int expected, int actual) => Assert.Equal(expected, actual));
		}
	}
}