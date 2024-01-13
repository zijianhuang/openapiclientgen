import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a storage system resource. */
	export interface StorageSystem {

		/** All properties of a storage system. */
		properties?: StorageSystemModel;
	}

	/** Representation of a storage system resource. */
	export interface StorageSystemFormProperties {
	}
	export function CreateStorageSystemFormGroup() {
		return new FormGroup<StorageSystemFormProperties>({
		});

	}


	/** All properties of a storage system. */
	export interface StorageSystemModel {

		/** Total capacity of the system. */
		totalCapacityGB?: number | null;
	}

	/** All properties of a storage system. */
	export interface StorageSystemModelFormProperties {

		/** Total capacity of the system. */
		totalCapacityGB: FormControl<number | null | undefined>,
	}
	export function CreateStorageSystemModelFormGroup() {
		return new FormGroup<StorageSystemModelFormProperties>({
			totalCapacityGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage systems. */
	export interface StorageSystemList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage systems. */
		value?: Array<StorageSystem>;
	}

	/** Pageable list of storage systems. */
	export interface StorageSystemListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageSystemListFormGroup() {
		return new FormGroup<StorageSystemListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage subsystems for a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageSubSystems
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {StorageSystemList} OK
		 */
		StorageSystems_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<StorageSystemList> {
			return this.http.get<StorageSystemList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageSubSystems&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested storage subsystem.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageSubSystems/{storageSubSystem}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} api_version Client API Version.
		 * @return {StorageSystem} OK
		 */
		StorageSystems_Get(subscriptionId: string, resourceGroupName: string, location: string, storageSubSystem: string, api_version: string): Observable<StorageSystem> {
			return this.http.get<StorageSystem>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

