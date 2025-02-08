using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)] //CodeGen is not thread safe
	public class CodeGenAureliaTests
	{
		public CodeGenAureliaTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsAureliaClientApiGen), TestingSettings.Instance,
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true));
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssert("SwagMock/ValuesPaths.json", "AureliaResults/ValuesPaths.ts");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssert("SwagMock/PetDelete.json", "AureliaResults/PetDelete.ts");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "AureliaResults/Pet.ts");
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "AureliaResults/PetPathAsContainer.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.MethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.Path,
			
			});
		}

		[Fact]
		public void TestPetWithGodContainerAndPathAction()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml" , "AureliaResults/PetGodClass.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
			
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssert("SwagMock/petByStatus.yaml", "AureliaResults/PetFindByStatus.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateAndAssert("SwagMock/petStore.yaml", "AureliaResults/PetStore.ts");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock/petStoreExpanded.yaml" , "AureliaResults/PetStoreExpanded.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
			});
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssert("SwagMock/uspto.yaml" , "AureliaResults/Uspto.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				

			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssert("SwagMock/mcp.yaml", "AureliaResults/mcp.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "McpClient",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.None,
				PathPrefixToRemove = "/mcp",
			});
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateAndAssert("SwagMock/sell_account_v1_oas3.json", "AureliaResults/sell_account.ts");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssert("SwagMock/sell_analytics_v1_oas3.yaml", "AureliaResults/sell_analytics.ts");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssert("SwagMock/sell_compliance_v1_oas3.yaml", "AureliaResults/sell_compliance.ts");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssert("SwagMock/sell_finances_v1_oas3.yaml", "AureliaResults/sell_finances.ts");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssert("SwagMock/sell_inventory_v1_oas3.yaml", "AureliaResults/sell_inventory.ts");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssert("SwagMock/sell_listing_v1_beta_oas3.yaml", "AureliaResults/sell_listing.ts");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssert("SwagMock/sell_logistics_v1_oas3.json", "AureliaResults/sell_logistics.ts");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssert("SwagMock/sell_negotiation_v1_oas3.yaml", "AureliaResults/sell_negotiation.ts");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssert("SwagMock/sell_marketing_v1_oas3.json", "AureliaResults/sell_marketing.ts");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssert("SwagMock/sell_metadata_v1_oas3.json", "AureliaResults/sell_metadata.ts");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssert("SwagMock/sell_recommendation_v1_oas3.yaml", "AureliaResults/sell_recommendation.ts");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssert("SwagMock/redocOpenApi200501.json", "AureliaResults/redocOpenApi200501.ts");
		}
	}

}
