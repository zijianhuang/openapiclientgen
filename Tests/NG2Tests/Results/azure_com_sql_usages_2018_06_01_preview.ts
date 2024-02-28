import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM Usage Name */
	export interface Name {

		/** Usage name localized value. */
		localizedValue?: string | null;

		/** Usage name value */
		value?: string | null;
	}

	/** ARM Usage Name */
	export interface NameFormProperties {

		/** Usage name localized value. */
		localizedValue: FormControl<string | null | undefined>,

		/** Usage name value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM usage. */
	export interface Usage {

		/**
		 * Usage current value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue?: number | null;

		/** Resource ID. */
		id?: string | null;

		/**
		 * Usage limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** ARM Usage Name */
		name?: Name;

		/**
		 * Usage requested limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedLimit?: number | null;

		/** Resource type. */
		type?: string | null;

		/** Usage unit. */
		unit?: string | null;
	}

	/** ARM usage. */
	export interface UsageFormProperties {

		/**
		 * Usage current value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: FormControl<number | null | undefined>,

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * Usage limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Usage requested limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedLimit: FormControl<number | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,

		/** Usage unit. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			requestedLimit: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of usages. */
	export interface UsageListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Usage>;
	}

	/** A list of usages. */
	export interface UsageListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageListResultFormGroup() {
		return new FormGroup<UsageListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all instance pool usage metrics
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/usages
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The name of the instance pool to be retrieved.
		 * @param {boolean} expandChildren Optional request parameter to include managed instance usages within the instance pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {UsageListResult} Successfully retrieved the instance pool usages.
		 */
		Usages_ListByInstancePool(resourceGroupName: string, instancePoolName: string, expandChildren: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<UsageListResult> {
			return this.http.get<UsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '/usages&expandChildren=' + expandChildren + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

