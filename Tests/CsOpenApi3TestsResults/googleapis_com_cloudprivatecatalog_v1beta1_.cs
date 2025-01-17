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
	/// The readonly representation of a catalog computed with a given resource
	///context.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1Catalog
	{
		
		/// <summary>
		/// Output only. The time when the catalog was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The description of the catalog.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Output only. The descriptive name of the catalog as it appears in UIs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the target catalog, in the format of
		///`catalogs/{catalog_id}'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Output only. The time when the catalog was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
	}
	
	/// <summary>
	/// The readonly representation of a product computed with a given resource
	///context.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1Product
	{
		
		/// <summary>
		/// Output only. The type of the product asset. It can be one of the
		///following values:
		///
		///* `google.deploymentmanager.Template`
		///* `google.cloudprivatecatalog.ListingOnly`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetType")]
		public string AssetType { get; set; }
		
		/// <summary>
		/// Output only. The time when the product was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The display metadata to describe the product.
		///The JSON schema of the metadata differs by Product.asset_type.
		///When the type is `google.deploymentmanager.Template`, the schema is as
		///follows:
		///
		///```
		///"$schema": http://json-schema.org/draft-04/schema#
		///type: object
		///properties:
		///  name:
		///    type: string
		///    minLength: 1
		///    maxLength: 64
		///  description:
		///    type: string
		///    minLength: 1
		///    maxLength: 2048
		///  tagline:
		///    type: string
		///    minLength: 1
		///    maxLength: 100
		///  support_info:
		///    type: string
		///    minLength: 1
		///    maxLength: 2048
		///  creator:
		///    type: string
		///    minLength: 1
		///    maxLength: 100
		///  documentation:
		///    type: array
		///    items:
		///      type: object
		///      properties:
		///        url:
		///          type: string
		///          pattern:
		///          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		///        title:
		///          type: string
		///          minLength: 1
		///          maxLength: 64
		///        description:
		///          type: string
		///          minLength: 1
		///          maxLength: 2048
		///required:
		///- name
		///- description
		///additionalProperties: false
		///
		///```
		///
		///When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema
		///is as follows:
		///
		///```
		///"$schema": http://json-schema.org/draft-04/schema#
		///type: object
		///properties:
		///  name:
		///    type: string
		///    minLength: 1
		///    maxLength: 64
		///  description:
		///    type: string
		///    minLength: 1
		///    maxLength: 2048
		///  tagline:
		///    type: string
		///    minLength: 1
		///    maxLength: 100
		///  support_info:
		///    type: string
		///    minLength: 1
		///    maxLength: 2048
		///  creator:
		///    type: string
		///    minLength: 1
		///    maxLength: 100
		///  documentation:
		///    type: array
		///    items:
		///      type: object
		///      properties:
		///        url:
		///          type: string
		///          pattern:
		///          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		///        title:
		///          type: string
		///          minLength: 1
		///          maxLength: 64
		///        description:
		///          type: string
		///          minLength: 1
		///          maxLength: 2048
		///  signup_url:
		///    type: string
		///    pattern:
		///    "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
		///required:
		///- name
		///- description
		///- signup_url
		///additionalProperties: false
		///```
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayMetadata")]
		public System.Collections.Generic.Dictionary<string, object> DisplayMetadata { get; set; }
		
		/// <summary>
		/// Output only. The icon URI of the product.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="iconUri")]
		public string IconUri { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the target product, in the format of
		///`products/a-z*[a-z0-9]'.
		///
		///A unique identifier for the product under a catalog.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Output only. The time when the product was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
	}
	
	/// <summary>
	/// Response message for PrivateCatalog.SearchCatalogs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
	{
		
		/// <summary>
		/// The `Catalog`s computed from the resource context.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="catalogs")]
		public GoogleCloudPrivatecatalogV1beta1Catalog[] Catalogs { get; set; }
		
		/// <summary>
		/// A pagination token returned from a previous call to SearchCatalogs that
		///indicates from where listing should continue.
		///This field is optional.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
	}
	
	/// <summary>
	/// Response message for PrivateCatalog.SearchProducts.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
	{
		
		/// <summary>
		/// A pagination token returned from a previous call to SearchProducts that
		///indicates from where listing should continue.
		///This field is optional.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The `Product` resources computed from the resource context.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="products")]
		public GoogleCloudPrivatecatalogV1beta1Product[] Products { get; set; }
	}
	
	/// <summary>
	/// Response message for PrivateCatalog.SearchVersions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
	{
		
		/// <summary>
		/// A pagination token returned from a previous call to SearchVersions that
		///indicates from where the listing should continue.
		///This field is optional.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The `Version` resources computed from the resource context.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="versions")]
		public GoogleCloudPrivatecatalogV1beta1Version[] Versions { get; set; }
	}
	
	/// <summary>
	/// The consumer representation of a version which is a child resource under a
	///`Product` with asset data.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudPrivatecatalogV1beta1Version
	{
		
		/// <summary>
		/// Output only. The asset which has been validated and is ready to be
		///provisioned. See
		///google.cloud.privatecatalogproducer.v1beta.Version.asset for details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="asset")]
		public System.Collections.Generic.Dictionary<string, object> Asset { get; set; }
		
		/// <summary>
		/// Output only. The time when the version was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The user-supplied description of the version. Maximum of 256
		///characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the version, in the format
		///`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.
		///
		///A unique identifier for the version under a product.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Output only. The time when the version was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
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
		/// Search Catalog resources that consumers have access to, within the
		/// scope of the consumer cloud resource hierarchy context.
		/// Cloudprivatecatalog_organizations_catalogs_search v1beta1/{resource}/catalogs:search
		/// </summary>
		/// <param name="resource">Required. The name of the resource context. It can be in following formats:
		///
		///* `projects/{project_id}`
		///* `folders/{folder_id}`
		///* `organizations/{organization_id}`</param>
		/// <param name="pageSize">The maximum number of entries that are requested.</param>
		/// <param name="pageToken">A pagination token returned from a previous call to SearchCatalogs that
		///indicates where this listing should continue from.
		///This field is optional.</param>
		/// <param name="query">The query to filter the catalogs. The supported queries are:
		///
		///* Get a single catalog: `name=catalogs/{catalog_id}`</param>
		/// <returns>Successful response</returns>
		public async Task Cloudprivatecatalog_organizations_catalogs_searchAsync(string resource, int pageSize, string pageToken, string query, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1beta1/"+ (resource==null? "" : System.Uri.EscapeDataString(resource))+"/catalogs:search&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&query=" + (query==null? "" : System.Uri.EscapeDataString(query));
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
		/// Search Product resources that consumers have access to, within the
		/// scope of the consumer cloud resource hierarchy context.
		/// Cloudprivatecatalog_organizations_products_search v1beta1/{resource}/products:search
		/// </summary>
		/// <param name="resource">Required. The name of the resource context. See
		///SearchCatalogsRequest.resource for details.</param>
		/// <param name="pageSize">The maximum number of entries that are requested.</param>
		/// <param name="pageToken">A pagination token returned from a previous call to SearchProducts that
		///indicates where this listing should continue from.
		///This field is optional.</param>
		/// <param name="query">The query to filter the products.
		///
		///The supported queries are:
		///* List products of all catalogs: empty
		///* List products under a catalog: `parent=catalogs/{catalog_id}`
		///* Get a product by name:
		///`name=catalogs/{catalog_id}/products/{product_id}`</param>
		/// <returns>Successful response</returns>
		public async Task Cloudprivatecatalog_organizations_products_searchAsync(string resource, int pageSize, string pageToken, string query, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1beta1/"+ (resource==null? "" : System.Uri.EscapeDataString(resource))+"/products:search&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&query=" + (query==null? "" : System.Uri.EscapeDataString(query));
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
		/// Search Version resources that consumers have access to, within the
		/// scope of the consumer cloud resource hierarchy context.
		/// Cloudprivatecatalog_organizations_versions_search v1beta1/{resource}/versions:search
		/// </summary>
		/// <param name="resource">Required. The name of the resource context. See
		///SearchCatalogsRequest.resource for details.</param>
		/// <param name="pageSize">The maximum number of entries that are requested.</param>
		/// <param name="pageToken">A pagination token returned from a previous call to SearchVersions
		///that indicates where this listing should continue from.
		///This field is optional.</param>
		/// <param name="query">The query to filter the versions. Required.
		///
		///The supported queries are:
		///* List versions under a product:
		///`parent=catalogs/{catalog_id}/products/{product_id}`
		///* Get a version by name:
		///`name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`</param>
		/// <returns>Successful response</returns>
		public async Task Cloudprivatecatalog_organizations_versions_searchAsync(string resource, int pageSize, string pageToken, string query, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1beta1/"+ (resource==null? "" : System.Uri.EscapeDataString(resource))+"/versions:search&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&query=" + (query==null? "" : System.Uri.EscapeDataString(query));
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
