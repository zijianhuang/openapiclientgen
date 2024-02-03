import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error Field contract. */
	export interface ErrorFieldContract {

		/** Property level error code. */
		code?: string | null;

		/** Human-readable representation of property-level error. */
		message?: string | null;

		/** Property name. */
		target?: string | null;
	}

	/** Error Field contract. */
	export interface ErrorFieldContractFormProperties {

		/** Property level error code. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of property-level error. */
		message: FormControl<string | null | undefined>,

		/** Property name. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldContractFormGroup() {
		return new FormGroup<ErrorFieldContractFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error message body that will indicate why the operation failed. */
	export interface GraphQueryError {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code?: string | null;

		/** The list of invalid fields send in request, in case of validation error. */
		details?: Array<ErrorFieldContract>;

		/** Human-readable representation of the error. */
		message?: string | null;
	}

	/** Error message body that will indicate why the operation failed. */
	export interface GraphQueryErrorFormProperties {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGraphQueryErrorFormGroup() {
		return new FormGroup<GraphQueryErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Graph query list result. */
	export interface GraphQueryListResult {

		/** URL to fetch the next set of queries. */
		nextLink?: string | null;

		/** An array of graph queries. */
		value?: Array<GraphQueryResource>;
	}

	/** Graph query list result. */
	export interface GraphQueryListResultFormProperties {

		/** URL to fetch the next set of queries. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGraphQueryListResultFormGroup() {
		return new FormGroup<GraphQueryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Graph Query entity definition. */
	export interface GraphQueryResource extends Resource {

		/** Properties that contain a graph query. */
		properties?: GraphQueryProperties;
	}

	/** Graph Query entity definition. */
	export interface GraphQueryResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateGraphQueryResourceFormGroup() {
		return new FormGroup<GraphQueryResourceFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties that contain a graph query. */
	export interface GraphQueryProperties {

		/** The description of a graph query. */
		description?: string | null;

		/**
		 * KQL query that will be graph.
		 * Required
		 */
		query: string;

		/** Enum indicating a type of graph query. */
		resultKind?: GraphQueryPropertiesResultKind | null;

		/** Date and time in UTC of the last modification that was made to this graph query definition. */
		timeModified?: Date | null;
	}

	/** Properties that contain a graph query. */
	export interface GraphQueryPropertiesFormProperties {

		/** The description of a graph query. */
		description: FormControl<string | null | undefined>,

		/**
		 * KQL query that will be graph.
		 * Required
		 */
		query: FormControl<string | null | undefined>,

		/** Enum indicating a type of graph query. */
		resultKind: FormControl<GraphQueryPropertiesResultKind | null | undefined>,

		/** Date and time in UTC of the last modification that was made to this graph query definition. */
		timeModified: FormControl<Date | null | undefined>,
	}
	export function CreateGraphQueryPropertiesFormGroup() {
		return new FormGroup<GraphQueryPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resultKind: new FormControl<GraphQueryPropertiesResultKind | null | undefined>(undefined),
			timeModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GraphQueryPropertiesResultKind { basic = 'basic' }


	/** Properties that contain a workbook for PATCH operation. */
	export interface GraphQueryPropertiesUpdateParameters {

		/** The description of a graph query. */
		description?: string | null;

		/** KQL query that will be graph. */
		query?: string | null;
	}

	/** Properties that contain a workbook for PATCH operation. */
	export interface GraphQueryPropertiesUpdateParametersFormProperties {

		/** The description of a graph query. */
		description: FormControl<string | null | undefined>,

		/** KQL query that will be graph. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGraphQueryPropertiesUpdateParametersFormGroup() {
		return new FormGroup<GraphQueryPropertiesUpdateParametersFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters that can be provided when updating workbook properties properties. */
	export interface GraphQueryUpdateParameters {

		/** This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. */
		eTag?: string | null;

		/** Properties that contain a workbook for PATCH operation. */
		properties?: GraphQueryPropertiesUpdateParameters;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The parameters that can be provided when updating workbook properties properties. */
	export interface GraphQueryUpdateParametersFormProperties {

		/** This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. */
		eTag: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGraphQueryUpdateParametersFormGroup() {
		return new FormGroup<GraphQueryUpdateParametersFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. */
		eTag?: string | null;

		/** Azure resource Id */
		id?: string | null;

		/** Azure resource name. This is GUID value. The display name should be assigned within properties field. */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. */
		eTag: FormControl<string | null | undefined>,

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/** Azure resource name. This is GUID value. The display name should be assigned within properties field. */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
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
		 * Get all graph queries defined within a specified subscription and resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {GraphQueryListResult} A list containing 0 or more graph queries.
		 */
		GraphQuery_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<GraphQueryListResult> {
			return this.http.get<GraphQueryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceGraph/queries&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a single graph query by its resourceName.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceName The name of the Graph Query resource.
		 * @param {string} api_version Client Api Version.
		 * @return {GraphQueryResource} A graph query definition.
		 */
		GraphQuery_Get(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<GraphQueryResource> {
			return this.http.get<GraphQueryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceGraph/queries/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new graph query.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceName The name of the Graph Query resource.
		 * @param {string} api_version Client Api Version.
		 * @param {GraphQueryResource} requestBody Properties that need to be specified to create a new graph query.
		 * @return {GraphQueryResource} The newly created graph query.
		 */
		GraphQuery_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: GraphQueryResource): Observable<GraphQueryResource> {
			return this.http.put<GraphQueryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceGraph/queries/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a graph query.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceName The name of the Graph Query resource.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The graph query has been successfully deleted.
		 */
		GraphQuery_Delete(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceGraph/queries/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a graph query that has already been added.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceName The name of the Graph Query resource.
		 * @param {string} api_version Client Api Version.
		 * @param {GraphQueryUpdateParameters} requestBody Properties that need to be specified to create a new graph query.
		 * @return {GraphQueryResource} The graph query definition updated.
		 */
		GraphQuery_Update(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: GraphQueryUpdateParameters): Observable<GraphQueryResource> {
			return this.http.patch<GraphQueryResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ResourceGraph/queries/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

