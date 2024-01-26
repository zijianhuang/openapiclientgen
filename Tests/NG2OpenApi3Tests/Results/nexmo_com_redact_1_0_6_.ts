import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorInvalidId {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}
	export interface ErrorInvalidIdFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorInvalidIdFormGroup() {
		return new FormGroup<ErrorInvalidIdFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Invalid JSON */
	export interface ErrorInvalidJson {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}

	/** Invalid JSON */
	export interface ErrorInvalidJsonFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorInvalidJsonFormGroup() {
		return new FormGroup<ErrorInvalidJsonFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Premature Redaction */
	export interface ErrorPrematureRedaction {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}

	/** Premature Redaction */
	export interface ErrorPrematureRedactionFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorPrematureRedactionFormGroup() {
		return new FormGroup<ErrorPrematureRedactionFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorThrottled {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}
	export interface ErrorThrottledFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorThrottledFormGroup() {
		return new FormGroup<ErrorThrottledFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorUnauthorized {

		/**
		 * Error title
		 * Required
		 */
		error_title: string;

		/**
		 * Machine readable error type
		 * Required
		 */
		type: string;
	}
	export interface ErrorUnauthorizedFormProperties {

		/**
		 * Error title
		 * Required
		 */
		error_title: FormControl<string | null | undefined>,

		/**
		 * Machine readable error type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorUnauthorizedFormGroup() {
		return new FormGroup<ErrorUnauthorizedFormProperties>({
			error_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Unprovisioned */
	export interface ErrorUnprovisioned {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}

	/** Unprovisioned */
	export interface ErrorUnprovisionedFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorUnprovisionedFormGroup() {
		return new FormGroup<ErrorUnprovisionedFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Unsupported Product */
	export interface ErrorUnsupportedProduct {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}

	/** Unsupported Product */
	export interface ErrorUnsupportedProductFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorUnsupportedProductFormGroup() {
		return new FormGroup<ErrorUnsupportedProductFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RedactTransaction {

		/**
		 * The transaction ID to redact
		 * Required
		 */
		id: string;

		/**
		 * Product name that the ID provided relates to
		 * Required
		 */
		product: RedactTransactionProduct;

		/**
		 * Required if redacting SMS data
		 * Required
		 */
		type: RedactTransactionType;
	}
	export interface RedactTransactionFormProperties {

		/**
		 * The transaction ID to redact
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Product name that the ID provided relates to
		 * Required
		 */
		product: FormControl<RedactTransactionProduct | null | undefined>,

		/**
		 * Required if redacting SMS data
		 * Required
		 */
		type: FormControl<RedactTransactionType | null | undefined>,
	}
	export function CreateRedactTransactionFormGroup() {
		return new FormGroup<RedactTransactionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product: new FormControl<RedactTransactionProduct | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RedactTransactionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RedactTransactionProduct { sms = 0, voice = 1, 'number-insight' = 2, verify = 3, 'verify-sdk' = 4, messages = 5 }

	export enum RedactTransactionType { inbound = 0, outbound = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Redact a specific message
		 * Post transaction
		 * @return {void} 
		 */
		Redact_message(requestBody: RedactTransaction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

