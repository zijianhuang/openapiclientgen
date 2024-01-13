import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Storage operation result description. */
	export interface StorageOperationResult {

		/** Storage operation result properties. */
		properties?: StorageOperationResultModel;
	}

	/** Storage operation result description. */
	export interface StorageOperationResultFormProperties {
	}
	export function CreateStorageOperationResultFormGroup() {
		return new FormGroup<StorageOperationResultFormProperties>({
		});

	}


	/** Storage operation result properties. */
	export interface StorageOperationResultModel {

		/** List of operation result instances. */
		instances?: Array<string>;

		/** Success or failure of operation. */
		provisioningState?: string | null;
	}

	/** Storage operation result properties. */
	export interface StorageOperationResultModelFormProperties {

		/** Success or failure of operation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateStorageOperationResultModelFormGroup() {
		return new FormGroup<StorageOperationResultModelFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage operation results. */
	export interface StorageOperationResultList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage operation results. */
		value?: Array<StorageOperationResult>;
	}

	/** Pageable list of storage operation results. */
	export interface StorageOperationResultListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageOperationResultListFormGroup() {
		return new FormGroup<StorageOperationResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage operation results at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageOperationResults
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {StorageOperationResultList} OK
		 */
		StorageOperationResults_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<StorageOperationResultList> {
			return this.http.get<StorageOperationResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageOperationResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the status of a storage operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageOperationResults/{operation}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} operation Operation identifier.
		 * @param {string} api_version Client API Version.
		 * @return {StorageOperationResult} OK
		 */
		StorageOperationResults_Get(subscriptionId: string, resourceGroupName: string, location: string, operation: string, api_version: string): Observable<StorageOperationResult> {
			return this.http.get<StorageOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageOperationResults/' + (operation == null ? '' : encodeURIComponent(operation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

