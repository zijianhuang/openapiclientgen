import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** SQL REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: OperationDisplay;

		/** The name of the operation being performed on this particular object. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;

		/** Additional descriptions for the operation. */
		properties?: {[id: string]: any };
	}

	/** SQL REST API operation definition. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<OperationOrigin | null | undefined>,

		/** Additional descriptions for the operation. */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<OperationOrigin | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Display metadata associated with the operation. */
	export interface OperationDisplay {

		/** The localized friendly description for the operation. */
		description?: string | null;

		/** The localized friendly name for the operation. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name. */
		provider?: string | null;

		/** The localized friendly form of the resource type related to this action/operation. */
		resource?: string | null;
	}

	/** Display metadata associated with the operation. */
	export interface OperationDisplayFormProperties {

		/** The localized friendly description for the operation. */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name. */
		provider: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource type related to this action/operation. */
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

	export enum OperationOrigin { user = 'user', system = 'system' }


	/** Result of the request to list SQL operations. */
	export interface OperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Operation>;
	}

	/** Result of the request to list SQL operations. */
	export interface OperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available SQL Rest API operations.
		 * Get providers/Microsoft.Sql/operations
		 * @param {string} api_version The API version to use for the request.
		 * @return {OperationListResult} Successfully retrieved operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Sql/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

