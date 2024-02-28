import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Get Capabilities operation response. */
	export interface CapabilitiesResult {

		/** The capabilty features. */
		features?: Array<string>;

		/** The regional quota capability. */
		quota?: QuotaCapability;

		/** The virtual machine size compatibilty features. */
		regions?: {[id: string]: RegionsCapability };

		/** The version capability. */
		versions?: {[id: string]: VersionsCapability };

		/** The virtual machine size compatibilty filters. */
		vmSize_filters?: Array<VmSizeCompatibilityFilter>;

		/** The virtual machine sizes. */
		vmSizes?: {[id: string]: VmSizesCapability };
	}

	/** The Get Capabilities operation response. */
	export interface CapabilitiesResultFormProperties {

		/** The virtual machine size compatibilty features. */
		regions: FormControl<{[id: string]: RegionsCapability } | null | undefined>,

		/** The version capability. */
		versions: FormControl<{[id: string]: VersionsCapability } | null | undefined>,

		/** The virtual machine sizes. */
		vmSizes: FormControl<{[id: string]: VmSizesCapability } | null | undefined>,
	}
	export function CreateCapabilitiesResultFormGroup() {
		return new FormGroup<CapabilitiesResultFormProperties>({
			regions: new FormControl<{[id: string]: RegionsCapability } | null | undefined>(undefined),
			versions: new FormControl<{[id: string]: VersionsCapability } | null | undefined>(undefined),
			vmSizes: new FormControl<{[id: string]: VmSizesCapability } | null | undefined>(undefined),
		});

	}


	/** The virtual machine type compatibility filter. */
	export interface VmSizeCompatibilityFilter {

		/** The list of cluster types available. */
		ClusterFlavors?: Array<string>;

		/** The list of cluster versions. */
		ClusterVersions?: Array<string>;

		/** The mode for the filter. */
		FilterMode?: string | null;

		/** The list of node types. */
		NodeTypes?: Array<string>;

		/** The list of regions. */
		Regions?: Array<string>;

		/** The list of virtual machine sizes. */
		vmsizes?: Array<string>;
	}

	/** The virtual machine type compatibility filter. */
	export interface VmSizeCompatibilityFilterFormProperties {

		/** The mode for the filter. */
		FilterMode: FormControl<string | null | undefined>,
	}
	export function CreateVmSizeCompatibilityFilterFormGroup() {
		return new FormGroup<VmSizeCompatibilityFilterFormProperties>({
			FilterMode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The regional quota capability. */
	export interface QuotaCapability {

		/** The list of region quota capabilities. */
		regionalQuotas?: Array<RegionalQuotaCapability>;
	}

	/** The regional quota capability. */
	export interface QuotaCapabilityFormProperties {
	}
	export function CreateQuotaCapabilityFormGroup() {
		return new FormGroup<QuotaCapabilityFormProperties>({
		});

	}


	/** The regional quota capacity. */
	export interface RegionalQuotaCapability {

		/**
		 * The number of courses available in the region.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cores_available?: string | null;

		/**
		 * The number of cores used in the region.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cores_used?: string | null;

		/** The region name. */
		region_name?: string | null;
	}

	/** The regional quota capacity. */
	export interface RegionalQuotaCapabilityFormProperties {

		/**
		 * The number of courses available in the region.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cores_available: FormControl<string | null | undefined>,

		/**
		 * The number of cores used in the region.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cores_used: FormControl<string | null | undefined>,

		/** The region name. */
		region_name: FormControl<string | null | undefined>,
	}
	export function CreateRegionalQuotaCapabilityFormGroup() {
		return new FormGroup<RegionalQuotaCapabilityFormProperties>({
			cores_available: new FormControl<string | null | undefined>(undefined),
			cores_used: new FormControl<string | null | undefined>(undefined),
			region_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The regions capability. */
	export interface RegionsCapability {

		/** The list of region capabilities. */
		available?: Array<string>;
	}

	/** The regions capability. */
	export interface RegionsCapabilityFormProperties {
	}
	export function CreateRegionsCapabilityFormGroup() {
		return new FormGroup<RegionsCapabilityFormProperties>({
		});

	}


	/** The version properties. */
	export interface VersionSpec {

		/** The component version property. */
		componentVersions?: {[id: string]: string };

		/** The display name */
		displayName?: string | null;

		/** The friendly name */
		friendlyName?: string | null;

		/** Whether or not the version is the default version. */
		isDefault?: string | null;
	}

	/** The version properties. */
	export interface VersionSpecFormProperties {

		/** The component version property. */
		componentVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** The display name */
		displayName: FormControl<string | null | undefined>,

		/** The friendly name */
		friendlyName: FormControl<string | null | undefined>,

		/** Whether or not the version is the default version. */
		isDefault: FormControl<string | null | undefined>,
	}
	export function CreateVersionSpecFormGroup() {
		return new FormGroup<VersionSpecFormProperties>({
			componentVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The version capability. */
	export interface VersionsCapability {

		/** The list of version capabilities. */
		available?: Array<VersionSpec>;
	}

	/** The version capability. */
	export interface VersionsCapabilityFormProperties {
	}
	export function CreateVersionsCapabilityFormGroup() {
		return new FormGroup<VersionsCapabilityFormProperties>({
		});

	}


	/** The virtual machine sizes capability. */
	export interface VmSizesCapability {

		/** The list of virtual machine size capabilities. */
		available?: Array<string>;
	}

	/** The virtual machine sizes capability. */
	export interface VmSizesCapabilityFormProperties {
	}
	export function CreateVmSizesCapabilityFormGroup() {
		return new FormGroup<VmSizesCapabilityFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the capabilities for the specified location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities
		 * @param {string} location The location to get capabilities for.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {CapabilitiesResult} OK response definition.
		 */
		Location_GetCapabilities(location: string, api_version: string, subscriptionId: string): Observable<CapabilitiesResult> {
			return this.http.get<CapabilitiesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HDInsight/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/capabilities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

