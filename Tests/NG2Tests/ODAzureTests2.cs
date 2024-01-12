using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("NGBuildInSequence")]
	public partial class ODAzureTests2
	{
		readonly NG2OpenApiDirTestHelper helper;
		public ODAzureTests2(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output, "swagger.yaml");
		}
	}
}
