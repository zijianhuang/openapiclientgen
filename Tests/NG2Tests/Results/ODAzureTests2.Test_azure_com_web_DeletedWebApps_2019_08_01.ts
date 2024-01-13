import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Collection of deleted apps. */
	export interface DeletedWebAppCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		DeletedWebAppCollectionValue: Array<DeletedWebAppCollectionValue>;
	}

	/** Collection of deleted apps. */
	export interface DeletedWebAppCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeletedWebAppCollectionFormGroup() {
		return new FormGroup<DeletedWebAppCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletedWebAppCollectionValue {

		/** DeletedSite resource specific properties */
		properties?: any;
	}
	export interface DeletedWebAppCollectionValueFormProperties {

		/** DeletedSite resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDeletedWebAppCollectionValueFormGroup() {
		return new FormGroup<DeletedWebAppCollectionValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all deleted apps for a subscription.
		 * Description for Get all deleted apps for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeletedWebAppCollection} OK
		 */
		DeletedWebApps_List(subscriptionId: string, api_version: string): Observable<DeletedWebAppCollection> {
			return this.http.get<DeletedWebAppCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/deletedSites&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all deleted apps for a subscription at location
		 * Description for Get all deleted apps for a subscription at location
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeletedWebAppCollection} OK
		 */
		DeletedWebApps_ListByLocation(location: string, subscriptionId: string, api_version: string): Observable<DeletedWebAppCollection> {
			return this.http.get<DeletedWebAppCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/deletedSites&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get deleted app for a subscription at location.
		 * Description for Get deleted app for a subscription at location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites/{deletedSiteId}
		 * @param {string} deletedSiteId The numeric ID of the deleted app, e.g. 12345
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeletedWebApps_GetDeletedWebAppByLocationReturn} OK
		 */
		DeletedWebApps_GetDeletedWebAppByLocation(location: string, deletedSiteId: string, subscriptionId: string, api_version: string): Observable<DeletedWebApps_GetDeletedWebAppByLocationReturn> {
			return this.http.get<DeletedWebApps_GetDeletedWebAppByLocationReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/deletedSites/' + (deletedSiteId == null ? '' : encodeURIComponent(deletedSiteId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface DeletedWebApps_GetDeletedWebAppByLocationReturn {

		/** DeletedSite resource specific properties */
		properties?: any;
	}
	export interface DeletedWebApps_GetDeletedWebAppByLocationReturnFormProperties {

		/** DeletedSite resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDeletedWebApps_GetDeletedWebAppByLocationReturnFormGroup() {
		return new FormGroup<DeletedWebApps_GetDeletedWebAppByLocationReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

}

