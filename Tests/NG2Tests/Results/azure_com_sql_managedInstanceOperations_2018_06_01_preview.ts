import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A managed instance operation. */
	export interface ManagedInstanceOperation {

		/** The properties of a managed instance operation. */
		properties?: ManagedInstanceOperationProperties;
	}

	/** A managed instance operation. */
	export interface ManagedInstanceOperationFormProperties {
	}
	export function CreateManagedInstanceOperationFormGroup() {
		return new FormGroup<ManagedInstanceOperationFormProperties>({
		});

	}


	/** The properties of a managed instance operation. */
	export interface ManagedInstanceOperationProperties {

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

		/** The name of the managed instance the operation is being performed on. */
		managedInstanceName?: string | null;

		/** The name of operation. */
		operation?: string | null;

		/** The friendly name of operation. */
		operationFriendlyName?: string | null;

		/** The percentage of the operation completed. */
		percentComplete?: number | null;

		/** The operation start time. */
		startTime?: Date | null;

		/** The operation state. */
		state?: ManagedInstanceOperationPropertiesState | null;
	}

	/** The properties of a managed instance operation. */
	export interface ManagedInstanceOperationPropertiesFormProperties {

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

		/** The name of the managed instance the operation is being performed on. */
		managedInstanceName: FormControl<string | null | undefined>,

		/** The name of operation. */
		operation: FormControl<string | null | undefined>,

		/** The friendly name of operation. */
		operationFriendlyName: FormControl<string | null | undefined>,

		/** The percentage of the operation completed. */
		percentComplete: FormControl<number | null | undefined>,

		/** The operation start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The operation state. */
		state: FormControl<ManagedInstanceOperationPropertiesState | null | undefined>,
	}
	export function CreateManagedInstanceOperationPropertiesFormGroup() {
		return new FormGroup<ManagedInstanceOperationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorDescription: new FormControl<string | null | undefined>(undefined),
			errorSeverity: new FormControl<number | null | undefined>(undefined),
			estimatedCompletionTime: new FormControl<Date | null | undefined>(undefined),
			isCancellable: new FormControl<boolean | null | undefined>(undefined),
			isUserError: new FormControl<boolean | null | undefined>(undefined),
			managedInstanceName: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			operationFriendlyName: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<ManagedInstanceOperationPropertiesState | null | undefined>(undefined),
		});

	}

	export enum ManagedInstanceOperationPropertiesState { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, CancelInProgress = 4, Cancelled = 5 }


	/** The response to a list managed instance operations request */
	export interface ManagedInstanceOperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedInstanceOperation>;
	}

	/** The response to a list managed instance operations request */
	export interface ManagedInstanceOperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceOperationListResultFormGroup() {
		return new FormGroup<ManagedInstanceOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of operations performed on the managed instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceOperationListResult} The request for getting managed instance operations has been executed successfully.
		 */
		ManagedInstanceOperations_ListByManagedInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceOperationListResult> {
			return this.http.get<ManagedInstanceOperationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

