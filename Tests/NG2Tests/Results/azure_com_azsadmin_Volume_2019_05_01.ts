import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a volume resource. */
	export interface Volume {

		/** Properties of a volume. */
		properties?: VolumeModel;
	}

	/** Representation of a volume resource. */
	export interface VolumeFormProperties {
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
		});

	}


	/** Properties of a volume. */
	export interface VolumeModel {

		/** Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		action?: string | null;

		/** Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		description?: string | null;

		/** Health status of the volume. */
		healthStatus?: string | null;

		/** Operational status of the volume. */
		operationalStatus?: string | null;

		/**
		 * Remaining capacity in GB of the volume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remainingCapacityGB?: number | null;

		/** Repair status of the volume. Empty if no repair job running, something like 'Running, 90%' when repairing. */
		repairStatus?: string | null;

		/**
		 * Total capacity in GB of the volume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCapacityGB?: number | null;

		/** Volume label. */
		volumeLabel?: string | null;
	}

	/** Properties of a volume. */
	export interface VolumeModelFormProperties {

		/** Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		action: FormControl<string | null | undefined>,

		/** Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		description: FormControl<string | null | undefined>,

		/** Health status of the volume. */
		healthStatus: FormControl<string | null | undefined>,

		/** Operational status of the volume. */
		operationalStatus: FormControl<string | null | undefined>,

		/**
		 * Remaining capacity in GB of the volume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remainingCapacityGB: FormControl<number | null | undefined>,

		/** Repair status of the volume. Empty if no repair job running, something like 'Running, 90%' when repairing. */
		repairStatus: FormControl<string | null | undefined>,

		/**
		 * Total capacity in GB of the volume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCapacityGB: FormControl<number | null | undefined>,

		/** Volume label. */
		volumeLabel: FormControl<string | null | undefined>,
	}
	export function CreateVolumeModelFormGroup() {
		return new FormGroup<VolumeModelFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<string | null | undefined>(undefined),
			operationalStatus: new FormControl<string | null | undefined>(undefined),
			remainingCapacityGB: new FormControl<number | null | undefined>(undefined),
			repairStatus: new FormControl<string | null | undefined>(undefined),
			totalCapacityGB: new FormControl<number | null | undefined>(undefined),
			volumeLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage volumes. */
	export interface VolumeList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage volumes. */
		value?: Array<Volume>;
	}

	/** Pageable list of storage volumes. */
	export interface VolumeListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVolumeListFormGroup() {
		return new FormGroup<VolumeListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage volumes at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/volumes
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {VolumeList} OK
		 */
		Volumes_List(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, storageSubSystem: string, api_version: string, filter: string | null | undefined): Observable<VolumeList> {
			return this.http.get<VolumeList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/volumes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested a storage volume.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/volumes/{volume}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} volume Name of the storage volume.
		 * @param {string} api_version Client API Version.
		 * @return {Volume} OK
		 */
		Volumes_Get(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, storageSubSystem: string, volume: string, api_version: string): Observable<Volume> {
			return this.http.get<Volume>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/volumes/' + (volume == null ? '' : encodeURIComponent(volume)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

