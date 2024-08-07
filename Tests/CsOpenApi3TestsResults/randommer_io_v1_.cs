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
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum CaseType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="LowerCase")]
		LowerCase = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="UpperCase")]
		UpperCase = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SentenceCase")]
		SentenceCase = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="TitleCase")]
		TitleCase = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum IdType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="VAT")]
		VAT = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="SSN")]
		SSN = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum LoremType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="normal")]
		normal = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="business")]
		business = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum NameType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="firstname")]
		firstname = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="surname")]
		surname = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="fullname")]
		fullname = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class NumberValidation
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// Max length: 2
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="country")]
		[System.ComponentModel.DataAnnotations.Length(1, 2)]
		public string Country { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// Max length: 100
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="number")]
		[System.ComponentModel.DataAnnotations.Length(1, 100)]
		public string Number { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum TextActionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Transform")]
		Transform = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Replace")]
		Replace = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[System.SerializableAttribute()]
	public class TextDto
	{
		
		[System.Runtime.Serialization.DataMember(Name="text")]
		public string Text { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum TextType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="paragraphs")]
		paragraphs = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="words")]
		words = 1,
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
		/// Get Card
		/// ApiCardGetByType api/Card
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiCardGetByTypeAsync(string type, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Card?type=" + (type==null? "" : System.Uri.EscapeDataString(type));
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
		/// Get available card types
		/// ApiCardTypesGet api/Card/Types
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiCardTypesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Card/Types";
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
		/// Get available countries
		/// ApiFinanceCountriesGet api/Finance/Countries
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiFinanceCountriesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Finance/Countries";
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
		/// Get crypto address
		/// ApiFinanceCryptoAddressGetByCryptoType api/Finance/CryptoAddress
		/// </summary>
		/// <param name="cryptoType">Max length: 100</param>
		/// <returns>Success</returns>
		public async Task ApiFinanceCryptoAddressGetByCryptoTypeAsync(string cryptoType, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Finance/CryptoAddress?cryptoType=" + (cryptoType==null? "" : System.Uri.EscapeDataString(cryptoType));
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
		/// Get available crypto types
		/// ApiFinanceCryptoAddressTypesGet api/Finance/CryptoAddress/Types
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiFinanceCryptoAddressTypesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Finance/CryptoAddress/Types";
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
		/// Get IBAN by countryCode
		/// ApiFinanceIban_countryCodeGet api/Finance/Iban/{countryCode}
		/// </summary>
		/// <param name="countryCode">Max length: 2</param>
		/// <returns>Success</returns>
		public async Task ApiFinanceIban_countryCodeGetAsync(string countryCode, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Finance/Iban/"+ (countryCode==null? "" : System.Uri.EscapeDataString(countryCode));
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
		/// ApiFinanceVatValidatorPostByCountryAndVat api/Finance/Vat/Validator
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiFinanceVatValidatorPostByCountryAndVatAsync(string country, string vat, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Finance/Vat/Validator?country=" + (country==null? "" : System.Uri.EscapeDataString(country))+"&vat=" + (vat==null? "" : System.Uri.EscapeDataString(vat));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// ApiMiscCulturesGet api/Misc/Cultures
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiMiscCulturesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Misc/Cultures";
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
		/// ApiMiscRandom_AddressGetByNumberAndCulture api/Misc/Random-Address
		/// </summary>
		/// <param name="number">Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <param name="culture">Max length: 100</param>
		/// <returns>Success</returns>
		public async Task ApiMiscRandom_AddressGetByNumberAndCultureAsync(int number, string culture, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Misc/Random-Address?number="+number+"&culture=" + (culture==null? "" : System.Uri.EscapeDataString(culture));
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
		/// Get name
		/// ApiNameGetByNameTypeAndQuantity api/Name
		/// </summary>
		/// <param name="quantity">Minimum: 1
		/// Maximum: 5000
		// </param>
		/// <returns>Success</returns>
		public async Task ApiNameGetByNameTypeAndQuantityAsync(NameType nameType, int quantity, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Name?nameType=" + nameType+"&quantity="+quantity;
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
		/// Generate brand name suggestions
		/// ApiNameBrandNamePostByStartingWords api/Name/BrandName
		/// </summary>
		/// <param name="startingWords">Max length: 100</param>
		/// <returns>Success</returns>
		public async Task ApiNameBrandNamePostByStartingWordsAsync(string startingWords, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Name/BrandName?startingWords=" + (startingWords==null? "" : System.Uri.EscapeDataString(startingWords));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Get business names for a specific culture
		/// ApiNameBusinessNamePostByNumberAndCultureCode api/Name/BusinessName
		/// </summary>
		/// <param name="number">Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <returns>Success</returns>
		public async Task ApiNameBusinessNamePostByNumberAndCultureCodeAsync(int number, string cultureCode, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Name/BusinessName?number="+number+"&cultureCode=" + (cultureCode==null? "" : System.Uri.EscapeDataString(cultureCode));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Get available cultures
		/// ApiNameCulturesGet api/Name/Cultures
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiNameCulturesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Name/Cultures";
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
		/// Get business name suggestions
		/// ApiNameSuggestionsGetByStartingWords api/Name/Suggestions
		/// </summary>
		/// <param name="startingWords">Max length: 100</param>
		/// <returns>Success</returns>
		public async Task ApiNameSuggestionsGetByStartingWordsAsync(string startingWords, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Name/Suggestions?startingWords=" + (startingWords==null? "" : System.Uri.EscapeDataString(startingWords));
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
		/// Get available countries
		/// ApiPhoneCountriesGet api/Phone/Countries
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiPhoneCountriesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Phone/Countries";
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
		/// Get bulk telephone numbers for a country
		/// ApiPhoneGenerateGetByCountryCodeAndQuantity api/Phone/Generate
		/// </summary>
		/// <param name="CountryCode">Max length: 2</param>
		/// <param name="Quantity">Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <returns>Success</returns>
		public async Task ApiPhoneGenerateGetByCountryCodeAndQuantityAsync(string CountryCode, int Quantity, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Phone/Generate?CountryCode=" + (CountryCode==null? "" : System.Uri.EscapeDataString(CountryCode))+"&Quantity="+Quantity;
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
		/// Get bulk imeis
		/// ApiPhoneIMEIGetByQuantity api/Phone/IMEI
		/// </summary>
		/// <param name="Quantity">Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <returns>Success</returns>
		public async Task ApiPhoneIMEIGetByQuantityAsync(int Quantity, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Phone/IMEI?Quantity="+Quantity;
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
		/// Validate a phone number
		/// ApiPhoneValidateGetByTelephoneAndCountryCode api/Phone/Validate
		/// </summary>
		/// <param name="telephone">Max length: 25</param>
		/// <param name="CountryCode">Max length: 2</param>
		/// <returns>Success</returns>
		public async Task ApiPhoneValidateGetByTelephoneAndCountryCodeAsync(string telephone, string CountryCode, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Phone/Validate?telephone=" + (telephone==null? "" : System.Uri.EscapeDataString(telephone))+"&CountryCode=" + (CountryCode==null? "" : System.Uri.EscapeDataString(CountryCode));
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
		/// Generate a social security number
		/// ApiSocialNumberGet api/SocialNumber
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiSocialNumberGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/SocialNumber";
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
		/// Validate VAT/identity numbers
		/// ApiSocialNumberPostByIdType api/SocialNumber
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiSocialNumberPostByIdTypeAsync(IdType idType, NumberValidation requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/SocialNumber?idType=" + idType;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
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
		/// Humanize text
		/// ApiTextHumanizePost api/Text/Humanize
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiTextHumanizePostAsync(TextDto requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Text/Humanize";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
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
		/// Generate lorem ipsum
		/// ApiTextLoremIpsumGetByLoremTypeAndTypeAndNumber api/Text/LoremIpsum
		/// </summary>
		/// <param name="number">Minimum: 1
		/// Maximum: 2147483647
		// </param>
		/// <returns>Success</returns>
		public async Task ApiTextLoremIpsumGetByLoremTypeAndTypeAndNumberAsync(LoremType loremType, TextType type, int number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Text/LoremIpsum?loremType=" + loremType+"&type=" + type+"&number="+number;
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
		/// Generate password
		/// ApiTextPasswordGetByLengthAndHasDigitsAndHasUppercaseAndHasSpecial api/Text/Password
		/// </summary>
		/// <param name="length">Minimum: 3
		/// Maximum: 250
		// </param>
		/// <returns>Success</returns>
		public async Task ApiTextPasswordGetByLengthAndHasDigitsAndHasUppercaseAndHasSpecialAsync(int length, bool hasDigits, bool hasUppercase, bool hasSpecial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Text/Password?length="+length+"&hasDigits="+hasDigits+"&hasUppercase="+hasUppercase+"&hasSpecial="+hasSpecial;
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
		/// Get reviews (max quantity=500)
		/// ApiTextReviewPostByProductAndQuantity api/Text/Review
		/// </summary>
		/// <param name="product">Max length: 50</param>
		/// <param name="quantity">Minimum: 1
		/// Maximum: 500
		// </param>
		/// <returns>Success</returns>
		public async Task ApiTextReviewPostByProductAndQuantityAsync(string product, int quantity, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Text/Review?product=" + (product==null? "" : System.Uri.EscapeDataString(product))+"&quantity="+quantity;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Transform text
		/// ApiTextTransformPostByTextActionTypeAndCaseTypeAndFindAndReplace api/Text/Transform
		/// </summary>
		/// <returns>Success</returns>
		public async Task ApiTextTransformPostByTextActionTypeAndCaseTypeAndFindAndReplaceAsync(TextActionType textActionType, CaseType caseType, string find, string replace, TextDto requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/Text/Transform?textActionType=" + textActionType+"&caseType=" + caseType+"&find=" + (find==null? "" : System.Uri.EscapeDataString(find))+"&replace=" + (replace==null? "" : System.Uri.EscapeDataString(replace));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
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
