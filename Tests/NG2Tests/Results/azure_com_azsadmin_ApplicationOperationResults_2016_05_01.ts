import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Application operation result description. */
	export interface ApplicationOperationResult {

		/** Application operation result properties. */
		properties?: ApplicationOperationResultModel;
	}

	/** Application operation result description. */
	export interface ApplicationOperationResultFormProperties {
	}
	export function CreateApplicationOperationResultFormGroup() {
		return new FormGroup<ApplicationOperationResultFormProperties>({
		});

	}


	/** Application operation result properties. */
	export interface ApplicationOperationResultModel {

		/** List of operation result instances. */
		instances?: Array<string>;

		/** Success or failure of operation. */
		provisioningState?: string | null;
	}

	/** Application operation result properties. */
	export interface ApplicationOperationResultModelFormProperties {

		/** Success or failure of operation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateApplicationOperationResultModelFormGroup() {
		return new FormGroup<ApplicationOperationResultModelFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of application operation results. */
	export interface ApplicationOperationResultList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of application operation results. */
		value?: Array<ApplicationOperationResult>;
	}

	/** Pageable list of application operation results. */
	export interface ApplicationOperationResultListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationOperationResultListFormGroup() {
		return new FormGroup<ApplicationOperationResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all application operation results at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/applicationOperationResults
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {ApplicationOperationResultList} OK
		 */
		ApplicationOperationResults_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<ApplicationOperationResultList> {
			return this.http.get<ApplicationOperationResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/applicationOperationResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the status of an application operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/applicationOperationResults/{operation}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} operation Operation identifier.
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationOperationResult} OK
		 */
		ApplicationOperationResults_Get(subscriptionId: string, resourceGroupName: string, location: string, operation: string, api_version: string): Observable<ApplicationOperationResult> {
			return this.http.get<ApplicationOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/applicationOperationResults/' + (operation == null ? '' : encodeURIComponent(operation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

