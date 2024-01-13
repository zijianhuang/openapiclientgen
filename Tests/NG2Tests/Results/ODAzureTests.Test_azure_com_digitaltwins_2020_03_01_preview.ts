import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The result returned from a database check name availability request. */
	export interface CheckNameRequest {

		/**
		 * Resource name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, for instance Microsoft.DigitalTwins/digitalTwinsInstances.
		 * Required
		 */
		type: CheckNameRequestType;
	}

	/** The result returned from a database check name availability request. */
	export interface CheckNameRequestFormProperties {

		/**
		 * Resource name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, for instance Microsoft.DigitalTwins/digitalTwinsInstances.
		 * Required
		 */
		type: FormControl<CheckNameRequestType | null | undefined>,
	}
	export function CreateCheckNameRequestFormGroup() {
		return new FormGroup<CheckNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameRequestType { 'Microsoft.DigitalTwins/digitalTwinsInstances' = 0 }


	/** The result returned from a check name availability request. */
	export interface CheckNameResult {

		/** Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. */
		message?: string | null;

		/** The name that was checked. */
		name?: string | null;

		/** Specifies a Boolean value that indicates if the name is available. */
		nameAvailable?: boolean | null;

		/** Message providing the reason why the given name is invalid. */
		reason?: CheckNameResultReason | null;
	}

	/** The result returned from a check name availability request. */
	export interface CheckNameResultFormProperties {

		/** Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. */
		message: FormControl<string | null | undefined>,

		/** The name that was checked. */
		name: FormControl<string | null | undefined>,

		/** Specifies a Boolean value that indicates if the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Message providing the reason why the given name is invalid. */
		reason: FormControl<CheckNameResultReason | null | undefined>,
	}
	export function CreateCheckNameResultFormGroup() {
		return new FormGroup<CheckNameResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameResultReason { Invalid = 0, AlreadyExists = 1 }


	/** The description of the DigitalTwins service. */
	export interface DigitalTwinsDescription {

		/** The properties of a DigitalTwinsInstance. */
		properties?: DigitalTwinsProperties;
	}

	/** The description of the DigitalTwins service. */
	export interface DigitalTwinsDescriptionFormProperties {
	}
	export function CreateDigitalTwinsDescriptionFormGroup() {
		return new FormGroup<DigitalTwinsDescriptionFormProperties>({
		});

	}


	/** The properties of a DigitalTwinsInstance. */
	export interface DigitalTwinsProperties {

		/** Time when DigitalTwinsInstance was created. */
		createdTime?: Date | null;

		/** Api endpoint to work with DigitalTwinsInstance. */
		hostName?: string | null;

		/** Time when DigitalTwinsInstance was created. */
		lastUpdatedTime?: Date | null;

		/** The provisioning state. */
		provisioningState?: DigitalTwinsPropertiesProvisioningState | null;
	}

	/** The properties of a DigitalTwinsInstance. */
	export interface DigitalTwinsPropertiesFormProperties {

		/** Time when DigitalTwinsInstance was created. */
		createdTime: FormControl<Date | null | undefined>,

		/** Api endpoint to work with DigitalTwinsInstance. */
		hostName: FormControl<string | null | undefined>,

		/** Time when DigitalTwinsInstance was created. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>,
	}
	export function CreateDigitalTwinsPropertiesFormGroup() {
		return new FormGroup<DigitalTwinsPropertiesFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum DigitalTwinsPropertiesProvisioningState { Provisioning = 0, Deleting = 1, Succeeded = 2, Failed = 3, Canceled = 4 }


	/** A list of DigitalTwins description objects with a next link. */
	export interface DigitalTwinsDescriptionListResult {

		/** The link used to get the next page of DigitalTwins description objects. */
		nextLink?: string | null;

		/** A list of DigitalTwins description objects. */
		value?: Array<DigitalTwinsDescription>;
	}

	/** A list of DigitalTwins description objects with a next link. */
	export interface DigitalTwinsDescriptionListResultFormProperties {

		/** The link used to get the next page of DigitalTwins description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDigitalTwinsDescriptionListResultFormGroup() {
		return new FormGroup<DigitalTwinsDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DigitalTwinsInstance endpoint resource. */
	export interface DigitalTwinsEndpointResource extends ExternalResource {

		/** Properties related to Digital Twins Endpoint */
		properties?: DigitalTwinsEndpointResourceProperties;
	}

	/** DigitalTwinsInstance endpoint resource. */
	export interface DigitalTwinsEndpointResourceFormProperties extends ExternalResourceFormProperties {
	}
	export function CreateDigitalTwinsEndpointResourceFormGroup() {
		return new FormGroup<DigitalTwinsEndpointResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of DigitalTwinsInstance Endpoints with a next link. */
	export interface DigitalTwinsEndpointResourceListResult {

		/** The link used to get the next page of DigitalTwinsInstance Endpoints. */
		nextLink?: string | null;

		/** A list of DigitalTwinsInstance Endpoints. */
		value?: Array<DigitalTwinsEndpointResource>;
	}

	/** A list of DigitalTwinsInstance Endpoints with a next link. */
	export interface DigitalTwinsEndpointResourceListResultFormProperties {

		/** The link used to get the next page of DigitalTwinsInstance Endpoints. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDigitalTwinsEndpointResourceListResultFormGroup() {
		return new FormGroup<DigitalTwinsEndpointResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties related to Digital Twins Endpoint */
	export interface DigitalTwinsEndpointResourceProperties {

		/** Time when the Endpoint was added to DigitalTwinsInstance. */
		createdTime?: Date | null;

		/**
		 * The type of Digital Twins endpoint
		 * Required
		 */
		endpointType: DigitalTwinsEndpointResourcePropertiesEndpointType;

		/** The provisioning state. */
		provisioningState?: DigitalTwinsPropertiesProvisioningState | null;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** Properties related to Digital Twins Endpoint */
	export interface DigitalTwinsEndpointResourcePropertiesFormProperties {

		/** Time when the Endpoint was added to DigitalTwinsInstance. */
		createdTime: FormControl<Date | null | undefined>,

		/**
		 * The type of Digital Twins endpoint
		 * Required
		 */
		endpointType: FormControl<DigitalTwinsEndpointResourcePropertiesEndpointType | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDigitalTwinsEndpointResourcePropertiesFormGroup() {
		return new FormGroup<DigitalTwinsEndpointResourcePropertiesFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			endpointType: new FormControl<DigitalTwinsEndpointResourcePropertiesEndpointType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum DigitalTwinsEndpointResourcePropertiesEndpointType { EventHub = 0, EventGrid = 1, ServiceBus = 2 }


	/** A list of DigitalTwinsInstance IoTHubs with a next link. */
	export interface DigitalTwinsIntegrationResourceListResult {

		/** The link used to get the next page of DigitalTwinsInstance IoTHubs. */
		nextLink?: string | null;

		/** A list of DigitalTwinsInstance IoTHubs. */
		value?: Array<IntegrationResource>;
	}

	/** A list of DigitalTwinsInstance IoTHubs with a next link. */
	export interface DigitalTwinsIntegrationResourceListResultFormProperties {

		/** The link used to get the next page of DigitalTwinsInstance IoTHubs. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDigitalTwinsIntegrationResourceListResultFormGroup() {
		return new FormGroup<DigitalTwinsIntegrationResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IoTHub integration resource. */
	export interface IntegrationResource {

		/** Properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
		properties?: IntegrationResourceProperties;
	}

	/** IoTHub integration resource. */
	export interface IntegrationResourceFormProperties {
	}
	export function CreateIntegrationResourceFormGroup() {
		return new FormGroup<IntegrationResourceFormProperties>({
		});

	}


	/** Properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourceProperties {

		/** Time when the IoTHub was added to DigitalTwinsInstance. */
		createdTime?: Date | null;

		/** Fully qualified resource identifier of the DigitalTwins Azure resource. */
		resourceId?: string | null;
	}

	/** Properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourcePropertiesFormProperties {

		/** Time when the IoTHub was added to DigitalTwinsInstance. */
		createdTime: FormControl<Date | null | undefined>,

		/** Fully qualified resource identifier of the DigitalTwins Azure resource. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationResourcePropertiesFormGroup() {
		return new FormGroup<IntegrationResourcePropertiesFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the DigitalTwins service. */
	export interface DigitalTwinsPatchDescription {

		/** Instance tags */
		tags?: {[id: string]: string };
	}

	/** The description of the DigitalTwins service. */
	export interface DigitalTwinsPatchDescriptionFormProperties {

		/** Instance tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDigitalTwinsPatchDescriptionFormGroup() {
		return new FormGroup<DigitalTwinsPatchDescriptionFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The common properties of a DigitalTwinsInstance. */
	export interface DigitalTwinsResource {

		/** The resource identifier. */
		id?: string | null;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** The resource name. */
		name?: string | null;

		/** Information about the SKU of the DigitalTwinsInstance. */
		sku?: DigitalTwinsSkuInfo;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The common properties of a DigitalTwinsInstance. */
	export interface DigitalTwinsResourceFormProperties {

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * The resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDigitalTwinsResourceFormGroup() {
		return new FormGroup<DigitalTwinsResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the SKU of the DigitalTwinsInstance. */
	export interface DigitalTwinsSkuInfo {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: DigitalTwinsSkuInfoName;
	}

	/** Information about the SKU of the DigitalTwinsInstance. */
	export interface DigitalTwinsSkuInfoFormProperties {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: FormControl<DigitalTwinsSkuInfoName | null | undefined>,
	}
	export function CreateDigitalTwinsSkuInfoFormGroup() {
		return new FormGroup<DigitalTwinsSkuInfoFormProperties>({
			name: new FormControl<DigitalTwinsSkuInfoName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DigitalTwinsSkuInfoName { F1 = 0 }


	/** Error definition. */
	export interface ErrorDefinition {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code?: string | null;

		/** Internal error details. */
		details?: Array<ErrorDefinition>;

		/** Description of the error. */
		message?: string | null;
	}

	/** Error definition. */
	export interface ErrorDefinitionFormProperties {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code: FormControl<string | null | undefined>,

		/** Description of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDefinitionFormGroup() {
		return new FormGroup<ErrorDefinitionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response. */
	export interface ErrorResponse {

		/** Error definition. */
		error?: ErrorDefinition;
	}

	/** Error response. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** properties related to eventgrid. */
	export interface EventGrid extends DigitalTwinsEndpointResourceProperties {

		/** EventGrid Topic Endpoint */
		TopicEndpoint?: string | null;

		/** EventGrid secondary accesskey. Will be obfuscated during read */
		accessKey1?: string | null;

		/** EventGrid secondary accesskey. Will be obfuscated during read */
		accessKey2?: string | null;
	}

	/** properties related to eventgrid. */
	export interface EventGridFormProperties extends DigitalTwinsEndpointResourcePropertiesFormProperties {

		/** EventGrid Topic Endpoint */
		TopicEndpoint: FormControl<string | null | undefined>,

		/** EventGrid secondary accesskey. Will be obfuscated during read */
		accessKey1: FormControl<string | null | undefined>,

		/** EventGrid secondary accesskey. Will be obfuscated during read */
		accessKey2: FormControl<string | null | undefined>,
	}
	export function CreateEventGridFormGroup() {
		return new FormGroup<EventGridFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			endpointType: new FormControl<DigitalTwinsEndpointResourcePropertiesEndpointType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			TopicEndpoint: new FormControl<string | null | undefined>(undefined),
			accessKey1: new FormControl<string | null | undefined>(undefined),
			accessKey2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventHub {
	}
	export interface EventHubFormProperties {
	}
	export function CreateEventHubFormGroup() {
		return new FormGroup<EventHubFormProperties>({
		});

	}


	/** Definition of a Resource. */
	export interface ExternalResource {

		/** The resource identifier. */
		id?: string | null;

		/** Extension resource name. */
		name?: string | null;

		/** The resource type. */
		type?: string | null;
	}

	/** Definition of a Resource. */
	export interface ExternalResourceFormProperties {

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/** Extension resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateExternalResourceFormGroup() {
		return new FormGroup<ExternalResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourceState {

		/** DigitalTwinsInstance - IoTHub link state. */
		provisioningState?: DigitalTwinsPropertiesProvisioningState | null;
	}

	/** Properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourceStateFormProperties {

		/** DigitalTwinsInstance - IoTHub link state. */
		provisioningState: FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>,
	}
	export function CreateIntegrationResourceStateFormGroup() {
		return new FormGroup<IntegrationResourceStateFormProperties>({
			provisioningState: new FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** IoTHub integration resource. */
	export interface IntegrationResourceUpdateInfo {

		/** Updatable properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
		properties?: IntegrationResourceUpdateProperties;
	}

	/** IoTHub integration resource. */
	export interface IntegrationResourceUpdateInfoFormProperties {
	}
	export function CreateIntegrationResourceUpdateInfoFormGroup() {
		return new FormGroup<IntegrationResourceUpdateInfoFormProperties>({
		});

	}


	/** Updatable properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourceUpdateProperties {
	}

	/** Updatable properties related to the IoTHub DigitalTwinsInstance Integration Resource. */
	export interface IntegrationResourceUpdatePropertiesFormProperties {
	}
	export function CreateIntegrationResourceUpdatePropertiesFormGroup() {
		return new FormGroup<IntegrationResourceUpdatePropertiesFormProperties>({
		});

	}


	/** DigitalTwins service REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: OperationDisplay;

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name?: string | null;
	}

	/** DigitalTwins service REST API operation */
	export interface OperationFormProperties {

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that represents the operation. */
	export interface OperationDisplay {

		/** Friendly description for the operation, */
		description?: string | null;

		/** Name of the operation */
		operation?: string | null;

		/** Service provider: Microsoft DigitalTwins */
		provider?: string | null;

		/** Resource Type: DigitalTwinsInstances */
		resource?: string | null;
	}

	/** The object that represents the operation. */
	export interface OperationDisplayFormProperties {

		/** Friendly description for the operation, */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft DigitalTwins */
		provider: FormControl<string | null | undefined>,

		/** Resource Type: DigitalTwinsInstances */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of DigitalTwins service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The link used to get the next page of DigitalTwins description objects. */
		nextLink?: string | null;

		/** A list of DigitalTwins operations supported by the Microsoft.DigitalTwins resource provider. */
		value?: Array<Operation>;
	}

	/** A list of DigitalTwins service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The link used to get the next page of DigitalTwins description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** properties related to servicebus. */
	export interface ServiceBus extends DigitalTwinsEndpointResourceProperties {

		/** PrimaryConnectionString of the endpoint. Will be obfuscated during read */
		primaryConnectionString?: string | null;

		/** SecondaryConnectionString of the endpoint. Will be obfuscated during read */
		secondaryConnectionString?: string | null;
	}

	/** properties related to servicebus. */
	export interface ServiceBusFormProperties extends DigitalTwinsEndpointResourcePropertiesFormProperties {

		/** PrimaryConnectionString of the endpoint. Will be obfuscated during read */
		primaryConnectionString: FormControl<string | null | undefined>,

		/** SecondaryConnectionString of the endpoint. Will be obfuscated during read */
		secondaryConnectionString: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusFormGroup() {
		return new FormGroup<ServiceBusFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			endpointType: new FormControl<DigitalTwinsEndpointResourcePropertiesEndpointType | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<DigitalTwinsPropertiesProvisioningState | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			primaryConnectionString: new FormControl<string | null | undefined>(undefined),
			secondaryConnectionString: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available DigitalTwins service REST API operations.
		 * Get providers/Microsoft.DigitalTwins/operations
		 * @param {Operations_ListApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: Operations_ListApi_version): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.DigitalTwins/operations?api_version=' + api_version, {});
		}

		/**
		 * Get all the DigitalTwinsInstances in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/digitalTwinsInstances
		 * @param {DigitalTwins_ListApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {DigitalTwinsDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the DigitalTwinsInstances in the subscription.
		 */
		DigitalTwins_List(api_version: DigitalTwins_ListApi_version, subscriptionId: string): Observable<DigitalTwinsDescriptionListResult> {
			return this.http.get<DigitalTwinsDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances?api_version=' + api_version, {});
		}

		/**
		 * Check if a DigitalTwinsInstance name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/locations/{location}/checkNameAvailability
		 * @param {DigitalTwins_CheckNameAvailabilityApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} location Location of DigitalTwinsInstance.
		 * @param {CheckNameRequest} requestBody Set the name parameter in the DigitalTwinsInstanceCheckName structure to the name of the DigitalTwinsInstance to check.
		 * @return {CheckNameResult} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the DigitalTwins service name is available. If the name is not available, the body contains the reason.
		 */
		DigitalTwins_CheckNameAvailability(api_version: DigitalTwins_CheckNameAvailabilityApi_version, subscriptionId: string, location: string, requestBody: CheckNameRequest): Observable<CheckNameResult> {
			return this.http.post<CheckNameResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DigitalTwins/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the DigitalTwinsInstances in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances
		 * @param {DigitalTwins_ListByResourceGroupApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @return {DigitalTwinsDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the DigitalTwinsInstances in the resource group.
		 */
		DigitalTwins_ListByResourceGroup(api_version: DigitalTwins_ListByResourceGroupApi_version, subscriptionId: string, resourceGroupName: string): Observable<DigitalTwinsDescriptionListResult> {
			return this.http.get<DigitalTwinsDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances?api_version=' + api_version, {});
		}

		/**
		 * Get DigitalTwinsInstances resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}
		 * @param {DigitalTwins_GetApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @return {DigitalTwinsDescription} The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null.
		 */
		DigitalTwins_Get(api_version: DigitalTwins_GetApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<DigitalTwinsDescription> {
			return this.http.get<DigitalTwinsDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified values in a new body to update the DigitalTwinsInstance.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}
		 * @param {DigitalTwins_CreateOrUpdateApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @param {DigitalTwinsDescription} requestBody The DigitalTwinsInstance and security metadata.
		 * @return {DigitalTwinsDescription} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		DigitalTwins_CreateOrUpdate(api_version: DigitalTwins_CreateOrUpdateApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: DigitalTwinsDescription): Observable<DigitalTwinsDescription> {
			return this.http.put<DigitalTwinsDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a DigitalTwinsInstance.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}
		 * @param {DigitalTwins_DeleteApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @return {void} This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		DigitalTwins_Delete(api_version: DigitalTwins_DeleteApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update metadata of DigitalTwinsInstance.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}
		 * @param {DigitalTwins_UpdateApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @param {DigitalTwinsPatchDescription} requestBody The DigitalTwinsInstance and security metadata.
		 * @return {DigitalTwinsDescription} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		DigitalTwins_Update(api_version: DigitalTwins_UpdateApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: DigitalTwinsPatchDescription): Observable<DigitalTwinsDescription> {
			return this.http.patch<DigitalTwinsDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get DigitalTwinsInstance Endpoints.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints
		 * @param {DigitalTwinsEndpoint_ListApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @return {DigitalTwinsEndpointResourceListResult} The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null.
		 */
		DigitalTwinsEndpoint_List(api_version: DigitalTwinsEndpoint_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<DigitalTwinsEndpointResourceListResult> {
			return this.http.get<DigitalTwinsEndpointResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/endpoints?api_version=' + api_version, {});
		}

		/**
		 * Get DigitalTwinsInstances Endpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}
		 * @param {DigitalTwinsEndpoint_GetApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @param {string} endpointName Name of Endpoint Resource.
		 * @return {DigitalTwinsEndpointResource} The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null.
		 */
		DigitalTwinsEndpoint_Get(api_version: DigitalTwinsEndpoint_GetApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, endpointName: string): Observable<DigitalTwinsEndpointResource> {
			return this.http.get<DigitalTwinsEndpointResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/endpoints/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create or update DigitalTwinsInstance endpoint.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}
		 * @param {DigitalTwinsEndpoint_CreateOrUpdateApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @param {string} endpointName Name of Endpoint Resource.
		 * @param {DigitalTwinsEndpointResource} requestBody The DigitalTwinsInstance endpoint metadata and security metadata.
		 * @return {DigitalTwinsEndpointResource} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		DigitalTwinsEndpoint_CreateOrUpdate(api_version: DigitalTwinsEndpoint_CreateOrUpdateApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, endpointName: string, requestBody: DigitalTwinsEndpointResource): Observable<DigitalTwinsEndpointResource> {
			return this.http.put<DigitalTwinsEndpointResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/endpoints/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a DigitalTwinsInstance endpoint.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}
		 * @param {DigitalTwinsEndpoint_DeleteApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @param {string} endpointName Name of Endpoint Resource.
		 * @return {void} This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		DigitalTwinsEndpoint_Delete(api_version: DigitalTwinsEndpoint_DeleteApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, endpointName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/endpoints/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DigitalTwinsInstance IoTHubs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/integrationResources
		 * @param {DigitalTwinsIoTHubs_ListApi_version} api_version Version of the DigitalTwinsInstance Management API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
		 * @param {string} resourceName The name of the DigitalTwinsInstance.
		 * @return {DigitalTwinsIntegrationResourceListResult} The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null.
		 */
		DigitalTwinsIoTHubs_List(api_version: DigitalTwinsIoTHubs_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<DigitalTwinsIntegrationResourceListResult> {
			return this.http.get<DigitalTwinsIntegrationResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DigitalTwins/digitalTwinsInstances/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/integrationResources?api_version=' + api_version, {});
		}

		/**
		 * Gets properties of an IoTHub Integration.
		 * Get {scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName}
		 * @param {string} scope The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
		 * @param {string} integrationResourceName Name of IoTHub and DigitalTwinsInstance integration instance.
		 * @return {IntegrationResource} This is a synchronous operation. The body contains metadata about IoTHub and DigitalTwinsInstance Integration.
		 */
		IoTHub_Get(scope: string, integrationResourceName: string): Observable<IntegrationResource> {
			return this.http.get<IntegrationResource>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.DigitalTwins/integrationResources/' + (integrationResourceName == null ? '' : encodeURIComponent(integrationResourceName)) + '', {});
		}

		/**
		 * Creates or Updates an IoTHub Integration with DigitalTwinsInstances.
		 * Put {scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName}
		 * @param {string} scope The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
		 * @param {string} integrationResourceName Name of IoTHub and DigitalTwinsInstance integration instance.
		 * @param {IntegrationResource} requestBody The IoTHub metadata.
		 * @return {void} 
		 */
		IoTHub_CreateOrUpdate(scope: string, integrationResourceName: string, requestBody: IntegrationResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.DigitalTwins/integrationResources/' + (integrationResourceName == null ? '' : encodeURIComponent(integrationResourceName)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a DigitalTwinsInstance link with IoTHub.
		 * Delete {scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName}
		 * @param {string} scope The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
		 * @param {string} integrationResourceName Name of IoTHub and DigitalTwinsInstance integration instance.
		 * @return {void} OK. DigitalTwinsInstance IoTHub link has been Deleted.
		 */
		IoTHub_Delete(scope: string, integrationResourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.DigitalTwins/integrationResources/' + (integrationResourceName == null ? '' : encodeURIComponent(integrationResourceName)) + '', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Operations_ListApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_ListApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_CheckNameAvailabilityApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_ListByResourceGroupApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_GetApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_CreateOrUpdateApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_DeleteApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwins_UpdateApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwinsEndpoint_ListApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwinsEndpoint_GetApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwinsEndpoint_CreateOrUpdateApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwinsEndpoint_DeleteApi_version { _2020_03_01_preview = 0 }

	export enum DigitalTwinsIoTHubs_ListApi_version { _2020_03_01_preview = 0 }

}

