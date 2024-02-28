import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A elastic pool operation. */
	export interface ElasticPoolOperation {

		/** The properties of a elastic pool operation. */
		properties?: ElasticPoolOperationProperties;
	}

	/** A elastic pool operation. */
	export interface ElasticPoolOperationFormProperties {
	}
	export function CreateElasticPoolOperationFormGroup() {
		return new FormGroup<ElasticPoolOperationFormProperties>({
		});

	}


	/** The properties of a elastic pool operation. */
	export interface ElasticPoolOperationProperties {

		/** The operation description. */
		description?: string | null;

		/** The name of the elastic pool the operation is being performed on. */
		elasticPoolName?: string | null;

		/**
		 * The operation error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/** The operation error description. */
		errorDescription?: string | null;

		/**
		 * The operation error severity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity?: number | null;

		/** The estimated completion time of the operation. */
		estimatedCompletionTime?: Date | null;

		/** Whether the operation can be cancelled. */
		isCancellable?: boolean | null;

		/** Whether or not the error is a user error. */
		isUserError?: boolean | null;

		/** The name of operation. */
		operation?: string | null;

		/** The friendly name of operation. */
		operationFriendlyName?: string | null;

		/**
		 * The percentage of the operation completed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete?: number | null;

		/** The name of the server. */
		serverName?: string | null;

		/** The operation start time. */
		startTime?: Date | null;

		/** The operation state. */
		state?: string | null;
	}

	/** The properties of a elastic pool operation. */
	export interface ElasticPoolOperationPropertiesFormProperties {

		/** The operation description. */
		description: FormControl<string | null | undefined>,

		/** The name of the elastic pool the operation is being performed on. */
		elasticPoolName: FormControl<string | null | undefined>,

		/**
		 * The operation error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/** The operation error description. */
		errorDescription: FormControl<string | null | undefined>,

		/**
		 * The operation error severity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity: FormControl<number | null | undefined>,

		/** The estimated completion time of the operation. */
		estimatedCompletionTime: FormControl<Date | null | undefined>,

		/** Whether the operation can be cancelled. */
		isCancellable: FormControl<boolean | null | undefined>,

		/** Whether or not the error is a user error. */
		isUserError: FormControl<boolean | null | undefined>,

		/** The name of operation. */
		operation: FormControl<string | null | undefined>,

		/** The friendly name of operation. */
		operationFriendlyName: FormControl<string | null | undefined>,

		/**
		 * The percentage of the operation completed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete: FormControl<number | null | undefined>,

		/** The name of the server. */
		serverName: FormControl<string | null | undefined>,

		/** The operation start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The operation state. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolOperationPropertiesFormGroup() {
		return new FormGroup<ElasticPoolOperationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			elasticPoolName: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorDescription: new FormControl<string | null | undefined>(undefined),
			errorSeverity: new FormControl<number | null | undefined>(undefined),
			estimatedCompletionTime: new FormControl<Date | null | undefined>(undefined),
			isCancellable: new FormControl<boolean | null | undefined>(undefined),
			isUserError: new FormControl<boolean | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			operationFriendlyName: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a list elastic pool operations request */
	export interface ElasticPoolOperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ElasticPoolOperation>;
	}

	/** The response to a list elastic pool operations request */
	export interface ElasticPoolOperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolOperationListResultFormGroup() {
		return new FormGroup<ElasticPoolOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of operations performed on the elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ElasticPoolOperationListResult} The request for getting elastic pool operations has been executed successfully.
		 */
		ElasticPoolOperations_ListByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string): Observable<ElasticPoolOperationListResult> {
			return this.http.get<ElasticPoolOperationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Cancels the asynchronous operation on the elastic pool.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations/{operationId}/cancel
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} operationId The operation identifier.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} The request for cancel has been executed successfully.
		 */
		ElasticPoolOperations_Cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

