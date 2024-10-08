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
	
	
	public class Connection
	{
	}
	
	/// <summary>
	/// The parameters supplied to the create or update connection operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionCreateOrUpdateParameters
	{
		
		/// <summary>
		/// Gets or sets the name of the connection.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The properties of the create connection properties
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ConnectionCreateOrUpdateProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The properties of the create connection properties
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionCreateOrUpdateProperties
	{
		
		/// <summary>
		/// The connection type property associated with the entity.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="connectionType")]
		public ConnectionTypeAssociationProperty ConnectionType { get; set; }
		
		/// <summary>
		/// Gets or sets the description of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets the field definition properties of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fieldDefinitionValues")]
		public System.Collections.Generic.Dictionary<string, string> FieldDefinitionValues { get; set; }
	}
	
	/// <summary>
	/// The response model for the list connection operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionListResult
	{
		
		/// <summary>
		/// Gets or sets the next link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Gets or sets a list of connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Connection[] Value { get; set; }
	}
	
	/// <summary>
	/// Definition of the connection properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionProperties
	{
		
		/// <summary>
		/// The connection type property associated with the entity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="connectionType")]
		public ConnectionTypeAssociationProperty ConnectionType { get; set; }
		
		/// <summary>
		/// Gets the creation time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets the field definition values of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fieldDefinitionValues")]
		public System.Collections.Generic.Dictionary<string, string> FieldDefinitionValues { get; set; }
		
		/// <summary>
		/// Gets the last modified time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public System.Nullable<System.DateTimeOffset> LastModifiedTime { get; set; }
	}
	
	/// <summary>
	/// The connection type property associated with the entity.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionTypeAssociationProperty
	{
		
		/// <summary>
		/// Gets or sets the name of the connection type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// The parameters supplied to the update connection operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionUpdateParameters
	{
		
		/// <summary>
		/// Gets or sets the name of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The properties of the update connection operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ConnectionUpdateProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The properties of the update connection operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ConnectionUpdateProperties
	{
		
		/// <summary>
		/// Gets or sets the description of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets the field definition values of the connection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fieldDefinitionValues")]
		public System.Collections.Generic.Dictionary<string, string> FieldDefinitionValues { get; set; }
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
		/// Retrieve a list of connections.
		/// Connection_ListByAutomationAccount subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<ConnectionListResult> Connection_ListByAutomationAccountAsync(string resourceGroupName, string automationAccountName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/connections&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ConnectionListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve the connection identified by connection name.
		/// Connection_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="connectionName">The name of connection.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<Connection> Connection_GetAsync(string resourceGroupName, string automationAccountName, string connectionName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/connections/"+ (connectionName==null? "" : System.Uri.EscapeDataString(connectionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Connection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create or update a connection.
		/// Connection_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="connectionName">The parameters supplied to the create or update connection operation.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The parameters supplied to the create or update connection operation.</param>
		/// <returns>OK</returns>
		public async Task<Connection> Connection_CreateOrUpdateAsync(string resourceGroupName, string automationAccountName, string connectionName, string subscriptionId, string api_version, ConnectionCreateOrUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/connections/"+ (connectionName==null? "" : System.Uri.EscapeDataString(connectionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Connection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete the connection.
		/// Connection_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="connectionName">The name of connection.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<Connection> Connection_DeleteAsync(string resourceGroupName, string automationAccountName, string connectionName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/connections/"+ (connectionName==null? "" : System.Uri.EscapeDataString(connectionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Connection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update a connection.
		/// Connection_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="connectionName">The parameters supplied to the update a connection operation.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The parameters supplied to the update a connection operation.</param>
		/// <returns>OK</returns>
		public async Task<Connection> Connection_UpdateAsync(string resourceGroupName, string automationAccountName, string connectionName, string subscriptionId, string api_version, ConnectionUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/connections/"+ (connectionName==null? "" : System.Uri.EscapeDataString(connectionName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Connection>(streamContent, jsonSerializerSettings);
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
