//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class Error
	{
		
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class TravelCenter
	{
		
		/// <summary>
		/// Street address of travel center
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
		
		/// <summary>
		/// City of travel center
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		/// <summary>
		/// Identifying number
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int32> Id { get; set; }
		
		/// <summary>
		/// Latitude of travel center location
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lat")]
		public System.Nullable<System.Double> Lat { get; set; }
		
		/// <summary>
		/// Longitude of travel center location
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lon")]
		public System.Nullable<System.Double> Lon { get; set; }
		
		/// <summary>
		/// Name of travel center
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Opening times of the travel center, ordered by week day
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="openingTimes")]
		public TravelCenterOpeningTimes OpeningTimes { get; set; }
		
		/// <summary>
		/// Post code of travel center
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="postCode")]
		public string PostCode { get; set; }
		
		/// <summary>
		/// Type of travel center
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<TravelCenterType> Type { get; set; }
	}
	
	public class TravelCenterOpeningTimes
	{
		
		[System.Runtime.Serialization.DataMember(Name="fri")]
		public String[] Fri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="mon")]
		public String[] Mon { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sat")]
		public String[] Sat { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sun")]
		public String[] Sun { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="thu")]
		public String[] Thu { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tue")]
		public String[] Tue { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="wed")]
		public String[] Wed { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum TravelCenterType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Reisezentrum")]
		Reisezentrum = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Mobility Center")]
		Mobility_Center = 1,
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Get all station infos
		/// Get all station infos
		/// ReisezentrenGetByName reisezentren
		/// </summary>
		/// <param name="name">A station name or part of it</param>
		/// <returns>List has been created</returns>
		public async Task<TravelCenter[]> ReisezentrenGetByNameAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reisezentren?name=" + (name==null? "" : System.Uri.EscapeDataString(name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<TravelCenter[]>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get information about a station near a location
		/// Get information about a station near a location
		/// ReisezentrenLoc_lat_lonGet reisezentren/loc/{lat}/{lon}
		/// </summary>
		/// <param name="lat">Latitude</param>
		/// <param name="lon">Longitude</param>
		/// <returns>A station was found</returns>
		public async Task<TravelCenter> ReisezentrenLoc_lat_lonGetAsync(float lat, float lon, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reisezentren/loc/"+lat+"/"+lon;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<TravelCenter>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get stations in a given radius
		/// Get stations in a given radius
		/// ReisezentrenLoc_lat_lon_distGet reisezentren/loc/{lat}/{lon}/{dist}
		/// </summary>
		/// <param name="lat">Latitude</param>
		/// <param name="lon">Longitude</param>
		/// <param name="dist">Radius</param>
		/// <returns>A station was found</returns>
		public async Task<TravelCenter> ReisezentrenLoc_lat_lon_distGetAsync(float lat, float lon, float dist, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reisezentren/loc/"+lat+"/"+lon+"/"+dist;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<TravelCenter>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get information about a specific station
		/// Get information about a specific station
		/// Reisezentren_idGet reisezentren/{id}
		/// </summary>
		/// <param name="id">Station id</param>
		/// <returns>The travel center was found</returns>
		public async Task Reisezentren_idGetAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reisezentren/"+ (id==null? "" : System.Uri.EscapeDataString(id));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}