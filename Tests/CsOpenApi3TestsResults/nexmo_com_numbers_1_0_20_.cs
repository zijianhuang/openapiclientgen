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
	public class Account_unauthorized
	{
		
		/// <summary>
		/// The status code of the response. `200` indicates a successful request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code")]
		public string Error_code { get; set; }
		
		/// <summary>
		/// The status code description
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code-label")]
		public string Error_code_label { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Available_numbers
	{
		
		/// <summary>
		/// The total amount of numbers available in the pool.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
		
		/// <summary>
		/// A paginated array of available numbers and their details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numbers")]
		public Availablenumber[] Numbers { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Availablenumber
	{
		
		/// <summary>
		/// The monthly rental cost for this number, in Euros
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cost")]
		public string Cost { get; set; }
		
		/// <summary>
		/// The two character country code in ISO 3166-1 alpha-2 format
		/// Min length: 2
		/// Max length: 2
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country")]
		[System.ComponentModel.DataAnnotations.MinLength(2)]
		[System.ComponentModel.DataAnnotations.MaxLength(2)]
		public string Country { get; set; }
		
		/// <summary>
		/// The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="features")]
		public string[] Features { get; set; }
		
		/// <summary>
		/// An available inbound virtual number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="msisdn")]
		public string Msisdn { get; set; }
		
		/// <summary>
		/// The type of number: `landline`, `landline-toll-free` or `mobile-lvn`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Inbound_numbers
	{
		
		/// <summary>
		/// The total amount of numbers owned by the account
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
		
		/// <summary>
		/// A paginated array of numbers and their details
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numbers")]
		public Ownednumber[] Numbers { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Ownednumber
	{
		
		/// <summary>
		/// The two character country code in ISO 3166-1 alpha-2 format
		/// Min length: 2
		/// Max length: 2
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="country")]
		[System.ComponentModel.DataAnnotations.MinLength(2)]
		[System.ComponentModel.DataAnnotations.MaxLength(2)]
		public string Country { get; set; }
		
		/// <summary>
		/// The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="features")]
		public string[] Features { get; set; }
		
		/// <summary>
		/// The messages webhook type: always `app`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messagesCallbackType")]
		public string MessagesCallbackType { get; set; }
		
		/// <summary>
		/// An Application ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messagesCallbackValue")]
		public string MessagesCallbackValue { get; set; }
		
		/// <summary>
		/// The URL of the webhook endpoint that handles inbound messages
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="moHttpUrl")]
		public string MoHttpUrl { get; set; }
		
		/// <summary>
		/// An available inbound virtual number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="msisdn")]
		public string Msisdn { get; set; }
		
		/// <summary>
		/// The type of number: `landline`, `landline-toll-free` or `mobile-lvn`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		/// <summary>
		/// The voice webhook type: `sip`, `tel`, or `app`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="voiceCallbackType")]
		public string VoiceCallbackType { get; set; }
		
		/// <summary>
		/// A SIP URI, telephone number or Application ID
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="voiceCallbackValue")]
		public string VoiceCallbackValue { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Number_details
	{
		
		/// <summary>
		/// The two character country code in ISO 3166-1 alpha-2 format
		/// Required
		/// Min length: 2
		/// Max length: 2
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="country")]
		[System.ComponentModel.DataAnnotations.MinLength(2)]
		[System.ComponentModel.DataAnnotations.MaxLength(2)]
		public string Country { get; set; }
		
		/// <summary>
		/// An available inbound virtual number.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="msisdn")]
		public string Msisdn { get; set; }
		
		/// <summary>
		/// If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target_api_key")]
		public string Target_api_key { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Number_details_update
	{
		
		/// <summary>
		/// The Application that will handle inbound traffic to this number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="app_id")]
		public string App_id { get; set; }
		
		/// <summary>
		/// The two character country code in ISO 3166-1 alpha-2 format
		/// Required
		/// Min length: 2
		/// Max length: 2
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="country")]
		[System.ComponentModel.DataAnnotations.MinLength(2)]
		[System.ComponentModel.DataAnnotations.MaxLength(2)]
		public string Country { get; set; }
		
		/// <summary>
		/// <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		///
		///Specifies the Messages webhook type (always `app`) associated with this
		///number and must be used with the `messagesCallbackValue` parameter.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messagesCallbackType")]
		public System.Nullable<Number_details_updateMessagesCallbackType> MessagesCallbackType { get; set; }
		
		/// <summary>
		/// <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
		///
		///Specifies the Application ID of your Messages application.
		///It must be used with the `messagesCallbackType` parameter.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messagesCallbackValue")]
		public string MessagesCallbackValue { get; set; }
		
		/// <summary>
		/// An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="moHttpUrl")]
		public string MoHttpUrl { get; set; }
		
		/// <summary>
		/// The associated system type for your SMPP client
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="moSmppSysType")]
		public string MoSmppSysType { get; set; }
		
		/// <summary>
		/// An available inbound virtual number.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="msisdn")]
		public string Msisdn { get; set; }
		
		/// <summary>
		/// Specify whether inbound voice calls on your number are forwarded
		///to a SIP or a telephone number.  This must be used with the
		///`voiceCallbackValue` parameter. If set, `sip` or `tel` are
		///prioritized over the Voice capability in your Application.
		///
		///*Note: The `app` value is deprecated and will be removed in future.*
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="voiceCallbackType")]
		public System.Nullable<Number_details_updateVoiceCallbackType> VoiceCallbackType { get; set; }
		
		/// <summary>
		/// A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="voiceCallbackValue")]
		public string VoiceCallbackValue { get; set; }
		
		/// <summary>
		/// A webhook URI for Vonage to send a request to when a call ends
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="voiceStatusCallback")]
		public string VoiceStatusCallback { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Number_details_updateMessagesCallbackType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		app = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Number_details_updateVoiceCallbackType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		sip = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		tel = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		app = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Response
	{
		
		/// <summary>
		/// The status code of the response. `200` indicates a successful request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code")]
		public string Error_code { get; set; }
		
		/// <summary>
		/// The status code description
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code-label")]
		public string Error_code_label { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Response420
	{
		
		/// <summary>
		/// The status code of the response. `200` indicates a successful request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code")]
		public string Error_code { get; set; }
		
		/// <summary>
		/// More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code-label")]
		public string Error_code_label { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Unauthorized
	{
		
		/// <summary>
		/// The status code of the response. `200` indicates a successful request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code")]
		public string Error_code { get; set; }
		
		/// <summary>
		/// The status code description
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error-code-label")]
		public string Error_code_label { get; set; }
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
		/// List the numbers you own
		/// Retrieve all the inbound numbers associated with your Vonage account.
		/// GetOwnedNumbers account/numbers
		/// </summary>
		/// <param name="application_id">The Application that you want to return the numbers for.</param>
		/// <param name="has_application">Set this optional field to `true` to restrict your results to numbers
		///associated with an Application (any Application). Set to `false` to
		///find all numbers not associated with any Application. Omit the field
		///to avoid filtering on whether or not the number is assigned to an
		///Application.
		///</param>
		/// <param name="country">Min length: 2
		/// Max length: 2
		// </param>
		/// <param name="pattern">The number pattern you want to search for. Use in conjunction with `search_pattern`.</param>
		/// <param name="search_pattern">The strategy you want to use for matching:
		///
		///
		///* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
		///* `1` - Search for numbers that contain `pattern`
		///* `2` - Search for numbers that end with `pattern`
		///</param>
		/// <param name="size">Page size
		/// Maximum: 100
		// </param>
		/// <param name="index">Page index</param>
		/// <returns>OK</returns>
		public async Task<Inbound_numbers> GetOwnedNumbersAsync(string application_id, bool has_application, string country, string pattern, GetOwnedNumbersSearch_pattern search_pattern, int size, int index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "account/numbers?application_id=" + (application_id==null? "" : System.Uri.EscapeDataString(application_id))+"&has_application="+has_application+"&country=" + (country==null? "" : System.Uri.EscapeDataString(country))+"&pattern=" + (pattern==null? "" : System.Uri.EscapeDataString(pattern))+"&search_pattern="+search_pattern+"&size="+size+"&index="+index;
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
				return JsonSerializer.Deserialize<Inbound_numbers>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Search available numbers
		/// Retrieve inbound numbers that are available for the specified country.
		/// GetAvailableNumbers number/search
		/// </summary>
		/// <param name="country">The two character country code to filter on (in ISO 3166-1 alpha-2 format)
		/// Min length: 2
		/// Max length: 2
		// </param>
		/// <param name="type">Set this parameter to filter the type of number, such as mobile or landline</param>
		/// <param name="pattern">The number pattern you want to search for. Use in conjunction with `search_pattern`.</param>
		/// <param name="search_pattern">The strategy you want to use for matching:
		///
		///
		///* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
		///* `1` - Search for numbers that contain `pattern`
		///* `2` - Search for numbers that end with `pattern`
		///</param>
		/// <param name="features">Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.</param>
		/// <param name="size">Page size
		/// Maximum: 100
		// </param>
		/// <param name="index">Page index</param>
		/// <returns>OK</returns>
		public async Task<Available_numbers> GetAvailableNumbersAsync(string country, GetAvailableNumbersType type, string pattern, GetAvailableNumbersSearch_pattern search_pattern, GetAvailableNumbersFeatures features, int size, int index, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "number/search?country=" + (country==null? "" : System.Uri.EscapeDataString(country))+"&type=" + type+"&pattern=" + (pattern==null? "" : System.Uri.EscapeDataString(pattern))+"&search_pattern="+search_pattern+"&features=" + features+"&size="+size+"&index="+index;
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
				return JsonSerializer.Deserialize<Available_numbers>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum GetOwnedNumbersSearch_pattern
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
	}
	
	public enum GetAvailableNumbersType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		landline = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="mobile-lvn")]
		mobileMinuslvn = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="landline-toll-free")]
		landlineMinustollMinusfree = 2,
	}
	
	public enum GetAvailableNumbersSearch_pattern
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
	}
	
	public enum GetAvailableNumbersFeatures
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SMS = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		VOICE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SMS,VOICE")]
		SMSVOICE = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MMS = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SMS,MMS")]
		SMSMMS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="VOICE,MMS")]
		VOICEMMS = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SMS,MMS,VOICE")]
		SMSMMSVOICE = 6,
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