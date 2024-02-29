import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** EnterpriseKnowledgeGraph resource definition */
	export interface EnterpriseKnowledgeGraph extends Resource {

		/** The parameters to provide for the EnterpriseKnowledgeGraph. */
		properties?: EnterpriseKnowledgeGraphProperties;
	}

	/** EnterpriseKnowledgeGraph resource definition */
	export interface EnterpriseKnowledgeGraphFormProperties extends ResourceFormProperties {
	}
	export function CreateEnterpriseKnowledgeGraphFormGroup() {
		return new FormGroup<EnterpriseKnowledgeGraphFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters to provide for the EnterpriseKnowledgeGraph. */
	export interface EnterpriseKnowledgeGraphProperties {

		/** The description of the EnterpriseKnowledgeGraph */
		description?: string | null;

		/** Specifies the metadata  of the resource. */
		metadata?: string | null;

		/** The state of EnterpriseKnowledgeGraph provisioning */
		provisioningState?: EnterpriseKnowledgeGraphPropertiesProvisioningState | null;
	}

	/** The parameters to provide for the EnterpriseKnowledgeGraph. */
	export interface EnterpriseKnowledgeGraphPropertiesFormProperties {

		/** The description of the EnterpriseKnowledgeGraph */
		description: FormControl<string | null | undefined>,

		/** Specifies the metadata  of the resource. */
		metadata: FormControl<string | null | undefined>,

		/** The state of EnterpriseKnowledgeGraph provisioning */
		provisioningState: FormControl<EnterpriseKnowledgeGraphPropertiesProvisioningState | null | undefined>,
	}
	export function CreateEnterpriseKnowledgeGraphPropertiesFormGroup() {
		return new FormGroup<EnterpriseKnowledgeGraphPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<EnterpriseKnowledgeGraphPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum EnterpriseKnowledgeGraphPropertiesProvisioningState { Creating = 'Creating', Deleting = 'Deleting', Failed = 'Failed', Succeeded = 'Succeeded' }


	/** The list of  EnterpriseKnowledgeGraph service operation response. */
	export interface EnterpriseKnowledgeGraphResponseList {

		/** The link used to get the next page of EnterpriseKnowledgeGraph service resources. */
		nextLink?: string | null;

		/** Gets the list of EnterpriseKnowledgeGraph service results and their properties. */
		value?: Array<EnterpriseKnowledgeGraph>;
	}

	/** The list of  EnterpriseKnowledgeGraph service operation response. */
	export interface EnterpriseKnowledgeGraphResponseListFormProperties {

		/** The link used to get the next page of EnterpriseKnowledgeGraph service resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseKnowledgeGraphResponseListFormGroup() {
		return new FormGroup<EnterpriseKnowledgeGraphResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnterpriseKnowledgeGraph Service error object. */
	export interface Error {

		/** EnterpriseKnowledgeGraph Service error body. */
		error?: ErrorBody;
	}

	/** EnterpriseKnowledgeGraph Service error object. */
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}


	/** EnterpriseKnowledgeGraph Service error body. */
	export interface ErrorBody {

		/**
		 * error code
		 * Required
		 */
		code: string;

		/**
		 * error message
		 * Required
		 */
		message: string;
	}

	/** EnterpriseKnowledgeGraph Service error body. */
	export interface ErrorBodyFormProperties {

		/**
		 * error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorBodyFormGroup() {
		return new FormGroup<ErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The operation supported by EnterpriseKnowledgeGraph Service Management. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft EnterpriseKnowledgeGraph Service. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by EnterpriseKnowledgeGraph Service Management. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft EnterpriseKnowledgeGraph Service. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operations supported by EnterpriseKnowledgeGraph Service Management. */
	export interface OperationEntity {

		/** The operation supported by EnterpriseKnowledgeGraph Service Management. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;

		/** Additional properties. */
		properties?: string | null;
	}

	/** The operations supported by EnterpriseKnowledgeGraph Service Management. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,

		/** Additional properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of EnterpriseKnowledgeGraph service operation response. */
	export interface OperationEntityListResult {

		/** The link used to get the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of EnterpriseKnowledgeGraph service operation response. */
	export interface OperationEntityListResultFormProperties {

		/** The link used to get the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure resource */
	export interface Resource {

		/** Specifies the resource ID. */
		id?: string | null;

		/** Specifies the location of the resource. */
		location?: string | null;

		/** Specifies the name of the resource. */
		name?: string | null;

		/** The SKU of the EnterpriseKnowledgeGraph service account. */
		sku?: Sku;

		/** Contains resource tags defined as key/value pairs. */
		tags?: {[id: string]: string };

		/** Specifies the type of the resource. */
		type?: string | null;
	}

	/** Azure resource */
	export interface ResourceFormProperties {

		/** Specifies the resource ID. */
		id: FormControl<string | null | undefined>,

		/** Specifies the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Specifies the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Contains resource tags defined as key/value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the type of the resource. */
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


	/** The SKU of the EnterpriseKnowledgeGraph service account. */
	export interface Sku {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: SkuName;
	}

	/** The SKU of the EnterpriseKnowledgeGraph service account. */
	export interface SkuFormProperties {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SkuName { F0 = 'F0', S1 = 'S1' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available EnterpriseKnowledgeGraph services operations.
		 * Get providers/Microsoft.EnterpriseKnowledgeGraph/operations
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {OperationEntityListResult} OK.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.EnterpriseKnowledgeGraph/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EnterpriseKnowledgeGraph/services
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {EnterpriseKnowledgeGraphResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. 
		 */
		EnterpriseKnowledgeGraph_List(api_version: string, subscriptionId: string): Observable<EnterpriseKnowledgeGraphResponseList> {
			return this.http.get<EnterpriseKnowledgeGraphResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services
		 * @param {string} resourceGroupName The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		 *     Min length: 2    Max length: 64
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EnterpriseKnowledgeGraphResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		EnterpriseKnowledgeGraph_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<EnterpriseKnowledgeGraphResponseList> {
			return this.http.get<EnterpriseKnowledgeGraphResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a EnterpriseKnowledgeGraph service specified by the parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		 * @param {string} resourceGroupName The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		 *     Min length: 2    Max length: 64
		 * @param {string} resourceName The name of the EnterpriseKnowledgeGraph resource.
		 *     Min length: 2    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {EnterpriseKnowledgeGraph} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		EnterpriseKnowledgeGraph_Get(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<EnterpriseKnowledgeGraph> {
			return this.http.get<EnterpriseKnowledgeGraph>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a EnterpriseKnowledgeGraph Service. EnterpriseKnowledgeGraph Service is a resource group wide resource type.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		 * @param {string} resourceGroupName The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		 *     Min length: 2    Max length: 64
		 * @param {string} resourceName The name of the EnterpriseKnowledgeGraph resource.
		 *     Min length: 2    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {EnterpriseKnowledgeGraph} requestBody The parameters to provide for the created EnterpriseKnowledgeGraph.
		 * @return {EnterpriseKnowledgeGraph} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		EnterpriseKnowledgeGraph_Create(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: EnterpriseKnowledgeGraph): Observable<EnterpriseKnowledgeGraph> {
			return this.http.put<EnterpriseKnowledgeGraph>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a EnterpriseKnowledgeGraph Service from the resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		 * @param {string} resourceGroupName The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		 *     Min length: 2    Max length: 64
		 * @param {string} resourceName The name of the EnterpriseKnowledgeGraph resource.
		 *     Min length: 2    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		EnterpriseKnowledgeGraph_Delete(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a EnterpriseKnowledgeGraph Service
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EnterpriseKnowledgeGraph/services/{resourceName}
		 * @param {string} resourceGroupName The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
		 *     Min length: 2    Max length: 64
		 * @param {string} resourceName The name of the EnterpriseKnowledgeGraph resource.
		 *     Min length: 2    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {EnterpriseKnowledgeGraph} requestBody The parameters to provide for the created EnterpriseKnowledgeGraph.
		 * @return {EnterpriseKnowledgeGraph} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		EnterpriseKnowledgeGraph_Update(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: EnterpriseKnowledgeGraph): Observable<EnterpriseKnowledgeGraph> {
			return this.http.patch<EnterpriseKnowledgeGraph>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EnterpriseKnowledgeGraph/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

