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
		/// Importer-Exporter Code (IEC) Verification API.
		/// Description of Importer-Exporter Code (IEC) Verification API.
		/// Importer_Exporter_Code_Verification_API v1/iec/{iec}
		/// </summary>
		/// <param name="iec">Importer-Exporter code</param>
		/// <returns>successful operation</returns>
		public async Task<Importer_Exporter_Code_Verification_APIReturn> Importer_Exporter_Code_Verification_APIAsync(string iec, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/iec/"+ (iec==null? "" : System.Uri.EscapeDataString(iec));
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
				return JsonSerializer.Deserialize<Importer_Exporter_Code_Verification_APIReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class Importer_Exporter_Code_Verification_APIReturn
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="addressLine1")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string AddressLine1 { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="addressLine2")]
		public string AddressLine2 { get; set; }
		
		/// <summary>
		/// Required
		/// Minimum items: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="branch")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public Importer_Exporter_Code_Verification_APIReturnBranch[] Importer_Exporter_Code_Verification_APIReturnBranch { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="city")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string City { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="dataAsOn")]
		public System.DateTimeOffset DataAsOn { get; set; }
		
		/// <summary>
		/// Required
		/// Minimum items: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="directors")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public Importer_Exporter_Code_Verification_APIReturnDirectors[] Importer_Exporter_Code_Verification_APIReturnDirectors { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="entityName")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string EntityName { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="exporterType")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string ExporterType { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="iec")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Iec { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="iecIssueDate")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string IecIssueDate { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="iecModificationDate")]
		public string IecModificationDate { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 0
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="iecStatus")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		public string IecStatus { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="natureOfConcern")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string NatureOfConcern { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="pan")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Pan { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="pin")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Pin { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="state")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string State { get; set; }
	}
	
	public class Importer_Exporter_Code_Verification_APIReturnBranch
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="badd1")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Badd1 { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="badd2")]
		public string Badd2 { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="branchCode")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string BranchCode { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="city")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string City { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="pin")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Pin { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="state")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string State { get; set; }
	}
	
	public class Importer_Exporter_Code_Verification_APIReturnDirectors
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Name { get; set; }
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