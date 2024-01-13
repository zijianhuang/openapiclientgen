import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Supported auto pause delay time range */
	export interface AutoPauseDelayTimeRange {

		/** Default value is no value is provided */
		default?: number | null;

		/** Value that is used to not pause (infinite delay before pause) */
		doNotPauseValue?: number | null;

		/** Maximum value */
		maxValue?: number | null;

		/** Minimum value */
		minValue?: number | null;

		/** Step value for discrete values between the minimum value and the maximum value. */
		stepSize?: number | null;

		/** Unit of time that delay is expressed in */
		unit?: AutoPauseDelayTimeRangeUnit | null;
	}

	/** Supported auto pause delay time range */
	export interface AutoPauseDelayTimeRangeFormProperties {

		/** Default value is no value is provided */
		default: FormControl<number | null | undefined>,

		/** Value that is used to not pause (infinite delay before pause) */
		doNotPauseValue: FormControl<number | null | undefined>,

		/** Maximum value */
		maxValue: FormControl<number | null | undefined>,

		/** Minimum value */
		minValue: FormControl<number | null | undefined>,

		/** Step value for discrete values between the minimum value and the maximum value. */
		stepSize: FormControl<number | null | undefined>,

		/** Unit of time that delay is expressed in */
		unit: FormControl<AutoPauseDelayTimeRangeUnit | null | undefined>,
	}
	export function CreateAutoPauseDelayTimeRangeFormGroup() {
		return new FormGroup<AutoPauseDelayTimeRangeFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			doNotPauseValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			stepSize: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<AutoPauseDelayTimeRangeUnit | null | undefined>(undefined),
		});

	}

	export enum AutoPauseDelayTimeRangeUnit { Minutes = 0 }


	/** The edition capability. */
	export interface EditionCapability {

		/** The database edition name. */
		name?: string | null;

		/** The read scale capability. */
		readScale?: ReadScaleCapability;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported service objectives for the edition. */
		supportedServiceLevelObjectives?: Array<ServiceObjectiveCapability>;

		/** The list of supported storage capabilities for this edition */
		supportedStorageCapabilities?: Array<StorageCapability>;

		/** Whether or not zone redundancy is supported for the edition. */
		zoneRedundant?: boolean | null;
	}

	/** The edition capability. */
	export interface EditionCapabilityFormProperties {

		/** The database edition name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Whether or not zone redundancy is supported for the edition. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateEditionCapabilityFormGroup() {
		return new FormGroup<EditionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The read scale capability. */
	export interface ReadScaleCapability {

		/** The maximum number of read scale replicas. */
		maxNumberOfReplicas?: number | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;
	}

	/** The read scale capability. */
	export interface ReadScaleCapabilityFormProperties {

		/** The maximum number of read scale replicas. */
		maxNumberOfReplicas: FormControl<number | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateReadScaleCapabilityFormGroup() {
		return new FormGroup<ReadScaleCapabilityFormProperties>({
			maxNumberOfReplicas: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}

	export enum ReadScaleCapabilityStatus { Visible = 0, Available = 1, Default = 2, Disabled = 3 }


	/** The service objectives capability. */
	export interface ServiceObjectiveCapability {

		/** The compute model */
		computeModel?: string | null;

		/** The unique ID of the service objective. */
		id?: string | null;

		/** The maximum size capability. */
		includedMaxSize?: MaxSizeCapability;

		/** The service objective name. */
		name?: string | null;

		/** The performance level capability. */
		performanceLevel?: PerformanceLevelCapability;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** An ARM Resource SKU. */
		sku?: ServiceObjectiveCapabilitySku;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** Supported auto pause delay time range */
		supportedAutoPauseDelay?: AutoPauseDelayTimeRange;

		/** List of supported license types. */
		supportedLicenseTypes?: Array<LicenseTypeCapability>;

		/** The list of supported maximum database sizes. */
		supportedMaxSizes?: Array<MaxSizeRangeCapability>;

		/** List of supported min capacities */
		supportedMinCapacities?: Array<MinCapacityCapability>;

		/** Whether or not zone redundancy is supported for the service objective. */
		zoneRedundant?: boolean | null;
	}

	/** The service objectives capability. */
	export interface ServiceObjectiveCapabilityFormProperties {

		/** The compute model */
		computeModel: FormControl<string | null | undefined>,

		/** The unique ID of the service objective. */
		id: FormControl<string | null | undefined>,

		/** The service objective name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Whether or not zone redundancy is supported for the service objective. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceObjectiveCapabilityFormGroup() {
		return new FormGroup<ServiceObjectiveCapabilityFormProperties>({
			computeModel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The maximum size capability. */
	export interface MaxSizeCapability {

		/** The maximum size limit (see 'unit' for the units). */
		limit?: number | null;

		/** The units that the limit is expressed in. */
		unit?: MaxSizeCapabilityUnit | null;
	}

	/** The maximum size capability. */
	export interface MaxSizeCapabilityFormProperties {

		/** The maximum size limit (see 'unit' for the units). */
		limit: FormControl<number | null | undefined>,

		/** The units that the limit is expressed in. */
		unit: FormControl<MaxSizeCapabilityUnit | null | undefined>,
	}
	export function CreateMaxSizeCapabilityFormGroup() {
		return new FormGroup<MaxSizeCapabilityFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<MaxSizeCapabilityUnit | null | undefined>(undefined),
		});

	}

	export enum MaxSizeCapabilityUnit { Megabytes = 0, Gigabytes = 1, Terabytes = 2, Petabytes = 3 }


	/** The performance level capability. */
	export interface PerformanceLevelCapability {

		/** Unit type used to measure performance level. */
		unit?: PerformanceLevelCapabilityUnit | null;

		/** Performance level value. */
		value?: number | null;
	}

	/** The performance level capability. */
	export interface PerformanceLevelCapabilityFormProperties {

		/** Unit type used to measure performance level. */
		unit: FormControl<PerformanceLevelCapabilityUnit | null | undefined>,

		/** Performance level value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceLevelCapabilityFormGroup() {
		return new FormGroup<PerformanceLevelCapabilityFormProperties>({
			unit: new FormControl<PerformanceLevelCapabilityUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PerformanceLevelCapabilityUnit { DTU = 0, VCores = 1 }

	export interface ServiceObjectiveCapabilitySku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ServiceObjectiveCapabilitySkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateServiceObjectiveCapabilitySkuFormGroup() {
		return new FormGroup<ServiceObjectiveCapabilitySkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The license type capability */
	export interface LicenseTypeCapability {

		/** License type identifier. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;
	}

	/** The license type capability */
	export interface LicenseTypeCapabilityFormProperties {

		/** License type identifier. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateLicenseTypeCapabilityFormGroup() {
		return new FormGroup<LicenseTypeCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The maximum size range capability. */
	export interface MaxSizeRangeCapability {

		/** The log size capability. */
		logSize?: LogSizeCapability;

		/** The maximum size capability. */
		maxValue?: MaxSizeCapability;

		/** The maximum size capability. */
		minValue?: MaxSizeCapability;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The maximum size capability. */
		scaleSize?: MaxSizeCapability;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;
	}

	/** The maximum size range capability. */
	export interface MaxSizeRangeCapabilityFormProperties {

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateMaxSizeRangeCapabilityFormGroup() {
		return new FormGroup<MaxSizeRangeCapabilityFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The log size capability. */
	export interface LogSizeCapability {

		/** The log size limit (see 'unit' for the units). */
		limit?: number | null;

		/** The units that the limit is expressed in. */
		unit?: LogSizeCapabilityUnit | null;
	}

	/** The log size capability. */
	export interface LogSizeCapabilityFormProperties {

		/** The log size limit (see 'unit' for the units). */
		limit: FormControl<number | null | undefined>,

		/** The units that the limit is expressed in. */
		unit: FormControl<LogSizeCapabilityUnit | null | undefined>,
	}
	export function CreateLogSizeCapabilityFormGroup() {
		return new FormGroup<LogSizeCapabilityFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<LogSizeCapabilityUnit | null | undefined>(undefined),
		});

	}

	export enum LogSizeCapabilityUnit { Megabytes = 0, Gigabytes = 1, Terabytes = 2, Petabytes = 3, Percent = 4 }


	/** The min capacity capability */
	export interface MinCapacityCapability {

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** Min capacity value */
		value?: number | null;
	}

	/** The min capacity capability */
	export interface MinCapacityCapabilityFormProperties {

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Min capacity value */
		value: FormControl<number | null | undefined>,
	}
	export function CreateMinCapacityCapabilityFormGroup() {
		return new FormGroup<MinCapacityCapabilityFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The storage account type capability. */
	export interface StorageCapability {

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The storage account type for the database's backups. */
		storageAccountType?: StorageCapabilityStorageAccountType | null;
	}

	/** The storage account type capability. */
	export interface StorageCapabilityFormProperties {

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** The storage account type for the database's backups. */
		storageAccountType: FormControl<StorageCapabilityStorageAccountType | null | undefined>,
	}
	export function CreateStorageCapabilityFormGroup() {
		return new FormGroup<StorageCapabilityFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			storageAccountType: new FormControl<StorageCapabilityStorageAccountType | null | undefined>(undefined),
		});

	}

	export enum StorageCapabilityStorageAccountType { GRS = 0, LRS = 1, ZRS = 2 }


	/** The elastic pool edition capability. */
	export interface ElasticPoolEditionCapability {

		/** The elastic pool edition name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported elastic pool DTU levels for the edition. */
		supportedElasticPoolPerformanceLevels?: Array<ElasticPoolPerformanceLevelCapability>;

		/** Whether or not zone redundancy is supported for the edition. */
		zoneRedundant?: boolean | null;
	}

	/** The elastic pool edition capability. */
	export interface ElasticPoolEditionCapabilityFormProperties {

		/** The elastic pool edition name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Whether or not zone redundancy is supported for the edition. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticPoolEditionCapabilityFormGroup() {
		return new FormGroup<ElasticPoolEditionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Elastic Pool performance level capability. */
	export interface ElasticPoolPerformanceLevelCapability {

		/** The maximum size capability. */
		includedMaxSize?: MaxSizeCapability;

		/** The maximum number of databases supported. */
		maxDatabaseCount?: number | null;

		/** The performance level capability. */
		performanceLevel?: PerformanceLevelCapability;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** An ARM Resource SKU. */
		sku?: ElasticPoolPerformanceLevelCapabilitySku;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** List of supported license types. */
		supportedLicenseTypes?: Array<LicenseTypeCapability>;

		/** The list of supported max sizes. */
		supportedMaxSizes?: Array<MaxSizeRangeCapability>;

		/** The list of supported per database max performance levels. */
		supportedPerDatabaseMaxPerformanceLevels?: Array<ElasticPoolPerDatabaseMaxPerformanceLevelCapability>;

		/** The list of supported per database max sizes. */
		supportedPerDatabaseMaxSizes?: Array<MaxSizeRangeCapability>;

		/** Whether or not zone redundancy is supported for the performance level. */
		zoneRedundant?: boolean | null;
	}

	/** The Elastic Pool performance level capability. */
	export interface ElasticPoolPerformanceLevelCapabilityFormProperties {

		/** The maximum number of databases supported. */
		maxDatabaseCount: FormControl<number | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Whether or not zone redundancy is supported for the performance level. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticPoolPerformanceLevelCapabilityFormGroup() {
		return new FormGroup<ElasticPoolPerformanceLevelCapabilityFormProperties>({
			maxDatabaseCount: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ElasticPoolPerformanceLevelCapabilitySku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ElasticPoolPerformanceLevelCapabilitySkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolPerformanceLevelCapabilitySkuFormGroup() {
		return new FormGroup<ElasticPoolPerformanceLevelCapabilitySkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The max per-database performance level capability. */
	export interface ElasticPoolPerDatabaseMaxPerformanceLevelCapability {

		/** The maximum performance level per database. */
		limit?: number | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported min database performance levels. */
		supportedPerDatabaseMinPerformanceLevels?: Array<ElasticPoolPerDatabaseMinPerformanceLevelCapability>;

		/** Unit type used to measure performance level. */
		unit?: PerformanceLevelCapabilityUnit | null;
	}

	/** The max per-database performance level capability. */
	export interface ElasticPoolPerDatabaseMaxPerformanceLevelCapabilityFormProperties {

		/** The maximum performance level per database. */
		limit: FormControl<number | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Unit type used to measure performance level. */
		unit: FormControl<PerformanceLevelCapabilityUnit | null | undefined>,
	}
	export function CreateElasticPoolPerDatabaseMaxPerformanceLevelCapabilityFormGroup() {
		return new FormGroup<ElasticPoolPerDatabaseMaxPerformanceLevelCapabilityFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			unit: new FormControl<PerformanceLevelCapabilityUnit | null | undefined>(undefined),
		});

	}


	/** The minimum per-database performance level capability. */
	export interface ElasticPoolPerDatabaseMinPerformanceLevelCapability {

		/** The minimum performance level per database. */
		limit?: number | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** Unit type used to measure performance level. */
		unit?: PerformanceLevelCapabilityUnit | null;
	}

	/** The minimum per-database performance level capability. */
	export interface ElasticPoolPerDatabaseMinPerformanceLevelCapabilityFormProperties {

		/** The minimum performance level per database. */
		limit: FormControl<number | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** Unit type used to measure performance level. */
		unit: FormControl<PerformanceLevelCapabilityUnit | null | undefined>,
	}
	export function CreateElasticPoolPerDatabaseMinPerformanceLevelCapabilityFormGroup() {
		return new FormGroup<ElasticPoolPerDatabaseMinPerformanceLevelCapabilityFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			unit: new FormControl<PerformanceLevelCapabilityUnit | null | undefined>(undefined),
		});

	}


	/** The instance pool capability */
	export interface InstancePoolEditionCapability {

		/** The instance pool version name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The supported families. */
		supportedFamilies?: Array<InstancePoolFamilyCapability>;
	}

	/** The instance pool capability */
	export interface InstancePoolEditionCapabilityFormProperties {

		/** The instance pool version name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateInstancePoolEditionCapabilityFormGroup() {
		return new FormGroup<InstancePoolEditionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The instance pool family capability. */
	export interface InstancePoolFamilyCapability {

		/** Family name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** List of supported license types. */
		supportedLicenseTypes?: Array<LicenseTypeCapability>;

		/** List of supported virtual cores values. */
		supportedVcoresValues?: Array<InstancePoolVcoresCapability>;
	}

	/** The instance pool family capability. */
	export interface InstancePoolFamilyCapabilityFormProperties {

		/** Family name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateInstancePoolFamilyCapabilityFormGroup() {
		return new FormGroup<InstancePoolFamilyCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The managed instance virtual cores capability. */
	export interface InstancePoolVcoresCapability {

		/** The virtual cores identifier. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The maximum size capability. */
		storageLimit?: MaxSizeCapability;

		/** The virtual cores value. */
		value?: number | null;
	}

	/** The managed instance virtual cores capability. */
	export interface InstancePoolVcoresCapabilityFormProperties {

		/** The virtual cores identifier. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** The virtual cores value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateInstancePoolVcoresCapabilityFormGroup() {
		return new FormGroup<InstancePoolVcoresCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The location capability. */
	export interface LocationCapabilities {

		/** The location name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported managed instance versions. */
		supportedManagedInstanceVersions?: Array<ManagedInstanceVersionCapability>;

		/** The list of supported server versions. */
		supportedServerVersions?: Array<ServerVersionCapability>;
	}

	/** The location capability. */
	export interface LocationCapabilitiesFormProperties {

		/** The location name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateLocationCapabilitiesFormGroup() {
		return new FormGroup<LocationCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The managed instance capability */
	export interface ManagedInstanceVersionCapability {

		/** The server version name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported managed instance editions. */
		supportedEditions?: Array<ManagedInstanceEditionCapability>;

		/** The list of supported instance pool editions. */
		supportedInstancePoolEditions?: Array<InstancePoolEditionCapability>;
	}

	/** The managed instance capability */
	export interface ManagedInstanceVersionCapabilityFormProperties {

		/** The server version name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateManagedInstanceVersionCapabilityFormGroup() {
		return new FormGroup<ManagedInstanceVersionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The managed server capability */
	export interface ManagedInstanceEditionCapability {

		/** The managed server version name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The supported families. */
		supportedFamilies?: Array<ManagedInstanceFamilyCapability>;
	}

	/** The managed server capability */
	export interface ManagedInstanceEditionCapabilityFormProperties {

		/** The managed server version name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateManagedInstanceEditionCapabilityFormGroup() {
		return new FormGroup<ManagedInstanceEditionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The managed server family capability. */
	export interface ManagedInstanceFamilyCapability {

		/** Family name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** SKU name. */
		sku?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** List of supported license types. */
		supportedLicenseTypes?: Array<LicenseTypeCapability>;

		/** List of supported virtual cores values. */
		supportedVcoresValues?: Array<ManagedInstanceVcoresCapability>;
	}

	/** The managed server family capability. */
	export interface ManagedInstanceFamilyCapabilityFormProperties {

		/** Family name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** SKU name. */
		sku: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateManagedInstanceFamilyCapabilityFormGroup() {
		return new FormGroup<ManagedInstanceFamilyCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}


	/** The managed instance virtual cores capability. */
	export interface ManagedInstanceVcoresCapability {

		/** The maximum size capability. */
		includedMaxSize?: MaxSizeCapability;

		/** True if this service objective is supported for managed instances in an instance pool. */
		instancePoolSupported?: boolean | null;

		/** The virtual cores identifier. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** True if this service objective is supported for standalone managed instances. */
		standaloneSupported?: boolean | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** Storage size ranges. */
		supportedStorageSizes?: Array<MaxSizeRangeCapability>;

		/** The virtual cores value. */
		value?: number | null;
	}

	/** The managed instance virtual cores capability. */
	export interface ManagedInstanceVcoresCapabilityFormProperties {

		/** True if this service objective is supported for managed instances in an instance pool. */
		instancePoolSupported: FormControl<boolean | null | undefined>,

		/** The virtual cores identifier. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** True if this service objective is supported for standalone managed instances. */
		standaloneSupported: FormControl<boolean | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,

		/** The virtual cores value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateManagedInstanceVcoresCapabilityFormGroup() {
		return new FormGroup<ManagedInstanceVcoresCapabilityFormProperties>({
			instancePoolSupported: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			standaloneSupported: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The server capability */
	export interface ServerVersionCapability {

		/** The server version name. */
		name?: string | null;

		/** The reason for the capability not being available. */
		reason?: string | null;

		/** The status of the capability. */
		status?: ReadScaleCapabilityStatus | null;

		/** The list of supported database editions. */
		supportedEditions?: Array<EditionCapability>;

		/** The list of supported elastic pool editions. */
		supportedElasticPoolEditions?: Array<ElasticPoolEditionCapability>;
	}

	/** The server capability */
	export interface ServerVersionCapabilityFormProperties {

		/** The server version name. */
		name: FormControl<string | null | undefined>,

		/** The reason for the capability not being available. */
		reason: FormControl<string | null | undefined>,

		/** The status of the capability. */
		status: FormControl<ReadScaleCapabilityStatus | null | undefined>,
	}
	export function CreateServerVersionCapabilityFormGroup() {
		return new FormGroup<ServerVersionCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReadScaleCapabilityStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the subscription capabilities available for the specified location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/capabilities
		 * @param {string} locationName The location name whose capabilities are retrieved.
		 * @param {Capabilities_ListByLocationInclude} include If specified, restricts the response to only include the selected item.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LocationCapabilities} Successfully retrieved the subscription location capabilities.
		 */
		Capabilities_ListByLocation(locationName: string, include: Capabilities_ListByLocationInclude | null | undefined, subscriptionId: string, api_version: string): Observable<LocationCapabilities> {
			return this.http.get<LocationCapabilities>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/capabilities&include=' + include + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum Capabilities_ListByLocationInclude { supportedEditions = 0, supportedElasticPoolEditions = 1, supportedManagedInstanceVersions = 2, supportedInstancePoolEditions = 3, supportedManagedInstanceEditions = 4 }

}

