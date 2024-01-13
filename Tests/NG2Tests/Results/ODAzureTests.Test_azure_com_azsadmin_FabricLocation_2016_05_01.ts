import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Fabric Location resource. */
	export interface FabricLocation {

		/** All properties of a fabric location resource. */
		properties?: FabricLocationModel;
	}

	/** Fabric Location resource. */
	export interface FabricLocationFormProperties {
	}
	export function CreateFabricLocationFormGroup() {
		return new FormGroup<FabricLocationFormProperties>({
		});

	}


	/** All properties of a fabric location resource. */
	export interface FabricLocationModel {

		/** Name of the running exclusive admin operation. */
		exclusiveAdminOperationName?: string | null;

		/** Value for whether an exclusive admin operation is running. */
		exclusiveAdminOperationRunning?: boolean | null;

		/** First external IP address of the DNS server. */
		externalDNSIPAddress01?: string | null;

		/** Second external IP Address of the DNS server. */
		externalDNSIPAddress02?: string | null;

		/** The IP addresses of the privileged endpoints. */
		pepIpAddresses?: Array<string>;

		/** Last known stamp stop time for the shut down action plan. */
		shutDownActionPlanEndTime?: Date | null;

		/** Last known stamp start time for the shut down action plan */
		shutDownActionPlanStartTime?: Date | null;

		/** The deployment id of the stamp. */
		stampInformationId?: string | null;

		/** Last known stamp stop time for the start up action plan. */
		startUpActionPlanEndTime?: Date | null;

		/** Last known stamp start time for the start up action plan. */
		startUpActionPlanStartTime?: Date | null;

		/** The IP address of the time server. */
		timeServer?: string | null;
	}

	/** All properties of a fabric location resource. */
	export interface FabricLocationModelFormProperties {

		/** Name of the running exclusive admin operation. */
		exclusiveAdminOperationName: FormControl<string | null | undefined>,

		/** Value for whether an exclusive admin operation is running. */
		exclusiveAdminOperationRunning: FormControl<boolean | null | undefined>,

		/** First external IP address of the DNS server. */
		externalDNSIPAddress01: FormControl<string | null | undefined>,

		/** Second external IP Address of the DNS server. */
		externalDNSIPAddress02: FormControl<string | null | undefined>,

		/** Last known stamp stop time for the shut down action plan. */
		shutDownActionPlanEndTime: FormControl<Date | null | undefined>,

		/** Last known stamp start time for the shut down action plan */
		shutDownActionPlanStartTime: FormControl<Date | null | undefined>,

		/** The deployment id of the stamp. */
		stampInformationId: FormControl<string | null | undefined>,

		/** Last known stamp stop time for the start up action plan. */
		startUpActionPlanEndTime: FormControl<Date | null | undefined>,

		/** Last known stamp start time for the start up action plan. */
		startUpActionPlanStartTime: FormControl<Date | null | undefined>,

		/** The IP address of the time server. */
		timeServer: FormControl<string | null | undefined>,
	}
	export function CreateFabricLocationModelFormGroup() {
		return new FormGroup<FabricLocationModelFormProperties>({
			exclusiveAdminOperationName: new FormControl<string | null | undefined>(undefined),
			exclusiveAdminOperationRunning: new FormControl<boolean | null | undefined>(undefined),
			externalDNSIPAddress01: new FormControl<string | null | undefined>(undefined),
			externalDNSIPAddress02: new FormControl<string | null | undefined>(undefined),
			shutDownActionPlanEndTime: new FormControl<Date | null | undefined>(undefined),
			shutDownActionPlanStartTime: new FormControl<Date | null | undefined>(undefined),
			stampInformationId: new FormControl<string | null | undefined>(undefined),
			startUpActionPlanEndTime: new FormControl<Date | null | undefined>(undefined),
			startUpActionPlanStartTime: new FormControl<Date | null | undefined>(undefined),
			timeServer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of fabric locations. */
	export interface FabricLocationList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of fabric locations. */
		value?: Array<FabricLocation>;
	}

	/** Pageable list of fabric locations. */
	export interface FabricLocationListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFabricLocationListFormGroup() {
		return new FormGroup<FabricLocationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all fabric locations.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {FabricLocationList} OK
		 */
		FabricLocations_List(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined): Observable<FabricLocationList> {
			return this.http.get<FabricLocationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested fabric location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{fabricLocation}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} fabricLocation Fabric location.
		 * @param {string} api_version Client API Version.
		 * @return {FabricLocation} OK
		 */
		FabricLocations_Get(subscriptionId: string, resourceGroupName: string, fabricLocation: string, api_version: string): Observable<FabricLocation> {
			return this.http.get<FabricLocation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (fabricLocation == null ? '' : encodeURIComponent(fabricLocation)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

