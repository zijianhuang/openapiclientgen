using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// Generated test cases for various APIs, some of which need special ActionNameStrategy.
	/// </summary>
	[Collection("NGBuildInSequence")]
	public partial class OpenapiDirectoryTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public OpenapiDirectoryTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output);
		}

	}
}