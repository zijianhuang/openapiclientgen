import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The location of the responsible ASC of the specific subscription (home region). For each subscription there is only one responsible location. The location in the response should be used to read or write other resources in ASC according to their ID.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {Locations_ListReturn} OK
		 */
		Locations_List(api_version: string, subscriptionId: string): Observable<Locations_ListReturn> {
			return this.http.get<Locations_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Details of a specific location
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @return {Locations_GetReturn} OK
		 */
		Locations_Get(api_version: string, subscriptionId: string, ascLocation: string): Observable<Locations_GetReturn> {
			return this.http.get<Locations_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface Locations_ListReturn {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		Locations_ListReturnValue?: Array<Locations_ListReturnValue>;
	}
	export interface Locations_ListReturnFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLocations_ListReturnFormGroup() {
		return new FormGroup<Locations_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Locations_ListReturnValue {

		/** An empty set of properties */
		properties?: string | null;
	}
	export interface Locations_ListReturnValueFormProperties {

		/** An empty set of properties */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateLocations_ListReturnValueFormGroup() {
		return new FormGroup<Locations_ListReturnValueFormProperties>({
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Locations_GetReturn {

		/** An empty set of properties */
		properties?: string | null;
	}
	export interface Locations_GetReturnFormProperties {

		/** An empty set of properties */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateLocations_GetReturnFormGroup() {
		return new FormGroup<Locations_GetReturnFormProperties>({
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

}

