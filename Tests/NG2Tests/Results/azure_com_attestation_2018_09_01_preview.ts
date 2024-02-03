import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AttestationPolicy {

		/** String-encoded attestation policy document. */
		policy?: string | null;
	}
	export interface AttestationPolicyFormProperties {

		/** String-encoded attestation policy document. */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateAttestationPolicyFormGroup() {
		return new FormGroup<AttestationPolicyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from Attestation. */
	export interface CloudError {

		/** An error response from Attestation. */
		error?: CloudErrorBody;
	}

	/** An error response from Attestation. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from Attestation. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the error, intended to be suitable for displaying in a user interface. */
		message?: string | null;
	}

	/** An error response from Attestation. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for displaying in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the OpenID Configuration data for the Azure Attestation Service
		 * Retrieves metadata about the attestation signing keys in use by the  attestation service
		 * Get .well-known/openid-configuration
		 * @return {string} Success
		 */
		MetadataConfiguration_Get(): Observable<string> {
			return this.http.get(this.baseUri + '.well-known/openid-configuration', { responseType: 'text' });
		}

		/**
		 * Retrieves the OpenID Configuration data for the Azure Attestation Service
		 * Retrieves attestation signing keys in use by the attestation service
		 * Get certs
		 * @return {string} Success
		 */
		Certs_Get(): Observable<string> {
			return this.http.get(this.baseUri + 'certs', { responseType: 'text' });
		}

		/**
		 * Retrieves the current policy for a given kind of TEE.
		 * Get operations/policy/current
		 * @param {Policy_GetApi_version} api_version Client API version.
		 * @param {Policy_GetTee} tee Specifies the trusted execution environment to be used to validate the evidence
		 * @return {AttestationPolicy} Success
		 */
		Policy_Get(api_version: Policy_GetApi_version, tee: Policy_GetTee): Observable<AttestationPolicy> {
			return this.http.get<AttestationPolicy>(this.baseUri + 'operations/policy/current?api_version=' + api_version + '&tee=' + tee, {});
		}
	}

	export enum Policy_GetApi_version { '2018-09-01-preview' = '2018-09-01-preview' }

	export enum Policy_GetTee { SgxEnclave = 'SgxEnclave', OpenEnclave = 'OpenEnclave', CyResComponent = 'CyResComponent', AzureGuest = 'AzureGuest' }

}

