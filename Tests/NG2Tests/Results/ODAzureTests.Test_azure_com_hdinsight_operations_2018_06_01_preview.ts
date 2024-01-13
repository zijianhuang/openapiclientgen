import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HDInsight REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** The operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** The HDInsight REST API operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** The operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list HDInsight operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** The list of HDInsight operations supported by the HDInsight resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list HDInsight operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The URL to get the next set of operation list results if there are any. */
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
		 * Lists all of the available HDInsight REST API operations.
		 * Get providers/Microsoft.HDInsight/operations
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.HDInsight/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

