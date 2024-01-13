using Fonlow.OpenApiClientGen.ClientTypes;

using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class MiscSwaggerTests
	{
		[Fact(Skip = "duplicat field names in inheritance")]
		public void Test_AtoGovAu()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\ato.gov.au\0.0.6");
		}

		[Fact()]
		public void Test_Flickr()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\flickr.com\1.0.0");
		}

		[Fact(Skip ="it has enum as something like '408', '429'")]
		public void Test_HSBC()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\hsbc.com\1.0.0");
		}

		[Fact()]
		public void Test_instagram()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\instagram.com\1.0.0", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="working on yaml 3.0 is OK. 2.0 has problem")]
		public void Test_MozillaKinto()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\mozilla.com\kinto\1.22");
		}

	}
}