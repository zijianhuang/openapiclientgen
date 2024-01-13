import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Operation */
	export interface ProviderOperation {

		/** The operation description. */
		description?: string | null;

		/** The operation display name. */
		displayName?: string | null;

		/** The dataAction flag to specify the operation type. */
		isDataAction?: boolean | null;

		/** The operation name. */
		name?: string | null;

		/** The operation origin. */
		origin?: string | null;

		/** The operation properties. */
		properties?: string | null;
	}

	/** Operation */
	export interface ProviderOperationFormProperties {

		/** The operation description. */
		description: FormControl<string | null | undefined>,

		/** The operation display name. */
		displayName: FormControl<string | null | undefined>,

		/** The dataAction flag to specify the operation type. */
		isDataAction: FormControl<boolean | null | undefined>,

		/** The operation name. */
		name: FormControl<string | null | undefined>,

		/** The operation origin. */
		origin: FormControl<string | null | undefined>,

		/** The operation properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationFormGroup() {
		return new FormGroup<ProviderOperationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isDataAction: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provider Operations metadata */
	export interface ProviderOperationsMetadata {

		/** The provider display name. */
		displayName?: string | null;

		/** The provider id. */
		id?: string | null;

		/** The provider name. */
		name?: string | null;

		/** The provider operations. */
		operations?: Array<ProviderOperation>;

		/** The provider resource types */
		resourceTypes?: Array<ResourceType>;

		/** The provider type. */
		type?: string | null;
	}

	/** Provider Operations metadata */
	export interface ProviderOperationsMetadataFormProperties {

		/** The provider display name. */
		displayName: FormControl<string | null | undefined>,

		/** The provider id. */
		id: FormControl<string | null | undefined>,

		/** The provider name. */
		name: FormControl<string | null | undefined>,

		/** The provider type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationsMetadataFormGroup() {
		return new FormGroup<ProviderOperationsMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource Type */
	export interface ResourceType {

		/** The resource type display name. */
		displayName?: string | null;

		/** The resource type name. */
		name?: string | null;

		/** The resource type operations. */
		operations?: Array<ProviderOperation>;
	}

	/** Resource Type */
	export interface ResourceTypeFormProperties {

		/** The resource type display name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource type name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceTypeFormGroup() {
		return new FormGroup<ResourceTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provider operations metadata list */
	export interface ProviderOperationsMetadataListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The list of providers. */
		value?: Array<ProviderOperationsMetadata>;
	}

	/** Provider operations metadata list */
	export interface ProviderOperationsMetadataListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationsMetadataListResultFormGroup() {
		return new FormGroup<ProviderOperationsMetadataListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets provider operations metadata for all resource providers.
		 * Get providers/Microsoft.Authorization/providerOperations
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadataListResult} OK - Returns an array of the operations metadata.
		 */
		ProviderOperationsMetadata_List(api_version: string, expand: string | null | undefined): Observable<ProviderOperationsMetadataListResult> {
			return this.http.get<ProviderOperationsMetadataListResult>(this.baseUri + 'providers/Microsoft.Authorization/providerOperations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Gets provider operations metadata for the specified resource provider.
		 * Get providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace}
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadata} OK - Returns the operations metadata.
		 */
		ProviderOperationsMetadata_Get(resourceProviderNamespace: string, api_version: string, expand: string | null | undefined): Observable<ProviderOperationsMetadata> {
			return this.http.get<ProviderOperationsMetadata>(this.baseUri + 'providers/Microsoft.Authorization/providerOperations/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}
	}

}

