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
	/// Represents user interaction event information sent using the <code>PutEvents</code> API.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Event
	{
		
		[System.Runtime.Serialization.DataMember(Name="eventId")]
		public string EventId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="eventType")]
		public string EventType { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="eventValue")]
		public float EventValue { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="itemId")]
		public string ItemId { get; set; }
		
		/// <summary>
		/// <p>A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>) , you might also send the number of movie ratings made by the user.</p> <p>Each item in the map consists of a key-value pair. For example,</p> <p> <code>{"numberOfRatings": "12"}</code> </p> <p>The keys use camel case names that match the fields in the Interactions schema. In the above example, the <code>numberOfRatings</code> would match the 'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public object Properties { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="sentAt")]
		public System.DateTimeOffset SentAt { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="recommendationId")]
		public string RecommendationId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="impression")]
		public string[] Impression { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="metricAttribution")]
		public MetricAttribution MetricAttribution { get; set; }
	}
	
	/// <summary>
	/// Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MetricAttribution
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="eventAttributionSource")]
		public string EventAttributionSource { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InvalidInputException
	{
	}
	
	/// <summary>
	/// Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Item
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="itemId")]
		public string ItemId { get; set; }
		
		/// <summary>
		/// <p>A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfRatings": "12"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the <code>numberOfRatings</code> matches the 'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Horror|Action\"</code>.</p>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public object Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceNotFoundException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceInUseException
	{
	}
	
	/// <summary>
	/// Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class User
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
		
		/// <summary>
		/// <p>A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfVideosWatched": "45"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the 'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Member|Frequent shopper\"</code>.</p>
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public object Properties { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PutEventsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="trackingId")]
		public string TrackingId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="sessionId")]
		public string SessionId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="eventList")]
		public Event[] EventList { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PutItemsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="datasetArn")]
		public string DatasetArn { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="items")]
		public Item[] Items { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PutUsersRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="datasetArn")]
		public string DatasetArn { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="users")]
		public User[] Users { get; set; }
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
		/// Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
		/// PutEvents events
		/// </summary>
		/// <returns>Success</returns>
		public async Task PutEventsAsync(PutEventsPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "events";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
		/// Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
		/// PutItems items
		/// </summary>
		/// <returns>Success</returns>
		public async Task PutItemsAsync(PutItemsPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "items";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
		/// Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
		/// PutUsers users
		/// </summary>
		/// <returns>Success</returns>
		public async Task PutUsersAsync(PutUsersPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "users";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
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
	
	public class PutEventsPostBody
	{
		
		/// <summary>
		/// The tracking ID for the event. The ID is generated by a call to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.
		/// Required
		/// Min length: 1
		/// Max length: 256
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="trackingId")]
		[System.ComponentModel.DataAnnotations.Length(1, 256)]
		public string TrackingId { get; set; }
		
		/// <summary>
		/// The user associated with the event.
		/// Min length: 1
		/// Max length: 256
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		[System.ComponentModel.DataAnnotations.Length(1, 256)]
		public string UserId { get; set; }
		
		/// <summary>
		/// The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
		/// Required
		/// Min length: 1
		/// Max length: 256
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="sessionId")]
		[System.ComponentModel.DataAnnotations.Length(1, 256)]
		public string SessionId { get; set; }
		
		/// <summary>
		/// A list of event data from the session.
		/// Required
		/// Minimum items: 1
		/// Maximum items: 10
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="eventList")]
		[System.ComponentModel.DataAnnotations.Length(1, 10)]
		public Event[] EventList { get; set; }
	}
	
	public class PutItemsPostBody
	{
		
		/// <summary>
		/// The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.
		/// Required
		/// Max length: 256
		/// Pattern: arn:([a-z\d-]+):personalize:.*:.*:.+
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="datasetArn")]
		[System.ComponentModel.DataAnnotations.MaxLength(256)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"arn:([a-z\d-]+):personalize:.*:.*:.+")]
		public string DatasetArn { get; set; }
		
		/// <summary>
		/// A list of item data.
		/// Required
		/// Minimum items: 1
		/// Maximum items: 10
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="items")]
		[System.ComponentModel.DataAnnotations.Length(1, 10)]
		public Item[] Items { get; set; }
	}
	
	public class PutUsersPostBody
	{
		
		/// <summary>
		/// The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.
		/// Required
		/// Max length: 256
		/// Pattern: arn:([a-z\d-]+):personalize:.*:.*:.+
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="datasetArn")]
		[System.ComponentModel.DataAnnotations.MaxLength(256)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"arn:([a-z\d-]+):personalize:.*:.*:.+")]
		public string DatasetArn { get; set; }
		
		/// <summary>
		/// A list of user data.
		/// Required
		/// Minimum items: 1
		/// Maximum items: 10
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="users")]
		[System.ComponentModel.DataAnnotations.Length(1, 10)]
		public User[] Users { get; set; }
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
