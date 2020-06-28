using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class CodeGenNG2Tests
	{
		public CodeGenNG2Tests()
		{
			helper = new TsTestHelper();
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.CreateClientApi("SwagMock\\ValuesPaths.json");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.CreateClientApi("SwagMock\\PetDelete.json");
		}

		[Fact]
		public void TestPet()
		{
			helper.CreateClientApi("SwagMock\\pet.yaml");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.CreateClientApi("SwagMock\\petStore.yaml");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.CreateClientApi("SwagMock\\sell_account_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.CreateClientApi("SwagMock\\sell_analytics_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.CreateClientApi("SwagMock\\sell_compliance_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.CreateClientApi("SwagMock\\sell_finances_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.CreateClientApi("SwagMock\\sell_inventory_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.CreateClientApi("SwagMock\\sell_listing_v1_beta_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.CreateClientApi("SwagMock\\sell_logistics_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.CreateClientApi("SwagMock\\sell_negotiation_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.CreateClientApi("SwagMock\\sell_marketing_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.CreateClientApi("SwagMock\\sell_metadata_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.CreateClientApi("SwagMock\\sell_recommendation_v1_oas3.yaml");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.CreateClientApi("SwagMock\\redocOpenApi200501.json");
		}
	}

}
