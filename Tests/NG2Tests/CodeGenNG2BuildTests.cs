using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("NGBuildInSequence")]
	public class CodeGenNG2BuildTests
	{
		public CodeGenNG2BuildTests(ITestOutputHelper output)
		{
			helper = new NG2TestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen), output, CodeGenSettings.BuildToValidate);
		}

		readonly NG2TestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\ValuesPaths.json", "NG2BuildResults\\ValuesPaths.ts");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\PetDelete.json", "NG2BuildResults\\PetDelete.ts");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "NG2BuildResults\\Pet.ts");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petStore.yaml", "NG2BuildResults\\PetStore.ts");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petStoreExpanded.yaml", "NG2BuildResults\\PetStoreExpanded.ts");
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\uspto.yaml", "NG2BuildResults\\Uspto.ts");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_account_v1_oas3.json", "NG2BuildResults\\sell_account.ts");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_analytics_v1_oas3.yaml", "NG2BuildResults\\sell_analytics.ts");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_compliance_v1_oas3.yaml", "NG2BuildResults\\sell_compliance.ts");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_finances_v1_oas3.yaml", "NG2BuildResults\\sell_finances.ts");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_inventory_v1_oas3.yaml", "NG2BuildResults\\sell_inventory.ts");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_listing_v1_beta_oas3.yaml", "NG2BuildResults\\sell_listing.ts");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_logistics_v1_oas3.json", "NG2BuildResults\\sell_logistics.ts");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_negotiation_v1_oas3.yaml", "NG2BuildResults\\sell_negotiation.ts");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_marketing_v1_oas3.json", "NG2BuildResults\\sell_marketing.ts");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_metadata_v1_oas3.json", "NG2BuildResults\\sell_metadata.ts");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_recommendation_v1_oas3.yaml", "NG2BuildResults\\sell_recommendation.ts");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\redocOpenApi200501.json", "NG2BuildResults\\redocOpenApi200501.ts");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_accounting.yaml", "NG2BuildResults\\xero_accounting.ts");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_assets.yaml", "NG2BuildResults\\xero_assets.ts");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_bankfeeds.yaml", "NG2BuildResults\\xero_bankfeeds.ts");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-payroll-au.yaml", "NG2BuildResults\\xero-payroll-au.ts");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-identity.yaml", "NG2BuildResults\\xero-identity.ts");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-payroll-uk.yaml", "NG2BuildResults\\xero-payroll-uk.ts");
		}

		//[Fact]
		//public void TestMcp()
		//{
		//	helper.GenerateAndAssertAndBuild("SwagMock\\mcp.yaml", "NG2BuildResults\\mcp.ts", new Settings()
		//	{
		//		ClientNamespace = "MyNS",
		//		ContainerClassName = "MyClient", //the TestBed requires this containerClassName
		//		ContainerNameStrategy = ContainerNameStrategy.None,
		//		ActionNameStrategy = ActionNameStrategy.Default,
		//		DataAnnotationsToComments = true,
		//		EnumToString = true,
		//	});
		//}

		//[Fact]
		//public void TestMcpAir()
		//{
		//	helper.GenerateAndAssertAndBuild("SwagMock\\AirOne.yaml", "NG2BuildResults\\air.ts", new Settings()
		//	{
		//		ClientNamespace = "MyNS",
		//		ContainerClassName = "MyClient", //the TestBed requires this containerClassName
		//		ContainerNameStrategy = ContainerNameStrategy.None,
		//		ActionNameStrategy = ActionNameStrategy.Default,
		//		DataAnnotationsToComments = true,
		//		EnumToString = true,
		//	});
		//}


	}

}
