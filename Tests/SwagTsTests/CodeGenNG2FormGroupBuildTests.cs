using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit.Abstractions;
using Xunit;
using Fonlow.OpenApiClientGen.TestHelpers;

namespace SwagTests
{
	[Collection(IntegrationTests.TestConstants.CopyAssetsAndInit)]
	public class CodeGenNG2FormGroupBuildTests
	{
		public CodeGenNG2FormGroupBuildTests(ITestOutputHelper output)
		{
			helper = new NG2TestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsNG2FormGroupClientApiGen), output, TestingSettings.Instance,
			(string expected, string s) => Assert.Equal(expected, s, ignoreLineEndingDifferences: true),
			(int expected, int actual) => Assert.Equal(expected, actual));
		}

		readonly NG2TestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/ValuesPaths.json", "NG2FormGroupResults/ValuesPaths.txt");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/PetDelete.json", "NG2FormGroupResults/PetDelete.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/pet.yaml", "NG2FormGroupResults/Pet.txt");
		}

		[Fact]
		public void TestPetSuper()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petSuper.yaml", "NG2FormGroupResults/PetSuper.txt");
		}

		[Fact]
		public void TestPetByTags()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petByTags.yaml", "NG2FormGroupResults/PetByTags.txt");
		}

		[Fact]
		public void TestPet_EnumToString()
		{
			var settings = CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.Default);
			settings.EnumToString = true;
			helper.GenerateAndAssertAndBuild("SwagMock/pet.yaml", "NG2FormGroupResults/Pet_EnumToString.txt", settings);
		}

		/// <summary>
		/// Multiple operation classes, thus no build
		/// </summary>
		[Fact]
		public void TestPetWithPathAsContainerName_NoBuild()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "NG2FormGroupResults/PetPathAsContainer.txt", new Settings()
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
		public void TestPetWithGodContainerAndPathAction_NoBuild()
		{
			helper.GenerateAndAssert("SwagMock/pet.yaml", "NG2FormGroupResults/PetGodClass.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,

			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petByStatus.yaml", "NG2FormGroupResults/PetFindByStatus.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock/petStore.yaml", "NG2FormGroupResults/PetStore.txt");
		}

		[Fact]
		public void TestPetStoreSorted()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/petStore.yaml", "NG2FormGroupResults/PetStoreSorted.txt", new Settings() // based my mySettings
			{
				ClientNamespace = "MyNS",
				ContainerClassName = "MyClient", //the TestBed requires this containerClassName
				ContainerNameStrategy = ContainerNameStrategy.None,
				ActionNameStrategy = ActionNameStrategy.Default,
				DataAnnotationsToComments = true,
				SortTypesMembersAndMethods = true,
			});
		}

		/// <summary>
		/// With settings and with different containerClassName. Thus no build
		/// </summary>
		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock/petStoreExpanded.yaml", "NG2FormGroupResults/PetStoreExpanded.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock/uspto.yaml", "NG2FormGroupResults/Uspto.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,


			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/mcp.yaml", "NG2FormGroupResults/mcp.txt", new Settings()
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
		public void TestAir()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/AirOne.yaml", "NG2FormGroupResults/AirOne.txt", new Settings()
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
			helper.GenerateAndAssertAndBuild("SwagMock/sell_account_v1_oas3.json", "NG2FormGroupResults/sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_analytics_v1_oas3.yaml", "NG2FormGroupResults/sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_compliance_v1_oas3.yaml", "NG2FormGroupResults/sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_finances_v1_oas3.yaml", "NG2FormGroupResults/sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_inventory_v1_oas3.yaml", "NG2FormGroupResults/sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_listing_v1_beta_oas3.yaml", "NG2FormGroupResults/sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_logistics_v1_oas3.json", "NG2FormGroupResults/sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_negotiation_v1_oas3.yaml", "NG2FormGroupResults/sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_marketing_v1_oas3.json", "NG2FormGroupResults/sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_metadata_v1_oas3.json", "NG2FormGroupResults/sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/sell_recommendation_v1_oas3.yaml", "NG2FormGroupResults/sell_recommendation.txt");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/redocOpenApi200501.json", "NG2FormGroupResults/redocOpenApi200501.txt");
		}

		[Fact]
		public void Testxero_accounting()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_accounting.yaml", "NG2FormGroupResults/xero_accounting.txt");
		}

		[Fact]
		public void Testxero_assets()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_assets.yaml", "NG2FormGroupResults/xero_assets.txt");
		}

		[Fact]
		public void Testxero_bankfeeds()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero_bankfeeds.yaml", "NG2FormGroupResults/xero_bankfeeds.txt");
		}

		[Fact]
		public void Testxero_payroll_au()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-payroll-au.yaml", "NG2FormGroupResults/xero-payroll-au.txt");
		}

		[Fact]
		public void Testxero_identity()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-identity.yaml", "NG2FormGroupResults/xero-identity.txt");
		}

		[Fact]
		public void Testxero_payroll_uk()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/xero-payroll-uk.yaml", "NG2FormGroupResults/xero-payroll-uk.txt");
		}

		[Fact]
		public void TestMozillaKinto()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/MozillaKinto.yaml", "NG2FormGroupResults/MozillaKinto.txt");
		}

		[Fact]
		public void TestGoogleBooks()
		{
			helper.GenerateAndAssertAndBuild("SwagMock/googleBooksOpenApi.yaml", "NG2FormGroupResults/googleBooksOpenApi.txt");
		}
	}

}
