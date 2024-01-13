using Fonlow.OpenApiClientGen.ClientTypes;

using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("NGBuildInSequence")]
	public partial class MiscSwaggerTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public MiscSwaggerTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output, "swagger.yaml");
		}

	}
}