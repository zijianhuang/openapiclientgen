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


	/** REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The subscription definition used to create the subscription. */
	export interface SubscriptionDefinition {

		/** The resource ID. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The subscription definition properties. */
		properties?: SubscriptionDefinitionProperties;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The subscription definition used to create the subscription. */
	export interface SubscriptionDefinitionFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDefinitionFormGroup() {
		return new FormGroup<SubscriptionDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subscription Definition List operation response. */
	export interface SubscriptionDefinitionList {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** An array of subscriptionDefinitions */
		value?: Array<SubscriptionDefinition>;
	}

	/** Subscription Definition List operation response. */
	export interface SubscriptionDefinitionListFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDefinitionListFormGroup() {
		return new FormGroup<SubscriptionDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The subscription definition properties. */
	export interface SubscriptionDefinitionProperties {

		/** The etag the subscription definition. */
		etag?: string | null;

		/** The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. */
		offerType?: string | null;

		/** The display name of the subscription. */
		subscriptionDisplayName?: string | null;

		/** The ID of the subscription. */
		subscriptionId?: string | null;
	}

	/** The subscription definition properties. */
	export interface SubscriptionDefinitionPropertiesFormProperties {

		/** The etag the subscription definition. */
		etag: FormControl<string | null | undefined>,

		/** The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. */
		offerType: FormControl<string | null | undefined>,

		/** The display name of the subscription. */
		subscriptionDisplayName: FormControl<string | null | undefined>,

		/** The ID of the subscription. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDefinitionPropertiesFormGroup() {
		return new FormGroup<SubscriptionDefinitionPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			offerType: new FormControl<string | null | undefined>(undefined),
			subscriptionDisplayName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Subscription API operations.
		 * Get providers/Microsoft.Subscription/operations
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2015-06-01
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		SubscriptionDefinitionsOperationMetadata_list(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Subscription/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List an Azure subscription definition by subscriptionId.
		 * Get providers/Microsoft.Subscription/subscriptionDefinitions
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2015-06-01
		 * @return {SubscriptionDefinitionList} Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters.
		 */
		SubscriptionDefinitions_List(api_version: string): Observable<SubscriptionDefinitionList> {
			return this.http.get<SubscriptionDefinitionList>(this.baseUri + 'providers/Microsoft.Subscription/subscriptionDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an Azure subscription definition.
		 * Get providers/Microsoft.Subscription/subscriptionDefinitions/{subscriptionDefinitionName}
		 * @param {string} subscriptionDefinitionName The name of the Azure subscription definition.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2015-06-01
		 * @return {SubscriptionDefinition} Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters.
		 */
		SubscriptionDefinitions_Get(subscriptionDefinitionName: string, api_version: string): Observable<SubscriptionDefinition> {
			return this.http.get<SubscriptionDefinition>(this.baseUri + 'providers/Microsoft.Subscription/subscriptionDefinitions/' + (subscriptionDefinitionName == null ? '' : encodeURIComponent(subscriptionDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create an Azure subscription definition.
		 * Put providers/Microsoft.Subscription/subscriptionDefinitions/{subscriptionDefinitionName}
		 * @param {string} subscriptionDefinitionName The name of the Azure subscription definition.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2015-06-01
		 * @param {SubscriptionDefinition} requestBody The subscription definition creation.
		 * @return {SubscriptionDefinition} Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters.
		 */
		SubscriptionDefinitions_Create(subscriptionDefinitionName: string, api_version: string, requestBody: SubscriptionDefinition): Observable<SubscriptionDefinition> {
			return this.http.put<SubscriptionDefinition>(this.baseUri + 'providers/Microsoft.Subscription/subscriptionDefinitions/' + (subscriptionDefinitionName == null ? '' : encodeURIComponent(subscriptionDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status of the subscription definition PUT operation. The URI of this API is returned in the Location field of the response header.
		 * Get providers/Microsoft.Subscription/subscriptionOperations/{operationId}
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2015-06-01
		 * @param {string} operationId The operation ID, which can be found from the Location field in the generate recommendation response header.
		 * @return {SubscriptionDefinition} Successful completion of the asynchronous operation
		 */
		SubscriptionDefinitions_GetOperationStatus(api_version: string, operationId: string): Observable<SubscriptionDefinition> {
			return this.http.get<SubscriptionDefinition>(this.baseUri + 'providers/Microsoft.Subscription/subscriptionOperations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

