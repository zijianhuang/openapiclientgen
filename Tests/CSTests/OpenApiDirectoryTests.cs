using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public partial class OpenapiDirectoryTests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public OpenapiDirectoryTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "openapi.yaml");
		}

		string GenerateFromOpenApiAndBuildWithError(string filePath, Settings mySettings = null)
		{
			Settings settings = mySettings ?? CodeGenSettings.Default;
			return helper.GenerateFromOpenApiAndBuildWithError(filePath, settings);
		}

		[Fact]
		public void Test_vimeoWithError()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.UseNullableReferenceType = true;
			var errorText = GenerateFromOpenApiAndBuildWithError(@"..\..\..\..\openapi-directory\APIs\vimeo.com\3.4", settings);
			Assert.Contains("warning CS8669", errorText);
			Assert.Contains("error CS0453", errorText);
		}


	}
}