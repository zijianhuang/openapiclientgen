using System.Linq;
using System;
using Xunit;
using System.Threading.Tasks;
using MyNS;
using DemoPet.Client;
namespace IntegrationTests
{
	public class PetsFixture : IDisposable
	{
		public PetsFixture()
		{
			var baseUri = new Uri("http://localhost:5000/");

			httpClient = new System.Net.Http.HttpClient();
			httpClient.BaseAddress = baseUri;
			//httpClient.DefaultRequestHeaders
			//  .Accept
			//  .Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderPet("application/json"));//.net core has different behavior as described at https://github.com/zijianhuang/webapiclientgen/issues/26

			Api = new PetClient(httpClient);
		}

		public PetClient Api { get; private set; }

		System.Net.Http.HttpClient httpClient;

		#region IDisposable pattern
		bool disposed;

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (!disposed)
			{
				if (disposing)
				{
					httpClient.Dispose();
				}

				disposed = true;
			}
		}
		#endregion
	}

	public partial class PetsApiIntegration : IClassFixture<PetsFixture>
	{
		public PetsApiIntegration(PetsFixture fixture)
		{
			api = fixture.Api;
		}

		PetClient api;

		[Fact]
		public async Task TestFindPets()
		{
			var aa = await api.FindPetsByStatusAsync("w");
			Assert.Equal(3, aa.Length);
		}

		[Fact]
		public async Task TestAddPet()
		{
			await api.AddPetAsync(new Pet()
			{
				Name="KKK"
			});
		}


		[Fact]
		public async Task TestPetsDelete()
		{
			await api.DeletePetAsync(9);
		}

	}
}
