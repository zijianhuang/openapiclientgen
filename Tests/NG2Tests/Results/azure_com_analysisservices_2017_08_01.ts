import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an instance of an Analysis Services resource. */
	export interface AnalysisServicesServer {

		/** Properties of Analysis Services resource. */
		properties?: AnalysisServicesServerProperties;
	}

	/** Represents an instance of an Analysis Services resource. */
	export interface AnalysisServicesServerFormProperties {
	}
	export function CreateAnalysisServicesServerFormGroup() {
		return new FormGroup<AnalysisServicesServerFormProperties>({
		});

	}


	/** Properties of Analysis Services resource. */
	export interface AnalysisServicesServerProperties {

		/** The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning. */
		provisioningState?: AnalysisServicesServerPropertiesProvisioningState | null;

		/** The full name of the Analysis Services resource. */
		serverFullName?: string | null;

		/** The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning. */
		state?: AnalysisServicesServerPropertiesProvisioningState | null;
	}

	/** Properties of Analysis Services resource. */
	export interface AnalysisServicesServerPropertiesFormProperties {

		/** The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning. */
		provisioningState: FormControl<AnalysisServicesServerPropertiesProvisioningState | null | undefined>,

		/** The full name of the Analysis Services resource. */
		serverFullName: FormControl<string | null | undefined>,

		/** The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning. */
		state: FormControl<AnalysisServicesServerPropertiesProvisioningState | null | undefined>,
	}
	export function CreateAnalysisServicesServerPropertiesFormGroup() {
		return new FormGroup<AnalysisServicesServerPropertiesFormProperties>({
			provisioningState: new FormControl<AnalysisServicesServerPropertiesProvisioningState | null | undefined>(undefined),
			serverFullName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AnalysisServicesServerPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AnalysisServicesServerPropertiesProvisioningState { Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed', Paused = 'Paused', Suspended = 'Suspended', Provisioning = 'Provisioning', Updating = 'Updating', Suspending = 'Suspending', Pausing = 'Pausing', Resuming = 'Resuming', Preparing = 'Preparing', Scaling = 'Scaling' }


	/** An object that represents a set of mutable Analysis Services resource properties. */
	export interface AnalysisServicesServerMutableProperties {

		/** An array of administrator user identities. */
		asAdministrators?: ServerAdministrators;

		/** The SAS container URI to the backup container. */
		backupBlobContainerUri?: string | null;

		/** The gateway details. */
		gatewayDetails?: GatewayDetails;

		/** An array of firewall rules. */
		ipV4FirewallSettings?: IPv4FirewallSettings;

		/** How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error. */
		querypoolConnectionMode?: AnalysisServicesServerMutablePropertiesQuerypoolConnectionMode | null;
	}

	/** An object that represents a set of mutable Analysis Services resource properties. */
	export interface AnalysisServicesServerMutablePropertiesFormProperties {

		/** The SAS container URI to the backup container. */
		backupBlobContainerUri: FormControl<string | null | undefined>,

		/** How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error. */
		querypoolConnectionMode: FormControl<AnalysisServicesServerMutablePropertiesQuerypoolConnectionMode | null | undefined>,
	}
	export function CreateAnalysisServicesServerMutablePropertiesFormGroup() {
		return new FormGroup<AnalysisServicesServerMutablePropertiesFormProperties>({
			backupBlobContainerUri: new FormControl<string | null | undefined>(undefined),
			querypoolConnectionMode: new FormControl<AnalysisServicesServerMutablePropertiesQuerypoolConnectionMode | null | undefined>(undefined),
		});

	}


	/** An array of administrator user identities. */
	export interface ServerAdministrators {

		/** An array of administrator user identities. */
		members?: Array<string>;
	}

	/** An array of administrator user identities. */
	export interface ServerAdministratorsFormProperties {
	}
	export function CreateServerAdministratorsFormGroup() {
		return new FormGroup<ServerAdministratorsFormProperties>({
		});

	}


	/** The gateway details. */
	export interface GatewayDetails {

		/** Uri of the DMTS cluster. */
		dmtsClusterUri?: string | null;

		/** Gateway object id from in the DMTS cluster for the gateway resource. */
		gatewayObjectId?: string | null;

		/** Gateway resource to be associated with the server. */
		gatewayResourceId?: string | null;
	}

	/** The gateway details. */
	export interface GatewayDetailsFormProperties {

		/** Uri of the DMTS cluster. */
		dmtsClusterUri: FormControl<string | null | undefined>,

		/** Gateway object id from in the DMTS cluster for the gateway resource. */
		gatewayObjectId: FormControl<string | null | undefined>,

		/** Gateway resource to be associated with the server. */
		gatewayResourceId: FormControl<string | null | undefined>,
	}
	export function CreateGatewayDetailsFormGroup() {
		return new FormGroup<GatewayDetailsFormProperties>({
			dmtsClusterUri: new FormControl<string | null | undefined>(undefined),
			gatewayObjectId: new FormControl<string | null | undefined>(undefined),
			gatewayResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of firewall rules. */
	export interface IPv4FirewallSettings {

		/** The indicator of enabling PBI service. */
		enablePowerBIService?: boolean | null;

		/** An array of firewall rules. */
		firewallRules?: Array<IPv4FirewallRule>;
	}

	/** An array of firewall rules. */
	export interface IPv4FirewallSettingsFormProperties {

		/** The indicator of enabling PBI service. */
		enablePowerBIService: FormControl<boolean | null | undefined>,
	}
	export function CreateIPv4FirewallSettingsFormGroup() {
		return new FormGroup<IPv4FirewallSettingsFormProperties>({
			enablePowerBIService: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The detail of firewall rule. */
	export interface IPv4FirewallRule {

		/** The rule name. */
		firewallRuleName?: string | null;

		/** The end range of IPv4. */
		rangeEnd?: string | null;

		/** The start range of IPv4. */
		rangeStart?: string | null;
	}

	/** The detail of firewall rule. */
	export interface IPv4FirewallRuleFormProperties {

		/** The rule name. */
		firewallRuleName: FormControl<string | null | undefined>,

		/** The end range of IPv4. */
		rangeEnd: FormControl<string | null | undefined>,

		/** The start range of IPv4. */
		rangeStart: FormControl<string | null | undefined>,
	}
	export function CreateIPv4FirewallRuleFormGroup() {
		return new FormGroup<IPv4FirewallRuleFormProperties>({
			firewallRuleName: new FormControl<string | null | undefined>(undefined),
			rangeEnd: new FormControl<string | null | undefined>(undefined),
			rangeStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalysisServicesServerMutablePropertiesQuerypoolConnectionMode { All = 'All', ReadOnly = 'ReadOnly' }


	/** Provision request specification */
	export interface AnalysisServicesServerUpdateParameters {

		/** An object that represents a set of mutable Analysis Services resource properties. */
		properties?: AnalysisServicesServerMutableProperties;

		/** Represents the SKU name and Azure pricing tier for Analysis Services resource. */
		sku?: ResourceSku;

		/** Key-value pairs of additional provisioning properties. */
		tags?: {[id: string]: string };
	}

	/** Provision request specification */
	export interface AnalysisServicesServerUpdateParametersFormProperties {

		/** Key-value pairs of additional provisioning properties. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAnalysisServicesServerUpdateParametersFormGroup() {
		return new FormGroup<AnalysisServicesServerUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Represents the SKU name and Azure pricing tier for Analysis Services resource. */
	export interface ResourceSku {

		/**
		 * The number of instances in the read only query pool.
		 * Minimum: 1
		 * Maximum: 8
		 */
		capacity?: number | null;

		/**
		 * Name of the SKU level.
		 * Required
		 */
		name: string;

		/** The name of the Azure pricing tier to which the SKU applies. */
		tier?: ResourceSkuTier | null;
	}

	/** Represents the SKU name and Azure pricing tier for Analysis Services resource. */
	export interface ResourceSkuFormProperties {

		/**
		 * The number of instances in the read only query pool.
		 * Minimum: 1
		 * Maximum: 8
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Name of the SKU level.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the Azure pricing tier to which the SKU applies. */
		tier: FormControl<ResourceSkuTier | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(8)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<ResourceSkuTier | null | undefined>(undefined),
		});

	}

	export enum ResourceSkuTier { Development = 'Development', Basic = 'Basic', Standard = 'Standard' }


	/** An array of Analysis Services resources. */
	export interface AnalysisServicesServers {

		/**
		 * An array of Analysis Services resources.
		 * Required
		 */
		value: Array<AnalysisServicesServer>;
	}

	/** An array of Analysis Services resources. */
	export interface AnalysisServicesServersFormProperties {
	}
	export function CreateAnalysisServicesServersFormGroup() {
		return new FormGroup<AnalysisServicesServersFormProperties>({
		});

	}


	/** Details of server name request body. */
	export interface CheckServerNameAvailabilityParameters {

		/**
		 * Name for checking availability.
		 * Min length: 3
		 * Max length: 63
		 */
		name?: string | null;

		/** The resource type of azure analysis services. */
		type?: string | null;
	}

	/** Details of server name request body. */
	export interface CheckServerNameAvailabilityParametersFormProperties {

		/**
		 * Name for checking availability.
		 * Min length: 3
		 * Max length: 63
		 */
		name: FormControl<string | null | undefined>,

		/** The resource type of azure analysis services. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckServerNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckServerNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[a-z][a-z0-9]*$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The checking result of server name availability. */
	export interface CheckServerNameAvailabilityResult {

		/** The detailed message of the request unavailability. */
		message?: string | null;

		/** Indicator of available of the server name. */
		nameAvailable?: boolean | null;

		/** The reason of unavailability. */
		reason?: string | null;
	}

	/** The checking result of server name availability. */
	export interface CheckServerNameAvailabilityResultFormProperties {

		/** The detailed message of the request unavailability. */
		message: FormControl<string | null | undefined>,

		/** Indicator of available of the server name. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason of unavailability. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCheckServerNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckServerNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
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


	/** Detail of gateway errors. */
	export interface GatewayError {

		/** Error code of list gateway. */
		code?: string | null;

		/** Error message of list gateway. */
		message?: string | null;
	}

	/** Detail of gateway errors. */
	export interface GatewayErrorFormProperties {

		/** Error code of list gateway. */
		code: FormControl<string | null | undefined>,

		/** Error message of list gateway. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGatewayErrorFormGroup() {
		return new FormGroup<GatewayErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of gateway is error. */
	export interface GatewayListStatusError {

		/** Detail of gateway errors. */
		error?: GatewayError;
	}

	/** Status of gateway is error. */
	export interface GatewayListStatusErrorFormProperties {
	}
	export function CreateGatewayListStatusErrorFormGroup() {
		return new FormGroup<GatewayListStatusErrorFormProperties>({
		});

	}


	/** Status of gateway is live. */
	export interface GatewayListStatusLive {

		/** Live message of list gateway. */
		status?: GatewayListStatusLiveStatus | null;
	}

	/** Status of gateway is live. */
	export interface GatewayListStatusLiveFormProperties {

		/** Live message of list gateway. */
		status: FormControl<GatewayListStatusLiveStatus | null | undefined>,
	}
	export function CreateGatewayListStatusLiveFormGroup() {
		return new FormGroup<GatewayListStatusLiveFormProperties>({
			status: new FormControl<GatewayListStatusLiveStatus | null | undefined>(undefined),
		});

	}

	export enum GatewayListStatusLiveStatus { Live = 'Live' }


	/** A Consumption REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** A Consumption REST API operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of listing consumption operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of analysis services operations supported by the Microsoft.AnalysisServices resource provider. */
		value?: Array<Operation>;
	}

	/** Result of listing consumption operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of operation. */
	export interface OperationStatus {

		/** The end time of the operation. */
		endTime?: string | null;

		/** Describes the format of Error response. */
		error?: ErrorResponse;

		/** The operation Id. */
		id?: string | null;

		/** The operation name. */
		name?: string | null;

		/** The start time of the operation. */
		startTime?: string | null;

		/** The status of the operation. */
		status?: string | null;
	}

	/** The status of operation. */
	export interface OperationStatusFormProperties {

		/** The end time of the operation. */
		endTime: FormControl<string | null | undefined>,

		/** The operation Id. */
		id: FormControl<string | null | undefined>,

		/** The operation name. */
		name: FormControl<string | null | undefined>,

		/** The start time of the operation. */
		startTime: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateOperationStatusFormGroup() {
		return new FormGroup<OperationStatusFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an instance of an Analysis Services resource. */
	export interface Resource {

		/** An identifier that represents the Analysis Services resource. */
		id?: string | null;

		/**
		 * Location of the Analysis Services resource.
		 * Required
		 */
		location: string;

		/** The name of the Analysis Services resource. */
		name?: string | null;

		/**
		 * Represents the SKU name and Azure pricing tier for Analysis Services resource.
		 * Required
		 */
		sku: ResourceSku;

		/** Key-value pairs of additional resource provisioning properties. */
		tags?: {[id: string]: string };

		/** The type of the Analysis Services resource. */
		type?: string | null;
	}

	/** Represents an instance of an Analysis Services resource. */
	export interface ResourceFormProperties {

		/** An identifier that represents the Analysis Services resource. */
		id: FormControl<string | null | undefined>,

		/**
		 * Location of the Analysis Services resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the Analysis Services resource. */
		name: FormControl<string | null | undefined>,

		/** Key-value pairs of additional resource provisioning properties. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the Analysis Services resource. */
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


	/** An object that represents SKU details for existing resources. */
	export interface SkuDetailsForExistingResource {

		/** Represents the SKU name and Azure pricing tier for Analysis Services resource. */
		sku?: ResourceSku;
	}

	/** An object that represents SKU details for existing resources. */
	export interface SkuDetailsForExistingResourceFormProperties {
	}
	export function CreateSkuDetailsForExistingResourceFormGroup() {
		return new FormGroup<SkuDetailsForExistingResourceFormProperties>({
		});

	}


	/** An object that represents enumerating SKUs for existing resources. */
	export interface SkuEnumerationForExistingResourceResult {

		/** The collection of available SKUs for existing resources. */
		value?: Array<SkuDetailsForExistingResource>;
	}

	/** An object that represents enumerating SKUs for existing resources. */
	export interface SkuEnumerationForExistingResourceResultFormProperties {
	}
	export function CreateSkuEnumerationForExistingResourceResultFormGroup() {
		return new FormGroup<SkuEnumerationForExistingResourceResultFormProperties>({
		});

	}


	/** An object that represents enumerating SKUs for new resources. */
	export interface SkuEnumerationForNewResourceResult {

		/** The collection of available SKUs for new resources. */
		value?: Array<ResourceSku>;
	}

	/** An object that represents enumerating SKUs for new resources. */
	export interface SkuEnumerationForNewResourceResultFormProperties {
	}
	export function CreateSkuEnumerationForNewResourceResultFormGroup() {
		return new FormGroup<SkuEnumerationForNewResourceResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available consumption REST API operations.
		 * Get providers/Microsoft.AnalysisServices/operations
		 * @param {string} api_version The client API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.AnalysisServices/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the name availability in the target location.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/checkNameAvailability
		 * @param {string} location The region name which the operation will lookup into.
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckServerNameAvailabilityParameters} requestBody Contains the information used to provision the Analysis Services server.
		 * @return {CheckServerNameAvailabilityResult} OK. The request has succeeded.
		 */
		Servers_CheckNameAvailability(location: string, api_version: string, subscriptionId: string, requestBody: CheckServerNameAvailabilityParameters): Observable<CheckServerNameAvailabilityResult> {
			return this.http.post<CheckServerNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AnalysisServices/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the result of the specified operation.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationresults/{operationId}
		 * @param {string} location The region name which the operation will lookup into.
		 * @param {string} operationId The target operation Id.
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The operation completed.
		 */
		Servers_ListOperationResults(location: string, operationId: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AnalysisServices/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/operationresults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the status of operation.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationstatuses/{operationId}
		 * @param {string} location The region name which the operation will lookup into.
		 * @param {string} operationId The target operation Id.
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {OperationStatus} OK. The operation completed.
		 */
		Servers_ListOperationStatuses(location: string, operationId: string, api_version: string, subscriptionId: string): Observable<OperationStatus> {
			return this.http.get<OperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AnalysisServices/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/operationstatuses/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the Analysis Services servers for the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/servers
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AnalysisServicesServers} OK
		 */
		Servers_List(api_version: string, subscriptionId: string): Observable<AnalysisServicesServers> {
			return this.http.get<AnalysisServicesServers>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AnalysisServices/servers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists eligible SKUs for Analysis Services resource provider.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/skus
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SkuEnumerationForNewResourceResult} OK
		 */
		Servers_ListSkusForNew(api_version: string, subscriptionId: string): Observable<SkuEnumerationForNewResourceResult> {
			return this.http.get<SkuEnumerationForNewResourceResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AnalysisServices/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the Analysis Services servers for the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AnalysisServicesServers} OK
		 */
		Servers_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AnalysisServicesServers> {
			return this.http.get<AnalysisServicesServers>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified Analysis Services server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AnalysisServicesServer} OK. The operation was successful.
		 */
		Servers_GetDetails(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<AnalysisServicesServer> {
			return this.http.get<AnalysisServicesServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Provisions the specified Analysis Services server based on the configuration specified in the request.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AnalysisServicesServer} requestBody Contains the information used to provision the Analysis Services server.
		 * @return {AnalysisServicesServer} OK. The operation completed successfully.
		 */
		Servers_Create(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string, requestBody: AnalysisServicesServer): Observable<AnalysisServicesServer> {
			return this.http.put<AnalysisServicesServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Analysis Services server.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK.
		 */
		Servers_Delete(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the current state of the specified Analysis Services server.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AnalysisServicesServerUpdateParameters} requestBody Request object that contains the updated information for the server.
		 * @return {AnalysisServicesServer} OK
		 */
		Servers_Update(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string, requestBody: AnalysisServicesServerUpdateParameters): Observable<AnalysisServicesServer> {
			return this.http.patch<AnalysisServicesServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Dissociates a Unified Gateway associated with the server.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/dissociateGateway
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK.
		 */
		Servers_DissociateGateway(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dissociateGateway&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the gateway status of the specified Analysis Services server instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/listGatewayStatus
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {GatewayListStatusLive} OK.
		 */
		Servers_ListGatewayStatus(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<GatewayListStatusLive> {
			return this.http.post<GatewayListStatusLive>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/listGatewayStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Resumes operation of the specified Analysis Services server instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/resume
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK
		 */
		Servers_Resume(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists eligible SKUs for an Analysis Services resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/skus
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SkuEnumerationForExistingResourceResult} OK
		 */
		Servers_ListSkusForExisting(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<SkuEnumerationForExistingResourceResult> {
			return this.http.get<SkuEnumerationForExistingResourceResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Suspends operation of the specified Analysis Services server instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/suspend
		 * @param {string} resourceGroupName The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK.
		 */
		Servers_Suspend(resourceGroupName: string, serverName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AnalysisServices/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/suspend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

