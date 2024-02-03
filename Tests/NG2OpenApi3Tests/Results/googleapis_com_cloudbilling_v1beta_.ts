import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies the regions for Cache Fill. */
	export interface CacheFillRegions {

		/** The destination region for cache fill. */
		destinationRegion?: CacheFillRegionsDestinationRegion | null;

		/** The source region for cache fill. */
		sourceRegion?: CacheFillRegionsSourceRegion | null;
	}

	/** Specifies the regions for Cache Fill. */
	export interface CacheFillRegionsFormProperties {

		/** The destination region for cache fill. */
		destinationRegion: FormControl<CacheFillRegionsDestinationRegion | null | undefined>,

		/** The source region for cache fill. */
		sourceRegion: FormControl<CacheFillRegionsSourceRegion | null | undefined>,
	}
	export function CreateCacheFillRegionsFormGroup() {
		return new FormGroup<CacheFillRegionsFormProperties>({
			destinationRegion: new FormControl<CacheFillRegionsDestinationRegion | null | undefined>(undefined),
			sourceRegion: new FormControl<CacheFillRegionsSourceRegion | null | undefined>(undefined),
		});

	}

	export enum CacheFillRegionsDestinationRegion { CACHE_FILL_DESTINATION_REGION_UNSPECIFIED = 'CACHE_FILL_DESTINATION_REGION_UNSPECIFIED', CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC = 'CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC', CACHE_FILL_DESTINATION_REGION_EUROPE = 'CACHE_FILL_DESTINATION_REGION_EUROPE', CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA = 'CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA', CACHE_FILL_DESTINATION_REGION_OCEANIA = 'CACHE_FILL_DESTINATION_REGION_OCEANIA', CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA = 'CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA', CACHE_FILL_DESTINATION_REGION_CHINA = 'CACHE_FILL_DESTINATION_REGION_CHINA', CACHE_FILL_DESTINATION_REGION_OTHERS = 'CACHE_FILL_DESTINATION_REGION_OTHERS' }

	export enum CacheFillRegionsSourceRegion { CACHE_FILL_SOURCE_REGION_UNSPECIFIED = 'CACHE_FILL_SOURCE_REGION_UNSPECIFIED', CACHE_FILL_REGION_ASIA_PACIFIC = 'CACHE_FILL_REGION_ASIA_PACIFIC', CACHE_FILL_SOURCE_REGION_EUROPE = 'CACHE_FILL_SOURCE_REGION_EUROPE', CACHE_FILL_SOURCE_REGION_NORTH_AMERICA = 'CACHE_FILL_SOURCE_REGION_NORTH_AMERICA', CACHE_FILL_SOURCE_REGION_OCEANIA = 'CACHE_FILL_SOURCE_REGION_OCEANIA', CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA = 'CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA' }


	/** Specifies usage for Cloud CDN Data Transfer. */
	export interface CloudCdnEgressWorkload {

		/** The destination for the cache data transfer. */
		cacheEgressDestination?: CloudCdnEgressWorkloadCacheEgressDestination | null;

		/** An amount of usage over a time frame. */
		cacheEgressRate?: Usage;
	}

	/** Specifies usage for Cloud CDN Data Transfer. */
	export interface CloudCdnEgressWorkloadFormProperties {

		/** The destination for the cache data transfer. */
		cacheEgressDestination: FormControl<CloudCdnEgressWorkloadCacheEgressDestination | null | undefined>,
	}
	export function CreateCloudCdnEgressWorkloadFormGroup() {
		return new FormGroup<CloudCdnEgressWorkloadFormProperties>({
			cacheEgressDestination: new FormControl<CloudCdnEgressWorkloadCacheEgressDestination | null | undefined>(undefined),
		});

	}

	export enum CloudCdnEgressWorkloadCacheEgressDestination { CACHE_EGRESS_DESTINATION_UNSPECIFIED = 'CACHE_EGRESS_DESTINATION_UNSPECIFIED', CACHE_EGRESS_DESTINATION_ASIA_PACIFIC = 'CACHE_EGRESS_DESTINATION_ASIA_PACIFIC', CACHE_EGRESS_DESTINATION_CHINA = 'CACHE_EGRESS_DESTINATION_CHINA', CACHE_EGRESS_DESTINATION_EUROPE = 'CACHE_EGRESS_DESTINATION_EUROPE', CACHE_EGRESS_DESTINATION_NORTH_AMERICA = 'CACHE_EGRESS_DESTINATION_NORTH_AMERICA', CACHE_EGRESS_DESTINATION_OCEANIA = 'CACHE_EGRESS_DESTINATION_OCEANIA', CACHE_EGRESS_DESTINATION_LATIN_AMERICA = 'CACHE_EGRESS_DESTINATION_LATIN_AMERICA', CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS = 'CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS' }


	/** An amount of usage over a time frame. */
	export interface Usage {

		/** A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours. */
		usageRateTimeline?: UsageRateTimeline;
	}

	/** An amount of usage over a time frame. */
	export interface UsageFormProperties {
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
		});

	}


	/** A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours. */
	export interface UsageRateTimeline {

		/** The unit for the usage rate in each timeline entry. If you provide an incorrect unit for an instance, the correct unit is provided in the error message. The supported units are a subset of [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard: * **Time units (TIME-UNIT)** * `s` second * `min` minute * `h` hour * `d` day * `wk` week * `mo` month * `yr` year * `ms` millisecond * `us` microsecond * `ns` nanosecond * **Basic storage units (BASIC-STORAGE-UNIT)** * `bit` bit * `By` byte * **Count units (COUNT-UNIT)** * `count` count * **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For example: `kBy/{email}` or `MiBy/10ms`. * `.` multiplication or composition (as an infix operator). For example: `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: ``` Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; UNIT = TIME-UNIT | STORAGE-UNIT | DATA-UNIT | COUNT-UNIT Annotation = "{" NAME "}" ; ``` Examples: * Request per second: `1/s` or `{requests}/s` * GibiBytes: `GiBy` * GibiBytes * seconds: `GiBy.s` */
		unit?: string | null;

		/** The timeline entries. Each entry has a start time and usage rate. The start time specifies the effective time of the usage rate. The entries must be sorted by start time in an increasing order. */
		usageRateTimelineEntries?: Array<UsageRateTimelineEntry>;
	}

	/** A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours. */
	export interface UsageRateTimelineFormProperties {

		/** The unit for the usage rate in each timeline entry. If you provide an incorrect unit for an instance, the correct unit is provided in the error message. The supported units are a subset of [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard: * **Time units (TIME-UNIT)** * `s` second * `min` minute * `h` hour * `d` day * `wk` week * `mo` month * `yr` year * `ms` millisecond * `us` microsecond * `ns` nanosecond * **Basic storage units (BASIC-STORAGE-UNIT)** * `bit` bit * `By` byte * **Count units (COUNT-UNIT)** * `count` count * **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For example: `kBy/{email}` or `MiBy/10ms`. * `.` multiplication or composition (as an infix operator). For example: `GBy.d` or `k{watt}.h`. The grammar for a unit is as follows: ``` Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; UNIT = TIME-UNIT | STORAGE-UNIT | DATA-UNIT | COUNT-UNIT Annotation = "{" NAME "}" ; ``` Examples: * Request per second: `1/s` or `{requests}/s` * GibiBytes: `GiBy` * GibiBytes * seconds: `GiBy.s` */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUsageRateTimelineFormGroup() {
		return new FormGroup<UsageRateTimelineFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval. */
	export interface UsageRateTimelineEntry {

		/** Represents a point in time. */
		effectiveTime?: EstimationTimePoint;

		/** The usage rate. */
		usageRate?: number | null;
	}

	/** A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval. */
	export interface UsageRateTimelineEntryFormProperties {

		/** The usage rate. */
		usageRate: FormControl<number | null | undefined>,
	}
	export function CreateUsageRateTimelineEntryFormGroup() {
		return new FormGroup<UsageRateTimelineEntryFormProperties>({
			usageRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a point in time. */
	export interface EstimationTimePoint {

		/** The point in time, relative to the start of the time frame covered by the cost estimate. */
		estimationTimeFrameOffset?: string | null;
	}

	/** Represents a point in time. */
	export interface EstimationTimePointFormProperties {

		/** The point in time, relative to the start of the time frame covered by the cost estimate. */
		estimationTimeFrameOffset: FormControl<string | null | undefined>,
	}
	export function CreateEstimationTimePointFormGroup() {
		return new FormGroup<EstimationTimePointFormProperties>({
			estimationTimeFrameOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies usage for Cloud CDN resources. */
	export interface CloudCdnWorkload {

		/** The source service for the cache fill. */
		cacheFillOriginService?: CloudCdnWorkloadCacheFillOriginService | null;

		/** An amount of usage over a time frame. */
		cacheFillRate?: Usage;

		/** Specifies the regions for Cache Fill. */
		cacheFillRegions?: CacheFillRegions;

		/** An amount of usage over a time frame. */
		cacheLookUpRate?: Usage;
	}

	/** Specifies usage for Cloud CDN resources. */
	export interface CloudCdnWorkloadFormProperties {

		/** The source service for the cache fill. */
		cacheFillOriginService: FormControl<CloudCdnWorkloadCacheFillOriginService | null | undefined>,
	}
	export function CreateCloudCdnWorkloadFormGroup() {
		return new FormGroup<CloudCdnWorkloadFormProperties>({
			cacheFillOriginService: new FormControl<CloudCdnWorkloadCacheFillOriginService | null | undefined>(undefined),
		});

	}

	export enum CloudCdnWorkloadCacheFillOriginService { CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED = 'CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED', CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET = 'CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET', CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE = 'CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE' }


	/** Includes the estimate for Interconnect Data Transfer only. To specify usage for data transfer between VMs and internet end-points, use the Standard Tier Internet Data Transfer interface. */
	export interface CloudInterconnectEgressWorkload {

		/** An amount of usage over a time frame. */
		egressRate?: Usage;

		/** Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). These are the Interconnect Data Transfer charges. */
		interconnectConnectionLocation?: CloudInterconnectEgressWorkloadInterconnectConnectionLocation | null;
	}

	/** Includes the estimate for Interconnect Data Transfer only. To specify usage for data transfer between VMs and internet end-points, use the Standard Tier Internet Data Transfer interface. */
	export interface CloudInterconnectEgressWorkloadFormProperties {

		/** Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). These are the Interconnect Data Transfer charges. */
		interconnectConnectionLocation: FormControl<CloudInterconnectEgressWorkloadInterconnectConnectionLocation | null | undefined>,
	}
	export function CreateCloudInterconnectEgressWorkloadFormGroup() {
		return new FormGroup<CloudInterconnectEgressWorkloadFormProperties>({
			interconnectConnectionLocation: new FormControl<CloudInterconnectEgressWorkloadInterconnectConnectionLocation | null | undefined>(undefined),
		});

	}

	export enum CloudInterconnectEgressWorkloadInterconnectConnectionLocation { INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED = 'INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED', INTERCONNECT_CONNECTION_LOCATION_ASIA = 'INTERCONNECT_CONNECTION_LOCATION_ASIA', INTERCONNECT_CONNECTION_LOCATION_EUROPE = 'INTERCONNECT_CONNECTION_LOCATION_EUROPE', INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA = 'INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA', INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA = 'INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA', INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA = 'INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA' }


	/** Specifies usage for Cloud Interconnect resources. */
	export interface CloudInterconnectWorkload {

		/** VLAN attachment used for interconnect. */
		interconnectAttachments?: Array<VlanAttachment>;

		/** VLAN attachment type */
		interconnectType?: CloudInterconnectWorkloadInterconnectType | null;

		/** Interconnect circuit link type. */
		linkType?: CloudInterconnectWorkloadLinkType | null;

		/** An amount of usage over a time frame. */
		provisionedLinkCount?: Usage;
	}

	/** Specifies usage for Cloud Interconnect resources. */
	export interface CloudInterconnectWorkloadFormProperties {

		/** VLAN attachment type */
		interconnectType: FormControl<CloudInterconnectWorkloadInterconnectType | null | undefined>,

		/** Interconnect circuit link type. */
		linkType: FormControl<CloudInterconnectWorkloadLinkType | null | undefined>,
	}
	export function CreateCloudInterconnectWorkloadFormGroup() {
		return new FormGroup<CloudInterconnectWorkloadFormProperties>({
			interconnectType: new FormControl<CloudInterconnectWorkloadInterconnectType | null | undefined>(undefined),
			linkType: new FormControl<CloudInterconnectWorkloadLinkType | null | undefined>(undefined),
		});

	}


	/** VLAN attachment for Cloud Interconnect. */
	export interface VlanAttachment {

		/** Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps. */
		bandwidth?: VlanAttachmentBandwidth | null;

		/** An amount of usage over a time frame. */
		vlanCount?: Usage;
	}

	/** VLAN attachment for Cloud Interconnect. */
	export interface VlanAttachmentFormProperties {

		/** Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps. */
		bandwidth: FormControl<VlanAttachmentBandwidth | null | undefined>,
	}
	export function CreateVlanAttachmentFormGroup() {
		return new FormGroup<VlanAttachmentFormProperties>({
			bandwidth: new FormControl<VlanAttachmentBandwidth | null | undefined>(undefined),
		});

	}

	export enum VlanAttachmentBandwidth { BANDWIDTH_UNSPECIFIED = 'BANDWIDTH_UNSPECIFIED', BANDWIDTH_BPS_50M = 'BANDWIDTH_BPS_50M', BANDWIDTH_BPS_100M = 'BANDWIDTH_BPS_100M', BANDWIDTH_BPS_200M = 'BANDWIDTH_BPS_200M', BANDWIDTH_BPS_300M = 'BANDWIDTH_BPS_300M', BANDWIDTH_BPS_400M = 'BANDWIDTH_BPS_400M', BANDWIDTH_BPS_500M = 'BANDWIDTH_BPS_500M', BANDWIDTH_BPS_1G = 'BANDWIDTH_BPS_1G', BANDWIDTH_BPS_2G = 'BANDWIDTH_BPS_2G', BANDWIDTH_BPS_5G = 'BANDWIDTH_BPS_5G', BANDWIDTH_BPS_10G = 'BANDWIDTH_BPS_10G', BANDWIDTH_BPS_20G = 'BANDWIDTH_BPS_20G', BANDWIDTH_BPS_50G = 'BANDWIDTH_BPS_50G' }

	export enum CloudInterconnectWorkloadInterconnectType { INTERCONNECT_TYPE_UNSPECIFIED = 'INTERCONNECT_TYPE_UNSPECIFIED', INTERCONNECT_TYPE_DEDICATED = 'INTERCONNECT_TYPE_DEDICATED', INTERCONNECT_TYPE_PARTNER = 'INTERCONNECT_TYPE_PARTNER' }

	export enum CloudInterconnectWorkloadLinkType { LINK_TYPE_UNSPECIFIED = 'LINK_TYPE_UNSPECIFIED', LINK_TYPE_ETHERNET_10G_LR = 'LINK_TYPE_ETHERNET_10G_LR', LINK_TYPE_ETHERNET_100G_LR = 'LINK_TYPE_ETHERNET_100G_LR' }


	/** Specification of a network type. Network data transfer within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network data transfer within Google Cloud and the general network usage. */
	export interface CloudStorageEgressWorkload {

		/** Where the data is sent to. */
		destinationContinent?: CloudStorageEgressWorkloadDestinationContinent | null;

		/** An amount of usage over a time frame. */
		egressRate?: Usage;

		/** Where the data comes from. */
		sourceContinent?: CloudStorageEgressWorkloadSourceContinent | null;
	}

	/** Specification of a network type. Network data transfer within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network data transfer within Google Cloud and the general network usage. */
	export interface CloudStorageEgressWorkloadFormProperties {

		/** Where the data is sent to. */
		destinationContinent: FormControl<CloudStorageEgressWorkloadDestinationContinent | null | undefined>,

		/** Where the data comes from. */
		sourceContinent: FormControl<CloudStorageEgressWorkloadSourceContinent | null | undefined>,
	}
	export function CreateCloudStorageEgressWorkloadFormGroup() {
		return new FormGroup<CloudStorageEgressWorkloadFormProperties>({
			destinationContinent: new FormControl<CloudStorageEgressWorkloadDestinationContinent | null | undefined>(undefined),
			sourceContinent: new FormControl<CloudStorageEgressWorkloadSourceContinent | null | undefined>(undefined),
		});

	}

	export enum CloudStorageEgressWorkloadDestinationContinent { DESTINATION_CONTINENT_UNSPECIFIED = 'DESTINATION_CONTINENT_UNSPECIFIED', DESTINATION_CONTINENT_ASIA_PACIFIC = 'DESTINATION_CONTINENT_ASIA_PACIFIC', DESTINATION_CONTINENT_AUTRALIA = 'DESTINATION_CONTINENT_AUTRALIA', DESTINATION_CONTINENT_EUROPE = 'DESTINATION_CONTINENT_EUROPE', DESTINATION_CONTINENT_NORTH_AMERICA = 'DESTINATION_CONTINENT_NORTH_AMERICA', DESTINATION_CONTINENT_SOUTH_AMERICA = 'DESTINATION_CONTINENT_SOUTH_AMERICA' }

	export enum CloudStorageEgressWorkloadSourceContinent { SOURCE_CONTINENT_UNSPECIFIED = 'SOURCE_CONTINENT_UNSPECIFIED', SOURCE_CONTINENT_ASIA_PACIFIC = 'SOURCE_CONTINENT_ASIA_PACIFIC', SOURCE_CONTINENT_AUSTRALIA = 'SOURCE_CONTINENT_AUSTRALIA', SOURCE_CONTINENT_EUROPE = 'SOURCE_CONTINENT_EUROPE', SOURCE_CONTINENT_NORTH_AMERICA = 'SOURCE_CONTINENT_NORTH_AMERICA', SOURCE_CONTINENT_SOUTH_AMERICA = 'SOURCE_CONTINENT_SOUTH_AMERICA' }


	/** Specifies usage of Cloud Storage resources. */
	export interface CloudStorageWorkload {

		/** An amount of usage over a time frame. */
		dataRetrieval?: Usage;

		/** An amount of usage over a time frame. */
		dataStored?: Usage;

		/** Area contains dual locations. */
		dualRegion?: DualRegional;

		/** Area contains multiple locations. */
		multiRegion?: MultiRegional;

		/** An amount of usage over a time frame. */
		operationA?: Usage;

		/** An amount of usage over a time frame. */
		operationB?: Usage;

		/** Area contains only one location. */
		region?: Regional;

		/** The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" and "nearline". */
		storageClass?: string | null;
	}

	/** Specifies usage of Cloud Storage resources. */
	export interface CloudStorageWorkloadFormProperties {

		/** The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" and "nearline". */
		storageClass: FormControl<string | null | undefined>,
	}
	export function CreateCloudStorageWorkloadFormGroup() {
		return new FormGroup<CloudStorageWorkloadFormProperties>({
			storageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Area contains dual locations. */
	export interface DualRegional {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "asia1" for dual region. */
		name?: string | null;
	}

	/** Area contains dual locations. */
	export interface DualRegionalFormProperties {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "asia1" for dual region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDualRegionalFormGroup() {
		return new FormGroup<DualRegionalFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Area contains multiple locations. */
	export interface MultiRegional {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "us" for multi-region. */
		name?: string | null;
	}

	/** Area contains multiple locations. */
	export interface MultiRegionalFormProperties {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "us" for multi-region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMultiRegionalFormGroup() {
		return new FormGroup<MultiRegionalFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Area contains only one location. */
	export interface Regional {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations). For example: "us-central1" for region. */
		name?: string | null;
	}

	/** Area contains only one location. */
	export interface RegionalFormProperties {

		/** The [location name](https://cloud.google.com/storage/docs/locations#available-locations). For example: "us-central1" for region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionalFormGroup() {
		return new FormGroup<RegionalFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts. */
	export interface Commitment {

		/** Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long. */
		name?: string | null;

		/** Specifies a resource-based committed use discount (CUD). */
		vmResourceBasedCud?: VmResourceBasedCud;
	}

	/** Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts. */
	export interface CommitmentFormProperties {

		/** Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentFormGroup() {
		return new FormGroup<CommitmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a resource-based committed use discount (CUD). */
	export interface VmResourceBasedCud {

		/** Specification of a set of guest accelerators attached to a machine. */
		guestAccelerator?: GuestAccelerator;

		/** The machine series for CUD. For example: "n1" for general purpose N1 machine type commitments. "n2" for general purpose N2 machine type commitments. "e2" for general purpose E2 machine type commitments. "n2d" for general purpose N2D machine type commitments. "t2d" for general purpose T2D machine type commitments. "c2"/"c2d" for compute-optimized commitments. "m1"/"m2" for the memory-optimized commitments. "a2' for the accelerator-optimized commitments. */
		machineSeries?: string | null;

		/** Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). */
		memorySizeGb?: number | null;

		/** Commitment usage plan. */
		plan?: VmResourceBasedCudPlan | null;

		/** The region where the VM runs. For example: "us-central1" */
		region?: string | null;

		/** The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd. */
		virtualCpuCount?: string | null;
	}

	/** Specifies a resource-based committed use discount (CUD). */
	export interface VmResourceBasedCudFormProperties {

		/** The machine series for CUD. For example: "n1" for general purpose N1 machine type commitments. "n2" for general purpose N2 machine type commitments. "e2" for general purpose E2 machine type commitments. "n2d" for general purpose N2D machine type commitments. "t2d" for general purpose T2D machine type commitments. "c2"/"c2d" for compute-optimized commitments. "m1"/"m2" for the memory-optimized commitments. "a2' for the accelerator-optimized commitments. */
		machineSeries: FormControl<string | null | undefined>,

		/** Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). */
		memorySizeGb: FormControl<number | null | undefined>,

		/** Commitment usage plan. */
		plan: FormControl<VmResourceBasedCudPlan | null | undefined>,

		/** The region where the VM runs. For example: "us-central1" */
		region: FormControl<string | null | undefined>,

		/** The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd. */
		virtualCpuCount: FormControl<string | null | undefined>,
	}
	export function CreateVmResourceBasedCudFormGroup() {
		return new FormGroup<VmResourceBasedCudFormProperties>({
			machineSeries: new FormControl<string | null | undefined>(undefined),
			memorySizeGb: new FormControl<number | null | undefined>(undefined),
			plan: new FormControl<VmResourceBasedCudPlan | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			virtualCpuCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of a set of guest accelerators attached to a machine. */
	export interface GuestAccelerator {

		/** The number of the guest accelerator cards exposed to each instance. */
		acceleratorCount?: string | null;

		/** The type of the guest accelerator cards. For example: "nvidia-tesla-t4". */
		acceleratorType?: string | null;
	}

	/** Specification of a set of guest accelerators attached to a machine. */
	export interface GuestAcceleratorFormProperties {

		/** The number of the guest accelerator cards exposed to each instance. */
		acceleratorCount: FormControl<string | null | undefined>,

		/** The type of the guest accelerator cards. For example: "nvidia-tesla-t4". */
		acceleratorType: FormControl<string | null | undefined>,
	}
	export function CreateGuestAcceleratorFormGroup() {
		return new FormGroup<GuestAcceleratorFormProperties>({
			acceleratorCount: new FormControl<string | null | undefined>(undefined),
			acceleratorType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VmResourceBasedCudPlan { COMMITMENT_PLAN_UNSPECIFIED = 'COMMITMENT_PLAN_UNSPECIFIED', TWELVE_MONTH = 'TWELVE_MONTH', THIRTY_SIX_MONTH = 'THIRTY_SIX_MONTH' }


	/** Estimated cost for a commitment. */
	export interface CommitmentCostEstimate {

		/** An estimated cost. */
		commitmentTotalCostEstimate?: CostEstimate;

		/** The name of the commitment, as specified in the `CostScenario`. */
		name?: string | null;

		/** Estimated costs for each SKU in the commitment. */
		skuCostEstimates?: Array<SkuCostEstimate>;
	}

	/** Estimated cost for a commitment. */
	export interface CommitmentCostEstimateFormProperties {

		/** The name of the commitment, as specified in the `CostScenario`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentCostEstimateFormGroup() {
		return new FormGroup<CommitmentCostEstimateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An estimated cost. */
	export interface CostEstimate {

		/** The estimated credits applied. */
		creditEstimates?: Array<CreditEstimate>;

		/** Represents an amount of money with its currency type. */
		netCostEstimate?: Money;

		/** Represents an amount of money with its currency type. */
		preCreditCostEstimate?: Money;
	}

	/** An estimated cost. */
	export interface CostEstimateFormProperties {
	}
	export function CreateCostEstimateFormGroup() {
		return new FormGroup<CostEstimateFormProperties>({
		});

	}


	/** An estimated credit applied to the costs on a SKU. */
	export interface CreditEstimate {

		/** Represents an amount of money with its currency type. */
		creditAmount?: Money;

		/** The credit description. */
		creditDescription?: string | null;

		/** The credit type. */
		creditType?: string | null;
	}

	/** An estimated credit applied to the costs on a SKU. */
	export interface CreditEstimateFormProperties {

		/** The credit description. */
		creditDescription: FormControl<string | null | undefined>,

		/** The credit type. */
		creditType: FormControl<string | null | undefined>,
	}
	export function CreateCreditEstimateFormGroup() {
		return new FormGroup<CreditEstimateFormProperties>({
			creditDescription: new FormControl<string | null | undefined>(undefined),
			creditType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Estimated cost for usage on a SKU. */
	export interface SkuCostEstimate {

		/** An estimated cost. */
		costEstimate?: CostEstimate;

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" More information about the SKU can be found in the `skus` field of the `CostEstimationResult`. */
		sku?: string | null;

		/** The amount of usage on this SKU. */
		usageAmount?: number | null;

		/** The unit for the usage on this SKU. */
		usageUnit?: string | null;
	}

	/** Estimated cost for usage on a SKU. */
	export interface SkuCostEstimateFormProperties {

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" More information about the SKU can be found in the `skus` field of the `CostEstimationResult`. */
		sku: FormControl<string | null | undefined>,

		/** The amount of usage on this SKU. */
		usageAmount: FormControl<number | null | undefined>,

		/** The unit for the usage on this SKU. */
		usageUnit: FormControl<string | null | undefined>,
	}
	export function CreateSkuCostEstimateFormGroup() {
		return new FormGroup<SkuCostEstimateFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
			usageAmount: new FormControl<number | null | undefined>(undefined),
			usageUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specificies usage of a set of identical compute VM instances. */
	export interface ComputeVmWorkload {

		/** Defines whether each instance has confidential compute enabled. */
		enableConfidentialCompute?: boolean | null;

		/** Specification of a set of guest accelerators attached to a machine. */
		guestAccelerator?: GuestAccelerator;

		/** An amount of usage over a time frame. */
		instancesRunning?: Usage;

		/** Premium image licenses used by each instance. */
		licenses?: Array<string>;

		/** Specification of machine series, memory, and number of vCPUs. */
		machineType?: MachineType;

		/** Persistent disks attached to each instance. Must include a boot disk. */
		persistentDisks?: Array<PersistentDisk>;

		/** Defines whether each instance is preemptible. */
		preemptible?: boolean | null;

		/** The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: "us-central1". */
		region?: string | null;
	}

	/** Specificies usage of a set of identical compute VM instances. */
	export interface ComputeVmWorkloadFormProperties {

		/** Defines whether each instance has confidential compute enabled. */
		enableConfidentialCompute: FormControl<boolean | null | undefined>,

		/** Defines whether each instance is preemptible. */
		preemptible: FormControl<boolean | null | undefined>,

		/** The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: "us-central1". */
		region: FormControl<string | null | undefined>,
	}
	export function CreateComputeVmWorkloadFormGroup() {
		return new FormGroup<ComputeVmWorkloadFormProperties>({
			enableConfidentialCompute: new FormControl<boolean | null | undefined>(undefined),
			preemptible: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of machine series, memory, and number of vCPUs. */
	export interface MachineType {

		/** Specification of a custom machine type. */
		customMachineType?: CustomMachineType;

		/** Specification of a predefined machine type. */
		predefinedMachineType?: PredefinedMachineType;
	}

	/** Specification of machine series, memory, and number of vCPUs. */
	export interface MachineTypeFormProperties {
	}
	export function CreateMachineTypeFormGroup() {
		return new FormGroup<MachineTypeFormProperties>({
		});

	}


	/** Specification of a custom machine type. */
	export interface CustomMachineType {

		/** Required. The machine series. Only certain [machine series](https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types) support custom configurations. For example: "n1". */
		machineSeries?: string | null;

		/** Required. Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). Each [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison) has limitations on allowed values for the ratio of memory-to-vCPU count. */
		memorySizeGb?: number | null;

		/** Required. The number of vCPUs. The allowed values depend on the [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison). */
		virtualCpuCount?: string | null;
	}

	/** Specification of a custom machine type. */
	export interface CustomMachineTypeFormProperties {

		/** Required. The machine series. Only certain [machine series](https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types) support custom configurations. For example: "n1". */
		machineSeries: FormControl<string | null | undefined>,

		/** Required. Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). Each [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison) has limitations on allowed values for the ratio of memory-to-vCPU count. */
		memorySizeGb: FormControl<number | null | undefined>,

		/** Required. The number of vCPUs. The allowed values depend on the [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison). */
		virtualCpuCount: FormControl<string | null | undefined>,
	}
	export function CreateCustomMachineTypeFormGroup() {
		return new FormGroup<CustomMachineTypeFormProperties>({
			machineSeries: new FormControl<string | null | undefined>(undefined),
			memorySizeGb: new FormControl<number | null | undefined>(undefined),
			virtualCpuCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of a predefined machine type. */
	export interface PredefinedMachineType {

		/** The [machine type](https://cloud.google.com/compute/docs/machine-types). For example: "n1-standard1". */
		machineType?: string | null;
	}

	/** Specification of a predefined machine type. */
	export interface PredefinedMachineTypeFormProperties {

		/** The [machine type](https://cloud.google.com/compute/docs/machine-types). For example: "n1-standard1". */
		machineType: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedMachineTypeFormGroup() {
		return new FormGroup<PredefinedMachineTypeFormProperties>({
			machineType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of a persistent disk attached to a VM. */
	export interface PersistentDisk {

		/** An amount of usage over a time frame. */
		diskSize?: Usage;

		/** The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: "pd-standard". */
		diskType?: string | null;

		/** An amount of usage over a time frame. */
		provisionedIops?: Usage;

		/** The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified. */
		scope?: PersistentDiskScope | null;
	}

	/** Specification of a persistent disk attached to a VM. */
	export interface PersistentDiskFormProperties {

		/** The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: "pd-standard". */
		diskType: FormControl<string | null | undefined>,

		/** The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified. */
		scope: FormControl<PersistentDiskScope | null | undefined>,
	}
	export function CreatePersistentDiskFormGroup() {
		return new FormGroup<PersistentDiskFormProperties>({
			diskType: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<PersistentDiskScope | null | undefined>(undefined),
		});

	}

	export enum PersistentDiskScope { SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED', SCOPE_ZONAL = 'SCOPE_ZONAL', SCOPE_REGIONAL = 'SCOPE_REGIONAL' }


	/** The result of a estimating the costs of a `CostScenario`. */
	export interface CostEstimationResult {

		/** Required. The ISO 4217 currency code for the cost estimate. */
		currencyCode?: string | null;

		/** Required. Estimated costs for each idealized month of a `CostScenario`. */
		segmentCostEstimates?: Array<SegmentCostEstimate>;

		/** Required. Information about SKUs used in the estimate. */
		skus?: Array<Sku>;
	}

	/** The result of a estimating the costs of a `CostScenario`. */
	export interface CostEstimationResultFormProperties {

		/** Required. The ISO 4217 currency code for the cost estimate. */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateCostEstimationResultFormGroup() {
		return new FormGroup<CostEstimationResultFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workload cost estimates for a single time segment. */
	export interface SegmentCostEstimate {

		/** Estimated costs for each commitment. */
		commitmentCostEstimates?: Array<CommitmentCostEstimate>;

		/** Represents a point in time. */
		segmentStartTime?: EstimationTimePoint;

		/** An estimated cost. */
		segmentTotalCostEstimate?: CostEstimate;

		/** Estimated costs for each workload. */
		workloadCostEstimates?: Array<WorkloadCostEstimate>;
	}

	/** Workload cost estimates for a single time segment. */
	export interface SegmentCostEstimateFormProperties {
	}
	export function CreateSegmentCostEstimateFormGroup() {
		return new FormGroup<SegmentCostEstimateFormProperties>({
		});

	}


	/** Estimated cost for a workload. */
	export interface WorkloadCostEstimate {

		/** The name of the workload, as specified in the `CostScenario`. */
		name?: string | null;

		/** Estimated costs for each SKU in the workload. */
		skuCostEstimates?: Array<SkuCostEstimate>;

		/** An estimated cost. */
		workloadTotalCostEstimate?: CostEstimate;
	}

	/** Estimated cost for a workload. */
	export interface WorkloadCostEstimateFormProperties {

		/** The name of the workload, as specified in the `CostScenario`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadCostEstimateFormGroup() {
		return new FormGroup<WorkloadCostEstimateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about SKUs appearing in the cost estimate. */
	export interface Sku {

		/** The display name for the SKU. Example: A2 Instance Core running in Americas */
		displayName?: string | null;

		/** A timeline of prices for a SKU in chronological order. Note: The API currently only supports using a constant price for the entire estimation time frame so this list will contain a single value. */
		prices?: Array<Price>;

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" */
		sku?: string | null;
	}

	/** Information about SKUs appearing in the cost estimate. */
	export interface SkuFormProperties {

		/** The display name for the SKU. Example: A2 Instance Core running in Americas */
		displayName: FormControl<string | null | undefined>,

		/** The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The price of a SKU at a point int time. */
	export interface Price {

		/** Represents a point in time. */
		effectiveTime?: EstimationTimePoint;

		/** The type of price. Possible values: "RATE" */
		priceType?: string | null;

		/** A SKU price consisting of tiered rates. */
		rate?: Rate;
	}

	/** The price of a SKU at a point int time. */
	export interface PriceFormProperties {

		/** The type of price. Possible values: "RATE" */
		priceType: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			priceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SKU price consisting of tiered rates. */
	export interface Rate {

		/** The service tiers. */
		tiers?: Array<RateTier>;

		/** The SKU's pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show 'By'. The `start_amount` field in each tier will be in this unit. */
		unit?: string | null;

		/** The SKU's count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000. */
		unitCount?: number | null;
	}

	/** A SKU price consisting of tiered rates. */
	export interface RateFormProperties {

		/** The SKU's pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show 'By'. The `start_amount` field in each tier will be in this unit. */
		unit: FormControl<string | null | undefined>,

		/** The SKU's count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000. */
		unitCount: FormControl<number | null | undefined>,
	}
	export function CreateRateFormGroup() {
		return new FormGroup<RateFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			unitCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pricing details for a service tier. */
	export interface RateTier {

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** The magnitude of usage in which the tier interval begins. Example: "From 100 GiBi the price is $1 per byte" implies `start_amount` = 100 */
		startAmount?: number | null;
	}

	/** Pricing details for a service tier. */
	export interface RateTierFormProperties {

		/** The magnitude of usage in which the tier interval begins. Example: "From 100 GiBi the price is $1 per byte" implies `start_amount` = 100 */
		startAmount: FormControl<number | null | undefined>,
	}
	export function CreateRateTierFormGroup() {
		return new FormGroup<RateTierFormProperties>({
			startAmount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options. */
	export interface CostScenario {

		/** New commitments to estimate the costs for. The cost of the commitments will be included in the estimate result and discounts the commitment entitles will be included in the workload cost estimates. A maximum of 100 workloads can be provided. */
		commitments?: Array<Commitment>;

		/** Configuration for a CostScenario. Specifies how costs are calculated. */
		scenarioConfig?: ScenarioConfig;

		/** The Google Cloud usage whose costs are estimated. A maximum of 100 workloads can be provided. */
		workloads?: Array<Workload>;
	}

	/** Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options. */
	export interface CostScenarioFormProperties {
	}
	export function CreateCostScenarioFormGroup() {
		return new FormGroup<CostScenarioFormProperties>({
		});

	}


	/** Configuration for a CostScenario. Specifies how costs are calculated. */
	export interface ScenarioConfig {

		/** Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months. */
		estimateDuration?: string | null;
	}

	/** Configuration for a CostScenario. Specifies how costs are calculated. */
	export interface ScenarioConfigFormProperties {

		/** Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months. */
		estimateDuration: FormControl<string | null | undefined>,
	}
	export function CreateScenarioConfigFormGroup() {
		return new FormGroup<ScenarioConfigFormProperties>({
			estimateDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed. */
	export interface Workload {

		/** Specifies usage for Cloud CDN Data Transfer. */
		cloudCdnEgressWorkload?: CloudCdnEgressWorkload;

		/** Specifies usage for Cloud CDN resources. */
		cloudCdnWorkload?: CloudCdnWorkload;

		/** Includes the estimate for Interconnect Data Transfer only. To specify usage for data transfer between VMs and internet end-points, use the Standard Tier Internet Data Transfer interface. */
		cloudInterconnectEgressWorkload?: CloudInterconnectEgressWorkload;

		/** Specifies usage for Cloud Interconnect resources. */
		cloudInterconnectWorkload?: CloudInterconnectWorkload;

		/** Specification of a network type. Network data transfer within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network data transfer within Google Cloud and the general network usage. */
		cloudStorageEgressWorkload?: CloudStorageEgressWorkload;

		/** Specifies usage of Cloud Storage resources. */
		cloudStorageWorkload?: CloudStorageWorkload;

		/** Specificies usage of a set of identical compute VM instances. */
		computeVmWorkload?: ComputeVmWorkload;

		/** Required. A name for this workload. All workloads in a `CostScenario` must have a unique `name`. Each `name` may be at most 128 characters long. */
		name?: string | null;

		/** Specify a Premium Tier Internet Data Transfer networking workload. */
		premiumTierEgressWorkload?: PremiumTierEgressWorkload;

		/** Specify Standard Tier Internet Data Transfer. */
		standardTierEgressWorkload?: StandardTierEgressWorkload;

		/** Specify VM to VM data transfer. */
		vmToVmEgressWorkload?: VmToVmEgressWorkload;
	}

	/** Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed. */
	export interface WorkloadFormProperties {

		/** Required. A name for this workload. All workloads in a `CostScenario` must have a unique `name`. Each `name` may be at most 128 characters long. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadFormGroup() {
		return new FormGroup<WorkloadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify a Premium Tier Internet Data Transfer networking workload. */
	export interface PremiumTierEgressWorkload {

		/** Where the data is sent to. */
		destinationContinent?: PremiumTierEgressWorkloadDestinationContinent | null;

		/** An amount of usage over a time frame. */
		egressRate?: Usage;

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data comes from. */
		sourceRegion?: string | null;
	}

	/** Specify a Premium Tier Internet Data Transfer networking workload. */
	export interface PremiumTierEgressWorkloadFormProperties {

		/** Where the data is sent to. */
		destinationContinent: FormControl<PremiumTierEgressWorkloadDestinationContinent | null | undefined>,

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data comes from. */
		sourceRegion: FormControl<string | null | undefined>,
	}
	export function CreatePremiumTierEgressWorkloadFormGroup() {
		return new FormGroup<PremiumTierEgressWorkloadFormProperties>({
			destinationContinent: new FormControl<PremiumTierEgressWorkloadDestinationContinent | null | undefined>(undefined),
			sourceRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PremiumTierEgressWorkloadDestinationContinent { DESTINATION_CONTINENT_UNSPECIFIED = 'DESTINATION_CONTINENT_UNSPECIFIED', DESTINATION_CONTINENT_ASIA_PACIFIC = 'DESTINATION_CONTINENT_ASIA_PACIFIC', DESTINATION_CONTINENT_AFRICA = 'DESTINATION_CONTINENT_AFRICA', DESTINATION_CONTINENT_NORTH_AMERICA = 'DESTINATION_CONTINENT_NORTH_AMERICA', DESTINATION_CONTINENT_AUTRALIA = 'DESTINATION_CONTINENT_AUTRALIA', DESTINATION_CONTINENT_CENTRAL_AMERICA = 'DESTINATION_CONTINENT_CENTRAL_AMERICA', DESTINATION_CONTINENT_CHINA = 'DESTINATION_CONTINENT_CHINA', DESTINATION_CONTINENT_EASTERN_EUROPE = 'DESTINATION_CONTINENT_EASTERN_EUROPE', DESTINATION_CONTINENT_WESTERN_EUROPE = 'DESTINATION_CONTINENT_WESTERN_EUROPE', DESTINATION_CONTINENT_EMEA = 'DESTINATION_CONTINENT_EMEA', DESTINATION_CONTINENT_INDIA = 'DESTINATION_CONTINENT_INDIA', DESTINATION_CONTINENT_MIDDLE_EAST = 'DESTINATION_CONTINENT_MIDDLE_EAST', DESTINATION_CONTINENT_SOUTH_AMERICA = 'DESTINATION_CONTINENT_SOUTH_AMERICA' }


	/** Specify Standard Tier Internet Data Transfer. */
	export interface StandardTierEgressWorkload {

		/** An amount of usage over a time frame. */
		egressRate?: Usage;

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. */
		sourceRegion?: string | null;
	}

	/** Specify Standard Tier Internet Data Transfer. */
	export interface StandardTierEgressWorkloadFormProperties {

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. */
		sourceRegion: FormControl<string | null | undefined>,
	}
	export function CreateStandardTierEgressWorkloadFormGroup() {
		return new FormGroup<StandardTierEgressWorkloadFormProperties>({
			sourceRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify VM to VM data transfer. */
	export interface VmToVmEgressWorkload {

		/** Data transfer between two regions. */
		interRegionEgress?: InterRegionEgress;

		/** Data transfer within the same region. When the source region and destination region are in the same zone, using internal IP addresses, there isn't any charge for data transfer. */
		intraRegionEgress?: IntraRegionEgress;
	}

	/** Specify VM to VM data transfer. */
	export interface VmToVmEgressWorkloadFormProperties {
	}
	export function CreateVmToVmEgressWorkloadFormGroup() {
		return new FormGroup<VmToVmEgressWorkloadFormProperties>({
		});

	}


	/** Data transfer between two regions. */
	export interface InterRegionEgress {

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred to. */
		destinationRegion?: string | null;

		/** An amount of usage over a time frame. */
		egressRate?: Usage;

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. */
		sourceRegion?: string | null;
	}

	/** Data transfer between two regions. */
	export interface InterRegionEgressFormProperties {

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred to. */
		destinationRegion: FormControl<string | null | undefined>,

		/** Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from. */
		sourceRegion: FormControl<string | null | undefined>,
	}
	export function CreateInterRegionEgressFormGroup() {
		return new FormGroup<InterRegionEgressFormProperties>({
			destinationRegion: new FormControl<string | null | undefined>(undefined),
			sourceRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data transfer within the same region. When the source region and destination region are in the same zone, using internal IP addresses, there isn't any charge for data transfer. */
	export interface IntraRegionEgress {

		/** An amount of usage over a time frame. */
		egressRate?: Usage;
	}

	/** Data transfer within the same region. When the source region and destination region are in the same zone, using internal IP addresses, there isn't any charge for data transfer. */
	export interface IntraRegionEgressFormProperties {
	}
	export function CreateIntraRegionEgressFormGroup() {
		return new FormGroup<IntraRegionEgressFormProperties>({
		});

	}


	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface Decimal {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value?: string | null;
	}

	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface DecimalFormProperties {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDecimalFormGroup() {
		return new FormGroup<DecimalFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for EstimateCostScenarioForBillingAccount. */
	export interface EstimateCostScenarioForBillingAccountRequest {

		/** Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options. */
		costScenario?: CostScenario;
	}

	/** Request for EstimateCostScenarioForBillingAccount. */
	export interface EstimateCostScenarioForBillingAccountRequestFormProperties {
	}
	export function CreateEstimateCostScenarioForBillingAccountRequestFormGroup() {
		return new FormGroup<EstimateCostScenarioForBillingAccountRequestFormProperties>({
		});

	}


	/** Response for EstimateCostScenarioForBillingAccount */
	export interface EstimateCostScenarioForBillingAccountResponse {

		/** The result of a estimating the costs of a `CostScenario`. */
		costEstimationResult?: CostEstimationResult;
	}

	/** Response for EstimateCostScenarioForBillingAccount */
	export interface EstimateCostScenarioForBillingAccountResponseFormProperties {
	}
	export function CreateEstimateCostScenarioForBillingAccountResponseFormGroup() {
		return new FormGroup<EstimateCostScenarioForBillingAccountResponseFormProperties>({
		});

	}


	/** Request for EstimateCostScenarioWithListPrice. */
	export interface EstimateCostScenarioWithListPriceRequest {

		/** Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options. */
		costScenario?: CostScenario;
	}

	/** Request for EstimateCostScenarioWithListPrice. */
	export interface EstimateCostScenarioWithListPriceRequestFormProperties {
	}
	export function CreateEstimateCostScenarioWithListPriceRequestFormGroup() {
		return new FormGroup<EstimateCostScenarioWithListPriceRequestFormProperties>({
		});

	}


	/** Response for EstimateCostScenarioWithListPrice */
	export interface EstimateCostScenarioWithListPriceResponse {

		/** The result of a estimating the costs of a `CostScenario`. */
		costEstimationResult?: CostEstimationResult;
	}

	/** Response for EstimateCostScenarioWithListPrice */
	export interface EstimateCostScenarioWithListPriceResponseFormProperties {
	}
	export function CreateEstimateCostScenarioWithListPriceResponseFormGroup() {
		return new FormGroup<EstimateCostScenarioWithListPriceResponseFormProperties>({
		});

	}


	/** Encapsulates the aggregation information such as aggregation level and interval for a billing account price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo {

		/** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
		interval?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null;

		/** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
		level?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null;
	}

	/** Encapsulates the aggregation information such as aggregation level and interval for a billing account price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoFormProperties {

		/** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
		interval: FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null | undefined>,

		/** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
		level: FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaAggregationInfoFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoFormProperties>({
			interval: new FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null | undefined>(undefined),
			level: new FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval { INTERVAL_UNSPECIFIED = 'INTERVAL_UNSPECIFIED', INTERVAL_MONTHLY = 'INTERVAL_MONTHLY', INTERVAL_DAILY = 'INTERVAL_DAILY' }

	export enum GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel { LEVEL_UNSPECIFIED = 'LEVEL_UNSPECIFIED', LEVEL_ACCOUNT = 'LEVEL_ACCOUNT', LEVEL_PROJECT = 'LEVEL_PROJECT' }


	/** Encapsulates the latest price for a billing account SKU. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice {

		/** ISO-4217 currency code for the price. */
		currencyCode?: string | null;

		/** Resource name for the latest billing account price. */
		name?: string | null;

		/** Encapsulates a price reason which contains background information about the origin of the price. */
		priceReason?: GoogleCloudBillingBillingaccountpricesV1betaPriceReason;

		/** Encapsulates a `Rate` price. Billing account SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
		rate?: GoogleCloudBillingBillingaccountpricesV1betaRate;

		/** Type of the price. The possible values are: ["unspecified", "rate"]. */
		valueType?: string | null;
	}

	/** Encapsulates the latest price for a billing account SKU. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPriceFormProperties {

		/** ISO-4217 currency code for the price. */
		currencyCode: FormControl<string | null | undefined>,

		/** Resource name for the latest billing account price. */
		name: FormControl<string | null | undefined>,

		/** Type of the price. The possible values are: ["unspecified", "rate"]. */
		valueType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaBillingAccountPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPriceFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a price reason which contains background information about the origin of the price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaPriceReason {

		/** Encapsulates a default price which is the current list price. */
		defaultPrice?: GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice;

		/** Encapsulates a discount off the list price, anchored to the list price as of a fixed time. */
		fixedDiscount?: GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount;

		/** Encapsulates a set fixed price applicable during the terms of a contract agreement. */
		fixedPrice?: GoogleCloudBillingBillingaccountpricesV1betaFixedPrice;

		/** Encapsulates a discount off the current list price, not anchored to any list price as of a fixed time. */
		floatingDiscount?: GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount;

		/** Encapsulates a contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice. */
		listPriceAsCeiling?: GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling;

		/** Encapsulates a price after merging from multiple sources. With merged tiers, each individual tier can be from a different source with different discount types. */
		mergedPrice?: GoogleCloudBillingBillingaccountpricesV1betaMergedPrice;

		/** Encapsulates a price migrated from other SKUs. */
		migratedPrice?: GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice;

		/** Type of the price reason. It can have values such as 'unspecified', 'default-price', 'fixed-price', 'fixed-discount', 'floating-discount', 'migrated-price', 'merged-price', 'list-price-as-ceiling'. */
		type?: string | null;
	}

	/** Encapsulates a price reason which contains background information about the origin of the price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaPriceReasonFormProperties {

		/** Type of the price reason. It can have values such as 'unspecified', 'default-price', 'fixed-price', 'fixed-discount', 'floating-discount', 'migrated-price', 'merged-price', 'list-price-as-ceiling'. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaPriceReasonFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaPriceReasonFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a default price which is the current list price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice {
	}

	/** Encapsulates a default price which is the current list price. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaDefaultPriceFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaDefaultPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaDefaultPriceFormProperties>({
		});

	}


	/** Encapsulates a discount off the list price, anchored to the list price as of a fixed time. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount {

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		discountPercent?: Decimal;

		/** Type of the fixed discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
		discountScopeType?: string | null;

		/** Time that the fixed discount is anchored to. */
		fixTime?: string | null;

		/** SKU group where the fixed discount comes from. */
		skuGroup?: string | null;
	}

	/** Encapsulates a discount off the list price, anchored to the list price as of a fixed time. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFixedDiscountFormProperties {

		/** Type of the fixed discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
		discountScopeType: FormControl<string | null | undefined>,

		/** Time that the fixed discount is anchored to. */
		fixTime: FormControl<string | null | undefined>,

		/** SKU group where the fixed discount comes from. */
		skuGroup: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaFixedDiscountFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaFixedDiscountFormProperties>({
			discountScopeType: new FormControl<string | null | undefined>(undefined),
			fixTime: new FormControl<string | null | undefined>(undefined),
			skuGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a set fixed price applicable during the terms of a contract agreement. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFixedPrice {
	}

	/** Encapsulates a set fixed price applicable during the terms of a contract agreement. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFixedPriceFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaFixedPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaFixedPriceFormProperties>({
		});

	}


	/** Encapsulates a discount off the current list price, not anchored to any list price as of a fixed time. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount {

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		discountPercent?: Decimal;

		/** Type of the floating discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
		discountScopeType?: string | null;

		/** SKU group where the floating discount comes from. */
		skuGroup?: string | null;
	}

	/** Encapsulates a discount off the current list price, not anchored to any list price as of a fixed time. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscountFormProperties {

		/** Type of the floating discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'. */
		discountScopeType: FormControl<string | null | undefined>,

		/** SKU group where the floating discount comes from. */
		skuGroup: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaFloatingDiscountFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscountFormProperties>({
			discountScopeType: new FormControl<string | null | undefined>(undefined),
			skuGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling {
	}

	/** Encapsulates a contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeilingFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeilingFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeilingFormProperties>({
		});

	}


	/** Encapsulates a price after merging from multiple sources. With merged tiers, each individual tier can be from a different source with different discount types. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaMergedPrice {
	}

	/** Encapsulates a price after merging from multiple sources. With merged tiers, each individual tier can be from a different source with different discount types. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaMergedPriceFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaMergedPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaMergedPriceFormProperties>({
		});

	}


	/** Encapsulates a price migrated from other SKUs. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice {

		/** Source SKU where the discount is migrated from. Format: billingAccounts/{billing_account}/skus/{sku} */
		sourceSku?: string | null;
	}

	/** Encapsulates a price migrated from other SKUs. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaMigratedPriceFormProperties {

		/** Source SKU where the discount is migrated from. Format: billingAccounts/{billing_account}/skus/{sku} */
		sourceSku: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaMigratedPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaMigratedPriceFormProperties>({
			sourceSku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a `Rate` price. Billing account SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaRate {

		/** Encapsulates the aggregation information such as aggregation level and interval for a billing account price. */
		aggregationInfo?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo;

		/** All tiers associated with the `Rate` price. */
		tiers?: Array<GoogleCloudBillingBillingaccountpricesV1betaRateTier>;

		/** Encapsulates the unit information for a Rate */
		unitInfo?: GoogleCloudBillingBillingaccountpricesV1betaUnitInfo;
	}

	/** Encapsulates a `Rate` price. Billing account SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaRateFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaRateFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaRateFormProperties>({
		});

	}


	/** Encapsulates a rate price tier. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaRateTier {

		/** Represents an amount of money with its currency type. */
		contractPrice?: Money;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		effectiveDiscountPercent?: Decimal;

		/** Represents an amount of money with its currency type. */
		listPrice?: Money;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		startAmount?: Decimal;
	}

	/** Encapsulates a rate price tier. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaRateTierFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaRateTierFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaRateTierFormProperties>({
		});

	}


	/** Encapsulates the unit information for a Rate */
	export interface GoogleCloudBillingBillingaccountpricesV1betaUnitInfo {

		/** Shorthand for the unit. Example: GiBy.mo. */
		unit?: string | null;

		/** Human-readable description of the unit. Example: gibibyte month. */
		unitDescription?: string | null;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		unitQuantity?: Decimal;
	}

	/** Encapsulates the unit information for a Rate */
	export interface GoogleCloudBillingBillingaccountpricesV1betaUnitInfoFormProperties {

		/** Shorthand for the unit. Example: GiBy.mo. */
		unit: FormControl<string | null | undefined>,

		/** Human-readable description of the unit. Example: gibibyte month. */
		unitDescription: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaUnitInfoFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaUnitInfoFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			unitDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBillingAccountPrices. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse {

		/** The returned billing account prices. */
		billingAccountPrices?: Array<GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>;

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBillingAccountPrices. */
	export interface GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a Google Cloud service visible to a billing account. */
	export interface GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService {

		/** Description of the BillingAccountService. Example: "BigQuery", "Compute Engine". */
		displayName?: string | null;

		/** Resource name for the BillingAccountService. Example: "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397". */
		name?: string | null;

		/** Identifier for the service. It is the string after the collection identifier "services/". Example: "DA34-426B-A397". */
		serviceId?: string | null;
	}

	/** Encapsulates a Google Cloud service visible to a billing account. */
	export interface GoogleCloudBillingBillingaccountservicesV1betaBillingAccountServiceFormProperties {

		/** Description of the BillingAccountService. Example: "BigQuery", "Compute Engine". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the BillingAccountService. Example: "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397". */
		name: FormControl<string | null | undefined>,

		/** Identifier for the service. It is the string after the collection identifier "services/". Example: "DA34-426B-A397". */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountservicesV1betaBillingAccountServiceFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountservicesV1betaBillingAccountServiceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBillingAccountServices. */
	export interface GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse {

		/** The returned billing account services. */
		billingAccountServices?: Array<GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>;

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBillingAccountServices. */
	export interface GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a stock keeping (SKU) group visible to a billing account. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup {

		/** Description of the BillingAccountSkuGroup. Example: "A2 VMs (1 Year CUD)". */
		displayName?: string | null;

		/** Resource name for the BillingAccountSkuGroup. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
		name?: string | null;
	}

	/** Encapsulates a stock keeping (SKU) group visible to a billing account. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroupFormProperties {

		/** Description of the BillingAccountSkuGroup. Example: "A2 VMs (1 Year CUD)". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the BillingAccountSkuGroup. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroupFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBillingAccountSkuGroups. */
	export interface GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse {

		/** The returned publicly listed billing account SKU groups. */
		billingAccountSkuGroups?: Array<GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>;

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBillingAccountSkuGroups. */
	export interface GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a SKU that is part of a billing account SKU group. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku {

		/** BillingAccountService that the BillingAccountSkuGroupSku belongs to. */
		billingAccountService?: string | null;

		/** Description of the BillingAccountSkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName?: string | null;

		/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
		geoTaxonomy?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy;

		/** Resource name for the BillingAccountSkuGroupSku. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
		name?: string | null;

		/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
		productTaxonomy?: GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy;

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId?: string | null;
	}

	/** Encapsulates a SKU that is part of a billing account SKU group. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSkuFormProperties {

		/** BillingAccountService that the BillingAccountSkuGroupSku belongs to. */
		billingAccountService: FormControl<string | null | undefined>,

		/** Description of the BillingAccountSkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the BillingAccountSkuGroupSku. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
		name: FormControl<string | null | undefined>,

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSkuFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSkuFormProperties>({
			billingAccountService: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy {

		/** Encapsulates a global geographic taxonomy. */
		globalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal;

		/** Encapsulates a multi-regional geographic taxonomy. */
		multiRegionalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional;

		/** Encapsulates a regional geographic taxonomy. */
		regionalMetadata?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional;

		/** Type of geographic taxonomy associated with the billing account SKU group SKU. */
		type?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null;
	}

	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyFormProperties {

		/** Type of geographic taxonomy associated with the billing account SKU group SKU. */
		type: FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyFormProperties>({
			type: new FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>(undefined),
		});

	}


	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal {
	}

	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobalFormProperties>({
		});

	}


	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional {

		/** Google Cloud regions associated with the multi-regional geographic taxonomy. */
		regions?: Array<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion>;
	}

	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegionalFormProperties>({
		});

	}


	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region?: string | null;
	}

	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionFormProperties {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional {

		/** Encapsulates a Google Cloud region. */
		region?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion;
	}

	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegionalFormProperties>({
		});

	}

	export enum GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TYPE_GLOBAL = 'TYPE_GLOBAL', TYPE_REGIONAL = 'TYPE_REGIONAL', TYPE_MULTI_REGIONAL = 'TYPE_MULTI_REGIONAL' }


	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy {

		/** All product categories that the billing account SKU group SKU belong to. */
		taxonomyCategories?: Array<GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory>;
	}

	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomyFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomyFormProperties>({
		});

	}


	/** Encapsulates a product category. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory {

		/** Name of the product category. */
		category?: string | null;
	}

	/** Encapsulates a product category. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategoryFormProperties {

		/** Name of the product category. */
		category: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategoryFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBillingAccountSkuGroupSkus. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse {

		/** The returned billing account SKU group SKUs. */
		billingAccountSkuGroupSkus?: Array<GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>;

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBillingAccountSkuGroupSkus. */
	export interface GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a stock keeping unit (SKU) visible to a billing account. A SKU distinctly identifies a resource that you can purchase, such as `Nvidia Tesla K80 GPU attached to Spot Preemptible VMs running in Warsaw`. */
	export interface GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku {

		/** BillingAccountService that the BillingAccountSku belongs to. */
		billingAccountService?: string | null;

		/** Description of the BillingAccountSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName?: string | null;

		/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
		geoTaxonomy?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy;

		/** Resource name for the BillingAccountSku. Example: "billingAccounts/012345-567890-ABCDEF/skus/AA95-CD31-42FE". */
		name?: string | null;

		/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
		productTaxonomy?: GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy;

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId?: string | null;
	}

	/** Encapsulates a stock keeping unit (SKU) visible to a billing account. A SKU distinctly identifies a resource that you can purchase, such as `Nvidia Tesla K80 GPU attached to Spot Preemptible VMs running in Warsaw`. */
	export interface GoogleCloudBillingBillingaccountskusV1betaBillingAccountSkuFormProperties {

		/** BillingAccountService that the BillingAccountSku belongs to. */
		billingAccountService: FormControl<string | null | undefined>,

		/** Description of the BillingAccountSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the BillingAccountSku. Example: "billingAccounts/012345-567890-ABCDEF/skus/AA95-CD31-42FE". */
		name: FormControl<string | null | undefined>,

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaBillingAccountSkuFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaBillingAccountSkuFormProperties>({
			billingAccountService: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy {

		/** Encapsulates a global geographic taxonomy. */
		globalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal;

		/** Encapsulates a multi-regional geographic taxonomy. */
		multiRegionalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional;

		/** Encapsulates a regional geographic taxonomy. */
		regionalMetadata?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional;

		/** Type of geographic taxonomy associated with the billing account SKU. */
		type?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null;
	}

	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyFormProperties {

		/** Type of geographic taxonomy associated with the billing account SKU. */
		type: FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyFormProperties>({
			type: new FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>(undefined),
		});

	}


	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal {
	}

	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobalFormProperties>({
		});

	}


	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional {

		/** Google Cloud regions associated with the multi-regional geographic taxonomy. */
		regions?: Array<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion>;
	}

	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegionalFormProperties>({
		});

	}


	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region?: string | null;
	}

	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionFormProperties {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional {

		/** Encapsulates a Google Cloud region. */
		region?: GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion;
	}

	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegionalFormProperties>({
		});

	}


	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy {

		/** All product categories that the billing account SKU belong to. */
		taxonomyCategories?: Array<GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory>;
	}

	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingBillingaccountskusV1betaProductTaxonomyFormProperties {
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaProductTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaProductTaxonomyFormProperties>({
		});

	}


	/** Encapsulates a product category. */
	export interface GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory {

		/** Name of the product category. */
		category?: string | null;
	}

	/** Encapsulates a product category. */
	export interface GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategoryFormProperties {

		/** Name of the product category. */
		category: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaTaxonomyCategoryFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBillingAccountSkus. */
	export interface GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse {

		/** The returned billing account SKUs. */
		billingAccountSkus?: Array<GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>;

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBillingAccountSkus. */
	export interface GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the aggregation information such as aggregation level and interval for a price. */
	export interface GoogleCloudBillingPricesV1betaAggregationInfo {

		/** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
		interval?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null;

		/** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
		level?: GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null;
	}

	/** Encapsulates the aggregation information such as aggregation level and interval for a price. */
	export interface GoogleCloudBillingPricesV1betaAggregationInfoFormProperties {

		/** Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month. */
		interval: FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null | undefined>,

		/** Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account. */
		level: FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null | undefined>,
	}
	export function CreateGoogleCloudBillingPricesV1betaAggregationInfoFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaAggregationInfoFormProperties>({
			interval: new FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoInterval | null | undefined>(undefined),
			level: new FormControl<GoogleCloudBillingBillingaccountpricesV1betaAggregationInfoLevel | null | undefined>(undefined),
		});

	}


	/** Response message for ListPrices. */
	export interface GoogleCloudBillingPricesV1betaListPricesResponse {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The returned publicly listed prices. */
		prices?: Array<GoogleCloudBillingPricesV1betaPrice>;
	}

	/** Response message for ListPrices. */
	export interface GoogleCloudBillingPricesV1betaListPricesResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingPricesV1betaListPricesResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaListPricesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the latest price for a SKU. */
	export interface GoogleCloudBillingPricesV1betaPrice {

		/** ISO-4217 currency code for the price. */
		currencyCode?: string | null;

		/** Resource name for the latest price. */
		name?: string | null;

		/** Encapsulates a `Rate` price. SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
		rate?: GoogleCloudBillingPricesV1betaRate;

		/** Type of the price. It can have values: ["unspecified", "rate"]. */
		valueType?: string | null;
	}

	/** Encapsulates the latest price for a SKU. */
	export interface GoogleCloudBillingPricesV1betaPriceFormProperties {

		/** ISO-4217 currency code for the price. */
		currencyCode: FormControl<string | null | undefined>,

		/** Resource name for the latest price. */
		name: FormControl<string | null | undefined>,

		/** Type of the price. It can have values: ["unspecified", "rate"]. */
		valueType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingPricesV1betaPriceFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaPriceFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a `Rate` price. SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
	export interface GoogleCloudBillingPricesV1betaRate {

		/** Encapsulates the aggregation information such as aggregation level and interval for a price. */
		aggregationInfo?: GoogleCloudBillingPricesV1betaAggregationInfo;

		/** All tiers associated with the `Rate` price. */
		tiers?: Array<GoogleCloudBillingPricesV1betaRateTier>;

		/** Encapsulates the unit information for a Rate */
		unitInfo?: GoogleCloudBillingPricesV1betaUnitInfo;
	}

	/** Encapsulates a `Rate` price. SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers. */
	export interface GoogleCloudBillingPricesV1betaRateFormProperties {
	}
	export function CreateGoogleCloudBillingPricesV1betaRateFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaRateFormProperties>({
		});

	}


	/** Encapsulates a rate price tier. */
	export interface GoogleCloudBillingPricesV1betaRateTier {

		/** Represents an amount of money with its currency type. */
		listPrice?: Money;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		startAmount?: Decimal;
	}

	/** Encapsulates a rate price tier. */
	export interface GoogleCloudBillingPricesV1betaRateTierFormProperties {
	}
	export function CreateGoogleCloudBillingPricesV1betaRateTierFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaRateTierFormProperties>({
		});

	}


	/** Encapsulates the unit information for a Rate */
	export interface GoogleCloudBillingPricesV1betaUnitInfo {

		/** Shorthand for the unit. Example: GiBy.mo. */
		unit?: string | null;

		/** Human-readable description of the unit. Example: gibibyte month. */
		unitDescription?: string | null;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		unitQuantity?: Decimal;
	}

	/** Encapsulates the unit information for a Rate */
	export interface GoogleCloudBillingPricesV1betaUnitInfoFormProperties {

		/** Shorthand for the unit. Example: GiBy.mo. */
		unit: FormControl<string | null | undefined>,

		/** Human-readable description of the unit. Example: gibibyte month. */
		unitDescription: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingPricesV1betaUnitInfoFormGroup() {
		return new FormGroup<GoogleCloudBillingPricesV1betaUnitInfoFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			unitDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSkuGroups. */
	export interface GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The returned publicly listed SKU groups. */
		skuGroups?: Array<GoogleCloudBillingSkugroupsV1betaSkuGroup>;
	}

	/** Response message for ListSkuGroups. */
	export interface GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupsV1betaListSkuGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a publicly listed stock keeping unit (SKU) group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingSkugroupsV1betaSkuGroup {

		/** Description of the SKU group. Example: "A2 VMs (1 Year CUD)". */
		displayName?: string | null;

		/** Resource name for the SKU group. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
		name?: string | null;
	}

	/** Encapsulates a publicly listed stock keeping unit (SKU) group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingSkugroupsV1betaSkuGroupFormProperties {

		/** Description of the SKU group. Example: "A2 VMs (1 Year CUD)". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the SKU group. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupsV1betaSkuGroupFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupsV1betaSkuGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy {

		/** Encapsulates a global geographic taxonomy. */
		globalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal;

		/** Encapsulates a multi-regional geographic taxonomy. */
		multiRegionalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional;

		/** Encapsulates a regional geographic taxonomy. */
		regionalMetadata?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional;

		/** Type of geographic taxonomy associated with the SKU group SKU. */
		type?: GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null;
	}

	/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyFormProperties {

		/** Type of geographic taxonomy associated with the SKU group SKU. */
		type: FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaGeoTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyFormProperties>({
			type: new FormControl<GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyType | null | undefined>(undefined),
		});

	}


	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal {
	}

	/** Encapsulates a global geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobalFormProperties {
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobalFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobalFormProperties>({
		});

	}


	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional {

		/** Google Cloud regions associated with the multi-regional geographic taxonomy. */
		regions?: Array<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion>;
	}

	/** Encapsulates a multi-regional geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegionalFormProperties>({
		});

	}


	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region?: string | null;
	}

	/** Encapsulates a Google Cloud region. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionFormProperties {

		/** Description of a Google Cloud region. Example: "us-west2". */
		region: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional {

		/** Encapsulates a Google Cloud region. */
		region?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion;
	}

	/** Encapsulates a regional geographic taxonomy. */
	export interface GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionalFormProperties {
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionalFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegionalFormProperties>({
		});

	}


	/** Response message for ListSkuGroupSkus. */
	export interface GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The returned SKU group SKUs. */
		skuGroupSkus?: Array<GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>;
	}

	/** Response message for ListSkuGroupSkus. */
	export interface GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponseFormProperties {

		/** Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates a publicly listed stock keeping unit (SKU) that is part of a publicly listed SKU group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingSkugroupskusV1betaSkuGroupSku {

		/** Description of the SkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName?: string | null;

		/** Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`. */
		geoTaxonomy?: GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy;

		/** Resource name for the SkuGroupSku. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
		name?: string | null;

		/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
		productTaxonomy?: GoogleCloudBillingSkugroupskusV1betaProductTaxonomy;

		/** Service that the SkuGroupSku belongs to. */
		service?: string | null;

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId?: string | null;
	}

	/** Encapsulates a publicly listed stock keeping unit (SKU) that is part of a publicly listed SKU group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs. */
	export interface GoogleCloudBillingSkugroupskusV1betaSkuGroupSkuFormProperties {

		/** Description of the SkuGroupSku. Example: "A2 Instance Core running in Hong Kong". */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for the SkuGroupSku. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE". */
		name: FormControl<string | null | undefined>,

		/** Service that the SkuGroupSku belongs to. */
		service: FormControl<string | null | undefined>,

		/** Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE". */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaSkuGroupSkuFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaSkuGroupSkuFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingSkugroupskusV1betaProductTaxonomy {

		/** All product categories that the SKU group SKU belongs to. */
		taxonomyCategories?: Array<GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory>;
	}

	/** Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others. */
	export interface GoogleCloudBillingSkugroupskusV1betaProductTaxonomyFormProperties {
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaProductTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaProductTaxonomyFormProperties>({
		});

	}


	/** Encapsulates a product category. */
	export interface GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory {

		/** Name of the product category. */
		category?: string | null;
	}

	/** Encapsulates a product category. */
	export interface GoogleCloudBillingSkugroupskusV1betaTaxonomyCategoryFormProperties {

		/** Name of the product category. */
		category: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBillingSkugroupskusV1betaTaxonomyCategoryFormGroup() {
		return new FormGroup<GoogleCloudBillingSkugroupskusV1betaTaxonomyCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all publicly listed SKU groups.
		 * Get v1beta/skuGroups
		 * @param {number} pageSize Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
		 * @param {string} pageToken Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
		 * @return {GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse} Successful response
		 */
		Cloudbilling_skuGroups_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse> {
			return this.http.get<GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>(this.baseUri + 'v1beta/skuGroups?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.
		 * Post v1beta/{billingAccount}:estimateCostScenario
		 * @param {string} billingAccount Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.
		 * @return {EstimateCostScenarioForBillingAccountResponse} Successful response
		 */
		Cloudbilling_billingAccounts_estimateCostScenario(billingAccount: string, requestBody: EstimateCostScenarioForBillingAccountRequest): Observable<EstimateCostScenarioForBillingAccountResponse> {
			return this.http.post<EstimateCostScenarioForBillingAccountResponse>(this.baseUri + 'v1beta/' + (billingAccount == null ? '' : encodeURIComponent(billingAccount)) + ':estimateCostScenario', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the latest price for the given SKU.
		 * Get v1beta/{name}
		 * @param {string} name Required. Name of the latest price to retrieve. Format: skus/{sku}/price
		 * @param {string} currencyCode Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
		 * @return {GoogleCloudBillingPricesV1betaPrice} Successful response
		 */
		Cloudbilling_skus_price_get(name: string, currencyCode: string | null | undefined): Observable<GoogleCloudBillingPricesV1betaPrice> {
			return this.http.get<GoogleCloudBillingPricesV1betaPrice>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)), {});
		}

		/**
		 * Lists the latest prices for all SKUs.
		 * Get v1beta/{parent}/prices
		 * @param {string} parent Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU.
		 * @param {string} currencyCode Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
		 * @param {number} pageSize Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
		 * @param {string} pageToken Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
		 * @return {GoogleCloudBillingPricesV1betaListPricesResponse} Successful response
		 */
		Cloudbilling_skus_prices_list(parent: string, currencyCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudBillingPricesV1betaListPricesResponse> {
			return this.http.get<GoogleCloudBillingPricesV1betaListPricesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/prices&currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists services visible to a billing account.
		 * Get v1beta/{parent}/services
		 * @param {string} parent Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account}
		 * @param {number} pageSize Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
		 * @param {string} pageToken Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned.
		 * @return {GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse} Successful response
		 */
		Cloudbilling_billingAccounts_services_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse> {
			return this.http.get<GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists SKU groups visible to a billing account.
		 * Get v1beta/{parent}/skuGroups
		 * @param {string} parent Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account}
		 * @param {number} pageSize Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
		 * @param {string} pageToken Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
		 * @return {GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse} Successful response
		 */
		Cloudbilling_billingAccounts_skuGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse> {
			return this.http.get<GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/skuGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all publicly listed SKUs contained by a publicly listed SKU group.
		 * Get v1beta/{parent}/skus
		 * @param {string} parent Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group}
		 * @param {number} pageSize Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
		 * @param {string} pageToken Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
		 * @return {GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse} Successful response
		 */
		Cloudbilling_skuGroups_skus_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse> {
			return this.http.get<GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/skus&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Estimate list prices using a `CostScenario` without a defined `billingAccount`.
		 * Post v1beta:estimateCostScenario
		 * @return {EstimateCostScenarioWithListPriceResponse} Successful response
		 */
		Cloudbilling_estimateCostScenario(requestBody: EstimateCostScenarioWithListPriceRequest): Observable<EstimateCostScenarioWithListPriceResponse> {
			return this.http.post<EstimateCostScenarioWithListPriceResponse>(this.baseUri + 'v1beta:estimateCostScenario', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

