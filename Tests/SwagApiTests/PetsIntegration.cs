using System.Linq;
using System;
using Xunit;
using System.Threading.Tasks;
using MyNS;
using DemoPet.Client;
using Fonlow.Net.Http;

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
			var aa = await api.FindPetsByStatusAsync(new PetStatus[] { PetStatus.sold, PetStatus.pending });
			Assert.Equal(3, aa.Length);
		}

		[Fact]
		public async Task TestGetPet()
		{
			var d = await api.GetPetByIdAsync(12);
			Assert.Equal("Narco", d.Name);
		}

		[Fact]
		public async Task TestAddPet()
		{
			await api.AddPetAsync(new Pet()
			{
				//Id=339,
				Name = "KKK",
				PhotoUrls = new string[] { "http://somewhere.com/mydog.jpg" }, //required,
				Tags = new Tag[] { //not required. However, when presented, it must contain at least one item.
					new Tag()
					{
						//Id=3,
						Name="Hey"
					}
				},
			});
		}


		[Fact]
		public async Task TestPetsDelete()
		{
			var ex = await Assert.ThrowsAsync<WebApiRequestException>(() => api.DeletePetAsync(9));
			Assert.Equal("NoSuchPet", ex.Response);
		}

	}
}
