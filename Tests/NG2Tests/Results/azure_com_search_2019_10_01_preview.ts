import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response containing the primary and secondary admin API keys for a given Azure Cognitive Search service. */
	export interface AdminKeyResult {

		/** The primary admin API key of the Search service. */
		primaryKey?: string | null;

		/** The secondary admin API key of the Search service. */
		secondaryKey?: string | null;
	}

	/** Response containing the primary and secondary admin API keys for a given Azure Cognitive Search service. */
	export interface AdminKeyResultFormProperties {

		/** The primary admin API key of the Search service. */
		primaryKey: FormControl<string | null | undefined>,

		/** The secondary admin API key of the Search service. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminKeyResultFormGroup() {
		return new FormGroup<AdminKeyResultFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input of check name availability API. */
	export interface CheckNameAvailabilityInput {

		/**
		 * The Search service name to validate. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length.
		 * Required
		 */
		name: string;

		/**
		 * The type of the resource whose name is to be validated. This value must always be 'searchServices'.
		 * Required
		 */
		type: CheckNameAvailabilityInputType;
	}

	/** Input of check name availability API. */
	export interface CheckNameAvailabilityInputFormProperties {

		/**
		 * The Search service name to validate. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the resource whose name is to be validated. This value must always be 'searchServices'.
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityInputType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityInputFormGroup() {
		return new FormGroup<CheckNameAvailabilityInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityInputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityInputType { searchServices = 'searchServices' }


	/** Output of check name availability API. */
	export interface CheckNameAvailabilityOutput {

		/** A message that explains why the name is invalid and provides resource naming requirements. Available only if 'Invalid' is returned in the 'reason' property. */
		message?: string | null;

		/** A value indicating whether the name is available. */
		nameAvailable?: boolean | null;

		/** The reason why the name is not available. 'Invalid' indicates the name provided does not match the naming requirements (incorrect length, unsupported characters, etc.). 'AlreadyExists' indicates that the name is already in use and is therefore unavailable. */
		reason?: CheckNameAvailabilityOutputReason | null;
	}

	/** Output of check name availability API. */
	export interface CheckNameAvailabilityOutputFormProperties {

		/** A message that explains why the name is invalid and provides resource naming requirements. Available only if 'Invalid' is returned in the 'reason' property. */
		message: FormControl<string | null | undefined>,

		/** A value indicating whether the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason why the name is not available. 'Invalid' indicates the name provided does not match the naming requirements (incorrect length, unsupported characters, etc.). 'AlreadyExists' indicates that the name is already in use and is therefore unavailable. */
		reason: FormControl<CheckNameAvailabilityOutputReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityOutputFormGroup() {
		return new FormGroup<CheckNameAvailabilityOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityOutputReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityOutputReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** Contains information about an API error. */
	export interface CloudError {

		/** Describes a particular API error with an error code and a message. */
		error?: CloudErrorBody;
	}

	/** Contains information about an API error. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Describes a particular API error with an error code and a message. */
	export interface CloudErrorBody {

		/** An error code that describes the error condition more precisely than an HTTP status code. Can be used to programmatically handle specific error cases. */
		code?: string | null;

		/** Contains nested errors that are related to this error. */
		details?: Array<CloudErrorBody>;

		/** A message that describes the error in detail and provides debugging information. */
		message?: string | null;

		/** The target of the particular error (for example, the name of the property in error). */
		target?: string | null;
	}

	/** Describes a particular API error with an error code and a message. */
	export interface CloudErrorBodyFormProperties {

		/** An error code that describes the error condition more precisely than an HTTP status code. Can be used to programmatically handle specific error cases. */
		code: FormControl<string | null | undefined>,

		/** A message that describes the error in detail and provides debugging information. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error (for example, the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/**
		 * The identity type.
		 * Required
		 */
		type: IdentityType;
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The identity type.
		 * Required
		 */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IdentityType { None = 'None', SystemAssigned = 'SystemAssigned' }


	/** The IP restriction rule of the Azure Cognitive Search service. */
	export interface IpRule {

		/** Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed. */
		value?: string | null;
	}

	/** The IP restriction rule of the Azure Cognitive Search service. */
	export interface IpRuleFormProperties {

		/** Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIpRuleFormGroup() {
		return new FormGroup<IpRuleFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the query API keys for a given Azure Cognitive Search service. */
	export interface ListQueryKeysResult {

		/** The query keys for the Azure Cognitive Search service. */
		value?: Array<QueryKey>;
	}

	/** Response containing the query API keys for a given Azure Cognitive Search service. */
	export interface ListQueryKeysResultFormProperties {
	}
	export function CreateListQueryKeysResultFormGroup() {
		return new FormGroup<ListQueryKeysResultFormProperties>({
		});

	}


	/** Describes an API key for a given Azure Cognitive Search service that has permissions for query operations only. */
	export interface QueryKey {

		/** The value of the query API key. */
		key?: string | null;

		/** The name of the query API key; may be empty. */
		name?: string | null;
	}

	/** Describes an API key for a given Azure Cognitive Search service that has permissions for query operations only. */
	export interface QueryKeyFormProperties {

		/** The value of the query API key. */
		key: FormControl<string | null | undefined>,

		/** The name of the query API key; may be empty. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryKeyFormGroup() {
		return new FormGroup<QueryKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network specific rules that determine how the Azure Cognitive Search service may be reached. */
	export interface NetworkRuleSet {

		/** The level of access to the search service endpoint. Public, the search service endpoint is reachable from the internet. Private, the search service endpoint can only be accessed via private endpoints. Default is Public. */
		endpointAccess?: NetworkRuleSetEndpointAccess | null;

		/** A list of IP restriction rules that defines the inbound network access to the search service endpoint. These restriction rules are applied only when the EndpointAccess of the search service is Public. */
		ipRules?: Array<IpRule>;
	}

	/** Network specific rules that determine how the Azure Cognitive Search service may be reached. */
	export interface NetworkRuleSetFormProperties {

		/** The level of access to the search service endpoint. Public, the search service endpoint is reachable from the internet. Private, the search service endpoint can only be accessed via private endpoints. Default is Public. */
		endpointAccess: FormControl<NetworkRuleSetEndpointAccess | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			endpointAccess: new FormControl<NetworkRuleSetEndpointAccess | null | undefined>(undefined),
		});

	}

	export enum NetworkRuleSetEndpointAccess { Public = 'Public', Private = 'Private' }


	/** Describes a REST API operation. */
	export interface Operation {

		/** The object that describes the operation. */
		display?: any;

		/** The name of the operation. This name is of the form {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** Describes a REST API operation. */
	export interface OperationFormProperties {

		/** The object that describes the operation. */
		display: FormControl<any | null | undefined>,

		/** The name of the operation. This name is of the form {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the request to list REST API operations. It contains a list of operations and a URL  to get the next set of results. */
	export interface OperationListResult {

		/** The URL to get the next set of operation list results, if any. */
		nextLink?: string | null;

		/** The list of operations supported by the resource provider. */
		value?: Array<Operation>;
	}

	/** The result of the request to list REST API operations. It contains a list of operations and a URL  to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The URL to get the next set of operation list results, if any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an existing Private Endpoint connection to the Azure Cognitive Search service. */
	export interface PrivateEndpointConnection {

		/** The ID of the private endpoint connection. This can be used with the Azure Resource Manager to link resources together. */
		id?: string | null;

		/** The name of the private endpoint connection. */
		name?: string | null;

		/** Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service. */
		properties?: PrivateEndpointConnectionProperties;

		/** The resource type. */
		type?: string | null;
	}

	/** Describes an existing Private Endpoint connection to the Azure Cognitive Search service. */
	export interface PrivateEndpointConnectionFormProperties {

		/** The ID of the private endpoint connection. This can be used with the Azure Resource Manager to link resources together. */
		id: FormControl<string | null | undefined>,

		/** The name of the private endpoint connection. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionFormGroup() {
		return new FormGroup<PrivateEndpointConnectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service. */
	export interface PrivateEndpointConnectionProperties {

		/** The private endpoint resource from Microsoft.Network provider. */
		privateEndpoint?: any;

		/** Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint. */
		privateLinkServiceConnectionState?: PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState;
	}

	/** Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service. */
	export interface PrivateEndpointConnectionPropertiesFormProperties {

		/** The private endpoint resource from Microsoft.Network provider. */
		privateEndpoint: FormControl<any | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionPropertiesFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesFormProperties>({
			privateEndpoint: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState {

		/** A description of any extra actions that may be required. */
		actionsRequired?: string | null;

		/** The description for the private link service connection state. */
		description?: string | null;

		/** Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected. */
		status?: PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateStatus | null;
	}
	export interface PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateFormProperties {

		/** A description of any extra actions that may be required. */
		actionsRequired: FormControl<string | null | undefined>,

		/** The description for the private link service connection state. */
		description: FormControl<string | null | undefined>,

		/** Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected. */
		status: FormControl<PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateStatus | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateFormProperties>({
			actionsRequired: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateStatus | null | undefined>(undefined),
		});

	}

	export enum PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateStatus { Pending = 'Pending', Approved = 'Approved', Rejected = 'Rejected', Disconnected = 'Disconnected' }


	/** Base type for all Azure resources. */
	export interface Resource {

		/** The ID of the resource. This can be used with the Azure Resource Manager to link resources together. */
		id?: string | null;

		/** Identity for the resource. */
		identity?: Identity;

		/** The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource. */
		location?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** Tags to help categorize the resource in the Azure portal. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** Base type for all Azure resources. */
	export interface ResourceFormProperties {

		/** The ID of the resource. This can be used with the Azure Resource Manager to link resources together. */
		id: FormControl<string | null | undefined>,

		/** The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). This property is required when creating a new resource. */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Tags to help categorize the resource in the Azure portal. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure Cognitive Search service and its current state. */
	export interface SearchService extends Resource {

		/** Properties of the Search service. */
		properties?: SearchServiceProperties;

		/** Defines the SKU of an Azure Cognitive Search Service, which determines price tier and capacity limits. */
		sku?: Sku;
	}

	/** Describes an Azure Cognitive Search service and its current state. */
	export interface SearchServiceFormProperties extends ResourceFormProperties {
	}
	export function CreateSearchServiceFormGroup() {
		return new FormGroup<SearchServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a list of Azure Cognitive Search services. */
	export interface SearchServiceListResult {

		/** The list of Search services. */
		value?: Array<SearchService>;
	}

	/** Response containing a list of Azure Cognitive Search services. */
	export interface SearchServiceListResultFormProperties {
	}
	export function CreateSearchServiceListResultFormGroup() {
		return new FormGroup<SearchServiceListResultFormProperties>({
		});

	}


	/** Properties of the Search service. */
	export interface SearchServiceProperties {

		/** Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'. */
		hostingMode?: SearchServicePropertiesHostingMode | null;

		/** Network specific rules that determine how the Azure Cognitive Search service may be reached. */
		networkRuleSet?: NetworkRuleSet;

		/**
		 * The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
		 * Minimum: 1
		 * Maximum: 12
		 */
		partitionCount?: number | null;

		/** The list of private endpoint connections to the Azure Cognitive Search service. */
		privateEndpointConnections?: Array<PrivateEndpointConnection>;

		/** The state of the last provisioning operation performed on the Search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create Search service. This is because the free service uses capacity that is already set up. */
		provisioningState?: SearchServicePropertiesProvisioningState | null;

		/**
		 * The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
		 * Minimum: 1
		 * Maximum: 12
		 */
		replicaCount?: number | null;

		/** The status of the Search service. Possible values include: 'running': The Search service is running and no provisioning operations are underway. 'provisioning': The Search service is being provisioned or scaled up or down. 'deleting': The Search service is being deleted. 'degraded': The Search service is degraded. This can occur when the underlying search units are not healthy. The Search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The Search service is disabled. In this state, the service will reject all API requests. 'error': The Search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Cognitive Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned. */
		status?: SearchServicePropertiesStatus | null;

		/** The details of the Search service status. */
		statusDetails?: string | null;
	}

	/** Properties of the Search service. */
	export interface SearchServicePropertiesFormProperties {

		/** Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'. */
		hostingMode: FormControl<SearchServicePropertiesHostingMode | null | undefined>,

		/**
		 * The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
		 * Minimum: 1
		 * Maximum: 12
		 */
		partitionCount: FormControl<number | null | undefined>,

		/** The state of the last provisioning operation performed on the Search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'succeeded' or 'failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'succeeded' directly in the call to Create Search service. This is because the free service uses capacity that is already set up. */
		provisioningState: FormControl<SearchServicePropertiesProvisioningState | null | undefined>,

		/**
		 * The number of replicas in the Search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
		 * Minimum: 1
		 * Maximum: 12
		 */
		replicaCount: FormControl<number | null | undefined>,

		/** The status of the Search service. Possible values include: 'running': The Search service is running and no provisioning operations are underway. 'provisioning': The Search service is being provisioned or scaled up or down. 'deleting': The Search service is being deleted. 'degraded': The Search service is degraded. This can occur when the underlying search units are not healthy. The Search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The Search service is disabled. In this state, the service will reject all API requests. 'error': The Search service is in an error state. If your service is in the degraded, disabled, or error states, it means the Azure Cognitive Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned. */
		status: FormControl<SearchServicePropertiesStatus | null | undefined>,

		/** The details of the Search service status. */
		statusDetails: FormControl<string | null | undefined>,
	}
	export function CreateSearchServicePropertiesFormGroup() {
		return new FormGroup<SearchServicePropertiesFormProperties>({
			hostingMode: new FormControl<SearchServicePropertiesHostingMode | null | undefined>(undefined),
			partitionCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(12)]),
			provisioningState: new FormControl<SearchServicePropertiesProvisioningState | null | undefined>(undefined),
			replicaCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(12)]),
			status: new FormControl<SearchServicePropertiesStatus | null | undefined>(undefined),
			statusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SearchServicePropertiesHostingMode { default = 'default', highDensity = 'highDensity' }

	export enum SearchServicePropertiesProvisioningState { succeeded = 'succeeded', provisioning = 'provisioning', failed = 'failed' }

	export enum SearchServicePropertiesStatus { running = 'running', provisioning = 'provisioning', deleting = 'deleting', degraded = 'degraded', disabled = 'disabled', error = 'error' }


	/** Defines the SKU of an Azure Cognitive Search Service, which determines price tier and capacity limits. */
	export interface Sku {

		/** The SKU of the Search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.' */
		name?: SkuName | null;
	}

	/** Defines the SKU of an Azure Cognitive Search Service, which determines price tier and capacity limits. */
	export interface SkuFormProperties {

		/** The SKU of the Search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.' */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { free = 'free', basic = 'basic', standard = 'standard', standard2 = 'standard2', standard3 = 'standard3', storage_optimized_l1 = 'storage_optimized_l1', storage_optimized_l2 = 'storage_optimized_l2' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available REST API operations of the Microsoft.Search provider.
		 * Get providers/Microsoft.Search/operations
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @return {OperationListResult} Success. The response describes the list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Search/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether or not the given Search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net).
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Search/checkNameAvailability
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {CheckNameAvailabilityInput} requestBody The resource name and type to check.
		 * @return {CheckNameAvailabilityOutput} The name check completed. The response contains details of whether the name is valid and available. If the name is invalid, the response also contains a message explaining why not.
		 */
		Services_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityInput): Observable<CheckNameAvailabilityOutput> {
			return this.http.post<CheckNameAvailabilityOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Search/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all Search services in the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Search/searchServices
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {SearchServiceListResult} The operation succeeded. The response contains the list of all Search service definitions for the given subscription.
		 */
		Services_ListBySubscription(api_version: string, subscriptionId: string): Observable<SearchServiceListResult> {
			return this.http.get<SearchServiceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Search/searchServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of all Search services in the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {SearchServiceListResult} The operation succeeded. The response contains the list of all Search service definitions for the given resource group.
		 */
		Services_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<SearchServiceListResult> {
			return this.http.get<SearchServiceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Search service with the given name in the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {SearchService} The Search service definition was successfully retrieved and is in the response. If you are polling for the completion of a provisioning or scale operation, you can check its status via the provisioningState property.
		 */
		Services_Get(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string): Observable<SearchService> {
			return this.http.get<SearchService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a Search service in the given resource group. If the Search service already exists, all properties will be updated with the given values.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service to create or update. Search service names must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and must be between 2 and 60 characters in length. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net). You cannot change the service name after the service is created.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {SearchService} requestBody The definition of the Search service to create or update.
		 * @return {SearchService} The existing service definition was successfully updated. If you changed the number of replicas or partitions, the scale operation will happen asynchronously. You can periodically get your service definition and monitor progress via the provisioningState property.
		 */
		Services_CreateOrUpdate(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string, requestBody: SearchService): Observable<SearchService> {
			return this.http.put<SearchService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Search service in the given resource group, along with its associated resources.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {void} The Search service was successfully deleted.
		 */
		Services_Delete(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing Search service in the given resource group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service to update.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {SearchService} requestBody The definition of the Search service to update.
		 * @return {SearchService} The existing service definition was successfully updated. If you changed the number of replicas or partitions, the scale operation will happen asynchronously. You can periodically get your service definition and monitor progress via the provisioningState property.
		 */
		Services_Update(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string, requestBody: SearchService): Observable<SearchService> {
			return this.http.patch<SearchService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a new query key for the specified Search service. You can create up to 50 query keys per service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/createQueryKey/{name}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} name The name of the new query API key.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {QueryKey} The query key was successfully created and is in the response. You can use the query key as the value of the 'api-key' parameter in the Azure Cognitive Search Service REST API or SDK to perform read-only operations on your Search indexes such as querying and looking up documents by ID.
		 */
		QueryKeys_Create(resourceGroupName: string, searchServiceName: string, name: string, api_version: string, subscriptionId: string): Observable<QueryKey> {
			return this.http.post<QueryKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/createQueryKey/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/deleteQueryKey/{key}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} key The query key to be deleted. Query keys are identified by value, not by name.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {void} The query key was successfully deleted.
		 */
		QueryKeys_Delete(resourceGroupName: string, searchServiceName: string, key: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/deleteQueryKey/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listAdminKeys
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {AdminKeyResult} The admin keys were successfully retrieved and are in the response. You can use either the primary or secondary key as the value of the 'api-key' parameter in the Azure Cognitive Search Service REST API or SDK to perform any operations on your Search service, including privileged operations. Privileged operations include managing resources like indexes and data sources as well as uploading, modifying, or deleting data in your indexes.
		 */
		AdminKeys_Get(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string): Observable<AdminKeyResult> {
			return this.http.post<AdminKeyResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/listAdminKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns the list of query API keys for the given Azure Cognitive Search service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listQueryKeys
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ListQueryKeysResult} All query keys for the given Search service were successfully retrieved and are in the response. You can use any of the query keys as the value of the 'api-key' parameter in the Azure Cognitive Search Service REST API or SDK to perform read-only operations on your Search indexes such as querying and looking up documents by ID.
		 */
		QueryKeys_ListBySearchService(resourceGroupName: string, searchServiceName: string, api_version: string, subscriptionId: string): Observable<ListQueryKeysResult> {
			return this.http.post<ListQueryKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/listQueryKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the details of the private endpoint connection to the Search service in the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {PrivateEndpointConnection} The definition of the private endpoint connection was successfully retrieved and is in the response.
		 */
		PrivateEndpointConnections_Get(resourceGroupName: string, searchServiceName: string, privateEndpointConnectionName: string, api_version: string, subscriptionId: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a Private Endpoint connection to the Search service in the given resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {PrivateEndpointConnection} requestBody The definition of the private endpoint connection to update.
		 * @return {PrivateEndpointConnection} The existing private endpoint connection definition was successfully updated.
		 */
		PrivateEndpointConnections_Update(resourceGroupName: string, searchServiceName: string, privateEndpointConnectionName: string, api_version: string, subscriptionId: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects the private endpoint connection and deletes it from the Search service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {PrivateEndpointConnection} The private endpoint connection was successfully disconnected and removed from the search service. The response will contain the updated definition of the private endpoint connection.
		 */
		PrivateEndpointConnections_Delete(resourceGroupName: string, searchServiceName: string, privateEndpointConnectionName: string, api_version: string, subscriptionId: string): Observable<PrivateEndpointConnection> {
			return this.http.delete<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/regenerateAdminKey/{keyKind}
		 * @param {string} resourceGroupName The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} searchServiceName The name of the Azure Cognitive Search service associated with the specified resource group.
		 * @param {AdminKeys_RegenerateKeyKind} keyKind Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.
		 * @param {string} api_version The API version to use for each request. The current version is 2019-10-01-Preview.
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {AdminKeyResult} The specified admin key was successfully regenerated. Both admin keys are included in the response, including the newly-regenerated key.
		 */
		AdminKeys_Regenerate(resourceGroupName: string, searchServiceName: string, keyKind: AdminKeys_RegenerateKeyKind, api_version: string, subscriptionId: string): Observable<AdminKeyResult> {
			return this.http.post<AdminKeyResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Search/searchServices/' + (searchServiceName == null ? '' : encodeURIComponent(searchServiceName)) + '/regenerateAdminKey/' + keyKind + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

	export enum AdminKeys_RegenerateKeyKind { primary = 'primary', secondary = 'secondary' }

}

