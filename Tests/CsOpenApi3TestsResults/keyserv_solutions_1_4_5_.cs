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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ApiCredentials
	{
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ApiKey
	{
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CountOf
	{
		
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CurrentKey
	{
		
		[System.Runtime.Serialization.DataMember(Name="current")]
		public System.Nullable<System.Boolean> Current { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Expiry
	{
		
		[System.Runtime.Serialization.DataMember(Name="expires")]
		public System.Nullable<System.DateTimeOffset> Expires { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="time")]
		public string Time { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FindCredentials
	{
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class KeyView
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="action")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Action { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="callbackOnModify")]
		public bool CallbackOnModify { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 800
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callbackUrl")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(800)]
		public string CallbackUrl { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="commenced")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public System.DateTimeOffset Commenced { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="created")]
		public System.Nullable<System.DateTimeOffset> Created { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="current")]
		public System.Nullable<System.Boolean> Current { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="custom")]
		public object Custom { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Frequency { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 80
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(80)]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.Nullable<System.DateTimeOffset> Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ProductCreateModify
	{
		
		[System.Runtime.Serialization.DataMember(Name="custom")]
		public object Custom { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ProductView
	{
		
		[System.Runtime.Serialization.DataMember(Name="created")]
		public System.Nullable<System.DateTimeOffset> Created { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="custom")]
		public object Custom { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 80
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(80)]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="subscriptions")]
		public SubscriptionView[] Subscriptions { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.Nullable<System.DateTimeOffset> Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SubscriptionView
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="action")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Action { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="callbackOnModify")]
		public bool CallbackOnModify { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 800
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callbackUrl")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(800)]
		public string CallbackUrl { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="commenced")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public System.DateTimeOffset Commenced { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="created")]
		public System.Nullable<System.DateTimeOffset> Created { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="custom")]
		public object Custom { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Frequency { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="keys")]
		public KeyView[] Keys { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 80
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(80)]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.Nullable<System.DateTimeOffset> Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SubscriptionCreateModify
	{
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="action")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Action { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="callbackOnModify")]
		public System.Nullable<System.Boolean> CallbackOnModify { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 800
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="callbackUrl")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(800)]
		public string CallbackUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="custom")]
		public object Custom { get; set; }
		
		/// <summary>
		/// Required
		/// Min length: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string Frequency { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		/// <summary>
		/// Min length: 0
		/// Max length: 80
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		[System.ComponentModel.DataAnnotations.MinLength(0)]
		[System.ComponentModel.DataAnnotations.MaxLength(80)]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="serial")]
		public string Serial { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="startFrom")]
		public string StartFrom { get; set; }
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
		/// KeysApi_Current v1/KeysApi/Current/{serial}
		/// </summary>
		public async Task<CurrentKey> KeysApi_CurrentAsync(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/KeysApi/Current/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
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
				return JsonSerializer.Deserialize<CurrentKey>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// KeysApi_Custom v1/KeysApi/Custom/{serial}
		/// </summary>
		public async Task KeysApi_CustomAsync(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/KeysApi/Custom/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
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
		/// KeysApi_Expiry v1/KeysApi/Expiry/{serial}
		/// </summary>
		public async Task<Expiry> KeysApi_ExpiryAsync(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/KeysApi/Expiry/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
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
				return JsonSerializer.Deserialize<Expiry>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// KeysApi_Find v1/KeysApi/Find/{serial}
		/// </summary>
		public async Task<KeyView> KeysApi_FindAsync(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/KeysApi/Find/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
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
				return JsonSerializer.Deserialize<KeyView>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// ProductsApi_PatchProduct v1/ProductsApi
		/// </summary>
		public async Task ProductsApi_PatchProductAsync(ProductCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
		/// ProductsApi_PatchProduct2 v1/ProductsApi
		/// </summary>
		public async Task ProductsApi_PatchProduct2Async(ProductCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi";
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
		/// ProductsApi_Count v1/ProductsApi/Count
		/// </summary>
		public async Task<CountOf> ProductsApi_CountAsync(ApiKey requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/Count";
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
				return JsonSerializer.Deserialize<CountOf>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// ProductsApi_Find v1/ProductsApi/Find
		/// </summary>
		public async Task<ProductView> ProductsApi_FindAsync(int page, FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/Find?page="+page;
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
				return JsonSerializer.Deserialize<ProductView>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// ProductsApi_List v1/ProductsApi/List
		/// </summary>
		public async Task<ProductView[]> ProductsApi_ListAsync(int page, ApiKey requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/List?page="+page;
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
				return JsonSerializer.Deserialize<ProductView[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// ProductsApi_Save v1/ProductsApi/Save
		/// </summary>
		public async Task ProductsApi_SaveAsync(ProductCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/Save";
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
		/// ProductsApi_DeleteProduct v1/ProductsApi/{serial}
		/// </summary>
		public async Task ProductsApi_DeleteProductAsync(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// ProductsApi_DeleteProduct2 v1/ProductsApi/{serial}
		/// </summary>
		public async Task ProductsApi_DeleteProduct2Async(string serial, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ProductsApi/"+ (serial==null? "" : System.Uri.EscapeDataString(serial));
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
		/// SubscriptionsApi_PutSubscription2 v1/SubscriptionsApi
		/// </summary>
		public async Task SubscriptionsApi_PutSubscription2Async(SubscriptionCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi";
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
		/// SubscriptionsApi_PutSubscription v1/SubscriptionsApi
		/// </summary>
		public async Task SubscriptionsApi_PutSubscriptionAsync(SubscriptionCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi";
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// SubscriptionsApi_Count v1/SubscriptionsApi/Count
		/// </summary>
		public async Task<CountOf> SubscriptionsApi_CountAsync(ApiCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Count";
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
				return JsonSerializer.Deserialize<CountOf>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// SubscriptionsApi_Disable v1/SubscriptionsApi/Disable
		/// </summary>
		public async Task SubscriptionsApi_DisableAsync(FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Disable";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
		/// SubscriptionsApi_Disable2 v1/SubscriptionsApi/Disable
		/// </summary>
		public async Task SubscriptionsApi_Disable2Async(FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Disable";
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
		/// SubscriptionsApi_Enable v1/SubscriptionsApi/Enable
		/// </summary>
		public async Task SubscriptionsApi_EnableAsync(FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Enable";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
		/// SubscriptionsApi_Enable2 v1/SubscriptionsApi/Enable
		/// </summary>
		public async Task SubscriptionsApi_Enable2Async(FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Enable";
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
		/// SubscriptionsApi_Find v1/SubscriptionsApi/Find
		/// </summary>
		public async Task<SubscriptionView> SubscriptionsApi_FindAsync(FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Find";
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
				return JsonSerializer.Deserialize<SubscriptionView>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// SubscriptionsApi_List v1/SubscriptionsApi/List
		/// </summary>
		public async Task<SubscriptionView[]> SubscriptionsApi_ListAsync(int page, FindCredentials requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/List?page="+page;
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
				return JsonSerializer.Deserialize<SubscriptionView[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// SubscriptionsApi_Save v1/SubscriptionsApi/Save
		/// </summary>
		public async Task SubscriptionsApi_SaveAsync(SubscriptionCreateModify requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/Save";
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
		/// SubscriptionsApi_DeleteSubscription v1/SubscriptionsApi/{serial}
		/// </summary>
		public async Task SubscriptionsApi_DeleteSubscriptionAsync(string serial, bool keep, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/"+ (serial==null? "" : System.Uri.EscapeDataString(serial))+"&keep="+keep;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// SubscriptionsApi_DeleteSubscription2 v1/SubscriptionsApi/{serial}
		/// </summary>
		public async Task SubscriptionsApi_DeleteSubscription2Async(string serial, bool keep, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/SubscriptionsApi/"+ (serial==null? "" : System.Uri.EscapeDataString(serial))+"&keep="+keep;
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