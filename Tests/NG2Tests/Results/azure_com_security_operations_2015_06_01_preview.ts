import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Possible operation in the REST API of Microsoft.Security */
	export interface Operation {

		/** Security operation display */
		display?: OperationDisplay;

		/** Name of the operation */
		name?: string | null;

		/** Where the operation is originated */
		origin?: string | null;
	}

	/** Possible operation in the REST API of Microsoft.Security */
	export interface OperationFormProperties {

		/** Name of the operation */
		name: FormControl<string | null | undefined>,

		/** Where the operation is originated */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security operation display */
	export interface OperationDisplay {

		/** The description of the operation. */
		description?: string | null;

		/** The display name of the security operation. */
		operation?: string | null;

		/** The resource provider for the operation. */
		provider?: string | null;

		/** The display name of the resource the operation applies to. */
		resource?: string | null;
	}

	/** Security operation display */
	export interface OperationDisplayFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The display name of the security operation. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider for the operation. */
		provider: FormControl<string | null | undefined>,

		/** The display name of the resource the operation applies to. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of possible operations for Microsoft.Security resource provider */
	export interface OperationList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of Security operations */
		value?: Array<Operation>;
	}

	/** List of possible operations for Microsoft.Security resource provider */
	export interface OperationListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exposes all available operations for discovery purposes.
		 * Get providers/Microsoft.Security/operations
		 * @param {string} api_version API version for the operation
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Security/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

