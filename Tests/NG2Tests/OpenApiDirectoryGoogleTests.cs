using SwagTests;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// Generated test cases for Google APIs
	/// </summary>
	[Collection("NGBuildInSequence")]
	public partial class OpenapiDirectoryGoogleTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public OpenapiDirectoryGoogleTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output);
		}


	}
}