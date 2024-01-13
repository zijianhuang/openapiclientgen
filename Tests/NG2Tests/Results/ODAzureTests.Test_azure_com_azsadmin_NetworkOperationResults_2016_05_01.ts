import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Network operation result description. */
	export interface NetworkOperationResult {

		/** Network operation result properties. */
		properties?: NetworkOperationResultModel;
	}

	/** Network operation result description. */
	export interface NetworkOperationResultFormProperties {
	}
	export function CreateNetworkOperationResultFormGroup() {
		return new FormGroup<NetworkOperationResultFormProperties>({
		});

	}


	/** Network operation result properties. */
	export interface NetworkOperationResultModel {

		/** List of operation result instances. */
		instances?: Array<string>;

		/** Success or failure of operation. */
		provisioningState?: string | null;
	}

	/** Network operation result properties. */
	export interface NetworkOperationResultModelFormProperties {

		/** Success or failure of operation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateNetworkOperationResultModelFormGroup() {
		return new FormGroup<NetworkOperationResultModelFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of network operation results. */
	export interface NetworkOperationResultList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of network operation results. */
		value?: Array<NetworkOperationResult>;
	}

	/** Pageable list of network operation results. */
	export interface NetworkOperationResultListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNetworkOperationResultListFormGroup() {
		return new FormGroup<NetworkOperationResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all network operation results at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/networkOperationResults
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {NetworkOperationResultList} OK
		 */
		NetworkOperationResults_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<NetworkOperationResultList> {
			return this.http.get<NetworkOperationResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/networkOperationResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the status of a network operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/networkOperationResults/{operation}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} operation Operation identifier.
		 * @param {string} api_version Client API Version.
		 * @return {NetworkOperationResult} OK
		 */
		NetworkOperationResults_Get(subscriptionId: string, resourceGroupName: string, location: string, operation: string, api_version: string): Observable<NetworkOperationResult> {
			return this.http.get<NetworkOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/networkOperationResults/' + (operation == null ? '' : encodeURIComponent(operation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

