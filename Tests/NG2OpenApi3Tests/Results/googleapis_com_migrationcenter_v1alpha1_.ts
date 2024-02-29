import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A request to add assets to a group. */
	export interface AddAssetsToGroupRequest {

		/** Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
		allowExisting?: boolean | null;

		/** Lists the asset IDs of all assets. */
		assets?: AssetList;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** A request to add assets to a group. */
	export interface AddAssetsToGroupRequestFormProperties {

		/** Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
		allowExisting: FormControl<boolean | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateAddAssetsToGroupRequestFormGroup() {
		return new FormGroup<AddAssetsToGroupRequestFormProperties>({
			allowExisting: new FormControl<boolean | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the asset IDs of all assets. */
	export interface AssetList {

		/** Required. A list of asset IDs */
		assetIds?: Array<string>;
	}

	/** Lists the asset IDs of all assets. */
	export interface AssetListFormProperties {
	}
	export function CreateAssetListFormGroup() {
		return new FormGroup<AssetListFormProperties>({
		});

	}


	/** A request to aggregate one or more values. */
	export interface AggregateAssetsValuesRequest {

		/** Array of aggregations to perform. Up to 25 aggregations can be defined. */
		aggregations?: Array<Aggregation>;

		/** The aggregation will be performed on assets that match the provided filter. */
		filter?: string | null;

		/** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
		showHidden?: boolean | null;
	}

	/** A request to aggregate one or more values. */
	export interface AggregateAssetsValuesRequestFormProperties {

		/** The aggregation will be performed on assets that match the provided filter. */
		filter: FormControl<string | null | undefined>,

		/** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
		showHidden: FormControl<boolean | null | undefined>,
	}
	export function CreateAggregateAssetsValuesRequestFormGroup() {
		return new FormGroup<AggregateAssetsValuesRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			showHidden: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation. */
	export interface Aggregation {

		/** Object count. */
		count?: AggregationCount;

		/** The name of the field on which to aggregate. */
		field?: string | null;

		/** Frequency distribution of all field values. */
		frequency?: AggregationFrequency;

		/** Histogram of bucketed assets counts by field value. */
		histogram?: AggregationHistogram;

		/** Sum of field values. */
		sum?: AggregationSum;
	}

	/** Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation. */
	export interface AggregationFormProperties {

		/** The name of the field on which to aggregate. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateAggregationFormGroup() {
		return new FormGroup<AggregationFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object count. */
	export interface AggregationCount {
	}

	/** Object count. */
	export interface AggregationCountFormProperties {
	}
	export function CreateAggregationCountFormGroup() {
		return new FormGroup<AggregationCountFormProperties>({
		});

	}


	/** Frequency distribution of all field values. */
	export interface AggregationFrequency {
	}

	/** Frequency distribution of all field values. */
	export interface AggregationFrequencyFormProperties {
	}
	export function CreateAggregationFrequencyFormGroup() {
		return new FormGroup<AggregationFrequencyFormProperties>({
		});

	}


	/** Histogram of bucketed assets counts by field value. */
	export interface AggregationHistogram {

		/** Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds. */
		lowerBounds?: Array<number>;
	}

	/** Histogram of bucketed assets counts by field value. */
	export interface AggregationHistogramFormProperties {
	}
	export function CreateAggregationHistogramFormGroup() {
		return new FormGroup<AggregationHistogramFormProperties>({
		});

	}


	/** Sum of field values. */
	export interface AggregationSum {
	}

	/** Sum of field values. */
	export interface AggregationSumFormProperties {
	}
	export function CreateAggregationSumFormGroup() {
		return new FormGroup<AggregationSumFormProperties>({
		});

	}


	/** A response to a request to aggregated assets values. */
	export interface AggregateAssetsValuesResponse {

		/** The aggregation results. */
		results?: Array<AggregationResult>;
	}

	/** A response to a request to aggregated assets values. */
	export interface AggregateAssetsValuesResponseFormProperties {
	}
	export function CreateAggregateAssetsValuesResponseFormGroup() {
		return new FormGroup<AggregateAssetsValuesResponseFormProperties>({
		});

	}


	/** Message describing a result of an aggregation. */
	export interface AggregationResult {

		/** The result of a count aggregation. */
		count?: AggregationResultCount;
		field?: string | null;

		/** The result of a frequency distribution aggregation. */
		frequency?: AggregationResultFrequency;

		/** The result of a bucketed histogram aggregation. */
		histogram?: AggregationResultHistogram;

		/** The result of a sum aggregation. */
		sum?: AggregationResultSum;
	}

	/** Message describing a result of an aggregation. */
	export interface AggregationResultFormProperties {
		field: FormControl<string | null | undefined>,
	}
	export function CreateAggregationResultFormGroup() {
		return new FormGroup<AggregationResultFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a count aggregation. */
	export interface AggregationResultCount {
		value?: string | null;
	}

	/** The result of a count aggregation. */
	export interface AggregationResultCountFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateAggregationResultCountFormGroup() {
		return new FormGroup<AggregationResultCountFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a frequency distribution aggregation. */
	export interface AggregationResultFrequency {
		values?: {[id: string]: string };
	}

	/** The result of a frequency distribution aggregation. */
	export interface AggregationResultFrequencyFormProperties {
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAggregationResultFrequencyFormGroup() {
		return new FormGroup<AggregationResultFrequencyFormProperties>({
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The result of a bucketed histogram aggregation. */
	export interface AggregationResultHistogram {

		/** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
		buckets?: Array<AggregationResultHistogramBucket>;
	}

	/** The result of a bucketed histogram aggregation. */
	export interface AggregationResultHistogramFormProperties {
	}
	export function CreateAggregationResultHistogramFormGroup() {
		return new FormGroup<AggregationResultHistogramFormProperties>({
		});

	}


	/** A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity. */
	export interface AggregationResultHistogramBucket {

		/** Count of items in the bucket. */
		count?: string | null;

		/**
		 * Lower bound - inclusive.
		 * Type: double
		 */
		lowerBound?: number | null;

		/**
		 * Upper bound - exclusive.
		 * Type: double
		 */
		upperBound?: number | null;
	}

	/** A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity. */
	export interface AggregationResultHistogramBucketFormProperties {

		/** Count of items in the bucket. */
		count: FormControl<string | null | undefined>,

		/**
		 * Lower bound - inclusive.
		 * Type: double
		 */
		lowerBound: FormControl<number | null | undefined>,

		/**
		 * Upper bound - exclusive.
		 * Type: double
		 */
		upperBound: FormControl<number | null | undefined>,
	}
	export function CreateAggregationResultHistogramBucketFormGroup() {
		return new FormGroup<AggregationResultHistogramBucketFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			lowerBound: new FormControl<number | null | undefined>(undefined),
			upperBound: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of a sum aggregation. */
	export interface AggregationResultSum {

		/** Type: double */
		value?: number | null;
	}

	/** The result of a sum aggregation. */
	export interface AggregationResultSumFormProperties {

		/** Type: double */
		value: FormControl<number | null | undefined>,
	}
	export function CreateAggregationResultSumFormGroup() {
		return new FormGroup<AggregationResultSumFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An asset represents a resource in your environment. Asset types include virtual machines and databases. */
	export interface Asset {

		/** Output only. The list of groups that the asset is assigned to. */
		assignedGroups?: Array<string>;

		/** Generic asset attributes. */
		attributes?: {[id: string]: string };

		/** Output only. The timestamp when the asset was created. */
		createTime?: string | null;

		/** Optional. Indicates if the asset is hidden. */
		hidden?: boolean | null;

		/** Optional. An optional reason for marking this asset as hidden. */
		hideReason?: string | null;

		/** Output only. The timestamp when the asset was marked as hidden. */
		hideTime?: string | null;

		/** Message containing insights list. */
		insightList?: InsightList;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Output only. The full name of the asset. */
		name?: string | null;

		/** Performance data for an asset. */
		performanceData?: AssetPerformanceData;

		/** Output only. The list of sources contributing to the asset. */
		sources?: Array<string>;

		/** Output only. The timestamp when the asset was last updated. */
		updateTime?: string | null;

		/** Details of a VirtualMachine. */
		virtualMachineDetails?: VirtualMachineDetails;
	}

	/** An asset represents a resource in your environment. Asset types include virtual machines and databases. */
	export interface AssetFormProperties {

		/** Generic asset attributes. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The timestamp when the asset was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Indicates if the asset is hidden. */
		hidden: FormControl<boolean | null | undefined>,

		/** Optional. An optional reason for marking this asset as hidden. */
		hideReason: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the asset was marked as hidden. */
		hideTime: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full name of the asset. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the asset was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			hideReason: new FormControl<string | null | undefined>(undefined),
			hideTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing insights list. */
	export interface InsightList {

		/** Output only. Insights of the list. */
		insights?: Array<Insight>;

		/** Output only. Update timestamp. */
		updateTime?: string | null;
	}

	/** Message containing insights list. */
	export interface InsightListFormProperties {

		/** Output only. Update timestamp. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInsightListFormGroup() {
		return new FormGroup<InsightListFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An insight about an asset. */
	export interface Insight {

		/** A generic insight about an asset. */
		genericInsight?: GenericInsight;

		/** An insight about potential migrations for an asset. */
		migrationInsight?: MigrationInsight;

		/** An insight regarding software detected on an asset. */
		softwareInsight?: SoftwareInsight;
	}

	/** An insight about an asset. */
	export interface InsightFormProperties {
	}
	export function CreateInsightFormGroup() {
		return new FormGroup<InsightFormProperties>({
		});

	}


	/** A generic insight about an asset. */
	export interface GenericInsight {

		/** Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links. */
		additionalInformation?: Array<string>;

		/** Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. Text can contain md file style links. */
		defaultMessage?: string | null;

		/** Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. */
		messageId?: string | null;
	}

	/** A generic insight about an asset. */
	export interface GenericInsightFormProperties {

		/** Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. Text can contain md file style links. */
		defaultMessage: FormControl<string | null | undefined>,

		/** Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. */
		messageId: FormControl<string | null | undefined>,
	}
	export function CreateGenericInsightFormGroup() {
		return new FormGroup<GenericInsightFormProperties>({
			defaultMessage: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An insight about potential migrations for an asset. */
	export interface MigrationInsight {

		/** Compute engine migration target. */
		computeEngineTarget?: ComputeEngineMigrationTarget;

		/** Describes the fit level of an asset for migration to a specific target. */
		fit?: FitDescriptor;

		/** GKE migration target. */
		gkeTarget?: GoogleKubernetesEngineMigrationTarget;

		/** VMWare engine migration target. */
		vmwareEngineTarget?: VmwareEngineMigrationTarget;
	}

	/** An insight about potential migrations for an asset. */
	export interface MigrationInsightFormProperties {
	}
	export function CreateMigrationInsightFormGroup() {
		return new FormGroup<MigrationInsightFormProperties>({
		});

	}


	/** Compute engine migration target. */
	export interface ComputeEngineMigrationTarget {

		/** Compute Engine target shape descriptor. */
		shape?: ComputeEngineShapeDescriptor;
	}

	/** Compute engine migration target. */
	export interface ComputeEngineMigrationTargetFormProperties {
	}
	export function CreateComputeEngineMigrationTargetFormGroup() {
		return new FormGroup<ComputeEngineMigrationTargetFormProperties>({
		});

	}


	/** Compute Engine target shape descriptor. */
	export interface ComputeEngineShapeDescriptor {

		/**
		 * Number of logical cores.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		logicalCoreCount?: number | null;

		/** Compute Engine machine type. */
		machineType?: string | null;

		/**
		 * Memory in mebibytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryMb?: number | null;

		/**
		 * Number of physical cores.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		physicalCoreCount?: number | null;

		/** Compute Engine machine series. */
		series?: string | null;

		/** Compute Engine storage. Never empty. */
		storage?: Array<ComputeStorageDescriptor>;
	}

	/** Compute Engine target shape descriptor. */
	export interface ComputeEngineShapeDescriptorFormProperties {

		/**
		 * Number of logical cores.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		logicalCoreCount: FormControl<number | null | undefined>,

		/** Compute Engine machine type. */
		machineType: FormControl<string | null | undefined>,

		/**
		 * Memory in mebibytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryMb: FormControl<number | null | undefined>,

		/**
		 * Number of physical cores.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		physicalCoreCount: FormControl<number | null | undefined>,

		/** Compute Engine machine series. */
		series: FormControl<string | null | undefined>,
	}
	export function CreateComputeEngineShapeDescriptorFormGroup() {
		return new FormGroup<ComputeEngineShapeDescriptorFormProperties>({
			logicalCoreCount: new FormControl<number | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			physicalCoreCount: new FormControl<number | null | undefined>(undefined),
			series: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute Engine storage option descriptor. */
	export interface ComputeStorageDescriptor {

		/**
		 * Disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGb?: number | null;

		/** Disk type backing the storage. */
		type?: ComputeStorageDescriptorType | null;
	}

	/** Compute Engine storage option descriptor. */
	export interface ComputeStorageDescriptorFormProperties {

		/**
		 * Disk size in GiB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeGb: FormControl<number | null | undefined>,

		/** Disk type backing the storage. */
		type: FormControl<ComputeStorageDescriptorType | null | undefined>,
	}
	export function CreateComputeStorageDescriptorFormGroup() {
		return new FormGroup<ComputeStorageDescriptorFormProperties>({
			sizeGb: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ComputeStorageDescriptorType | null | undefined>(undefined),
		});

	}

	export enum ComputeStorageDescriptorType { PERSISTENT_DISK_TYPE_UNSPECIFIED = 'PERSISTENT_DISK_TYPE_UNSPECIFIED', PERSISTENT_DISK_TYPE_STANDARD = 'PERSISTENT_DISK_TYPE_STANDARD', PERSISTENT_DISK_TYPE_BALANCED = 'PERSISTENT_DISK_TYPE_BALANCED', PERSISTENT_DISK_TYPE_SSD = 'PERSISTENT_DISK_TYPE_SSD' }


	/** Describes the fit level of an asset for migration to a specific target. */
	export interface FitDescriptor {

		/** Fit level. */
		fitLevel?: FitDescriptorFitLevel | null;
	}

	/** Describes the fit level of an asset for migration to a specific target. */
	export interface FitDescriptorFormProperties {

		/** Fit level. */
		fitLevel: FormControl<FitDescriptorFitLevel | null | undefined>,
	}
	export function CreateFitDescriptorFormGroup() {
		return new FormGroup<FitDescriptorFormProperties>({
			fitLevel: new FormControl<FitDescriptorFitLevel | null | undefined>(undefined),
		});

	}

	export enum FitDescriptorFitLevel { FIT_LEVEL_UNSPECIFIED = 'FIT_LEVEL_UNSPECIFIED', FIT = 'FIT', NO_FIT = 'NO_FIT', REQUIRES_EFFORT = 'REQUIRES_EFFORT' }


	/** GKE migration target. */
	export interface GoogleKubernetesEngineMigrationTarget {
	}

	/** GKE migration target. */
	export interface GoogleKubernetesEngineMigrationTargetFormProperties {
	}
	export function CreateGoogleKubernetesEngineMigrationTargetFormGroup() {
		return new FormGroup<GoogleKubernetesEngineMigrationTargetFormProperties>({
		});

	}


	/** VMWare engine migration target. */
	export interface VmwareEngineMigrationTarget {
	}

	/** VMWare engine migration target. */
	export interface VmwareEngineMigrationTargetFormProperties {
	}
	export function CreateVmwareEngineMigrationTargetFormGroup() {
		return new FormGroup<VmwareEngineMigrationTargetFormProperties>({
		});

	}


	/** An insight regarding software detected on an asset. */
	export interface SoftwareInsight {

		/** Information about software detected on an asset. */
		detectedSoftware?: DetectedSoftware;
	}

	/** An insight regarding software detected on an asset. */
	export interface SoftwareInsightFormProperties {
	}
	export function CreateSoftwareInsightFormGroup() {
		return new FormGroup<SoftwareInsightFormProperties>({
		});

	}


	/** Information about software detected on an asset. */
	export interface DetectedSoftware {

		/** Output only. Software family of the detected software, e.g. Database, SAP family. */
		softwareFamily?: string | null;

		/** Output only. Software's name. */
		softwareName?: string | null;
	}

	/** Information about software detected on an asset. */
	export interface DetectedSoftwareFormProperties {

		/** Output only. Software family of the detected software, e.g. Database, SAP family. */
		softwareFamily: FormControl<string | null | undefined>,

		/** Output only. Software's name. */
		softwareName: FormControl<string | null | undefined>,
	}
	export function CreateDetectedSoftwareFormGroup() {
		return new FormGroup<DetectedSoftwareFormProperties>({
			softwareFamily: new FormControl<string | null | undefined>(undefined),
			softwareName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance data for an asset. */
	export interface AssetPerformanceData {

		/** Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent. */
		dailyResourceUsageAggregations?: Array<DailyResourceUsageAggregation>;
	}

	/** Performance data for an asset. */
	export interface AssetPerformanceDataFormProperties {
	}
	export function CreateAssetPerformanceDataFormGroup() {
		return new FormGroup<AssetPerformanceDataFormProperties>({
		});

	}


	/** Usage data aggregation for a single day. */
	export interface DailyResourceUsageAggregation {

		/** Statistical aggregation of CPU usage. */
		cpu?: DailyResourceUsageAggregationCPU;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** Statistical aggregation of disk usage. */
		disk?: DailyResourceUsageAggregationDisk;

		/** Statistical aggregation of memory usage. */
		memory?: DailyResourceUsageAggregationMemory;

		/** Statistical aggregation of network usage. */
		network?: DailyResourceUsageAggregationNetwork;
	}

	/** Usage data aggregation for a single day. */
	export interface DailyResourceUsageAggregationFormProperties {
	}
	export function CreateDailyResourceUsageAggregationFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationFormProperties>({
		});

	}


	/** Statistical aggregation of CPU usage. */
	export interface DailyResourceUsageAggregationCPU {

		/** Statistical aggregation of samples for a single resource usage. */
		utilizationPercentage?: DailyResourceUsageAggregationStats;
	}

	/** Statistical aggregation of CPU usage. */
	export interface DailyResourceUsageAggregationCPUFormProperties {
	}
	export function CreateDailyResourceUsageAggregationCPUFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationCPUFormProperties>({
		});

	}


	/** Statistical aggregation of samples for a single resource usage. */
	export interface DailyResourceUsageAggregationStats {

		/**
		 * Average usage value.
		 * Type: float
		 */
		average?: number | null;

		/**
		 * Median usage value.
		 * Type: float
		 */
		median?: number | null;

		/**
		 * 95th percentile usage value.
		 * Type: float
		 */
		ninteyFifthPercentile?: number | null;

		/**
		 * Peak usage value.
		 * Type: float
		 */
		peak?: number | null;
	}

	/** Statistical aggregation of samples for a single resource usage. */
	export interface DailyResourceUsageAggregationStatsFormProperties {

		/**
		 * Average usage value.
		 * Type: float
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Median usage value.
		 * Type: float
		 */
		median: FormControl<number | null | undefined>,

		/**
		 * 95th percentile usage value.
		 * Type: float
		 */
		ninteyFifthPercentile: FormControl<number | null | undefined>,

		/**
		 * Peak usage value.
		 * Type: float
		 */
		peak: FormControl<number | null | undefined>,
	}
	export function CreateDailyResourceUsageAggregationStatsFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationStatsFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			ninteyFifthPercentile: new FormControl<number | null | undefined>(undefined),
			peak: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistical aggregation of disk usage. */
	export interface DailyResourceUsageAggregationDisk {

		/** Statistical aggregation of samples for a single resource usage. */
		iops?: DailyResourceUsageAggregationStats;
	}

	/** Statistical aggregation of disk usage. */
	export interface DailyResourceUsageAggregationDiskFormProperties {
	}
	export function CreateDailyResourceUsageAggregationDiskFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationDiskFormProperties>({
		});

	}


	/** Statistical aggregation of memory usage. */
	export interface DailyResourceUsageAggregationMemory {

		/** Statistical aggregation of samples for a single resource usage. */
		utilizationPercentage?: DailyResourceUsageAggregationStats;
	}

	/** Statistical aggregation of memory usage. */
	export interface DailyResourceUsageAggregationMemoryFormProperties {
	}
	export function CreateDailyResourceUsageAggregationMemoryFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationMemoryFormProperties>({
		});

	}


	/** Statistical aggregation of network usage. */
	export interface DailyResourceUsageAggregationNetwork {

		/** Statistical aggregation of samples for a single resource usage. */
		egressBps?: DailyResourceUsageAggregationStats;

		/** Statistical aggregation of samples for a single resource usage. */
		ingressBps?: DailyResourceUsageAggregationStats;
	}

	/** Statistical aggregation of network usage. */
	export interface DailyResourceUsageAggregationNetworkFormProperties {
	}
	export function CreateDailyResourceUsageAggregationNetworkFormGroup() {
		return new FormGroup<DailyResourceUsageAggregationNetworkFormProperties>({
		});

	}


	/** Details of a VirtualMachine. */
	export interface VirtualMachineDetails {

		/**
		 * Number of CPU cores in the VirtualMachine. Must be non-negative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount?: number | null;

		/** VM creation timestamp. */
		createTime?: string | null;

		/** Information from Guest-level collections. */
		guestOs?: GuestOsDetails;

		/**
		 * The amount of memory in the VirtualMachine. Must be non-negative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryMb?: number | null;

		/** What family the OS belong to, if known. */
		osFamily?: VirtualMachineDetailsOsFamily | null;

		/** The name of the operating system running on the VirtualMachine. */
		osName?: string | null;

		/** The version of the operating system running on the virtual machine. */
		osVersion?: string | null;

		/** Information about the platform. */
		platform?: PlatformDetails;

		/** Power state of VM (poweredOn or poweredOff). */
		powerState?: string | null;

		/** Folder name in vCenter where asset resides. */
		vcenterFolder?: string | null;

		/** vCenter URL used in collection. */
		vcenterUrl?: string | null;

		/** vCenter VM ID. */
		vcenterVmId?: string | null;

		/** Details of the VM architecture. */
		vmArchitecture?: VirtualMachineArchitectureDetails;

		/** Details of VM disks. */
		vmDisks?: VirtualMachineDiskDetails;

		/** Virtual Machine display name. */
		vmName?: string | null;

		/** Details of network adapters and settings. */
		vmNetwork?: VirtualMachineNetworkDetails;

		/** Virtual Machine unique identifier. */
		vmUuid?: string | null;
	}

	/** Details of a VirtualMachine. */
	export interface VirtualMachineDetailsFormProperties {

		/**
		 * Number of CPU cores in the VirtualMachine. Must be non-negative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount: FormControl<number | null | undefined>,

		/** VM creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * The amount of memory in the VirtualMachine. Must be non-negative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryMb: FormControl<number | null | undefined>,

		/** What family the OS belong to, if known. */
		osFamily: FormControl<VirtualMachineDetailsOsFamily | null | undefined>,

		/** The name of the operating system running on the VirtualMachine. */
		osName: FormControl<string | null | undefined>,

		/** The version of the operating system running on the virtual machine. */
		osVersion: FormControl<string | null | undefined>,

		/** Power state of VM (poweredOn or poweredOff). */
		powerState: FormControl<string | null | undefined>,

		/** Folder name in vCenter where asset resides. */
		vcenterFolder: FormControl<string | null | undefined>,

		/** vCenter URL used in collection. */
		vcenterUrl: FormControl<string | null | undefined>,

		/** vCenter VM ID. */
		vcenterVmId: FormControl<string | null | undefined>,

		/** Virtual Machine display name. */
		vmName: FormControl<string | null | undefined>,

		/** Virtual Machine unique identifier. */
		vmUuid: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineDetailsFormGroup() {
		return new FormGroup<VirtualMachineDetailsFormProperties>({
			coreCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			osFamily: new FormControl<VirtualMachineDetailsOsFamily | null | undefined>(undefined),
			osName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			powerState: new FormControl<string | null | undefined>(undefined),
			vcenterFolder: new FormControl<string | null | undefined>(undefined),
			vcenterUrl: new FormControl<string | null | undefined>(undefined),
			vcenterVmId: new FormControl<string | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			vmUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information from Guest-level collections. */
	export interface GuestOsDetails {

		/** Guest OS config information. */
		config?: GuestConfigDetails;

		/** Guest OS runtime information. */
		runtime?: GuestRuntimeDetails;
	}

	/** Information from Guest-level collections. */
	export interface GuestOsDetailsFormProperties {
	}
	export function CreateGuestOsDetailsFormGroup() {
		return new FormGroup<GuestOsDetailsFormProperties>({
		});

	}


	/** Guest OS config information. */
	export interface GuestConfigDetails {

		/** Fstab content. */
		fstab?: FstabEntryList;

		/** Hosts content. */
		hosts?: HostsEntryList;

		/** OS issue (typically /etc/issue in Linux). */
		issue?: string | null;

		/** NFS exports. */
		nfsExports?: NfsExportList;

		/** SELinux details. */
		selinux?: Selinux;
	}

	/** Guest OS config information. */
	export interface GuestConfigDetailsFormProperties {

		/** OS issue (typically /etc/issue in Linux). */
		issue: FormControl<string | null | undefined>,
	}
	export function CreateGuestConfigDetailsFormGroup() {
		return new FormGroup<GuestConfigDetailsFormProperties>({
			issue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fstab content. */
	export interface FstabEntryList {

		/** Fstab entries. */
		entries?: Array<FstabEntry>;
	}

	/** Fstab content. */
	export interface FstabEntryListFormProperties {
	}
	export function CreateFstabEntryListFormGroup() {
		return new FormGroup<FstabEntryListFormProperties>({
		});

	}


	/** Single fstab entry. */
	export interface FstabEntry {

		/** The mount point for the filesystem. */
		file?: string | null;

		/**
		 * Used by dump to determine which filesystems need to be dumped.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freq?: number | null;

		/** Mount options associated with the filesystem. */
		mntops?: string | null;

		/**
		 * Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passno?: number | null;

		/** The block special device or remote filesystem to be mounted. */
		spec?: string | null;

		/** The type of the filesystem. */
		vfstype?: string | null;
	}

	/** Single fstab entry. */
	export interface FstabEntryFormProperties {

		/** The mount point for the filesystem. */
		file: FormControl<string | null | undefined>,

		/**
		 * Used by dump to determine which filesystems need to be dumped.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freq: FormControl<number | null | undefined>,

		/** Mount options associated with the filesystem. */
		mntops: FormControl<string | null | undefined>,

		/**
		 * Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		passno: FormControl<number | null | undefined>,

		/** The block special device or remote filesystem to be mounted. */
		spec: FormControl<string | null | undefined>,

		/** The type of the filesystem. */
		vfstype: FormControl<string | null | undefined>,
	}
	export function CreateFstabEntryFormGroup() {
		return new FormGroup<FstabEntryFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			freq: new FormControl<number | null | undefined>(undefined),
			mntops: new FormControl<string | null | undefined>(undefined),
			passno: new FormControl<number | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			vfstype: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hosts content. */
	export interface HostsEntryList {

		/** Hosts entries. */
		entries?: Array<HostsEntry>;
	}

	/** Hosts content. */
	export interface HostsEntryListFormProperties {
	}
	export function CreateHostsEntryListFormGroup() {
		return new FormGroup<HostsEntryListFormProperties>({
		});

	}


	/** Single /etc/hosts entry. */
	export interface HostsEntry {

		/** List of host names / aliases. */
		hostNames?: Array<string>;

		/** IP (raw, IPv4/6 agnostic). */
		ip?: string | null;
	}

	/** Single /etc/hosts entry. */
	export interface HostsEntryFormProperties {

		/** IP (raw, IPv4/6 agnostic). */
		ip: FormControl<string | null | undefined>,
	}
	export function CreateHostsEntryFormGroup() {
		return new FormGroup<HostsEntryFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NFS exports. */
	export interface NfsExportList {

		/** NFS export entries. */
		entries?: Array<NfsExport>;
	}

	/** NFS exports. */
	export interface NfsExportListFormProperties {
	}
	export function CreateNfsExportListFormGroup() {
		return new FormGroup<NfsExportListFormProperties>({
		});

	}


	/** NFS export. */
	export interface NfsExport {

		/** The directory being exported. */
		exportDirectory?: string | null;

		/** The hosts or networks to which the export is being shared. */
		hosts?: Array<string>;
	}

	/** NFS export. */
	export interface NfsExportFormProperties {

		/** The directory being exported. */
		exportDirectory: FormControl<string | null | undefined>,
	}
	export function CreateNfsExportFormGroup() {
		return new FormGroup<NfsExportFormProperties>({
			exportDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SELinux details. */
	export interface Selinux {

		/** Is SELinux enabled. */
		enabled?: boolean | null;

		/** SELinux mode enforcing / permissive. */
		mode?: string | null;
	}

	/** SELinux details. */
	export interface SelinuxFormProperties {

		/** Is SELinux enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** SELinux mode enforcing / permissive. */
		mode: FormControl<string | null | undefined>,
	}
	export function CreateSelinuxFormGroup() {
		return new FormGroup<SelinuxFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guest OS runtime information. */
	export interface GuestRuntimeDetails {

		/** Domain, e.g. c.stratozone-development.internal. */
		domain?: string | null;

		/** Guest installed application list. */
		installedApps?: GuestInstalledApplicationList;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		lastUptime?: Date;

		/** Machine name. */
		machineName?: string | null;

		/** Runtime networking information. */
		networkInfo?: RuntimeNetworkInfo;

		/** Open file list. */
		openFileList?: OpenFileList;

		/** List of running guest OS processes. */
		processes?: RunningProcessList;

		/** List of running guest OS services. */
		services?: RunningServiceList;
	}

	/** Guest OS runtime information. */
	export interface GuestRuntimeDetailsFormProperties {

		/** Domain, e.g. c.stratozone-development.internal. */
		domain: FormControl<string | null | undefined>,

		/** Machine name. */
		machineName: FormControl<string | null | undefined>,
	}
	export function CreateGuestRuntimeDetailsFormGroup() {
		return new FormGroup<GuestRuntimeDetailsFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			machineName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guest installed application list. */
	export interface GuestInstalledApplicationList {

		/** Application entries. */
		entries?: Array<GuestInstalledApplication>;
	}

	/** Guest installed application list. */
	export interface GuestInstalledApplicationListFormProperties {
	}
	export function CreateGuestInstalledApplicationListFormGroup() {
		return new FormGroup<GuestInstalledApplicationListFormProperties>({
		});

	}


	/** Guest installed application information. */
	export interface GuestInstalledApplication {

		/** License strings associated with the installed application. */
		licenses?: Array<string>;

		/** Installed application name. */
		name?: string | null;

		/** Source path. */
		path?: string | null;

		/** Date application was installed. */
		time?: string | null;

		/** Installed application vendor. */
		vendor?: string | null;

		/** Installed application version. */
		version?: string | null;
	}

	/** Guest installed application information. */
	export interface GuestInstalledApplicationFormProperties {

		/** Installed application name. */
		name: FormControl<string | null | undefined>,

		/** Source path. */
		path: FormControl<string | null | undefined>,

		/** Date application was installed. */
		time: FormControl<string | null | undefined>,

		/** Installed application vendor. */
		vendor: FormControl<string | null | undefined>,

		/** Installed application version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGuestInstalledApplicationFormGroup() {
		return new FormGroup<GuestInstalledApplicationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runtime networking information. */
	export interface RuntimeNetworkInfo {

		/** Network connection list. */
		connections?: NetworkConnectionList;

		/** Netstat (raw, OS-agnostic). */
		netstat?: string | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		netstatTime?: DateTime;
	}

	/** Runtime networking information. */
	export interface RuntimeNetworkInfoFormProperties {

		/** Netstat (raw, OS-agnostic). */
		netstat: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeNetworkInfoFormGroup() {
		return new FormGroup<RuntimeNetworkInfoFormProperties>({
			netstat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network connection list. */
	export interface NetworkConnectionList {

		/** Network connection entries. */
		entries?: Array<NetworkConnection>;
	}

	/** Network connection list. */
	export interface NetworkConnectionListFormProperties {
	}
	export function CreateNetworkConnectionListFormGroup() {
		return new FormGroup<NetworkConnectionListFormProperties>({
		});

	}

	export interface NetworkConnection {

		/** Local IP address. */
		localIpAddress?: string | null;

		/**
		 * Local port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		localPort?: number | null;

		/** Process ID. */
		pid?: string | null;

		/** Process or service name. */
		processName?: string | null;

		/** Connection protocol (e.g. TCP/UDP). */
		protocol?: string | null;

		/** Remote IP address. */
		remoteIpAddress?: string | null;

		/**
		 * Remote port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remotePort?: number | null;

		/** Connection state (e.g. CONNECTED). */
		state?: string | null;
	}
	export interface NetworkConnectionFormProperties {

		/** Local IP address. */
		localIpAddress: FormControl<string | null | undefined>,

		/**
		 * Local port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		localPort: FormControl<number | null | undefined>,

		/** Process ID. */
		pid: FormControl<string | null | undefined>,

		/** Process or service name. */
		processName: FormControl<string | null | undefined>,

		/** Connection protocol (e.g. TCP/UDP). */
		protocol: FormControl<string | null | undefined>,

		/** Remote IP address. */
		remoteIpAddress: FormControl<string | null | undefined>,

		/**
		 * Remote port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remotePort: FormControl<number | null | undefined>,

		/** Connection state (e.g. CONNECTED). */
		state: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConnectionFormGroup() {
		return new FormGroup<NetworkConnectionFormProperties>({
			localIpAddress: new FormControl<string | null | undefined>(undefined),
			localPort: new FormControl<number | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			processName: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			remoteIpAddress: new FormControl<string | null | undefined>(undefined),
			remotePort: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface DateTime {

		/**
		 * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		timeZone?: TimeZone;

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset?: string | null;

		/**
		 * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface DateTimeFormProperties {

		/**
		 * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset: FormControl<string | null | undefined>,

		/**
		 * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateTimeFormGroup() {
		return new FormGroup<DateTimeFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
			utcOffset: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Open file list. */
	export interface OpenFileList {

		/** Open file details entries. */
		entries?: Array<OpenFileDetails>;
	}

	/** Open file list. */
	export interface OpenFileListFormProperties {
	}
	export function CreateOpenFileListFormGroup() {
		return new FormGroup<OpenFileListFormProperties>({
		});

	}


	/** Open file Information. */
	export interface OpenFileDetails {

		/** Opened file command. */
		command?: string | null;

		/** Opened file file path. */
		filePath?: string | null;

		/** Opened file file type. */
		fileType?: string | null;

		/** Opened file user. */
		user?: string | null;
	}

	/** Open file Information. */
	export interface OpenFileDetailsFormProperties {

		/** Opened file command. */
		command: FormControl<string | null | undefined>,

		/** Opened file file path. */
		filePath: FormControl<string | null | undefined>,

		/** Opened file file type. */
		fileType: FormControl<string | null | undefined>,

		/** Opened file user. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateOpenFileDetailsFormGroup() {
		return new FormGroup<OpenFileDetailsFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of running guest OS processes. */
	export interface RunningProcessList {

		/** Running process entries. */
		processes?: Array<RunningProcess>;
	}

	/** List of running guest OS processes. */
	export interface RunningProcessListFormProperties {
	}
	export function CreateRunningProcessListFormGroup() {
		return new FormGroup<RunningProcessListFormProperties>({
		});

	}


	/** Guest OS running process details. */
	export interface RunningProcess {

		/** Process extended attributes. */
		attributes?: {[id: string]: string };

		/** Process full command line. */
		cmdline?: string | null;

		/** Process binary path. */
		exePath?: string | null;

		/** Process ID. */
		pid?: string | null;

		/** User running the process. */
		user?: string | null;
	}

	/** Guest OS running process details. */
	export interface RunningProcessFormProperties {

		/** Process extended attributes. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Process full command line. */
		cmdline: FormControl<string | null | undefined>,

		/** Process binary path. */
		exePath: FormControl<string | null | undefined>,

		/** Process ID. */
		pid: FormControl<string | null | undefined>,

		/** User running the process. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateRunningProcessFormGroup() {
		return new FormGroup<RunningProcessFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			cmdline: new FormControl<string | null | undefined>(undefined),
			exePath: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of running guest OS services. */
	export interface RunningServiceList {

		/** Running service entries. */
		services?: Array<RunningService>;
	}

	/** List of running guest OS services. */
	export interface RunningServiceListFormProperties {
	}
	export function CreateRunningServiceListFormGroup() {
		return new FormGroup<RunningServiceListFormProperties>({
		});

	}


	/** Guest OS running service details. */
	export interface RunningService {

		/** Service command line. */
		cmdline?: string | null;

		/** Service binary path. */
		exePath?: string | null;

		/** Service name. */
		name?: string | null;

		/** Service pid. */
		pid?: string | null;

		/** Service start mode (raw, OS-agnostic). */
		startMode?: string | null;

		/** Service state (raw, OS-agnostic). */
		state?: string | null;

		/** Service status. */
		status?: string | null;
	}

	/** Guest OS running service details. */
	export interface RunningServiceFormProperties {

		/** Service command line. */
		cmdline: FormControl<string | null | undefined>,

		/** Service binary path. */
		exePath: FormControl<string | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/** Service pid. */
		pid: FormControl<string | null | undefined>,

		/** Service start mode (raw, OS-agnostic). */
		startMode: FormControl<string | null | undefined>,

		/** Service state (raw, OS-agnostic). */
		state: FormControl<string | null | undefined>,

		/** Service status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateRunningServiceFormGroup() {
		return new FormGroup<RunningServiceFormProperties>({
			cmdline: new FormControl<string | null | undefined>(undefined),
			exePath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			startMode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineDetailsOsFamily { OS_FAMILY_UNKNOWN = 'OS_FAMILY_UNKNOWN', OS_FAMILY_WINDOWS = 'OS_FAMILY_WINDOWS', OS_FAMILY_LINUX = 'OS_FAMILY_LINUX', OS_FAMILY_UNIX = 'OS_FAMILY_UNIX' }


	/** Information about the platform. */
	export interface PlatformDetails {

		/** AWS EC2 specific details. */
		awsEc2Details?: AwsEc2PlatformDetails;

		/** Azure VM specific details. */
		azureVmDetails?: AzureVmPlatformDetails;

		/** Generic platform details. */
		genericDetails?: GenericPlatformDetails;

		/** Platform specific details for Physical Machines. */
		physicalDetails?: PhysicalPlatformDetails;

		/** VMware specific details. */
		vmwareDetails?: VmwarePlatformDetails;
	}

	/** Information about the platform. */
	export interface PlatformDetailsFormProperties {
	}
	export function CreatePlatformDetailsFormGroup() {
		return new FormGroup<PlatformDetailsFormProperties>({
		});

	}


	/** AWS EC2 specific details. */
	export interface AwsEc2PlatformDetails {

		/** The location of the machine in the AWS format. */
		location?: string | null;

		/** AWS platform's machine type label. */
		machineTypeLabel?: string | null;
	}

	/** AWS EC2 specific details. */
	export interface AwsEc2PlatformDetailsFormProperties {

		/** The location of the machine in the AWS format. */
		location: FormControl<string | null | undefined>,

		/** AWS platform's machine type label. */
		machineTypeLabel: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2PlatformDetailsFormGroup() {
		return new FormGroup<AwsEc2PlatformDetailsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			machineTypeLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure VM specific details. */
	export interface AzureVmPlatformDetails {

		/** The location of the machine in the Azure format. */
		location?: string | null;

		/** Azure platform's machine type label. */
		machineTypeLabel?: string | null;

		/** Azure platform's provisioning state. */
		provisioningState?: string | null;
	}

	/** Azure VM specific details. */
	export interface AzureVmPlatformDetailsFormProperties {

		/** The location of the machine in the Azure format. */
		location: FormControl<string | null | undefined>,

		/** Azure platform's machine type label. */
		machineTypeLabel: FormControl<string | null | undefined>,

		/** Azure platform's provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateAzureVmPlatformDetailsFormGroup() {
		return new FormGroup<AzureVmPlatformDetailsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			machineTypeLabel: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Generic platform details. */
	export interface GenericPlatformDetails {

		/** Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field. */
		location?: string | null;
	}

	/** Generic platform details. */
	export interface GenericPlatformDetailsFormProperties {

		/** Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateGenericPlatformDetailsFormGroup() {
		return new FormGroup<GenericPlatformDetailsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Platform specific details for Physical Machines. */
	export interface PhysicalPlatformDetails {

		/** Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field. */
		location?: string | null;
	}

	/** Platform specific details for Physical Machines. */
	export interface PhysicalPlatformDetailsFormProperties {

		/** Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field. */
		location: FormControl<string | null | undefined>,
	}
	export function CreatePhysicalPlatformDetailsFormGroup() {
		return new FormGroup<PhysicalPlatformDetailsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VMware specific details. */
	export interface VmwarePlatformDetails {

		/** ESX version. */
		esxVersion?: string | null;

		/** VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. */
		osid?: string | null;

		/** vCenter version. */
		vcenterVersion?: string | null;
	}

	/** VMware specific details. */
	export interface VmwarePlatformDetailsFormProperties {

		/** ESX version. */
		esxVersion: FormControl<string | null | undefined>,

		/** VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. */
		osid: FormControl<string | null | undefined>,

		/** vCenter version. */
		vcenterVersion: FormControl<string | null | undefined>,
	}
	export function CreateVmwarePlatformDetailsFormGroup() {
		return new FormGroup<VmwarePlatformDetailsFormProperties>({
			esxVersion: new FormControl<string | null | undefined>(undefined),
			osid: new FormControl<string | null | undefined>(undefined),
			vcenterVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the VM architecture. */
	export interface VirtualMachineArchitectureDetails {

		/** Details about the BIOS. */
		bios?: BiosDetails;

		/** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
		cpuArchitecture?: string | null;

		/** CPU manufacturer, e.g., "Intel", "AMD". */
		cpuManufacturer?: string | null;

		/** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
		cpuName?: string | null;

		/**
		 * Number of processor sockets allocated to the machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuSocketCount?: number | null;

		/**
		 * Number of CPU threads allocated to the machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuThreadCount?: number | null;

		/** Firmware (BIOS/efi). */
		firmware?: string | null;

		/** CPU hyperthreading support. */
		hyperthreading?: VirtualMachineArchitectureDetailsHyperthreading | null;

		/** Hardware vendor. */
		vendor?: string | null;
	}

	/** Details of the VM architecture. */
	export interface VirtualMachineArchitectureDetailsFormProperties {

		/** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
		cpuArchitecture: FormControl<string | null | undefined>,

		/** CPU manufacturer, e.g., "Intel", "AMD". */
		cpuManufacturer: FormControl<string | null | undefined>,

		/** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
		cpuName: FormControl<string | null | undefined>,

		/**
		 * Number of processor sockets allocated to the machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuSocketCount: FormControl<number | null | undefined>,

		/**
		 * Number of CPU threads allocated to the machine.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuThreadCount: FormControl<number | null | undefined>,

		/** Firmware (BIOS/efi). */
		firmware: FormControl<string | null | undefined>,

		/** CPU hyperthreading support. */
		hyperthreading: FormControl<VirtualMachineArchitectureDetailsHyperthreading | null | undefined>,

		/** Hardware vendor. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineArchitectureDetailsFormGroup() {
		return new FormGroup<VirtualMachineArchitectureDetailsFormProperties>({
			cpuArchitecture: new FormControl<string | null | undefined>(undefined),
			cpuManufacturer: new FormControl<string | null | undefined>(undefined),
			cpuName: new FormControl<string | null | undefined>(undefined),
			cpuSocketCount: new FormControl<number | null | undefined>(undefined),
			cpuThreadCount: new FormControl<number | null | undefined>(undefined),
			firmware: new FormControl<string | null | undefined>(undefined),
			hyperthreading: new FormControl<VirtualMachineArchitectureDetailsHyperthreading | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the BIOS. */
	export interface BiosDetails {

		/** BIOS manufacturer. */
		biosManufacturer?: string | null;

		/** BIOS name. */
		biosName?: string | null;

		/** BIOS release date. */
		biosReleaseDate?: string | null;

		/** BIOS version. */
		biosVersion?: string | null;

		/** SMBIOS UUID. */
		smbiosUuid?: string | null;
	}

	/** Details about the BIOS. */
	export interface BiosDetailsFormProperties {

		/** BIOS manufacturer. */
		biosManufacturer: FormControl<string | null | undefined>,

		/** BIOS name. */
		biosName: FormControl<string | null | undefined>,

		/** BIOS release date. */
		biosReleaseDate: FormControl<string | null | undefined>,

		/** BIOS version. */
		biosVersion: FormControl<string | null | undefined>,

		/** SMBIOS UUID. */
		smbiosUuid: FormControl<string | null | undefined>,
	}
	export function CreateBiosDetailsFormGroup() {
		return new FormGroup<BiosDetailsFormProperties>({
			biosManufacturer: new FormControl<string | null | undefined>(undefined),
			biosName: new FormControl<string | null | undefined>(undefined),
			biosReleaseDate: new FormControl<string | null | undefined>(undefined),
			biosVersion: new FormControl<string | null | undefined>(undefined),
			smbiosUuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineArchitectureDetailsHyperthreading { HYPER_THREADING_UNSPECIFIED = 'HYPER_THREADING_UNSPECIFIED', HYPER_THREADING_DISABLED = 'HYPER_THREADING_DISABLED', HYPER_THREADING_ENABLED = 'HYPER_THREADING_ENABLED' }


	/** Details of VM disks. */
	export interface VirtualMachineDiskDetails {

		/** VM disks. */
		disks?: DiskEntryList;

		/** Disk total Capacity. */
		hddTotalCapacityBytes?: string | null;

		/** Total Disk Free Space. */
		hddTotalFreeBytes?: string | null;

		/** Raw lsblk output in json. */
		lsblkJson?: string | null;
	}

	/** Details of VM disks. */
	export interface VirtualMachineDiskDetailsFormProperties {

		/** Disk total Capacity. */
		hddTotalCapacityBytes: FormControl<string | null | undefined>,

		/** Total Disk Free Space. */
		hddTotalFreeBytes: FormControl<string | null | undefined>,

		/** Raw lsblk output in json. */
		lsblkJson: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineDiskDetailsFormGroup() {
		return new FormGroup<VirtualMachineDiskDetailsFormProperties>({
			hddTotalCapacityBytes: new FormControl<string | null | undefined>(undefined),
			hddTotalFreeBytes: new FormControl<string | null | undefined>(undefined),
			lsblkJson: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VM disks. */
	export interface DiskEntryList {

		/** Disk entries. */
		entries?: Array<DiskEntry>;
	}

	/** VM disks. */
	export interface DiskEntryListFormProperties {
	}
	export function CreateDiskEntryListFormGroup() {
		return new FormGroup<DiskEntryListFormProperties>({
		});

	}


	/** Single disk entry. */
	export interface DiskEntry {

		/** Disk label. */
		diskLabel?: string | null;

		/** Disk label type (e.g. BIOS/GPT) */
		diskLabelType?: string | null;

		/** Disk hardware address (e.g. 0:1 for SCSI). */
		hwAddress?: string | null;

		/** Disks interface type (e.g. SATA/SCSI) */
		interfaceType?: string | null;

		/** Disk partition list. */
		partitions?: DiskPartitionList;

		/** Disk status (e.g. online). */
		status?: string | null;

		/** Disk capacity. */
		totalCapacityBytes?: string | null;

		/** Disk free space. */
		totalFreeBytes?: string | null;

		/** VMware disk config details. */
		vmwareConfig?: VmwareDiskConfig;
	}

	/** Single disk entry. */
	export interface DiskEntryFormProperties {

		/** Disk label. */
		diskLabel: FormControl<string | null | undefined>,

		/** Disk label type (e.g. BIOS/GPT) */
		diskLabelType: FormControl<string | null | undefined>,

		/** Disk hardware address (e.g. 0:1 for SCSI). */
		hwAddress: FormControl<string | null | undefined>,

		/** Disks interface type (e.g. SATA/SCSI) */
		interfaceType: FormControl<string | null | undefined>,

		/** Disk status (e.g. online). */
		status: FormControl<string | null | undefined>,

		/** Disk capacity. */
		totalCapacityBytes: FormControl<string | null | undefined>,

		/** Disk free space. */
		totalFreeBytes: FormControl<string | null | undefined>,
	}
	export function CreateDiskEntryFormGroup() {
		return new FormGroup<DiskEntryFormProperties>({
			diskLabel: new FormControl<string | null | undefined>(undefined),
			diskLabelType: new FormControl<string | null | undefined>(undefined),
			hwAddress: new FormControl<string | null | undefined>(undefined),
			interfaceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			totalCapacityBytes: new FormControl<string | null | undefined>(undefined),
			totalFreeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk partition list. */
	export interface DiskPartitionList {

		/** Partition entries. */
		entries?: Array<DiskPartition>;
	}

	/** Disk partition list. */
	export interface DiskPartitionListFormProperties {
	}
	export function CreateDiskPartitionListFormGroup() {
		return new FormGroup<DiskPartitionListFormProperties>({
		});

	}


	/** Disk Partition details. */
	export interface DiskPartition {

		/** Partition capacity. */
		capacityBytes?: string | null;

		/** Partition file system. */
		fileSystem?: string | null;

		/** Partition free space. */
		freeBytes?: string | null;

		/** Mount pount (Linux/Windows) or drive letter (Windows). */
		mountPoint?: string | null;

		/** Disk partition list. */
		subPartitions?: DiskPartitionList;

		/** Partition type (e.g. BIOS boot). */
		type?: string | null;

		/** Partition UUID. */
		uuid?: string | null;
	}

	/** Disk Partition details. */
	export interface DiskPartitionFormProperties {

		/** Partition capacity. */
		capacityBytes: FormControl<string | null | undefined>,

		/** Partition file system. */
		fileSystem: FormControl<string | null | undefined>,

		/** Partition free space. */
		freeBytes: FormControl<string | null | undefined>,

		/** Mount pount (Linux/Windows) or drive letter (Windows). */
		mountPoint: FormControl<string | null | undefined>,

		/** Partition type (e.g. BIOS boot). */
		type: FormControl<string | null | undefined>,

		/** Partition UUID. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateDiskPartitionFormGroup() {
		return new FormGroup<DiskPartitionFormProperties>({
			capacityBytes: new FormControl<string | null | undefined>(undefined),
			fileSystem: new FormControl<string | null | undefined>(undefined),
			freeBytes: new FormControl<string | null | undefined>(undefined),
			mountPoint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VMware disk config details. */
	export interface VmwareDiskConfig {

		/** VMDK backing type. */
		backingType?: VmwareDiskConfigBackingType | null;

		/** RDM compatibility mode. */
		rdmCompatibilityMode?: string | null;

		/** Is VMDK shared with other VMs. */
		shared?: boolean | null;

		/** VMDK disk mode. */
		vmdkDiskMode?: string | null;
	}

	/** VMware disk config details. */
	export interface VmwareDiskConfigFormProperties {

		/** VMDK backing type. */
		backingType: FormControl<VmwareDiskConfigBackingType | null | undefined>,

		/** RDM compatibility mode. */
		rdmCompatibilityMode: FormControl<string | null | undefined>,

		/** Is VMDK shared with other VMs. */
		shared: FormControl<boolean | null | undefined>,

		/** VMDK disk mode. */
		vmdkDiskMode: FormControl<string | null | undefined>,
	}
	export function CreateVmwareDiskConfigFormGroup() {
		return new FormGroup<VmwareDiskConfigFormProperties>({
			backingType: new FormControl<VmwareDiskConfigBackingType | null | undefined>(undefined),
			rdmCompatibilityMode: new FormControl<string | null | undefined>(undefined),
			shared: new FormControl<boolean | null | undefined>(undefined),
			vmdkDiskMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VmwareDiskConfigBackingType { BACKING_TYPE_UNSPECIFIED = 'BACKING_TYPE_UNSPECIFIED', BACKING_TYPE_FLAT_V1 = 'BACKING_TYPE_FLAT_V1', BACKING_TYPE_FLAT_V2 = 'BACKING_TYPE_FLAT_V2', BACKING_TYPE_PMEM = 'BACKING_TYPE_PMEM', BACKING_TYPE_RDM_V1 = 'BACKING_TYPE_RDM_V1', BACKING_TYPE_RDM_V2 = 'BACKING_TYPE_RDM_V2', BACKING_TYPE_SESPARSE = 'BACKING_TYPE_SESPARSE', BACKING_TYPE_SESPARSE_V1 = 'BACKING_TYPE_SESPARSE_V1', BACKING_TYPE_SESPARSE_V2 = 'BACKING_TYPE_SESPARSE_V2' }


	/** Details of network adapters and settings. */
	export interface VirtualMachineNetworkDetails {

		/** Default gateway address. */
		defaultGw?: string | null;

		/** List of network adapters. */
		networkAdapters?: NetworkAdapterList;

		/** IP address of the machine. */
		primaryIpAddress?: string | null;

		/** MAC address of the machine. This property is used to uniqly identify the machine. */
		primaryMacAddress?: string | null;

		/** Public IP address of the machine. */
		publicIpAddress?: string | null;
	}

	/** Details of network adapters and settings. */
	export interface VirtualMachineNetworkDetailsFormProperties {

		/** Default gateway address. */
		defaultGw: FormControl<string | null | undefined>,

		/** IP address of the machine. */
		primaryIpAddress: FormControl<string | null | undefined>,

		/** MAC address of the machine. This property is used to uniqly identify the machine. */
		primaryMacAddress: FormControl<string | null | undefined>,

		/** Public IP address of the machine. */
		publicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineNetworkDetailsFormGroup() {
		return new FormGroup<VirtualMachineNetworkDetailsFormProperties>({
			defaultGw: new FormControl<string | null | undefined>(undefined),
			primaryIpAddress: new FormControl<string | null | undefined>(undefined),
			primaryMacAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of network adapters. */
	export interface NetworkAdapterList {

		/** Network adapter descriptions. */
		networkAdapters?: Array<NetworkAdapterDetails>;
	}

	/** List of network adapters. */
	export interface NetworkAdapterListFormProperties {
	}
	export function CreateNetworkAdapterListFormGroup() {
		return new FormGroup<NetworkAdapterListFormProperties>({
		});

	}


	/** Details of network adapter. */
	export interface NetworkAdapterDetails {

		/** Network adapter type (e.g. VMXNET3). */
		adapterType?: string | null;

		/** List of allocated/assigned network addresses. */
		addresses?: NetworkAddressList;

		/** MAC address. */
		macAddress?: string | null;
	}

	/** Details of network adapter. */
	export interface NetworkAdapterDetailsFormProperties {

		/** Network adapter type (e.g. VMXNET3). */
		adapterType: FormControl<string | null | undefined>,

		/** MAC address. */
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAdapterDetailsFormGroup() {
		return new FormGroup<NetworkAdapterDetailsFormProperties>({
			adapterType: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of allocated/assigned network addresses. */
	export interface NetworkAddressList {

		/** Network address entries. */
		addresses?: Array<NetworkAddress>;
	}

	/** List of allocated/assigned network addresses. */
	export interface NetworkAddressListFormProperties {
	}
	export function CreateNetworkAddressListFormGroup() {
		return new FormGroup<NetworkAddressListFormProperties>({
		});

	}


	/** Details of network address. */
	export interface NetworkAddress {

		/** Whether DHCP is used to assign addresses. */
		assignment?: NetworkAddressAssignment | null;

		/** Broadcast address. */
		bcast?: string | null;

		/** Fully qualified domain name. */
		fqdn?: string | null;

		/** Assigned or configured IP Address. */
		ipAddress?: string | null;

		/** Subnet mask. */
		subnetMask?: string | null;
	}

	/** Details of network address. */
	export interface NetworkAddressFormProperties {

		/** Whether DHCP is used to assign addresses. */
		assignment: FormControl<NetworkAddressAssignment | null | undefined>,

		/** Broadcast address. */
		bcast: FormControl<string | null | undefined>,

		/** Fully qualified domain name. */
		fqdn: FormControl<string | null | undefined>,

		/** Assigned or configured IP Address. */
		ipAddress: FormControl<string | null | undefined>,

		/** Subnet mask. */
		subnetMask: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAddressFormGroup() {
		return new FormGroup<NetworkAddressFormProperties>({
			assignment: new FormControl<NetworkAddressAssignment | null | undefined>(undefined),
			bcast: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkAddressAssignment { ADDRESS_ASSIGNMENT_UNSPECIFIED = 'ADDRESS_ASSIGNMENT_UNSPECIFIED', ADDRESS_ASSIGNMENT_STATIC = 'ADDRESS_ASSIGNMENT_STATIC', ADDRESS_ASSIGNMENT_DHCP = 'ADDRESS_ASSIGNMENT_DHCP' }


	/** Contains data reported from an inventory source on an asset. */
	export interface AssetFrame {

		/** Generic asset attributes. */
		attributes?: {[id: string]: string };

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored. */
		performanceSamples?: Array<PerformanceSample>;

		/** The time the data was reported. */
		reportTime?: string | null;

		/** Optional. Trace token is optionally provided to assist with debugging and traceability. */
		traceToken?: string | null;

		/** Details of a VirtualMachine. */
		virtualMachineDetails?: VirtualMachineDetails;
	}

	/** Contains data reported from an inventory source on an asset. */
	export interface AssetFrameFormProperties {

		/** Generic asset attributes. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The time the data was reported. */
		reportTime: FormControl<string | null | undefined>,

		/** Optional. Trace token is optionally provided to assist with debugging and traceability. */
		traceToken: FormControl<string | null | undefined>,
	}
	export function CreateAssetFrameFormGroup() {
		return new FormGroup<AssetFrameFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reportTime: new FormControl<string | null | undefined>(undefined),
			traceToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance data sample. */
	export interface PerformanceSample {

		/** CPU usage sample. */
		cpu?: CpuUsageSample;

		/** Disk usage sample. Values are across all disks. */
		disk?: DiskUsageSample;

		/** Memory usage sample. */
		memory?: MemoryUsageSample;

		/** Network usage sample. Values are across all network interfaces. */
		network?: NetworkUsageSample;

		/** Time the sample was collected. If omitted, the frame report time will be used. */
		sampleTime?: string | null;
	}

	/** Performance data sample. */
	export interface PerformanceSampleFormProperties {

		/** Time the sample was collected. If omitted, the frame report time will be used. */
		sampleTime: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceSampleFormGroup() {
		return new FormGroup<PerformanceSampleFormProperties>({
			sampleTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CPU usage sample. */
	export interface CpuUsageSample {

		/**
		 * Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.
		 * Type: float
		 */
		utilizedPercentage?: number | null;
	}

	/** CPU usage sample. */
	export interface CpuUsageSampleFormProperties {

		/**
		 * Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage.
		 * Type: float
		 */
		utilizedPercentage: FormControl<number | null | undefined>,
	}
	export function CreateCpuUsageSampleFormGroup() {
		return new FormGroup<CpuUsageSampleFormProperties>({
			utilizedPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Disk usage sample. Values are across all disks. */
	export interface DiskUsageSample {

		/**
		 * Average IOPS sampled over a short window. Must be non-negative. Must be equal to the sum of read and write if one of them is positive. if both read and write are zero they are ignored.
		 * Type: float
		 */
		averageIops?: number | null;
	}

	/** Disk usage sample. Values are across all disks. */
	export interface DiskUsageSampleFormProperties {

		/**
		 * Average IOPS sampled over a short window. Must be non-negative. Must be equal to the sum of read and write if one of them is positive. if both read and write are zero they are ignored.
		 * Type: float
		 */
		averageIops: FormControl<number | null | undefined>,
	}
	export function CreateDiskUsageSampleFormGroup() {
		return new FormGroup<DiskUsageSampleFormProperties>({
			averageIops: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Memory usage sample. */
	export interface MemoryUsageSample {

		/**
		 * Percentage of system memory utilized. Must be in the interval [0, 100].
		 * Type: float
		 */
		utilizedPercentage?: number | null;
	}

	/** Memory usage sample. */
	export interface MemoryUsageSampleFormProperties {

		/**
		 * Percentage of system memory utilized. Must be in the interval [0, 100].
		 * Type: float
		 */
		utilizedPercentage: FormControl<number | null | undefined>,
	}
	export function CreateMemoryUsageSampleFormGroup() {
		return new FormGroup<MemoryUsageSampleFormProperties>({
			utilizedPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Network usage sample. Values are across all network interfaces. */
	export interface NetworkUsageSample {

		/**
		 * Average network egress in B/s sampled over a short window. Must be non-negative.
		 * Type: float
		 */
		averageEgressBps?: number | null;

		/**
		 * Average network ingress in B/s sampled over a short window. Must be non-negative.
		 * Type: float
		 */
		averageIngressBps?: number | null;
	}

	/** Network usage sample. Values are across all network interfaces. */
	export interface NetworkUsageSampleFormProperties {

		/**
		 * Average network egress in B/s sampled over a short window. Must be non-negative.
		 * Type: float
		 */
		averageEgressBps: FormControl<number | null | undefined>,

		/**
		 * Average network ingress in B/s sampled over a short window. Must be non-negative.
		 * Type: float
		 */
		averageIngressBps: FormControl<number | null | undefined>,
	}
	export function CreateNetworkUsageSampleFormGroup() {
		return new FormGroup<NetworkUsageSampleFormProperties>({
			averageEgressBps: new FormControl<number | null | undefined>(undefined),
			averageIngressBps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A request to delete a list of asset. */
	export interface BatchDeleteAssetsRequest {

		/** Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`. */
		allowMissing?: boolean | null;

		/** Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. */
		names?: Array<string>;
	}

	/** A request to delete a list of asset. */
	export interface BatchDeleteAssetsRequestFormProperties {

		/** Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`. */
		allowMissing: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchDeleteAssetsRequestFormGroup() {
		return new FormGroup<BatchDeleteAssetsRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to update a list of assets. */
	export interface BatchUpdateAssetsRequest {

		/** Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. */
		requests?: Array<UpdateAssetRequest>;
	}

	/** A request to update a list of assets. */
	export interface BatchUpdateAssetsRequestFormProperties {
	}
	export function CreateBatchUpdateAssetsRequestFormGroup() {
		return new FormGroup<BatchUpdateAssetsRequestFormProperties>({
		});

	}


	/** A request to update an asset. */
	export interface UpdateAssetRequest {

		/** An asset represents a resource in your environment. Asset types include virtual machines and databases. */
		asset?: Asset;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
		updateMask?: string | null;
	}

	/** A request to update an asset. */
	export interface UpdateAssetRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetRequestFormGroup() {
		return new FormGroup<UpdateAssetRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for updating a list of assets. */
	export interface BatchUpdateAssetsResponse {

		/** Update asset content. The content only includes values after field mask being applied. */
		assets?: Array<Asset>;
	}

	/** Response for updating a list of assets. */
	export interface BatchUpdateAssetsResponseFormProperties {
	}
	export function CreateBatchUpdateAssetsResponseFormGroup() {
		return new FormGroup<BatchUpdateAssetsResponseFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** The user preferences relating to Compute Engine target platform. */
	export interface ComputeEnginePreferences {

		/** License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. */
		licenseType?: ComputeEnginePreferencesLicenseType | null;

		/** The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions. */
		machinePreferences?: MachinePreferences;

		/** Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. */
		persistentDiskType?: ComputeStorageDescriptorType | null;
	}

	/** The user preferences relating to Compute Engine target platform. */
	export interface ComputeEnginePreferencesFormProperties {

		/** License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. */
		licenseType: FormControl<ComputeEnginePreferencesLicenseType | null | undefined>,

		/** Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. */
		persistentDiskType: FormControl<ComputeStorageDescriptorType | null | undefined>,
	}
	export function CreateComputeEnginePreferencesFormGroup() {
		return new FormGroup<ComputeEnginePreferencesFormProperties>({
			licenseType: new FormControl<ComputeEnginePreferencesLicenseType | null | undefined>(undefined),
			persistentDiskType: new FormControl<ComputeStorageDescriptorType | null | undefined>(undefined),
		});

	}

	export enum ComputeEnginePreferencesLicenseType { LICENSE_TYPE_UNSPECIFIED = 'LICENSE_TYPE_UNSPECIFIED', LICENSE_TYPE_DEFAULT = 'LICENSE_TYPE_DEFAULT', LICENSE_TYPE_BRING_YOUR_OWN_LICENSE = 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE' }


	/** The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions. */
	export interface MachinePreferences {

		/** Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. */
		allowedMachineSeries?: Array<MachineSeries>;
	}

	/** The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions. */
	export interface MachinePreferencesFormProperties {
	}
	export function CreateMachinePreferencesFormGroup() {
		return new FormGroup<MachinePreferencesFormProperties>({
		});

	}


	/** A Compute Engine machine series. */
	export interface MachineSeries {

		/** Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. */
		code?: string | null;
	}

	/** A Compute Engine machine series. */
	export interface MachineSeriesFormProperties {

		/** Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateMachineSeriesFormGroup() {
		return new FormGroup<MachineSeriesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Message representing a frame which failed to be processed due to an error. */
	export interface ErrorFrame {

		/** Output only. Frame ingestion time. */
		ingestionTime?: string | null;

		/** Output only. The identifier of the ErrorFrame. */
		name?: string | null;

		/** Contains data reported from an inventory source on an asset. */
		originalFrame?: AssetFrame;

		/** Output only. All the violations that were detected for the frame. */
		violations?: Array<FrameViolationEntry>;
	}

	/** Message representing a frame which failed to be processed due to an error. */
	export interface ErrorFrameFormProperties {

		/** Output only. Frame ingestion time. */
		ingestionTime: FormControl<string | null | undefined>,

		/** Output only. The identifier of the ErrorFrame. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorFrameFormGroup() {
		return new FormGroup<ErrorFrameFormProperties>({
			ingestionTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that contains a single violation of a reported `AssetFrame` resource. */
	export interface FrameViolationEntry {

		/** The field of the original frame where the violation occurred. */
		field?: string | null;

		/** A message describing the violation. */
		violation?: string | null;
	}

	/** A resource that contains a single violation of a reported `AssetFrame` resource. */
	export interface FrameViolationEntryFormProperties {

		/** The field of the original frame where the violation occurred. */
		field: FormControl<string | null | undefined>,

		/** A message describing the violation. */
		violation: FormControl<string | null | undefined>,
	}
	export function CreateFrameViolationEntryFormGroup() {
		return new FormGroup<FrameViolationEntryFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			violation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that reports result of the import job execution. */
	export interface ExecutionReport {

		/** A resource that aggregates errors across import job files. */
		executionErrors?: ValidationReport;

		/**
		 * Total number of asset frames reported for the import job.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		framesReported?: number | null;

		/** List of job-level errors. Deprecated, use the job errors under execution_errors instead. */
		jobErrors?: Array<ImportError>;

		/**
		 * Total number of rows in the import job.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRowsCount?: number | null;
	}

	/** A resource that reports result of the import job execution. */
	export interface ExecutionReportFormProperties {

		/**
		 * Total number of asset frames reported for the import job.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		framesReported: FormControl<number | null | undefined>,

		/**
		 * Total number of rows in the import job.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRowsCount: FormControl<number | null | undefined>,
	}
	export function CreateExecutionReportFormGroup() {
		return new FormGroup<ExecutionReportFormProperties>({
			framesReported: new FormControl<number | null | undefined>(undefined),
			totalRowsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A resource that aggregates errors across import job files. */
	export interface ValidationReport {

		/** List of errors found in files. */
		fileValidations?: Array<FileValidationReport>;

		/** List of job level errors. */
		jobErrors?: Array<ImportError>;
	}

	/** A resource that aggregates errors across import job files. */
	export interface ValidationReportFormProperties {
	}
	export function CreateValidationReportFormGroup() {
		return new FormGroup<ValidationReportFormProperties>({
		});

	}


	/** A resource that aggregates the validation errors found in an import job file. */
	export interface FileValidationReport {

		/** List of file level errors. */
		fileErrors?: Array<ImportError>;

		/** The name of the file. */
		fileName?: string | null;

		/** Flag indicating that processing was aborted due to maximum number of errors. */
		partialReport?: boolean | null;

		/** Partial list of rows that encountered validation error. */
		rowErrors?: Array<ImportRowError>;
	}

	/** A resource that aggregates the validation errors found in an import job file. */
	export interface FileValidationReportFormProperties {

		/** The name of the file. */
		fileName: FormControl<string | null | undefined>,

		/** Flag indicating that processing was aborted due to maximum number of errors. */
		partialReport: FormControl<boolean | null | undefined>,
	}
	export function CreateFileValidationReportFormGroup() {
		return new FormGroup<FileValidationReportFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			partialReport: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A resource that reports the errors encountered while processing an import job. */
	export interface ImportError {

		/** The error information. */
		errorDetails?: string | null;

		/** The severity of the error. */
		severity?: ImportErrorSeverity | null;
	}

	/** A resource that reports the errors encountered while processing an import job. */
	export interface ImportErrorFormProperties {

		/** The error information. */
		errorDetails: FormControl<string | null | undefined>,

		/** The severity of the error. */
		severity: FormControl<ImportErrorSeverity | null | undefined>,
	}
	export function CreateImportErrorFormGroup() {
		return new FormGroup<ImportErrorFormProperties>({
			errorDetails: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<ImportErrorSeverity | null | undefined>(undefined),
		});

	}

	export enum ImportErrorSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', ERROR = 'ERROR', WARNING = 'WARNING', INFO = 'INFO' }


	/** A resource that reports the import job errors at row level. */
	export interface ImportRowError {

		/** The list of errors detected in the row. */
		errors?: Array<ImportError>;

		/**
		 * The row number where the error was detected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowNumber?: number | null;

		/** The name of the VM in the row. */
		vmName?: string | null;

		/** The VM UUID. */
		vmUuid?: string | null;
	}

	/** A resource that reports the import job errors at row level. */
	export interface ImportRowErrorFormProperties {

		/**
		 * The row number where the error was detected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowNumber: FormControl<number | null | undefined>,

		/** The name of the VM in the row. */
		vmName: FormControl<string | null | undefined>,

		/** The VM UUID. */
		vmUuid: FormControl<string | null | undefined>,
	}
	export function CreateImportRowErrorFormGroup() {
		return new FormGroup<ImportRowErrorFormProperties>({
			rowNumber: new FormControl<number | null | undefined>(undefined),
			vmName: new FormControl<string | null | undefined>(undefined),
			vmUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of frame data. */
	export interface Frames {

		/** A repeated field of asset data. */
		framesData?: Array<AssetFrame>;
	}

	/** Collection of frame data. */
	export interface FramesFormProperties {
	}
	export function CreateFramesFormGroup() {
		return new FormGroup<FramesFormProperties>({
		});

	}


	/** A resource that represents a payload hosted on Google Cloud Storage. */
	export interface GCSPayloadInfo {

		/** The import job format. */
		format?: GCSPayloadInfoFormat | null;

		/** The payload path in Google Cloud Storage. */
		path?: string | null;
	}

	/** A resource that represents a payload hosted on Google Cloud Storage. */
	export interface GCSPayloadInfoFormProperties {

		/** The import job format. */
		format: FormControl<GCSPayloadInfoFormat | null | undefined>,

		/** The payload path in Google Cloud Storage. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGCSPayloadInfoFormGroup() {
		return new FormGroup<GCSPayloadInfoFormProperties>({
			format: new FormControl<GCSPayloadInfoFormat | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GCSPayloadInfoFormat { IMPORT_JOB_FORMAT_UNSPECIFIED = 'IMPORT_JOB_FORMAT_UNSPECIFIED', IMPORT_JOB_FORMAT_CMDB = 'IMPORT_JOB_FORMAT_CMDB', IMPORT_JOB_FORMAT_RVTOOLS_XLSX = 'IMPORT_JOB_FORMAT_RVTOOLS_XLSX', IMPORT_JOB_FORMAT_RVTOOLS_CSV = 'IMPORT_JOB_FORMAT_RVTOOLS_CSV', IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV = 'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV', IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV = 'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV', IMPORT_JOB_FORMAT_MANUAL_CSV = 'IMPORT_JOB_FORMAT_MANUAL_CSV' }


	/** A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups. */
	export interface Group {

		/** Output only. The timestamp when the group was created. */
		createTime?: string | null;

		/** Optional. The description of the group. */
		description?: string | null;

		/** Optional. User-friendly display name. */
		displayName?: string | null;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Output only. The name of the group. */
		name?: string | null;

		/** Output only. The timestamp when the group was last updated. */
		updateTime?: string | null;
	}

	/** A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups. */
	export interface GroupFormProperties {

		/** Output only. The timestamp when the group was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The description of the group. */
		description: FormControl<string | null | undefined>,

		/** Optional. User-friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of the group. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the group was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a payload file in an import job. */
	export interface ImportDataFile {

		/** Output only. The timestamp when the file was created. */
		createTime?: string | null;

		/** Optional. User-friendly display name. Maximum length is 256 characters. */
		displayName?: string | null;

		/** Required. The payload format. */
		format?: GCSPayloadInfoFormat | null;

		/** Output only. The name of the file. */
		name?: string | null;

		/** Output only. The state of the import data file. */
		state?: ImportDataFileState | null;

		/** A resource that contains a URI to which a data file can be uploaded. */
		uploadFileInfo?: UploadFileInfo;
	}

	/** A resource that represents a payload file in an import job. */
	export interface ImportDataFileFormProperties {

		/** Output only. The timestamp when the file was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-friendly display name. Maximum length is 256 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The payload format. */
		format: FormControl<GCSPayloadInfoFormat | null | undefined>,

		/** Output only. The name of the file. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the import data file. */
		state: FormControl<ImportDataFileState | null | undefined>,
	}
	export function CreateImportDataFileFormGroup() {
		return new FormGroup<ImportDataFileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<GCSPayloadInfoFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ImportDataFileState | null | undefined>(undefined),
		});

	}

	export enum ImportDataFileState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE' }


	/** A resource that contains a URI to which a data file can be uploaded. */
	export interface UploadFileInfo {

		/** Output only. The headers that were used to sign the URL. */
		headers?: {[id: string]: string };

		/** Output only. Upload URI for the file. */
		signedUri?: string | null;

		/** Output only. Expiration time of the upload URI. */
		uriExpirationTime?: string | null;
	}

	/** A resource that contains a URI to which a data file can be uploaded. */
	export interface UploadFileInfoFormProperties {

		/** Output only. The headers that were used to sign the URL. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Upload URI for the file. */
		signedUri: FormControl<string | null | undefined>,

		/** Output only. Expiration time of the upload URI. */
		uriExpirationTime: FormControl<string | null | undefined>,
	}
	export function CreateUploadFileInfoFormGroup() {
		return new FormGroup<UploadFileInfoFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			signedUri: new FormControl<string | null | undefined>(undefined),
			uriExpirationTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents the background job that imports asset frames. */
	export interface ImportJob {

		/** Required. Reference to a source. */
		assetSource?: string | null;

		/** Output only. The timestamp when the import job was completed. */
		completeTime?: string | null;

		/** Output only. The timestamp when the import job was created. */
		createTime?: string | null;

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName?: string | null;

		/** A resource that reports result of the import job execution. */
		executionReport?: ExecutionReport;

		/** A resource that represents a payload hosted on Google Cloud Storage. */
		gcsPayload?: GCSPayloadInfo;

		/** A resource that represents the inline import job payload. */
		inlinePayload?: InlinePayloadInfo;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Output only. The full name of the import job. */
		name?: string | null;

		/** Output only. The state of the import job. */
		state?: ImportJobState | null;

		/** Output only. The timestamp when the import job was last updated. */
		updateTime?: string | null;

		/** A resource that aggregates errors across import job files. */
		validationReport?: ValidationReport;
	}

	/** A resource that represents the background job that imports asset frames. */
	export interface ImportJobFormProperties {

		/** Required. Reference to a source. */
		assetSource: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the import job was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the import job was created. */
		createTime: FormControl<string | null | undefined>,

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full name of the import job. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the import job. */
		state: FormControl<ImportJobState | null | undefined>,

		/** Output only. The timestamp when the import job was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateImportJobFormGroup() {
		return new FormGroup<ImportJobFormProperties>({
			assetSource: new FormControl<string | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ImportJobState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents the inline import job payload. */
	export interface InlinePayloadInfo {

		/** The import job format. */
		format?: GCSPayloadInfoFormat | null;

		/** List of payload files. */
		payload?: Array<PayloadFile>;
	}

	/** A resource that represents the inline import job payload. */
	export interface InlinePayloadInfoFormProperties {

		/** The import job format. */
		format: FormControl<GCSPayloadInfoFormat | null | undefined>,
	}
	export function CreateInlinePayloadInfoFormGroup() {
		return new FormGroup<InlinePayloadInfoFormProperties>({
			format: new FormControl<GCSPayloadInfoFormat | null | undefined>(undefined),
		});

	}


	/** Payload file for inline import job payload. */
	export interface PayloadFile {

		/** The file data. */
		data?: string | null;

		/** The file name. */
		name?: string | null;
	}

	/** Payload file for inline import job payload. */
	export interface PayloadFileFormProperties {

		/** The file data. */
		data: FormControl<string | null | undefined>,

		/** The file name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePayloadFileFormGroup() {
		return new FormGroup<PayloadFileFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportJobState { IMPORT_JOB_STATE_UNSPECIFIED = 'IMPORT_JOB_STATE_UNSPECIFIED', IMPORT_JOB_STATE_PENDING = 'IMPORT_JOB_STATE_PENDING', IMPORT_JOB_STATE_RUNNING = 'IMPORT_JOB_STATE_RUNNING', IMPORT_JOB_STATE_COMPLETED = 'IMPORT_JOB_STATE_COMPLETED', IMPORT_JOB_STATE_FAILED = 'IMPORT_JOB_STATE_FAILED', IMPORT_JOB_STATE_VALIDATING = 'IMPORT_JOB_STATE_VALIDATING', IMPORT_JOB_STATE_FAILED_VALIDATION = 'IMPORT_JOB_STATE_FAILED_VALIDATION', IMPORT_JOB_STATE_READY = 'IMPORT_JOB_STATE_READY' }


	/** Response message for listing assets. */
	export interface ListAssetsResponse {

		/** A list of assets. */
		assets?: Array<Asset>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing assets. */
	export interface ListAssetsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for listing error frames. */
	export interface ListErrorFramesResponse {

		/** The list of error frames. */
		errorFrames?: Array<ErrorFrame>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** A response for listing error frames. */
	export interface ListErrorFramesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListErrorFramesResponseFormGroup() {
		return new FormGroup<ListErrorFramesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for listing groups. */
	export interface ListGroupsResponse {

		/** The list of Group */
		groups?: Array<Group>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** A response for listing groups. */
	export interface ListGroupsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing payload files of an import job. */
	export interface ListImportDataFilesResponse {

		/** The list of import data files. */
		importDataFiles?: Array<ImportDataFile>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for listing payload files of an import job. */
	export interface ListImportDataFilesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportDataFilesResponseFormGroup() {
		return new FormGroup<ListImportDataFilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for listing import jobs. */
	export interface ListImportJobsResponse {

		/** The list of import jobs. */
		importJobs?: Array<ImportJob>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** A response for listing import jobs. */
	export interface ListImportJobsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportJobsResponseFormGroup() {
		return new FormGroup<ListImportJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing preference sets. */
	export interface ListPreferenceSetsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** The list of PreferenceSets */
		preferenceSets?: Array<PreferenceSet>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing preference sets. */
	export interface ListPreferenceSetsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPreferenceSetsResponseFormGroup() {
		return new FormGroup<ListPreferenceSetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The preferences that apply to all assets in a given context. */
	export interface PreferenceSet {

		/** Output only. The timestamp when the preference set was created. */
		createTime?: string | null;

		/** A description of the preference set. */
		description?: string | null;

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName?: string | null;

		/** Output only. Name of the preference set. */
		name?: string | null;

		/** Output only. The timestamp when the preference set was last updated. */
		updateTime?: string | null;

		/** VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets. */
		virtualMachinePreferences?: VirtualMachinePreferences;
	}

	/** The preferences that apply to all assets in a given context. */
	export interface PreferenceSetFormProperties {

		/** Output only. The timestamp when the preference set was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of the preference set. */
		description: FormControl<string | null | undefined>,

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Name of the preference set. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the preference set was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePreferenceSetFormGroup() {
		return new FormGroup<PreferenceSetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets. */
	export interface VirtualMachinePreferences {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan?: VirtualMachinePreferencesCommitmentPlan | null;

		/** The user preferences relating to Compute Engine target platform. */
		computeEnginePreferences?: ComputeEnginePreferences;

		/** Parameters that affect network cost estimations. */
		networkCostParameters?: VirtualMachinePreferencesNetworkCostParameters;

		/** The user preferences relating to target regions. */
		regionPreferences?: RegionPreferences;

		/** Custom data to use for sizing optimizations. */
		sizingOptimizationCustomParameters?: VirtualMachinePreferencesSizingOptimizationCustomParameters;

		/** Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. */
		sizingOptimizationStrategy?: VirtualMachinePreferencesSizingOptimizationStrategy | null;

		/** Preferences concerning Sole Tenancy nodes and VMs. */
		soleTenancyPreferences?: SoleTenancyPreferences;

		/** Target product for assets using this preference set. Specify either target product or business goal, but not both. */
		targetProduct?: VirtualMachinePreferencesTargetProduct | null;

		/** The user preferences relating to Google Cloud VMware Engine target platform. */
		vmwareEnginePreferences?: VmwareEnginePreferences;
	}

	/** VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets. */
	export interface VirtualMachinePreferencesFormProperties {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan: FormControl<VirtualMachinePreferencesCommitmentPlan | null | undefined>,

		/** Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. */
		sizingOptimizationStrategy: FormControl<VirtualMachinePreferencesSizingOptimizationStrategy | null | undefined>,

		/** Target product for assets using this preference set. Specify either target product or business goal, but not both. */
		targetProduct: FormControl<VirtualMachinePreferencesTargetProduct | null | undefined>,
	}
	export function CreateVirtualMachinePreferencesFormGroup() {
		return new FormGroup<VirtualMachinePreferencesFormProperties>({
			commitmentPlan: new FormControl<VirtualMachinePreferencesCommitmentPlan | null | undefined>(undefined),
			sizingOptimizationStrategy: new FormControl<VirtualMachinePreferencesSizingOptimizationStrategy | null | undefined>(undefined),
			targetProduct: new FormControl<VirtualMachinePreferencesTargetProduct | null | undefined>(undefined),
		});

	}

	export enum VirtualMachinePreferencesCommitmentPlan { COMMITMENT_PLAN_UNSPECIFIED = 'COMMITMENT_PLAN_UNSPECIFIED', COMMITMENT_PLAN_NONE = 'COMMITMENT_PLAN_NONE', COMMITMENT_PLAN_ONE_YEAR = 'COMMITMENT_PLAN_ONE_YEAR', COMMITMENT_PLAN_THREE_YEARS = 'COMMITMENT_PLAN_THREE_YEARS' }


	/** Parameters that affect network cost estimations. */
	export interface VirtualMachinePreferencesNetworkCostParameters {

		/**
		 * Optional. An estimated percentage of priced outbound traffic (egress traffic) from the measured outbound traffic. Must be in the interval [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedEgressTrafficPercentage?: number | null;
	}

	/** Parameters that affect network cost estimations. */
	export interface VirtualMachinePreferencesNetworkCostParametersFormProperties {

		/**
		 * Optional. An estimated percentage of priced outbound traffic (egress traffic) from the measured outbound traffic. Must be in the interval [0, 100].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedEgressTrafficPercentage: FormControl<number | null | undefined>,
	}
	export function CreateVirtualMachinePreferencesNetworkCostParametersFormGroup() {
		return new FormGroup<VirtualMachinePreferencesNetworkCostParametersFormProperties>({
			estimatedEgressTrafficPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The user preferences relating to target regions. */
	export interface RegionPreferences {

		/** A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions. */
		preferredRegions?: Array<string>;
	}

	/** The user preferences relating to target regions. */
	export interface RegionPreferencesFormProperties {
	}
	export function CreateRegionPreferencesFormGroup() {
		return new FormGroup<RegionPreferencesFormProperties>({
		});

	}


	/** Custom data to use for sizing optimizations. */
	export interface VirtualMachinePreferencesSizingOptimizationCustomParameters {

		/** Optional. Type of statistical aggregation of a resource utilization data, on which to base the sizing metrics. */
		aggregationMethod?: VirtualMachinePreferencesSizingOptimizationCustomParametersAggregationMethod | null;

		/**
		 * Optional. Desired percentage of CPU usage. Must be in the interval [1, 100] (or 0 for default value).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUsagePercentage?: number | null;

		/**
		 * Optional. Desired percentage of memory usage. Must be in the interval [1, 100] (or 0 for default value).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryUsagePercentage?: number | null;

		/**
		 * Optional. Desired increase factor of storage, relative to currently used storage. Must be in the interval [1.0, 2.0] (or 0 for default value).
		 * Type: double
		 */
		storageMultiplier?: number | null;
	}

	/** Custom data to use for sizing optimizations. */
	export interface VirtualMachinePreferencesSizingOptimizationCustomParametersFormProperties {

		/** Optional. Type of statistical aggregation of a resource utilization data, on which to base the sizing metrics. */
		aggregationMethod: FormControl<VirtualMachinePreferencesSizingOptimizationCustomParametersAggregationMethod | null | undefined>,

		/**
		 * Optional. Desired percentage of CPU usage. Must be in the interval [1, 100] (or 0 for default value).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUsagePercentage: FormControl<number | null | undefined>,

		/**
		 * Optional. Desired percentage of memory usage. Must be in the interval [1, 100] (or 0 for default value).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryUsagePercentage: FormControl<number | null | undefined>,

		/**
		 * Optional. Desired increase factor of storage, relative to currently used storage. Must be in the interval [1.0, 2.0] (or 0 for default value).
		 * Type: double
		 */
		storageMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateVirtualMachinePreferencesSizingOptimizationCustomParametersFormGroup() {
		return new FormGroup<VirtualMachinePreferencesSizingOptimizationCustomParametersFormProperties>({
			aggregationMethod: new FormControl<VirtualMachinePreferencesSizingOptimizationCustomParametersAggregationMethod | null | undefined>(undefined),
			cpuUsagePercentage: new FormControl<number | null | undefined>(undefined),
			memoryUsagePercentage: new FormControl<number | null | undefined>(undefined),
			storageMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VirtualMachinePreferencesSizingOptimizationCustomParametersAggregationMethod { AGGREGATION_METHOD_UNSPECIFIED = 'AGGREGATION_METHOD_UNSPECIFIED', AGGREGATION_METHOD_AVERAGE = 'AGGREGATION_METHOD_AVERAGE', AGGREGATION_METHOD_MEDIAN = 'AGGREGATION_METHOD_MEDIAN', AGGREGATION_METHOD_NINETY_FIFTH_PERCENTILE = 'AGGREGATION_METHOD_NINETY_FIFTH_PERCENTILE', AGGREGATION_METHOD_PEAK = 'AGGREGATION_METHOD_PEAK' }

	export enum VirtualMachinePreferencesSizingOptimizationStrategy { SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED = 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE = 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', SIZING_OPTIMIZATION_STRATEGY_MODERATE = 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE = 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE', SIZING_OPTIMIZATION_STRATEGY_CUSTOM = 'SIZING_OPTIMIZATION_STRATEGY_CUSTOM' }


	/** Preferences concerning Sole Tenancy nodes and VMs. */
	export interface SoleTenancyPreferences {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan?: SoleTenancyPreferencesCommitmentPlan | null;

		/**
		 * CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
		 * Type: double
		 */
		cpuOvercommitRatio?: number | null;

		/** Sole Tenancy nodes maintenance policy. */
		hostMaintenancePolicy?: SoleTenancyPreferencesHostMaintenancePolicy | null;

		/** A list of sole tenant node types. An empty list means that all possible node types will be considered. */
		nodeTypes?: Array<SoleTenantNodeType>;
	}

	/** Preferences concerning Sole Tenancy nodes and VMs. */
	export interface SoleTenancyPreferencesFormProperties {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan: FormControl<SoleTenancyPreferencesCommitmentPlan | null | undefined>,

		/**
		 * CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
		 * Type: double
		 */
		cpuOvercommitRatio: FormControl<number | null | undefined>,

		/** Sole Tenancy nodes maintenance policy. */
		hostMaintenancePolicy: FormControl<SoleTenancyPreferencesHostMaintenancePolicy | null | undefined>,
	}
	export function CreateSoleTenancyPreferencesFormGroup() {
		return new FormGroup<SoleTenancyPreferencesFormProperties>({
			commitmentPlan: new FormControl<SoleTenancyPreferencesCommitmentPlan | null | undefined>(undefined),
			cpuOvercommitRatio: new FormControl<number | null | undefined>(undefined),
			hostMaintenancePolicy: new FormControl<SoleTenancyPreferencesHostMaintenancePolicy | null | undefined>(undefined),
		});

	}

	export enum SoleTenancyPreferencesCommitmentPlan { COMMITMENT_PLAN_UNSPECIFIED = 'COMMITMENT_PLAN_UNSPECIFIED', ON_DEMAND = 'ON_DEMAND', COMMITMENT_1_YEAR = 'COMMITMENT_1_YEAR', COMMITMENT_3_YEAR = 'COMMITMENT_3_YEAR' }

	export enum SoleTenancyPreferencesHostMaintenancePolicy { HOST_MAINTENANCE_POLICY_UNSPECIFIED = 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', HOST_MAINTENANCE_POLICY_DEFAULT = 'HOST_MAINTENANCE_POLICY_DEFAULT', HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE = 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP = 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP' }


	/** A Sole Tenant node type. */
	export interface SoleTenantNodeType {

		/** Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes */
		nodeName?: string | null;
	}

	/** A Sole Tenant node type. */
	export interface SoleTenantNodeTypeFormProperties {

		/** Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes */
		nodeName: FormControl<string | null | undefined>,
	}
	export function CreateSoleTenantNodeTypeFormGroup() {
		return new FormGroup<SoleTenantNodeTypeFormProperties>({
			nodeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualMachinePreferencesTargetProduct { COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED = 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE = 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE = 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY = 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY' }


	/** The user preferences relating to Google Cloud VMware Engine target platform. */
	export interface VmwareEnginePreferences {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan?: VmwareEnginePreferencesCommitmentPlan | null;

		/**
		 * CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
		 * Type: double
		 */
		cpuOvercommitRatio?: number | null;

		/**
		 * Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
		 * Type: double
		 */
		memoryOvercommitRatio?: number | null;

		/**
		 * The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
		 * Type: double
		 */
		storageDeduplicationCompressionRatio?: number | null;
	}

	/** The user preferences relating to Google Cloud VMware Engine target platform. */
	export interface VmwareEnginePreferencesFormProperties {

		/** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
		commitmentPlan: FormControl<VmwareEnginePreferencesCommitmentPlan | null | undefined>,

		/**
		 * CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
		 * Type: double
		 */
		cpuOvercommitRatio: FormControl<number | null | undefined>,

		/**
		 * Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
		 * Type: double
		 */
		memoryOvercommitRatio: FormControl<number | null | undefined>,

		/**
		 * The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
		 * Type: double
		 */
		storageDeduplicationCompressionRatio: FormControl<number | null | undefined>,
	}
	export function CreateVmwareEnginePreferencesFormGroup() {
		return new FormGroup<VmwareEnginePreferencesFormProperties>({
			commitmentPlan: new FormControl<VmwareEnginePreferencesCommitmentPlan | null | undefined>(undefined),
			cpuOvercommitRatio: new FormControl<number | null | undefined>(undefined),
			memoryOvercommitRatio: new FormControl<number | null | undefined>(undefined),
			storageDeduplicationCompressionRatio: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VmwareEnginePreferencesCommitmentPlan { COMMITMENT_PLAN_UNSPECIFIED = 'COMMITMENT_PLAN_UNSPECIFIED', ON_DEMAND = 'ON_DEMAND', COMMITMENT_1_YEAR_MONTHLY_PAYMENTS = 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', COMMITMENT_3_YEAR_MONTHLY_PAYMENTS = 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', COMMITMENT_1_YEAR_UPFRONT_PAYMENT = 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', COMMITMENT_3_YEAR_UPFRONT_PAYMENT = 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT' }


	/** Response message for listing report configs. */
	export interface ListReportConfigsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** A list of report configs. */
		reportConfigs?: Array<ReportConfig>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing report configs. */
	export interface ListReportConfigsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportConfigsResponseFormGroup() {
		return new FormGroup<ListReportConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The groups and associated preference sets on which we can generate reports. */
	export interface ReportConfig {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Free-text description. */
		description?: string | null;

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName?: string | null;

		/** Required. Collection of combinations of groups and preference sets. */
		groupPreferencesetAssignments?: Array<ReportConfigGroupPreferenceSetAssignment>;

		/** Output only. Name of resource. */
		name?: string | null;

		/** Output only. The timestamp when the resource was last updated. */
		updateTime?: string | null;
	}

	/** The groups and associated preference sets on which we can generate reports. */
	export interface ReportConfigFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Free-text description. */
		description: FormControl<string | null | undefined>,

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Name of resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateReportConfigFormGroup() {
		return new FormGroup<ReportConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a combination of a group with a preference set. */
	export interface ReportConfigGroupPreferenceSetAssignment {

		/** Required. Name of the group. */
		group?: string | null;

		/** Required. Name of the Preference Set. */
		preferenceSet?: string | null;
	}

	/** Represents a combination of a group with a preference set. */
	export interface ReportConfigGroupPreferenceSetAssignmentFormProperties {

		/** Required. Name of the group. */
		group: FormControl<string | null | undefined>,

		/** Required. Name of the Preference Set. */
		preferenceSet: FormControl<string | null | undefined>,
	}
	export function CreateReportConfigGroupPreferenceSetAssignmentFormGroup() {
		return new FormGroup<ReportConfigGroupPreferenceSetAssignmentFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			preferenceSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing Reports. */
	export interface ListReportsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** The list of Reports. */
		reports?: Array<Report>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing Reports. */
	export interface ListReportsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsResponseFormGroup() {
		return new FormGroup<ListReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report represents a point-in-time rendering of the ReportConfig results. */
	export interface Report {

		/** Output only. Creation timestamp. */
		createTime?: string | null;

		/** Free-text description. */
		description?: string | null;

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName?: string | null;

		/** Output only. Name of resource. */
		name?: string | null;

		/** Report creation state. */
		state?: ReportState | null;

		/** Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report. */
		summary?: ReportSummary;

		/** Report type. */
		type?: ReportType | null;

		/** Output only. Last update timestamp. */
		updateTime?: string | null;
	}

	/** Report represents a point-in-time rendering of the ReportConfig results. */
	export interface ReportFormProperties {

		/** Output only. Creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** Free-text description. */
		description: FormControl<string | null | undefined>,

		/** User-friendly display name. Maximum length is 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Name of resource. */
		name: FormControl<string | null | undefined>,

		/** Report creation state. */
		state: FormControl<ReportState | null | undefined>,

		/** Report type. */
		type: FormControl<ReportType | null | undefined>,

		/** Output only. Last update timestamp. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ReportState | null | undefined>(undefined),
			type: new FormControl<ReportType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report. */
	export interface ReportSummary {

		/** Aggregate statistics for a collection of assets. */
		allAssetsStats?: ReportSummaryAssetAggregateStats;

		/** Findings for each Group included in this report. */
		groupFindings?: Array<ReportSummaryGroupFinding>;
	}

	/** Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report. */
	export interface ReportSummaryFormProperties {
	}
	export function CreateReportSummaryFormGroup() {
		return new FormGroup<ReportSummaryFormProperties>({
		});

	}


	/** Aggregate statistics for a collection of assets. */
	export interface ReportSummaryAssetAggregateStats {

		/** Describes a collection of data points rendered as a Chart. */
		assetAge?: ReportSummaryChartData;

		/** A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket. */
		coreCountHistogram?: ReportSummaryHistogramChartData;

		/** A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket. */
		memoryBytesHistogram?: ReportSummaryHistogramChartData;

		/** Describes a collection of data points rendered as a Chart. */
		memoryUtilization?: ReportSummaryChartData;

		/** Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets. */
		memoryUtilizationChart?: ReportSummaryUtilizationChartData;

		/** Describes a collection of data points rendered as a Chart. */
		operatingSystem?: ReportSummaryChartData;

		/** A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket. */
		storageBytesHistogram?: ReportSummaryHistogramChartData;

		/** Describes a collection of data points rendered as a Chart. */
		storageUtilization?: ReportSummaryChartData;

		/** Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets. */
		storageUtilizationChart?: ReportSummaryUtilizationChartData;

		/** Count of the number of unique assets in this collection. */
		totalAssets?: string | null;

		/** Sum of the CPU core count of all the assets in this collection. */
		totalCores?: string | null;

		/** Sum of the memory in bytes of all the assets in this collection. */
		totalMemoryBytes?: string | null;

		/** Sum of persistent storage in bytes of all the assets in this collection. */
		totalStorageBytes?: string | null;
	}

	/** Aggregate statistics for a collection of assets. */
	export interface ReportSummaryAssetAggregateStatsFormProperties {

		/** Count of the number of unique assets in this collection. */
		totalAssets: FormControl<string | null | undefined>,

		/** Sum of the CPU core count of all the assets in this collection. */
		totalCores: FormControl<string | null | undefined>,

		/** Sum of the memory in bytes of all the assets in this collection. */
		totalMemoryBytes: FormControl<string | null | undefined>,

		/** Sum of persistent storage in bytes of all the assets in this collection. */
		totalStorageBytes: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryAssetAggregateStatsFormGroup() {
		return new FormGroup<ReportSummaryAssetAggregateStatsFormProperties>({
			totalAssets: new FormControl<string | null | undefined>(undefined),
			totalCores: new FormControl<string | null | undefined>(undefined),
			totalMemoryBytes: new FormControl<string | null | undefined>(undefined),
			totalStorageBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a collection of data points rendered as a Chart. */
	export interface ReportSummaryChartData {

		/** Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value. */
		dataPoints?: Array<ReportSummaryChartDataDataPoint>;
	}

	/** Describes a collection of data points rendered as a Chart. */
	export interface ReportSummaryChartDataFormProperties {
	}
	export function CreateReportSummaryChartDataFormGroup() {
		return new FormGroup<ReportSummaryChartDataFormProperties>({
		});

	}


	/** Describes a single data point in the Chart. */
	export interface ReportSummaryChartDataDataPoint {

		/** The X-axis label for this data point. */
		label?: string | null;

		/**
		 * The Y-axis value for this data point.
		 * Type: double
		 */
		value?: number | null;
	}

	/** Describes a single data point in the Chart. */
	export interface ReportSummaryChartDataDataPointFormProperties {

		/** The X-axis label for this data point. */
		label: FormControl<string | null | undefined>,

		/**
		 * The Y-axis value for this data point.
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateReportSummaryChartDataDataPointFormGroup() {
		return new FormGroup<ReportSummaryChartDataDataPointFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket. */
	export interface ReportSummaryHistogramChartData {

		/** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
		buckets?: Array<ReportSummaryHistogramChartDataBucket>;
	}

	/** A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket. */
	export interface ReportSummaryHistogramChartDataFormProperties {
	}
	export function CreateReportSummaryHistogramChartDataFormGroup() {
		return new FormGroup<ReportSummaryHistogramChartDataFormProperties>({
		});

	}


	/** A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity. */
	export interface ReportSummaryHistogramChartDataBucket {

		/** Count of items in the bucket. */
		count?: string | null;

		/** Lower bound - inclusive. */
		lowerBound?: string | null;

		/** Upper bound - exclusive. */
		upperBound?: string | null;
	}

	/** A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity. */
	export interface ReportSummaryHistogramChartDataBucketFormProperties {

		/** Count of items in the bucket. */
		count: FormControl<string | null | undefined>,

		/** Lower bound - inclusive. */
		lowerBound: FormControl<string | null | undefined>,

		/** Upper bound - exclusive. */
		upperBound: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryHistogramChartDataBucketFormGroup() {
		return new FormGroup<ReportSummaryHistogramChartDataBucketFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			lowerBound: new FormControl<string | null | undefined>(undefined),
			upperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets. */
	export interface ReportSummaryUtilizationChartData {

		/** Aggregate value which falls into the "Free" bucket. */
		free?: string | null;

		/** Aggregate value which falls into the "Used" bucket. */
		used?: string | null;
	}

	/** Utilization Chart is a specific type of visualization which displays a metric classified into "Used" and "Free" buckets. */
	export interface ReportSummaryUtilizationChartDataFormProperties {

		/** Aggregate value which falls into the "Free" bucket. */
		free: FormControl<string | null | undefined>,

		/** Aggregate value which falls into the "Used" bucket. */
		used: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryUtilizationChartDataFormGroup() {
		return new FormGroup<ReportSummaryUtilizationChartDataFormProperties>({
			free: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary Findings for a specific Group. */
	export interface ReportSummaryGroupFinding {

		/** Aggregate statistics for a collection of assets. */
		assetAggregateStats?: ReportSummaryAssetAggregateStats;

		/** Description for the Group. */
		description?: string | null;

		/** Display Name for the Group. */
		displayName?: string | null;

		/** This field is deprecated, do not rely on it having a value. */
		overlappingAssetCount?: string | null;

		/** Findings for each of the PreferenceSets for this group. */
		preferenceSetFindings?: Array<ReportSummaryGroupPreferenceSetFinding>;
	}

	/** Summary Findings for a specific Group. */
	export interface ReportSummaryGroupFindingFormProperties {

		/** Description for the Group. */
		description: FormControl<string | null | undefined>,

		/** Display Name for the Group. */
		displayName: FormControl<string | null | undefined>,

		/** This field is deprecated, do not rely on it having a value. */
		overlappingAssetCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryGroupFindingFormGroup() {
		return new FormGroup<ReportSummaryGroupFindingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			overlappingAssetCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary Findings for a specific Group/PreferenceSet combination. */
	export interface ReportSummaryGroupPreferenceSetFinding {

		/** Description for the Preference Set. */
		description?: string | null;

		/** Display Name of the Preference Set */
		displayName?: string | null;

		/** A set of findings that applies to assets of type Virtual/Physical Machine. */
		machineFinding?: ReportSummaryMachineFinding;

		/** VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets. */
		machinePreferences?: VirtualMachinePreferences;

		/** Represents an amount of money with its currency type. */
		monthlyCostCompute?: Money;

		/** Represents an amount of money with its currency type. */
		monthlyCostNetworkEgress?: Money;

		/** Represents an amount of money with its currency type. */
		monthlyCostOsLicense?: Money;

		/** Represents an amount of money with its currency type. */
		monthlyCostOther?: Money;

		/** Represents an amount of money with its currency type. */
		monthlyCostStorage?: Money;

		/** Represents an amount of money with its currency type. */
		monthlyCostTotal?: Money;

		/** Target region for this Preference Set */
		preferredRegion?: string | null;

		/** Text describing the pricing track specified for this Preference Set */
		pricingTrack?: string | null;

		/** A set of findings that applies to assets destined for Sole-Tenant nodes. */
		soleTenantFinding?: ReportSummarySoleTenantFinding;

		/** Text describing the business priority specified for this Preference Set */
		topPriority?: string | null;

		/** A set of findings that applies to assets destined for VMWare Engine. */
		vmwareEngineFinding?: ReportSummaryVMWareEngineFinding;
	}

	/** Summary Findings for a specific Group/PreferenceSet combination. */
	export interface ReportSummaryGroupPreferenceSetFindingFormProperties {

		/** Description for the Preference Set. */
		description: FormControl<string | null | undefined>,

		/** Display Name of the Preference Set */
		displayName: FormControl<string | null | undefined>,

		/** Target region for this Preference Set */
		preferredRegion: FormControl<string | null | undefined>,

		/** Text describing the pricing track specified for this Preference Set */
		pricingTrack: FormControl<string | null | undefined>,

		/** Text describing the business priority specified for this Preference Set */
		topPriority: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryGroupPreferenceSetFindingFormGroup() {
		return new FormGroup<ReportSummaryGroupPreferenceSetFindingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			preferredRegion: new FormControl<string | null | undefined>(undefined),
			pricingTrack: new FormControl<string | null | undefined>(undefined),
			topPriority: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of findings that applies to assets of type Virtual/Physical Machine. */
	export interface ReportSummaryMachineFinding {

		/** Count of assets which were allocated. */
		allocatedAssetCount?: string | null;

		/** Set of disk types allocated to assets. */
		allocatedDiskTypes?: Array<ComputeStorageDescriptorType>;

		/** Set of regions in which the assets were allocated. */
		allocatedRegions?: Array<string>;

		/** Distribution of assets based on the Machine Series. */
		machineSeriesAllocations?: Array<ReportSummaryMachineSeriesAllocation>;
	}

	/** A set of findings that applies to assets of type Virtual/Physical Machine. */
	export interface ReportSummaryMachineFindingFormProperties {

		/** Count of assets which were allocated. */
		allocatedAssetCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryMachineFindingFormGroup() {
		return new FormGroup<ReportSummaryMachineFindingFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a data point tracking the count of assets allocated for a specific Machine Series. */
	export interface ReportSummaryMachineSeriesAllocation {

		/** Count of assets allocated to this machine series. */
		allocatedAssetCount?: string | null;

		/** A Compute Engine machine series. */
		machineSeries?: MachineSeries;
	}

	/** Represents a data point tracking the count of assets allocated for a specific Machine Series. */
	export interface ReportSummaryMachineSeriesAllocationFormProperties {

		/** Count of assets allocated to this machine series. */
		allocatedAssetCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryMachineSeriesAllocationFormGroup() {
		return new FormGroup<ReportSummaryMachineSeriesAllocationFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** A set of findings that applies to assets destined for Sole-Tenant nodes. */
	export interface ReportSummarySoleTenantFinding {

		/** Count of assets which are allocated */
		allocatedAssetCount?: string | null;

		/** Set of regions in which the assets are allocated */
		allocatedRegions?: Array<string>;

		/** Set of per-nodetype allocation records */
		nodeAllocations?: Array<ReportSummarySoleTenantNodeAllocation>;
	}

	/** A set of findings that applies to assets destined for Sole-Tenant nodes. */
	export interface ReportSummarySoleTenantFindingFormProperties {

		/** Count of assets which are allocated */
		allocatedAssetCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummarySoleTenantFindingFormGroup() {
		return new FormGroup<ReportSummarySoleTenantFindingFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the assets allocated to a specific Sole-Tenant node type. */
	export interface ReportSummarySoleTenantNodeAllocation {

		/** Count of assets allocated to these nodes */
		allocatedAssetCount?: string | null;

		/** A Sole Tenant node type. */
		node?: SoleTenantNodeType;

		/** Count of this node type to be provisioned */
		nodeCount?: string | null;
	}

	/** Represents the assets allocated to a specific Sole-Tenant node type. */
	export interface ReportSummarySoleTenantNodeAllocationFormProperties {

		/** Count of assets allocated to these nodes */
		allocatedAssetCount: FormControl<string | null | undefined>,

		/** Count of this node type to be provisioned */
		nodeCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummarySoleTenantNodeAllocationFormGroup() {
		return new FormGroup<ReportSummarySoleTenantNodeAllocationFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of findings that applies to assets destined for VMWare Engine. */
	export interface ReportSummaryVMWareEngineFinding {

		/** Count of assets which are allocated */
		allocatedAssetCount?: string | null;

		/** Set of regions in which the assets were allocated */
		allocatedRegions?: Array<string>;

		/** Set of per-nodetype allocation records */
		nodeAllocations?: Array<ReportSummaryVMWareNodeAllocation>;
	}

	/** A set of findings that applies to assets destined for VMWare Engine. */
	export interface ReportSummaryVMWareEngineFindingFormProperties {

		/** Count of assets which are allocated */
		allocatedAssetCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryVMWareEngineFindingFormGroup() {
		return new FormGroup<ReportSummaryVMWareEngineFindingFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents assets allocated to a specific VMWare Node type. */
	export interface ReportSummaryVMWareNodeAllocation {

		/** Count of assets allocated to these nodes */
		allocatedAssetCount?: string | null;

		/** Count of this node type to be provisioned */
		nodeCount?: string | null;

		/** A VMWare Engine Node */
		vmwareNode?: ReportSummaryVMWareNode;
	}

	/** Represents assets allocated to a specific VMWare Node type. */
	export interface ReportSummaryVMWareNodeAllocationFormProperties {

		/** Count of assets allocated to these nodes */
		allocatedAssetCount: FormControl<string | null | undefined>,

		/** Count of this node type to be provisioned */
		nodeCount: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryVMWareNodeAllocationFormGroup() {
		return new FormGroup<ReportSummaryVMWareNodeAllocationFormProperties>({
			allocatedAssetCount: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A VMWare Engine Node */
	export interface ReportSummaryVMWareNode {

		/** Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes */
		code?: string | null;
	}

	/** A VMWare Engine Node */
	export interface ReportSummaryVMWareNodeFormProperties {

		/** Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes */
		code: FormControl<string | null | undefined>,
	}
	export function CreateReportSummaryVMWareNodeFormGroup() {
		return new FormGroup<ReportSummaryVMWareNodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TOTAL_COST_OF_OWNERSHIP = 'TOTAL_COST_OF_OWNERSHIP' }


	/** Response message for listing sources. */
	export interface ListSourcesResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** The list of sources. */
		sources?: Array<Source>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for listing sources. */
	export interface ListSourcesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourcesResponseFormGroup() {
		return new FormGroup<ListSourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source represents an object from which asset information is streamed to Migration Center. */
	export interface Source {

		/** Output only. The timestamp when the source was created. */
		createTime?: string | null;

		/** Free-text description. */
		description?: string | null;

		/** User-friendly display name. */
		displayName?: string | null;

		/**
		 * Output only. The number of frames that were reported by the source and contained errors.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorFrameCount?: number | null;

		/** If `true`, the source is managed by other service(s). */
		isManaged?: boolean | null;

		/** Output only. The full name of the source. */
		name?: string | null;

		/**
		 * Output only. Number of frames that are still being processed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingFrameCount?: number | null;

		/**
		 * The information confidence of the source. The higher the value, the higher the confidence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Output only. The state of the source. */
		state?: SourceState | null;

		/** Data source type. */
		type?: SourceType | null;

		/** Output only. The timestamp when the source was last updated. */
		updateTime?: string | null;
	}

	/** Source represents an object from which asset information is streamed to Migration Center. */
	export interface SourceFormProperties {

		/** Output only. The timestamp when the source was created. */
		createTime: FormControl<string | null | undefined>,

		/** Free-text description. */
		description: FormControl<string | null | undefined>,

		/** User-friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of frames that were reported by the source and contained errors.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorFrameCount: FormControl<number | null | undefined>,

		/** If `true`, the source is managed by other service(s). */
		isManaged: FormControl<boolean | null | undefined>,

		/** Output only. The full name of the source. */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. Number of frames that are still being processed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingFrameCount: FormControl<number | null | undefined>,

		/**
		 * The information confidence of the source. The higher the value, the higher the confidence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Output only. The state of the source. */
		state: FormControl<SourceState | null | undefined>,

		/** Data source type. */
		type: FormControl<SourceType | null | undefined>,

		/** Output only. The timestamp when the source was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			errorFrameCount: new FormControl<number | null | undefined>(undefined),
			isManaged: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pendingFrameCount: new FormControl<number | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<SourceState | null | undefined>(undefined),
			type: new FormControl<SourceType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETING = 'DELETING', INVALID = 'INVALID' }

	export enum SourceType { SOURCE_TYPE_UNKNOWN = 'SOURCE_TYPE_UNKNOWN', SOURCE_TYPE_UPLOAD = 'SOURCE_TYPE_UPLOAD', SOURCE_TYPE_GUEST_OS_SCAN = 'SOURCE_TYPE_GUEST_OS_SCAN', SOURCE_TYPE_INVENTORY_SCAN = 'SOURCE_TYPE_INVENTORY_SCAN', SOURCE_TYPE_CUSTOM = 'SOURCE_TYPE_CUSTOM' }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to remove assets from a group. */
	export interface RemoveAssetsFromGroupRequest {

		/** Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
		allowMissing?: boolean | null;

		/** Lists the asset IDs of all assets. */
		assets?: AssetList;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** A request to remove assets from a group. */
	export interface RemoveAssetsFromGroupRequestFormProperties {

		/** Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAssetsFromGroupRequestFormGroup() {
		return new FormGroup<RemoveAssetsFromGroupRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response to a call to `ReportAssetFrame`. */
	export interface ReportAssetFramesResponse {
	}

	/** A response to a call to `ReportAssetFrame`. */
	export interface ReportAssetFramesResponseFormProperties {
	}
	export function CreateReportAssetFramesResponseFormGroup() {
		return new FormGroup<ReportAssetFramesResponseFormProperties>({
		});

	}


	/** A request to run an import job. */
	export interface RunImportJobRequest {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** A request to run an import job. */
	export interface RunImportJobRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRunImportJobRequestFormGroup() {
		return new FormGroup<RunImportJobRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Migration Center settings related to the project. */
	export interface Settings {

		/** Disable Cloud Logging for the Migration Center API. Users are billed for the logs. */
		disableCloudLogging?: boolean | null;

		/** Output only. The name of the resource. */
		name?: string | null;

		/** The preference set used by default for a project. */
		preferenceSet?: string | null;
	}

	/** Describes the Migration Center settings related to the project. */
	export interface SettingsFormProperties {

		/** Disable Cloud Logging for the Migration Center API. Users are billed for the logs. */
		disableCloudLogging: FormControl<boolean | null | undefined>,

		/** Output only. The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The preference set used by default for a project. */
		preferenceSet: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			disableCloudLogging: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preferenceSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to validate an import job. */
	export interface ValidateImportJobRequest {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** A request to validate an import job. */
	export interface ValidateImportJobRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateValidateImportJobRequestFormGroup() {
		return new FormGroup<ValidateImportJobRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds assets to a group.
		 * Post v1alpha1/{group}:addAssets
		 * @param {string} group Required. Group reference.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_groups_addAssets(group: string, requestBody: AddAssetsToGroupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (group == null ? '' : encodeURIComponent(group)) + ':addAssets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes assets from a group.
		 * Post v1alpha1/{group}:removeAssets
		 * @param {string} group Required. Group reference.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_groups_removeAssets(group: string, requestBody: RemoveAssetsFromGroupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (group == null ? '' : encodeURIComponent(group)) + ':removeAssets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a source.
		 * Delete v1alpha1/{name}
		 * @param {string} name Required. Name of the resource.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_sources_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the details of an error frame.
		 * Get v1alpha1/{name}
		 * @param {string} name Required. The name of the frame to retrieve. Format: projects/{project}/locations/{location}/sources/{source}/errorFrames/{error_frame}
		 * @param {Migrationcenter_projects_locations_sources_errorFrames_getView} view Optional. An optional view mode to control the level of details for the frame. The default is a basic frame view.
		 * @return {ErrorFrame} Successful response
		 */
		Migrationcenter_projects_locations_sources_errorFrames_get(name: string, view: Migrationcenter_projects_locations_sources_errorFrames_getView | null | undefined): Observable<ErrorFrame> {
			return this.http.get<ErrorFrame>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a source.
		 * Patch v1alpha1/{name}
		 * @param {string} name Output only. The full name of the source.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_sources_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Source): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1alpha1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Migrationcenter_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Migrationcenter_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Migrationcenter_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs an import job.
		 * Post v1alpha1/{name}:run
		 * @param {string} name Required. The name of the import job to run.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_run(name: string, requestBody: RunImportJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates an import job.
		 * Post v1alpha1/{name}:validate
		 * @param {string} name Required. The name of the import job to validate.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_validate(name: string, requestBody: ValidateImportJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the assets in a given project and location.
		 * Get v1alpha1/{parent}/assets
		 * @param {string} parent Required. Parent value for `ListAssetsRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {boolean} showHidden Optional. When this value is set to 'true' the response will include all assets, including those that are hidden.
		 * @param {Migrationcenter_projects_locations_assets_listView} view View of the assets. Defaults to BASIC.
		 * @return {ListAssetsResponse} Successful response
		 */
		Migrationcenter_projects_locations_assets_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showHidden: boolean | null | undefined, view: Migrationcenter_projects_locations_assets_listView | null | undefined): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showHidden=' + showHidden + '&view=' + view, {});
		}

		/**
		 * Aggregates the requested fields based on provided function.
		 * Post v1alpha1/{parent}/assets:aggregateValues
		 * @param {string} parent Required. Parent value for `AggregateAssetsValuesRequest`.
		 * @return {AggregateAssetsValuesResponse} Successful response
		 */
		Migrationcenter_projects_locations_assets_aggregateValues(parent: string, requestBody: AggregateAssetsValuesRequest): Observable<AggregateAssetsValuesResponse> {
			return this.http.post<AggregateAssetsValuesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:aggregateValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes list of Assets.
		 * Post v1alpha1/{parent}/assets:batchDelete
		 * @param {string} parent Required. Parent value for batch asset delete.
		 * @return {Empty} Successful response
		 */
		Migrationcenter_projects_locations_assets_batchDelete(parent: string, requestBody: BatchDeleteAssetsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the parameters of a list of assets.
		 * Post v1alpha1/{parent}/assets:batchUpdate
		 * @param {string} parent Required. Parent value for batch asset update.
		 * @return {BatchUpdateAssetsResponse} Successful response
		 */
		Migrationcenter_projects_locations_assets_batchUpdate(parent: string, requestBody: BatchUpdateAssetsRequest): Observable<BatchUpdateAssetsResponse> {
			return this.http.post<BatchUpdateAssetsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports a set of frames.
		 * Post v1alpha1/{parent}/assets:reportAssetFrames
		 * @param {string} parent Required. Parent of the resource.
		 * @param {string} source Required. Reference to a source.
		 * @return {ReportAssetFramesResponse} Successful response
		 */
		Migrationcenter_projects_locations_assets_reportAssetFrames(parent: string, source: string | null | undefined, requestBody: Frames): Observable<ReportAssetFramesResponse> {
			return this.http.post<ReportAssetFramesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets:reportAssetFrames&source=' + (source == null ? '' : encodeURIComponent(source)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all error frames in a given source and location.
		 * Get v1alpha1/{parent}/errorFrames
		 * @param {string} parent Required. Parent value (the source) for `ListErrorFramesRequest`.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Migrationcenter_projects_locations_sources_errorFrames_listView} view Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view.
		 * @return {ListErrorFramesResponse} Successful response
		 */
		Migrationcenter_projects_locations_sources_errorFrames_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Migrationcenter_projects_locations_sources_errorFrames_listView | null | undefined): Observable<ListErrorFramesResponse> {
			return this.http.get<ListErrorFramesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/errorFrames&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Lists all groups in a given project and location.
		 * Get v1alpha1/{parent}/groups
		 * @param {string} parent Required. Parent value for `ListGroupsRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListGroupsResponse} Successful response
		 */
		Migrationcenter_projects_locations_groups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new group in a given project and location.
		 * Post v1alpha1/{parent}/groups
		 * @param {string} parent Required. Value for parent.
		 * @param {string} groupId Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_groups_create(parent: string, groupId: string | null | undefined, requestId: string | null | undefined, requestBody: Group): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List import data files.
		 * Get v1alpha1/{parent}/importDataFiles
		 * @param {string} parent Required. Name of the parent of the `ImportDataFiles` resource.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.
		 * @return {ListImportDataFilesResponse} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_importDataFiles_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListImportDataFilesResponse> {
			return this.http.get<ListImportDataFilesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importDataFiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an import data file.
		 * Post v1alpha1/{parent}/importDataFiles
		 * @param {string} parent Required. Name of the parent of the ImportDataFile.
		 * @param {string} importDataFileId Required. The ID of the new data file.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_importDataFiles_create(parent: string, importDataFileId: string | null | undefined, requestId: string | null | undefined, requestBody: ImportDataFile): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importDataFiles&importDataFileId=' + (importDataFileId == null ? '' : encodeURIComponent(importDataFileId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all import jobs.
		 * Get v1alpha1/{parent}/importJobs
		 * @param {string} parent Required. Parent value for `ListImportJobsRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @param {Migrationcenter_projects_locations_importJobs_listView} view Optional. The level of details of each import job. Default value is BASIC.
		 * @return {ListImportJobsResponse} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Migrationcenter_projects_locations_importJobs_listView | null | undefined): Observable<ListImportJobsResponse> {
			return this.http.get<ListImportJobsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates an import job.
		 * Post v1alpha1/{parent}/importJobs
		 * @param {string} parent Required. Value for parent.
		 * @param {string} importJobId Required. ID of the import job.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_importJobs_create(parent: string, importJobId: string | null | undefined, requestId: string | null | undefined, requestBody: ImportJob): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/importJobs&importJobId=' + (importJobId == null ? '' : encodeURIComponent(importJobId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the preference sets in a given project and location.
		 * Get v1alpha1/{parent}/preferenceSets
		 * @param {string} parent Required. Parent value for `ListPreferenceSetsRequest`.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListPreferenceSetsResponse} Successful response
		 */
		Migrationcenter_projects_locations_preferenceSets_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPreferenceSetsResponse> {
			return this.http.get<ListPreferenceSetsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/preferenceSets&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new preference set in a given project and location.
		 * Post v1alpha1/{parent}/preferenceSets
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_preferenceSets_create(parent: string, preferenceSetId: string | null | undefined, requestId: string | null | undefined, requestBody: PreferenceSet): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/preferenceSets&preferenceSetId=' + (preferenceSetId == null ? '' : encodeURIComponent(preferenceSetId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ReportConfigs in a given project and location.
		 * Get v1alpha1/{parent}/reportConfigs
		 * @param {string} parent Required. Parent value for `ListReportConfigsRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListReportConfigsResponse} Successful response
		 */
		Migrationcenter_projects_locations_reportConfigs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReportConfigsResponse> {
			return this.http.get<ListReportConfigsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reportConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a report configuration.
		 * Post v1alpha1/{parent}/reportConfigs
		 * @param {string} parent Required. Value for parent.
		 * @param {string} reportConfigId Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_reportConfigs_create(parent: string, reportConfigId: string | null | undefined, requestId: string | null | undefined, requestBody: ReportConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reportConfigs&reportConfigId=' + (reportConfigId == null ? '' : encodeURIComponent(reportConfigId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Reports in a given ReportConfig.
		 * Get v1alpha1/{parent}/reports
		 * @param {string} parent Required. Parent value for `ListReportsRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results that the server should return.
		 * @param {Migrationcenter_projects_locations_reportConfigs_reports_listView} view Determines what information to retrieve for each Report.
		 * @return {ListReportsResponse} Successful response
		 */
		Migrationcenter_projects_locations_reportConfigs_reports_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Migrationcenter_projects_locations_reportConfigs_reports_listView | null | undefined): Observable<ListReportsResponse> {
			return this.http.get<ListReportsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a report.
		 * Post v1alpha1/{parent}/reports
		 * @param {string} parent Required. Value for parent.
		 * @param {string} reportId Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_reportConfigs_reports_create(parent: string, reportId: string | null | undefined, requestId: string | null | undefined, requestBody: Report): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&reportId=' + (reportId == null ? '' : encodeURIComponent(reportId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the sources in a given project and location.
		 * Get v1alpha1/{parent}/sources
		 * @param {string} parent Required. Parent value for `ListSourcesRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Field to sort by. See https://google.aip.dev/132#ordering for more details.
		 * @param {number} pageSize Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results that the server should return.
		 * @return {ListSourcesResponse} Successful response
		 */
		Migrationcenter_projects_locations_sources_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSourcesResponse> {
			return this.http.get<ListSourcesResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new source in a given project and location.
		 * Post v1alpha1/{parent}/sources
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} sourceId Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
		 * @return {Operation} Successful response
		 */
		Migrationcenter_projects_locations_sources_create(parent: string, requestId: string | null | undefined, sourceId: string | null | undefined, requestBody: Source): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sources&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&sourceId=' + (sourceId == null ? '' : encodeURIComponent(sourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Migrationcenter_projects_locations_sources_errorFrames_getView { ERROR_FRAME_VIEW_UNSPECIFIED = 'ERROR_FRAME_VIEW_UNSPECIFIED', ERROR_FRAME_VIEW_BASIC = 'ERROR_FRAME_VIEW_BASIC', ERROR_FRAME_VIEW_FULL = 'ERROR_FRAME_VIEW_FULL', REPORT_VIEW_STANDARD = 'REPORT_VIEW_STANDARD' }

	export enum Migrationcenter_projects_locations_assets_listView { ASSET_VIEW_UNSPECIFIED = 'ASSET_VIEW_UNSPECIFIED', ASSET_VIEW_BASIC = 'ASSET_VIEW_BASIC', ASSET_VIEW_FULL = 'ASSET_VIEW_FULL', ASSET_VIEW_STANDARD = 'ASSET_VIEW_STANDARD' }

	export enum Migrationcenter_projects_locations_sources_errorFrames_listView { ERROR_FRAME_VIEW_UNSPECIFIED = 'ERROR_FRAME_VIEW_UNSPECIFIED', ERROR_FRAME_VIEW_BASIC = 'ERROR_FRAME_VIEW_BASIC', ERROR_FRAME_VIEW_FULL = 'ERROR_FRAME_VIEW_FULL' }

	export enum Migrationcenter_projects_locations_importJobs_listView { IMPORT_JOB_VIEW_UNSPECIFIED = 'IMPORT_JOB_VIEW_UNSPECIFIED', IMPORT_JOB_VIEW_BASIC = 'IMPORT_JOB_VIEW_BASIC', IMPORT_JOB_VIEW_FULL = 'IMPORT_JOB_VIEW_FULL' }

	export enum Migrationcenter_projects_locations_reportConfigs_reports_listView { REPORT_VIEW_UNSPECIFIED = 'REPORT_VIEW_UNSPECIFIED', REPORT_VIEW_BASIC = 'REPORT_VIEW_BASIC', REPORT_VIEW_FULL = 'REPORT_VIEW_FULL', REPORT_VIEW_STANDARD = 'REPORT_VIEW_STANDARD' }

}

