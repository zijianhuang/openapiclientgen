import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Status of the compute operation. */
	export interface OperationStatus {

		/** The state of the operation. */
		properties?: ProvisioningStateModel;
	}

	/** Status of the compute operation. */
	export interface OperationStatusFormProperties {
	}
	export function CreateOperationStatusFormGroup() {
		return new FormGroup<OperationStatusFormProperties>({
		});

	}


	/** The state of the operation. */
	export interface ProvisioningStateModel {

		/** The state of the operation. */
		provisioningState?: string | null;
	}

	/** The state of the operation. */
	export interface ProvisioningStateModelFormProperties {

		/** The state of the operation. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningStateModelFormGroup() {
		return new FormGroup<ProvisioningStateModelFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the status of a compute fabric operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/System.{location}/providers/{provider}/fabricLocations/{location}/computeOperationResults/{computeOperationResult}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} provider Name of the provider.
		 * @param {string} computeOperationResult Id of a compute fabric operation.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ComputeFabricOperations_Get(subscriptionId: string, location: string, provider: string, computeOperationResult: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/System.' + (location == null ? '' : encodeURIComponent(location)) + '/providers/' + (provider == null ? '' : encodeURIComponent(provider)) + '/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/computeOperationResults/' + (computeOperationResult == null ? '' : encodeURIComponent(computeOperationResult)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the status of a network fabric operation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/System.{location}/providers/{provider}/fabricLocations/{location}/networkOperationResults/{networkOperationResult}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} provider Name of the provider.
		 * @param {string} networkOperationResult Id of a network fabric operation.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		NetworkFabricOperations_Get(subscriptionId: string, location: string, provider: string, networkOperationResult: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/System.' + (location == null ? '' : encodeURIComponent(location)) + '/providers/' + (provider == null ? '' : encodeURIComponent(provider)) + '/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/networkOperationResults/' + (networkOperationResult == null ? '' : encodeURIComponent(networkOperationResult)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

