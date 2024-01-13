import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A TDE certificate that can be uploaded into a server. */
	export interface TdeCertificate {

		/** Properties of a TDE certificate. */
		properties?: TdeCertificateProperties;
	}

	/** A TDE certificate that can be uploaded into a server. */
	export interface TdeCertificateFormProperties {
	}
	export function CreateTdeCertificateFormGroup() {
		return new FormGroup<TdeCertificateFormProperties>({
		});

	}


	/** Properties of a TDE certificate. */
	export interface TdeCertificateProperties {

		/** The certificate password. */
		certPassword?: string | null;

		/**
		 * The base64 encoded certificate private blob.
		 * Required
		 */
		privateBlob: string;
	}

	/** Properties of a TDE certificate. */
	export interface TdeCertificatePropertiesFormProperties {

		/** The certificate password. */
		certPassword: FormControl<string | null | undefined>,

		/**
		 * The base64 encoded certificate private blob.
		 * Required
		 */
		privateBlob: FormControl<string | null | undefined>,
	}
	export function CreateTdeCertificatePropertiesFormGroup() {
		return new FormGroup<TdeCertificatePropertiesFormProperties>({
			certPassword: new FormControl<string | null | undefined>(undefined),
			privateBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a TDE certificate for a given server.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/tdeCertificates
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {TdeCertificate} requestBody The requested TDE certificate to be created or updated.
		 * @return {void} Successfully created the TDE certificate.
		 */
		ManagedInstanceTdeCertificates_Create(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string, requestBody: TdeCertificate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/tdeCertificates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

