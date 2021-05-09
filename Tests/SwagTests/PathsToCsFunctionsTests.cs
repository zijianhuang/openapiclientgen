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
			helper.GenerateAndAssertAndBuild("SwagMock\\ValuesPaths.json", "Results\\ValuesPaths.txt");
		}

		[Fact]
		public void TestSimplePet()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\SimplePet.json", "Results\\SimplePet.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\Pet.txt");
		}

		[Fact]
		public void TestPet_DisableSystemNullableByDefault()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.DisableSystemNullableByDefault = true;
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\Pet_DisableSystemNullableByDefault.txt", settings);
		}

		[Fact]
		public void TestPet_DecorateDataModelWithPropertyName()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.DecorateDataModelWithPropertyName = true;
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\Pet_DecorateDataModelWithPropertyName.txt", settings);
		}

		[Fact]
		public void TestPet_UseCSharpNullable()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.UseNullableQuestionMark = true;
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\PetNullable.txt", settings);
		}

		//[Fact]
		//public void TestPet_TitleCaseEnumValueNames() not working well, the references to default value and api parameters not yet valid.
		//{
		//	var settings = CodeGenSettings.Default;
		//	settings.TitleCaseEnumValueNames = true;
		//	helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\Pet_TitleCaseEnumValueNames.txt", settings);
		//}

		[Fact]
		public void TestPetByTags()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petByTags.yaml", "Results\\PetByTags.txt");
		}

		[Fact]
		public void TestPetByNumbers()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petByNumbers.yaml", "Results\\PetByNumbers.txt");
		}

		[Fact]
		public void TestPetWithDataContractAttribute()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\PetDataContracts.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\PetPathAsContainer.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\pet.yaml", "Results\\PetGodClass.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\petByStatus.yaml", "Results\\PetFindByStatus.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\petBackup.yaml", "Results\\PetBackup.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\PetDelete.json", "Results\\PetDelete.txt");
		}

		[Fact]
		public void TestPetTypes()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\PetTypes.json", "Results\\PetTypes.txt");
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petStore.yaml", "Results\\PetStore.txt");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\petStoreExpanded.yaml", "Results\\PetStoreExpanded.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\uspto.yaml", "Results\\Uspto.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\mcp3.yaml", "Results\\mcp.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock\\redocOpenApi200501.json", "Results\\redocOpenApi200501.txt");
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_account_v1_oas3.json", "Results\\sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_analytics_v1_oas3.yaml", "Results\\sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_compliance_v1_oas3.yaml", "Results\\sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_finances_v1_oas3.yaml", "Results\\sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_inventory_v1_oas3.yaml", "Results\\sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_listing_v1_beta_oas3.yaml", "Results\\sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_logistics_v1_oas3.json", "Results\\sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_negotiation_v1_oas3.yaml", "Results\\sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_marketing_v1_oas3.json", "Results\\sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_metadata_v1_oas3.json", "Results\\sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\sell_recommendation_v1_oas3.yaml", "Results\\sell_recommendation.txt");
		}

		[Fact]
		public void TestEBay_buy_browse()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_browse_v1_beta_oas3.json", "Results\\buy_browse.txt");
		}

		[Fact]
		public void TestEBay_buy_feed()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_feed_v1_beta_oas3.json", "Results\\buy_feed.txt");
		}

		[Fact]
		public void TestEBay_buy_marketing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_marketing_v1_beta_oas3.yaml", "Results\\buy_marketing.txt");
		}

		[Fact]
		public void TestEBay_buy_marketplace_insights()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_marketplace_insights_v1_beta_oas3.yaml", "Results\\buy_marketplace_insights.txt");
		}

		[Fact]
		public void TestEBay_buy_offer()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_offer_v1_beta_oas3.yaml", "Results\\buy_offer.txt");
		}

		[Fact]
		public void TestEBay_buy_order()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_order_v1_beta_oas3.json", "Results\\buy_order.txt");
		}

		[Fact]
		public void TestEBay_buy_order_ArrayAsList()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.ArrayAs = ArrayAsIEnumerableDerived.List;
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_order_v1_beta_oas3.json", "Results\\buy_order_ArrayAsList.txt", settings);
		}

		[Fact]
		public void TestEBay_buy_order_ArrayAsCollection()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.ArrayAs = ArrayAsIEnumerableDerived.ICollection;
			helper.GenerateAndAssertAndBuild("SwagMock\\buy_order_v1_beta_oas3.json", "Results\\buy_order_ArrayAsCollection.txt", settings);
		}

		[Fact]
		public void TestEBay_commerce_catalog()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\commerce_catalog_v1_beta_oas3.json", "Results\\commerce_catalog.txt");
		}

		[Fact]
		public void TestEBay_commerce_identity()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\commerce_identity_v1_oas3.json", "Results\\commerce_identity.txt");
		}

		[Fact]
		public void TestEBay_commerce_taxonomy()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\commerce_taxonomy_v1_beta_oas3.json", "Results\\commerce_taxonomy.txt");
		}

		[Fact]
		public void TestEBay_commerce_translation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\commerce_translation_v1_oas3.json", "Results\\commerce_translation.txt");
		}

		[Fact]
		public void TestEBay_developer_analytics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\developer_analytics_v1_beta_oas3.json", "Results\\developer_analytics.txt");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_accounting.yaml", "Results\\xero_accounting.txt");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_assets.yaml", "Results\\xero_assets.txt");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero_bankfeeds.yaml", "Results\\xero_bankfeeds.txt");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-payroll-au.yaml", "Results\\xero-payroll-au.txt");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-identity.yaml", "Results\\xero-identity.txt");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndAssertAndBuild("SwagMock\\xero-payroll-uk.yaml", "Results\\xero-payroll-uk.txt");
		}

		//[Fact]
		//public void TestXero_projects() in getTasks, parameter chargeType has no in field which is required.
		//{
		//	helper.GenerateFromOpenApiAndBuild("SwagMock\\Xero-projects.yaml", "Results\\Xero-projects.txt");
		//}


	}
}