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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Error
	{
		
		/// <summary>
		/// A unique William Hill identifier for the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// To help pinpoint the exact parameter where a request has failed
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="field")]
		public string Field { get; set; }
		
		/// <summary>
		/// A unique William Hill text string to enable you to identify the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LoginRequest
	{
		
		/// <summary>
		/// Whether extended login or normal login is required. If the parameter is set to Y your application will generate an authentication ticket valid for a period of 60 days, without expiring due to inactivity. If the parameter is left blank or set to N this means your application will support the normal expiry times for tickets: The ticket expires after 2 hours of inactivity. The ticket is valid for a maximum of 8 hours after it has been issued.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="extended")]
		public System.Nullable<System.Boolean> Extended { get; set; }
		
		/// <summary>
		/// Customer Password
		/// Required
		/// Pattern: ^[a-zA-Z0-9_\-]{6,15}$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="password")]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[a-zA-Z0-9_\-]{6,15}$")]
		public string Password { get; set; }
		
		/// <summary>
		/// Customer Username
		/// Required
		/// Pattern: ^[A-Za-z0-9_@\ \.]{5,15}$
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="username")]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[A-Za-z0-9_@\ \.]{5,15}$")]
		public string Username { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Logoutresponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ServiceTicket
	{
		
		/// <summary>
		/// This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// The TGT ticket
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="ticket")]
		public string Ticket { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Session
	{
		
		/// <summary>
		/// The UTC time when the ticket expires.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="expiryDateTime")]
		public string ExpiryDateTime { get; set; }
		
		/// <summary>
		/// The value you have selected previous to executing the request. If the value is Y, this enables your application to generate a ticket valid for 60 days without expiring due to inactivity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="extended")]
		public System.Nullable<System.Boolean> Extended { get; set; }
		
		/// <summary>
		/// This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Indicates that the account has a temporary password set and hence the user must be prompted to change their password.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="temporaryPassword")]
		public System.Nullable<System.Boolean> TemporaryPassword { get; set; }
		
		/// <summary>
		/// Url for user to change password. A TGT must be added to the URL
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="temporaryPasswordUrl")]
		public string TemporaryPasswordUrl { get; set; }
		
		/// <summary>
		/// The TGT ticket
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="ticket")]
		public string Ticket { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SessionsErrors
	{
		
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Error[] Errors { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Ticketvalidityresponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="valid")]
		public System.Nullable<System.Boolean> Valid { get; set; }
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
		/// Logs in a customer and obtains an authentication ticket.
		/// Logs in a customer by obtaining an authentication ticket. It can then be used directly with the other William Hill APIs to access a customer’s sportsbook account, place a bet, etc.
		/// LogIn tickets
		/// </summary>
		/// <param name="fields">Specify an absolute field list to return (Comma Separated List)</param>
		/// <param name="include">Specify fields in addition to the default to return (Comma Separated List)</param>
		/// <param name="exclude">Specify fields from the default to exclude (Comma Separated List)</param>
		/// <param name="languageAsPerTerritory">Defines response field name language, true (default) returns in language defined by territory, false returns in English</param>
		/// <param name="requestBody">Login request object</param>
		/// <returns>Success</returns>
		public async Task<Session> LogInAsync(string[] fields, string[] include, string[] exclude, string languageAsPerTerritory, LoginRequest requestBody)
		{
			var requestUri = "tickets?"+string.Join("&", fields.Select(z => $"fields={System.Uri.EscapeDataString(z.ToString())}"))+"&"+string.Join("&", include.Select(z => $"include={System.Uri.EscapeDataString(z.ToString())}"))+"&"+string.Join("&", exclude.Select(z => $"exclude={System.Uri.EscapeDataString(z.ToString())}"))+"&languageAsPerTerritory=" + (languageAsPerTerritory==null? "" : System.Uri.EscapeDataString(languageAsPerTerritory));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Session>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Checks the validity of a session ticket.
		/// Checks the validity of a session ticket.
		/// ValidateSession tickets/{tgt}
		/// </summary>
		/// <param name="tgt">Ticket Granting Ticket obtained from a previous request</param>
		/// <param name="languageAsPerTerritory">Defines response field name language, true (default) returns in language defined by territory, false returns in English</param>
		/// <returns>The validity status of the tgt</returns>
		public async Task ValidateSessionAsync(string tgt, string languageAsPerTerritory)
		{
			var requestUri = "tickets/"+ (tgt==null? "" : System.Uri.EscapeDataString(tgt))+"&languageAsPerTerritory=" + (languageAsPerTerritory==null? "" : System.Uri.EscapeDataString(languageAsPerTerritory));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
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
		/// Log out a customer.
		/// Logs out a customer.
		/// LogOut tickets/{tgt}
		/// </summary>
		/// <param name="tgt">Ticket Granting Ticket obtained from a previous request</param>
		/// <param name="languageAsPerTerritory">Defines response field name language, true (default) returns in language defined by territory, false returns in English</param>
		/// <returns>Success - Logout</returns>
		public async Task<Logoutresponse> LogOutAsync(string tgt, string languageAsPerTerritory)
		{
			var requestUri = "tickets/"+ (tgt==null? "" : System.Uri.EscapeDataString(tgt))+"&languageAsPerTerritory=" + (languageAsPerTerritory==null? "" : System.Uri.EscapeDataString(languageAsPerTerritory));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Logoutresponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Obtains a one-time Service Ticket that can be used to access other William Hill services.
		/// Obtains a one-time Service Ticket that can be used to access other CAS enabled William Hill services that are not available through the standard suite of APIs. You first need to have logged in a customer to obtain an Authentication Ticket.
		/// GetServiceTicket tickets/{tgt}/serviceTicket
		/// </summary>
		/// <param name="tgt">Ticket Granting Ticket obtained from a previous request</param>
		/// <param name="languageAsPerTerritory">Defines response field name language, true (default) returns in language defined by territory, false returns in English</param>
		/// <param name="target">The target URL of the CAS enabled service that you want to use with the service ticket.</param>
		/// <param name="fields">Specify an absolute field list to return (Comma Separated List)</param>
		/// <param name="include">Specify fields in addition to the default to return (Comma Separated List)</param>
		/// <param name="exclude">Specify fields from the default to exclude (Comma Separated List)</param>
		/// <returns>Success - Service Ticket created</returns>
		public async Task<ServiceTicket> GetServiceTicketAsync(string tgt, string languageAsPerTerritory, string target, string[] fields, string[] include, string[] exclude)
		{
			var requestUri = "tickets/"+ (tgt==null? "" : System.Uri.EscapeDataString(tgt))+"/serviceTicket&languageAsPerTerritory=" + (languageAsPerTerritory==null? "" : System.Uri.EscapeDataString(languageAsPerTerritory))+"&target=" + (target==null? "" : System.Uri.EscapeDataString(target))+"&"+string.Join("&", fields.Select(z => $"fields={System.Uri.EscapeDataString(z.ToString())}"))+"&"+string.Join("&", include.Select(z => $"include={System.Uri.EscapeDataString(z.ToString())}"))+"&"+string.Join("&", exclude.Select(z => $"exclude={System.Uri.EscapeDataString(z.ToString())}"));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ServiceTicket>(streamContent, jsonSerializerSettings);
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
