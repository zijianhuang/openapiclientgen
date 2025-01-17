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
	/// An error response from the Container service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CloudError
	{
		
		/// <summary>
		/// An error response from the Container service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public CloudErrorBody Error { get; set; }
	}
	
	/// <summary>
	/// An error response from the Container service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CloudErrorBody
	{
		
		/// <summary>
		/// An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// A list of additional details about the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public CloudErrorBody[] Details { get; set; }
		
		/// <summary>
		/// A message describing the error, intended to be suitable for display in a user interface.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// The target of the particular error. For example, the name of the property in error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
	}
	
	/// <summary>
	/// Represents the OpenShift networking configuration
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class NetworkProfile
	{
		
		/// <summary>
		/// CIDR of the Vnet to peer.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="peerVnetId")]
		public string PeerVnetId { get; set; }
		
		/// <summary>
		/// CIDR for the OpenShift Vnet.
		/// </summary>
		[System.ComponentModel.DefaultValue("10.0.0.0/8")]
		[System.Runtime.Serialization.DataMember(Name="vnetCidr")]
		public string VnetCidr { get; set; } = "10.0.0.0/8";
	}
	
	/// <summary>
	/// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum OSType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Linux = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Windows = 1,
	}
	
	/// <summary>
	/// OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum OpenShiftAgentPoolProfileRole
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		compute = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		infra = 1,
	}
	
	/// <summary>
	/// Size of OpenShift VMs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum OpenShiftContainerServiceVMSize
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D2s_v3 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D4s_v3 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D8s_v3 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D16s_v3 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D32s_v3 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_D64s_v3 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS4_v2 = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS5_v2 = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F8s_v2 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F16s_v2 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F32s_v2 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F64s_v2 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F72s_v2 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F8s = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_F16s = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E4s_v3 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E8s_v3 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E16s_v3 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E20s_v3 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E32s_v3 = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_E64s_v3 = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_GS2 = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_GS3 = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_GS4 = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_GS5 = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS12_v2 = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS13_v2 = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS14_v2 = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_DS15_v2 = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_L4s = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_L8s = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_L16s = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard_L32s = 32,
	}
	
	/// <summary>
	/// OpenShift Managed cluster.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedCluster : Resource
	{
		
		/// <summary>
		/// Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="plan")]
		public PurchasePlan Plan { get; set; }
		
		/// <summary>
		/// Properties of the OpenShift managed cluster.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public OpenShiftManagedClusterProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Defines the Identity provider for MS AAD.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterAADIdentityProvider : OpenShiftManagedClusterBaseIdentityProvider
	{
		
		/// <summary>
		/// The clientId password associated with the provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="clientId")]
		public string ClientId { get; set; }
		
		/// <summary>
		/// The secret password associated with the provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="secret")]
		public string Secret { get; set; }
		
		/// <summary>
		/// The tenantId associated with the provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantId")]
		public string TenantId { get; set; }
	}
	
	/// <summary>
	/// Defines the configuration of the OpenShift cluster VMs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterAgentPoolProfile
	{
		
		/// <summary>
		/// Number of agents (VMs) to host docker containers.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="count")]
		public int Count { get; set; }
		
		/// <summary>
		/// Unique name of the pool profile in the context of the subscription and resource group.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
		/// </summary>
		[System.ComponentModel.DefaultValue(OSType.Linux)]
		[System.Runtime.Serialization.DataMember(Name="osType")]
		public OSType OsType { get; set; } = OSType.Linux;
		
		/// <summary>
		/// OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="role")]
		public OpenShiftAgentPoolProfileRole Role { get; set; }
		
		/// <summary>
		/// Subnet CIDR for the peering.
		/// </summary>
		[System.ComponentModel.DefaultValue("10.0.0.0/24")]
		[System.Runtime.Serialization.DataMember(Name="subnetCidr")]
		public string SubnetCidr { get; set; } = "10.0.0.0/24";
		
		/// <summary>
		/// Size of OpenShift VMs.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="vmSize")]
		public OpenShiftContainerServiceVMSize VmSize { get; set; }
	}
	
	/// <summary>
	/// Defines all possible authentication profiles for the OpenShift cluster.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterAuthProfile
	{
		
		/// <summary>
		/// Type of authentication profile to use.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="identityProviders")]
		public OpenShiftManagedClusterIdentityProvider[] IdentityProviders { get; set; }
	}
	
	/// <summary>
	/// Defines the configuration of the identity providers to be used in the OpenShift cluster.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterIdentityProvider
	{
		
		/// <summary>
		/// Name of the provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Structure for any Identity provider.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provider")]
		public OpenShiftManagedClusterBaseIdentityProvider Provider { get; set; }
	}
	
	/// <summary>
	/// Structure for any Identity provider.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterBaseIdentityProvider
	{
		
		/// <summary>
		/// The kind of the provider.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="kind")]
		public string Kind { get; set; }
	}
	
	/// <summary>
	/// The response from the List OpenShift Managed Clusters operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterListResult
	{
		
		/// <summary>
		/// The URL to get the next set of OpenShift managed cluster results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of OpenShift managed clusters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public OpenShiftManagedCluster[] Value { get; set; }
	}
	
	/// <summary>
	/// OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterMasterPoolProfile
	{
		
		/// <summary>
		/// Number of masters (VMs) to host docker containers. The default value is 3.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="count")]
		public int Count { get; set; }
		
		/// <summary>
		/// Unique name of the master pool profile in the context of the subscription and resource group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
		/// </summary>
		[System.ComponentModel.DefaultValue(OSType.Linux)]
		[System.Runtime.Serialization.DataMember(Name="osType")]
		public OSType OsType { get; set; } = OSType.Linux;
		
		/// <summary>
		/// Subnet CIDR for the peering.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subnetCidr")]
		public string SubnetCidr { get; set; }
		
		/// <summary>
		/// Size of OpenShift VMs.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="vmSize")]
		public OpenShiftContainerServiceVMSize VmSize { get; set; }
	}
	
	/// <summary>
	/// Properties of the OpenShift managed cluster.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftManagedClusterProperties
	{
		
		/// <summary>
		/// Configuration of OpenShift cluster VMs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="agentPoolProfiles")]
		public OpenShiftManagedClusterAgentPoolProfile[] AgentPoolProfiles { get; set; }
		
		/// <summary>
		/// Defines all possible authentication profiles for the OpenShift cluster.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="authProfile")]
		public OpenShiftManagedClusterAuthProfile AuthProfile { get; set; }
		
		/// <summary>
		/// User-specified FQDN for OpenShift API server loadbalancer internal hostname.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fqdn")]
		public string Fqdn { get; set; }
		
		/// <summary>
		/// OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="masterPoolProfile")]
		public OpenShiftManagedClusterMasterPoolProfile MasterPoolProfile { get; set; }
		
		/// <summary>
		/// Represents the OpenShift networking configuration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="networkProfile")]
		public NetworkProfile NetworkProfile { get; set; }
		
		/// <summary>
		/// Version of OpenShift specified when creating the cluster.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="openShiftVersion")]
		public string OpenShiftVersion { get; set; }
		
		/// <summary>
		/// The current deployment or provisioning state, which only appears in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
		
		/// <summary>
		/// Optional user-specified FQDN for OpenShift API server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicHostname")]
		public string PublicHostname { get; set; }
		
		/// <summary>
		/// Configuration for OpenShift router(s).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="routerProfiles")]
		public OpenShiftRouterProfile[] RouterProfiles { get; set; }
	}
	
	/// <summary>
	/// Represents an OpenShift router
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class OpenShiftRouterProfile
	{
		
		/// <summary>
		/// Auto-allocated FQDN for the OpenShift router.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fqdn")]
		public string Fqdn { get; set; }
		
		/// <summary>
		/// Name of the router profile.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// DNS subdomain for OpenShift router.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicSubdomain")]
		public string PublicSubdomain { get; set; }
	}
	
	/// <summary>
	/// Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PurchasePlan
	{
		
		/// <summary>
		/// The plan ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="product")]
		public string Product { get; set; }
		
		/// <summary>
		/// The promotion code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="promotionCode")]
		public string PromotionCode { get; set; }
		
		/// <summary>
		/// The plan ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publisher")]
		public string Publisher { get; set; }
	}
	
	/// <summary>
	/// The Resource model definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// Resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Resource location
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Resource name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
		
		/// <summary>
		/// Resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// Tags object for patch operations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TagsObject
	{
		
		/// <summary>
		/// Resource tags.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
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
		/// Gets a list of OpenShift managed clusters in the specified subscription.
		/// Gets a list of OpenShift managed clusters in the specified subscription. The operation returns properties of each OpenShift managed cluster.
		/// OpenShiftManagedClusters_List subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/openShiftManagedClusters
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>OK</returns>
		public async Task<OpenShiftManagedClusterListResult> OpenShiftManagedClusters_ListAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.ContainerService/openShiftManagedClusters?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OpenShiftManagedClusterListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists OpenShift managed clusters in the specified subscription and resource group.
		/// Lists OpenShift managed clusters in the specified subscription and resource group. The operation returns properties of each OpenShift managed cluster.
		/// OpenShiftManagedClusters_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <returns>OK</returns>
		public async Task<OpenShiftManagedClusterListResult> OpenShiftManagedClusters_ListByResourceGroupAsync(string api_version, string subscriptionId, string resourceGroupName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ContainerService/openShiftManagedClusters?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OpenShiftManagedClusterListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a OpenShift managed cluster.
		/// Gets the details of the managed OpenShift cluster with a specified resource group and name.
		/// OpenShiftManagedClusters_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the OpenShift managed cluster resource.</param>
		/// <returns>OK</returns>
		public async Task<OpenShiftManagedCluster> OpenShiftManagedClusters_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string resourceName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ContainerService/openShiftManagedClusters/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OpenShiftManagedCluster>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates an OpenShift managed cluster.
		/// Creates or updates a OpenShift managed cluster with the specified configuration for agents and OpenShift version.
		/// OpenShiftManagedClusters_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the OpenShift managed cluster resource.</param>
		/// <param name="requestBody">Parameters supplied to the Create or Update an OpenShift Managed Cluster operation.</param>
		/// <returns>OK</returns>
		public async Task<OpenShiftManagedCluster> OpenShiftManagedClusters_CreateOrUpdateAsync(string api_version, string subscriptionId, string resourceGroupName, string resourceName, OpenShiftManagedCluster requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ContainerService/openShiftManagedClusters/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OpenShiftManagedCluster>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes an OpenShift managed cluster.
		/// Deletes the OpenShift managed cluster with a specified resource group and name.
		/// OpenShiftManagedClusters_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the OpenShift managed cluster resource.</param>
		public async Task OpenShiftManagedClusters_DeleteAsync(string api_version, string subscriptionId, string resourceGroupName, string resourceName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ContainerService/openShiftManagedClusters/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		
		/// <summary>
		/// Updates tags on an OpenShift managed cluster.
		/// Updates an OpenShift managed cluster with the specified tags.
		/// OpenShiftManagedClusters_UpdateTags subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		/// </summary>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the OpenShift managed cluster resource.</param>
		/// <param name="requestBody">Parameters supplied to the Update OpenShift Managed Cluster Tags operation.</param>
		/// <returns>OK</returns>
		public async Task<OpenShiftManagedCluster> OpenShiftManagedClusters_UpdateTagsAsync(string api_version, string subscriptionId, string resourceGroupName, string resourceName, TagsObject requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ContainerService/openShiftManagedClusters/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<OpenShiftManagedCluster>(streamContent, jsonSerializerSettings);
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
