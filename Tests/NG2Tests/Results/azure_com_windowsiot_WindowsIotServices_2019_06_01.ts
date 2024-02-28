import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The description of the Windows IoT Device Service. */
	export interface DeviceService {

		/** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
		etag?: string | null;

		/** The properties of a Windows IoT Device Service. */
		properties?: DeviceServiceProperties;
	}

	/** The description of the Windows IoT Device Service. */
	export interface DeviceServiceFormProperties {

		/** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateDeviceServiceFormGroup() {
		return new FormGroup<DeviceServiceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a Windows IoT Device Service. */
	export interface DeviceServiceProperties {

		/** Windows IoT Device Service OEM AAD domain */
		adminDomainName?: string | null;

		/** Windows IoT Device Service ODM AAD domain */
		billingDomainName?: string | null;

		/** Windows IoT Device Service notes. */
		notes?: string | null;

		/**
		 * Windows IoT Device Service device allocation,
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quantity?: string | null;

		/** Windows IoT Device Service start date, */
		startDate?: Date | null;
	}

	/** The properties of a Windows IoT Device Service. */
	export interface DeviceServicePropertiesFormProperties {

		/** Windows IoT Device Service OEM AAD domain */
		adminDomainName: FormControl<string | null | undefined>,

		/** Windows IoT Device Service ODM AAD domain */
		billingDomainName: FormControl<string | null | undefined>,

		/** Windows IoT Device Service notes. */
		notes: FormControl<string | null | undefined>,

		/**
		 * Windows IoT Device Service device allocation,
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quantity: FormControl<string | null | undefined>,

		/** Windows IoT Device Service start date, */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceServicePropertiesFormGroup() {
		return new FormGroup<DeviceServicePropertiesFormProperties>({
			adminDomainName: new FormControl<string | null | undefined>(undefined),
			billingDomainName: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Input values. */
	export interface DeviceServiceCheckNameAvailabilityParameters {

		/**
		 * The name of the Windows IoT Device Service to check.
		 * Required
		 */
		name: string;
	}

	/** Input values. */
	export interface DeviceServiceCheckNameAvailabilityParametersFormProperties {

		/**
		 * The name of the Windows IoT Device Service to check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceServiceCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<DeviceServiceCheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The JSON-serialized array of DeviceService objects with a next link. */
	export interface DeviceServiceDescriptionListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The array of DeviceService objects. */
		value?: Array<DeviceService>;
	}

	/** The JSON-serialized array of DeviceService objects with a next link. */
	export interface DeviceServiceDescriptionListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeviceServiceDescriptionListResultFormGroup() {
		return new FormGroup<DeviceServiceDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties indicating whether a given Windows IoT Device Service name is available. */
	export interface DeviceServiceNameAvailabilityInfo {

		/** The detailed reason message. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;

		/** The reason for unavailability. */
		reason?: DeviceServiceNameAvailabilityInfoReason | null;
	}

	/** The properties indicating whether a given Windows IoT Device Service name is available. */
	export interface DeviceServiceNameAvailabilityInfoFormProperties {

		/** The detailed reason message. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason for unavailability. */
		reason: FormControl<DeviceServiceNameAvailabilityInfoReason | null | undefined>,
	}
	export function CreateDeviceServiceNameAvailabilityInfoFormGroup() {
		return new FormGroup<DeviceServiceNameAvailabilityInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<DeviceServiceNameAvailabilityInfoReason | null | undefined>(undefined),
		});

	}

	export enum DeviceServiceNameAvailabilityInfoReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The details of the error. */
	export interface ErrorDetails {

		/** One of a server-defined set of error codes. */
		code?: string | null;

		/** A human-readable representation of the error's details. */
		details?: string | null;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** The details of the error. */
	export interface ErrorDetailsFormProperties {

		/** One of a server-defined set of error codes. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error's details. */
		details: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Azure Data Catalog Service. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Azure Data Catalog Service. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationEntity {

		/** The operation supported by Azure Data Catalog Service. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** The operation supported by Azure Data Catalog Service. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Windows IoT Device Service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Windows IoT Device Service operations supported by the Microsoft.WindowsIoT resource provider. */
		value?: Array<OperationEntity>;
	}

	/** Result of the request to list Windows IoT Device Service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** The Azure Region where the resource lives */
		location?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** The Azure Region where the resource lives */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Windows IoT Services REST API operations.
		 * Get providers/Microsoft.WindowsIoT/operations
		 * @param {string} api_version The version of the API.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.WindowsIoT/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check if a Windows IoT Device Service name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/checkDeviceServiceNameAvailability
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {DeviceServiceCheckNameAvailabilityParameters} requestBody Set the name parameter in the DeviceServiceCheckNameAvailabilityParameters structure to the name of the Windows IoT Device Service to check.
		 * @return {DeviceServiceNameAvailabilityInfo} OK. The request has succeeded.
		 */
		Services_CheckDeviceServiceNameAvailability(api_version: string, subscriptionId: string, requestBody: DeviceServiceCheckNameAvailabilityParameters): Observable<DeviceServiceNameAvailabilityInfo> {
			return this.http.post<DeviceServiceNameAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.WindowsIoT/checkDeviceServiceNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the IoT hubs in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/deviceServices
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {DeviceServiceDescriptionListResult} OK. The request has succeeded.
		 */
		Services_List(api_version: string, subscriptionId: string): Observable<DeviceServiceDescriptionListResult> {
			return this.http.get<DeviceServiceDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.WindowsIoT/deviceServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the IoT hubs in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the Windows IoT Device Service.
		 * @return {DeviceServiceDescriptionListResult} OK. The request has succeeded.
		 */
		Services_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<DeviceServiceDescriptionListResult> {
			return this.http.get<DeviceServiceDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsIoT/deviceServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the non-security related metadata of a Windows IoT Device Service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the Windows IoT Device Service.
		 * @param {string} deviceName The name of the Windows IoT Device Service.
		 * @return {DeviceService} OK. The request has succeeded.
		 */
		Services_Get(api_version: string, subscriptionId: string, resourceGroupName: string, deviceName: string): Observable<DeviceService> {
			return this.http.get<DeviceService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsIoT/deviceServices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update the metadata of a Windows IoT Device Service.
		 * Create or update the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the Windows IoT Device Service.
		 * @param {string} deviceName The name of the Windows IoT Device Service.
		 * @param {DeviceServiceProperties} requestBody The Windows IoT Device Service metadata and security metadata.
		 * @return {DeviceService} OK. The request has succeeded.
		 */
		Services_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, deviceName: string, requestBody: DeviceServiceProperties): Observable<DeviceService> {
			return this.http.put<DeviceService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsIoT/deviceServices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Windows IoT Device Service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the Windows IoT Device Service.
		 * @param {string} deviceName The name of the Windows IoT Device Service.
		 * @return {DeviceService} OK. The request has succeeded.
		 */
		Services_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, deviceName: string): Observable<DeviceService> {
			return this.http.delete<DeviceService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsIoT/deviceServices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the metadata of a Windows IoT Device Service.
		 * Updates the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the Windows IoT Device Service.
		 * @param {string} deviceName The name of the Windows IoT Device Service.
		 * @param {DeviceServiceProperties} requestBody The Windows IoT Device Service metadata and security metadata.
		 * @return {DeviceService} OK. The request has succeeded.
		 */
		Services_Update(api_version: string, subscriptionId: string, resourceGroupName: string, deviceName: string, requestBody: DeviceServiceProperties): Observable<DeviceService> {
			return this.http.patch<DeviceService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsIoT/deviceServices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

