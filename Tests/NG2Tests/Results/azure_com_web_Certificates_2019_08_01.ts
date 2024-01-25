import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** SSL certificate for an app. */
	export interface Certificate {

		/** Certificate resource specific properties */
		properties?: any;
	}

	/** SSL certificate for an app. */
	export interface CertificateFormProperties {

		/** Certificate resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of certificates. */
	export interface CertificateCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Certificate>;
	}

	/** Collection of certificates. */
	export interface CertificateCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCollectionFormGroup() {
		return new FormGroup<CertificateCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM resource for a certificate. */
	export interface CertificatePatchResource {

		/** CertificatePatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a certificate. */
	export interface CertificatePatchResourceFormProperties {

		/** CertificatePatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCertificatePatchResourceFormGroup() {
		return new FormGroup<CertificatePatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all certificates for a subscription.
		 * Description for Get all certificates for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/certificates
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {CertificateCollection} OK
		 */
		Certificates_List(subscriptionId: string, api_version: string): Observable<CertificateCollection> {
			return this.http.get<CertificateCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/certificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all certificates in a resource group.
		 * Description for Get all certificates in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {CertificateCollection} OK.
		 */
		Certificates_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<CertificateCollection> {
			return this.http.get<CertificateCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/certificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a certificate.
		 * Description for Get a certificate.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Certificate} OK
		 */
		Certificates_Get(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a certificate.
		 * Description for Create or update a certificate.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {Certificate} requestBody Details of certificate, if it exists already.
		 * @return {Certificate} OK.
		 */
		Certificates_CreateOrUpdate(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: Certificate): Observable<Certificate> {
			return this.http.put<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a certificate.
		 * Description for Delete a certificate.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted certificate.
		 */
		Certificates_Delete(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update a certificate.
		 * Description for Create or update a certificate.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the certificate.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CertificatePatchResource} requestBody Details of certificate, if it exists already.
		 * @return {Certificate} OK.
		 */
		Certificates_Update(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: CertificatePatchResource): Observable<Certificate> {
			return this.http.patch<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/certificates/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

