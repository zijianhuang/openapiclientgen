import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Key Vault container for a certificate that is purchased through Azure. */
	export interface AppServiceCertificate {

		/** Key Vault resource Id. */
		keyVaultId?: string | null;

		/** Key Vault secret name. */
		keyVaultSecretName?: string | null;

		/** Status of the Key Vault secret. */
		provisioningState?: AppServiceCertificateProvisioningState | null;
	}

	/** Key Vault container for a certificate that is purchased through Azure. */
	export interface AppServiceCertificateFormProperties {

		/** Key Vault resource Id. */
		keyVaultId: FormControl<string | null | undefined>,

		/** Key Vault secret name. */
		keyVaultSecretName: FormControl<string | null | undefined>,

		/** Status of the Key Vault secret. */
		provisioningState: FormControl<AppServiceCertificateProvisioningState | null | undefined>,
	}
	export function CreateAppServiceCertificateFormGroup() {
		return new FormGroup<AppServiceCertificateFormProperties>({
			keyVaultId: new FormControl<string | null | undefined>(undefined),
			keyVaultSecretName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AppServiceCertificateProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AppServiceCertificateProvisioningState { Initialized = 'Initialized', WaitingOnCertificateOrder = 'WaitingOnCertificateOrder', Succeeded = 'Succeeded', CertificateOrderFailed = 'CertificateOrderFailed', OperationNotPermittedOnKeyVault = 'OperationNotPermittedOnKeyVault', AzureServiceUnauthorizedToAccessKeyVault = 'AzureServiceUnauthorizedToAccessKeyVault', KeyVaultDoesNotExist = 'KeyVaultDoesNotExist', KeyVaultSecretDoesNotExist = 'KeyVaultSecretDoesNotExist', UnknownError = 'UnknownError', ExternalPrivateKey = 'ExternalPrivateKey', Unknown = 'Unknown' }


	/** Collection of certificate order certificates. */
	export interface AppServiceCertificateCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<AppServiceCertificateResource>;
	}

	/** Collection of certificate order certificates. */
	export interface AppServiceCertificateCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceCertificateCollectionFormGroup() {
		return new FormGroup<AppServiceCertificateCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
	export interface AppServiceCertificateResource {

		/** Key Vault container for a certificate that is purchased through Azure. */
		properties?: AppServiceCertificate;
	}

	/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
	export interface AppServiceCertificateResourceFormProperties {
	}
	export function CreateAppServiceCertificateResourceFormGroup() {
		return new FormGroup<AppServiceCertificateResourceFormProperties>({
		});

	}


	/** SSL certificate purchase order. */
	export interface AppServiceCertificateOrder {

		/** AppServiceCertificateOrder resource specific properties */
		properties?: any;
	}

	/** SSL certificate purchase order. */
	export interface AppServiceCertificateOrderFormProperties {

		/** AppServiceCertificateOrder resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceCertificateOrderFormGroup() {
		return new FormGroup<AppServiceCertificateOrderFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of certificate orders. */
	export interface AppServiceCertificateOrderCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<AppServiceCertificateOrder>;
	}

	/** Collection of certificate orders. */
	export interface AppServiceCertificateOrderCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceCertificateOrderCollectionFormGroup() {
		return new FormGroup<AppServiceCertificateOrderCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM resource for a certificate order that is purchased through Azure. */
	export interface AppServiceCertificateOrderPatchResource {

		/** AppServiceCertificateOrderPatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a certificate order that is purchased through Azure. */
	export interface AppServiceCertificateOrderPatchResourceFormProperties {

		/** AppServiceCertificateOrderPatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceCertificateOrderPatchResourceFormGroup() {
		return new FormGroup<AppServiceCertificateOrderPatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
	export interface AppServiceCertificatePatchResource {

		/** Key Vault container for a certificate that is purchased through Azure. */
		properties?: AppServiceCertificate;
	}

	/** Key Vault container ARM resource for a certificate that is purchased through Azure. */
	export interface AppServiceCertificatePatchResourceFormProperties {
	}
	export function CreateAppServiceCertificatePatchResourceFormGroup() {
		return new FormGroup<AppServiceCertificatePatchResourceFormProperties>({
		});

	}


	/** SSL certificate details. */
	export interface CertificateDetails {

		/** Certificate Issuer. */
		issuer?: string | null;

		/** Date Certificate is valid to. */
		notAfter?: Date | null;

		/** Date Certificate is valid from. */
		notBefore?: Date | null;

		/** Raw certificate data. */
		rawData?: string | null;

		/** Certificate Serial Number. */
		serialNumber?: string | null;

		/** Certificate Signature algorithm. */
		signatureAlgorithm?: string | null;

		/** Certificate Subject. */
		subject?: string | null;

		/** Certificate Thumbprint. */
		thumbprint?: string | null;

		/** Certificate Version. */
		version?: number | null;
	}

	/** SSL certificate details. */
	export interface CertificateDetailsFormProperties {

		/** Certificate Issuer. */
		issuer: FormControl<string | null | undefined>,

		/** Date Certificate is valid to. */
		notAfter: FormControl<Date | null | undefined>,

		/** Date Certificate is valid from. */
		notBefore: FormControl<Date | null | undefined>,

		/** Raw certificate data. */
		rawData: FormControl<string | null | undefined>,

		/** Certificate Serial Number. */
		serialNumber: FormControl<string | null | undefined>,

		/** Certificate Signature algorithm. */
		signatureAlgorithm: FormControl<string | null | undefined>,

		/** Certificate Subject. */
		subject: FormControl<string | null | undefined>,

		/** Certificate Thumbprint. */
		thumbprint: FormControl<string | null | undefined>,

		/** Certificate Version. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCertificateDetailsFormGroup() {
		return new FormGroup<CertificateDetailsFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			notAfter: new FormControl<Date | null | undefined>(undefined),
			notBefore: new FormControl<Date | null | undefined>(undefined),
			rawData: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** SSL certificate email. */
	export interface CertificateEmail {

		/** CertificateEmail resource specific properties */
		properties?: any;
	}

	/** SSL certificate email. */
	export interface CertificateEmailFormProperties {

		/** CertificateEmail resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCertificateEmailFormGroup() {
		return new FormGroup<CertificateEmailFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Certificate order action. */
	export interface CertificateOrderAction {

		/** CertificateOrderAction resource specific properties */
		properties?: any;
	}

	/** Certificate order action. */
	export interface CertificateOrderActionFormProperties {

		/** CertificateOrderAction resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCertificateOrderActionFormGroup() {
		return new FormGroup<CertificateOrderActionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Class representing certificate reissue request. */
	export interface ReissueCertificateOrderRequest {

		/** ReissueCertificateOrderRequest resource specific properties */
		properties?: any;
	}

	/** Class representing certificate reissue request. */
	export interface ReissueCertificateOrderRequestFormProperties {

		/** ReissueCertificateOrderRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateReissueCertificateOrderRequestFormGroup() {
		return new FormGroup<ReissueCertificateOrderRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Class representing certificate renew request. */
	export interface RenewCertificateOrderRequest {

		/** RenewCertificateOrderRequest resource specific properties */
		properties?: any;
	}

	/** Class representing certificate renew request. */
	export interface RenewCertificateOrderRequestFormProperties {

		/** RenewCertificateOrderRequest resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateRenewCertificateOrderRequestFormGroup() {
		return new FormGroup<RenewCertificateOrderRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Site seal */
	export interface SiteSeal {

		/**
		 * HTML snippet
		 * Required
		 */
		html: string;
	}

	/** Site seal */
	export interface SiteSealFormProperties {

		/**
		 * HTML snippet
		 * Required
		 */
		html: FormControl<string | null | undefined>,
	}
	export function CreateSiteSealFormGroup() {
		return new FormGroup<SiteSealFormProperties>({
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Site seal request. */
	export interface SiteSealRequest {

		/** If <code>true</code> use the light color theme for site seal; otherwise, use the default color theme. */
		lightTheme?: boolean | null;

		/** Locale of site seal. */
		locale?: string | null;
	}

	/** Site seal request. */
	export interface SiteSealRequestFormProperties {

		/** If <code>true</code> use the light color theme for site seal; otherwise, use the default color theme. */
		lightTheme: FormControl<boolean | null | undefined>,

		/** Locale of site seal. */
		locale: FormControl<string | null | undefined>,
	}
	export function CreateSiteSealRequestFormGroup() {
		return new FormGroup<SiteSealRequestFormProperties>({
			lightTheme: new FormControl<boolean | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all certificate orders in a subscription.
		 * Description for List all certificate orders in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceCertificateOrderCollection} OK
		 */
		AppServiceCertificateOrders_List(subscriptionId: string, api_version: string): Observable<AppServiceCertificateOrderCollection> {
			return this.http.get<AppServiceCertificateOrderCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CertificateRegistration/certificateOrders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Validate information for a certificate order.
		 * Description for Validate information for a certificate order.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificateOrder} requestBody Information for a certificate order.
		 * @return {void} 
		 */
		AppServiceCertificateOrders_ValidatePurchaseInformation(subscriptionId: string, api_version: string, requestBody: AppServiceCertificateOrder): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get certificate orders in a resource group.
		 * Description for Get certificate orders in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceCertificateOrderCollection} OK
		 */
		AppServiceCertificateOrders_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AppServiceCertificateOrderCollection> {
			return this.http.get<AppServiceCertificateOrderCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a certificate order.
		 * Description for Get a certificate order.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order..
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceCertificateOrder} OK
		 */
		AppServiceCertificateOrders_Get(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string): Observable<AppServiceCertificateOrder> {
			return this.http.get<AppServiceCertificateOrder>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a certificate purchase order.
		 * Description for Create or update a certificate purchase order.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificateOrder} requestBody Distinguished name to use for the certificate order.
		 * @return {AppServiceCertificateOrder} App Service Certificate Order is created.
		 */
		AppServiceCertificateOrders_CreateOrUpdate(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: AppServiceCertificateOrder): Observable<AppServiceCertificateOrder> {
			return this.http.put<AppServiceCertificateOrder>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an existing certificate order.
		 * Description for Delete an existing certificate order.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted certificate order.
		 */
		AppServiceCertificateOrders_Delete(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update a certificate purchase order.
		 * Description for Create or update a certificate purchase order.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificateOrderPatchResource} requestBody Distinguished name to use for the certificate order.
		 * @return {AppServiceCertificateOrder} App Service Certificate Order is created.
		 */
		AppServiceCertificateOrders_Update(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: AppServiceCertificateOrderPatchResource): Observable<AppServiceCertificateOrder> {
			return this.http.patch<AppServiceCertificateOrder>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all certificates associated with a certificate order.
		 * Description for List all certificates associated with a certificate order.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceCertificateCollection} OK
		 */
		AppServiceCertificateOrders_ListCertificates(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string): Observable<AppServiceCertificateCollection> {
			return this.http.get<AppServiceCertificateCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/certificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the certificate associated with a certificate order.
		 * Description for Get the certificate associated with a certificate order.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceCertificateResource} OK
		 */
		AppServiceCertificateOrders_GetCertificate(resourceGroupName: string, certificateOrderName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServiceCertificateResource> {
			return this.http.get<AppServiceCertificateResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a certificate and associates with key vault secret.
		 * Description for Creates or updates a certificate and associates with key vault secret.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificateResource} requestBody Key vault certificate resource Id.
		 * @return {AppServiceCertificateResource} App Service Certificate is created.
		 */
		AppServiceCertificateOrders_CreateOrUpdateCertificate(resourceGroupName: string, certificateOrderName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServiceCertificateResource): Observable<AppServiceCertificateResource> {
			return this.http.put<AppServiceCertificateResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the certificate associated with a certificate order.
		 * Description for Delete the certificate associated with a certificate order.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted certificate.
		 */
		AppServiceCertificateOrders_DeleteCertificate(resourceGroupName: string, certificateOrderName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a certificate and associates with key vault secret.
		 * Description for Creates or updates a certificate and associates with key vault secret.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificatePatchResource} requestBody Key vault certificate resource Id.
		 * @return {AppServiceCertificateResource} App Service Certificate is created.
		 */
		AppServiceCertificateOrders_UpdateCertificate(resourceGroupName: string, certificateOrderName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServiceCertificatePatchResource): Observable<AppServiceCertificateResource> {
			return this.http.patch<AppServiceCertificateResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reissue an existing certificate order.
		 * Description for Reissue an existing certificate order.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/reissue
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ReissueCertificateOrderRequest} requestBody Parameters for the reissue.
		 * @return {void} 
		 */
		AppServiceCertificateOrders_Reissue(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: ReissueCertificateOrderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/reissue&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renew an existing certificate order.
		 * Description for Renew an existing certificate order.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/renew
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {RenewCertificateOrderRequest} requestBody Renew parameters
		 * @return {void} 
		 */
		AppServiceCertificateOrders_Renew(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: RenewCertificateOrderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/renew&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend certificate email.
		 * Description for Resend certificate email.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendEmail
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServiceCertificateOrders_ResendEmail(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/resendEmail&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify domain ownership for this certificate order.
		 * Description for Verify domain ownership for this certificate order.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendRequestEmails
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceCertificateOrders_ResendRequestEmailsPostBody} requestBody Email address
		 * @return {void} 
		 */
		AppServiceCertificateOrders_ResendRequestEmails(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: AppServiceCertificateOrders_ResendRequestEmailsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/resendRequestEmails&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify domain ownership for this certificate order.
		 * Description for Verify domain ownership for this certificate order.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/retrieveSiteSeal
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {SiteSealRequest} requestBody Site seal request.
		 * @return {SiteSeal} OK
		 */
		AppServiceCertificateOrders_RetrieveSiteSeal(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string, requestBody: SiteSealRequest): Observable<SiteSeal> {
			return this.http.post<SiteSeal>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/retrieveSiteSeal&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify domain ownership for this certificate order.
		 * Description for Verify domain ownership for this certificate order.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/verifyDomainOwnership
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} certificateOrderName Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServiceCertificateOrders_VerifyDomainOwnership(resourceGroupName: string, certificateOrderName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (certificateOrderName == null ? '' : encodeURIComponent(certificateOrderName)) + '/verifyDomainOwnership&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the list of certificate actions.
		 * Description for Retrieve the list of certificate actions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<CertificateOrderAction>} OK
		 */
		AppServiceCertificateOrders_RetrieveCertificateActions(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<CertificateOrderAction>> {
			return this.http.post<Array<CertificateOrderAction>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (name == null ? '' : encodeURIComponent(name)) + '/retrieveCertificateActions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Retrieve email history.
		 * Description for Retrieve email history.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate order.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<CertificateEmail>} OK
		 */
		AppServiceCertificateOrders_RetrieveCertificateEmailHistory(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<CertificateEmail>> {
			return this.http.post<Array<CertificateEmail>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CertificateRegistration/certificateOrders/' + (name == null ? '' : encodeURIComponent(name)) + '/retrieveEmailHistory&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

	export interface AppServiceCertificateOrders_ResendRequestEmailsPostBody {

		/** Name of the object. */
		name?: string | null;
	}
	export interface AppServiceCertificateOrders_ResendRequestEmailsPostBodyFormProperties {

		/** Name of the object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceCertificateOrders_ResendRequestEmailsPostBodyFormGroup() {
		return new FormGroup<AppServiceCertificateOrders_ResendRequestEmailsPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

