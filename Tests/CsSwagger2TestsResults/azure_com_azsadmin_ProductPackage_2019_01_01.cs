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
	/// Link to a product.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProductLink
	{
		
		/// <summary>
		/// Displayed name of product.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// URI to product.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
	}
	
	/// <summary>
	/// Properties for a product package.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProductPackage
	{
		
		/// <summary>
		/// Properties for Product package.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ProductPackageProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties for Product package.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProductPackageProperties
	{
		
		/// <summary>
		/// File container resource identifier containing product manifest.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fileContainerId")]
		public string FileContainerId { get; set; }
		
		/// <summary>
		/// Value indicating whether the package is applicable for deployment.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isDeployable")]
		public System.Nullable<System.Boolean> IsDeployable { get; set; }
		
		/// <summary>
		/// Value indicating whether the package is applicable for update.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isUpdatable")]
		public System.Nullable<System.Boolean> IsUpdatable { get; set; }
		
		/// <summary>
		/// The identifier of product deployment; null if this version is not installed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="productDeploymentId")]
		public string ProductDeploymentId { get; set; }
		
		/// <summary>
		/// Provisioning state of the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
	}
	
	/// <summary>
	/// List of product packages.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProductPackagesList
	{
		
		/// <summary>
		/// Continuation Token.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of product packages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ProductPackage[] Value { get; set; }
	}
	
	/// <summary>
	/// Additional properties of the product
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProductProperties
	{
		
		/// <summary>
		/// The version of the product
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
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
		/// Returns an array of product packages.
		/// ProductPackages_List subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<ProductPackagesList> ProductPackages_ListAsync(string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/productPackages&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ProductPackagesList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves the specific product package details.
		/// ProductPackages_Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="productId">The product identifier.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<ProductPackage> ProductPackages_GetAsync(string subscriptionId, string productId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/productPackages/"+ (productId==null? "" : System.Uri.EscapeDataString(productId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ProductPackage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a new product package.
		/// ProductPackages_Create subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="productId">The product identifier.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task<ProductPackage> ProductPackages_CreateAsync(string subscriptionId, string productId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/productPackages/"+ (productId==null? "" : System.Uri.EscapeDataString(productId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ProductPackage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a product package.
		/// ProductPackages_Delete subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="productId">The product identifier.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <returns>OK</returns>
		public async Task ProductPackages_DeleteAsync(string subscriptionId, string productId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Deployment.Admin/locations/global/productPackages/"+ (productId==null? "" : System.Uri.EscapeDataString(productId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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