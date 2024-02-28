import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A server operation. */
	export interface ServerOperation {

		/** The properties of a server operation. */
		properties?: ServerOperationProperties;
	}

	/** A server operation. */
	export interface ServerOperationFormProperties {
	}
	export function CreateServerOperationFormGroup() {
		return new FormGroup<ServerOperationFormProperties>({
		});

	}


	/** The properties of a server operation. */
	export interface ServerOperationProperties {

		/** The operation description. */
		description?: string | null;

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
		state?: ServerOperationPropertiesState | null;
	}

	/** The properties of a server operation. */
	export interface ServerOperationPropertiesFormProperties {

		/** The operation description. */
		description: FormControl<string | null | undefined>,

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
		state: FormControl<ServerOperationPropertiesState | null | undefined>,
	}
	export function CreateServerOperationPropertiesFormGroup() {
		return new FormGroup<ServerOperationPropertiesFormProperties>({
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
			state: new FormControl<ServerOperationPropertiesState | null | undefined>(undefined),
		});

	}

	export enum ServerOperationPropertiesState { Pending = 'Pending', InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed', CancelInProgress = 'CancelInProgress', Cancelled = 'Cancelled' }


	/** The response to a list server operations request */
	export interface ServerOperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerOperation>;
	}

	/** The response to a list server operations request */
	export interface ServerOperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServerOperationListResultFormGroup() {
		return new FormGroup<ServerOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of operations performed on the server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/operations
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerOperationListResult} The request for getting server operations has been executed successfully.
		 */
		ServerOperations_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerOperationListResult> {
			return this.http.get<ServerOperationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

