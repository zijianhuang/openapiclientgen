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
	/// An empty object that indicates that the configuration set was successfully created.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateConfigurationSetResponse
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TooManyRequestsException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BadRequestException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LimitExceededException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalServiceErrorException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AlreadyExistsException
	{
	}
	
	/// <summary>
	/// An empty object that indicates that the event destination was created successfully.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateConfigurationSetEventDestinationResponse
	{
	}
	
	/// <summary>
	/// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CloudWatchLogsDestination
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string IamRoleArn { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LogGroupArn { get; set; }
	}
	
	/// <summary>
	/// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class KinesisFirehoseDestination
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string DeliveryStreamArn { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IamRoleArn { get; set; }
	}
	
	/// <summary>
	/// The types of events that are sent to the event destination.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum EventType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INITIATED_CALL = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RINGING = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ANSWERED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		COMPLETED_CALL = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BUSY = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FAILED = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NO_ANSWER = 6,
	}
	
	/// <summary>
	/// An object that contains information about an event destination that sends data to Amazon SNS.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SnsDestination
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string TopicArn { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class NotFoundException
	{
	}
	
	/// <summary>
	/// An empty object that indicates that the configuration set was deleted successfully.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteConfigurationSetResponse
	{
	}
	
	/// <summary>
	/// An empty object that indicates that the event destination was deleted successfully.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteConfigurationSetEventDestinationResponse
	{
	}
	
	/// <summary>
	/// An object that contains information about an event destination.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetConfigurationSetEventDestinationsResponse
	{
		
		/// <summary>
		/// An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventDestination[] EventDestinations { get; set; }
	}
	
	/// <summary>
	/// An object that defines an event destination.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EventDestination
	{
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CloudWatchLogsDestination CloudWatchLogsDestination { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public KinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
		
		/// <summary>
		/// An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventType[] MatchingEventTypes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon SNS.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SnsDestination SnsDestination { get; set; }
	}
	
	/// <summary>
	/// An object that contains information about the configuration sets for your account in the current region.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListConfigurationSetsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string[] ConfigurationSets { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// An object that that contains the Message ID of a Voice message that was sent successfully.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SendVoiceMessageResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string MessageId { get; set; }
	}
	
	/// <summary>
	/// An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CallInstructionsMessageType
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Text { get; set; }
	}
	
	/// <summary>
	/// An object that defines a message that contains unformatted text.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlainTextMessageType
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string LanguageCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Text { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string VoiceId { get; set; }
	}
	
	/// <summary>
	/// An object that defines a message that contains SSML-formatted text.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SSMLMessageType
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string LanguageCode { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Text { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string VoiceId { get; set; }
	}
	
	/// <summary>
	/// An empty object that indicates that the event destination was updated successfully.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateConfigurationSetEventDestinationResponse
	{
	}
	
	/// <summary>
	/// An object that defines a single event destination.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class EventDestinationDefinition
	{
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CloudWatchLogsDestination CloudWatchLogsDestination { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public KinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
		
		/// <summary>
		/// An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventType[] MatchingEventTypes { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon SNS.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SnsDestination SnsDestination { get; set; }
	}
	
	/// <summary>
	/// Create a new event destination in a configuration set.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateConfigurationSetEventDestinationRequest
	{
		
		/// <summary>
		/// An object that defines a single event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventDestinationDefinition EventDestination { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string EventDestinationName { get; set; }
	}
	
	/// <summary>
	/// A request to create a new configuration set.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateConfigurationSetRequest
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string ConfigurationSetName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteConfigurationSetEventDestinationRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteConfigurationSetRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetConfigurationSetEventDestinationsRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListConfigurationSetsRequest
	{
	}
	
	/// <summary>
	/// An object that contains a voice message and information about the recipient that you want to send it to.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VoiceMessageContent
	{
		
		/// <summary>
		/// An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CallInstructionsMessageType CallInstructionsMessage { get; set; }
		
		/// <summary>
		/// An object that defines a message that contains unformatted text.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public PlainTextMessageType PlainTextMessage { get; set; }
		
		/// <summary>
		/// An object that defines a message that contains SSML-formatted text.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SSMLMessageType SSMLMessage { get; set; }
	}
	
	/// <summary>
	/// SendVoiceMessageRequest
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SendVoiceMessageRequest
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string CallerId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ConfigurationSetName { get; set; }
		
		/// <summary>
		/// An object that contains a voice message and information about the recipient that you want to send it to.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public VoiceMessageContent Content { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DestinationPhoneNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OriginationPhoneNumber { get; set; }
	}
	
	/// <summary>
	/// UpdateConfigurationSetEventDestinationRequest
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateConfigurationSetEventDestinationRequest
	{
		
		/// <summary>
		/// An object that defines a single event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventDestinationDefinition EventDestination { get; set; }
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
		/// Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
		/// CreateConfigurationSet v1/sms-voice/configuration-sets
		/// </summary>
		/// <returns>Success</returns>
		public async Task<CreateConfigurationSetResponse> CreateConfigurationSetAsync(CreateConfigurationSetPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets";
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
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<CreateConfigurationSetResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
		/// ListConfigurationSets v1/sms-voice/configuration-sets
		/// </summary>
		/// <param name="NextToken">A token returned from a previous call to the API that indicates the position in the list of results.</param>
		/// <param name="PageSize">Used to specify the number of items that should be returned in the response.</param>
		/// <returns>Success</returns>
		public async Task<ListConfigurationSetsResponse> ListConfigurationSetsAsync(string NextToken, string PageSize, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets?NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken))+"&PageSize=" + (PageSize==null? "" : System.Uri.EscapeDataString(PageSize));
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
				return JsonSerializer.Deserialize<ListConfigurationSetsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a new event destination in a configuration set.
		/// CreateConfigurationSetEventDestination v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations
		/// </summary>
		/// <param name="ConfigurationSetName">ConfigurationSetName</param>
		/// <returns>Success</returns>
		public async Task<CreateConfigurationSetEventDestinationResponse> CreateConfigurationSetEventDestinationAsync(string ConfigurationSetName, CreateConfigurationSetEventDestinationPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets/"+ (ConfigurationSetName==null? "" : System.Uri.EscapeDataString(ConfigurationSetName))+"/event-destinations";
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
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<CreateConfigurationSetEventDestinationResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
		/// GetConfigurationSetEventDestinations v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations
		/// </summary>
		/// <param name="ConfigurationSetName">ConfigurationSetName</param>
		/// <returns>Success</returns>
		public async Task<GetConfigurationSetEventDestinationsResponse> GetConfigurationSetEventDestinationsAsync(string ConfigurationSetName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets/"+ (ConfigurationSetName==null? "" : System.Uri.EscapeDataString(ConfigurationSetName))+"/event-destinations";
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
				return JsonSerializer.Deserialize<GetConfigurationSetEventDestinationsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes an existing configuration set.
		/// DeleteConfigurationSet v1/sms-voice/configuration-sets/{ConfigurationSetName}
		/// </summary>
		/// <param name="ConfigurationSetName">ConfigurationSetName</param>
		/// <returns>Success</returns>
		public async Task<DeleteConfigurationSetResponse> DeleteConfigurationSetAsync(string ConfigurationSetName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets/"+ (ConfigurationSetName==null? "" : System.Uri.EscapeDataString(ConfigurationSetName));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DeleteConfigurationSetResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes an event destination in a configuration set.
		/// DeleteConfigurationSetEventDestination v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		/// </summary>
		/// <param name="ConfigurationSetName">ConfigurationSetName</param>
		/// <param name="EventDestinationName">EventDestinationName</param>
		/// <returns>Success</returns>
		public async Task<DeleteConfigurationSetEventDestinationResponse> DeleteConfigurationSetEventDestinationAsync(string ConfigurationSetName, string EventDestinationName, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets/"+ (ConfigurationSetName==null? "" : System.Uri.EscapeDataString(ConfigurationSetName))+"/event-destinations/"+ (EventDestinationName==null? "" : System.Uri.EscapeDataString(EventDestinationName));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DeleteConfigurationSetEventDestinationResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
		/// UpdateConfigurationSetEventDestination v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		/// </summary>
		/// <param name="ConfigurationSetName">ConfigurationSetName</param>
		/// <param name="EventDestinationName">EventDestinationName</param>
		/// <returns>Success</returns>
		public async Task<UpdateConfigurationSetEventDestinationResponse> UpdateConfigurationSetEventDestinationAsync(string ConfigurationSetName, string EventDestinationName, UpdateConfigurationSetEventDestinationPutBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/configuration-sets/"+ (ConfigurationSetName==null? "" : System.Uri.EscapeDataString(ConfigurationSetName))+"/event-destinations/"+ (EventDestinationName==null? "" : System.Uri.EscapeDataString(EventDestinationName));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<UpdateConfigurationSetEventDestinationResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a new voice message and send it to a recipient's phone number.
		/// SendVoiceMessage v1/sms-voice/voice/message
		/// </summary>
		/// <returns>Success</returns>
		public async Task<SendVoiceMessageResponse> SendVoiceMessageAsync(SendVoiceMessagePostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/sms-voice/voice/message";
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
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SendVoiceMessageResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class CreateConfigurationSetPostBody
	{
		
		/// <summary>
		/// The name that you want to give the configuration set.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string ConfigurationSetName { get; set; }
	}
	
	public class CreateConfigurationSetEventDestinationPostBody
	{
		
		/// <summary>
		/// An object that defines a single event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CreateConfigurationSetEventDestinationPostBodyEventDestination EventDestination { get; set; }
		
		/// <summary>
		/// A name that identifies the event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string EventDestinationName { get; set; }
	}
	
	public class CreateConfigurationSetEventDestinationPostBodyEventDestination
	{
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CloudWatchLogsDestination CloudWatchLogsDestination { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public KinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
		
		/// <summary>
		/// An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventType[] MatchingEventTypes { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon SNS.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SnsDestination SnsDestination { get; set; }
	}
	
	public class UpdateConfigurationSetEventDestinationPutBody
	{
		
		/// <summary>
		/// An object that defines a single event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public UpdateConfigurationSetEventDestinationPutBodyEventDestination EventDestination { get; set; }
	}
	
	public class UpdateConfigurationSetEventDestinationPutBodyEventDestination
	{
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CloudWatchLogsDestination CloudWatchLogsDestination { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public KinesisFirehoseDestination KinesisFirehoseDestination { get; set; }
		
		/// <summary>
		/// An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public EventType[] MatchingEventTypes { get; set; }
		
		/// <summary>
		/// An object that contains information about an event destination that sends data to Amazon SNS.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SnsDestination SnsDestination { get; set; }
	}
	
	public class SendVoiceMessagePostBody
	{
		
		/// <summary>
		/// The phone number that appears on recipients' devices when they receive the message.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string CallerId { get; set; }
		
		/// <summary>
		/// The name of the configuration set that you want to use to send the message.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string ConfigurationSetName { get; set; }
		
		/// <summary>
		/// An object that contains a voice message and information about the recipient that you want to send it to.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SendVoiceMessagePostBodyContent Content { get; set; }
		
		/// <summary>
		/// The phone number that you want to send the voice message to.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string DestinationPhoneNumber { get; set; }
		
		/// <summary>
		/// The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public string OriginationPhoneNumber { get; set; }
	}
	
	public class SendVoiceMessagePostBodyContent
	{
		
		/// <summary>
		/// An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public CallInstructionsMessageType CallInstructionsMessage { get; set; }
		
		/// <summary>
		/// An object that defines a message that contains unformatted text.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public PlainTextMessageType PlainTextMessage { get; set; }
		
		/// <summary>
		/// An object that defines a message that contains SSML-formatted text.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public SSMLMessageType SSMLMessage { get; set; }
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