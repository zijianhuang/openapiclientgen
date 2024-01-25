import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a REST operation. */
	export interface Operation {

		/** Information about the REST operation. */
		display?: OperationDisplayDefinition;

		/** Name of the REST operation. */
		name?: string | null;

		/** Origin of the REST operation. */
		origin?: string | null;
	}

	/** Represents a REST operation. */
	export interface OperationFormProperties {

		/** Name of the REST operation. */
		name: FormControl<string | null | undefined>,

		/** Origin of the REST operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the REST operation. */
	export interface OperationDisplayDefinition {

		/** Description of the REST operation. */
		description?: string | null;

		/** Type of REST operation. */
		operation?: string | null;

		/** Provider of the REST operation. */
		provider?: string | null;

		/** Resource returned by the REST operation. */
		resource?: string | null;
	}

	/** Information about the REST operation. */
	export interface OperationDisplayDefinitionFormProperties {

		/** Description of the REST operation. */
		description: FormControl<string | null | undefined>,

		/** Type of REST operation. */
		operation: FormControl<string | null | undefined>,

		/** Provider of the REST operation. */
		provider: FormControl<string | null | undefined>,

		/** Resource returned by the REST operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayDefinitionFormGroup() {
		return new FormGroup<OperationDisplayDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of operations. */
	export interface OperationList {

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** List of operations. */
	export interface OperationListFormProperties {
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
		});

	}


	/** Base Resource Object. */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** Location of the resource. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key-value pairs. */
		tags?: {[id: string]: string };

		/** Type of the resource. */
		type?: string | null;
	}

	/** Base Resource Object. */
	export interface ResourceFormProperties {

		/** URI of the resource. */
		id: FormControl<string | null | undefined>,

		/** Location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** List of key-value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of the resource. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the available gallery admin operations.
		 * Get providers/Microsoft.Gallery.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Gallery.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

