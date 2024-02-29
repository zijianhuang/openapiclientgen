import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** An Azure resource which represents access to a suite of Maps REST APIs. */
	export interface MapsAccount {

		/** Additional Map account properties */
		properties?: MapsAccountProperties;

		/** The SKU of the Maps Account. */
		sku?: Sku;
	}

	/** An Azure resource which represents access to a suite of Maps REST APIs. */
	export interface MapsAccountFormProperties {
	}
	export function CreateMapsAccountFormGroup() {
		return new FormGroup<MapsAccountFormProperties>({
		});

	}


	/** Parameters used to create a new Maps Account. */
	export interface MapsAccountCreateParameters {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: string;

		/**
		 * The SKU of the Maps Account.
		 * Required
		 */
		sku: Sku;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to create a new Maps Account. */
	export interface MapsAccountCreateParametersFormProperties {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMapsAccountCreateParametersFormGroup() {
		return new FormGroup<MapsAccountCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption. */
	export interface MapsAccountKeys {

		/** The full Azure resource identifier of the Maps Account. */
		id?: string | null;

		/** The primary key for accessing the Maps REST APIs. */
		primaryKey?: string | null;

		/** The secondary key for accessing the Maps REST APIs. */
		secondaryKey?: string | null;
	}

	/** The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption. */
	export interface MapsAccountKeysFormProperties {

		/** The full Azure resource identifier of the Maps Account. */
		id: FormControl<string | null | undefined>,

		/** The primary key for accessing the Maps REST APIs. */
		primaryKey: FormControl<string | null | undefined>,

		/** The secondary key for accessing the Maps REST APIs. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateMapsAccountKeysFormGroup() {
		return new FormGroup<MapsAccountKeysFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional Map account properties */
	export interface MapsAccountProperties {

		/** A unique identifier for the maps account */
		'x-ms-client-id'?: string | null;
	}

	/** Additional Map account properties */
	export interface MapsAccountPropertiesFormProperties {

		/** A unique identifier for the maps account */
		'x-ms-client-id': FormControl<string | null | undefined>,
	}
	export function CreateMapsAccountPropertiesFormGroup() {
		return new FormGroup<MapsAccountPropertiesFormProperties>({
			'x-ms-client-id': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used to update an existing Maps Account. */
	export interface MapsAccountUpdateParameters {

		/** The SKU of the Maps Account. */
		sku?: Sku;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to update an existing Maps Account. */
	export interface MapsAccountUpdateParametersFormProperties {

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMapsAccountUpdateParametersFormGroup() {
		return new FormGroup<MapsAccountUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A list of Maps Accounts. */
	export interface MapsAccounts {

		/** a Maps Account. */
		value?: Array<MapsAccount>;
	}

	/** A list of Maps Accounts. */
	export interface MapsAccountsFormProperties {
	}
	export function CreateMapsAccountsFormGroup() {
		return new FormGroup<MapsAccountsFormProperties>({
		});

	}


	/** Whether the operation refers to the primary or secondary key. */
	export interface MapsKeySpecification {

		/**
		 * Whether the operation refers to the primary or secondary key.
		 * Required
		 */
		keyType: MapsKeySpecificationKeyType;
	}

	/** Whether the operation refers to the primary or secondary key. */
	export interface MapsKeySpecificationFormProperties {

		/**
		 * Whether the operation refers to the primary or secondary key.
		 * Required
		 */
		keyType: FormControl<MapsKeySpecificationKeyType | null | undefined>,
	}
	export function CreateMapsKeySpecificationFormGroup() {
		return new FormGroup<MapsKeySpecificationFormProperties>({
			keyType: new FormControl<MapsKeySpecificationKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MapsKeySpecificationKeyType { primary = 'primary', secondary = 'secondary' }


	/** The set of operations available for Maps. */
	export interface MapsOperations {

		/** An operation available for Maps. */
		MapsOperationsValue?: Array<MapsOperationsValue>;
	}

	/** The set of operations available for Maps. */
	export interface MapsOperationsFormProperties {
	}
	export function CreateMapsOperationsFormGroup() {
		return new FormGroup<MapsOperationsFormProperties>({
		});

	}

	export interface MapsOperationsValue {

		/** The human-readable description of the operation. */
		display?: MapsOperationsValueDisplay;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;
	}
	export interface MapsOperationsValueFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateMapsOperationsValueFormGroup() {
		return new FormGroup<MapsOperationsValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapsOperationsValueDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft Maps. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}
	export interface MapsOperationsValueDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft Maps. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateMapsOperationsValueDisplayFormGroup() {
		return new FormGroup<MapsOperationsValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource which represents which will provision the ability to create private location data. */
	export interface PrivateAtlas {

		/** Private Atlas resource properties */
		properties?: PrivateAtlasProperties;
	}

	/** An Azure resource which represents which will provision the ability to create private location data. */
	export interface PrivateAtlasFormProperties {
	}
	export function CreatePrivateAtlasFormGroup() {
		return new FormGroup<PrivateAtlasFormProperties>({
		});

	}


	/** Parameters used to create a new Private Atlas resource. */
	export interface PrivateAtlasCreateParameters {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: string;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to create a new Private Atlas resource. */
	export interface PrivateAtlasCreateParametersFormProperties {

		/**
		 * The location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePrivateAtlasCreateParametersFormGroup() {
		return new FormGroup<PrivateAtlasCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A list of Private Atlas resources. */
	export interface PrivateAtlasList {

		/** a Private Atlas. */
		value?: Array<PrivateAtlas>;
	}

	/** A list of Private Atlas resources. */
	export interface PrivateAtlasListFormProperties {
	}
	export function CreatePrivateAtlasListFormGroup() {
		return new FormGroup<PrivateAtlasListFormProperties>({
		});

	}


	/** Private Atlas resource properties */
	export interface PrivateAtlasProperties {

		/** The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled */
		provisioningState?: string | null;
	}

	/** Private Atlas resource properties */
	export interface PrivateAtlasPropertiesFormProperties {

		/** The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAtlasPropertiesFormGroup() {
		return new FormGroup<PrivateAtlasPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used to update an existing Private Atlas resource. */
	export interface PrivateAtlasUpdateParameters {

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** Parameters used to update an existing Private Atlas resource. */
	export interface PrivateAtlasUpdateParametersFormProperties {

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePrivateAtlasUpdateParametersFormGroup() {
		return new FormGroup<PrivateAtlasUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The SKU of the Maps Account. */
	export interface Sku {

		/**
		 * The name of the SKU, in standard format (such as S0).
		 * Required
		 */
		name: string;

		/** Gets the sku tier. This is based on the SKU name. */
		tier?: string | null;
	}

	/** The SKU of the Maps Account. */
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
		 * List operations available for the Maps Resource Provider
		 * Get providers/Microsoft.Maps/operations
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @return {MapsOperations} The request was successful.
		 */
		Maps_ListOperations(api_version: string): Observable<MapsOperations> {
			return this.http.get<MapsOperations>(this.baseUri + 'providers/Microsoft.Maps/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all Maps Accounts in a Subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Maps/accounts
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @return {MapsAccounts} The request was successful.
		 */
		Accounts_ListBySubscription(api_version: string, subscriptionId: string): Observable<MapsAccounts> {
			return this.http.get<MapsAccounts>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Maps/accounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all Maps Accounts in a Resource Group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @return {MapsAccounts} The request was successful.
		 */
		Accounts_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<MapsAccounts> {
			return this.http.get<MapsAccounts>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Maps Account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @return {MapsAccount} The request was successful.
		 */
		Accounts_Get(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<MapsAccount> {
			return this.http.get<MapsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {MapsAccountCreateParameters} requestBody The new or updated parameters for the Maps Account.
		 * @return {MapsAccount} The Account was successfully updated.
		 */
		Accounts_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: MapsAccountCreateParameters): Observable<MapsAccount> {
			return this.http.put<MapsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Maps Account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @return {void} The Account was deleted successfully.
		 */
		Accounts_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku and Tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {MapsAccountUpdateParameters} requestBody The updated parameters for the Maps Account.
		 * @return {MapsAccount} The Account was successfully updated.
		 */
		Accounts_Update(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: MapsAccountUpdateParameters): Observable<MapsAccount> {
			return this.http.patch<MapsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listKeys
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @return {MapsAccountKeys} The request was successful.
		 */
		Accounts_ListKeys(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<MapsAccountKeys> {
			return this.http.post<MapsAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get all Private Atlas instances for an Azure Map Account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @return {PrivateAtlasList} The request was successful.
		 */
		PrivateAtlases_ListByAccount(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string): Observable<PrivateAtlasList> {
			return this.http.get<PrivateAtlasList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateAtlases?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Private Atlas resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {string} privateAtlasName The name of the Private Atlas instance.
		 * @return {PrivateAtlas} The request was successful.
		 */
		PrivateAtlases_Get(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, privateAtlasName: string): Observable<PrivateAtlas> {
			return this.http.get<PrivateAtlas>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateAtlases/' + (privateAtlasName == null ? '' : encodeURIComponent(privateAtlasName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Private Atlas resource. Private Atlas resource will enable the usage of Azure resources to build a custom set of mapping data. It requires an account to exist before it can be created.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {string} privateAtlasName The name of the Private Atlas instance.
		 * @param {PrivateAtlasCreateParameters} requestBody The new or updated parameters for the Private Atlas resource.
		 * @return {PrivateAtlas} The Private Atlas was successfully updated.
		 */
		PrivateAtlases_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, privateAtlasName: string, requestBody: PrivateAtlasCreateParameters): Observable<PrivateAtlas> {
			return this.http.put<PrivateAtlas>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateAtlases/' + (privateAtlasName == null ? '' : encodeURIComponent(privateAtlasName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Private Atlas resource.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {string} privateAtlasName The name of the Private Atlas instance.
		 * @return {void} The Private Atlas was deleted successfully.
		 */
		PrivateAtlases_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, privateAtlasName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateAtlases/' + (privateAtlasName == null ? '' : encodeURIComponent(privateAtlasName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Private Atlas resource. Only a subset of the parameters may be updated after creation, such as Tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/privateAtlases/{privateAtlasName}
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {string} privateAtlasName The name of the Private Atlas instance.
		 * @param {PrivateAtlasUpdateParameters} requestBody The updated parameters for the Private Atlas.
		 * @return {PrivateAtlas} The Private Atlas was successfully updated.
		 */
		PrivateAtlases_Update(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, privateAtlasName: string, requestBody: PrivateAtlasUpdateParameters): Observable<PrivateAtlas> {
			return this.http.patch<PrivateAtlas>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateAtlases/' + (privateAtlasName == null ? '' : encodeURIComponent(privateAtlasName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/regenerateKey
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the Maps Account.
		 * @param {MapsKeySpecification} requestBody Which key to regenerate:  primary or secondary.
		 * @return {MapsAccountKeys} The request was successful.
		 */
		Accounts_RegenerateKeys(api_version: string, subscriptionId: string, resourceGroupName: string, accountName: string, requestBody: MapsKeySpecification): Observable<MapsAccountKeys> {
			return this.http.post<MapsAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Maps/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

