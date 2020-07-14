using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
namespace SwagTests
{
	[Collection("PluginsInSequence")]
	public class CodeGenNG2Tests
	{
		public CodeGenNG2Tests()
		{
			helper = new TsTestHelper("ng2");
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssert("SwagMock\\ValuesPaths.json", "NG2Results\\ValuesPaths.txt");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssert("SwagMock\\PetDelete.json", "NG2Results\\PetDelete.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssert("SwagMock\\pet.yaml", "NG2Results\\Pet.txt");
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateAndAssert("SwagMock\\pet.yaml", "NG2Results\\PetPathAsContainer.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\pet.yaml" , "NG2Results\\PetGodClass.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
			
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssert("SwagMock\\petByStatus.yaml", "NG2Results\\PetFindByStatus.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\petStore.yaml", "NG2Results\\PetStore.txt");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock\\petStoreExpanded.yaml" , "NG2Results\\PetStoreExpanded.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
			});
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssert("SwagMock\\uspto.yaml" , "NG2Results\\Uspto.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				

			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssert("SwagMock\\mcp.yaml", "NG2Results\\mcp.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\sell_account_v1_oas3.json", "NG2Results\\sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssert("SwagMock\\sell_analytics_v1_oas3.yaml", "NG2Results\\sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssert("SwagMock\\sell_compliance_v1_oas3.yaml", "NG2Results\\sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssert("SwagMock\\sell_finances_v1_oas3.yaml", "NG2Results\\sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssert("SwagMock\\sell_inventory_v1_oas3.yaml", "NG2Results\\sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssert("SwagMock\\sell_listing_v1_beta_oas3.yaml", "NG2Results\\sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssert("SwagMock\\sell_logistics_v1_oas3.json", "NG2Results\\sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssert("SwagMock\\sell_negotiation_v1_oas3.yaml", "NG2Results\\sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssert("SwagMock\\sell_marketing_v1_oas3.json", "NG2Results\\sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssert("SwagMock\\sell_metadata_v1_oas3.json", "NG2Results\\sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssert("SwagMock\\sell_recommendation_v1_oas3.yaml", "NG2Results\\sell_recommendation.txt");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssert("SwagMock\\redocOpenApi200501.json", "NG2Results\\redocOpenApi200501.txt");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndAssert("SwagMock\\xero_accounting.yaml", "NG2Results\\xero_accounting.txt");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndAssert("SwagMock\\xero_assets.yaml", "NG2Results\\xero_assets.txt");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndAssert("SwagMock\\xero_bankfeeds.yaml", "NG2Results\\xero_bankfeeds.txt");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndAssert("SwagMock\\xero-payroll-au.yaml", "NG2Results\\xero-payroll-au.txt");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndAssert("SwagMock\\xero-identity.yaml", "NG2Results\\xero-identity.txt");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndAssert("SwagMock\\xero-payroll-uk.yaml", "NG2Results\\xero-payroll-uk.txt");
		}

		[Fact]
		public void TestXero_projects()
		{
			helper.GenerateAndAssert("SwagMock\\Xero-projects.yaml", "NG2Results\\Xero-projects.txt");
		}

	}

}
