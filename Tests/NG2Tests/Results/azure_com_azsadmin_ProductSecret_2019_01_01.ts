import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Properties for a product secret. */
	export interface ProductSecret {

		/** Properties of product secret. */
		properties?: ProductSecretProperties;
	}

	/** Properties for a product secret. */
	export interface ProductSecretFormProperties {
	}
	export function CreateProductSecretFormGroup() {
		return new FormGroup<ProductSecretFormProperties>({
		});

	}


	/** Properties of product secret. */
	export interface ProductSecretProperties {

		/** The secret description. */
		description?: string | null;

		/** The expiration period of the secret (in ISO8601 format). */
		expiresAfter?: string | null;

		/** Provisioning state of the resource. */
		provisioningState?: string | null;

		/** The secret type-specific descriptor. */
		secretDescriptor?: SecretDescriptor;

		/** Specifies the secret kind. */
		secretKind?: ProductSecretPropertiesSecretKind | null;

		/** Represents the secret state. */
		secretState?: SecretState;
	}

	/** Properties of product secret. */
	export interface ProductSecretPropertiesFormProperties {

		/** The secret description. */
		description: FormControl<string | null | undefined>,

		/** The expiration period of the secret (in ISO8601 format). */
		expiresAfter: FormControl<string | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** Specifies the secret kind. */
		secretKind: FormControl<ProductSecretPropertiesSecretKind | null | undefined>,
	}
	export function CreateProductSecretPropertiesFormGroup() {
		return new FormGroup<ProductSecretPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expiresAfter: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			secretKind: new FormControl<ProductSecretPropertiesSecretKind | null | undefined>(undefined),
		});

	}


	/** The secret type-specific descriptor. */
	export interface SecretDescriptor {

		/** The allowed characters in the password */
		allowedCharacters?: string | null;

		/** Alternative DNS Names. */
		alternativeDnsNames?: Array<string>;

		/** The list of alternative IP addresses. */
		alternativeIpAddresses?: Array<string>;

		/** The key length. */
		keyLength?: number | null;

		/** The minimum password length is 8 characters, and the maximum password length is 128 characters. */
		passwordLength?: number | null;

		/** Password validation regular expression. */
		passwordValidationRegex?: string | null;

		/** The storage account key secret rotation status. */
		rotationStatus?: SecretDescriptorRotationStatus | null;

		/** A value indicating whether the secondary or primary storage account key is active as a secret. */
		secondaryKeyIsActive?: boolean | null;

		/** Certificate's subject */
		subject?: string | null;
	}

	/** The secret type-specific descriptor. */
	export interface SecretDescriptorFormProperties {

		/** The allowed characters in the password */
		allowedCharacters: FormControl<string | null | undefined>,

		/** The key length. */
		keyLength: FormControl<number | null | undefined>,

		/** The minimum password length is 8 characters, and the maximum password length is 128 characters. */
		passwordLength: FormControl<number | null | undefined>,

		/** Password validation regular expression. */
		passwordValidationRegex: FormControl<string | null | undefined>,

		/** The storage account key secret rotation status. */
		rotationStatus: FormControl<SecretDescriptorRotationStatus | null | undefined>,

		/** A value indicating whether the secondary or primary storage account key is active as a secret. */
		secondaryKeyIsActive: FormControl<boolean | null | undefined>,

		/** Certificate's subject */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateSecretDescriptorFormGroup() {
		return new FormGroup<SecretDescriptorFormProperties>({
			allowedCharacters: new FormControl<string | null | undefined>(undefined),
			keyLength: new FormControl<number | null | undefined>(undefined),
			passwordLength: new FormControl<number | null | undefined>(undefined),
			passwordValidationRegex: new FormControl<string | null | undefined>(undefined),
			rotationStatus: new FormControl<SecretDescriptorRotationStatus | null | undefined>(undefined),
			secondaryKeyIsActive: new FormControl<boolean | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecretDescriptorRotationStatus { None = 'None', PlantNewSak = 'PlantNewSak', RotateInactiveSak = 'RotateInactiveSak', Complete = 'Complete' }

	export enum ProductSecretPropertiesSecretKind { AdHoc = 'AdHoc', Certificate = 'Certificate', Password = 'Password', StorageAccount = 'StorageAccount', SymmetricKey = 'SymmetricKey' }


	/** Represents the secret state. */
	export interface SecretState {

		/** The secret expiration date. */
		expirationDate?: Date | null;

		/** Specifies the secret rotation status. */
		rotationStatus?: SecretStateRotationStatus | null;

		/** Specifies the secret status. */
		status?: SecretStateStatus | null;
	}

	/** Represents the secret state. */
	export interface SecretStateFormProperties {

		/** The secret expiration date. */
		expirationDate: FormControl<Date | null | undefined>,

		/** Specifies the secret rotation status. */
		rotationStatus: FormControl<SecretStateRotationStatus | null | undefined>,

		/** Specifies the secret status. */
		status: FormControl<SecretStateStatus | null | undefined>,
	}
	export function CreateSecretStateFormGroup() {
		return new FormGroup<SecretStateFormProperties>({
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			rotationStatus: new FormControl<SecretStateRotationStatus | null | undefined>(undefined),
			status: new FormControl<SecretStateStatus | null | undefined>(undefined),
		});

	}

	export enum SecretStateRotationStatus { None = 'None', InProgress = 'InProgress', Complete = 'Complete' }

	export enum SecretStateStatus { NotUploaded = 'NotUploaded', Uploaded = 'Uploaded', Deployed = 'Deployed' }


	/** List of product secrets. */
	export interface ProductSecretsList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of product secrets. */
		value?: Array<ProductSecret>;
	}

	/** List of product secrets. */
	export interface ProductSecretsListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProductSecretsListFormGroup() {
		return new FormGroup<ProductSecretsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters required for creating/updating a product secret. */
	export interface SecretParameters {

		/** The password as a secure string. */
		password?: string | null;

		/** The pfx certificate file location. */
		pfxFileName?: string | null;

		/** The pfx certificate file password as a secure string. */
		pfxPassword?: string | null;

		/** The secret value in a secure string format. */
		secretValue?: string | null;

		/** The symmetric key as a secure string. */
		symmetricKey?: string | null;
	}

	/** Parameters required for creating/updating a product secret. */
	export interface SecretParametersFormProperties {

		/** The password as a secure string. */
		password: FormControl<string | null | undefined>,

		/** The pfx certificate file location. */
		pfxFileName: FormControl<string | null | undefined>,

		/** The pfx certificate file password as a secure string. */
		pfxPassword: FormControl<string | null | undefined>,

		/** The secret value in a secure string format. */
		secretValue: FormControl<string | null | undefined>,

		/** The symmetric key as a secure string. */
		symmetricKey: FormControl<string | null | undefined>,
	}
	export function CreateSecretParametersFormGroup() {
		return new FormGroup<SecretParametersFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			pfxFileName: new FormControl<string | null | undefined>(undefined),
			pfxPassword: new FormControl<string | null | undefined>(undefined),
			secretValue: new FormControl<string | null | undefined>(undefined),
			symmetricKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the secret rotation status. */
	export enum SecretRotationStatus { None = 'None', InProgress = 'InProgress', Complete = 'Complete' }


	/** Specifies the secret status. */
	export enum SecretStatus { NotUploaded = 'NotUploaded', Uploaded = 'Uploaded', Deployed = 'Deployed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns an array of product secrets.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}/secrets
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} productId The product identifier.
		 * @return {ProductSecretsList} OK
		 */
		ProductSecrets_List(subscriptionId: string, api_version: string, productId: string): Observable<ProductSecretsList> {
			return this.http.get<ProductSecretsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productPackages/' + (productId == null ? '' : encodeURIComponent(productId)) + '/secrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specific product secret details.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} api_version Client API Version.
		 * @param {string} secretName The secret name.
		 * @return {ProductSecret} OK
		 */
		ProductSecrets_Get(subscriptionId: string, productId: string, api_version: string, secretName: string): Observable<ProductSecret> {
			return this.http.get<ProductSecret>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/' + (productId == null ? '' : encodeURIComponent(productId)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Imports a product secret.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName}/import
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} secretName The secret name.
		 * @param {string} api_version Client API Version.
		 * @param {SecretParameters} requestBody The parameters required for creating/updating a product secret.
		 * @return {void} Accepted
		 */
		ProductSecrets_Import(subscriptionId: string, productId: string, secretName: string, api_version: string, requestBody: SecretParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/' + (productId == null ? '' : encodeURIComponent(productId)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '/import&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates a product secret.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName}/validate
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} productId The product identifier.
		 * @param {string} secretName The secret name.
		 * @param {string} api_version Client API Version.
		 * @param {SecretParameters} requestBody The parameters required for creating/updating a product secret.
		 * @return {void} Accepted
		 */
		ProductSecrets_Validate(subscriptionId: string, productId: string, secretName: string, api_version: string, requestBody: SecretParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/' + (productId == null ? '' : encodeURIComponent(productId)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

