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
	
	
	/// <summary>
	/// The type that defines the fields for an address.
	/// </summary>
	public class Address
	{
		
		/// <summary>
		/// The first line of the street address.
		/// </summary>
		public string AddressLine1 { get; set; }
		
		/// <summary>
		/// The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
		/// </summary>
		public string AddressLine2 { get; set; }
		
		/// <summary>
		/// The city of the address.
		/// </summary>
		public string City { get; set; }
		
		/// <summary>
		/// The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/identity/types/CountryCodeEnum.html'>eBay API documentation</a>
		/// </summary>
		public string Country { get; set; }
		
		/// <summary>
		/// The county of the address.
		/// </summary>
		public string County { get; set; }
		
		/// <summary>
		/// The postal code of the address.
		/// </summary>
		public string PostalCode { get; set; }
		
		/// <summary>
		/// The state or province of the address.
		/// </summary>
		public string StateOrProvince { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the business account information.
	/// </summary>
	public class BusinessAccount
	{
		
		/// <summary>
		/// The type that defines the fields for an address.
		/// </summary>
		public Address Address { get; set; }
		
		/// <summary>
		/// An additional name that is used for their business on eBay. The business name is returned in the name field.
		/// </summary>
		public string DoingBusinessAs { get; set; }
		
		/// <summary>
		/// The email address of the business account.
		/// </summary>
		public string Email { get; set; }
		
		/// <summary>
		/// The business name associated with the user's eBay account.
		/// </summary>
		public string Name { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the information of the contact person for the account.
		/// </summary>
		public Contact PrimaryContact { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the details of a phone.
		/// </summary>
		public Phone PrimaryPhone { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the details of a phone.
		/// </summary>
		public Phone SecondaryPhone { get; set; }
		
		/// <summary>
		/// The business website address associated with the eBay account.
		/// </summary>
		public string Website { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the information of the contact person for the account.
	/// </summary>
	public class Contact
	{
		
		/// <summary>
		/// The first name of the contact person.
		/// </summary>
		public string FirstName { get; set; }
		
		/// <summary>
		/// The last name of the contact person.
		/// </summary>
		public string LastName { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the details of a phone.
	/// </summary>
	public class Phone
	{
		
		/// <summary>
		/// The two-letter ISO 3166 standard of the country to which the phone number belongs.
		/// </summary>
		public string CountryCode { get; set; }
		
		/// <summary>
		/// The numeric string representing the phone number.
		/// </summary>
		public string Number { get; set; }
		
		/// <summary>
		/// The type of phone service. Valid Values: MOBILE or LAND_LINE Code so that your app gracefully handles any future changes to this list.
		/// </summary>
		public string PhoneType { get; set; }
	}
	
	/// <summary>
	/// This type defines the fields that can be returned in an error.
	/// </summary>
	public class Error
	{
		
		/// <summary>
		/// Identifies the type of erro.
		/// </summary>
		public string Category { get; set; }
		
		/// <summary>
		/// Name for the primary system where the error occurred. This is relevant for application errors.
		/// </summary>
		public string Domain { get; set; }
		
		/// <summary>
		/// A unique number to identify the error.
		/// </summary>
		public System.Nullable<System.Int32> ErrorId { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		public string[] InputRefIds { get; set; }
		
		/// <summary>
		/// A more detailed explanation of the error.
		/// </summary>
		public string LongMessage { get; set; }
		
		/// <summary>
		/// Information on how to correct the problem, in the end user's terms and language where applicable.
		/// </summary>
		public string Message { get; set; }
		
		/// <summary>
		/// An array of request elements most closely associated to the error.
		/// </summary>
		public string[] OutputRefIds { get; set; }
		
		/// <summary>
		/// An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
		/// </summary>
		public ErrorParameter[] Parameters { get; set; }
		
		/// <summary>
		/// Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.
		/// </summary>
		public string Subdomain { get; set; }
	}
	
	public class ErrorParameter
	{
		
		/// <summary>
		/// The object of the error.
		/// </summary>
		public string Name { get; set; }
		
		/// <summary>
		/// The value of the object.
		/// </summary>
		public string Value { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the information of an individual account.
	/// </summary>
	public class IndividualAccount
	{
		
		/// <summary>
		/// The eBay user's registration email address.
		/// </summary>
		public string Email { get; set; }
		
		/// <summary>
		/// The eBay user's first name.
		/// </summary>
		public string FirstName { get; set; }
		
		/// <summary>
		/// The eBay user's last name.
		/// </summary>
		public string LastName { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the details of a phone.
		/// </summary>
		public Phone PrimaryPhone { get; set; }
		
		/// <summary>
		/// The type that defines the fields for an address.
		/// </summary>
		public Address RegistrationAddress { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the details of a phone.
		/// </summary>
		public Phone SecondaryPhone { get; set; }
	}
	
	/// <summary>
	/// The type that defines the fields for the getUser method.
	/// </summary>
	public class UserResponse
	{
		
		/// <summary>
		/// Indicates the user account type. This is determined when the user registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/identity/types/AccountTypeEnum.html'>eBay API documentation</a>
		/// </summary>
		public string AccountType { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the business account information.
		/// </summary>
		public BusinessAccount BusinessAccount { get; set; }
		
		/// <summary>
		/// The type that defines the fields for the information of an individual account.
		/// </summary>
		public IndividualAccount IndividualAccount { get; set; }
		
		/// <summary>
		/// The eBay site on which the account is registered. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/identity/types/MarketplaceIdEnum.html'>eBay API documentation</a>
		/// </summary>
		public string RegistrationMarketplaceId { get; set; }
		
		/// <summary>
		/// Indicates the user's account status. Possible values: CONFIRMED, UNCONFIRMED, ACCOUNTONHOLD and UNDETERMINED. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/identity/types/UserStatusEnum.html'>eBay API documentation</a>
		/// </summary>
		public string Status { get; set; }
		
		/// <summary>
		/// The eBay immutable user ID of the user's account and can always be used to identify the user.
		/// </summary>
		public string UserId { get; set; }
		
		/// <summary>
		/// The user name, which was specific by the user when they created the account. Note: This value can be changed by the user.
		/// </summary>
		public string Username { get; set; }
	}
	
	public partial class MyClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MyClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// This method retrieves the account profile information for an authenticated user, which requires a User access token. What is returned is controlled by the scopes. For a business account you use the default scope commerce.identity.readonly, which returns all the fields in the businessAccount container. These are returned because this is all public information. For an individual account, the fields returned in the individualAccount container are based on the scope you use. Using the default scope, only public information, such as eBay user ID, are returned. For details about what each scope returns, see the Identity API Overview. URLs for this method Production URL: https://apiz.ebay.com/commerce/identity/v1/user/ Sandbox URL: https://apiz.sandbox.ebay.com/commerce/identity/v1/user/ In the Sandbox, this method returns mock data. Note: You must use the correct scope or scopes for the data you want returned.
		/// GetUser user/
		/// </summary>
		/// <returns>OK</returns>
		public async Task<UserResponse> GetUserAsync()
		{
			var requestUri = "user/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<UserResponse>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// This method retrieves the account profile information for an authenticated user, which requires a User access token. What is returned is controlled by the scopes. For a business account you use the default scope commerce.identity.readonly, which returns all the fields in the businessAccount container. These are returned because this is all public information. For an individual account, the fields returned in the individualAccount container are based on the scope you use. Using the default scope, only public information, such as eBay user ID, are returned. For details about what each scope returns, see the Identity API Overview. URLs for this method Production URL: https://apiz.ebay.com/commerce/identity/v1/user/ Sandbox URL: https://apiz.sandbox.ebay.com/commerce/identity/v1/user/ In the Sandbox, this method returns mock data. Note: You must use the correct scope or scopes for the data you want returned.
		/// GetUser user/
		/// </summary>
		/// <returns>OK</returns>
		public UserResponse GetUser()
		{
			var requestUri = "user/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<UserResponse>(jsonReader);
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