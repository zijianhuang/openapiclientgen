import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database operation. */
	export interface DatabaseOperation {

		/** The properties of a database operation. */
		properties?: DatabaseOperationProperties;
	}

	/** A database operation. */
	export interface DatabaseOperationFormProperties {
	}
	export function CreateDatabaseOperationFormGroup() {
		return new FormGroup<DatabaseOperationFormProperties>({
		});

	}


	/** The properties of a database operation. */
	export interface DatabaseOperationProperties {

		/** The name of the database the operation is being performed on. */
		databaseName?: string | null;

		/** The operation description. */
		description?: string | null;

		/** The operation error code. */
		errorCode?: number | null;

		/** The operation error description. */
		errorDescription?: string | null;

		/** The operation error severity. */
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

		/** The percentage of the operation completed. */
		percentComplete?: number | null;

		/** The name of the server. */
		serverName?: string | null;

		/** The operation start time. */
		startTime?: Date | null;

		/** The operation state. */
		state?: DatabaseOperationPropertiesState | null;
	}

	/** The properties of a database operation. */
	export interface DatabaseOperationPropertiesFormProperties {

		/** The name of the database the operation is being performed on. */
		databaseName: FormControl<string | null | undefined>,

		/** The operation description. */
		description: FormControl<string | null | undefined>,

		/** The operation error code. */
		errorCode: FormControl<number | null | undefined>,

		/** The operation error description. */
		errorDescription: FormControl<string | null | undefined>,

		/** The operation error severity. */
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

		/** The percentage of the operation completed. */
		percentComplete: FormControl<number | null | undefined>,

		/** The name of the server. */
		serverName: FormControl<string | null | undefined>,

		/** The operation start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The operation state. */
		state: FormControl<DatabaseOperationPropertiesState | null | undefined>,
	}
	export function CreateDatabaseOperationPropertiesFormGroup() {
		return new FormGroup<DatabaseOperationPropertiesFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
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
			state: new FormControl<DatabaseOperationPropertiesState | null | undefined>(undefined),
		});

	}

	export enum DatabaseOperationPropertiesState { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, CancelInProgress = 4, Cancelled = 5 }


	/** The response to a list database operations request */
	export interface DatabaseOperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<DatabaseOperation>;
	}

	/** The response to a list database operations request */
	export interface DatabaseOperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseOperationListResultFormGroup() {
		return new FormGroup<DatabaseOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of operations performed on the database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/operations
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseOperationListResult} The request for getting database operations has been executed successfully.
		 */
		DatabaseOperations_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DatabaseOperationListResult> {
			return this.http.get<DatabaseOperationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Cancels the asynchronous operation on the database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/operations/{operationId}/cancel
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} operationId The operation identifier.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} The request for cancel has been executed successfully.
		 */
		DatabaseOperations_Cancel(resourceGroupName: string, serverName: string, databaseName: string, operationId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

