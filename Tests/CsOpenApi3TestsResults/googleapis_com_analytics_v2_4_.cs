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
		/// Returns Analytics report data for a view (profile).
		/// Analytics_data_get data
		/// </summary>
		/// <param name="ids">Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.</param>
		/// <param name="start_date">Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.</param>
		/// <param name="end_date">End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.</param>
		/// <param name="metrics">A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.</param>
		/// <param name="dimensions">A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.</param>
		/// <param name="filters">A comma-separated list of dimension or metric filters to be applied to the report data.</param>
		/// <param name="max_results">The maximum number of entries to include in this feed.</param>
		/// <param name="segment">An Analytics advanced segment to be applied to the report data.</param>
		/// <param name="sort">A comma-separated list of dimensions or metrics that determine the sort order for the report data.</param>
		/// <param name="start_index">An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_data_getAsync(string ids, string start_date, string end_date, string metrics, string dimensions, string filters, int max_results, string segment, string sort, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "data?ids=" + (ids==null? "" : System.Uri.EscapeDataString(ids))+"&start-date=" + (start_date==null? "" : System.Uri.EscapeDataString(start_date))+"&end-date=" + (end_date==null? "" : System.Uri.EscapeDataString(end_date))+"&metrics=" + (metrics==null? "" : System.Uri.EscapeDataString(metrics))+"&dimensions=" + (dimensions==null? "" : System.Uri.EscapeDataString(dimensions))+"&filters=" + (filters==null? "" : System.Uri.EscapeDataString(filters))+"&max-results="+max_results+"&segment=" + (segment==null? "" : System.Uri.EscapeDataString(segment))+"&sort=" + (sort==null? "" : System.Uri.EscapeDataString(sort))+"&start-index="+start_index;
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
		/// Lists all accounts to which the user has access.
		/// Analytics_management_accounts_list management/accounts
		/// </summary>
		/// <param name="max_results">The maximum number of accounts to include in this response.</param>
		/// <param name="start_index">An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_management_accounts_listAsync(int max_results, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "management/accounts?max-results="+max_results+"&start-index="+start_index;
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
		/// Lists web properties to which the user has access.
		/// Analytics_management_webproperties_list management/accounts/{accountId}/webproperties
		/// </summary>
		/// <param name="accountId">Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.</param>
		/// <param name="max_results">The maximum number of web properties to include in this response.</param>
		/// <param name="start_index">An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_management_webproperties_listAsync(string accountId, int max_results, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "management/accounts/"+ (accountId==null? "" : System.Uri.EscapeDataString(accountId))+"/webproperties&max-results="+max_results+"&start-index="+start_index;
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
		/// Lists views (profiles) to which the user has access.
		/// Analytics_management_profiles_list management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		/// </summary>
		/// <param name="accountId">Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.</param>
		/// <param name="webPropertyId">Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.</param>
		/// <param name="max_results">The maximum number of views (profiles) to include in this response.</param>
		/// <param name="start_index">An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_management_profiles_listAsync(string accountId, string webPropertyId, int max_results, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "management/accounts/"+ (accountId==null? "" : System.Uri.EscapeDataString(accountId))+"/webproperties/"+ (webPropertyId==null? "" : System.Uri.EscapeDataString(webPropertyId))+"/profiles&max-results="+max_results+"&start-index="+start_index;
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
		/// Lists goals to which the user has access.
		/// Analytics_management_goals_list management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		/// </summary>
		/// <param name="accountId">Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.</param>
		/// <param name="webPropertyId">Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.</param>
		/// <param name="profileId">View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.</param>
		/// <param name="max_results">The maximum number of goals to include in this response.</param>
		/// <param name="start_index">An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_management_goals_listAsync(string accountId, string webPropertyId, string profileId, int max_results, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "management/accounts/"+ (accountId==null? "" : System.Uri.EscapeDataString(accountId))+"/webproperties/"+ (webPropertyId==null? "" : System.Uri.EscapeDataString(webPropertyId))+"/profiles/"+ (profileId==null? "" : System.Uri.EscapeDataString(profileId))+"/goals&max-results="+max_results+"&start-index="+start_index;
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
		/// Lists advanced segments to which the user has access.
		/// Analytics_management_segments_list management/segments
		/// </summary>
		/// <param name="max_results">The maximum number of advanced segments to include in this response.</param>
		/// <param name="start_index">An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		/// Minimum: 1
		// </param>
		/// <returns>Successful response</returns>
		public async Task Analytics_management_segments_listAsync(int max_results, int start_index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "management/segments?max-results="+max_results+"&start-index="+start_index;
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
