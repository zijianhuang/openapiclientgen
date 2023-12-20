using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;
namespace SwagTests
{
	[Collection("PluginsInSequence")] //CodeGen is not thread safe
	public class CodeGenAureliaTests
	{
		public CodeGenAureliaTests()
		{
			helper = new TsTestHelper(typeof(Fonlow.CodeDom.Web.Ts.ControllersTsAureliaClientApiGen));
		}

		readonly TsTestHelper helper;

		[Fact]
		public void TestValuesPaths()
		{
			helper.GenerateAndAssert("SwagMock\\ValuesPaths.json", "AureliaResults\\ValuesPaths.txt");
		}


		[Fact]
		public void TestPetDelete()
		{
			helper.GenerateAndAssert("SwagMock\\PetDelete.json", "AureliaResults\\PetDelete.txt");
		}

		[Fact]
		public void TestPet()
		{
			helper.GenerateAndAssert("SwagMock\\pet.yaml", "AureliaResults\\Pet.txt");
		}

		[Fact]
		public void TestPetWithPathAsContainerName()
		{
			helper.GenerateAndAssert("SwagMock\\pet.yaml", "AureliaResults\\PetPathAsContainer.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\pet.yaml" , "AureliaResults\\PetGodClass.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.PathMethodQueryParameters,
				ContainerNameStrategy = ContainerNameStrategy.None,
			
			});
		}

		[Fact]
		public void TestPetFindByStatus()
		{
			helper.GenerateAndAssert("SwagMock\\petByStatus.yaml", "AureliaResults\\PetFindByStatus.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\petStore.yaml", "AureliaResults\\PetStore.txt");
		}

		[Fact]
		public void TestPetStoreExpanded()
		{
			helper.GenerateAndAssert("SwagMock\\petStoreExpanded.yaml" , "AureliaResults\\PetStoreExpanded.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
			});
		}

		[Fact]
		public void TestUspto()
		{
			helper.GenerateAndAssert("SwagMock\\uspto.yaml" , "AureliaResults\\Uspto.txt", new Settings()
			{
				ClientNamespace = "MyNS",
				ActionNameStrategy = ActionNameStrategy.NormalizedOperationId,
				ContainerNameStrategy = ContainerNameStrategy.Tags,
				

			});
		}

		[Fact]
		public void TestMcp()
		{
			helper.GenerateAndAssert("SwagMock\\mcp.yaml", "AureliaResults\\mcp.txt", new Settings()
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
			helper.GenerateAndAssert("SwagMock\\sell_account_v1_oas3.json", "AureliaResults\\sell_account.txt");
		}

		[Fact]
		public void TestEBay_sell_analytics()
		{
			helper.GenerateAndAssert("SwagMock\\sell_analytics_v1_oas3.yaml", "AureliaResults\\sell_analytics.txt");
		}

		[Fact]
		public void TestEBay_sell_compliance()
		{
			helper.GenerateAndAssert("SwagMock\\sell_compliance_v1_oas3.yaml", "AureliaResults\\sell_compliance.txt");
		}

		[Fact]
		public void TestEBay_sell_finances()
		{
			helper.GenerateAndAssert("SwagMock\\sell_finances_v1_oas3.yaml", "AureliaResults\\sell_finances.txt");
		}

		[Fact]
		public void TestEBay_sell_inventory()
		{
			helper.GenerateAndAssert("SwagMock\\sell_inventory_v1_oas3.yaml", "AureliaResults\\sell_inventory.txt");
		}

		[Fact]
		public void TestEBay_sell_listing()
		{
			helper.GenerateAndAssert("SwagMock\\sell_listing_v1_beta_oas3.yaml", "AureliaResults\\sell_listing.txt");
		}

		[Fact]
		public void TestEBay_sell_logistics()
		{
			helper.GenerateAndAssert("SwagMock\\sell_logistics_v1_oas3.json", "AureliaResults\\sell_logistics.txt");
		}

		[Fact]
		public void TestEBay_sell_negotiation()
		{
			helper.GenerateAndAssert("SwagMock\\sell_negotiation_v1_oas3.yaml", "AureliaResults\\sell_negotiation.txt");
		}

		[Fact]
		public void TestEBay_sell_marketing()
		{
			helper.GenerateAndAssert("SwagMock\\sell_marketing_v1_oas3.json", "AureliaResults\\sell_marketing.txt");
		}

		[Fact]
		public void TestEBay_sell_metadata()
		{
			helper.GenerateAndAssert("SwagMock\\sell_metadata_v1_oas3.json", "AureliaResults\\sell_metadata.txt");
		}

		[Fact]
		public void TestEBay_sell_recommendation()
		{
			helper.GenerateAndAssert("SwagMock\\sell_recommendation_v1_oas3.yaml", "AureliaResults\\sell_recommendation.txt");
		}

		[Fact]
		public void TestRedocOpenApi()
		{
			helper.GenerateAndAssert("SwagMock\\redocOpenApi200501.json", "AureliaResults\\redocOpenApi200501.txt");
		}
	}

}
