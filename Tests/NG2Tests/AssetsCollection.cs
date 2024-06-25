using Xunit;

namespace IntegrationTests
{
	public class TestConstants
	{
		public const string CopyAssetsAndInit = "CopyAssets";
	}

	[CollectionDefinition(TestConstants.CopyAssetsAndInit)]
	public class AssetsCollection : ICollectionFixture<Fonlow.Testing.ServiceCommandsFixture>
	{
		// This class has no code, and is never created. Its purpose is simply
		// to be the place to apply [CollectionDefinition] and all the
		// ICollectionFixture<> interfaces.
	}
}
