import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a storage system resource. */
	export interface StorageSubSystem {

		/** All properties of a storage subsystem. */
		properties?: StorageSubSystemModel;
	}

	/** Representation of a storage system resource. */
	export interface StorageSubSystemFormProperties {
	}
	export function CreateStorageSubSystemFormGroup() {
		return new FormGroup<StorageSubSystemFormProperties>({
		});

	}


	/** All properties of a storage subsystem. */
	export interface StorageSubSystemModel {

		/** Health status of the subsystem. */
		healthStatus?: string | null;

		/** Operational status of the subsystem. */
		operationalStatus?: string | null;

		/** Rebalance status of the subsystem. */
		rebalanceStatus?: string | null;

		/** Remaining capacity in GB of the subsystem. */
		remainingCapacityGB?: number | null;

		/** Total capacity in GB of the subsystem. */
		totalCapacityGB?: number | null;
	}

	/** All properties of a storage subsystem. */
	export interface StorageSubSystemModelFormProperties {

		/** Health status of the subsystem. */
		healthStatus: FormControl<string | null | undefined>,

		/** Operational status of the subsystem. */
		operationalStatus: FormControl<string | null | undefined>,

		/** Rebalance status of the subsystem. */
		rebalanceStatus: FormControl<string | null | undefined>,

		/** Remaining capacity in GB of the subsystem. */
		remainingCapacityGB: FormControl<number | null | undefined>,

		/** Total capacity in GB of the subsystem. */
		totalCapacityGB: FormControl<number | null | undefined>,
	}
	export function CreateStorageSubSystemModelFormGroup() {
		return new FormGroup<StorageSubSystemModelFormProperties>({
			healthStatus: new FormControl<string | null | undefined>(undefined),
			operationalStatus: new FormControl<string | null | undefined>(undefined),
			rebalanceStatus: new FormControl<string | null | undefined>(undefined),
			remainingCapacityGB: new FormControl<number | null | undefined>(undefined),
			totalCapacityGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage systems. */
	export interface StorageSubSystemList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage systems. */
		value?: Array<StorageSubSystem>;
	}

	/** Pageable list of storage systems. */
	export interface StorageSubSystemListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageSubSystemListFormGroup() {
		return new FormGroup<StorageSubSystemListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage subsystems for a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {StorageSubSystemList} OK
		 */
		StorageSubSystems_List(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, api_version: string, filter: string | null | undefined): Observable<StorageSubSystemList> {
			return this.http.get<StorageSubSystemList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested storage subsystem.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} api_version Client API Version.
		 * @return {StorageSubSystem} OK
		 */
		StorageSubSystems_Get(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, storageSubSystem: string, api_version: string): Observable<StorageSubSystem> {
			return this.http.get<StorageSubSystem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

