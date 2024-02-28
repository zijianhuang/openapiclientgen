import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a storage pool resource. */
	export interface StoragePool {

		/** All properties of a storage pool. */
		properties?: StoragePoolModel;
	}

	/** Representation of a storage pool resource. */
	export interface StoragePoolFormProperties {
	}
	export function CreateStoragePoolFormGroup() {
		return new FormGroup<StoragePoolFormProperties>({
		});

	}


	/** All properties of a storage pool. */
	export interface StoragePoolModel {

		/**
		 * Amount of space in the storage pool in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGB?: number | null;
	}

	/** All properties of a storage pool. */
	export interface StoragePoolModelFormProperties {

		/**
		 * Amount of space in the storage pool in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGB: FormControl<number | null | undefined>,
	}
	export function CreateStoragePoolModelFormGroup() {
		return new FormGroup<StoragePoolModelFormProperties>({
			sizeGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage pools. */
	export interface StoragePoolList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage pools. */
		value?: Array<StoragePool>;
	}

	/** Pageable list of storage pools. */
	export interface StoragePoolListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStoragePoolListFormGroup() {
		return new FormGroup<StoragePoolListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage pools for a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageSubSystems/{storageSubSystem}/storagePools
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {StoragePoolList} OK
		 */
		StoragePools_List(subscriptionId: string, resourceGroupName: string, location: string, storageSubSystem: string, api_version: string, filter: string | null | undefined): Observable<StoragePoolList> {
			return this.http.get<StoragePoolList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/storagePools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested a storage pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/storageSubSystems/{storageSubSystem}/storagePools/{storagePool}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} storagePool Storage pool name.
		 * @param {string} api_version Client API Version.
		 * @return {StoragePool} OK
		 */
		StoragePools_Get(subscriptionId: string, resourceGroupName: string, location: string, storageSubSystem: string, storagePool: string, api_version: string): Observable<StoragePool> {
			return this.http.get<StoragePool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/storagePools/' + (storagePool == null ? '' : encodeURIComponent(storagePool)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

