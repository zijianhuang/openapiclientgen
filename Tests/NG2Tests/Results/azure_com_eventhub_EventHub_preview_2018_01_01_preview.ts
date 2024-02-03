import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Pre-provisioned and readily available Event Hubs Cluster count per region. */
	export interface AvailableCluster {

		/** Location fo the Available Cluster */
		location?: string | null;
	}

	/** Pre-provisioned and readily available Event Hubs Cluster count per region. */
	export interface AvailableClusterFormProperties {

		/** Location fo the Available Cluster */
		location: FormControl<string | null | undefined>,
	}
	export function CreateAvailableClusterFormGroup() {
		return new FormGroup<AvailableClusterFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of the List Available Clusters operation. */
	export interface AvailableClustersList {

		/** The count of readily available and pre-provisioned Event Hubs Clusters per region. */
		value?: Array<AvailableCluster>;
	}

	/** The response of the List Available Clusters operation. */
	export interface AvailableClustersListFormProperties {
	}
	export function CreateAvailableClustersListFormGroup() {
		return new FormGroup<AvailableClustersListFormProperties>({
		});

	}


	/** Single Event Hubs Cluster resource in List or Get operations. */
	export interface Cluster extends TrackedResource {

		/** Event Hubs Cluster properties supplied in responses in List or Get operations. */
		properties?: any;

		/** SKU parameters particular to a cluster instance. */
		sku?: ClusterSku;
	}

	/** Single Event Hubs Cluster resource in List or Get operations. */
	export interface ClusterFormProperties extends TrackedResourceFormProperties {

		/** Event Hubs Cluster properties supplied in responses in List or Get operations. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** SKU parameters particular to a cluster instance. */
	export interface ClusterSku {

		/**
		 * The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
		 * Minimum: 1
		 * Maximum: 32
		 */
		capacity?: number | null;

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: ClusterSkuName;
	}

	/** SKU parameters particular to a cluster instance. */
	export interface ClusterSkuFormProperties {

		/**
		 * The quantity of Event Hubs Cluster Capacity Units contained in this cluster.
		 * Minimum: 1
		 * Maximum: 32
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: FormControl<ClusterSkuName | null | undefined>,
	}
	export function CreateClusterSkuFormGroup() {
		return new FormGroup<ClusterSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(32)]),
			name: new FormControl<ClusterSkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClusterSkuName { Dedicated = 'Dedicated' }


	/** The response of the List Event Hubs Clusters operation. */
	export interface ClusterListResult {

		/** Link to the next set of results. Empty unless the value parameter contains an incomplete list of Event Hubs Clusters. */
		nextLink?: string | null;

		/** The Event Hubs Clusters present in the List Event Hubs operation results. */
		value?: Array<Cluster>;
	}

	/** The response of the List Event Hubs Clusters operation. */
	export interface ClusterListResultFormProperties {

		/** Link to the next set of results. Empty unless the value parameter contains an incomplete list of Event Hubs Clusters. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListResultFormGroup() {
		return new FormGroup<ClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains all settings for the cluster. */
	export interface ClusterQuotaConfigurationProperties {

		/** All possible Cluster settings - a collection of key/value paired settings which apply to quotas and configurations imposed on the cluster. */
		settings?: {[id: string]: string };
	}

	/** Contains all settings for the cluster. */
	export interface ClusterQuotaConfigurationPropertiesFormProperties {

		/** All possible Cluster settings - a collection of key/value paired settings which apply to quotas and configurations imposed on the cluster. */
		settings: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterQuotaConfigurationPropertiesFormGroup() {
		return new FormGroup<ClusterQuotaConfigurationPropertiesFormProperties>({
			settings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Single Namespace item in List or Get Operation */
	export interface EHNamespace extends TrackedResource {

		/** Namespace properties supplied for create namespace operation. */
		properties?: any;

		/** SKU parameters supplied to the create namespace operation */
		sku?: Sku;
	}

	/** Single Namespace item in List or Get Operation */
	export interface EHNamespaceFormProperties extends TrackedResourceFormProperties {

		/** Namespace properties supplied for create namespace operation. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateEHNamespaceFormGroup() {
		return new FormGroup<EHNamespaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** SKU parameters supplied to the create namespace operation */
	export interface Sku {

		/**
		 * The Event Hubs throughput units, value should be 0 to 20 throughput units.
		 * Minimum: 0
		 * Maximum: 20
		 */
		capacity?: number | null;

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: SkuName;

		/** The billing tier of this particular SKU. */
		tier?: SkuName | null;
	}

	/** SKU parameters supplied to the create namespace operation */
	export interface SkuFormProperties {

		/**
		 * The Event Hubs throughput units, value should be 0 to 20 throughput units.
		 * Minimum: 0
		 * Maximum: 20
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,

		/** The billing tier of this particular SKU. */
		tier: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { Basic = 'Basic', Standard = 'Standard' }


	/** The full ARM ID of an Event Hubs Namespace */
	export interface EHNamespaceIdContainer {

		/** id parameter */
		id?: string | null;
	}

	/** The full ARM ID of an Event Hubs Namespace */
	export interface EHNamespaceIdContainerFormProperties {

		/** id parameter */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEHNamespaceIdContainerFormGroup() {
		return new FormGroup<EHNamespaceIdContainerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of the List Namespace IDs operation */
	export interface EHNamespaceIdListResult {

		/** Result of the List Namespace IDs operation */
		value?: Array<EHNamespaceIdContainer>;
	}

	/** The response of the List Namespace IDs operation */
	export interface EHNamespaceIdListResultFormProperties {
	}
	export function CreateEHNamespaceIdListResultFormGroup() {
		return new FormGroup<EHNamespaceIdListResultFormProperties>({
		});

	}


	/** The response of the List Namespace operation */
	export interface EHNamespaceListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of namespaces. */
		nextLink?: string | null;

		/** Result of the List Namespace operation */
		value?: Array<EHNamespace>;
	}

	/** The response of the List Namespace operation */
	export interface EHNamespaceListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of namespaces. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEHNamespaceListResultFormGroup() {
		return new FormGroup<EHNamespaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties to configure Encryption */
	export interface Encryption {

		/** Enumerates the possible value of keySource for Encryption */
		keySource?: EncryptionKeySource | null;

		/** Properties to configure keyVault Properties */
		keyVaultProperties?: KeyVaultProperties;
	}

	/** Properties to configure Encryption */
	export interface EncryptionFormProperties {

		/** Enumerates the possible value of keySource for Encryption */
		keySource: FormControl<EncryptionKeySource | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			keySource: new FormControl<EncryptionKeySource | null | undefined>(undefined),
		});

	}

	export enum EncryptionKeySource { 'Microsoft.KeyVault' = 'Microsoft.KeyVault' }


	/** Error response that indicates the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error response that indicates the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties to configure Identity for Bring your Own Keys */
	export interface Identity {

		/** ObjectId from the KeyVault */
		principalId?: string | null;

		/** TenantId from the KeyVault */
		tenantId?: string | null;

		/** Enumerates the possible value Identity type, which currently supports only 'SystemAssigned' */
		type?: IdentityType | null;
	}

	/** Properties to configure Identity for Bring your Own Keys */
	export interface IdentityFormProperties {

		/** ObjectId from the KeyVault */
		principalId: FormControl<string | null | undefined>,

		/** TenantId from the KeyVault */
		tenantId: FormControl<string | null | undefined>,

		/** Enumerates the possible value Identity type, which currently supports only 'SystemAssigned' */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned' }


	/** Single item in a List or Get IpFilterRules operation */
	export interface IpFilterRule extends Resource {

		/** Properties supplied to create or update IpFilterRules */
		properties?: any;
	}

	/** Single item in a List or Get IpFilterRules operation */
	export interface IpFilterRuleFormProperties extends ResourceFormProperties {

		/** Properties supplied to create or update IpFilterRules */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateIpFilterRuleFormGroup() {
		return new FormGroup<IpFilterRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response from the List namespace operation. */
	export interface IpFilterRuleListResult {

		/** Link to the next set of results. Not empty if Value contains an incomplete list of IpFilter Rules */
		nextLink?: string | null;

		/** Result of the List IpFilter Rules operation. */
		value?: Array<IpFilterRule>;
	}

	/** The response from the List namespace operation. */
	export interface IpFilterRuleListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains an incomplete list of IpFilter Rules */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIpFilterRuleListResultFormGroup() {
		return new FormGroup<IpFilterRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties to configure keyVault Properties */
	export interface KeyVaultProperties {

		/** Name of the Key from KeyVault */
		keyName?: string | null;

		/** Uri of KeyVault */
		keyVaultUri?: string | null;
	}

	/** Properties to configure keyVault Properties */
	export interface KeyVaultPropertiesFormProperties {

		/** Name of the Key from KeyVault */
		keyName: FormControl<string | null | undefined>,

		/** Uri of KeyVault */
		keyVaultUri: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultPropertiesFormGroup() {
		return new FormGroup<KeyVaultPropertiesFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			keyVaultUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the List namespace operation. */
	export interface NWRuleSetIpRules {

		/** The IP Filter Action */
		action?: NWRuleSetIpRulesAction | null;

		/** IP Mask */
		ipMask?: string | null;
	}

	/** The response from the List namespace operation. */
	export interface NWRuleSetIpRulesFormProperties {

		/** The IP Filter Action */
		action: FormControl<NWRuleSetIpRulesAction | null | undefined>,

		/** IP Mask */
		ipMask: FormControl<string | null | undefined>,
	}
	export function CreateNWRuleSetIpRulesFormGroup() {
		return new FormGroup<NWRuleSetIpRulesFormProperties>({
			action: new FormControl<NWRuleSetIpRulesAction | null | undefined>(undefined),
			ipMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NWRuleSetIpRulesAction { Allow = 'Allow' }


	/** The response from the List namespace operation. */
	export interface NWRuleSetVirtualNetworkRules {

		/** Value that indicates whether to ignore missing Vnet Service Endpoint */
		ignoreMissingVnetServiceEndpoint?: boolean | null;

		/** Properties supplied for Subnet */
		subnet?: Subnet;
	}

	/** The response from the List namespace operation. */
	export interface NWRuleSetVirtualNetworkRulesFormProperties {

		/** Value that indicates whether to ignore missing Vnet Service Endpoint */
		ignoreMissingVnetServiceEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateNWRuleSetVirtualNetworkRulesFormGroup() {
		return new FormGroup<NWRuleSetVirtualNetworkRulesFormProperties>({
			ignoreMissingVnetServiceEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Description of topic resource. */
	export interface NetworkRuleSet extends Resource {

		/** NetworkRuleSet properties */
		properties?: any;
	}

	/** Description of topic resource. */
	export interface NetworkRuleSetFormProperties extends ResourceFormProperties {

		/** NetworkRuleSet properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A Event Hub REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A Event Hub REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Event Hub operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Event Hub operations supported by the Microsoft.EventHub resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Event Hub operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource definition */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The Resource definition */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties supplied for Subnet */
	export interface Subnet {

		/** Resource ID of Virtual Network Subnet */
		id?: string | null;
	}

	/** Properties supplied for Subnet */
	export interface SubnetFormProperties {

		/** Resource ID of Virtual Network Subnet */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of an Azure resource. */
	export interface TrackedResource extends Resource {

		/** Resource location */
		location?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Definition of an Azure resource. */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Single item in a List or Get VirtualNetworkRules operation */
	export interface VirtualNetworkRule extends Resource {

		/** Properties supplied to create or update VirtualNetworkRules */
		properties?: any;
	}

	/** Single item in a List or Get VirtualNetworkRules operation */
	export interface VirtualNetworkRuleFormProperties extends ResourceFormProperties {

		/** Properties supplied to create or update VirtualNetworkRules */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response from the List namespace operation. */
	export interface VirtualNetworkRuleListResult {

		/** Link to the next set of results. Not empty if Value contains an incomplete list of VirtualNetwork Rules */
		nextLink?: string | null;

		/** Result of the List VirtualNetwork Rules operation. */
		value?: Array<VirtualNetworkRule>;
	}

	/** The response from the List namespace operation. */
	export interface VirtualNetworkRuleListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains an incomplete list of VirtualNetwork Rules */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRuleListResultFormGroup() {
		return new FormGroup<VirtualNetworkRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Event Hub REST API operations.
		 * Get providers/Microsoft.EventHub/operations
		 * @param {string} api_version Client API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.EventHub/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventHub/availableClusterRegions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {AvailableClustersList} Available clusters listed successfully.
		 */
		Clusters_ListAvailableClusters(subscriptionId: string, api_version: string): Observable<AvailableClustersList> {
			return this.http.get<AvailableClustersList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventHub/availableClusterRegions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the available Namespaces within a subscription, irrespective of the resource groups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventHub/namespaces
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {EHNamespaceListResult} Namespaces returned successfully.
		 */
		Namespaces_List(api_version: string, subscriptionId: string): Observable<EHNamespaceListResult> {
			return this.http.get<EHNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventHub/namespaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the available Event Hubs Clusters within an ARM resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version Client API version.
		 * @return {ClusterListResult} Clusters returned successfully.
		 */
		Clusters_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the resource description of the specified Event Hubs Cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @return {Cluster} Event Hubs Cluster resource description returned successfully.
		 */
		Clusters_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an instance of an Event Hubs Cluster.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @return {Cluster} Event Hubs Cluster successfully created or updated.
		 */
		Clusters_Put(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<Cluster> {
			return this.http.put<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes an existing Event Hubs Cluster. This operation is idempotent.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @return {void} Event Hubs Cluster successfully deleted.
		 */
		Clusters_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @param {Cluster} requestBody The properties of the Event Hubs Cluster which should be updated.
		 * @return {Cluster} Event Hubs Cluster successfully created.
		 */
		Clusters_Patch(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: Cluster): Observable<Cluster> {
			return this.http.patch<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/namespaces
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @return {EHNamespaceIdListResult} List of Namespace IDs in Cluster successfully delivered.
		 */
		Clusters_ListNamespaces(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<EHNamespaceIdListResult> {
			return this.http.get<EHNamespaceIdListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/namespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and settings imposed on the cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @return {ClusterQuotaConfigurationProperties} Event Hubs Cluster settings configuration returned.
		 */
		Configuration_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ClusterQuotaConfigurationProperties> {
			return this.http.get<ClusterQuotaConfigurationProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/quotaConfiguration/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves the settings not specified in the request body unmodified.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} clusterName The name of the Event Hubs Cluster.
		 * @param {string} api_version Client API version.
		 * @param {ClusterQuotaConfigurationProperties} requestBody Parameters for creating an Event Hubs Cluster resource.
		 * @return {ClusterQuotaConfigurationProperties} Event Hubs Cluster settings configuration returned.
		 */
		Configuration_Patch(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: ClusterQuotaConfigurationProperties): Observable<ClusterQuotaConfigurationProperties> {
			return this.http.patch<ClusterQuotaConfigurationProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/quotaConfiguration/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the available Namespaces within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {EHNamespaceListResult} Namespaces returned successfully.
		 */
		Namespaces_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<EHNamespaceListResult> {
			return this.http.get<EHNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the description of the specified namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {EHNamespace} Namespace returned successfully.
		 */
		Namespaces_Get(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<EHNamespace> {
			return this.http.get<EHNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {EHNamespace} requestBody Parameters for creating a namespace resource.
		 * @return {EHNamespace} Namespace successfully created.
		 */
		Namespaces_CreateOrUpdate(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: EHNamespace): Observable<EHNamespace> {
			return this.http.put<EHNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace successfully deleted.
		 */
		Namespaces_Delete(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {EHNamespace} requestBody Parameters for updating a namespace resource.
		 * @return {EHNamespace} Namespace successfully updated.
		 */
		Namespaces_Update(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: EHNamespace): Observable<EHNamespace> {
			return this.http.patch<EHNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of IP Filter rules for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/ipfilterrules
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpFilterRuleListResult} Namespace IpFilterRule successfully returned.
		 */
		Namespaces_ListIPFilterRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<IpFilterRuleListResult> {
			return this.http.get<IpFilterRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an IpFilterRule for a Namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpFilterRule} Namespace IpFilterRule returned successfully.
		 */
		Namespaces_GetIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string): Observable<IpFilterRule> {
			return this.http.get<IpFilterRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an IpFilterRule for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {IpFilterRule} requestBody The Namespace IpFilterRule.
		 * @return {IpFilterRule} Namespace IpFilterRule created
		 */
		Namespaces_CreateOrUpdateIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string, requestBody: IpFilterRule): Observable<IpFilterRule> {
			return this.http.put<IpFilterRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an IpFilterRule for a Namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace IpFilterRule successfully deleted.
		 */
		Namespaces_DeleteIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets NetworkRuleSet for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkRuleSets/default
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_GetNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<NetworkRuleSet> {
			return this.http.get<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkRuleSets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update NetworkRuleSet for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkRuleSets/default
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NetworkRuleSet} requestBody The Namespace IpFilterRule.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_CreateOrUpdateNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: NetworkRuleSet): Observable<NetworkRuleSet> {
			return this.http.put<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkRuleSets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of VirtualNetwork rules for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/virtualnetworkrules
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualNetworkRuleListResult} Namespace VirtualNetworkRule successfully returned.
		 */
		Namespaces_ListVirtualNetworkRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<VirtualNetworkRuleListResult> {
			return this.http.get<VirtualNetworkRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an VirtualNetworkRule for a Namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualNetworkRule} Namespace VirtualNetworkRule returned successfully.
		 */
		Namespaces_GetVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string): Observable<VirtualNetworkRule> {
			return this.http.get<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an VirtualNetworkRule for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualNetworkRule} requestBody The Namespace VirtualNetworkRule.
		 * @return {VirtualNetworkRule} Namespace VirtualNetworkRule created
		 */
		Namespaces_CreateOrUpdateVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string, requestBody: VirtualNetworkRule): Observable<VirtualNetworkRule> {
			return this.http.put<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an VirtualNetworkRule for a Namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} namespaceName The Namespace name
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace VirtualNetworkRule successfully deleted.
		 */
		Namespaces_DeleteVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventHub/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

