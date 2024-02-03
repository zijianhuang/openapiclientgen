import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This object is returned when an error occurs in the Location Based Service API */
	export interface Error {

		/** Error code. */
		code?: string | null;

		/** If available, a list of additional details about the error. */
		ErrorDetails?: Array<ErrorDetails>;

		/** If available, a human readable description of the error. */
		message?: string | null;

		/** If available, the component generating the error. */
		target?: string | null;
	}

	/** This object is returned when an error occurs in the Location Based Service API */
	export interface ErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** If available, a human readable description of the error. */
		message: FormControl<string | null | undefined>,

		/** If available, the component generating the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetails {

		/** Error code. */
		code?: string | null;

		/** If available, a human readable description of the error. */
		message?: string | null;

		/** If available, the component generating the error. */
		target?: string | null;
	}
	export interface ErrorDetailsFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** If available, a human readable description of the error. */
		message: FormControl<string | null | undefined>,

		/** If available, the component generating the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource which represents access to a suite of Location Based Services REST APIs. */
	export interface LocationBasedServicesAccount {

		/** The location of the resource. */
		location?: string | null;

		/** The SKU of the Location Based Services Account. */
		sku?: Sku;

		/** Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** An Azure resource which represents access to a suite of Location Based Services REST APIs. */
	export interface LocationBasedServicesAccountFormProperties {

		/** The location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLocationBasedServicesAccountFormGroup() {
		return new FormGroup<LocationBasedServicesAccountFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Parameters used to create a new Location Based Services Account. */
	export interface LocationBasedServicesAccountCreateParameters {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: string;

		/**
		 * The SKU of the Location Based Services Account.
		 * Required
		 */
		sku: Sku;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to create a new Location Based Services Account. */
	export interface LocationBasedServicesAccountCreateParametersFormProperties {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLocationBasedServicesAccountCreateParametersFormGroup() {
		return new FormGroup<LocationBasedServicesAccountCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The set of keys which can be used to access the Location Based Services REST APIs. Two keys are provided for key rotation without interruption. */
	export interface LocationBasedServicesAccountKeys {

		/** The full Azure resource identifier of the Location Based Services Account. */
		id?: string | null;

		/** The primary key for accessing the Location Based Services REST APIs. */
		primaryKey?: string | null;

		/** The secondary key for accessing the Location Based Services REST APIs. */
		secondaryKey?: string | null;
	}

	/** The set of keys which can be used to access the Location Based Services REST APIs. Two keys are provided for key rotation without interruption. */
	export interface LocationBasedServicesAccountKeysFormProperties {

		/** The full Azure resource identifier of the Location Based Services Account. */
		id: FormControl<string | null | undefined>,

		/** The primary key for accessing the Location Based Services REST APIs. */
		primaryKey: FormControl<string | null | undefined>,

		/** The secondary key for accessing the Location Based Services REST APIs. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateLocationBasedServicesAccountKeysFormGroup() {
		return new FormGroup<LocationBasedServicesAccountKeysFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used to update an existing Location Based Services Account. */
	export interface LocationBasedServicesAccountUpdateParameters {

		/** The SKU of the Location Based Services Account. */
		sku?: Sku;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to update an existing Location Based Services Account. */
	export interface LocationBasedServicesAccountUpdateParametersFormProperties {

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLocationBasedServicesAccountUpdateParametersFormGroup() {
		return new FormGroup<LocationBasedServicesAccountUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A list of Location Based Services Accounts. */
	export interface LocationBasedServicesAccounts {

		/** A Location Based Services Account. */
		value?: Array<LocationBasedServicesAccount>;
	}

	/** A list of Location Based Services Accounts. */
	export interface LocationBasedServicesAccountsFormProperties {
	}
	export function CreateLocationBasedServicesAccountsFormGroup() {
		return new FormGroup<LocationBasedServicesAccountsFormProperties>({
		});

	}


	/** The description of what resources to move between resource groups. */
	export interface LocationBasedServicesAccountsMoveRequest {

		/**
		 * A list of resource names to move from the source resource group.
		 * Required
		 */
		resourceIds: Array<string>;

		/**
		 * The name of the destination resource group.
		 * Required
		 */
		targetResourceGroup: string;
	}

	/** The description of what resources to move between resource groups. */
	export interface LocationBasedServicesAccountsMoveRequestFormProperties {

		/**
		 * The name of the destination resource group.
		 * Required
		 */
		targetResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateLocationBasedServicesAccountsMoveRequestFormGroup() {
		return new FormGroup<LocationBasedServicesAccountsMoveRequestFormProperties>({
			targetResourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Whether the operation refers to the primary or secondary key. */
	export interface LocationBasedServicesKeySpecification {

		/**
		 * Whether the operation refers to the primary or secondary key.
		 * Required
		 */
		keyType: LocationBasedServicesKeySpecificationKeyType;
	}

	/** Whether the operation refers to the primary or secondary key. */
	export interface LocationBasedServicesKeySpecificationFormProperties {

		/**
		 * Whether the operation refers to the primary or secondary key.
		 * Required
		 */
		keyType: FormControl<LocationBasedServicesKeySpecificationKeyType | null | undefined>,
	}
	export function CreateLocationBasedServicesKeySpecificationFormGroup() {
		return new FormGroup<LocationBasedServicesKeySpecificationFormProperties>({
			keyType: new FormControl<LocationBasedServicesKeySpecificationKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LocationBasedServicesKeySpecificationKeyType { primary = 'primary', secondary = 'secondary' }


	/** The set of operations available for Location Based Services. */
	export interface LocationBasedServicesOperations {

		/** An operation available for Location Based Services. */
		LocationBasedServicesOperationsValue?: Array<LocationBasedServicesOperationsValue>;
	}

	/** The set of operations available for Location Based Services. */
	export interface LocationBasedServicesOperationsFormProperties {
	}
	export function CreateLocationBasedServicesOperationsFormGroup() {
		return new FormGroup<LocationBasedServicesOperationsFormProperties>({
		});

	}

	export interface LocationBasedServicesOperationsValue {

		/** The human-readable description of the operation. */
		display?: LocationBasedServicesOperationsValueDisplay;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;
	}
	export interface LocationBasedServicesOperationsValueFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateLocationBasedServicesOperationsValueFormGroup() {
		return new FormGroup<LocationBasedServicesOperationsValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationBasedServicesOperationsValueDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft Location Based Services. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}
	export interface LocationBasedServicesOperationsValueDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft Location Based Services. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateLocationBasedServicesOperationsValueDisplayFormGroup() {
		return new FormGroup<LocationBasedServicesOperationsValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource */
	export interface Resource {

		/** The fully qualified Location Based Services Account resource identifier. */
		id?: string | null;

		/** The name of the Location Based Services Account, which is unique within a Resource Group. */
		name?: string | null;

		/** Azure resource type. */
		type?: string | null;
	}

	/** An Azure resource */
	export interface ResourceFormProperties {

		/** The fully qualified Location Based Services Account resource identifier. */
		id: FormControl<string | null | undefined>,

		/** The name of the Location Based Services Account, which is unique within a Resource Group. */
		name: FormControl<string | null | undefined>,

		/** Azure resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SKU of the Location Based Services Account. */
	export interface Sku {

		/**
		 * The name of the SKU, in standard format (such as S0).
		 * Required
		 */
		name: string;

		/** Gets the sku tier. This is based on the SKU name. */
		tier?: string | null;
	}

	/** The SKU of the Location Based Services Account. */
	export interface SkuFormProperties {

		/**
		 * The name of the SKU, in standard format (such as S0).
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Gets the sku tier. This is based on the SKU name. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List operations available for the Location Based Services Resource Provider
		 * Get providers/Microsoft.LocationBasedServices/operations
		 * @param {string} api_version Client Api Version.
		 * @return {LocationBasedServicesOperations} The request was successful.
		 */
		Accounts_ListOperations(api_version: string): Observable<LocationBasedServicesOperations> {
			return this.http.get<LocationBasedServicesOperations>(this.baseUri + 'providers/Microsoft.LocationBasedServices/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all Location Based Services Accounts in a Subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.LocationBasedServices/accounts
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {LocationBasedServicesAccounts} The request was successful.
		 */
		Accounts_ListBySubscription(api_version: string, subscriptionId: string): Observable<LocationBasedServicesAccounts> {
			return this.http.get<LocationBasedServicesAccounts>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.LocationBasedServices/accounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Moves Location Based Services Accounts from one ResourceGroup (or Subscription) to another
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains Location Based Services Account to move.
		 * @param {LocationBasedServicesAccountsMoveRequest} requestBody The details of the Location Based Services Account move.
		 * @return {void} The Accounts were successfully moved.
		 */
		Accounts_Move(api_version: string, subscriptionId: string, resourceGroupName: string, requestBody: LocationBasedServicesAccountsMoveRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/moveResources?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Location Based Services Accounts in a Resource Group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @return {LocationBasedServicesAccounts} The request was successful.
		 */
		Accounts_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<LocationBasedServicesAccounts> {
			return this.http.get<LocationBasedServicesAccounts>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Location Based Services Account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @return {LocationBasedServicesAccount} The request was successful.
		 */
		Accounts_Get(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<LocationBasedServicesAccount> {
			return this.http.get<LocationBasedServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Location Based Services Account. A Location Based Services Account holds the keys which allow access to the Location Based Services REST APIs.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @param {LocationBasedServicesAccountCreateParameters} requestBody The new or updated parameters for the Location Based Services Account.
		 * @return {LocationBasedServicesAccount} The Account was successfully updated.
		 */
		Accounts_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: LocationBasedServicesAccountCreateParameters): Observable<LocationBasedServicesAccount> {
			return this.http.put<LocationBasedServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Location Based Services Account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @return {void} The Account was deleted successfully.
		 */
		Accounts_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Location Based Services Account. Only a subset of the parameters may be updated after creation, such as Sku and Tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @param {LocationBasedServicesAccountUpdateParameters} requestBody The updated parameters for the Location Based Services Account.
		 * @return {LocationBasedServicesAccount} The Account was successfully updated.
		 */
		Accounts_Update(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: LocationBasedServicesAccountUpdateParameters): Observable<LocationBasedServicesAccount> {
			return this.http.patch<LocationBasedServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the keys to use with the Location Based Services APIs. A key is used to authenticate and authorize access to the Location Based Services REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}/listKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @return {LocationBasedServicesAccountKeys} The request was successful.
		 */
		Accounts_ListKeys(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<LocationBasedServicesAccountKeys> {
			return this.http.post<LocationBasedServicesAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate either the primary or secondary key for use with the Location Based Services APIs. The old key will stop working immediately.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LocationBasedServices/accounts/{accountName}/regenerateKey
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure Resource Group.
		 * @param {string} accountName The name of the Location Based Services Account.
		 * @param {LocationBasedServicesKeySpecification} requestBody Which key to regenerate:  primary or secondary.
		 * @return {LocationBasedServicesAccountKeys} The request was successful.
		 */
		Accounts_RegenerateKeys(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: LocationBasedServicesKeySpecification): Observable<LocationBasedServicesAccountKeys> {
			return this.http.post<LocationBasedServicesAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.LocationBasedServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

