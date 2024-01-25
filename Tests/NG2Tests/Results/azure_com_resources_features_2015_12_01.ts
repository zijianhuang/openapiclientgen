import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** List of previewed features. */
	export interface FeatureOperationsListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of features. */
		value?: Array<FeatureResult>;
	}

	/** List of previewed features. */
	export interface FeatureOperationsListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFeatureOperationsListResultFormGroup() {
		return new FormGroup<FeatureOperationsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Previewed feature information. */
	export interface FeatureResult {

		/** The resource ID of the feature. */
		id?: string | null;

		/** The name of the feature. */
		name?: string | null;

		/** Information about feature. */
		properties?: FeatureProperties;

		/** The resource type of the feature. */
		type?: string | null;
	}

	/** Previewed feature information. */
	export interface FeatureResultFormProperties {

		/** The resource ID of the feature. */
		id: FormControl<string | null | undefined>,

		/** The name of the feature. */
		name: FormControl<string | null | undefined>,

		/** The resource type of the feature. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFeatureResultFormGroup() {
		return new FormGroup<FeatureResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about feature. */
	export interface FeatureProperties {

		/** The registration state of the feature for the subscription. */
		state?: string | null;
	}

	/** Information about feature. */
	export interface FeaturePropertiesFormProperties {

		/** The registration state of the feature for the subscription. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateFeaturePropertiesFormGroup() {
		return new FormGroup<FeaturePropertiesFormProperties>({
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Microsoft.Features operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Features operation */
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


	/** Result of the request to list Microsoft.Features operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Features operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Microsoft.Features operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Features REST API operations.
		 * Get providers/Microsoft.Features/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		ListOperations(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Features/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the preview features that are available through AFEC for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Features/features
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FeatureOperationsListResult} OK - Returns an array containing metadata for each feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type.
		 */
		Features_ListAll(api_version: string, subscriptionId: string): Observable<FeatureOperationsListResult> {
			return this.http.get<FeatureOperationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Features/features?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the preview features in a provider namespace that are available through AFEC for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features
		 * @param {string} resourceProviderNamespace The namespace of the resource provider for getting features.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FeatureOperationsListResult} OK - Returns an array containing metadata for each feature in the resource provider. The metadata includes the name of the feature, the registration state, the resource ID, and resource type.
		 */
		Features_List(resourceProviderNamespace: string, api_version: string, subscriptionId: string): Observable<FeatureOperationsListResult> {
			return this.http.get<FeatureOperationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Features/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/features&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the preview feature with the specified name.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}
		 * @param {string} resourceProviderNamespace The resource provider namespace for the feature.
		 * @param {string} featureName The name of the feature to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FeatureResult} OK - Returns metadata about the feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type.
		 */
		Features_Get(resourceProviderNamespace: string, featureName: string, api_version: string, subscriptionId: string): Observable<FeatureResult> {
			return this.http.get<FeatureResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Features/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/features/' + (featureName == null ? '' : encodeURIComponent(featureName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Registers the preview feature for the subscription.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/register
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} featureName The name of the feature to register.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FeatureResult} OK - Returns metadata about the registered feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type.
		 */
		Features_Register(resourceProviderNamespace: string, featureName: string, api_version: string, subscriptionId: string): Observable<FeatureResult> {
			return this.http.post<FeatureResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Features/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/features/' + (featureName == null ? '' : encodeURIComponent(featureName)) + '/register&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

