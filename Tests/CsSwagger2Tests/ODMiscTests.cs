using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class ODMiscTests
	{
		readonly CSharpTestHelper helper;
		public ODMiscTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		[Fact]
		public void Test_bandsintown_com_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\bandsintown.com\3.0.0");
		}

		[Fact]
		public void Test_bbc_co_uk_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\bbc.co.uk\1.0.0");
		}

		[Fact]
		public void Test_etmdb_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\etmdb.com\1.0.0");
		}

		[Fact]
		public void Test_europeana_eu_2_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\europeana.eu\2.3.0");
		}

		[Fact]
		public void Test_evemarketer_com_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\evemarketer.com\1.0.1");
		}

		[Fact]
		public void Test_github_com_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\github.com\v3", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gitlab_com_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\gitlab.com\v3");
		}

		[Fact]
		public void Test_globalwinescore_com_8234aab51481d37a30757d925b7f4221a659427e()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\globalwinescore.com\8234aab51481d37a30757d925b7f4221a659427e");
		}

		[Fact]
		public void Test_graphhopper_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\graphhopper.com\1.0");
		}

		[Fact]
		public void Test_greenpeace_org_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\greenpeace.org\1.0.0");
		}

		[Fact]
		public void Test_gsa_gov_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\gsa.gov\0.1");
		}


	}
}
