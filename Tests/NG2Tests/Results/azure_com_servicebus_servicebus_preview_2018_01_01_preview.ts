import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message. */
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


	/** A ServiceBus REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A ServiceBus REST API operation */
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


	/** Result of the request to list ServiceBus operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of ServiceBus operations supported by the Microsoft.ServiceBus resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list ServiceBus operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource definition for other than namespace. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The Resource definition for other than namespace. */
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


	/** The Resource definition. */
	export interface ResourceNamespacePatch extends Resource {

		/** Resource location */
		location?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Resource definition. */
	export interface ResourceNamespacePatchFormProperties extends ResourceFormProperties {

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceNamespacePatchFormGroup() {
		return new FormGroup<ResourceNamespacePatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Description of a namespace resource. */
	export interface SBNamespace extends TrackedResource {

		/** Properties of the namespace. */
		properties?: SBNamespaceProperties;

		/** SKU of the namespace. */
		sku?: SBSku;
	}

	/** Description of a namespace resource. */
	export interface SBNamespaceFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateSBNamespaceFormGroup() {
		return new FormGroup<SBNamespaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** SKU of the namespace. */
	export interface SBSku {

		/**
		 * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: SBSkuName;

		/** The billing tier of this particular SKU. */
		tier?: SBSkuName | null;
	}

	/** SKU of the namespace. */
	export interface SBSkuFormProperties {

		/**
		 * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: FormControl<SBSkuName | null | undefined>,

		/** The billing tier of this particular SKU. */
		tier: FormControl<SBSkuName | null | undefined>,
	}
	export function CreateSBSkuFormGroup() {
		return new FormGroup<SBSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<SBSkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SBSkuName | null | undefined>(undefined),
		});

	}

	export enum SBSkuName { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** The response of the List Namespace operation. */
	export interface SBNamespaceListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Namespaces. */
		nextLink?: string | null;

		/** Result of the List Namespace operation. */
		value?: Array<SBNamespace>;
	}

	/** The response of the List Namespace operation. */
	export interface SBNamespaceListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Namespaces. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBNamespaceListResultFormGroup() {
		return new FormGroup<SBNamespaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the namespace. */
	export interface SBNamespaceProperties {

		/** The time the namespace was created. */
		createdAt?: Date | null;

		/** Properties to configure Encryption */
		encryption?: Encryption;

		/** Properties to configure Identity for Bring your Own Keys */
		identity?: Identity;

		/** Identifier for Azure Insights metrics */
		metricId?: string | null;

		/** Provisioning state of the namespace. */
		provisioningState?: string | null;

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint?: string | null;

		/** The time the namespace was updated. */
		updatedAt?: Date | null;

		/** Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones. */
		zoneRedundant?: boolean | null;
	}

	/** Properties of the namespace. */
	export interface SBNamespacePropertiesFormProperties {

		/** The time the namespace was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Identifier for Azure Insights metrics */
		metricId: FormControl<string | null | undefined>,

		/** Provisioning state of the namespace. */
		provisioningState: FormControl<string | null | undefined>,

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint: FormControl<string | null | undefined>,

		/** The time the namespace was updated. */
		updatedAt: FormControl<Date | null | undefined>,

		/** Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateSBNamespacePropertiesFormGroup() {
		return new FormGroup<SBNamespacePropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceBusEndpoint: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Description of a namespace resource. */
	export interface SBNamespaceUpdateParameters extends ResourceNamespacePatch {

		/** Properties of the namespace. */
		properties?: SBNamespaceProperties;

		/** SKU of the namespace. */
		sku?: SBSku;
	}

	/** Description of a namespace resource. */
	export interface SBNamespaceUpdateParametersFormProperties extends ResourceNamespacePatchFormProperties {
	}
	export function CreateSBNamespaceUpdateParametersFormGroup() {
		return new FormGroup<SBNamespaceUpdateParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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


	/** The Resource definition. */
	export interface TrackedResource extends Resource {

		/**
		 * The Geo-location where the resource lives
		 * Required
		 */
		location: string;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Resource definition. */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * The Geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		 * Lists all of the available ServiceBus REST API operations.
		 * Get providers/Microsoft.ServiceBus/operations
		 * @param {string} api_version Client API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ServiceBus/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the available namespaces within the subscription, irrespective of the resource groups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/namespaces
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespaceListResult} Namespaces successfully returned.
		 */
		Namespaces_List(api_version: string, subscriptionId: string): Observable<SBNamespaceListResult> {
			return this.http.get<SBNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceBus/namespaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the available namespaces within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespaceListResult} Namespaces successfully returned.
		 */
		Namespaces_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<SBNamespaceListResult> {
			return this.http.get<SBNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a description for the specified namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespace} Namespace successfully returned.
		 */
		Namespaces_Get(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<SBNamespace> {
			return this.http.get<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBNamespace} requestBody Parameters supplied to create a namespace resource.
		 * @return {SBNamespace} Namespace created successfully.
		 */
		Namespaces_CreateOrUpdate(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: SBNamespace): Observable<SBNamespace> {
			return this.http.put<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace successfully deleted.
		 */
		Namespaces_Delete(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBNamespaceUpdateParameters} requestBody Parameters supplied to update a namespace resource.
		 * @return {SBNamespace} Namespace updated successfully.
		 */
		Namespaces_Update(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: SBNamespaceUpdateParameters): Observable<SBNamespace> {
			return this.http.patch<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of IP Filter rules for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/ipfilterrules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpFilterRuleListResult} Namespace IpFilterRule successfully returned.
		 */
		Namespaces_ListIpFilterRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<IpFilterRuleListResult> {
			return this.http.get<IpFilterRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an IpFilterRule for a Namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpFilterRule} Namespace IpFilterRule returned successfully.
		 */
		Namespaces_GetIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string): Observable<IpFilterRule> {
			return this.http.get<IpFilterRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an IpFilterRule for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {IpFilterRule} requestBody The Namespace IpFilterRule.
		 * @return {IpFilterRule} Namespace IpFilterRule created
		 */
		Namespaces_CreateOrUpdateIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string, requestBody: IpFilterRule): Observable<IpFilterRule> {
			return this.http.put<IpFilterRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an IpFilterRule for a Namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/ipfilterrules/{ipFilterRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} ipFilterRuleName The IP Filter Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace IpFilterRule successfully deleted.
		 */
		Namespaces_DeleteIpFilterRule(resourceGroupName: string, namespaceName: string, ipFilterRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/ipfilterrules/' + (ipFilterRuleName == null ? '' : encodeURIComponent(ipFilterRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets NetworkRuleSet for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkrulesets/default
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_GetNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<NetworkRuleSet> {
			return this.http.get<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkrulesets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets NetworkRuleSet for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkrulesets/default
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NetworkRuleSet} requestBody The Namespace IpFilterRule.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_CreateOrUpdateNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: NetworkRuleSet): Observable<NetworkRuleSet> {
			return this.http.put<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkrulesets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of VirtualNetwork rules for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/virtualnetworkrules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualNetworkRuleListResult} Namespace VirtualNetworkRule successfully returned.
		 */
		Namespaces_ListVirtualNetworkRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<VirtualNetworkRuleListResult> {
			return this.http.get<VirtualNetworkRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an VirtualNetworkRule for a Namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {VirtualNetworkRule} Namespace VirtualNetworkRule returned successfully.
		 */
		Namespaces_GetVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string): Observable<VirtualNetworkRule> {
			return this.http.get<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an VirtualNetworkRule for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {VirtualNetworkRule} requestBody The Namespace VirtualNetworkRule.
		 * @return {VirtualNetworkRule} Namespace VirtualNetworkRule created
		 */
		Namespaces_CreateOrUpdateVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string, requestBody: VirtualNetworkRule): Observable<VirtualNetworkRule> {
			return this.http.put<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an VirtualNetworkRule for a Namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/virtualnetworkrules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 90
		 * @param {string} namespaceName The namespace name
		 *     Min length: 6    Max length: 50
		 * @param {string} virtualNetworkRuleName The Virtual Network Rule name.
		 *     Min length: 1
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace VirtualNetworkRule successfully deleted.
		 */
		Namespaces_DeleteVirtualNetworkRule(resourceGroupName: string, namespaceName: string, virtualNetworkRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/virtualnetworkrules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

