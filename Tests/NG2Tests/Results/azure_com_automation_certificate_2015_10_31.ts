import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Certificate {
	}
	export interface CertificateFormProperties {
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
		});

	}


	/** The parameters supplied to the create or update or replace certificate operation. */
	export interface CertificateCreateOrUpdateParameters {

		/**
		 * Gets or sets the name of the certificate.
		 * Required
		 */
		name: string;

		/**
		 * The properties of the create certificate operation.
		 * Required
		 */
		properties: CertificateCreateOrUpdateProperties;
	}

	/** The parameters supplied to the create or update or replace certificate operation. */
	export interface CertificateCreateOrUpdateParametersFormProperties {

		/**
		 * Gets or sets the name of the certificate.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCreateOrUpdateParametersFormGroup() {
		return new FormGroup<CertificateCreateOrUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the create certificate operation. */
	export interface CertificateCreateOrUpdateProperties {

		/**
		 * Gets or sets the base64 encoded value of the certificate.
		 * Required
		 */
		base64Value: string;

		/** Gets or sets the description of the certificate. */
		description?: string | null;

		/** Gets or sets the is exportable flag of the certificate. */
		isExportable?: boolean | null;

		/** Gets or sets the thumbprint of the certificate. */
		thumbprint?: string | null;
	}

	/** The properties of the create certificate operation. */
	export interface CertificateCreateOrUpdatePropertiesFormProperties {

		/**
		 * Gets or sets the base64 encoded value of the certificate.
		 * Required
		 */
		base64Value: FormControl<string | null | undefined>,

		/** Gets or sets the description of the certificate. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the is exportable flag of the certificate. */
		isExportable: FormControl<boolean | null | undefined>,

		/** Gets or sets the thumbprint of the certificate. */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<CertificateCreateOrUpdatePropertiesFormProperties>({
			base64Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			isExportable: new FormControl<boolean | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list certificate operation. */
	export interface CertificateListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of certificates. */
		value?: Array<Certificate>;
	}

	/** The response model for the list certificate operation. */
	export interface CertificateListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCertificateListResultFormGroup() {
		return new FormGroup<CertificateListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the certificate. */
	export interface CertificateProperties {

		/** Gets the creation time. */
		creationTime?: Date | null;

		/** Gets or sets the description. */
		description?: string | null;

		/** Gets the expiry time of the certificate. */
		expiryTime?: Date | null;

		/** Gets the is exportable flag of the certificate. */
		isExportable?: boolean | null;

		/** Gets the last modified time. */
		lastModifiedTime?: Date | null;

		/** Gets the thumbprint of the certificate. */
		thumbprint?: string | null;
	}

	/** Properties of the certificate. */
	export interface CertificatePropertiesFormProperties {

		/** Gets the creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the description. */
		description: FormControl<string | null | undefined>,

		/** Gets the expiry time of the certificate. */
		expiryTime: FormControl<Date | null | undefined>,

		/** Gets the is exportable flag of the certificate. */
		isExportable: FormControl<boolean | null | undefined>,

		/** Gets the last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets the thumbprint of the certificate. */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificatePropertiesFormGroup() {
		return new FormGroup<CertificatePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			isExportable: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the update certificate operation. */
	export interface CertificateUpdateParameters {

		/** Gets or sets the name of the certificate. */
		name?: string | null;

		/** The properties of the update certificate operation */
		properties?: CertificateUpdateProperties;
	}

	/** The parameters supplied to the update certificate operation. */
	export interface CertificateUpdateParametersFormProperties {

		/** Gets or sets the name of the certificate. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCertificateUpdateParametersFormGroup() {
		return new FormGroup<CertificateUpdateParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the update certificate operation */
	export interface CertificateUpdateProperties {

		/** Gets or sets the description of the certificate. */
		description?: string | null;
	}

	/** The properties of the update certificate operation */
	export interface CertificateUpdatePropertiesFormProperties {

		/** Gets or sets the description of the certificate. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCertificateUpdatePropertiesFormGroup() {
		return new FormGroup<CertificateUpdatePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of certificates.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {CertificateListResult} OK
		 */
		Certificate_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<CertificateListResult> {
			return this.http.get<CertificateListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/certificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the certificate identified by certificate name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} certificateName The name of certificate.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {Certificate} OK
		 */
		Certificate_Get(resourceGroupName: string, automationAccountName: string, certificateName: string, subscriptionId: string, api_version: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a certificate.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} certificateName The parameters supplied to the create or update certificate operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {CertificateCreateOrUpdateParameters} requestBody The parameters supplied to the create or update certificate operation.
		 * @return {Certificate} OK
		 */
		Certificate_CreateOrUpdate(resourceGroupName: string, automationAccountName: string, certificateName: string, subscriptionId: string, api_version: string, requestBody: CertificateCreateOrUpdateParameters): Observable<Certificate> {
			return this.http.put<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the certificate.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} certificateName The name of certificate.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Certificate_Delete(resourceGroupName: string, automationAccountName: string, certificateName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a certificate.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} certificateName The parameters supplied to the update certificate operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {CertificateUpdateParameters} requestBody The parameters supplied to the update certificate operation.
		 * @return {Certificate} OK
		 */
		Certificate_Update(resourceGroupName: string, automationAccountName: string, certificateName: string, subscriptionId: string, api_version: string, requestBody: CertificateUpdateParameters): Observable<Certificate> {
			return this.http.patch<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

