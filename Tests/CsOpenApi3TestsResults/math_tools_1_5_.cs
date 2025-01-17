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
		/// Convert a given number from one base to another base
		/// NumbersBaseGetByNumberAndFromAndTo numbers/base
		/// </summary>
		/// <param name="number">Number to convert to the target base</param>
		/// <param name="from">Base of the supplied number (Optional base 10 assumed by default)</param>
		/// <param name="to">Target base to convert to</param>
		/// <returns>200 success response</returns>
		public async Task NumbersBaseGetByNumberAndFromAndToAsync(string number, string from, string to, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/base?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&from=" + (from==null? "" : System.Uri.EscapeDataString(from))+"&to=" + (to==null? "" : System.Uri.EscapeDataString(to));
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
		/// Convert a given number to binary
		/// NumbersBaseBinaryGetByNumberAndFrom numbers/base/binary
		/// </summary>
		/// <param name="number">Number to convert to binary</param>
		/// <param name="from">Base of the supplied number (Optional base 10 assumed by default)</param>
		/// <returns>200 success response</returns>
		public async Task NumbersBaseBinaryGetByNumberAndFromAsync(string number, string from, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/base/binary?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&from=" + (from==null? "" : System.Uri.EscapeDataString(from));
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
		/// Convert a given number to hexadecimal
		/// NumbersBaseHexGetByNumberAndFrom numbers/base/hex
		/// </summary>
		/// <param name="number">Number to convert to hex</param>
		/// <param name="from">Base of the supplied number (Optional base 10 assumed by default)</param>
		/// <returns>200 success response</returns>
		public async Task NumbersBaseHexGetByNumberAndFromAsync(string number, string from, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/base/hex?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&from=" + (from==null? "" : System.Uri.EscapeDataString(from));
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
		/// Convert a given number to octal
		/// NumbersBaseOctalGetByNumberAndFrom numbers/base/octal
		/// </summary>
		/// <param name="number">Number to convert to octal</param>
		/// <param name="from">Base of the supplied number (Optional base 10 assumed by default)</param>
		/// <returns>200 success response</returns>
		public async Task NumbersBaseOctalGetByNumberAndFromAsync(string number, string from, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/base/octal?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&from=" + (from==null? "" : System.Uri.EscapeDataString(from));
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
		/// Get the cardinal of the given number
		/// NumbersCardinalGetByNumberAndLanguage numbers/cardinal
		/// </summary>
		/// <param name="number">Number value</param>
		/// <param name="language">Language to use</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersCardinalGetByNumberAndLanguageAsync(string number, string language, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/cardinal?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&language=" + (language==null? "" : System.Uri.EscapeDataString(language));
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
		/// Spells out the number as a currency
		/// NumbersCurrencyGetByNumberAndLanguage numbers/currency
		/// </summary>
		/// <param name="number">Number to spell</param>
		/// <param name="language">Language to use</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersCurrencyGetByNumberAndLanguageAsync(string number, string language, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/currency?number=" + (number==null? "" : System.Uri.EscapeDataString(number))+"&language=" + (language==null? "" : System.Uri.EscapeDataString(language));
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
		/// Get a random fact about a number
		/// NumbersFactGetByNumber numbers/fact
		/// </summary>
		/// <param name="number">Number value</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersFactGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/fact?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a cube number or not.
		/// NumbersIs_cubeGetByNumber numbers/is-cube
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersIs_cubeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/is-cube?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a palindrome number or not.
		/// NumbersIs_palindromeGetByNumber numbers/is-palindrome
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersIs_palindromeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/is-palindrome?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a square number or not.
		/// NumbersIs_squareGetByNumber numbers/is-square
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersIs_squareGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/is-square?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a triangle number or not.
		/// NumbersIs_triangleGetByNumber numbers/is-triangle
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersIs_triangleGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/is-triangle?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Get the number of the day for current day
		/// NumbersNodGet numbers/nod
		/// </summary>
		/// <returns>200 Success response</returns>
		public async Task NumbersNodGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/nod";
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
		/// Convert base 10 representation of a given number to chinese numeral.
		/// NumbersNumeralChineseGetByNumber numbers/numeral/chinese
		/// </summary>
		/// <param name="number">Number to convert</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersNumeralChineseGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/numeral/chinese?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Convert base 10 representation of a given number to egyptian numeral.
		/// NumbersNumeralEgyptianGetByNumber numbers/numeral/egyptian
		/// </summary>
		/// <param name="number">Number to convert</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersNumeralEgyptianGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/numeral/egyptian?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Convert base 10 representation of a given number to roman numeral.
		/// NumbersNumeralRomanGetByNumber numbers/numeral/roman
		/// </summary>
		/// <param name="number">Number to convert</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersNumeralRomanGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/numeral/roman?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Get the ordinal of the given number
		/// NumbersOrdinalGetByNumber numbers/ordinal
		/// </summary>
		/// <param name="number">Number value</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersOrdinalGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/ordinal?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Get digits of pi (Ï€)
		/// NumbersPiGetByFromAndTo numbers/pi
		/// </summary>
		/// <param name="from">Optional start position</param>
		/// <param name="to">Optional start position</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPiGetByFromAndToAsync(string from, string to, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/pi?from=" + (from==null? "" : System.Uri.EscapeDataString(from))+"&to=" + (to==null? "" : System.Uri.EscapeDataString(to));
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
		/// Get the prime factors of a given number.
		/// NumbersPrimeFactorsGetByNumber numbers/prime/factors
		/// </summary>
		/// <param name="number">Number to get the factors</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeFactorsGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/factors?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known fermat prime number or not.
		/// NumbersPrimeIs_fermat_primeGetByNumber numbers/prime/is-fermat-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_fermat_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-fermat-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known fibonacci prime number or not.
		/// NumbersPrimeIs_fibonacci_primeGetByNumber numbers/prime/is-fibonacci-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_fibonacci_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-fibonacci-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known mersenne prime number or not.
		/// NumbersPrimeIs_mersenne_primeGetByNumber numbers/prime/is-mersenne-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_mersenne_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-mersenne-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known partition prime number or not.
		/// NumbersPrimeIs_partition_primeGetByNumber numbers/prime/is-partition-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_partition_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-partition-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known pell prime number or not.
		/// NumbersPrimeIs_pell_primeGetByNumber numbers/prime/is-pell-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_pell_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-pell-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a perfect number or not.
		/// NumbersPrimeIs_perfectGetByNumber numbers/prime/is-perfect
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_perfectGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-perfect?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Checks whether a given number is a known prime number or not.
		/// NumbersPrimeIs_primeGetByNumber numbers/prime/is-prime
		/// </summary>
		/// <param name="number">Number to check</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersPrimeIs_primeGetByNumberAsync(string number, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/prime/is-prime?number=" + (number==null? "" : System.Uri.EscapeDataString(number));
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
		/// Generate random number(s)
		/// NumbersRandomGetByMinAndMaxAndTotal numbers/random
		/// </summary>
		/// <param name="min">Minimum Number value in the range</param>
		/// <param name="max">Maximum Number value</param>
		/// <param name="total">Total number of random numbers to generate. Defaults to 1</param>
		/// <returns>200 Success response</returns>
		public async Task NumbersRandomGetByMinAndMaxAndTotalAsync(string min, string max, string total, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/random?min=" + (min==null? "" : System.Uri.EscapeDataString(min))+"&max=" + (max==null? "" : System.Uri.EscapeDataString(max))+"&total=" + (total==null? "" : System.Uri.EscapeDataString(total));
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
