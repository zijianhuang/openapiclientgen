import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Compute operation result description. */
	export interface ComputeOperationResult {

		/** Compute operation result properties. */
		properties?: ComputeOperationResultModel;
	}

	/** Compute operation result description. */
	export interface ComputeOperationResultFormProperties {
	}
	export function CreateComputeOperationResultFormGroup() {
		return new FormGroup<ComputeOperationResultFormProperties>({
		});

	}


	/** Compute operation result properties. */
	export interface ComputeOperationResultModel {

		/** List of operation result instances. */
		instances?: Array<string>;

		/** Success or failure of operation. */
		provisioningState?: string | null;
	}

	/** Compute operation result properties. */
	export interface ComputeOperationResultModelFormProperties {

		/** Success or failure of operation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateComputeOperationResultModelFormGroup() {
		return new FormGroup<ComputeOperationResultModelFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of compute operation results. */
	export interface ComputeOperationResultList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of compute operation results. */
		value?: Array<ComputeOperationResult>;
	}

	/** Pageable list of compute operation results. */
	export interface ComputeOperationResultListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComputeOperationResultListFormGroup() {
		return new FormGroup<ComputeOperationResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all compute operation results at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/computeOperationResults
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {ComputeOperationResultList} OK
		 */
		ComputeOperationResults_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<ComputeOperationResultList> {
			return this.http.get<ComputeOperationResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/computeOperationResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the status of a compute operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/computeOperationResults/{operation}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} operation Operation identifier.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeOperationResult} OK
		 */
		ComputeOperationResults_Get(subscriptionId: string, resourceGroupName: string, location: string, operation: string, api_version: string): Observable<ComputeOperationResult> {
			return this.http.get<ComputeOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/computeOperationResults/' + (operation == null ? '' : encodeURIComponent(operation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

