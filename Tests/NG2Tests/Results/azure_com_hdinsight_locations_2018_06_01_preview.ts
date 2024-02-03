import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The billing meters. */
	export interface BillingMeters {

		/** The HDInsight meter guid. */
		meter?: string | null;

		/** The virtual machine sizes. */
		meterParameter?: string | null;

		/** The unit of meter, VMHours or CoreHours. */
		unit?: string | null;
	}

	/** The billing meters. */
	export interface BillingMetersFormProperties {

		/** The HDInsight meter guid. */
		meter: FormControl<string | null | undefined>,

		/** The virtual machine sizes. */
		meterParameter: FormControl<string | null | undefined>,

		/** The unit of meter, VMHours or CoreHours. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateBillingMetersFormGroup() {
		return new FormGroup<BillingMetersFormProperties>({
			meter: new FormControl<string | null | undefined>(undefined),
			meterParameter: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The billing resources. */
	export interface BillingResources {

		/** The billing meter information. */
		billingMeters?: Array<BillingMeters>;

		/** The managed disk billing information. */
		diskBillingMeters?: Array<DiskBillingMeters>;

		/** The region or location. */
		region?: string | null;
	}

	/** The billing resources. */
	export interface BillingResourcesFormProperties {

		/** The region or location. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateBillingResourcesFormGroup() {
		return new FormGroup<BillingResourcesFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The disk billing meters. */
	export interface DiskBillingMeters {

		/** The managed disk meter guid. */
		diskRpMeter?: string | null;

		/** The managed disk billing sku, P30 or S30. */
		sku?: string | null;

		/** The managed disk billing tier, Standard or Premium. */
		tier?: DiskBillingMetersTier | null;
	}

	/** The disk billing meters. */
	export interface DiskBillingMetersFormProperties {

		/** The managed disk meter guid. */
		diskRpMeter: FormControl<string | null | undefined>,

		/** The managed disk billing sku, P30 or S30. */
		sku: FormControl<string | null | undefined>,

		/** The managed disk billing tier, Standard or Premium. */
		tier: FormControl<DiskBillingMetersTier | null | undefined>,
	}
	export function CreateDiskBillingMetersFormGroup() {
		return new FormGroup<DiskBillingMetersFormProperties>({
			diskRpMeter: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<DiskBillingMetersTier | null | undefined>(undefined),
		});

	}

	export enum DiskBillingMetersTier { Standard = 'Standard', Premium = 'Premium' }


	/** The response for the operation to get regional billingSpecs for a subscription. */
	export interface BillingResponseListResult {

		/** The billing and managed disk billing resources for a region. */
		billingResources?: Array<BillingResources>;

		/** The virtual machine filtering mode. Effectively this can enabling or disabling the virtual machine sizes in a particular set. */
		vmSizeFilters?: Array<VmSizeCompatibilityFilterV2>;

		/** The virtual machine sizes to include or exclude. */
		vmSizes?: Array<string>;
	}

	/** The response for the operation to get regional billingSpecs for a subscription. */
	export interface BillingResponseListResultFormProperties {
	}
	export function CreateBillingResponseListResultFormGroup() {
		return new FormGroup<BillingResponseListResultFormProperties>({
		});

	}


	/** This class represent a single filter object that defines a multidimensional set. The dimensions of this set are Regions, ClusterFlavors, NodeTypes and ClusterVersions. The constraint should be defined based on the following: FilterMode (Exclude vs Include), VMSizes (the vm sizes in affect of exclusion/inclusion) and the ordering of the Filters. Later filters override previous settings if conflicted. */
	export interface VmSizeCompatibilityFilterV2 {

		/** The list of cluster flavors under the effect of the filter. */
		clusterFlavors?: Array<string>;

		/** The list of cluster versions affected in Major.Minor format. */
		clusterVersions?: Array<string>;

		/** The filtering mode. Effectively this can enabling or disabling the VM sizes in a particular set. */
		filterMode?: VmSizeCompatibilityFilterV2FilterMode | null;

		/** The list of node types affected by the filter. */
		nodeTypes?: Array<string>;

		/** The OSType affected, Windows or Linux. */
		osType?: Array<string>;

		/** The list of regions under the effect of the filter. */
		regions?: Array<string>;

		/** The list of virtual machine sizes to include or exclude. */
		vmSizes?: Array<string>;
	}

	/** This class represent a single filter object that defines a multidimensional set. The dimensions of this set are Regions, ClusterFlavors, NodeTypes and ClusterVersions. The constraint should be defined based on the following: FilterMode (Exclude vs Include), VMSizes (the vm sizes in affect of exclusion/inclusion) and the ordering of the Filters. Later filters override previous settings if conflicted. */
	export interface VmSizeCompatibilityFilterV2FormProperties {

		/** The filtering mode. Effectively this can enabling or disabling the VM sizes in a particular set. */
		filterMode: FormControl<VmSizeCompatibilityFilterV2FilterMode | null | undefined>,
	}
	export function CreateVmSizeCompatibilityFilterV2FormGroup() {
		return new FormGroup<VmSizeCompatibilityFilterV2FormProperties>({
			filterMode: new FormControl<VmSizeCompatibilityFilterV2FilterMode | null | undefined>(undefined),
		});

	}

	export enum VmSizeCompatibilityFilterV2FilterMode { Exclude = 'Exclude', Include = 'Include' }


	/** The Get Capabilities operation response. */
	export interface CapabilitiesResult {

		/** The capability features. */
		features?: Array<string>;

		/** The regional quota capability. */
		quota?: QuotaCapability;

		/** The virtual machine size compatibility features. */
		regions?: {[id: string]: RegionsCapability };

		/** The version capability. */
		versions?: {[id: string]: VersionsCapability };

		/** The virtual machine size compatibility filters. */
		vmSize_filters?: Array<VmSizeCompatibilityFilter>;

		/** The virtual machine sizes. */
		vmSizes?: {[id: string]: VmSizesCapability };
	}

	/** The Get Capabilities operation response. */
	export interface CapabilitiesResultFormProperties {

		/** The virtual machine size compatibility features. */
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


	/** The details about the localizable name of a type of usage. */
	export interface LocalizedName {

		/** The localized name of the used resource. */
		localizedValue?: string | null;

		/** The name of the used resource. */
		value?: string | null;
	}

	/** The details about the localizable name of a type of usage. */
	export interface LocalizedNameFormProperties {

		/** The localized name of the used resource. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the used resource. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedNameFormGroup() {
		return new FormGroup<LocalizedNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The regional quota capability. */
	export interface QuotaCapability {

		/** The number of cores used in the subscription. */
		cores_used?: number | null;

		/** The number of cores that the subscription allowed. */
		max_cores_allowed?: number | null;

		/** The list of region quota capabilities. */
		regionalQuotas?: Array<RegionalQuotaCapability>;
	}

	/** The regional quota capability. */
	export interface QuotaCapabilityFormProperties {

		/** The number of cores used in the subscription. */
		cores_used: FormControl<number | null | undefined>,

		/** The number of cores that the subscription allowed. */
		max_cores_allowed: FormControl<number | null | undefined>,
	}
	export function CreateQuotaCapabilityFormGroup() {
		return new FormGroup<QuotaCapabilityFormProperties>({
			cores_used: new FormControl<number | null | undefined>(undefined),
			max_cores_allowed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The regional quota capacity. */
	export interface RegionalQuotaCapability {

		/** The number of cores available in the region. */
		cores_available?: number | null;

		/** The number of cores used in the region. */
		cores_used?: number | null;

		/** The region name. */
		region_name?: string | null;
	}

	/** The regional quota capacity. */
	export interface RegionalQuotaCapabilityFormProperties {

		/** The number of cores available in the region. */
		cores_available: FormControl<number | null | undefined>,

		/** The number of cores used in the region. */
		cores_used: FormControl<number | null | undefined>,

		/** The region name. */
		region_name: FormControl<string | null | undefined>,
	}
	export function CreateRegionalQuotaCapabilityFormGroup() {
		return new FormGroup<RegionalQuotaCapabilityFormProperties>({
			cores_available: new FormControl<number | null | undefined>(undefined),
			cores_used: new FormControl<number | null | undefined>(undefined),
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


	/** The details about the usage of a particular limited resource. */
	export interface Usage {

		/** The current usage. */
		currentValue?: number | null;

		/** The maximum allowed usage. */
		limit?: number | null;

		/** The details about the localizable name of a type of usage. */
		name?: LocalizedName;

		/** The type of measurement for usage. */
		unit?: string | null;
	}

	/** The details about the usage of a particular limited resource. */
	export interface UsageFormProperties {

		/** The current usage. */
		currentValue: FormControl<number | null | undefined>,

		/** The maximum allowed usage. */
		limit: FormControl<number | null | undefined>,

		/** The type of measurement for usage. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for the operation to get regional usages for a subscription. */
	export interface UsagesListResult {

		/** The list of usages. */
		value?: Array<Usage>;
	}

	/** The response for the operation to get regional usages for a subscription. */
	export interface UsagesListResultFormProperties {
	}
	export function CreateUsagesListResultFormGroup() {
		return new FormGroup<UsagesListResultFormProperties>({
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
		 * Lists the billingSpecs for the specified subscription and location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/billingSpecs
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The Azure location (region) for which to make the request.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {BillingResponseListResult} OK response definition.
		 */
		Locations_ListBillingSpecs(subscriptionId: string, location: string, api_version: string): Observable<BillingResponseListResult> {
			return this.http.get<BillingResponseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HDInsight/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/billingSpecs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the capabilities for the specified location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/capabilities
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The Azure location (region) for which to make the request.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {CapabilitiesResult} OK response definition.
		 */
		Locations_GetCapabilities(subscriptionId: string, location: string, api_version: string): Observable<CapabilitiesResult> {
			return this.http.get<CapabilitiesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HDInsight/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/capabilities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the usages for the specified location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/usages
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The Azure location (region) for which to make the request.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {UsagesListResult} OK response definition.
		 */
		Locations_ListUsages(subscriptionId: string, location: string, api_version: string): Observable<UsagesListResult> {
			return this.http.get<UsagesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HDInsight/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

