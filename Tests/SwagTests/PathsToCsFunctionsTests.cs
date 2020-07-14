using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class CodeGenCsTests
	{
		public CodeGenCsTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		readonly CSharpTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\ValuesPaths.json", "Results\\ValuesPaths.txt");
		}

		[Fact]
		public void TestSimplePet()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\SimplePet.json", "Results\\SimplePet.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\pet.yaml", "Results\\Pet.txt");
		}

		[Fact]
		public void TestPetByTags()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petByTags.yaml", "Results\\PetByTags.txt");
		}

		[Fact]
		public void TestPetByNumbers()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petByNumbers.yaml", "Results\\PetByNumbers.txt");
		}

		[Fact]
		public void TestPetWithDataContractAttribute()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\pet.yaml", "Results\\PetDataContracts.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				GenerateBothAsyncAndSync = true,
				DecorateDataModelWithDataContract = true,
				DataContractNamespace = "http://openapidemo.com/09/2019",
				DecorateDataModelWithSerializable = true
			});
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\pet.yaml", "Results\\PetPathAsContainer.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.MethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.Path,
				GenerateBothAsyncAndSync = false
			});
		}

		[Fact]
		public void TestPetWithGodContainerAndPathAction()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\pet.yaml", "Results\\PetGodClass.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
				GenerateBothAsyncAndSync = false
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petByStatus.yaml", "Results\\PetFindByStatus.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetBackup()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petBackup.yaml", "Results\\PetBackup.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "Misc",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\PetDelete.json", "Results\\PetDelete.txt");
		}

		[Fact]
		public void TestPetTypes()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\PetTypes.json", "Results\\PetTypes.txt");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petStore.yaml", "Results\\PetStore.txt");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\petStoreExpanded.yaml", "Results\\PetStoreExpanded.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				GenerateBothAsyncAndSync = false,
				HandleHttpRequestHeaders=true,
			});
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\uspto.yaml", "Results\\Uspto.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "Misc",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				GenerateBothAsyncAndSync = false,
				HandleHttpRequestHeaders=true,
			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\mcp3.yaml", "Results\\mcp.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "McpClient",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.None,
				GenerateBothAsyncAndSync = false,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				PathPrefixToRemove = "/mcp",
				HandleHttpRequestHeaders=true,
			});
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\redocOpenApi200501.json", "Results\\redocOpenApi200501.txt");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_account_v1_oas3.json", "Results\\sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_analytics_v1_oas3.yaml", "Results\\sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_compliance_v1_oas3.yaml", "Results\\sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_finances_v1_oas3.yaml", "Results\\sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_inventory_v1_oas3.yaml", "Results\\sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_listing_v1_beta_oas3.yaml", "Results\\sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_logistics_v1_oas3.json", "Results\\sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_negotiation_v1_oas3.yaml", "Results\\sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_marketing_v1_oas3.json", "Results\\sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_metadata_v1_oas3.json", "Results\\sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\sell_recommendation_v1_oas3.yaml", "Results\\sell_recommendation.txt");
		}

		[Fact]
		public void TestEBay_buy_browse()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_browse_v1_beta_oas3.json", "Results\\buy_browse.txt");
		}

		[Fact]
		public void TestEBay_buy_feed()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_feed_v1_beta_oas3.json", "Results\\buy_feed.txt");
		}

		[Fact]
		public void TestEBay_buy_marketing()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_marketing_v1_beta_oas3.yaml", "Results\\buy_marketing.txt");
		}

		[Fact]
		public void TestEBay_buy_marketplace_insights()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_marketplace_insights_v1_beta_oas3.yaml", "Results\\buy_marketplace_insights.txt");
		}

		[Fact]
		public void TestEBay_buy_offer()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_offer_v1_beta_oas3.yaml", "Results\\buy_offer.txt");
		}

		[Fact]
		public void TestEBay_buy_order()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\buy_order_v1_beta_oas3.json", "Results\\buy_order.txt");
		}

		[Fact]
		public void TestEBay_commerce_catalog()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\commerce_catalog_v1_beta_oas3.json", "Results\\commerce_catalog.txt");
		}

		[Fact]
		public void TestEBay_commerce_identity()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\commerce_identity_v1_oas3.json", "Results\\commerce_identity.txt");
		}

		[Fact]
		public void TestEBay_commerce_taxonomy()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\commerce_taxonomy_v1_beta_oas3.json", "Results\\commerce_taxonomy.txt");
		}

		[Fact]
		public void TestEBay_commerce_translation()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\commerce_translation_v1_oas3.json", "Results\\commerce_translation.txt");
		}

		[Fact]
		public void TestEBay_developer_analytics()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\developer_analytics_v1_beta_oas3.json", "Results\\developer_analytics.txt");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero_accounting.yaml", "Results\\xero_accounting.txt");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero_assets.yaml", "Results\\xero_assets.txt");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero_bankfeeds.yaml", "Results\\xero_bankfeeds.txt");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero-payroll-au.yaml", "Results\\xero-payroll-au.txt");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero-identity.yaml", "Results\\xero-identity.txt");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateFromOpenApiAndBuild("SwagMock\\xero-payroll-uk.yaml", "Results\\xero-payroll-uk.txt");
		}

		//[Fact]
		//public void TestXero_projects() in getTasks, parameter chargeType has no in field which is required.
		//{
		//	helper.GenerateFromOpenApiAndBuild("SwagMock\\Xero-projects.yaml", "Results\\Xero-projects.txt");
		//}


	}
}