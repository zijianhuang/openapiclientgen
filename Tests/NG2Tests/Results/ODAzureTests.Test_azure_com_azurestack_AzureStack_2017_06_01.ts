import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the localized display information for this particular operation or action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation?: string | null;

		/** The localized, friendly version of the resource provider name. */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation or action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource provider name. */
		provider: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the error. */
	export interface ErrorDetails {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** The details of the error. */
	export interface ErrorDetailsFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** The details of the error. */
		error?: ErrorDetails;
	}

	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation or action. */
		display?: Display;

		/** The name of the operation being performed on this particular object. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Operations */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operations */
		value?: Array<Operation>;
	}

	/** List of Operations */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The provisioning state of the resource. */
	export enum ProvisioningState { Creating = 0, Failed = 1, Succeeded = 2, Canceled = 3 }


	/** Base resource object. */
	export interface Resource {

		/** The entity tag used for optimistic concurrency when modifying the resource. */
		etag?: string | null;

		/** ID of the resource. */
		id?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** Type of Resource. */
		type?: string | null;
	}

	/** Base resource object. */
	export interface ResourceFormProperties {

		/** The entity tag used for optimistic concurrency when modifying the resource. */
		etag: FormControl<string | null | undefined>,

		/** ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Type of Resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base resource object. */
	export interface TrackedResource {

		/** The entity tag used for optimistic concurrency when modifying the resource. */
		etag?: string | null;

		/** ID of the resource. */
		id?: string | null;

		/**
		 * Location of the resource.
		 * Required
		 */
		location: TrackedResourceLocation;

		/** Name of the resource. */
		name?: string | null;

		/** Custom tags for the resource. */
		tags?: {[id: string]: string };

		/** Type of Resource. */
		type?: string | null;
	}

	/** Base resource object. */
	export interface TrackedResourceFormProperties {

		/** The entity tag used for optimistic concurrency when modifying the resource. */
		etag: FormControl<string | null | undefined>,

		/** ID of the resource. */
		id: FormControl<string | null | undefined>,

		/**
		 * Location of the resource.
		 * Required
		 */
		location: FormControl<TrackedResourceLocation | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Custom tags for the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of Resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<TrackedResourceLocation | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrackedResourceLocation { global = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of supported REST operations.
		 * Get providers/Microsoft.AzureStack/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.AzureStack/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

