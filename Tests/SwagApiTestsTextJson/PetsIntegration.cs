using Fonlow.Net.Http;
using My.Pet.Client;
using System;
using System.Threading.Tasks;
using Xunit;

namespace IntegrationTests
{
	public class PetsFixture : IDisposable
	{
		public PetsFixture()
		{
			Uri baseUri = new Uri("http://localhost:5000");

			httpClient = new System.Net.Http.HttpClient
			{
				BaseAddress = baseUri
			};

			Api = new PetClient(httpClient, new System.Text.Json.JsonSerializerOptions
			{
				DefaultIgnoreCondition= System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingDefault,
				PropertyNameCaseInsensitive= true
			});
		}

		public PetClient Api { get; private set; }

		readonly System.Net.Http.HttpClient httpClient;

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

		readonly PetClient api;

		[Fact]
		public async Task TestFindPets()
		{
			Pet[] aa = await api.FindPetsByStatusAsync(new PetStatus[] { PetStatus.sold, PetStatus.pending });
			Assert.Equal(3, aa.Length);
		}

		[Fact]
		public async Task TestGetPet()
		{
			Pet d = await api.GetPetByIdAsync(12);
			Assert.Equal("Narco", d.Name);
		}

		[Fact]
		public async Task TestAddPet()
		{
			await api.AddPetAsync(new Pet()
			{
				//Id=339,
				Name = "KKK", //required
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
			WebApiRequestException ex = await Assert.ThrowsAsync<WebApiRequestException>(() => api.DeletePetAsync(9));
			Assert.Equal("NoSuchPet", ex.Response);
		}

	}
}
