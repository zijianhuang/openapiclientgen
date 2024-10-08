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
	/// The content of the event request message.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryArtifactEventData
	{
		
		/// <summary>
		/// The action that encompasses the provided event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="action")]
		public string Action { get; set; }
		
		/// <summary>
		/// The event ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The target of the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public ContainerRegistryArtifactEventTarget Target { get; set; }
		
		/// <summary>
		/// The time at which the event occurred.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
	}
	
	/// <summary>
	/// The target of the event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryArtifactEventTarget
	{
		
		/// <summary>
		/// The digest of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="digest")]
		public string Digest { get; set; }
		
		/// <summary>
		/// The MIME type of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mediaType")]
		public string MediaType { get; set; }
		
		/// <summary>
		/// The name of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The repository name of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="repository")]
		public string Repository { get; set; }
		
		/// <summary>
		/// The size in bytes of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public System.Nullable<System.Int64> Size { get; set; }
		
		/// <summary>
		/// The tag of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tag")]
		public string Tag { get; set; }
		
		/// <summary>
		/// The version of the artifact.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
	}
	
	/// <summary>
	/// Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartDeleted event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryChartDeletedEventData
	{
	}
	
	/// <summary>
	/// Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ChartPushed event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryChartPushedEventData
	{
	}
	
	/// <summary>
	/// The agent that initiated the event. For most situations, this could be from the authorization context of the request.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryEventActor
	{
		
		/// <summary>
		/// The subject or username associated with the request context that generated the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// The content of the event request message.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryEventData
	{
		
		/// <summary>
		/// The action that encompasses the provided event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="action")]
		public string Action { get; set; }
		
		/// <summary>
		/// The agent that initiated the event. For most situations, this could be from the authorization context of the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actor")]
		public ContainerRegistryEventActor Actor { get; set; }
		
		/// <summary>
		/// The event ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The request that generated the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="request")]
		public ContainerRegistryEventRequest Request { get; set; }
		
		/// <summary>
		/// The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public ContainerRegistryEventSource Source { get; set; }
		
		/// <summary>
		/// The target of the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public ContainerRegistryEventTarget Target { get; set; }
		
		/// <summary>
		/// The time at which the event occurred.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
	}
	
	/// <summary>
	/// The request that generated the event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryEventRequest
	{
		
		/// <summary>
		/// The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="addr")]
		public string Addr { get; set; }
		
		/// <summary>
		/// The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="host")]
		public string Host { get; set; }
		
		/// <summary>
		/// The ID of the request that initiated the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The request method that generated the event.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="method")]
		public string Method { get; set; }
		
		/// <summary>
		/// The user agent header of the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="useragent")]
		public string Useragent { get; set; }
	}
	
	/// <summary>
	/// The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryEventSource
	{
		
		/// <summary>
		/// The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="addr")]
		public string Addr { get; set; }
		
		/// <summary>
		/// The running instance of an application. Changes after each restart.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="instanceID")]
		public string InstanceID { get; set; }
	}
	
	/// <summary>
	/// The target of the event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryEventTarget
	{
		
		/// <summary>
		/// The digest of the content, as defined by the Registry V2 HTTP API Specification.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="digest")]
		public string Digest { get; set; }
		
		/// <summary>
		/// The number of bytes of the content. Same as Size field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="length")]
		public System.Nullable<System.Int64> Length { get; set; }
		
		/// <summary>
		/// The MIME type of the referenced object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mediaType")]
		public string MediaType { get; set; }
		
		/// <summary>
		/// The repository name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="repository")]
		public string Repository { get; set; }
		
		/// <summary>
		/// The number of bytes of the content. Same as Length field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public System.Nullable<System.Int64> Size { get; set; }
		
		/// <summary>
		/// The tag name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tag")]
		public string Tag { get; set; }
		
		/// <summary>
		/// The direct URL to the content.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	/// <summary>
	/// Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImageDeleted event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryImageDeletedEventData
	{
	}
	
	/// <summary>
	/// Schema of the Data property of an EventGridEvent for a Microsoft.ContainerRegistry.ImagePushed event.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContainerRegistryImagePushedEventData
	{
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
