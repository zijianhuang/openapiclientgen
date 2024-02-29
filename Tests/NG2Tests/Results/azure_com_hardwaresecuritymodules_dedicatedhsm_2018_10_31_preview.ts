import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The API entity reference. */
	export interface ApiEntityReference {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id?: string | null;
	}

	/** The API entity reference. */
	export interface ApiEntityReferenceFormProperties {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id: FormControl<string | null | undefined>,
	}
	export function CreateApiEntityReferenceFormGroup() {
		return new FormGroup<ApiEntityReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource information with extended details. */
	export interface DedicatedHsm extends Resource {

		/**
		 * Properties of the dedicated hsm
		 * Required
		 */
		properties: DedicatedHsmProperties;
	}

	/** Resource information with extended details. */
	export interface DedicatedHsmFormProperties extends ResourceFormProperties {
	}
	export function CreateDedicatedHsmFormGroup() {
		return new FormGroup<DedicatedHsmFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error exception. */
	export interface DedicatedHsmError {

		/** The key vault server error. */
		error?: Error;
	}

	/** The error exception. */
	export interface DedicatedHsmErrorFormProperties {
	}
	export function CreateDedicatedHsmErrorFormGroup() {
		return new FormGroup<DedicatedHsmErrorFormProperties>({
		});

	}


	/** List of dedicated HSMs */
	export interface DedicatedHsmListResult {

		/** The URL to get the next set of dedicated hsms. */
		nextLink?: string | null;

		/** The list of dedicated HSMs. */
		value?: Array<DedicatedHsm>;
	}

	/** List of dedicated HSMs */
	export interface DedicatedHsmListResultFormProperties {

		/** The URL to get the next set of dedicated hsms. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHsmListResultFormGroup() {
		return new FormGroup<DedicatedHsmListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Patchable properties of the dedicated HSM */
	export interface DedicatedHsmPatchParameters {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Patchable properties of the dedicated HSM */
	export interface DedicatedHsmPatchParametersFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDedicatedHsmPatchParametersFormGroup() {
		return new FormGroup<DedicatedHsmPatchParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of the dedicated hsm */
	export interface DedicatedHsmProperties {
		networkProfile?: NetworkProfile;

		/** Provisioning state. */
		provisioningState?: DedicatedHsmPropertiesProvisioningState | null;

		/** This field will be used when RP does not support Availability zones. */
		stampId?: string | null;

		/** Resource Status Message. */
		statusMessage?: string | null;
	}

	/** Properties of the dedicated hsm */
	export interface DedicatedHsmPropertiesFormProperties {

		/** Provisioning state. */
		provisioningState: FormControl<DedicatedHsmPropertiesProvisioningState | null | undefined>,

		/** This field will be used when RP does not support Availability zones. */
		stampId: FormControl<string | null | undefined>,

		/** Resource Status Message. */
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedHsmPropertiesFormGroup() {
		return new FormGroup<DedicatedHsmPropertiesFormProperties>({
			provisioningState: new FormControl<DedicatedHsmPropertiesProvisioningState | null | undefined>(undefined),
			stampId: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedHsmPropertiesProvisioningState { Succeeded = 'Succeeded', Provisioning = 'Provisioning', Allocating = 'Allocating', Connecting = 'Connecting', Failed = 'Failed', CheckingQuota = 'CheckingQuota', Deleting = 'Deleting' }


	/** The key vault server error. */
	export interface Error {

		/** The error code. */
		code?: string | null;

		/** The key vault server error. */
		innererror?: Error;

		/** The error message. */
		message?: string | null;
	}

	/** The key vault server error. */
	export interface ErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The network interface definition. */
	export interface NetworkInterface {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id?: string | null;

		/** Private Ip address of the interface */
		privateIpAddress?: string | null;
	}

	/** The network interface definition. */
	export interface NetworkInterfaceFormProperties {

		/** The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... */
		id: FormControl<string | null | undefined>,

		/** Private Ip address of the interface */
		privateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkProfile {

		/** Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM. */
		networkInterfaces?: Array<NetworkInterface>;

		/** The API entity reference. */
		subnet?: ApiEntityReference;
	}
	export interface NetworkProfileFormProperties {
	}
	export function CreateNetworkProfileFormGroup() {
		return new FormGroup<NetworkProfileFormProperties>({
		});

	}


	/** Dedicated HSM resource */
	export interface Resource {

		/** The Azure Resource Manager resource ID for the dedicated HSM. */
		id?: string | null;

		/**
		 * The supported Azure location where the dedicated HSM should be created.
		 * Required
		 */
		location: string;

		/** The name of the dedicated HSM. */
		name?: string | null;
		sku?: Sku;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** The resource type of the dedicated HSM. */
		type?: string | null;

		/** The Dedicated Hsm zones. */
		zones?: Array<string>;
	}

	/** Dedicated HSM resource */
	export interface ResourceFormProperties {

		/** The Azure Resource Manager resource ID for the dedicated HSM. */
		id: FormControl<string | null | undefined>,

		/**
		 * The supported Azure location where the dedicated HSM should be created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the dedicated HSM. */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type of the dedicated HSM. */
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


	/** List of dedicated HSM resources. */
	export interface ResourceListResult {

		/** The URL to get the next set of dedicated HSM resources. */
		nextLink?: string | null;

		/** The list of dedicated HSM resources. */
		value?: Array<Resource>;
	}

	/** List of dedicated HSM resources. */
	export interface ResourceListResultFormProperties {

		/** The URL to get the next set of dedicated HSM resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceListResultFormGroup() {
		return new FormGroup<ResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sku {

		/** SKU of the dedicated HSM */
		name?: SkuName | null;
	}
	export interface SkuFormProperties {

		/** SKU of the dedicated HSM */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { 'SafeNet Luna Network HSM A790' = 'SafeNet Luna Network HSM A790' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The List operation gets information about the dedicated HSMs associated with the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs
		 * @param {number} top Maximum number of results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHsmListResult} Get information about all dedicated HSMs in the specified subscription.
		 */
		DedicatedHsm_ListBySubscription(top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DedicatedHsmListResult> {
			return this.http.get<DedicatedHsmListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs?top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs
		 * @param {string} resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
		 * @param {number} top Maximum number of results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHsmListResult} Get information about all dedicated HSMs in the specified resource group.
		 */
		DedicatedHsm_ListByResourceGroup(resourceGroupName: string, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DedicatedHsmListResult> {
			return this.http.get<DedicatedHsmListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Azure dedicated HSM.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		 * @param {string} resourceGroupName The name of the Resource Group to which the dedicated hsm belongs.
		 * @param {string} name The name of the dedicated HSM.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DedicatedHsm} Retrieved dedicated HSM
		 */
		DedicatedHsm_Get(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<DedicatedHsm> {
			return this.http.get<DedicatedHsm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update a dedicated HSM in the specified subscription.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		 * @param {string} resourceGroupName The name of the Resource Group to which the resource belongs.
		 * @param {string} name Name of the dedicated Hsm
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHsm} requestBody Parameters to create or update the dedicated hsm
		 * @return {DedicatedHsm} Created dedicated HSM
		 */
		DedicatedHsm_CreateOrUpdate(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: DedicatedHsm): Observable<DedicatedHsm> {
			return this.http.put<DedicatedHsm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Azure Dedicated HSM.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		 * @param {string} resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
		 * @param {string} name The name of the dedicated HSM to delete
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK Response.
		 */
		DedicatedHsm_Delete(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a dedicated HSM in the specified subscription.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}
		 * @param {string} resourceGroupName The name of the Resource Group to which the server belongs.
		 * @param {string} name Name of the dedicated HSM
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DedicatedHsmPatchParameters} requestBody Parameters to patch the dedicated HSM
		 * @return {DedicatedHsm} Patched dedicated HSM
		 */
		DedicatedHsm_Update(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: DedicatedHsmPatchParameters): Observable<DedicatedHsm> {
			return this.http.patch<DedicatedHsm>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

