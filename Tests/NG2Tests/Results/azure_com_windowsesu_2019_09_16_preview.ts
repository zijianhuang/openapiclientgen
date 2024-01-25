import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** MAK key details. */
	export interface MultipleActivationKey {

		/** MAK key specific properties. */
		properties?: MultipleActivationKeyProperties;
	}

	/** MAK key details. */
	export interface MultipleActivationKeyFormProperties {
	}
	export function CreateMultipleActivationKeyFormGroup() {
		return new FormGroup<MultipleActivationKeyFormProperties>({
		});

	}

	export interface MultipleActivationKeyProperties {

		/** Agreement number under which the key is requested. */
		agreementNumber?: string | null;

		/** End of support of security updates activated by the MAK key. */
		expirationDate?: Date | null;

		/**
		 * Number of activations/servers using the MAK key.
		 * Minimum: 1
		 * Maximum: 5000
		 */
		installedServerNumber?: number | null;

		/** <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise. */
		isEligible?: boolean | null;

		/** MAK 5x5 key. */
		multipleActivationKey?: string | null;

		/** Type of OS for which the key is requested. */
		osType?: MultipleActivationKeyPropertiesOsType | null;
		provisioningState?: MultipleActivationKeyPropertiesProvisioningState | null;

		/** Type of support */
		supportType?: MultipleActivationKeyPropertiesSupportType | null;
	}
	export interface MultipleActivationKeyPropertiesFormProperties {

		/** Agreement number under which the key is requested. */
		agreementNumber: FormControl<string | null | undefined>,

		/** End of support of security updates activated by the MAK key. */
		expirationDate: FormControl<Date | null | undefined>,

		/**
		 * Number of activations/servers using the MAK key.
		 * Minimum: 1
		 * Maximum: 5000
		 */
		installedServerNumber: FormControl<number | null | undefined>,

		/** <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise. */
		isEligible: FormControl<boolean | null | undefined>,

		/** MAK 5x5 key. */
		multipleActivationKey: FormControl<string | null | undefined>,

		/** Type of OS for which the key is requested. */
		osType: FormControl<MultipleActivationKeyPropertiesOsType | null | undefined>,
		provisioningState: FormControl<MultipleActivationKeyPropertiesProvisioningState | null | undefined>,

		/** Type of support */
		supportType: FormControl<MultipleActivationKeyPropertiesSupportType | null | undefined>,
	}
	export function CreateMultipleActivationKeyPropertiesFormGroup() {
		return new FormGroup<MultipleActivationKeyPropertiesFormProperties>({
			agreementNumber: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			installedServerNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
			isEligible: new FormControl<boolean | null | undefined>(undefined),
			multipleActivationKey: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<MultipleActivationKeyPropertiesOsType | null | undefined>(undefined),
			provisioningState: new FormControl<MultipleActivationKeyPropertiesProvisioningState | null | undefined>(undefined),
			supportType: new FormControl<MultipleActivationKeyPropertiesSupportType | null | undefined>(undefined),
		});

	}

	export enum MultipleActivationKeyPropertiesOsType { Windows7 = 0, WindowsServer2008 = 1, WindowsServer2008R2 = 2 }

	export enum MultipleActivationKeyPropertiesProvisioningState { Succeeded = 0, Failed = 1, Canceled = 2, Accepted = 3, Provisioning = 4 }

	export enum MultipleActivationKeyPropertiesSupportType { SupplementalServicing = 0, PremiumAssurance = 1 }


	/** List of MAK keys. */
	export interface MultipleActivationKeyList {

		/** Link to the next page of resources. */
		nextLink?: string | null;

		/** List of MAK keys. */
		value?: Array<MultipleActivationKey>;
	}

	/** List of MAK keys. */
	export interface MultipleActivationKeyListFormProperties {

		/** Link to the next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMultipleActivationKeyListFormGroup() {
		return new FormGroup<MultipleActivationKeyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MAK key details. */
	export interface MultipleActivationKeyUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** MAK key details. */
	export interface MultipleActivationKeyUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMultipleActivationKeyUpdateFormGroup() {
		return new FormGroup<MultipleActivationKeyUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** REST API operation details. */
	export interface Operation {

		/** Meta data about operation used for display in portal. */
		display?: OperationDisplay;

		/** Name of the operation. */
		name?: string | null;
	}

	/** REST API operation details. */
	export interface OperationFormProperties {

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meta data about operation used for display in portal. */
	export interface OperationDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}

	/** Meta data about operation used for display in portal. */
	export interface OperationDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
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


	/** List of available REST API operations. */
	export interface OperationList {

		/** Link to the next page of resources. */
		nextLink?: string | null;

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** List of available REST API operations. */
	export interface OperationListFormProperties {

		/** Link to the next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all available Windows.ESU provider operations.
		 * Get providers/Microsoft.WindowsESU/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.WindowsESU/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all Multiple Activation Keys (MAK) created for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.WindowsESU/multipleActivationKeys
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {MultipleActivationKeyList} OK
		 */
		MultipleActivationKeys_List(subscriptionId: string, api_version: string): Observable<MultipleActivationKeyList> {
			return this.http.get<MultipleActivationKeyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all Multiple Activation Keys (MAK) in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {MultipleActivationKeyList} OK
		 */
		MultipleActivationKeys_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<MultipleActivationKeyList> {
			return this.http.get<MultipleActivationKeyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a MAK key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} multipleActivationKeyName The name of the MAK key.
		 * @return {MultipleActivationKey} OK
		 */
		MultipleActivationKeys_Get(subscriptionId: string, resourceGroupName: string, api_version: string, multipleActivationKeyName: string): Observable<MultipleActivationKey> {
			return this.http.get<MultipleActivationKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys/' + (multipleActivationKeyName == null ? '' : encodeURIComponent(multipleActivationKeyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a MAK key.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} multipleActivationKeyName The name of the MAK key.
		 * @param {MultipleActivationKey} requestBody Details of the MAK key.
		 * @return {MultipleActivationKey} OK
		 */
		MultipleActivationKeys_Create(subscriptionId: string, resourceGroupName: string, api_version: string, multipleActivationKeyName: string, requestBody: MultipleActivationKey): Observable<MultipleActivationKey> {
			return this.http.put<MultipleActivationKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys/' + (multipleActivationKeyName == null ? '' : encodeURIComponent(multipleActivationKeyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a MAK key.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} multipleActivationKeyName The name of the MAK key.
		 * @return {void} OK
		 */
		MultipleActivationKeys_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, multipleActivationKeyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys/' + (multipleActivationKeyName == null ? '' : encodeURIComponent(multipleActivationKeyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a MAK key.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsESU/multipleActivationKeys/{multipleActivationKeyName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} multipleActivationKeyName The name of the MAK key.
		 * @param {MultipleActivationKeyUpdate} requestBody Details of the MAK key.
		 * @return {MultipleActivationKey} OK
		 */
		MultipleActivationKeys_Update(subscriptionId: string, resourceGroupName: string, api_version: string, multipleActivationKeyName: string, requestBody: MultipleActivationKeyUpdate): Observable<MultipleActivationKey> {
			return this.http.patch<MultipleActivationKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.WindowsESU/multipleActivationKeys/' + (multipleActivationKeyName == null ? '' : encodeURIComponent(multipleActivationKeyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

