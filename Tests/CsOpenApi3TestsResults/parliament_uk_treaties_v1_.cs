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
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessItem
	{
		
		[System.Runtime.Serialization.DataMember(Name="businessItemUri")]
		public string BusinessItemUri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="houseId")]
		public string HouseId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="houseName")]
		public string HouseName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="houseUri")]
		public string HouseUri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="houses")]
		public BusinessItemHouse[] Houses { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemDate")]
		public System.Nullable<System.DateTimeOffset> ItemDate { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="link")]
		public string Link { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="procedureStepId")]
		public string ProcedureStepId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="procedureStepUri")]
		public string ProcedureStepUri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sequence")]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="stepName")]
		public string StepName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="treatyId")]
		public string TreatyId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="treatyUri")]
		public string TreatyUri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="workpackageProcedureUri")]
		public string WorkpackageProcedureUri { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessItemHouse
	{
		
		[System.Runtime.Serialization.DataMember(Name="house")]
		public System.Nullable<BusinessItemHouseHouse> House { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BusinessItemHouseHouse
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Commons = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Lords = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessItemResource
	{
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public BusinessItem Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Link
	{
		
		[System.Runtime.Serialization.DataMember(Name="href")]
		public string Href { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="method")]
		public string Method { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rel")]
		public string Rel { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BusinessItemResourceCollection
	{
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public BusinessItemResource[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemsPerPage")]
		public System.Nullable<System.Int32> ItemsPerPage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalResults")]
		public System.Nullable<System.Int32> TotalResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Department
	{
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int32> Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GovernmentOrganisation
	{
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int32> Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GovernmentOrganisationResource
	{
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public GovernmentOrganisation Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GovernmentOrganisationResourceCollection
	{
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public GovernmentOrganisationResource[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemsPerPage")]
		public System.Nullable<System.Int32> ItemsPerPage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalResults")]
		public System.Nullable<System.Int32> TotalResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum House
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Commons = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Lords = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ParliamentaryConclusion
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotConcluded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CanRatify = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CantRatify = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ParliamentaryProcess
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotConcluded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Concluded = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SeriesMembership
	{
		
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Int32> Id { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SeriesMembershipResource
	{
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public SeriesMembership Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SeriesMembershipResourceCollection
	{
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public SeriesMembershipResource[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemsPerPage")]
		public System.Nullable<System.Int32> ItemsPerPage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalResults")]
		public System.Nullable<System.Int32> TotalResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum SeriesMembershipType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CountrySeriesMembership = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EuropeanUnionSeriesMembership = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MiscellaneousSeriesMembership = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Treaty
	{
		
		[System.Runtime.Serialization.DataMember(Name="commandPaperNumber")]
		public System.Nullable<System.Int32> CommandPaperNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="commandPaperPrefix")]
		public string CommandPaperPrefix { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="commonsLayingDate")]
		public System.Nullable<System.DateTimeOffset> CommonsLayingDate { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="countrySeriesItemCitation")]
		public string CountrySeriesItemCitation { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="countrySeriesMembership")]
		public string CountrySeriesMembership { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="debateScheduled")]
		public string DebateScheduled { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="europeanSeriesItemCitation")]
		public string EuropeanSeriesItemCitation { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="europeanUnionSeriesMembership")]
		public string EuropeanUnionSeriesMembership { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layingBodyDepartment")]
		public Department LayingBodyDepartment { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layingBodyDepartmentId")]
		public System.Nullable<System.Int32> LayingBodyDepartmentId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="layingBodyName")]
		public string LayingBodyName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="leadDepartment")]
		public Department LeadDepartment { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="leadGovernmentOrganisationDepartmentId")]
		public System.Nullable<System.Int32> LeadGovernmentOrganisationDepartmentId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="leadGovernmentOrganisationGroupName")]
		public string LeadGovernmentOrganisationGroupName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lordsLayingDate")]
		public System.Nullable<System.DateTimeOffset> LordsLayingDate { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="miscSeriesItemCitation")]
		public string MiscSeriesItemCitation { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="miscellaneousSeriesMembership")]
		public string MiscellaneousSeriesMembership { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="parliamentaryConclusion")]
		public ParliamentaryConclusion ParliamentaryConclusion { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="treatySeriesMembership")]
		public TreatySeriesMembership TreatySeriesMembership { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="webLink")]
		public string WebLink { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TreatySeriesMembership
	{
		
		[System.Runtime.Serialization.DataMember(Name="citation")]
		public string Citation { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="seriesMembershipType")]
		public SeriesMembershipType SeriesMembershipType { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TreatyResource
	{
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Treaty Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TreatyResourceCollection
	{
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public TreatyResource[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemsPerPage")]
		public System.Nullable<System.Int32> ItemsPerPage { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="links")]
		public Link[] Links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalResults")]
		public System.Nullable<System.Int32> TotalResults { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Returns business item by ID.
		/// GetBusinessItemById api/BusinessItem/{id}
		/// </summary>
		/// <param name="id">Business item with the ID specified</param>
		/// <returns>The requested business item</returns>
		public async Task<BusinessItemResource> GetBusinessItemByIdAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/BusinessItem/"+ (id==null? "" : System.Uri.EscapeDataString(id));
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
				return JsonSerializer.Deserialize<BusinessItemResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns all government organisations.
		/// GetOrganisations api/GovernmentOrganisation
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GovernmentOrganisationResourceCollection> GetOrganisationsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/GovernmentOrganisation";
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
				return JsonSerializer.Deserialize<GovernmentOrganisationResourceCollection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns all series memberships.
		/// GetSeriesMemberships api/SeriesMembership
		/// </summary>
		/// <returns>Success</returns>
		public async Task<SeriesMembershipResourceCollection> GetSeriesMembershipsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/SeriesMembership";
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
				return JsonSerializer.Deserialize<SeriesMembershipResourceCollection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a list of treaties.
		/// GetTreaties api/Treaty
		/// </summary>
		/// <param name="SearchText">Treaties which contains the search text specified</param>
		/// <param name="GovernmentOrganisationId">Treaties with the government organisation id specified
		/// Minimum: 1
		/// Maximum: 2147483647
		// </param>
		/// <param name="Series">Treaties with the series membership type specified</param>
		/// <param name="ParliamentaryProcess">Treaties where the parliamentary process is concluded or notconcluded</param>
		/// <param name="DebateScheduled">Treaties which contain a scheduled debate</param>
		/// <param name="MotionToNotRatify">Treaties which contain a motion to not ratify</param>
		/// <param name="RecommendedNotRatify">Treaties which are recommended to not ratify</param>
		/// <param name="House">Treaties which are laid in the specified house</param>
		/// <param name="Skip">The number of records to skip from the first, default is 0
		/// Minimum: 0
		/// Maximum: 2147483647
		// </param>
		/// <param name="Take">The number of records to return, default is 20
		/// Minimum: 0
		/// Maximum: 2147483647
		// </param>
		/// <returns>A list of treaties</returns>
		public async Task<TreatyResourceCollection> GetTreatiesAsync(string SearchText, int GovernmentOrganisationId, SeriesMembershipType Series, ParliamentaryProcess ParliamentaryProcess, bool DebateScheduled, bool MotionToNotRatify, bool RecommendedNotRatify, BusinessItemHouseHouse House, int Skip, int Take, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Treaty?SearchText=" + (SearchText==null? "" : System.Uri.EscapeDataString(SearchText))+"&GovernmentOrganisationId="+GovernmentOrganisationId+"&Series=" + Series+"&ParliamentaryProcess=" + ParliamentaryProcess+"&DebateScheduled="+DebateScheduled+"&MotionToNotRatify="+MotionToNotRatify+"&RecommendedNotRatify="+RecommendedNotRatify+"&House=" + House+"&Skip="+Skip+"&Take="+Take;
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
				return JsonSerializer.Deserialize<TreatyResourceCollection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a treaty by ID.
		/// GetTreatyById api/Treaty/{id}
		/// </summary>
		/// <param name="id">Treaty with ID specified</param>
		/// <returns>Details of the requested treaty</returns>
		public async Task<TreatyResource> GetTreatyByIdAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Treaty/"+ (id==null? "" : System.Uri.EscapeDataString(id));
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
				return JsonSerializer.Deserialize<TreatyResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns business items belonging to the treaty with ID.
		/// GetBusinessItemsByTreatyId api/Treaty/{id}/BusinessItems
		/// </summary>
		/// <param name="id">Business items belonging to treaty with the ID specified</param>
		/// <returns>The business items for the requested treaty</returns>
		public async Task<BusinessItemResourceCollection> GetBusinessItemsByTreatyIdAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Treaty/"+ (id==null? "" : System.Uri.EscapeDataString(id))+"/BusinessItems";
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
				return JsonSerializer.Deserialize<BusinessItemResourceCollection>(streamContent, jsonSerializerSettings);
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