import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error details. */
	export interface ErrorDetails {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Error details. */
	export interface ErrorDetailsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the IoTSpaces service. */
	export interface IoTSpacesDescription {

		/** The properties of an IoTSpaces instance. */
		properties?: IoTSpacesProperties;

		/**
		 * Information about the SKU of the IoTSpaces instance.
		 * Required
		 */
		sku: IoTSpacesSkuInfo;
	}

	/** The description of the IoTSpaces service. */
	export interface IoTSpacesDescriptionFormProperties {
	}
	export function CreateIoTSpacesDescriptionFormGroup() {
		return new FormGroup<IoTSpacesDescriptionFormProperties>({
		});

	}


	/** The properties of an IoTSpaces instance. */
	export interface IoTSpacesProperties {

		/** The management Api endpoint. */
		managementApiUrl?: string | null;

		/** The provisioning state. */
		provisioningState?: IoTSpacesPropertiesProvisioningState | null;

		/** The properties of the Azure Storage Container for file archive. */
		storageContainer?: StorageContainerProperties;

		/** The management UI endpoint. */
		webPortalUrl?: string | null;
	}

	/** The properties of an IoTSpaces instance. */
	export interface IoTSpacesPropertiesFormProperties {

		/** The management Api endpoint. */
		managementApiUrl: FormControl<string | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<IoTSpacesPropertiesProvisioningState | null | undefined>,

		/** The management UI endpoint. */
		webPortalUrl: FormControl<string | null | undefined>,
	}
	export function CreateIoTSpacesPropertiesFormGroup() {
		return new FormGroup<IoTSpacesPropertiesFormProperties>({
			managementApiUrl: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<IoTSpacesPropertiesProvisioningState | null | undefined>(undefined),
			webPortalUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IoTSpacesPropertiesProvisioningState { Provisioning = 'Provisioning', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }


	/** The properties of the Azure Storage Container for file archive. */
	export interface StorageContainerProperties {

		/** The connection string of the storage account. */
		connectionString?: string | null;

		/** The name of storage container in the storage account. */
		containerName?: string | null;

		/** The name of the resource group of the storage account. */
		resourceGroup?: string | null;

		/** The subscription identifier of the storage account. */
		subscriptionId?: string | null;
	}

	/** The properties of the Azure Storage Container for file archive. */
	export interface StorageContainerPropertiesFormProperties {

		/** The connection string of the storage account. */
		connectionString: FormControl<string | null | undefined>,

		/** The name of storage container in the storage account. */
		containerName: FormControl<string | null | undefined>,

		/** The name of the resource group of the storage account. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The subscription identifier of the storage account. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateStorageContainerPropertiesFormGroup() {
		return new FormGroup<StorageContainerPropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the SKU of the IoTSpaces instance. */
	export interface IoTSpacesSkuInfo {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: IoTSpacesSkuInfoName;
	}

	/** Information about the SKU of the IoTSpaces instance. */
	export interface IoTSpacesSkuInfoFormProperties {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: FormControl<IoTSpacesSkuInfoName | null | undefined>,
	}
	export function CreateIoTSpacesSkuInfoFormGroup() {
		return new FormGroup<IoTSpacesSkuInfoFormProperties>({
			name: new FormControl<IoTSpacesSkuInfoName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IoTSpacesSkuInfoName { F1 = 'F1', S1 = 'S1', S2 = 'S2', S3 = 'S3' }


	/** A list of IoTSpaces description objects with a next link. */
	export interface IoTSpacesDescriptionListResult {

		/** The link used to get the next page of IoTSpaces description objects. */
		nextLink?: string | null;

		/** A list of IoTSpaces description objects. */
		value?: Array<IoTSpacesDescription>;
	}

	/** A list of IoTSpaces description objects with a next link. */
	export interface IoTSpacesDescriptionListResultFormProperties {

		/** The link used to get the next page of IoTSpaces description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIoTSpacesDescriptionListResultFormGroup() {
		return new FormGroup<IoTSpacesDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties indicating whether a given IoTSpaces service name is available. */
	export interface IoTSpacesNameAvailabilityInfo {

		/** The detailed reason message. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;

		/** The reason for unavailability. */
		reason?: IoTSpacesNameAvailabilityInfoReason | null;
	}

	/** The properties indicating whether a given IoTSpaces service name is available. */
	export interface IoTSpacesNameAvailabilityInfoFormProperties {

		/** The detailed reason message. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason for unavailability. */
		reason: FormControl<IoTSpacesNameAvailabilityInfoReason | null | undefined>,
	}
	export function CreateIoTSpacesNameAvailabilityInfoFormGroup() {
		return new FormGroup<IoTSpacesNameAvailabilityInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<IoTSpacesNameAvailabilityInfoReason | null | undefined>(undefined),
		});

	}

	export enum IoTSpacesNameAvailabilityInfoReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The description of the IoTSpaces service. */
	export interface IoTSpacesPatchDescription {

		/** The properties of an IoTSpaces instance. */
		properties?: IoTSpacesProperties;

		/** Instance tags */
		tags?: {[id: string]: string };
	}

	/** The description of the IoTSpaces service. */
	export interface IoTSpacesPatchDescriptionFormProperties {

		/** Instance tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateIoTSpacesPatchDescriptionFormGroup() {
		return new FormGroup<IoTSpacesPatchDescriptionFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** IoTSpaces service REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: OperationDisplay;

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name?: string | null;
	}

	/** IoTSpaces service REST API operation */
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

		/** Service provider: Microsoft IoTSpaces */
		provider?: string | null;

		/** Resource Type: IoTSpaces */
		resource?: string | null;
	}

	/** The object that represents the operation. */
	export interface OperationDisplayFormProperties {

		/** Friendly description for the operation, */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft IoTSpaces */
		provider: FormControl<string | null | undefined>,

		/** Resource Type: IoTSpaces */
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


	/** Input values. */
	export interface OperationInputs {

		/**
		 * The name of the IoTSpaces service instance to check.
		 * Required
		 */
		name: string;
	}

	/** Input values. */
	export interface OperationInputsFormProperties {

		/**
		 * The name of the IoTSpaces service instance to check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationInputsFormGroup() {
		return new FormGroup<OperationInputsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of IoTSpaces service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The link used to get the next page of IoTSpaces description objects. */
		nextLink?: string | null;

		/** A list of IoT spaces operations supported by the Microsoft.IoTSpaces resource provider. */
		value?: Array<Operation>;
	}

	/** A list of IoTSpaces service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The link used to get the next page of IoTSpaces description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common properties of an IoTSpaces service. */
	export interface Resource {

		/** The resource identifier. */
		id?: string | null;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The common properties of an IoTSpaces service. */
	export interface ResourceFormProperties {

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
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available IoTSpaces service REST API operations.
		 * Get providers/Microsoft.IoTSpaces/operations
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: Operations_ListApi_version): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.IoTSpaces/operations?api_version=' + api_version, {});
		}

		/**
		 * Get all the IoTSpaces instances in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.IoTSpaces/Graph
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {IoTSpacesDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoTSpaces instances in the subscription.
		 */
		IoTSpaces_List(api_version: Operations_ListApi_version, subscriptionId: string): Observable<IoTSpacesDescriptionListResult> {
			return this.http.get<IoTSpacesDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTSpaces/Graph?api_version=' + api_version, {});
		}

		/**
		 * Check if an IoTSpaces instance name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.IoTSpaces/checkNameAvailability
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {OperationInputs} requestBody Set the name parameter in the OperationInputs structure to the name of the IoTSpaces instance to check.
		 * @return {IoTSpacesNameAvailabilityInfo} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoTSpaces service name is available. If the name is not available, the body contains the reason.
		 */
		IoTSpaces_CheckNameAvailability(api_version: Operations_ListApi_version, subscriptionId: string, requestBody: OperationInputs): Observable<IoTSpacesNameAvailabilityInfo> {
			return this.http.post<IoTSpacesNameAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTSpaces/checkNameAvailability?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the IoTSpaces instances in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoTSpaces instance.
		 * @return {IoTSpacesDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoTSpaces instances in the resource group.
		 */
		IoTSpaces_ListByResourceGroup(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<IoTSpacesDescriptionListResult> {
			return this.http.get<IoTSpacesDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTSpaces/Graph?api_version=' + api_version, {});
		}

		/**
		 * Get the metadata of a IoTSpaces instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName}
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoTSpaces instance.
		 * @param {string} resourceName The name of the IoTSpaces instance.
		 * @return {IoTSpacesDescription} The body contains all the non-security properties of the IoTSpaces instance. Security-related properties are set to null.
		 */
		IoTSpaces_Get(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IoTSpacesDescription> {
			return this.http.get<IoTSpacesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTSpaces/Graph/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create or update the metadata of an IoTSpaces instance. The usual pattern to modify a property is to retrieve the IoTSpaces instance metadata and security metadata, and then combine them with the modified values in a new body to update the IoTSpaces instance.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName}
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoTSpaces instance.
		 * @param {string} resourceName The name of the IoTSpaces instance.
		 * @param {IoTSpacesDescription} requestBody The IoTSpaces instance metadata and security metadata.
		 * @return {IoTSpacesDescription} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		IoTSpaces_CreateOrUpdate(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: IoTSpacesDescription): Observable<IoTSpacesDescription> {
			return this.http.put<IoTSpacesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTSpaces/Graph/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an IoTSpaces instance.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName}
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoTSpaces instance.
		 * @param {string} resourceName The name of the IoTSpaces instance.
		 * @return {IoTSpacesDescription} This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		IoTSpaces_Delete(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IoTSpacesDescription> {
			return this.http.delete<IoTSpacesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTSpaces/Graph/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Update the metadata of a IoTSpaces instance.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTSpaces/Graph/{resourceName}
		 * @param {Operations_ListApi_version} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoTSpaces instance.
		 * @param {string} resourceName The name of the IoTSpaces instance.
		 * @param {IoTSpacesPatchDescription} requestBody The IoTSpaces instance metadata and security metadata.
		 * @return {IoTSpacesDescription} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		IoTSpaces_Update(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: IoTSpacesPatchDescription): Observable<IoTSpacesDescription> {
			return this.http.patch<IoTSpacesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTSpaces/Graph/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Operations_ListApi_version { '2017-10-01-preview' = '2017-10-01-preview' }

}

