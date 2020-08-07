using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit.Abstractions;
using Xunit;
namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class CodeGenNG2BuildTests
	{
		public CodeGenNG2BuildTests(ITestOutputHelper output)
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen), output);
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\ValuesPaths.json", "NG2BuildResults\\ValuesPaths.txt");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\PetDelete.json", "NG2BuildResults\\PetDelete.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\pet.yaml", "NG2BuildResults\\Pet.txt");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\petStore.yaml", "NG2BuildResults\\PetStore.txt");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\petStoreExpanded.yaml" , "NG2BuildResults\\PetStoreExpanded.txt");
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\uspto.yaml" , "NG2BuildResults\\Uspto.txt");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_account_v1_oas3.json", "NG2BuildResults\\sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_analytics_v1_oas3.yaml", "NG2BuildResults\\sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_compliance_v1_oas3.yaml", "NG2BuildResults\\sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_finances_v1_oas3.yaml", "NG2BuildResults\\sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_inventory_v1_oas3.yaml", "NG2BuildResults\\sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_listing_v1_beta_oas3.yaml", "NG2BuildResults\\sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_logistics_v1_oas3.json", "NG2BuildResults\\sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_negotiation_v1_oas3.yaml", "NG2BuildResults\\sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_marketing_v1_oas3.json", "NG2BuildResults\\sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_metadata_v1_oas3.json", "NG2BuildResults\\sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\sell_recommendation_v1_oas3.yaml", "NG2BuildResults\\sell_recommendation.txt");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\redocOpenApi200501.json", "NG2BuildResults\\redocOpenApi200501.txt");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero_accounting.yaml", "NG2BuildResults\\xero_accounting.txt");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero_assets.yaml", "NG2BuildResults\\xero_assets.txt");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero_bankfeeds.yaml", "NG2BuildResults\\xero_bankfeeds.txt");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero-payroll-au.yaml", "NG2BuildResults\\xero-payroll-au.txt");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero-identity.yaml", "NG2BuildResults\\xero-identity.txt");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndBuildAndAssert("SwagMock\\xero-payroll-uk.yaml", "NG2BuildResults\\xero-payroll-uk.txt");
		}

	}

}
