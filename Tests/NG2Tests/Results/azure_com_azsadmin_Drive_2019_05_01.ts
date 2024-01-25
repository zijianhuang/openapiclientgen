import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a drive resource. */
	export interface Drive {

		/** Properties of a drive. */
		properties?: DriveModel;
	}

	/** Representation of a drive resource. */
	export interface DriveFormProperties {
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
		});

	}


	/** Properties of a drive. */
	export interface DriveModel {

		/** Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		action?: string | null;

		/** Total capacity in GB of the drive. */
		capacityGB?: number | null;

		/** Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		description?: string | null;

		/** The firmware version of the drive. */
		firmwareVersion?: string | null;

		/** Health status of the drive. */
		healthStatus?: string | null;

		/** Indicate whether the drive's identification LEDs are active or not. */
		isIndicationEnabled?: boolean | null;

		/** The name of the drive's manufacturer. */
		manufacturer?: string | null;

		/** Media type of the drive. */
		mediaType?: string | null;

		/** Model of the drive. */
		model?: string | null;

		/** Operational status of the drive. */
		operationalStatus?: string | null;

		/** Indicate where the hardware is located. */
		physicalLocation?: string | null;

		/** Serial number of the drive. */
		serialNumber?: string | null;

		/** Node that the drive is physically connected. */
		storageNode?: string | null;

		/** The storage pool where the drive is located. */
		storagePool?: string | null;

		/** Intended usage of the drive. */
		usage?: string | null;
	}

	/** Properties of a drive. */
	export interface DriveModelFormProperties {

		/** Detailed recommended action for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		action: FormControl<string | null | undefined>,

		/** Total capacity in GB of the drive. */
		capacityGB: FormControl<number | null | undefined>,

		/** Detailed description for HealthStatus/OperationalStatus. Empty if HealthStatus/OperationalStatus is Healthy/Ok. */
		description: FormControl<string | null | undefined>,

		/** The firmware version of the drive. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** Health status of the drive. */
		healthStatus: FormControl<string | null | undefined>,

		/** Indicate whether the drive's identification LEDs are active or not. */
		isIndicationEnabled: FormControl<boolean | null | undefined>,

		/** The name of the drive's manufacturer. */
		manufacturer: FormControl<string | null | undefined>,

		/** Media type of the drive. */
		mediaType: FormControl<string | null | undefined>,

		/** Model of the drive. */
		model: FormControl<string | null | undefined>,

		/** Operational status of the drive. */
		operationalStatus: FormControl<string | null | undefined>,

		/** Indicate where the hardware is located. */
		physicalLocation: FormControl<string | null | undefined>,

		/** Serial number of the drive. */
		serialNumber: FormControl<string | null | undefined>,

		/** Node that the drive is physically connected. */
		storageNode: FormControl<string | null | undefined>,

		/** The storage pool where the drive is located. */
		storagePool: FormControl<string | null | undefined>,

		/** Intended usage of the drive. */
		usage: FormControl<string | null | undefined>,
	}
	export function CreateDriveModelFormGroup() {
		return new FormGroup<DriveModelFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			capacityGB: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<string | null | undefined>(undefined),
			isIndicationEnabled: new FormControl<boolean | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			operationalStatus: new FormControl<string | null | undefined>(undefined),
			physicalLocation: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			storageNode: new FormControl<string | null | undefined>(undefined),
			storagePool: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of storage drives. */
	export interface DriveList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of storage drives. */
		value?: Array<Drive>;
	}

	/** Pageable list of storage drives. */
	export interface DriveListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDriveListFormGroup() {
		return new FormGroup<DriveListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all storage drives at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/drives
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {DriveList} OK
		 */
		Drives_List(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, storageSubSystem: string, api_version: string, filter: string | null | undefined): Observable<DriveList> {
			return this.http.get<DriveList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/drives&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested a storage drive.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/scaleUnits/{scaleUnit}/storageSubSystems/{storageSubSystem}/drives/{drive}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} scaleUnit Name of the scale units.
		 * @param {string} storageSubSystem Name of the storage system.
		 * @param {string} drive Name of the storage drive.
		 * @param {string} api_version Client API Version.
		 * @return {Drive} OK
		 */
		Drives_Get(subscriptionId: string, resourceGroupName: string, location: string, scaleUnit: string, storageSubSystem: string, drive: string, api_version: string): Observable<Drive> {
			return this.http.get<Drive>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/scaleUnits/' + (scaleUnit == null ? '' : encodeURIComponent(scaleUnit)) + '/storageSubSystems/' + (storageSubSystem == null ? '' : encodeURIComponent(storageSubSystem)) + '/drives/' + (drive == null ? '' : encodeURIComponent(drive)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

