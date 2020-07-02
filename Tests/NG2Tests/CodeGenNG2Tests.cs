using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	[Collection("NGBuildInSequence")]
	public class CodeGenNG2Tests
	{
		public CodeGenNG2Tests(ITestOutputHelper output)
		{
			helper = new TsTestHelper(output);
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.CreateClientApiAndBuild("SwagMock\\ValuesPaths.json");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.CreateClientApiAndBuild("SwagMock\\PetDelete.json");
		}

		[Fact]
		public void TestPet()
		{
			helper.CreateClientApiAndBuild("SwagMock\\pet.yaml");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.CreateClientApiAndBuild("SwagMock\\petStore.yaml");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_account_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_analytics_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_compliance_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_finances_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_inventory_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_listing_v1_beta_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_logistics_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_negotiation_v1_oas3.yaml");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_marketing_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_metadata_v1_oas3.json");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.CreateClientApiAndBuild("SwagMock\\sell_recommendation_v1_oas3.yaml");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.CreateClientApiAndBuild("SwagMock\\redocOpenApi200501.json");
		}
	}

}
