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
		/// View the facet information corresponding to a search
		/// In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.
		/// Facets Facets
		/// </summary>
		/// <param name="searchTerms">URL-encoded keyword or keywords desired by the client; OpenSearch 1.1</param>
		/// <param name="count">The number of search results per page desired by the client; OpenSearch 1.1</param>
		/// <param name="startIndex">First search result desired by the search client; OpenSearch 1.1</param>
		/// <param name="spatial">4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter</param>
		/// <param name="sortKeys">Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0</param>
		/// <param name="startDate">The start date in yyyy-mm-dd format</param>
		/// <param name="endDate">The end date in yyyy-mm-dd format</param>
		/// <param name="facetFilters">Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values</param>
		/// <param name="source">Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC</param>
		/// <returns>OK</returns>
		public async Task FacetsAsync(string searchTerms, int count, int startIndex, string spatial, FacetsSortKeys sortKeys, System.DateOnly startDate, System.DateOnly endDate, string facetFilters, FacetsSource source, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Facets?searchTerms=" + (searchTerms==null? "" : System.Uri.EscapeDataString(searchTerms))+"&count="+count+"&startIndex="+startIndex+"&spatial=" + (spatial==null? "" : System.Uri.EscapeDataString(spatial))+"&sortKeys=" + sortKeys+"&startDate="+startDate+"&endDate="+endDate+"&facetFilters=" + (facetFilters==null? "" : System.Uri.EscapeDataString(facetFilters))+"&source=" + source;
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
		
		/// <summary>
		/// Search documents using the OpenSearch 1.1 Specification
		/// This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.
		/// Open_search OpenSearch
		/// </summary>
		/// <param name="searchTerms">URL-encoded keyword or keywords desired by the client; OpenSearch 1.1</param>
		/// <param name="count">The number of search results per page desired by the client; OpenSearch 1.1</param>
		/// <param name="startIndex">First search result desired by the search client; OpenSearch 1.1</param>
		/// <param name="spatial">4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter</param>
		/// <param name="sortKeys">Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0</param>
		/// <param name="startDate">The start date in yyyy-mm-dd format</param>
		/// <param name="endDate">The end date in yyyy-mm-dd format</param>
		/// <param name="facetFilters">Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values</param>
		/// <param name="source">Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC</param>
		/// <returns>OK</returns>
		public async Task Open_searchAsync(string searchTerms, int count, int startIndex, string spatial, Open_searchSortKeys sortKeys, System.DateOnly startDate, System.DateOnly endDate, string facetFilters, FacetsSource source, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "OpenSearch?searchTerms=" + (searchTerms==null? "" : System.Uri.EscapeDataString(searchTerms))+"&count="+count+"&startIndex="+startIndex+"&spatial=" + (spatial==null? "" : System.Uri.EscapeDataString(spatial))+"&sortKeys=" + sortKeys+"&startDate="+startDate+"&endDate="+endDate+"&facetFilters=" + (facetFilters==null? "" : System.Uri.EscapeDataString(facetFilters))+"&source=" + source;
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
		
		/// <summary>
		/// Describes the web interface of NSIDC's data search engine
		/// Opensearch_description OpenSearchDescription
		/// </summary>
		/// <returns>Success</returns>
		public async Task Opensearch_descriptionAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "OpenSearchDescription";
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
		
		/// <summary>
		/// Suggest search terms based on a partial query
		/// In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.
		/// Id suggest
		/// </summary>
		/// <param name="q">Search terms typed into the interface (minimum two characters)</param>
		/// <param name="source">Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC</param>
		/// <returns>OK</returns>
		public async Task IdAsync(string q, FacetsSource source, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "suggest?q=" + (q==null? "" : System.Uri.EscapeDataString(q))+"&source=" + source;
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
	
	public enum FacetsSortKeys
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="score,,desc")]
		scoredesc = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="spatial_area,,asc")]
		spatial_areaasc = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="spatial_area,,desc")]
		spatial_areadesc = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="temporal_duration,,asc")]
		temporal_durationasc = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="temporal_duration,,desc")]
		temporal_durationdesc = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="updated,,desc")]
		updateddesc = 5,
	}
	
	public enum FacetsSource
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NSIDC = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ADE = 1,
	}
	
	public enum Open_searchSortKeys
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="score,,desc")]
		scoredesc = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="spatial_area,,asc")]
		spatial_areaasc = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="spatial_area,,desc")]
		spatial_areadesc = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="temporal_duration,,asc")]
		temporal_durationasc = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="temporal_duration,,desc")]
		temporal_durationdesc = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="updated,,desc")]
		updateddesc = 5,
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