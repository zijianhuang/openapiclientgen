import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Container service. */
	export interface CloudError {

		/** An error response from the Container service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Container service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Container service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Container service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the OpenShift networking configuration */
	export interface NetworkProfile {

		/** CIDR of the Vnet to peer. */
		peerVnetId?: string | null;

		/** CIDR for the OpenShift Vnet. */
		vnetCidr?: string | null;

		/** ID of the Vnet created for OSA cluster. */
		vnetId?: string | null;
	}

	/** Represents the OpenShift networking configuration */
	export interface NetworkProfileFormProperties {

		/** CIDR of the Vnet to peer. */
		peerVnetId: FormControl<string | null | undefined>,

		/** CIDR for the OpenShift Vnet. */
		vnetCidr: FormControl<string | null | undefined>,

		/** ID of the Vnet created for OSA cluster. */
		vnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkProfileFormGroup() {
		return new FormGroup<NetworkProfileFormProperties>({
			peerVnetId: new FormControl<string | null | undefined>(undefined),
			vnetCidr: new FormControl<string | null | undefined>(undefined),
			vnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. */
	export enum OSType { Linux = 'Linux', Windows = 'Windows' }


	/** OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile. */
	export enum OpenShiftAgentPoolProfileRole { compute = 'compute', infra = 'infra' }


	/** Size of OpenShift VMs. */
	export enum OpenShiftContainerServiceVMSize { Standard_D2s_v3 = 'Standard_D2s_v3', Standard_D4s_v3 = 'Standard_D4s_v3', Standard_D8s_v3 = 'Standard_D8s_v3', Standard_D16s_v3 = 'Standard_D16s_v3', Standard_D32s_v3 = 'Standard_D32s_v3', Standard_D64s_v3 = 'Standard_D64s_v3', Standard_DS4_v2 = 'Standard_DS4_v2', Standard_DS5_v2 = 'Standard_DS5_v2', Standard_F8s_v2 = 'Standard_F8s_v2', Standard_F16s_v2 = 'Standard_F16s_v2', Standard_F32s_v2 = 'Standard_F32s_v2', Standard_F64s_v2 = 'Standard_F64s_v2', Standard_F72s_v2 = 'Standard_F72s_v2', Standard_F8s = 'Standard_F8s', Standard_F16s = 'Standard_F16s', Standard_E4s_v3 = 'Standard_E4s_v3', Standard_E8s_v3 = 'Standard_E8s_v3', Standard_E16s_v3 = 'Standard_E16s_v3', Standard_E20s_v3 = 'Standard_E20s_v3', Standard_E32s_v3 = 'Standard_E32s_v3', Standard_E64s_v3 = 'Standard_E64s_v3', Standard_GS2 = 'Standard_GS2', Standard_GS3 = 'Standard_GS3', Standard_GS4 = 'Standard_GS4', Standard_GS5 = 'Standard_GS5', Standard_DS12_v2 = 'Standard_DS12_v2', Standard_DS13_v2 = 'Standard_DS13_v2', Standard_DS14_v2 = 'Standard_DS14_v2', Standard_DS15_v2 = 'Standard_DS15_v2', Standard_L4s = 'Standard_L4s', Standard_L8s = 'Standard_L8s', Standard_L16s = 'Standard_L16s', Standard_L32s = 'Standard_L32s' }


	/** OpenShift Managed cluster. */
	export interface OpenShiftManagedCluster extends Resource {

		/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
		plan?: PurchasePlan;

		/** Properties of the OpenShift managed cluster. */
		properties?: OpenShiftManagedClusterProperties;
	}

	/** OpenShift Managed cluster. */
	export interface OpenShiftManagedClusterFormProperties extends ResourceFormProperties {
	}
	export function CreateOpenShiftManagedClusterFormGroup() {
		return new FormGroup<OpenShiftManagedClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the Identity provider for MS AAD. */
	export interface OpenShiftManagedClusterAADIdentityProvider extends OpenShiftManagedClusterBaseIdentityProvider {

		/** The clientId password associated with the provider. */
		clientId?: string | null;

		/** The groupId to be granted cluster admin role. */
		customerAdminGroupId?: string | null;

		/** The secret password associated with the provider. */
		secret?: string | null;

		/** The tenantId associated with the provider. */
		tenantId?: string | null;
	}

	/** Defines the Identity provider for MS AAD. */
	export interface OpenShiftManagedClusterAADIdentityProviderFormProperties extends OpenShiftManagedClusterBaseIdentityProviderFormProperties {

		/** The clientId password associated with the provider. */
		clientId: FormControl<string | null | undefined>,

		/** The groupId to be granted cluster admin role. */
		customerAdminGroupId: FormControl<string | null | undefined>,

		/** The secret password associated with the provider. */
		secret: FormControl<string | null | undefined>,

		/** The tenantId associated with the provider. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterAADIdentityProviderFormGroup() {
		return new FormGroup<OpenShiftManagedClusterAADIdentityProviderFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
			customerAdminGroupId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the configuration of the OpenShift cluster VMs. */
	export interface OpenShiftManagedClusterAgentPoolProfile {

		/**
		 * Number of agents (VMs) to host docker containers.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * Unique name of the pool profile in the context of the subscription and resource group.
		 * Required
		 */
		name: string;

		/** OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. */
		osType?: OSType | null;

		/** OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile. */
		role?: OpenShiftAgentPoolProfileRole | null;

		/** Subnet CIDR for the peering. */
		subnetCidr?: string | null;

		/**
		 * Size of OpenShift VMs.
		 * Required
		 */
		vmSize: OpenShiftContainerServiceVMSize;
	}

	/** Defines the configuration of the OpenShift cluster VMs. */
	export interface OpenShiftManagedClusterAgentPoolProfileFormProperties {

		/**
		 * Number of agents (VMs) to host docker containers.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique name of the pool profile in the context of the subscription and resource group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. */
		osType: FormControl<OSType | null | undefined>,

		/** OpenShiftAgentPoolProfileRole represents the role of the AgentPoolProfile. */
		role: FormControl<OpenShiftAgentPoolProfileRole | null | undefined>,

		/** Subnet CIDR for the peering. */
		subnetCidr: FormControl<string | null | undefined>,

		/**
		 * Size of OpenShift VMs.
		 * Required
		 */
		vmSize: FormControl<OpenShiftContainerServiceVMSize | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterAgentPoolProfileFormGroup() {
		return new FormGroup<OpenShiftManagedClusterAgentPoolProfileFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<OSType | null | undefined>(undefined),
			role: new FormControl<OpenShiftAgentPoolProfileRole | null | undefined>(undefined),
			subnetCidr: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<OpenShiftContainerServiceVMSize | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines all possible authentication profiles for the OpenShift cluster. */
	export interface OpenShiftManagedClusterAuthProfile {

		/** Type of authentication profile to use. */
		identityProviders?: Array<OpenShiftManagedClusterIdentityProvider>;
	}

	/** Defines all possible authentication profiles for the OpenShift cluster. */
	export interface OpenShiftManagedClusterAuthProfileFormProperties {
	}
	export function CreateOpenShiftManagedClusterAuthProfileFormGroup() {
		return new FormGroup<OpenShiftManagedClusterAuthProfileFormProperties>({
		});

	}


	/** Defines the configuration of the identity providers to be used in the OpenShift cluster. */
	export interface OpenShiftManagedClusterIdentityProvider {

		/** Name of the provider. */
		name?: string | null;

		/** Structure for any Identity provider. */
		provider?: OpenShiftManagedClusterBaseIdentityProvider;
	}

	/** Defines the configuration of the identity providers to be used in the OpenShift cluster. */
	export interface OpenShiftManagedClusterIdentityProviderFormProperties {

		/** Name of the provider. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterIdentityProviderFormGroup() {
		return new FormGroup<OpenShiftManagedClusterIdentityProviderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structure for any Identity provider. */
	export interface OpenShiftManagedClusterBaseIdentityProvider {

		/**
		 * The kind of the provider.
		 * Required
		 */
		kind: string;
	}

	/** Structure for any Identity provider. */
	export interface OpenShiftManagedClusterBaseIdentityProviderFormProperties {

		/**
		 * The kind of the provider.
		 * Required
		 */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterBaseIdentityProviderFormGroup() {
		return new FormGroup<OpenShiftManagedClusterBaseIdentityProviderFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from the List OpenShift Managed Clusters operation. */
	export interface OpenShiftManagedClusterListResult {

		/** The URL to get the next set of OpenShift managed cluster results. */
		nextLink?: string | null;

		/** The list of OpenShift managed clusters. */
		value?: Array<OpenShiftManagedCluster>;
	}

	/** The response from the List OpenShift Managed Clusters operation. */
	export interface OpenShiftManagedClusterListResultFormProperties {

		/** The URL to get the next set of OpenShift managed cluster results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterListResultFormGroup() {
		return new FormGroup<OpenShiftManagedClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs. */
	export interface OpenShiftManagedClusterMasterPoolProfile {

		/**
		 * Number of masters (VMs) to host docker containers. The default value is 3.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/** Unique name of the master pool profile in the context of the subscription and resource group. */
		name?: string | null;

		/** OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. */
		osType?: OSType | null;

		/** Subnet CIDR for the peering. */
		subnetCidr?: string | null;

		/**
		 * Size of OpenShift VMs.
		 * Required
		 */
		vmSize: OpenShiftContainerServiceVMSize;
	}

	/** OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs. */
	export interface OpenShiftManagedClusterMasterPoolProfileFormProperties {

		/**
		 * Number of masters (VMs) to host docker containers. The default value is 3.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Unique name of the master pool profile in the context of the subscription and resource group. */
		name: FormControl<string | null | undefined>,

		/** OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux. */
		osType: FormControl<OSType | null | undefined>,

		/** Subnet CIDR for the peering. */
		subnetCidr: FormControl<string | null | undefined>,

		/**
		 * Size of OpenShift VMs.
		 * Required
		 */
		vmSize: FormControl<OpenShiftContainerServiceVMSize | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterMasterPoolProfileFormGroup() {
		return new FormGroup<OpenShiftManagedClusterMasterPoolProfileFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<OSType | null | undefined>(undefined),
			subnetCidr: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<OpenShiftContainerServiceVMSize | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the configuration for Log Analytics integration. */
	export interface OpenShiftManagedClusterMonitorProfile {

		/** If the Log analytics integration should be turned on or off */
		enabled?: boolean | null;

		/** Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with. */
		workspaceResourceID?: string | null;
	}

	/** Defines the configuration for Log Analytics integration. */
	export interface OpenShiftManagedClusterMonitorProfileFormProperties {

		/** If the Log analytics integration should be turned on or off */
		enabled: FormControl<boolean | null | undefined>,

		/** Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with. */
		workspaceResourceID: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterMonitorProfileFormGroup() {
		return new FormGroup<OpenShiftManagedClusterMonitorProfileFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			workspaceResourceID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the OpenShift managed cluster. */
	export interface OpenShiftManagedClusterProperties {

		/** Configuration of OpenShift cluster VMs. */
		agentPoolProfiles?: Array<OpenShiftManagedClusterAgentPoolProfile>;

		/** Defines all possible authentication profiles for the OpenShift cluster. */
		authProfile?: OpenShiftManagedClusterAuthProfile;

		/** Version of OpenShift specified when creating the cluster. */
		clusterVersion?: string | null;

		/** Service generated FQDN for OpenShift API server loadbalancer internal hostname. */
		fqdn?: string | null;

		/** OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs. */
		masterPoolProfile?: OpenShiftManagedClusterMasterPoolProfile;

		/** Defines the configuration for Log Analytics integration. */
		monitorProfile?: OpenShiftManagedClusterMonitorProfile;

		/** Represents the OpenShift networking configuration */
		networkProfile?: NetworkProfile;

		/**
		 * Version of OpenShift specified when creating the cluster.
		 * Required
		 */
		openShiftVersion: string;

		/** The current deployment or provisioning state, which only appears in the response. */
		provisioningState?: string | null;

		/** Service generated FQDN for OpenShift API server. */
		publicHostname?: string | null;

		/** Configuration for OpenShift router(s). */
		routerProfiles?: Array<OpenShiftRouterProfile>;
	}

	/** Properties of the OpenShift managed cluster. */
	export interface OpenShiftManagedClusterPropertiesFormProperties {

		/** Version of OpenShift specified when creating the cluster. */
		clusterVersion: FormControl<string | null | undefined>,

		/** Service generated FQDN for OpenShift API server loadbalancer internal hostname. */
		fqdn: FormControl<string | null | undefined>,

		/**
		 * Version of OpenShift specified when creating the cluster.
		 * Required
		 */
		openShiftVersion: FormControl<string | null | undefined>,

		/** The current deployment or provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,

		/** Service generated FQDN for OpenShift API server. */
		publicHostname: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftManagedClusterPropertiesFormGroup() {
		return new FormGroup<OpenShiftManagedClusterPropertiesFormProperties>({
			clusterVersion: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			openShiftVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publicHostname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an OpenShift router */
	export interface OpenShiftRouterProfile {

		/** Auto-allocated FQDN for the OpenShift router. */
		fqdn?: string | null;

		/** Name of the router profile. */
		name?: string | null;

		/** DNS subdomain for OpenShift router. */
		publicSubdomain?: string | null;
	}

	/** Represents an OpenShift router */
	export interface OpenShiftRouterProfileFormProperties {

		/** Auto-allocated FQDN for the OpenShift router. */
		fqdn: FormControl<string | null | undefined>,

		/** Name of the router profile. */
		name: FormControl<string | null | undefined>,

		/** DNS subdomain for OpenShift router. */
		publicSubdomain: FormControl<string | null | undefined>,
	}
	export function CreateOpenShiftRouterProfileFormGroup() {
		return new FormGroup<OpenShiftRouterProfileFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publicSubdomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
	export interface PurchasePlan {

		/** The plan ID. */
		name?: string | null;

		/** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
		product?: string | null;

		/** The promotion code. */
		promotionCode?: string | null;

		/** The plan ID. */
		publisher?: string | null;
	}

	/** Used for establishing the purchase context of any 3rd Party artifact through MarketPlace. */
	export interface PurchasePlanFormProperties {

		/** The plan ID. */
		name: FormControl<string | null | undefined>,

		/** Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. */
		product: FormControl<string | null | undefined>,

		/** The promotion code. */
		promotionCode: FormControl<string | null | undefined>,

		/** The plan ID. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreatePurchasePlanFormGroup() {
		return new FormGroup<PurchasePlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource model definition. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The Resource model definition. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags object for patch operations. */
	export interface TagsObject {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Tags object for patch operations. */
	export interface TagsObjectFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsObjectFormGroup() {
		return new FormGroup<TagsObjectFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of OpenShift managed clusters in the specified subscription.
		 * Gets a list of OpenShift managed clusters in the specified subscription. The operation returns properties of each OpenShift managed cluster.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/openShiftManagedClusters
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {OpenShiftManagedClusterListResult} OK
		 */
		OpenShiftManagedClusters_List(api_version: string, subscriptionId: string): Observable<OpenShiftManagedClusterListResult> {
			return this.http.get<OpenShiftManagedClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists OpenShift managed clusters in the specified subscription and resource group.
		 * Lists OpenShift managed clusters in the specified subscription and resource group. The operation returns properties of each OpenShift managed cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1
		 * @return {OpenShiftManagedClusterListResult} OK
		 */
		OpenShiftManagedClusters_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<OpenShiftManagedClusterListResult> {
			return this.http.get<OpenShiftManagedClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a OpenShift managed cluster.
		 * Gets the details of the managed OpenShift cluster with a specified resource group and name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1
		 * @param {string} resourceName The name of the OpenShift managed cluster resource.
		 * @return {OpenShiftManagedCluster} OK
		 */
		OpenShiftManagedClusters_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<OpenShiftManagedCluster> {
			return this.http.get<OpenShiftManagedCluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an OpenShift managed cluster.
		 * Creates or updates a OpenShift managed cluster with the specified configuration for agents and OpenShift version.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1
		 * @param {string} resourceName The name of the OpenShift managed cluster resource.
		 * @param {OpenShiftManagedCluster} requestBody Parameters supplied to the Create or Update an OpenShift Managed Cluster operation.
		 * @return {OpenShiftManagedCluster} OK
		 */
		OpenShiftManagedClusters_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: OpenShiftManagedCluster): Observable<OpenShiftManagedCluster> {
			return this.http.put<OpenShiftManagedCluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenShift managed cluster.
		 * Deletes the OpenShift managed cluster with a specified resource group and name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1
		 * @param {string} resourceName The name of the OpenShift managed cluster resource.
		 * @return {void} 
		 */
		OpenShiftManagedClusters_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates tags on an OpenShift managed cluster.
		 * Updates an OpenShift managed cluster with the specified tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1
		 * @param {string} resourceName The name of the OpenShift managed cluster resource.
		 * @param {TagsObject} requestBody Parameters supplied to the Update OpenShift Managed Cluster Tags operation.
		 * @return {OpenShiftManagedCluster} OK
		 */
		OpenShiftManagedClusters_UpdateTags(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: TagsObject): Observable<OpenShiftManagedCluster> {
			return this.http.patch<OpenShiftManagedCluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerService/openShiftManagedClusters/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

