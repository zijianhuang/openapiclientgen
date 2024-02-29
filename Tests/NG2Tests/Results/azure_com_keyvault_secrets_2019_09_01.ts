import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The object attributes managed by the KeyVault service. */
	export interface Attributes {

		/** Creation time in seconds since 1970-01-01T00:00:00Z. */
		created?: string | null;

		/** Determines whether the object is enabled. */
		enabled?: boolean | null;

		/** Expiry date in seconds since 1970-01-01T00:00:00Z. */
		exp?: string | null;

		/** Not before date in seconds since 1970-01-01T00:00:00Z. */
		nbf?: string | null;

		/** Last updated time in seconds since 1970-01-01T00:00:00Z. */
		updated?: string | null;
	}

	/** The object attributes managed by the KeyVault service. */
	export interface AttributesFormProperties {

		/** Creation time in seconds since 1970-01-01T00:00:00Z. */
		created: FormControl<string | null | undefined>,

		/** Determines whether the object is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Expiry date in seconds since 1970-01-01T00:00:00Z. */
		exp: FormControl<string | null | undefined>,

		/** Not before date in seconds since 1970-01-01T00:00:00Z. */
		nbf: FormControl<string | null | undefined>,

		/** Last updated time in seconds since 1970-01-01T00:00:00Z. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			exp: new FormControl<string | null | undefined>(undefined),
			nbf: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Secret {
	}
	export interface SecretFormProperties {
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
		});

	}


	/** The secret management attributes. */
	export interface SecretAttributes {
	}

	/** The secret management attributes. */
	export interface SecretAttributesFormProperties {
	}
	export function CreateSecretAttributesFormGroup() {
		return new FormGroup<SecretAttributesFormProperties>({
		});

	}


	/** Parameters for creating or updating a secret */
	export interface SecretCreateOrUpdateParameters {

		/**
		 * Properties of the secret
		 * Required
		 */
		properties: SecretProperties;

		/** The tags that will be assigned to the secret. */
		tags?: {[id: string]: string };
	}

	/** Parameters for creating or updating a secret */
	export interface SecretCreateOrUpdateParametersFormProperties {

		/** The tags that will be assigned to the secret. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSecretCreateOrUpdateParametersFormGroup() {
		return new FormGroup<SecretCreateOrUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** List of secrets */
	export interface SecretListResult {

		/** The URL to get the next set of secrets. */
		nextLink?: string | null;

		/** The list of secrets. */
		value?: Array<Secret>;
	}

	/** List of secrets */
	export interface SecretListResultFormProperties {

		/** The URL to get the next set of secrets. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecretListResultFormGroup() {
		return new FormGroup<SecretListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for patching a secret */
	export interface SecretPatchParameters {

		/** Properties of the secret */
		properties?: SecretPatchProperties;

		/** The tags that will be assigned to the secret. */
		tags?: {[id: string]: string };
	}

	/** Parameters for patching a secret */
	export interface SecretPatchParametersFormProperties {

		/** The tags that will be assigned to the secret. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSecretPatchParametersFormGroup() {
		return new FormGroup<SecretPatchParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of the secret */
	export interface SecretPatchProperties {

		/** The secret management attributes. */
		attributes?: SecretAttributes;

		/** The content type of the secret. */
		contentType?: string | null;

		/** The value of the secret. */
		value?: string | null;
	}

	/** Properties of the secret */
	export interface SecretPatchPropertiesFormProperties {

		/** The content type of the secret. */
		contentType: FormControl<string | null | undefined>,

		/** The value of the secret. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretPatchPropertiesFormGroup() {
		return new FormGroup<SecretPatchPropertiesFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the secret */
	export interface SecretProperties {

		/** The secret management attributes. */
		attributes?: SecretAttributes;

		/** The content type of the secret. */
		contentType?: string | null;

		/** The URI to retrieve the current version of the secret. */
		secretUri?: string | null;

		/** The URI to retrieve the specific version of the secret. */
		secretUriWithVersion?: string | null;

		/** The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. */
		value?: string | null;
	}

	/** Properties of the secret */
	export interface SecretPropertiesFormProperties {

		/** The content type of the secret. */
		contentType: FormControl<string | null | undefined>,

		/** The URI to retrieve the current version of the secret. */
		secretUri: FormControl<string | null | undefined>,

		/** The URI to retrieve the specific version of the secret. */
		secretUriWithVersion: FormControl<string | null | undefined>,

		/** The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretPropertiesFormGroup() {
		return new FormGroup<SecretPropertiesFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			secretUri: new FormControl<string | null | undefined>(undefined),
			secretUriWithVersion: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets
		 * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
		 * @param {string} vaultName The name of the vault.
		 * @param {number} top Maximum number of results to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SecretListResult} Get information about secrets in the specified vault.
		 */
		Secrets_List(resourceGroupName: string, vaultName: string, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<SecretListResult> {
			return this.http.get<SecretListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.KeyVault/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/secrets&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
		 * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} secretName The name of the secret.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Secret} Retrieved secret
		 */
		Secrets_Get(resourceGroupName: string, vaultName: string, secretName: string, api_version: string, subscriptionId: string): Observable<Secret> {
			return this.http.get<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.KeyVault/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
		 * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
		 * @param {string} vaultName Name of the vault
		 * @param {string} secretName Name of the secret
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SecretCreateOrUpdateParameters} requestBody Parameters to create or update the secret
		 * @return {Secret} Created or updated secret
		 */
		Secrets_CreateOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, api_version: string, subscriptionId: string, requestBody: SecretCreateOrUpdateParameters): Observable<Secret> {
			return this.http.put<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.KeyVault/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}
		 * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
		 * @param {string} vaultName Name of the vault
		 * @param {string} secretName Name of the secret
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SecretPatchParameters} requestBody Parameters to patch the secret
		 * @return {Secret} Patched secret
		 */
		Secrets_Update(resourceGroupName: string, vaultName: string, secretName: string, api_version: string, subscriptionId: string, requestBody: SecretPatchParameters): Observable<Secret> {
			return this.http.patch<Secret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.KeyVault/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

