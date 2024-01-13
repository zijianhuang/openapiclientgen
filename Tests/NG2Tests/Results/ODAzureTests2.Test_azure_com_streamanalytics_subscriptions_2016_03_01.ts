import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The base sub-resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The base sub-resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the current quota for the subscription. */
	export interface SubscriptionQuota {

		/** Describes the properties of the quota. */
		properties?: any;
	}

	/** Describes the current quota for the subscription. */
	export interface SubscriptionQuotaFormProperties {

		/** Describes the properties of the quota. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSubscriptionQuotaFormGroup() {
		return new FormGroup<SubscriptionQuotaFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Result of the GetQuotas operation. It contains a list of quotas for the subscription in a particular region. */
	export interface SubscriptionQuotasListResult {

		/** List of quotas for the subscription in a particular region. */
		value?: Array<SubscriptionQuota>;
	}

	/** Result of the GetQuotas operation. It contains a list of quotas for the subscription in a particular region. */
	export interface SubscriptionQuotasListResultFormProperties {
	}
	export function CreateSubscriptionQuotasListResultFormGroup() {
		return new FormGroup<SubscriptionQuotasListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the subscription's current quota information in a particular region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/quotas
		 * @param {string} location The region in which to retrieve the subscription's quota information. You can find out which regions Azure Stream Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SubscriptionQuotasListResult} Successfully retrieved the subscription's quota information in the specified region.
		 */
		Subscriptions_ListQuotas(location: string, api_version: string, subscriptionId: string): Observable<SubscriptionQuotasListResult> {
			return this.http.get<SubscriptionQuotasListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StreamAnalytics/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/quotas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

