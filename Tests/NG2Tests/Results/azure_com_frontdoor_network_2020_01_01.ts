import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure. */
	export interface AzureAsyncOperationResult {
		error?: Error;

		/** Status of the Azure async operation. Possible values are: 'InProgress', 'Succeeded', and 'Failed'. */
		status?: AzureAsyncOperationResultStatus | null;
	}

	/** The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure. */
	export interface AzureAsyncOperationResultFormProperties {

		/** Status of the Azure async operation. Possible values are: 'InProgress', 'Succeeded', and 'Failed'. */
		status: FormControl<AzureAsyncOperationResultStatus | null | undefined>,
	}
	export function CreateAzureAsyncOperationResultFormGroup() {
		return new FormGroup<AzureAsyncOperationResultFormProperties>({
			status: new FormControl<AzureAsyncOperationResultStatus | null | undefined>(undefined),
		});

	}

	export enum AzureAsyncOperationResultStatus { InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed' }

	export interface Error {
		code?: string | null;
		details?: Array<ErrorDetails>;
		innerError?: string | null;
		message?: string | null;
		target?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<string | null | undefined>,
		innerError: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			innerError: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetails {
		code?: string | null;
		message?: string | null;
		target?: string | null;
	}
	export interface ErrorDetailsFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common resource representation. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Common resource representation. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to another subresource. */
	export interface SubResource {

		/** Resource ID. */
		id?: string | null;
	}

	/** Reference to another subresource. */
	export interface SubResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags object for patch operations. */
	export interface TagsObject {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Tags object for patch operations. */
	export interface TagsObjectFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsObjectFormGroup() {
		return new FormGroup<TagsObjectFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

