import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** State of the region in regard to update. */
	export enum RegionUpdateState { Unknown = 0, AppliedSuccessfully = 1, AppliedUpdateAvailableSuccessfully = 2, UpdateInProgress = 3, UpdateFailed = 4 }


	/** Information related to a location's update status. */
	export interface UpdateLocation {

		/** Model which holds information related to update location. */
		properties?: UpdateLocationModel;
	}

	/** Information related to a location's update status. */
	export interface UpdateLocationFormProperties {
	}
	export function CreateUpdateLocationFormGroup() {
		return new FormGroup<UpdateLocationFormProperties>({
		});

	}


	/** Model which holds information related to update location. */
	export interface UpdateLocationModel {

		/** Current OEM version of your AzureStack deployment. */
		currentOemVersion?: string | null;

		/** Current version of your AzureStack deployment. */
		currentVersion?: string | null;

		/** Date of last update. */
		lastUpdated?: Date | null;

		/** State of the region in regard to update. */
		state?: RegionUpdateState | null;
	}

	/** Model which holds information related to update location. */
	export interface UpdateLocationModelFormProperties {

		/** Current OEM version of your AzureStack deployment. */
		currentOemVersion: FormControl<string | null | undefined>,

		/** Current version of your AzureStack deployment. */
		currentVersion: FormControl<string | null | undefined>,

		/** Date of last update. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** State of the region in regard to update. */
		state: FormControl<RegionUpdateState | null | undefined>,
	}
	export function CreateUpdateLocationModelFormGroup() {
		return new FormGroup<UpdateLocationModelFormProperties>({
			currentOemVersion: new FormControl<string | null | undefined>(undefined),
			currentVersion: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<RegionUpdateState | null | undefined>(undefined),
		});

	}


	/** The list of update locations. */
	export interface UpdateLocationList {

		/** The link to get the next page of update locations. */
		nextLink?: string | null;

		/** The list of update locations. */
		value?: Array<UpdateLocation>;
	}

	/** The list of update locations. */
	export interface UpdateLocationListFormProperties {

		/** The link to get the next page of update locations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLocationListFormGroup() {
		return new FormGroup<UpdateLocationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of update locations.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateLocationList} OK
		 */
		UpdateLocations_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<UpdateLocationList> {
			return this.http.get<UpdateLocationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an update location based on name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateLocation} OK
		 */
		UpdateLocations_Get(subscriptionId: string, resourceGroupName: string, updateLocation: string, api_version: string): Observable<UpdateLocation> {
			return this.http.get<UpdateLocation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

