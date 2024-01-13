import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Log specification of operation. */
	export interface LogSpecification {

		/** Blob duration of specification. */
		blobDuration?: string | null;

		/** Display name of log specification. */
		displayName?: string | null;

		/** Name of log specification. */
		name?: string | null;
	}

	/** Log specification of operation. */
	export interface LogSpecificationFormProperties {

		/** Blob duration of specification. */
		blobDuration: FormControl<string | null | undefined>,

		/** Display name of log specification. */
		displayName: FormControl<string | null | undefined>,

		/** Name of log specification. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogSpecificationFormGroup() {
		return new FormGroup<LogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Vault REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;

		/** The origin of operations. */
		origin?: string | null;

		/** Properties of operation, include metric specifications. */
		properties?: OperationProperties;
	}

	/** Key Vault REST API operation definition. */
	export interface OperationFormProperties {

		/** Display metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,

		/** The origin of operations. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The URL to get the next set of operations. */
		nextLink?: string | null;

		/** List of Storage operations supported by the Storage resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The URL to get the next set of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of operation, include metric specifications. */
	export interface OperationProperties {

		/** One property of operation, include log specifications. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Properties of operation, include metric specifications. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** One property of operation, include log specifications. */
	export interface ServiceSpecification {

		/** Log specifications of operation. */
		logSpecifications?: Array<LogSpecification>;
	}

	/** One property of operation, include log specifications. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Key Vault Rest API operations.
		 * Get providers/Microsoft.KeyVault/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.KeyVault/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

