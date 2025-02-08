using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public class CodeGenJqTests
	{
		public CodeGenJqTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsJqClientApiGen), TestingSettings.Instance,
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true));
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssert("SwagMock/ValuesPaths.json", "JqResults/ValuesPaths.ts");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssert("SwagMock/PetDelete.json", "JqResults/PetDelete.ts");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "JqResults/Pet.ts");
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "JqResults/PetPathAsContainer.ts", new Settings()
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
			helper.GenerateAndAssert("SwagMock/pet.yaml" , "JqResults/PetGodClass.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
			
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssert("SwagMock/petByStatus.yaml", "JqResults/PetFindByStatus.ts", new Settings()
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
			helper.GenerateAndAssert("SwagMock/petStore.yaml", "JqResults/PetStore.ts");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock/petStoreExpanded.yaml" , "JqResults/PetStoreExpanded.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
			});
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssert("SwagMock/uspto.yaml" , "JqResults/Uspto.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				

			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssert("SwagMock/mcp.yaml", "JqResults/mcp.ts", new Settings()
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
			helper.GenerateAndAssert("SwagMock/sell_account_v1_oas3.json", "JqResults/sell_account.ts");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssert("SwagMock/sell_analytics_v1_oas3.yaml", "JqResults/sell_analytics.ts");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssert("SwagMock/sell_compliance_v1_oas3.yaml", "JqResults/sell_compliance.ts");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssert("SwagMock/sell_finances_v1_oas3.yaml", "JqResults/sell_finances.ts");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssert("SwagMock/sell_inventory_v1_oas3.yaml", "JqResults/sell_inventory.ts");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssert("SwagMock/sell_listing_v1_beta_oas3.yaml", "JqResults/sell_listing.ts");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssert("SwagMock/sell_logistics_v1_oas3.json", "JqResults/sell_logistics.ts");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssert("SwagMock/sell_negotiation_v1_oas3.yaml", "JqResults/sell_negotiation.ts");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssert("SwagMock/sell_marketing_v1_oas3.json", "JqResults/sell_marketing.ts");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssert("SwagMock/sell_metadata_v1_oas3.json", "JqResults/sell_metadata.ts");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssert("SwagMock/sell_recommendation_v1_oas3.yaml", "JqResults/sell_recommendation.ts");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssert("SwagMock/redocOpenApi200501.json", "JqResults/redocOpenApi200501.ts");
		}
	}

}
