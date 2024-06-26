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
	
	
	/// <summary>
	/// Error information returned by the API.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class APIError
	{
		
		/// <summary>
		/// The error code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<APIErrorCode> Code { get; set; }
		
		/// <summary>
		/// A message explaining the error reported by the service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum APIErrorCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidCustomInterval = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BadArgument = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidGranularity = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidPeriod = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidModelArgument = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidSeries = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidJsonFormat = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RequiredGranularity = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RequiredSeries = 8,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ChangePointDetectRequest
	{
		
		/// <summary>
		/// Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customInterval")]
		public System.Nullable<System.Int32> CustomInterval { get; set; }
		
		/// <summary>
		/// Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="granularity")]
		public ChangePointDetectRequestGranularity Granularity { get; set; }
		
		/// <summary>
		/// Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="period")]
		public System.Nullable<System.Int32> Period { get; set; }
		
		/// <summary>
		/// Time series data points. Points should be sorted by timestamp in ascending order to match the change point detection result.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="series")]
		public Point[] Series { get; set; }
		
		/// <summary>
		/// Optional argument, advanced model parameter, a default stableTrendWindow will be used in detection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stableTrendWindow")]
		public System.Nullable<System.Int32> StableTrendWindow { get; set; }
		
		/// <summary>
		/// Optional argument, advanced model parameter, between 0.0-1.0, the lower the value is, the larger the trend error will be which means less change point will be accepted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="threshold")]
		public System.Nullable<System.Single> Threshold { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ChangePointDetectRequestGranularity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		yearly = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		monthly = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		weekly = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		daily = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		hourly = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		minutely = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Point
	{
		
		/// <summary>
		/// Timestamp of a data point (ISO8601 format).
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.DateTimeOffset Timestamp { get; set; }
		
		/// <summary>
		/// The measurement of that point, should be float.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public float Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ChangePointDetectResponse
	{
		
		/// <summary>
		/// the change point confidence of each point
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="confidenceScores")]
		public double[] ConfidenceScores { get; set; }
		
		/// <summary>
		/// isChangePoint contains change point properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isChangePoint")]
		public bool[] IsChangePoint { get; set; }
		
		/// <summary>
		/// Frequency extracted from the series, zero means no recurrent pattern has been found.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="period")]
		public int Period { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class EntireDetectResponse
	{
		
		/// <summary>
		/// ExpectedValues contain expected value for each input point. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="expectedValues")]
		public double[] ExpectedValues { get; set; }
		
		/// <summary>
		/// IsAnomaly contains anomaly properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isAnomaly")]
		public bool[] IsAnomaly { get; set; }
		
		/// <summary>
		/// IsNegativeAnomaly contains anomaly status in negative direction for each input point. True means a negative anomaly has been detected. A negative anomaly means the point is detected as an anomaly and its real value is smaller than the expected one. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isNegativeAnomaly")]
		public bool[] IsNegativeAnomaly { get; set; }
		
		/// <summary>
		/// IsPositiveAnomaly contain anomaly status in positive direction for each input point. True means a positive anomaly has been detected. A positive anomaly means the point is detected as an anomaly and its real value is larger than the expected one. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isPositiveAnomaly")]
		public bool[] IsPositiveAnomaly { get; set; }
		
		/// <summary>
		/// LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="lowerMargins")]
		public double[] LowerMargins { get; set; }
		
		/// <summary>
		/// Frequency extracted from the series, zero means no recurrent pattern has been found.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="period")]
		public int Period { get; set; }
		
		/// <summary>
		/// UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting marginScale value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="upperMargins")]
		public double[] UpperMargins { get; set; }
	}
	
	/// <summary>
	/// Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum Granularity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		yearly = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		monthly = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		weekly = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		daily = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		hourly = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		minutely = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class LastDetectResponse
	{
		
		/// <summary>
		/// Expected value of the latest point.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="expectedValue")]
		public float ExpectedValue { get; set; }
		
		/// <summary>
		/// Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isAnomaly")]
		public bool IsAnomaly { get; set; }
		
		/// <summary>
		/// Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isNegativeAnomaly")]
		public bool IsNegativeAnomaly { get; set; }
		
		/// <summary>
		/// Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="isPositiveAnomaly")]
		public bool IsPositiveAnomaly { get; set; }
		
		/// <summary>
		/// Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. 
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="lowerMargin")]
		public float LowerMargin { get; set; }
		
		/// <summary>
		/// Frequency extracted from the series, zero means no recurrent pattern has been found.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="period")]
		public int Period { get; set; }
		
		/// <summary>
		/// Suggested input series points needed for detecting the latest point.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="suggestedWindow")]
		public int SuggestedWindow { get; set; }
		
		/// <summary>
		/// Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting marginScale value, anomaly status of latest point can be changed.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="upperMargin")]
		public float UpperMargin { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Request
	{
		
		/// <summary>
		/// Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customInterval")]
		public System.Nullable<System.Int32> CustomInterval { get; set; }
		
		/// <summary>
		/// Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="granularity")]
		public ChangePointDetectRequestGranularity Granularity { get; set; }
		
		/// <summary>
		/// Optional argument, advanced model parameter, max anomaly ratio in a time series.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxAnomalyRatio")]
		public System.Nullable<System.Single> MaxAnomalyRatio { get; set; }
		
		/// <summary>
		/// Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="period")]
		public System.Nullable<System.Int32> Period { get; set; }
		
		/// <summary>
		/// Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sensitivity")]
		public System.Nullable<System.Int32> Sensitivity { get; set; }
		
		/// <summary>
		/// Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="series")]
		public Point[] Series { get; set; }
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
		/// Detect change point for the entire series
		/// Evaluate change point score of every series point
		/// ChangePointDetect timeseries/changePoint/detect
		/// </summary>
		/// <param name="requestBody">Time series points and granularity is needed. Advanced model parameters can also be set in the request if needed.</param>
		/// <returns>Successful operation.</returns>
		public async Task<ChangePointDetectResponse> ChangePointDetectAsync(ChangePointDetectRequest requestBody)
		{
			var requestUri = "timeseries/changePoint/detect";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ChangePointDetectResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Detect anomalies for the entire series in batch.
		/// This operation generates a model using an entire series, each point is detected with the same model. With this method, points before and after a certain point are used to determine whether it is an anomaly. The entire detection can give user an overall status of the time series.
		/// EntireDetect timeseries/entire/detect
		/// </summary>
		/// <param name="requestBody">Time series points and period if needed. Advanced model parameters can also be set in the request.</param>
		/// <returns>Successful operation.</returns>
		public async Task<EntireDetectResponse> EntireDetectAsync(Request requestBody)
		{
			var requestUri = "timeseries/entire/detect";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<EntireDetectResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Detect anomaly status of the latest point in time series.
		/// This operation generates a model using points before the latest one. With this method, only historical points are used to determine whether the target point is an anomaly. The latest point detecting operation matches the scenario of real-time monitoring of business metrics.
		/// LastDetect timeseries/last/detect
		/// </summary>
		/// <param name="requestBody">Time series points and period if needed. Advanced model parameters can also be set in the request.</param>
		/// <returns>Successful operation.</returns>
		public async Task<LastDetectResponse> LastDetectAsync(Request requestBody)
		{
			var requestUri = "timeseries/last/detect";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<LastDetectResponse>(streamContent, jsonSerializerSettings);
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
