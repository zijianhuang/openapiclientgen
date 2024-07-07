using Fonlow.Net.Http;
using Fonlow.Testing;
using My.Pet.Client;
using System;
using System.Threading.Tasks;
using Xunit;

namespace IntegrationTests
{
	public class PetsFixture : BasicHttpClient
	{
		public PetsFixture()
		{
			var c = TestingSettings.Instance.ServiceCommands["LaunchWebApi"];
			HttpClient.BaseAddress = new System.Uri(c.BaseUrl);

			Api = new PetClient(HttpClient, new System.Text.Json.JsonSerializerOptions()
			{
				DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingDefault,
				PropertyNameCaseInsensitive = true,
			});
		}

		public PetClient Api { get; private set; }
	}

	[Collection(TestConstants.LaunchWebApiAndInit)]
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
			Pet[] aa = await api.FindPetsByStatusAsync(PetStatus.sold);
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
