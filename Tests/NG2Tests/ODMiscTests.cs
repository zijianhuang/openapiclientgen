﻿using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using SwagTests;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagOpenApiDirTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public partial class ODMiscTests
	{
		readonly NG2OpenApiDirTestHelper helper;
		public ODMiscTests(ITestOutputHelper output)
		{
			helper = new NG2OpenApiDirTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output,
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true),
			(int expected, int actual) => Assert.Equal(expected, actual), "swagger.yaml");
		}
	}
}
