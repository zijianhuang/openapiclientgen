using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// Generated test cases for AWS APIs
	/// </summary>
	[Collection("NGBuildInSequence")]
	public partial class OpenapiDirectoryAwsTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public OpenapiDirectoryAwsTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output);
		}

	}
}