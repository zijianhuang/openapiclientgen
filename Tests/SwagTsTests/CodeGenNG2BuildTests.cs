using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit.Abstractions;
using Xunit;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public class CodeGenNG2BuildTests
	{
		public CodeGenNG2BuildTests(ITestOutputHelper output)
		{
			helper = new NG2TestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2ClientApiGen), output, TestingSettings.Instance, 
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true), 
			(int expected, int actual)=> Assert.Equal(expected, actual));
		}

		readonly NG2TestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/ValuesPaths.json", "NG2Results/ValuesPaths.ts");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/PetDelete.json", "NG2Results/PetDelete.ts");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/pet.yaml", "NG2Results/Pet.ts");
		}

		[Fact]
		public void TestPetReturnNumber()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petReturnNumber.yaml", "NG2Results/PetReturnNumber.ts");
		}

		[Fact]
		public void TestPetByTags()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petByTags.yaml", "NG2Results/PetByTags.ts");
		}

		[Fact]
		public void TestPet_EnumToString()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.EnumToString = true;
			helper.GenerateAndAssertAndBuild("SwagMock/pet.yaml", "NG2Results/Pet_EnumToString.ts", settings);
		}

		/// <summary>
		/// Multiple operation classes, thus no build
		/// </summary>
		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "NG2Results/PetPathAsContainer.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ActionNameStrategy = ActionNameStrategy.MethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.Path,
			
			});
		}

		/// <summary>
		/// With settings and with different containerClassName. Thus no build
		/// </summary>
		[Fact]
		public void TestPetWithGodContainerAndPathAction()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml" , "NG2Results/PetGodClass.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
			
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petByStatus.yaml", "NG2Results/PetFindByStatus.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				PathPrefixToRemove = "/api",
				ContainerClassName = "MyClient",
				ContainerNameSuffix = "",
				GenerateBothAsyncAndSync = true
			});
		}

		[Fact]
		public void TestPetStore()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petStore.yaml", "NG2Results/PetStore.ts");
		}

		/// <summary>
		/// With settings and with different containerClassName. Thus no build
		/// </summary>
		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock/petStoreExpanded.yaml" , "NG2Results/PetStoreExpanded.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
			});
		}

		/// <summary>
		/// With settings and with different containerClassName. Thus no build
		/// </summary>
		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssert("SwagMock/uspto.yaml" , "NG2Results/Uspto.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				

			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/mcp.yaml", "NG2Results/mcp.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.None,
				PathPrefixToRemove = "/mcp",
			});
		}

		[Fact]
		public void TestOpenAi()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/openaiapi.yaml", "NG2Results/openaiapi.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				GenerateBothAsyncAndSync = true,
				//DecorateDataModelWithSerializable = true,
				UseEnsureSuccessStatusCodeEx = true,
				DataAnnotationsEnabled = true,
				DataAnnotationsToComments = true,
				CancellationTokenEnabled = true,
				HandleHttpRequestHeaders = true,
				SpecialTokens = new System.Collections.Generic.Dictionary<string, string> { ["<|endoftext|>"] = "\"\\r\\n\"" }
			});
		}

		[Fact]
		public void TestAir()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/AirOne.yaml", "NG2Results/AirOne.ts", new Settings()
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				//RegexForNormalizedOperationId = @"\w*",
				ContainerNameStrategy = ContainerNameStrategy.None,
				PathPrefixToRemove = "/mcp",
			});
		}

		[Fact]
		public void TestEBaySellAccount()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_account_v1_oas3.json", "NG2Results/sell_account.ts");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_analytics_v1_oas3.yaml", "NG2Results/sell_analytics.ts");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_compliance_v1_oas3.yaml", "NG2Results/sell_compliance.ts");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_finances_v1_oas3.yaml", "NG2Results/sell_finances.ts");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_inventory_v1_oas3.yaml", "NG2Results/sell_inventory.ts");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_listing_v1_beta_oas3.yaml", "NG2Results/sell_listing.ts");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_logistics_v1_oas3.json", "NG2Results/sell_logistics.ts");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_negotiation_v1_oas3.yaml", "NG2Results/sell_negotiation.ts");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_marketing_v1_oas3.json", "NG2Results/sell_marketing.ts");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_metadata_v1_oas3.json", "NG2Results/sell_metadata.ts");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_recommendation_v1_oas3.yaml", "NG2Results/sell_recommendation.ts");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/redocOpenApi200501.json", "NG2Results/redocOpenApi200501.ts");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_accounting.yaml", "NG2Results/xero_accounting.ts");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_assets.yaml", "NG2Results/xero_assets.ts");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_bankfeeds.yaml", "NG2Results/xero_bankfeeds.ts");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-payroll-au.yaml", "NG2Results/xero-payroll-au.ts");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-identity.yaml", "NG2Results/xero-identity.ts");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-payroll-uk.yaml", "NG2Results/xero-payroll-uk.ts");
		}

		[Fact]
		public void TestGoogleBooks()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/googleBooksOpenApi.yaml", "NG2Results/googleBooksOpenApi.ts");
		}


	}

}
