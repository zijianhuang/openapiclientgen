using Fonlow.OpenApiClientGen.ClientTypes;

using Xunit;
using Xunit.Abstractions;
using SwagTests;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagOpenApiDirTests
{
	[Collection("NGBuildInSequence")]
	public partial class ODAzureTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public ODAzureTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output, "swagger.yaml");
		}

	}
}