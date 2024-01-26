import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Action represents an issue requiring administrator action for resolution. */
	export interface GoogleCloudDataplexV1Action {

		/** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
		asset?: string | null;

		/** The category of issue associated with the action. */
		category?: GoogleCloudDataplexV1ActionCategory | null;

		/** The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id). */
		dataLocations?: Array<string>;

		/** The time that the issue was detected. */
		detectTime?: string | null;

		/** Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource. */
		failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;

		/** Action details for incompatible schemas detected by discovery. */
		incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;

		/** Action details for invalid or unsupported data files detected by discovery. */
		invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;

		/** Action details for invalid data arrangement. */
		invalidDataOrganization?: GoogleCloudDataplexV1ActionInvalidDataOrganization;

		/** Action details for invalid or unsupported partitions detected by discovery. */
		invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;

		/** Detailed description of the issue requiring action. */
		issue?: string | null;

		/** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
		lake?: string | null;

		/** Action details for absence of data detected by discovery. */
		missingData?: GoogleCloudDataplexV1ActionMissingData;

		/** Action details for resource references in assets that cannot be located. */
		missingResource?: GoogleCloudDataplexV1ActionMissingResource;

		/** Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}. */
		name?: string | null;

		/** Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. */
		unauthorizedResource?: GoogleCloudDataplexV1ActionUnauthorizedResource;

		/** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
		zone?: string | null;
	}

	/** Action represents an issue requiring administrator action for resolution. */
	export interface GoogleCloudDataplexV1ActionFormProperties {

		/** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
		asset: FormControl<string | null | undefined>,

		/** The category of issue associated with the action. */
		category: FormControl<GoogleCloudDataplexV1ActionCategory | null | undefined>,

		/** The time that the issue was detected. */
		detectTime: FormControl<string | null | undefined>,

		/** Detailed description of the issue requiring action. */
		issue: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
		lake: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ActionFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<GoogleCloudDataplexV1ActionCategory | null | undefined>(undefined),
			detectTime: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			lake: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ActionCategory { CATEGORY_UNSPECIFIED = 0, RESOURCE_MANAGEMENT = 1, SECURITY_POLICY = 2, DATA_DISCOVERY = 3 }


	/** Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource. */
	export interface GoogleCloudDataplexV1ActionFailedSecurityPolicyApply {

		/** Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only. */
		asset?: string | null;
	}

	/** Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource. */
	export interface GoogleCloudDataplexV1ActionFailedSecurityPolicyApplyFormProperties {

		/** Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only. */
		asset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ActionFailedSecurityPolicyApplyFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionFailedSecurityPolicyApplyFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action details for incompatible schemas detected by discovery. */
	export interface GoogleCloudDataplexV1ActionIncompatibleDataSchema {

		/** The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types. */
		existingSchema?: string | null;

		/** The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types. */
		newSchema?: string | null;

		/** The list of data locations sampled and used for format/schema inference. */
		sampledDataLocations?: Array<string>;

		/** Whether the action relates to a schema that is incompatible or modified. */
		schemaChange?: GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChange | null;

		/** The name of the table containing invalid data. */
		table?: string | null;
	}

	/** Action details for incompatible schemas detected by discovery. */
	export interface GoogleCloudDataplexV1ActionIncompatibleDataSchemaFormProperties {

		/** The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types. */
		existingSchema: FormControl<string | null | undefined>,

		/** The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types. */
		newSchema: FormControl<string | null | undefined>,

		/** Whether the action relates to a schema that is incompatible or modified. */
		schemaChange: FormControl<GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChange | null | undefined>,

		/** The name of the table containing invalid data. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ActionIncompatibleDataSchemaFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionIncompatibleDataSchemaFormProperties>({
			existingSchema: new FormControl<string | null | undefined>(undefined),
			newSchema: new FormControl<string | null | undefined>(undefined),
			schemaChange: new FormControl<GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChange | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChange { SCHEMA_CHANGE_UNSPECIFIED = 0, INCOMPATIBLE = 1, MODIFIED = 2 }


	/** Action details for invalid or unsupported data files detected by discovery. */
	export interface GoogleCloudDataplexV1ActionInvalidDataFormat {

		/** The expected data format of the entity. */
		expectedFormat?: string | null;

		/** The new unexpected data format within the entity. */
		newFormat?: string | null;

		/** The list of data locations sampled and used for format/schema inference. */
		sampledDataLocations?: Array<string>;
	}

	/** Action details for invalid or unsupported data files detected by discovery. */
	export interface GoogleCloudDataplexV1ActionInvalidDataFormatFormProperties {

		/** The expected data format of the entity. */
		expectedFormat: FormControl<string | null | undefined>,

		/** The new unexpected data format within the entity. */
		newFormat: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ActionInvalidDataFormatFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionInvalidDataFormatFormProperties>({
			expectedFormat: new FormControl<string | null | undefined>(undefined),
			newFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action details for invalid data arrangement. */
	export interface GoogleCloudDataplexV1ActionInvalidDataOrganization {
	}

	/** Action details for invalid data arrangement. */
	export interface GoogleCloudDataplexV1ActionInvalidDataOrganizationFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ActionInvalidDataOrganizationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionInvalidDataOrganizationFormProperties>({
		});

	}


	/** Action details for invalid or unsupported partitions detected by discovery. */
	export interface GoogleCloudDataplexV1ActionInvalidDataPartition {

		/** The issue type of InvalidDataPartition. */
		expectedStructure?: GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructure | null;
	}

	/** Action details for invalid or unsupported partitions detected by discovery. */
	export interface GoogleCloudDataplexV1ActionInvalidDataPartitionFormProperties {

		/** The issue type of InvalidDataPartition. */
		expectedStructure: FormControl<GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructure | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ActionInvalidDataPartitionFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionInvalidDataPartitionFormProperties>({
			expectedStructure: new FormControl<GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructure | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructure { PARTITION_STRUCTURE_UNSPECIFIED = 0, CONSISTENT_KEYS = 1, HIVE_STYLE_KEYS = 2 }


	/** Action details for absence of data detected by discovery. */
	export interface GoogleCloudDataplexV1ActionMissingData {
	}

	/** Action details for absence of data detected by discovery. */
	export interface GoogleCloudDataplexV1ActionMissingDataFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ActionMissingDataFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionMissingDataFormProperties>({
		});

	}


	/** Action details for resource references in assets that cannot be located. */
	export interface GoogleCloudDataplexV1ActionMissingResource {
	}

	/** Action details for resource references in assets that cannot be located. */
	export interface GoogleCloudDataplexV1ActionMissingResourceFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ActionMissingResourceFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionMissingResourceFormProperties>({
		});

	}


	/** Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. */
	export interface GoogleCloudDataplexV1ActionUnauthorizedResource {
	}

	/** Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. */
	export interface GoogleCloudDataplexV1ActionUnauthorizedResourceFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ActionUnauthorizedResourceFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ActionUnauthorizedResourceFormProperties>({
		});

	}


	/** An asset represents a cloud resource that is being managed within a lake as a member of a zone. */
	export interface GoogleCloudDataplexV1Asset {

		/** Output only. The time when the asset was created. */
		createTime?: string | null;

		/** Optional. Description of the asset. */
		description?: string | null;

		/** Settings to manage the metadata discovery and publishing for an asset. */
		discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;

		/** Status of discovery for an asset. */
		discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** Optional. User defined labels for the asset. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
		name?: string | null;

		/** Identifies the cloud resource that is referenced by this asset. */
		resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;

		/** Status of the resource referenced by an asset. */
		resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;

		/** Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy. */
		securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;

		/** Output only. Current state of the asset. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the asset was last updated. */
		updateTime?: string | null;
	}

	/** An asset represents a cloud resource that is being managed within a lake as a member of a zone. */
	export interface GoogleCloudDataplexV1AssetFormProperties {

		/** Output only. The time when the asset was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the asset. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User defined labels for the asset. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the asset. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the asset was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to manage the metadata discovery and publishing for an asset. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpec {

		/** Describe CSV and similar semi-structured data formats. */
		csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;

		/** Optional. Whether discovery is enabled. */
		enabled?: boolean | null;

		/** Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
		excludePatterns?: Array<string>;

		/** Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
		includePatterns?: Array<string>;

		/** Describe JSON data format. */
		jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
		schedule?: string | null;
	}

	/** Settings to manage the metadata discovery and publishing for an asset. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpecFormProperties {

		/** Optional. Whether discovery is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
		schedule: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetDiscoverySpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetDiscoverySpecFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describe CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions {

		/** Optional. The delimiter being used to separate values. This defaults to ','. */
		delimiter?: string | null;

		/** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
		disableTypeInference?: boolean | null;

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding?: string | null;

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
		headerRows?: number | null;
	}

	/** Describe CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpecCsvOptionsFormProperties {

		/** Optional. The delimiter being used to separate values. This defaults to ','. */
		delimiter: FormControl<string | null | undefined>,

		/** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
		disableTypeInference: FormControl<boolean | null | undefined>,

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding: FormControl<string | null | undefined>,

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
		headerRows: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetDiscoverySpecCsvOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetDiscoverySpecCsvOptionsFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined),
			disableTypeInference: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			headerRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describe JSON data format. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions {

		/** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
		disableTypeInference?: boolean | null;

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding?: string | null;
	}

	/** Describe JSON data format. */
	export interface GoogleCloudDataplexV1AssetDiscoverySpecJsonOptionsFormProperties {

		/** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
		disableTypeInference: FormControl<boolean | null | undefined>,

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetDiscoverySpecJsonOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetDiscoverySpecJsonOptionsFormProperties>({
			disableTypeInference: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of discovery for an asset. */
	export interface GoogleCloudDataplexV1AssetDiscoveryStatus {

		/** The duration of the last discovery run. */
		lastRunDuration?: string | null;

		/** The start time of the last discovery run. */
		lastRunTime?: string | null;

		/** Additional information about the current state. */
		message?: string | null;

		/** The current status of the discovery feature. */
		state?: GoogleCloudDataplexV1AssetDiscoveryStatusState | null;

		/** The aggregated data statistics for the asset reported by discovery. */
		stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;

		/** Last update time of the status. */
		updateTime?: string | null;
	}

	/** Status of discovery for an asset. */
	export interface GoogleCloudDataplexV1AssetDiscoveryStatusFormProperties {

		/** The duration of the last discovery run. */
		lastRunDuration: FormControl<string | null | undefined>,

		/** The start time of the last discovery run. */
		lastRunTime: FormControl<string | null | undefined>,

		/** Additional information about the current state. */
		message: FormControl<string | null | undefined>,

		/** The current status of the discovery feature. */
		state: FormControl<GoogleCloudDataplexV1AssetDiscoveryStatusState | null | undefined>,

		/** Last update time of the status. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetDiscoveryStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetDiscoveryStatusFormProperties>({
			lastRunDuration: new FormControl<string | null | undefined>(undefined),
			lastRunTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetDiscoveryStatusState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1AssetDiscoveryStatusState { STATE_UNSPECIFIED = 0, SCHEDULED = 1, IN_PROGRESS = 2, PAUSED = 3, DISABLED = 4 }


	/** The aggregated data statistics for the asset reported by discovery. */
	export interface GoogleCloudDataplexV1AssetDiscoveryStatusStats {

		/** The count of data items within the referenced resource. */
		dataItems?: string | null;

		/** The number of stored data bytes within the referenced resource. */
		dataSize?: string | null;

		/** The count of fileset entities within the referenced resource. */
		filesets?: string | null;

		/** The count of table entities within the referenced resource. */
		tables?: string | null;
	}

	/** The aggregated data statistics for the asset reported by discovery. */
	export interface GoogleCloudDataplexV1AssetDiscoveryStatusStatsFormProperties {

		/** The count of data items within the referenced resource. */
		dataItems: FormControl<string | null | undefined>,

		/** The number of stored data bytes within the referenced resource. */
		dataSize: FormControl<string | null | undefined>,

		/** The count of fileset entities within the referenced resource. */
		filesets: FormControl<string | null | undefined>,

		/** The count of table entities within the referenced resource. */
		tables: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetDiscoveryStatusStatsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetDiscoveryStatusStatsFormProperties>({
			dataItems: new FormControl<string | null | undefined>(undefined),
			dataSize: new FormControl<string | null | undefined>(undefined),
			filesets: new FormControl<string | null | undefined>(undefined),
			tables: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the cloud resource that is referenced by this asset. */
	export interface GoogleCloudDataplexV1AssetResourceSpec {

		/** Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id} */
		name?: string | null;

		/** Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. */
		readAccessMode?: GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null;

		/** Required. Immutable. Type of resource. */
		type?: GoogleCloudDataplexV1AssetResourceSpecType | null;
	}

	/** Identifies the cloud resource that is referenced by this asset. */
	export interface GoogleCloudDataplexV1AssetResourceSpecFormProperties {

		/** Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id} */
		name: FormControl<string | null | undefined>,

		/** Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. */
		readAccessMode: FormControl<GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null | undefined>,

		/** Required. Immutable. Type of resource. */
		type: FormControl<GoogleCloudDataplexV1AssetResourceSpecType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetResourceSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetResourceSpecFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			readAccessMode: new FormControl<GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1AssetResourceSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1AssetResourceSpecReadAccessMode { ACCESS_MODE_UNSPECIFIED = 0, DIRECT = 1, MANAGED = 2 }

	export enum GoogleCloudDataplexV1AssetResourceSpecType { TYPE_UNSPECIFIED = 0, STORAGE_BUCKET = 1, BIGQUERY_DATASET = 2 }


	/** Status of the resource referenced by an asset. */
	export interface GoogleCloudDataplexV1AssetResourceStatus {

		/** Output only. Service account associated with the BigQuery Connection. */
		managedAccessIdentity?: string | null;

		/** Additional information about the current state. */
		message?: string | null;

		/** The current state of the managed resource. */
		state?: GoogleCloudDataplexV1AssetResourceStatusState | null;

		/** Last update time of the status. */
		updateTime?: string | null;
	}

	/** Status of the resource referenced by an asset. */
	export interface GoogleCloudDataplexV1AssetResourceStatusFormProperties {

		/** Output only. Service account associated with the BigQuery Connection. */
		managedAccessIdentity: FormControl<string | null | undefined>,

		/** Additional information about the current state. */
		message: FormControl<string | null | undefined>,

		/** The current state of the managed resource. */
		state: FormControl<GoogleCloudDataplexV1AssetResourceStatusState | null | undefined>,

		/** Last update time of the status. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetResourceStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetResourceStatusFormProperties>({
			managedAccessIdentity: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetResourceStatusState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1AssetResourceStatusState { STATE_UNSPECIFIED = 0, READY = 1, ERROR = 2 }


	/** Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy. */
	export interface GoogleCloudDataplexV1AssetSecurityStatus {

		/** Additional information about the current state. */
		message?: string | null;

		/** The current state of the security policy applied to the attached resource. */
		state?: GoogleCloudDataplexV1AssetSecurityStatusState | null;

		/** Last update time of the status. */
		updateTime?: string | null;
	}

	/** Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy. */
	export interface GoogleCloudDataplexV1AssetSecurityStatusFormProperties {

		/** Additional information about the current state. */
		message: FormControl<string | null | undefined>,

		/** The current state of the security policy applied to the attached resource. */
		state: FormControl<GoogleCloudDataplexV1AssetSecurityStatusState | null | undefined>,

		/** Last update time of the status. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetSecurityStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetSecurityStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetSecurityStatusState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1AssetSecurityStatusState { STATE_UNSPECIFIED = 0, READY = 1, APPLYING = 2, ERROR = 3 }

	export enum GoogleCloudDataplexV1AssetState { STATE_UNSPECIFIED = 0, ACTIVE = 1, CREATING = 2, DELETING = 3, ACTION_REQUIRED = 4 }


	/** Aggregated status of the underlying assets of a lake or zone. */
	export interface GoogleCloudDataplexV1AssetStatus {

		/** Number of active assets. */
		activeAssets?: number | null;

		/** Number of assets that are in process of updating the security policy on attached resources. */
		securityPolicyApplyingAssets?: number | null;

		/** Last update time of the status. */
		updateTime?: string | null;
	}

	/** Aggregated status of the underlying assets of a lake or zone. */
	export interface GoogleCloudDataplexV1AssetStatusFormProperties {

		/** Number of active assets. */
		activeAssets: FormControl<number | null | undefined>,

		/** Number of assets that are in process of updating the security policy on attached resources. */
		securityPolicyApplyingAssets: FormControl<number | null | undefined>,

		/** Last update time of the status. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1AssetStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1AssetStatusFormProperties>({
			activeAssets: new FormControl<number | null | undefined>(undefined),
			securityPolicyApplyingAssets: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cancel task jobs. */
	export interface GoogleCloudDataplexV1CancelJobRequest {
	}

	/** Cancel task jobs. */
	export interface GoogleCloudDataplexV1CancelJobRequestFormProperties {
	}
	export function CreateGoogleCloudDataplexV1CancelJobRequestFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1CancelJobRequestFormProperties>({
		});

	}


	/** Content represents a user-visible notebook or a sql script */
	export interface GoogleCloudDataplexV1Content {

		/** Output only. Content creation time. */
		createTime?: string | null;

		/** Required. Content data in string format. */
		dataText?: string | null;

		/** Optional. Description of the content. */
		description?: string | null;

		/** Optional. User defined labels for the content. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} */
		name?: string | null;

		/** Configuration for Notebook content. */
		notebook?: GoogleCloudDataplexV1ContentNotebook;

		/** Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes. */
		path?: string | null;

		/** Configuration for the Sql Script content. */
		sqlScript?: GoogleCloudDataplexV1ContentSqlScript;

		/** Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the content was last updated. */
		updateTime?: string | null;
	}

	/** Content represents a user-visible notebook or a sql script */
	export interface GoogleCloudDataplexV1ContentFormProperties {

		/** Output only. Content creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Content data in string format. */
		dataText: FormControl<string | null | undefined>,

		/** Optional. Description of the content. */
		description: FormControl<string | null | undefined>,

		/** Optional. User defined labels for the content. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} */
		name: FormControl<string | null | undefined>,

		/** Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes. */
		path: FormControl<string | null | undefined>,

		/** Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the content was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ContentFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ContentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataText: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Notebook content. */
	export interface GoogleCloudDataplexV1ContentNotebook {

		/** Required. Kernel Type of the notebook. */
		kernelType?: GoogleCloudDataplexV1ContentNotebookKernelType | null;
	}

	/** Configuration for Notebook content. */
	export interface GoogleCloudDataplexV1ContentNotebookFormProperties {

		/** Required. Kernel Type of the notebook. */
		kernelType: FormControl<GoogleCloudDataplexV1ContentNotebookKernelType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ContentNotebookFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ContentNotebookFormProperties>({
			kernelType: new FormControl<GoogleCloudDataplexV1ContentNotebookKernelType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ContentNotebookKernelType { KERNEL_TYPE_UNSPECIFIED = 0, PYTHON3 = 1 }


	/** Configuration for the Sql Script content. */
	export interface GoogleCloudDataplexV1ContentSqlScript {

		/** Required. Query Engine to be used for the Sql Query. */
		engine?: GoogleCloudDataplexV1ContentSqlScriptEngine | null;
	}

	/** Configuration for the Sql Script content. */
	export interface GoogleCloudDataplexV1ContentSqlScriptFormProperties {

		/** Required. Query Engine to be used for the Sql Query. */
		engine: FormControl<GoogleCloudDataplexV1ContentSqlScriptEngine | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ContentSqlScriptFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ContentSqlScriptFormProperties>({
			engine: new FormControl<GoogleCloudDataplexV1ContentSqlScriptEngine | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ContentSqlScriptEngine { QUERY_ENGINE_UNSPECIFIED = 0, SPARK = 1 }


	/** DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access. */
	export interface GoogleCloudDataplexV1DataAccessSpec {

		/** Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources. */
		readers?: Array<string>;
	}

	/** DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access. */
	export interface GoogleCloudDataplexV1DataAccessSpecFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataAccessSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataAccessSpecFormProperties>({
		});

	}


	/** Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com  */
	export interface GoogleCloudDataplexV1DataAttribute {

		/** Output only. The number of child attributes present for this attribute. */
		attributeCount?: number | null;

		/** Output only. The time when the DataAttribute was created. */
		createTime?: string | null;

		/** DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access. */
		dataAccessSpec?: GoogleCloudDataplexV1DataAccessSpec;

		/** Optional. Description of the DataAttribute. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. User-defined labels for the DataAttribute. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. */
		name?: string | null;

		/** Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4 */
		parentId?: string | null;

		/** ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table. */
		resourceAccessSpec?: GoogleCloudDataplexV1ResourceAccessSpec;

		/** Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the DataAttribute was last updated. */
		updateTime?: string | null;
	}

	/** Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com  */
	export interface GoogleCloudDataplexV1DataAttributeFormProperties {

		/** Output only. The number of child attributes present for this attribute. */
		attributeCount: FormControl<number | null | undefined>,

		/** Output only. The time when the DataAttribute was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the DataAttribute. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the DataAttribute. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. */
		name: FormControl<string | null | undefined>,

		/** Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4 */
		parentId: FormControl<string | null | undefined>,

		/** Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the DataAttribute was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataAttributeFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataAttributeFormProperties>({
			attributeCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table. */
	export interface GoogleCloudDataplexV1ResourceAccessSpec {

		/** Optional. The set of principals to be granted owner role on the resource. */
		owners?: Array<string>;

		/** Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource. */
		readers?: Array<string>;

		/** Optional. The set of principals to be granted writer role on the resource. */
		writers?: Array<string>;
	}

	/** ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table. */
	export interface GoogleCloudDataplexV1ResourceAccessSpecFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ResourceAccessSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ResourceAccessSpecFormProperties>({
		});

	}


	/** DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute. */
	export interface GoogleCloudDataplexV1DataAttributeBinding {

		/** Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
		attributes?: Array<string>;

		/** Output only. The time when the DataAttributeBinding was created. */
		createTime?: string | null;

		/** Optional. Description of the DataAttributeBinding. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method. */
		etag?: string | null;

		/** Optional. User-defined labels for the DataAttributeBinding. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} */
		name?: string | null;

		/** Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings. */
		paths?: Array<GoogleCloudDataplexV1DataAttributeBindingPath>;

		/** Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource. */
		resource?: string | null;

		/** Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the DataAttributeBinding was last updated. */
		updateTime?: string | null;
	}

	/** DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute. */
	export interface GoogleCloudDataplexV1DataAttributeBindingFormProperties {

		/** Output only. The time when the DataAttributeBinding was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the DataAttributeBinding. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method. */
		etag: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the DataAttributeBinding. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} */
		name: FormControl<string | null | undefined>,

		/** Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource. */
		resource: FormControl<string | null | undefined>,

		/** Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the DataAttributeBinding was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataAttributeBindingFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataAttributeBindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table. */
	export interface GoogleCloudDataplexV1DataAttributeBindingPath {

		/** Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
		attributes?: Array<string>;

		/** Required. The name identifier of the path. Nested columns should be of the form: 'address.city'. */
		name?: string | null;
	}

	/** Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table. */
	export interface GoogleCloudDataplexV1DataAttributeBindingPathFormProperties {

		/** Required. The name identifier of the path. Nested columns should be of the form: 'address.city'. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataAttributeBindingPathFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataAttributeBindingPathFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result. */
	export interface GoogleCloudDataplexV1DataProfileResult {

		/** The result of post scan actions of DataProfileScan job. */
		postScanActionsResult?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResult;

		/** Contains name, type, mode and field type specific profile information. */
		profile?: GoogleCloudDataplexV1DataProfileResultProfile;

		/** The count of rows scanned. */
		rowCount?: string | null;

		/** The data scanned during processing (e.g. in incremental DataScan) */
		scannedData?: GoogleCloudDataplexV1ScannedData;
	}

	/** DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result. */
	export interface GoogleCloudDataplexV1DataProfileResultFormProperties {

		/** The count of rows scanned. */
		rowCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultFormProperties>({
			rowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of post scan actions of DataProfileScan job. */
	export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResult {

		/** The result of BigQuery export post scan action. */
		bigqueryExportResult?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult;
	}

	/** The result of post scan actions of DataProfileScan job. */
	export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResultFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultPostScanActionsResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultFormProperties>({
		});

	}


	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult {

		/** Output only. Additional information about the BigQuery exporting. */
		message?: string | null;

		/** Output only. Execution state for the BigQuery exporting. */
		state?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null;
	}

	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultFormProperties {

		/** Output only. Additional information about the BigQuery exporting. */
		message: FormControl<string | null | undefined>,

		/** Output only. Execution state for the BigQuery exporting. */
		state: FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState { STATE_UNSPECIFIED = 0, SUCCEEDED = 1, FAILED = 2, SKIPPED = 3 }


	/** Contains name, type, mode and field type specific profile information. */
	export interface GoogleCloudDataplexV1DataProfileResultProfile {

		/** List of fields with structural and profile information for each field. */
		fields?: Array<GoogleCloudDataplexV1DataProfileResultProfileField>;
	}

	/** Contains name, type, mode and field type specific profile information. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFormProperties>({
		});

	}


	/** A field within a table. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileField {

		/** The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field. */
		mode?: string | null;

		/** The name of the field. */
		name?: string | null;

		/** The profile information for each field type. */
		profile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;

		/** The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3). */
		type?: string | null;
	}

	/** A field within a table. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldFormProperties {

		/** The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field. */
		mode: FormControl<string | null | undefined>,

		/** The name of the field. */
		name: FormControl<string | null | undefined>,

		/** The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile information for each field type. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo {

		/** Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode. */
		distinctRatio?: number | null;

		/** The profile information for a double type field. */
		doubleProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;

		/** The profile information for an integer type field. */
		integerProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;

		/** Ratio of rows with null value against total scanned rows. */
		nullRatio?: number | null;

		/** The profile information for a string type field. */
		stringProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;

		/** The list of top N non-null values, frequency and ratio with which they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode. */
		topNValues?: Array<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue>;
	}

	/** The profile information for each field type. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoFormProperties {

		/** Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode. */
		distinctRatio: FormControl<number | null | undefined>,

		/** Ratio of rows with null value against total scanned rows. */
		nullRatio: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoFormProperties>({
			distinctRatio: new FormControl<number | null | undefined>(undefined),
			nullRatio: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The profile information for a double type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo {

		/** Average of non-null values in the scanned data. NaN, if the field has a NaN. */
		average?: number | null;

		/** Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
		max?: number | null;

		/** Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
		min?: number | null;

		/** A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3. */
		quartiles?: Array<number>;

		/** Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
		standardDeviation?: number | null;
	}

	/** The profile information for a double type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfoFormProperties {

		/** Average of non-null values in the scanned data. NaN, if the field has a NaN. */
		average: FormControl<number | null | undefined>,

		/** Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
		max: FormControl<number | null | undefined>,

		/** Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
		min: FormControl<number | null | undefined>,

		/** Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
		standardDeviation: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfoFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfoFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			standardDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The profile information for an integer type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo {

		/** Average of non-null values in the scanned data. NaN, if the field has a NaN. */
		average?: number | null;

		/** Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
		max?: string | null;

		/** Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
		min?: string | null;

		/** A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of approximate quartile values for the scanned data, occurring in order Q1, median, Q3. */
		quartiles?: Array<string>;

		/** Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
		standardDeviation?: number | null;
	}

	/** The profile information for an integer type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfoFormProperties {

		/** Average of non-null values in the scanned data. NaN, if the field has a NaN. */
		average: FormControl<number | null | undefined>,

		/** Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
		max: FormControl<string | null | undefined>,

		/** Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
		min: FormControl<string | null | undefined>,

		/** Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
		standardDeviation: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfoFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfoFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<string | null | undefined>(undefined),
			standardDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The profile information for a string type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo {

		/** Average length of non-null values in the scanned data. */
		averageLength?: number | null;

		/** Maximum length of non-null values in the scanned data. */
		maxLength?: string | null;

		/** Minimum length of non-null values in the scanned data. */
		minLength?: string | null;
	}

	/** The profile information for a string type field. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfoFormProperties {

		/** Average length of non-null values in the scanned data. */
		averageLength: FormControl<number | null | undefined>,

		/** Maximum length of non-null values in the scanned data. */
		maxLength: FormControl<string | null | undefined>,

		/** Minimum length of non-null values in the scanned data. */
		minLength: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfoFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfoFormProperties>({
			averageLength: new FormControl<number | null | undefined>(undefined),
			maxLength: new FormControl<string | null | undefined>(undefined),
			minLength: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Top N non-null values in the scanned data. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue {

		/** Count of the corresponding value in the scanned data. */
		count?: string | null;

		/** Ratio of the corresponding value in the field against the total number of rows in the scanned data. */
		ratio?: number | null;

		/** String value of a top N non-null value. */
		value?: string | null;
	}

	/** Top N non-null values in the scanned data. */
	export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValueFormProperties {

		/** Count of the corresponding value in the scanned data. */
		count: FormControl<string | null | undefined>,

		/** Ratio of the corresponding value in the field against the total number of rows in the scanned data. */
		ratio: FormControl<number | null | undefined>,

		/** String value of a top N non-null value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValueFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValueFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			ratio: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data scanned during processing (e.g. in incremental DataScan) */
	export interface GoogleCloudDataplexV1ScannedData {

		/** A data range denoted by a pair of start/end values of a field. */
		incrementalField?: GoogleCloudDataplexV1ScannedDataIncrementalField;
	}

	/** The data scanned during processing (e.g. in incremental DataScan) */
	export interface GoogleCloudDataplexV1ScannedDataFormProperties {
	}
	export function CreateGoogleCloudDataplexV1ScannedDataFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ScannedDataFormProperties>({
		});

	}


	/** A data range denoted by a pair of start/end values of a field. */
	export interface GoogleCloudDataplexV1ScannedDataIncrementalField {

		/** Value that marks the end of the range. */
		end?: string | null;

		/** The field that contains values which monotonically increases over time (e.g. a timestamp column). */
		field?: string | null;

		/** Value that marks the start of the range. */
		start?: string | null;
	}

	/** A data range denoted by a pair of start/end values of a field. */
	export interface GoogleCloudDataplexV1ScannedDataIncrementalFieldFormProperties {

		/** Value that marks the end of the range. */
		end: FormControl<string | null | undefined>,

		/** The field that contains values which monotonically increases over time (e.g. a timestamp column). */
		field: FormControl<string | null | undefined>,

		/** Value that marks the start of the range. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ScannedDataIncrementalFieldFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ScannedDataIncrementalFieldFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataProfileScan related setting. */
	export interface GoogleCloudDataplexV1DataProfileSpec {

		/** The specification for fields to include or exclude in data profile scan. */
		excludeFields?: GoogleCloudDataplexV1DataProfileSpecSelectedFields;

		/** The specification for fields to include or exclude in data profile scan. */
		includeFields?: GoogleCloudDataplexV1DataProfileSpecSelectedFields;

		/** The configuration of post scan actions of DataProfileScan job. */
		postScanActions?: GoogleCloudDataplexV1DataProfileSpecPostScanActions;

		/** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10 */
		rowFilter?: string | null;

		/** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
		samplingPercent?: number | null;
	}

	/** DataProfileScan related setting. */
	export interface GoogleCloudDataplexV1DataProfileSpecFormProperties {

		/** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10 */
		rowFilter: FormControl<string | null | undefined>,

		/** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
		samplingPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileSpecFormProperties>({
			rowFilter: new FormControl<string | null | undefined>(undefined),
			samplingPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specification for fields to include or exclude in data profile scan. */
	export interface GoogleCloudDataplexV1DataProfileSpecSelectedFields {

		/** Optional. Expected input is a list of fully qualified names of fields as in the schema.Only top-level field names for nested fields are supported. For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'. */
		fieldNames?: Array<string>;
	}

	/** The specification for fields to include or exclude in data profile scan. */
	export interface GoogleCloudDataplexV1DataProfileSpecSelectedFieldsFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataProfileSpecSelectedFieldsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileSpecSelectedFieldsFormProperties>({
		});

	}


	/** The configuration of post scan actions of DataProfileScan job. */
	export interface GoogleCloudDataplexV1DataProfileSpecPostScanActions {

		/** The configuration of BigQuery export post scan action. */
		bigqueryExport?: GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport;
	}

	/** The configuration of post scan actions of DataProfileScan job. */
	export interface GoogleCloudDataplexV1DataProfileSpecPostScanActionsFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataProfileSpecPostScanActionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileSpecPostScanActionsFormProperties>({
		});

	}


	/** The configuration of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport {

		/** Optional. The BigQuery table to export DataProfileScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resultsTable?: string | null;
	}

	/** The configuration of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExportFormProperties {

		/** Optional. The BigQuery table to export DataProfileScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resultsTable: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExportFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExportFormProperties>({
			resultsTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataQualityColumnResult provides a more detailed, per-column view of the results. */
	export interface GoogleCloudDataplexV1DataQualityColumnResult {

		/** Output only. The column specified in the DataQualityRule. */
		column?: string | null;

		/** Output only. The column-level data quality score for this data scan job if and only if the 'column' field is set.The score ranges between between 0, 100 (up to two decimal points). */
		score?: number | null;
	}

	/** DataQualityColumnResult provides a more detailed, per-column view of the results. */
	export interface GoogleCloudDataplexV1DataQualityColumnResultFormProperties {

		/** Output only. The column specified in the DataQualityRule. */
		column: FormControl<string | null | undefined>,

		/** Output only. The column-level data quality score for this data scan job if and only if the 'column' field is set.The score ranges between between 0, 100 (up to two decimal points). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityColumnResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityColumnResultFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A dimension captures data quality intent about a defined subset of the rules specified. */
	export interface GoogleCloudDataplexV1DataQualityDimension {

		/** The dimension name a rule belongs to. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY" */
		name?: string | null;
	}

	/** A dimension captures data quality intent about a defined subset of the rules specified. */
	export interface GoogleCloudDataplexV1DataQualityDimensionFormProperties {

		/** The dimension name a rule belongs to. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityDimensionFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataQualityDimensionResult provides a more detailed, per-dimension view of the results. */
	export interface GoogleCloudDataplexV1DataQualityDimensionResult {

		/** A dimension captures data quality intent about a defined subset of the rules specified. */
		dimension?: GoogleCloudDataplexV1DataQualityDimension;

		/** Whether the dimension passed or failed. */
		passed?: boolean | null;

		/** Output only. The dimension-level data quality score for this data scan job if and only if the 'dimension' field is set.The score ranges between 0, 100 (up to two decimal points). */
		score?: number | null;
	}

	/** DataQualityDimensionResult provides a more detailed, per-dimension view of the results. */
	export interface GoogleCloudDataplexV1DataQualityDimensionResultFormProperties {

		/** Whether the dimension passed or failed. */
		passed: FormControl<boolean | null | undefined>,

		/** Output only. The dimension-level data quality score for this data scan job if and only if the 'dimension' field is set.The score ranges between 0, 100 (up to two decimal points). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityDimensionResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityDimensionResultFormProperties>({
			passed: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output of a DataQualityScan. */
	export interface GoogleCloudDataplexV1DataQualityResult {

		/** Output only. A list of results at the column level.A column will have a corresponding DataQualityColumnResult if and only if there is at least one rule with the 'column' field set to it. */
		columns?: Array<GoogleCloudDataplexV1DataQualityColumnResult>;

		/** A list of results at the dimension level.A dimension will have a corresponding DataQualityDimensionResult if and only if there is at least one rule with the 'dimension' field set to it. */
		dimensions?: Array<GoogleCloudDataplexV1DataQualityDimensionResult>;

		/** Overall data quality result -- true if all rules passed. */
		passed?: boolean | null;

		/** The result of post scan actions of DataQualityScan job. */
		postScanActionsResult?: GoogleCloudDataplexV1DataQualityResultPostScanActionsResult;

		/** The count of rows processed. */
		rowCount?: string | null;

		/** A list of all the rules in a job, and their results. */
		rules?: Array<GoogleCloudDataplexV1DataQualityRuleResult>;

		/** The data scanned during processing (e.g. in incremental DataScan) */
		scannedData?: GoogleCloudDataplexV1ScannedData;

		/** Output only. The overall data quality score.The score ranges between 0, 100 (up to two decimal points). */
		score?: number | null;
	}

	/** The output of a DataQualityScan. */
	export interface GoogleCloudDataplexV1DataQualityResultFormProperties {

		/** Overall data quality result -- true if all rules passed. */
		passed: FormControl<boolean | null | undefined>,

		/** The count of rows processed. */
		rowCount: FormControl<string | null | undefined>,

		/** Output only. The overall data quality score.The score ranges between 0, 100 (up to two decimal points). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityResultFormProperties>({
			passed: new FormControl<boolean | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of post scan actions of DataQualityScan job. */
	export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResult {

		/** The result of BigQuery export post scan action. */
		bigqueryExportResult?: GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult;
	}

	/** The result of post scan actions of DataQualityScan job. */
	export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResultFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataQualityResultPostScanActionsResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityResultPostScanActionsResultFormProperties>({
		});

	}


	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult {

		/** Output only. Additional information about the BigQuery exporting. */
		message?: string | null;

		/** Output only. Execution state for the BigQuery exporting. */
		state?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null;
	}

	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResultFormProperties {

		/** Output only. Additional information about the BigQuery exporting. */
		message: FormControl<string | null | undefined>,

		/** Output only. Execution state for the BigQuery exporting. */
		state: FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>(undefined),
		});

	}


	/** DataQualityRuleResult provides a more detailed, per-rule view of the results. */
	export interface GoogleCloudDataplexV1DataQualityRuleResult {

		/** The number of rows a rule was evaluated against.This field is only valid for row-level type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true. */
		evaluatedCount?: string | null;

		/** The query to find rows that did not pass this rule.This field is only valid for row-level type rules. */
		failingRowsQuery?: string | null;

		/** The number of rows with null values in the specified column. */
		nullCount?: string | null;

		/** The ratio of passed_count / evaluated_count.This field is only valid for row-level type rules. */
		passRatio?: number | null;

		/** Whether the rule passed or failed. */
		passed?: boolean | null;

		/** The number of rows which passed a rule evaluation.This field is only valid for row-level type rules. */
		passedCount?: string | null;

		/** A rule captures data quality intent about a data source. */
		rule?: GoogleCloudDataplexV1DataQualityRule;
	}

	/** DataQualityRuleResult provides a more detailed, per-rule view of the results. */
	export interface GoogleCloudDataplexV1DataQualityRuleResultFormProperties {

		/** The number of rows a rule was evaluated against.This field is only valid for row-level type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true. */
		evaluatedCount: FormControl<string | null | undefined>,

		/** The query to find rows that did not pass this rule.This field is only valid for row-level type rules. */
		failingRowsQuery: FormControl<string | null | undefined>,

		/** The number of rows with null values in the specified column. */
		nullCount: FormControl<string | null | undefined>,

		/** The ratio of passed_count / evaluated_count.This field is only valid for row-level type rules. */
		passRatio: FormControl<number | null | undefined>,

		/** Whether the rule passed or failed. */
		passed: FormControl<boolean | null | undefined>,

		/** The number of rows which passed a rule evaluation.This field is only valid for row-level type rules. */
		passedCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleResultFormProperties>({
			evaluatedCount: new FormControl<string | null | undefined>(undefined),
			failingRowsQuery: new FormControl<string | null | undefined>(undefined),
			nullCount: new FormControl<string | null | undefined>(undefined),
			passRatio: new FormControl<number | null | undefined>(undefined),
			passed: new FormControl<boolean | null | undefined>(undefined),
			passedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule captures data quality intent about a data source. */
	export interface GoogleCloudDataplexV1DataQualityRule {

		/** Optional. The unnested column which this rule is evaluated against. */
		column?: string | null;

		/** Optional. Description of the rule. The maximum length is 1,024 characters. */
		description?: string | null;

		/** Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY" */
		dimension?: string | null;

		/** Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.This field is only valid for the following type of rules: RangeExpectation RegexExpectation SetExpectation UniquenessExpectation */
		ignoreNull?: boolean | null;

		/** Optional. A mutable name for the rule. The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-). The maximum length is 63 characters. Must start with a letter. Must end with a number or a letter. */
		name?: string | null;

		/** Evaluates whether each column value is null. */
		nonNullExpectation?: GoogleCloudDataplexV1DataQualityRuleNonNullExpectation;

		/** Evaluates whether each column value lies between a specified range. */
		rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation;

		/** Evaluates whether each column value matches a specified regex. */
		regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation;

		/** Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10 */
		rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;

		/** Evaluates whether each column value is contained by a specified set. */
		setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation;

		/** Evaluates whether the column aggregate statistic lies between a specified range. */
		statisticRangeExpectation?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;

		/** Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0 */
		tableConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;

		/** Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).This field is only valid for row-level type rules. */
		threshold?: number | null;

		/** Evaluates whether the column has duplicates. */
		uniquenessExpectation?: GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation;
	}

	/** A rule captures data quality intent about a data source. */
	export interface GoogleCloudDataplexV1DataQualityRuleFormProperties {

		/** Optional. The unnested column which this rule is evaluated against. */
		column: FormControl<string | null | undefined>,

		/** Optional. Description of the rule. The maximum length is 1,024 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY" */
		dimension: FormControl<string | null | undefined>,

		/** Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.This field is only valid for the following type of rules: RangeExpectation RegexExpectation SetExpectation UniquenessExpectation */
		ignoreNull: FormControl<boolean | null | undefined>,

		/** Optional. A mutable name for the rule. The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-). The maximum length is 63 characters. Must start with a letter. Must end with a number or a letter. */
		name: FormControl<string | null | undefined>,

		/** Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).This field is only valid for row-level type rules. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			ignoreNull: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Evaluates whether each column value is null. */
	export interface GoogleCloudDataplexV1DataQualityRuleNonNullExpectation {
	}

	/** Evaluates whether each column value is null. */
	export interface GoogleCloudDataplexV1DataQualityRuleNonNullExpectationFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleNonNullExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleNonNullExpectationFormProperties>({
		});

	}


	/** Evaluates whether each column value lies between a specified range. */
	export interface GoogleCloudDataplexV1DataQualityRuleRangeExpectation {

		/** Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
		maxValue?: string | null;

		/** Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
		minValue?: string | null;

		/** Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
		strictMaxEnabled?: boolean | null;

		/** Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
		strictMinEnabled?: boolean | null;
	}

	/** Evaluates whether each column value lies between a specified range. */
	export interface GoogleCloudDataplexV1DataQualityRuleRangeExpectationFormProperties {

		/** Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
		maxValue: FormControl<string | null | undefined>,

		/** Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
		minValue: FormControl<string | null | undefined>,

		/** Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
		strictMaxEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
		strictMinEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleRangeExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleRangeExpectationFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
			strictMaxEnabled: new FormControl<boolean | null | undefined>(undefined),
			strictMinEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Evaluates whether each column value matches a specified regex. */
	export interface GoogleCloudDataplexV1DataQualityRuleRegexExpectation {

		/** Optional. A regular expression the column value is expected to match. */
		regex?: string | null;
	}

	/** Evaluates whether each column value matches a specified regex. */
	export interface GoogleCloudDataplexV1DataQualityRuleRegexExpectationFormProperties {

		/** Optional. A regular expression the column value is expected to match. */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleRegexExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleRegexExpectationFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10 */
	export interface GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation {

		/** Optional. The SQL expression. */
		sqlExpression?: string | null;
	}

	/** Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10 */
	export interface GoogleCloudDataplexV1DataQualityRuleRowConditionExpectationFormProperties {

		/** Optional. The SQL expression. */
		sqlExpression: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleRowConditionExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleRowConditionExpectationFormProperties>({
			sqlExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluates whether each column value is contained by a specified set. */
	export interface GoogleCloudDataplexV1DataQualityRuleSetExpectation {

		/** Optional. Expected values for the column value. */
		values?: Array<string>;
	}

	/** Evaluates whether each column value is contained by a specified set. */
	export interface GoogleCloudDataplexV1DataQualityRuleSetExpectationFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleSetExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleSetExpectationFormProperties>({
		});

	}


	/** Evaluates whether the column aggregate statistic lies between a specified range. */
	export interface GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation {

		/** Optional. The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
		maxValue?: string | null;

		/** Optional. The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
		minValue?: string | null;

		/** Optional. The aggregate metric to evaluate. */
		statistic?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatistic | null;

		/** Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
		strictMaxEnabled?: boolean | null;

		/** Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
		strictMinEnabled?: boolean | null;
	}

	/** Evaluates whether the column aggregate statistic lies between a specified range. */
	export interface GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationFormProperties {

		/** Optional. The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
		maxValue: FormControl<string | null | undefined>,

		/** Optional. The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
		minValue: FormControl<string | null | undefined>,

		/** Optional. The aggregate metric to evaluate. */
		statistic: FormControl<GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatistic | null | undefined>,

		/** Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
		strictMaxEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
		strictMinEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
			statistic: new FormControl<GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatistic | null | undefined>(undefined),
			strictMaxEnabled: new FormControl<boolean | null | undefined>(undefined),
			strictMinEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatistic { STATISTIC_UNDEFINED = 0, MEAN = 1, MIN = 2, MAX = 3 }


	/** Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0 */
	export interface GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation {

		/** Optional. The SQL expression. */
		sqlExpression?: string | null;
	}

	/** Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0 */
	export interface GoogleCloudDataplexV1DataQualityRuleTableConditionExpectationFormProperties {

		/** Optional. The SQL expression. */
		sqlExpression: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleTableConditionExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleTableConditionExpectationFormProperties>({
			sqlExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluates whether the column has duplicates. */
	export interface GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation {
	}

	/** Evaluates whether the column has duplicates. */
	export interface GoogleCloudDataplexV1DataQualityRuleUniquenessExpectationFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataQualityRuleUniquenessExpectationFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityRuleUniquenessExpectationFormProperties>({
		});

	}


	/** Information about the result of a data quality rule for data quality scan. The monitored resource is 'DataScan'. */
	export interface GoogleCloudDataplexV1DataQualityScanRuleResult {

		/** The column which this rule is evaluated against. */
		column?: string | null;

		/** The data source of the data scan (e.g. BigQuery table name). */
		dataSource?: string | null;

		/** The number of rows evaluated against the data quality rule. This field is only valid for rules of PER_ROW evaluation type. */
		evaluatedRowCount?: string | null;

		/** The evaluation type of the data quality rule. */
		evalutionType?: GoogleCloudDataplexV1DataQualityScanRuleResultEvalutionType | null;

		/** Identifier of the specific data scan job this log entry is for. */
		jobId?: string | null;

		/** The number of rows with null values in the specified column. */
		nullRowCount?: string | null;

		/** The number of rows which passed a rule evaluation. This field is only valid for rules of PER_ROW evaluation type. */
		passedRowCount?: string | null;

		/** The result of the data quality rule. */
		result?: GoogleCloudDataplexV1DataQualityScanRuleResultResult | null;

		/** The dimension of the data quality rule. */
		ruleDimension?: string | null;

		/** The name of the data quality rule. */
		ruleName?: string | null;

		/** The type of the data quality rule. */
		ruleType?: GoogleCloudDataplexV1DataQualityScanRuleResultRuleType | null;

		/** The passing threshold (0.0, 100.0) of the data quality rule. */
		thresholdPercent?: number | null;
	}

	/** Information about the result of a data quality rule for data quality scan. The monitored resource is 'DataScan'. */
	export interface GoogleCloudDataplexV1DataQualityScanRuleResultFormProperties {

		/** The column which this rule is evaluated against. */
		column: FormControl<string | null | undefined>,

		/** The data source of the data scan (e.g. BigQuery table name). */
		dataSource: FormControl<string | null | undefined>,

		/** The number of rows evaluated against the data quality rule. This field is only valid for rules of PER_ROW evaluation type. */
		evaluatedRowCount: FormControl<string | null | undefined>,

		/** The evaluation type of the data quality rule. */
		evalutionType: FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultEvalutionType | null | undefined>,

		/** Identifier of the specific data scan job this log entry is for. */
		jobId: FormControl<string | null | undefined>,

		/** The number of rows with null values in the specified column. */
		nullRowCount: FormControl<string | null | undefined>,

		/** The number of rows which passed a rule evaluation. This field is only valid for rules of PER_ROW evaluation type. */
		passedRowCount: FormControl<string | null | undefined>,

		/** The result of the data quality rule. */
		result: FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultResult | null | undefined>,

		/** The dimension of the data quality rule. */
		ruleDimension: FormControl<string | null | undefined>,

		/** The name of the data quality rule. */
		ruleName: FormControl<string | null | undefined>,

		/** The type of the data quality rule. */
		ruleType: FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultRuleType | null | undefined>,

		/** The passing threshold (0.0, 100.0) of the data quality rule. */
		thresholdPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualityScanRuleResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualityScanRuleResultFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			dataSource: new FormControl<string | null | undefined>(undefined),
			evaluatedRowCount: new FormControl<string | null | undefined>(undefined),
			evalutionType: new FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultEvalutionType | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			nullRowCount: new FormControl<string | null | undefined>(undefined),
			passedRowCount: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultResult | null | undefined>(undefined),
			ruleDimension: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined),
			ruleType: new FormControl<GoogleCloudDataplexV1DataQualityScanRuleResultRuleType | null | undefined>(undefined),
			thresholdPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataQualityScanRuleResultEvalutionType { EVALUATION_TYPE_UNSPECIFIED = 0, PER_ROW = 1, AGGREGATE = 2 }

	export enum GoogleCloudDataplexV1DataQualityScanRuleResultResult { RESULT_UNSPECIFIED = 0, PASSED = 1, FAILED = 2 }

	export enum GoogleCloudDataplexV1DataQualityScanRuleResultRuleType { RULE_TYPE_UNSPECIFIED = 0, NON_NULL_EXPECTATION = 1, RANGE_EXPECTATION = 2, REGEX_EXPECTATION = 3, ROW_CONDITION_EXPECTATION = 4, SET_EXPECTATION = 5, STATISTIC_RANGE_EXPECTATION = 6, TABLE_CONDITION_EXPECTATION = 7, UNIQUENESS_EXPECTATION = 8 }


	/** DataQualityScan related setting. */
	export interface GoogleCloudDataplexV1DataQualitySpec {

		/** The configuration of post scan actions of DataQualityScan. */
		postScanActions?: GoogleCloudDataplexV1DataQualitySpecPostScanActions;

		/** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10 */
		rowFilter?: string | null;

		/** Required. The list of rules to evaluate against a data source. At least one rule is required. */
		rules?: Array<GoogleCloudDataplexV1DataQualityRule>;

		/** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
		samplingPercent?: number | null;
	}

	/** DataQualityScan related setting. */
	export interface GoogleCloudDataplexV1DataQualitySpecFormProperties {

		/** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10 */
		rowFilter: FormControl<string | null | undefined>,

		/** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
		samplingPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualitySpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualitySpecFormProperties>({
			rowFilter: new FormControl<string | null | undefined>(undefined),
			samplingPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration of post scan actions of DataQualityScan. */
	export interface GoogleCloudDataplexV1DataQualitySpecPostScanActions {

		/** The configuration of BigQuery export post scan action. */
		bigqueryExport?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport;
	}

	/** The configuration of post scan actions of DataQualityScan. */
	export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataQualitySpecPostScanActionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualitySpecPostScanActionsFormProperties>({
		});

	}


	/** The configuration of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport {

		/** Optional. The BigQuery table to export DataQualityScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resultsTable?: string | null;
	}

	/** The configuration of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExportFormProperties {

		/** Optional. The BigQuery table to export DataQualityScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resultsTable: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExportFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExportFormProperties>({
			resultsTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc). */
	export interface GoogleCloudDataplexV1DataScan {

		/** Output only. The time when the scan was created. */
		createTime?: string | null;

		/** The data source for DataScan. */
		data?: GoogleCloudDataplexV1DataSource;

		/** DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result. */
		dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;

		/** DataProfileScan related setting. */
		dataProfileSpec?: GoogleCloudDataplexV1DataProfileSpec;

		/** The output of a DataQualityScan. */
		dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;

		/** DataQualityScan related setting. */
		dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;

		/** Optional. Description of the scan. Must be between 1-1024 characters. */
		description?: string | null;

		/** Optional. User friendly display name. Must be between 1-256 characters. */
		displayName?: string | null;

		/** DataScan execution settings. */
		executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;

		/** Status of the data scan execution. */
		executionStatus?: GoogleCloudDataplexV1DataScanExecutionStatus;

		/** Optional. User-defined labels for the scan. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. */
		name?: string | null;

		/** Output only. Current state of the DataScan. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Output only. The type of DataScan. */
		type?: GoogleCloudDataplexV1DataScanType | null;

		/** Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the scan was last updated. */
		updateTime?: string | null;
	}

	/** Represents a user-visible job which provides the insights for the related data source.For example: Data Quality: generates queries based on the rules and runs against the data to get data quality check results. Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc). */
	export interface GoogleCloudDataplexV1DataScanFormProperties {

		/** Output only. The time when the scan was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the scan. Must be between 1-1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. Must be between 1-256 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the scan. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the DataScan. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. The type of DataScan. */
		type: FormControl<GoogleCloudDataplexV1DataScanType | null | undefined>,

		/** Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the scan was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DataScanType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data source for DataScan. */
	export interface GoogleCloudDataplexV1DataSource {

		/** Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
		entity?: string | null;

		/** Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resource?: string | null;
	}

	/** The data source for DataScan. */
	export interface GoogleCloudDataplexV1DataSourceFormProperties {

		/** Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
		entity: FormControl<string | null | undefined>,

		/** Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataSourceFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataSourceFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataScan execution settings. */
	export interface GoogleCloudDataplexV1DataScanExecutionSpec {

		/** Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table. */
		field?: string | null;

		/** DataScan scheduling and trigger settings. */
		trigger?: GoogleCloudDataplexV1Trigger;
	}

	/** DataScan execution settings. */
	export interface GoogleCloudDataplexV1DataScanExecutionSpecFormProperties {

		/** Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanExecutionSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanExecutionSpecFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataScan scheduling and trigger settings. */
	export interface GoogleCloudDataplexV1Trigger {

		/** The scan runs once via RunDataScan API. */
		onDemand?: GoogleCloudDataplexV1TriggerOnDemand;

		/** The scan is scheduled to run periodically. */
		schedule?: GoogleCloudDataplexV1TriggerSchedule;
	}

	/** DataScan scheduling and trigger settings. */
	export interface GoogleCloudDataplexV1TriggerFormProperties {
	}
	export function CreateGoogleCloudDataplexV1TriggerFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TriggerFormProperties>({
		});

	}


	/** The scan runs once via RunDataScan API. */
	export interface GoogleCloudDataplexV1TriggerOnDemand {
	}

	/** The scan runs once via RunDataScan API. */
	export interface GoogleCloudDataplexV1TriggerOnDemandFormProperties {
	}
	export function CreateGoogleCloudDataplexV1TriggerOnDemandFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TriggerOnDemandFormProperties>({
		});

	}


	/** The scan is scheduled to run periodically. */
	export interface GoogleCloudDataplexV1TriggerSchedule {

		/** Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.This field is required for Schedule scans. */
		cron?: string | null;
	}

	/** The scan is scheduled to run periodically. */
	export interface GoogleCloudDataplexV1TriggerScheduleFormProperties {

		/** Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.This field is required for Schedule scans. */
		cron: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TriggerScheduleFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TriggerScheduleFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of the data scan execution. */
	export interface GoogleCloudDataplexV1DataScanExecutionStatus {

		/** The time when the latest DataScanJob ended. */
		latestJobEndTime?: string | null;

		/** The time when the latest DataScanJob started. */
		latestJobStartTime?: string | null;
	}

	/** Status of the data scan execution. */
	export interface GoogleCloudDataplexV1DataScanExecutionStatusFormProperties {

		/** The time when the latest DataScanJob ended. */
		latestJobEndTime: FormControl<string | null | undefined>,

		/** The time when the latest DataScanJob started. */
		latestJobStartTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanExecutionStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanExecutionStatusFormProperties>({
			latestJobEndTime: new FormControl<string | null | undefined>(undefined),
			latestJobStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataScanType { DATA_SCAN_TYPE_UNSPECIFIED = 0, DATA_QUALITY = 1, DATA_PROFILE = 2 }


	/** These messages contain information about the execution of a datascan. The monitored resource is 'DataScan' Next ID: 13 */
	export interface GoogleCloudDataplexV1DataScanEvent {

		/** The time when the data scan job was created. */
		createTime?: string | null;

		/** Data profile result for data scan job. */
		dataProfile?: GoogleCloudDataplexV1DataScanEventDataProfileResult;

		/** Applied configs for data profile type data scan job. */
		dataProfileConfigs?: GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs;

		/** Data quality result for data scan job. */
		dataQuality?: GoogleCloudDataplexV1DataScanEventDataQualityResult;

		/** Applied configs for data quality type data scan job. */
		dataQualityConfigs?: GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs;

		/** The data source of the data scan */
		dataSource?: string | null;

		/** The time when the data scan job finished. */
		endTime?: string | null;

		/** The identifier of the specific data scan job this log entry is for. */
		jobId?: string | null;

		/** The message describing the data scan job event. */
		message?: string | null;

		/** Post scan actions result for data scan job. */
		postScanActionsResult?: GoogleCloudDataplexV1DataScanEventPostScanActionsResult;

		/** The scope of the data scan (e.g. full, incremental). */
		scope?: GoogleCloudDataplexV1DataScanEventScope | null;

		/** A version identifier of the spec which was used to execute this job. */
		specVersion?: string | null;

		/** The time when the data scan job started to run. */
		startTime?: string | null;

		/** The status of the data scan job. */
		state?: GoogleCloudDataplexV1DataScanEventState | null;

		/** The trigger type of the data scan job. */
		trigger?: GoogleCloudDataplexV1DataScanEventTrigger | null;

		/** The type of the data scan. */
		type?: GoogleCloudDataplexV1DataScanEventType | null;
	}

	/** These messages contain information about the execution of a datascan. The monitored resource is 'DataScan' Next ID: 13 */
	export interface GoogleCloudDataplexV1DataScanEventFormProperties {

		/** The time when the data scan job was created. */
		createTime: FormControl<string | null | undefined>,

		/** The data source of the data scan */
		dataSource: FormControl<string | null | undefined>,

		/** The time when the data scan job finished. */
		endTime: FormControl<string | null | undefined>,

		/** The identifier of the specific data scan job this log entry is for. */
		jobId: FormControl<string | null | undefined>,

		/** The message describing the data scan job event. */
		message: FormControl<string | null | undefined>,

		/** The scope of the data scan (e.g. full, incremental). */
		scope: FormControl<GoogleCloudDataplexV1DataScanEventScope | null | undefined>,

		/** A version identifier of the spec which was used to execute this job. */
		specVersion: FormControl<string | null | undefined>,

		/** The time when the data scan job started to run. */
		startTime: FormControl<string | null | undefined>,

		/** The status of the data scan job. */
		state: FormControl<GoogleCloudDataplexV1DataScanEventState | null | undefined>,

		/** The trigger type of the data scan job. */
		trigger: FormControl<GoogleCloudDataplexV1DataScanEventTrigger | null | undefined>,

		/** The type of the data scan. */
		type: FormControl<GoogleCloudDataplexV1DataScanEventType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataSource: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<GoogleCloudDataplexV1DataScanEventScope | null | undefined>(undefined),
			specVersion: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1DataScanEventState | null | undefined>(undefined),
			trigger: new FormControl<GoogleCloudDataplexV1DataScanEventTrigger | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DataScanEventType | null | undefined>(undefined),
		});

	}


	/** Data profile result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataProfileResult {

		/** The count of rows processed in the data scan job. */
		rowCount?: string | null;
	}

	/** Data profile result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataProfileResultFormProperties {

		/** The count of rows processed in the data scan job. */
		rowCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventDataProfileResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventDataProfileResultFormProperties>({
			rowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Applied configs for data profile type data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs {

		/** Boolean indicating whether a column filter was applied in the DataScan job. */
		columnFilterApplied?: boolean | null;

		/** Boolean indicating whether a row filter was applied in the DataScan job. */
		rowFilterApplied?: boolean | null;

		/** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
		samplingPercent?: number | null;
	}

	/** Applied configs for data profile type data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigsFormProperties {

		/** Boolean indicating whether a column filter was applied in the DataScan job. */
		columnFilterApplied: FormControl<boolean | null | undefined>,

		/** Boolean indicating whether a row filter was applied in the DataScan job. */
		rowFilterApplied: FormControl<boolean | null | undefined>,

		/** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
		samplingPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigsFormProperties>({
			columnFilterApplied: new FormControl<boolean | null | undefined>(undefined),
			rowFilterApplied: new FormControl<boolean | null | undefined>(undefined),
			samplingPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data quality result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataQualityResult {

		/** The score of each column scanned in the data scan job. The key of the map is the name of the column. The value is the data quality score for the column.The score ranges between 0, 100 (up to two decimal points). */
		columnScore?: {[id: string]: number };

		/** The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not. */
		dimensionPassed?: {[id: string]: boolean };

		/** The score of each dimension for data quality result. The key of the map is the name of the dimension. The value is the data quality score for the dimension.The score ranges between 0, 100 (up to two decimal points). */
		dimensionScore?: {[id: string]: number };

		/** Whether the data quality result was pass or not. */
		passed?: boolean | null;

		/** The count of rows processed in the data scan job. */
		rowCount?: string | null;

		/** The table-level data quality score for the data scan job.The data quality score ranges between 0, 100 (up to two decimal points). */
		score?: number | null;
	}

	/** Data quality result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataQualityResultFormProperties {

		/** The score of each column scanned in the data scan job. The key of the map is the name of the column. The value is the data quality score for the column.The score ranges between 0, 100 (up to two decimal points). */
		columnScore: FormControl<{[id: string]: number } | null | undefined>,

		/** The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not. */
		dimensionPassed: FormControl<{[id: string]: boolean } | null | undefined>,

		/** The score of each dimension for data quality result. The key of the map is the name of the dimension. The value is the data quality score for the dimension.The score ranges between 0, 100 (up to two decimal points). */
		dimensionScore: FormControl<{[id: string]: number } | null | undefined>,

		/** Whether the data quality result was pass or not. */
		passed: FormControl<boolean | null | undefined>,

		/** The count of rows processed in the data scan job. */
		rowCount: FormControl<string | null | undefined>,

		/** The table-level data quality score for the data scan job.The data quality score ranges between 0, 100 (up to two decimal points). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventDataQualityResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventDataQualityResultFormProperties>({
			columnScore: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			dimensionPassed: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			dimensionScore: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			passed: new FormControl<boolean | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Applied configs for data quality type data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs {

		/** Boolean indicating whether a row filter was applied in the DataScan job. */
		rowFilterApplied?: boolean | null;

		/** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
		samplingPercent?: number | null;
	}

	/** Applied configs for data quality type data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigsFormProperties {

		/** Boolean indicating whether a row filter was applied in the DataScan job. */
		rowFilterApplied: FormControl<boolean | null | undefined>,

		/** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
		samplingPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigsFormProperties>({
			rowFilterApplied: new FormControl<boolean | null | undefined>(undefined),
			samplingPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Post scan actions result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResult {

		/** The result of BigQuery export post scan action. */
		bigqueryExportResult?: GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult;
	}

	/** Post scan actions result for data scan job. */
	export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResultFormProperties {
	}
	export function CreateGoogleCloudDataplexV1DataScanEventPostScanActionsResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventPostScanActionsResultFormProperties>({
		});

	}


	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult {

		/** Additional information about the BigQuery exporting. */
		message?: string | null;

		/** Execution state for the BigQuery exporting. */
		state?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null;
	}

	/** The result of BigQuery export post scan action. */
	export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResultFormProperties {

		/** Additional information about the BigQuery exporting. */
		message: FormControl<string | null | undefined>,

		/** Execution state for the BigQuery exporting. */
		state: FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResultFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResultState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataScanEventScope { SCOPE_UNSPECIFIED = 0, FULL = 1, INCREMENTAL = 2 }

	export enum GoogleCloudDataplexV1DataScanEventState { STATE_UNSPECIFIED = 0, STARTED = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4, CREATED = 5 }

	export enum GoogleCloudDataplexV1DataScanEventTrigger { TRIGGER_UNSPECIFIED = 0, ON_DEMAND = 1, SCHEDULE = 2 }

	export enum GoogleCloudDataplexV1DataScanEventType { SCAN_TYPE_UNSPECIFIED = 0, DATA_PROFILE = 1, DATA_QUALITY = 2 }


	/** A DataScanJob represents an instance of DataScan execution. */
	export interface GoogleCloudDataplexV1DataScanJob {

		/** DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result. */
		dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;

		/** DataProfileScan related setting. */
		dataProfileSpec?: GoogleCloudDataplexV1DataProfileSpec;

		/** The output of a DataQualityScan. */
		dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;

		/** DataQualityScan related setting. */
		dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;

		/** Output only. The time when the DataScanJob ended. */
		endTime?: string | null;

		/** Output only. Additional information about the current state. */
		message?: string | null;

		/** Output only. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. */
		name?: string | null;

		/** Output only. The time when the DataScanJob was started. */
		startTime?: string | null;

		/** Output only. Execution state for the DataScanJob. */
		state?: GoogleCloudDataplexV1DataScanJobState | null;

		/** Output only. The type of the parent DataScan. */
		type?: GoogleCloudDataplexV1DataScanType | null;

		/** Output only. System generated globally unique ID for the DataScanJob. */
		uid?: string | null;
	}

	/** A DataScanJob represents an instance of DataScan execution. */
	export interface GoogleCloudDataplexV1DataScanJobFormProperties {

		/** Output only. The time when the DataScanJob ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Additional information about the current state. */
		message: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a GCP region. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time when the DataScanJob was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Execution state for the DataScanJob. */
		state: FormControl<GoogleCloudDataplexV1DataScanJobState | null | undefined>,

		/** Output only. The type of the parent DataScan. */
		type: FormControl<GoogleCloudDataplexV1DataScanType | null | undefined>,

		/** Output only. System generated globally unique ID for the DataScanJob. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataScanJobFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataScanJobFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1DataScanJobState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DataScanType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DataScanJobState { STATE_UNSPECIFIED = 0, RUNNING = 1, CANCELING = 2, CANCELLED = 3, SUCCEEDED = 4, FAILED = 5, PENDING = 6 }


	/** DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level. */
	export interface GoogleCloudDataplexV1DataTaxonomy {

		/** Output only. The number of attributes in the DataTaxonomy. */
		attributeCount?: number | null;

		/** Output only. The number of classes in the DataTaxonomy. */
		classCount?: number | null;

		/** Output only. The time when the DataTaxonomy was created. */
		createTime?: string | null;

		/** Optional. Description of the DataTaxonomy. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. User-defined labels for the DataTaxonomy. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. */
		name?: string | null;

		/** Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the DataTaxonomy was last updated. */
		updateTime?: string | null;
	}

	/** DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level. */
	export interface GoogleCloudDataplexV1DataTaxonomyFormProperties {

		/** Output only. The number of attributes in the DataTaxonomy. */
		attributeCount: FormControl<number | null | undefined>,

		/** Output only. The number of classes in the DataTaxonomy. */
		classCount: FormControl<number | null | undefined>,

		/** Output only. The time when the DataTaxonomy was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the DataTaxonomy. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the DataTaxonomy. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the DataTaxonomy was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DataTaxonomyFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DataTaxonomyFormProperties>({
			attributeCount: new FormControl<number | null | undefined>(undefined),
			classCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The payload associated with Discovery data processing. */
	export interface GoogleCloudDataplexV1DiscoveryEvent {

		/** Details about the action. */
		action?: GoogleCloudDataplexV1DiscoveryEventActionDetails;

		/** The id of the associated asset. */
		assetId?: string | null;

		/** Details about configuration events. */
		config?: GoogleCloudDataplexV1DiscoveryEventConfigDetails;

		/** The data location associated with the event. */
		dataLocation?: string | null;

		/** Details about the entity. */
		entity?: GoogleCloudDataplexV1DiscoveryEventEntityDetails;

		/** The id of the associated lake. */
		lakeId?: string | null;

		/** The log message. */
		message?: string | null;

		/** Details about the partition. */
		partition?: GoogleCloudDataplexV1DiscoveryEventPartitionDetails;

		/** The type of the event being logged. */
		type?: GoogleCloudDataplexV1DiscoveryEventType | null;

		/** The id of the associated zone. */
		zoneId?: string | null;
	}

	/** The payload associated with Discovery data processing. */
	export interface GoogleCloudDataplexV1DiscoveryEventFormProperties {

		/** The id of the associated asset. */
		assetId: FormControl<string | null | undefined>,

		/** The data location associated with the event. */
		dataLocation: FormControl<string | null | undefined>,

		/** The id of the associated lake. */
		lakeId: FormControl<string | null | undefined>,

		/** The log message. */
		message: FormControl<string | null | undefined>,

		/** The type of the event being logged. */
		type: FormControl<GoogleCloudDataplexV1DiscoveryEventType | null | undefined>,

		/** The id of the associated zone. */
		zoneId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DiscoveryEventFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DiscoveryEventFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			dataLocation: new FormControl<string | null | undefined>(undefined),
			lakeId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DiscoveryEventType | null | undefined>(undefined),
			zoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the action. */
	export interface GoogleCloudDataplexV1DiscoveryEventActionDetails {

		/** The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat */
		type?: string | null;
	}

	/** Details about the action. */
	export interface GoogleCloudDataplexV1DiscoveryEventActionDetailsFormProperties {

		/** The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DiscoveryEventActionDetailsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DiscoveryEventActionDetailsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about configuration events. */
	export interface GoogleCloudDataplexV1DiscoveryEventConfigDetails {

		/** A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc. */
		parameters?: {[id: string]: string };
	}

	/** Details about configuration events. */
	export interface GoogleCloudDataplexV1DiscoveryEventConfigDetailsFormProperties {

		/** A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DiscoveryEventConfigDetailsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DiscoveryEventConfigDetailsFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Details about the entity. */
	export interface GoogleCloudDataplexV1DiscoveryEventEntityDetails {

		/** The name of the entity resource. The name is the fully-qualified resource name. */
		entity?: string | null;

		/** The type of the entity resource. */
		type?: GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null;
	}

	/** Details about the entity. */
	export interface GoogleCloudDataplexV1DiscoveryEventEntityDetailsFormProperties {

		/** The name of the entity resource. The name is the fully-qualified resource name. */
		entity: FormControl<string | null | undefined>,

		/** The type of the entity resource. */
		type: FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DiscoveryEventEntityDetailsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DiscoveryEventEntityDetailsFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DiscoveryEventEntityDetailsType { ENTITY_TYPE_UNSPECIFIED = 0, TABLE = 1, FILESET = 2 }


	/** Details about the partition. */
	export interface GoogleCloudDataplexV1DiscoveryEventPartitionDetails {

		/** The name to the containing entity resource. The name is the fully-qualified resource name. */
		entity?: string | null;

		/** The name to the partition resource. The name is the fully-qualified resource name. */
		partition?: string | null;

		/** The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference. */
		sampledDataLocations?: Array<string>;

		/** The type of the containing entity resource. */
		type?: GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null;
	}

	/** Details about the partition. */
	export interface GoogleCloudDataplexV1DiscoveryEventPartitionDetailsFormProperties {

		/** The name to the containing entity resource. The name is the fully-qualified resource name. */
		entity: FormControl<string | null | undefined>,

		/** The name to the partition resource. The name is the fully-qualified resource name. */
		partition: FormControl<string | null | undefined>,

		/** The type of the containing entity resource. */
		type: FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1DiscoveryEventPartitionDetailsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1DiscoveryEventPartitionDetailsFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1DiscoveryEventType { EVENT_TYPE_UNSPECIFIED = 0, CONFIG = 1, ENTITY_CREATED = 2, ENTITY_UPDATED = 3, ENTITY_DELETED = 4, PARTITION_CREATED = 5, PARTITION_UPDATED = 6, PARTITION_DELETED = 7 }


	/** Represents tables and fileset metadata contained within a zone. */
	export interface GoogleCloudDataplexV1Entity {

		/** Describes the access mechanism of the data within its storage location. */
		access?: GoogleCloudDataplexV1StorageAccess;

		/** Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset. */
		asset?: string | null;

		/** Output only. The name of the associated Data Catalog entry. */
		catalogEntry?: string | null;

		/** Provides compatibility information for various metadata stores. */
		compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;

		/** Output only. The time when the entity was created. */
		createTime?: string | null;

		/** Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id. */
		dataPath?: string | null;

		/** Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**.csv. */
		dataPathPattern?: string | null;

		/** Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters. */
		description?: string | null;

		/** Optional. Display name must be shorter than or equal to 256 characters. */
		displayName?: string | null;

		/** Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests. */
		etag?: string | null;

		/** Describes the format of the data within its storage location. */
		format?: GoogleCloudDataplexV1StorageFormat;

		/** Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters. */
		id?: string | null;

		/** Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. */
		name?: string | null;

		/** Schema information describing the structure and layout of the data. */
		schema?: GoogleCloudDataplexV1Schema;

		/** Required. Immutable. Identifies the storage system of the entity data. */
		system?: GoogleCloudDataplexV1EntitySystem | null;

		/** Required. Immutable. The type of entity. */
		type?: GoogleCloudDataplexV1EntityType | null;

		/** Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the entity was last updated. */
		updateTime?: string | null;
	}

	/** Represents tables and fileset metadata contained within a zone. */
	export interface GoogleCloudDataplexV1EntityFormProperties {

		/** Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset. */
		asset: FormControl<string | null | undefined>,

		/** Output only. The name of the associated Data Catalog entry. */
		catalogEntry: FormControl<string | null | undefined>,

		/** Output only. The time when the entity was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id. */
		dataPath: FormControl<string | null | undefined>,

		/** Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**.csv. */
		dataPathPattern: FormControl<string | null | undefined>,

		/** Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Display name must be shorter than or equal to 256 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests. */
		etag: FormControl<string | null | undefined>,

		/** Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters. */
		id: FormControl<string | null | undefined>,

		/** Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. Identifies the storage system of the entity data. */
		system: FormControl<GoogleCloudDataplexV1EntitySystem | null | undefined>,

		/** Required. Immutable. The type of entity. */
		type: FormControl<GoogleCloudDataplexV1EntityType | null | undefined>,

		/** Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the entity was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EntityFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EntityFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			catalogEntry: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataPath: new FormControl<string | null | undefined>(undefined),
			dataPathPattern: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			system: new FormControl<GoogleCloudDataplexV1EntitySystem | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1EntityType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the access mechanism of the data within its storage location. */
	export interface GoogleCloudDataplexV1StorageAccess {

		/** Output only. Describes the read access mechanism of the data. Not user settable. */
		read?: GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null;
	}

	/** Describes the access mechanism of the data within its storage location. */
	export interface GoogleCloudDataplexV1StorageAccessFormProperties {

		/** Output only. Describes the read access mechanism of the data. Not user settable. */
		read: FormControl<GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1StorageAccessFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1StorageAccessFormProperties>({
			read: new FormControl<GoogleCloudDataplexV1AssetResourceSpecReadAccessMode | null | undefined>(undefined),
		});

	}


	/** Provides compatibility information for various metadata stores. */
	export interface GoogleCloudDataplexV1EntityCompatibilityStatus {

		/** Provides compatibility information for a specific metadata store. */
		bigquery?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;

		/** Provides compatibility information for a specific metadata store. */
		hiveMetastore?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
	}

	/** Provides compatibility information for various metadata stores. */
	export interface GoogleCloudDataplexV1EntityCompatibilityStatusFormProperties {
	}
	export function CreateGoogleCloudDataplexV1EntityCompatibilityStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EntityCompatibilityStatusFormProperties>({
		});

	}


	/** Provides compatibility information for a specific metadata store. */
	export interface GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility {

		/** Output only. Whether the entity is compatible and can be represented in the metadata store. */
		compatible?: boolean | null;

		/** Output only. Provides additional detail if the entity is incompatible with the metadata store. */
		reason?: string | null;
	}

	/** Provides compatibility information for a specific metadata store. */
	export interface GoogleCloudDataplexV1EntityCompatibilityStatusCompatibilityFormProperties {

		/** Output only. Whether the entity is compatible and can be represented in the metadata store. */
		compatible: FormControl<boolean | null | undefined>,

		/** Output only. Provides additional detail if the entity is incompatible with the metadata store. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EntityCompatibilityStatusCompatibilityFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EntityCompatibilityStatusCompatibilityFormProperties>({
			compatible: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the format of the data within its storage location. */
	export interface GoogleCloudDataplexV1StorageFormat {

		/** Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed. */
		compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormat | null;

		/** Describes CSV and similar semi-structured data formats. */
		csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;

		/** Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type. */
		format?: GoogleCloudDataplexV1StorageFormatFormat | null;

		/** Describes Iceberg data format. */
		iceberg?: GoogleCloudDataplexV1StorageFormatIcebergOptions;

		/** Describes JSON data format. */
		json?: GoogleCloudDataplexV1StorageFormatJsonOptions;

		/** Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype} */
		mimeType?: string | null;
	}

	/** Describes the format of the data within its storage location. */
	export interface GoogleCloudDataplexV1StorageFormatFormProperties {

		/** Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed. */
		compressionFormat: FormControl<GoogleCloudDataplexV1StorageFormatCompressionFormat | null | undefined>,

		/** Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type. */
		format: FormControl<GoogleCloudDataplexV1StorageFormatFormat | null | undefined>,

		/** Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype} */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1StorageFormatFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1StorageFormatFormProperties>({
			compressionFormat: new FormControl<GoogleCloudDataplexV1StorageFormatCompressionFormat | null | undefined>(undefined),
			format: new FormControl<GoogleCloudDataplexV1StorageFormatFormat | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1StorageFormatCompressionFormat { COMPRESSION_FORMAT_UNSPECIFIED = 0, GZIP = 1, BZIP2 = 2 }


	/** Describes CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1StorageFormatCsvOptions {

		/** Optional. The delimiter used to separate values. Defaults to ','. */
		delimiter?: string | null;

		/** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified. */
		encoding?: string | null;

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0. */
		headerRows?: number | null;

		/** Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified. */
		quote?: string | null;
	}

	/** Describes CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1StorageFormatCsvOptionsFormProperties {

		/** Optional. The delimiter used to separate values. Defaults to ','. */
		delimiter: FormControl<string | null | undefined>,

		/** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified. */
		encoding: FormControl<string | null | undefined>,

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0. */
		headerRows: FormControl<number | null | undefined>,

		/** Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified. */
		quote: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1StorageFormatCsvOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1StorageFormatCsvOptionsFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			headerRows: new FormControl<number | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1StorageFormatFormat { FORMAT_UNSPECIFIED = 0, PARQUET = 1, AVRO = 2, ORC = 3, CSV = 4, JSON = 5, IMAGE = 6, AUDIO = 7, VIDEO = 8, TEXT = 9, TFRECORD = 10, OTHER = 11, UNKNOWN = 12 }


	/** Describes Iceberg data format. */
	export interface GoogleCloudDataplexV1StorageFormatIcebergOptions {

		/** Optional. The location of where the iceberg metadata is present, must be within the table path */
		metadataLocation?: string | null;
	}

	/** Describes Iceberg data format. */
	export interface GoogleCloudDataplexV1StorageFormatIcebergOptionsFormProperties {

		/** Optional. The location of where the iceberg metadata is present, must be within the table path */
		metadataLocation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1StorageFormatIcebergOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1StorageFormatIcebergOptionsFormProperties>({
			metadataLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes JSON data format. */
	export interface GoogleCloudDataplexV1StorageFormatJsonOptions {

		/** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified. */
		encoding?: string | null;
	}

	/** Describes JSON data format. */
	export interface GoogleCloudDataplexV1StorageFormatJsonOptionsFormProperties {

		/** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified. */
		encoding: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1StorageFormatJsonOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1StorageFormatJsonOptionsFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema information describing the structure and layout of the data. */
	export interface GoogleCloudDataplexV1Schema {

		/** Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable. */
		fields?: Array<GoogleCloudDataplexV1SchemaSchemaField>;

		/** Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data. */
		partitionFields?: Array<GoogleCloudDataplexV1SchemaPartitionField>;

		/** Optional. The structure of paths containing partition data within the entity. */
		partitionStyle?: GoogleCloudDataplexV1SchemaPartitionStyle | null;

		/** Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields. */
		userManaged?: boolean | null;
	}

	/** Schema information describing the structure and layout of the data. */
	export interface GoogleCloudDataplexV1SchemaFormProperties {

		/** Optional. The structure of paths containing partition data within the entity. */
		partitionStyle: FormControl<GoogleCloudDataplexV1SchemaPartitionStyle | null | undefined>,

		/** Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields. */
		userManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SchemaFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SchemaFormProperties>({
			partitionStyle: new FormControl<GoogleCloudDataplexV1SchemaPartitionStyle | null | undefined>(undefined),
			userManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a column field within a table schema. */
	export interface GoogleCloudDataplexV1SchemaSchemaField {

		/** Optional. User friendly field description. Must be less than or equal to 1024 characters. */
		description?: string | null;

		/** Optional. Any nested field for complex types. */
		fields?: Array<GoogleCloudDataplexV1SchemaSchemaField>;

		/** Required. Additional field semantics. */
		mode?: GoogleCloudDataplexV1SchemaSchemaFieldMode | null;

		/** Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore. */
		name?: string | null;

		/** Required. The type of field. */
		type?: GoogleCloudDataplexV1SchemaSchemaFieldType | null;
	}

	/** Represents a column field within a table schema. */
	export interface GoogleCloudDataplexV1SchemaSchemaFieldFormProperties {

		/** Optional. User friendly field description. Must be less than or equal to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. Additional field semantics. */
		mode: FormControl<GoogleCloudDataplexV1SchemaSchemaFieldMode | null | undefined>,

		/** Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore. */
		name: FormControl<string | null | undefined>,

		/** Required. The type of field. */
		type: FormControl<GoogleCloudDataplexV1SchemaSchemaFieldType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SchemaSchemaFieldFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SchemaSchemaFieldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<GoogleCloudDataplexV1SchemaSchemaFieldMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1SchemaSchemaFieldType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1SchemaSchemaFieldMode { MODE_UNSPECIFIED = 0, REQUIRED = 1, NULLABLE = 2, REPEATED = 3 }

	export enum GoogleCloudDataplexV1SchemaSchemaFieldType { TYPE_UNSPECIFIED = 0, BOOLEAN = 1, BYTE = 2, INT16 = 3, INT32 = 4, INT64 = 5, FLOAT = 6, DOUBLE = 7, DECIMAL = 8, STRING = 9, BINARY = 10, TIMESTAMP = 11, DATE = 12, TIME = 13, RECORD = 14, NULL = 15 }


	/** Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable. */
	export interface GoogleCloudDataplexV1SchemaPartitionField {

		/** Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore.. */
		name?: string | null;

		/** Required. Immutable. The type of field. */
		type?: GoogleCloudDataplexV1SchemaSchemaFieldType | null;
	}

	/** Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable. */
	export interface GoogleCloudDataplexV1SchemaPartitionFieldFormProperties {

		/** Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore.. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of field. */
		type: FormControl<GoogleCloudDataplexV1SchemaSchemaFieldType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SchemaPartitionFieldFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SchemaPartitionFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1SchemaSchemaFieldType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1SchemaPartitionStyle { PARTITION_STYLE_UNSPECIFIED = 0, HIVE_COMPATIBLE = 1 }

	export enum GoogleCloudDataplexV1EntitySystem { STORAGE_SYSTEM_UNSPECIFIED = 0, CLOUD_STORAGE = 1, BIGQUERY = 2 }

	export enum GoogleCloudDataplexV1EntityType { TYPE_UNSPECIFIED = 0, TABLE = 1, FILESET = 2 }


	/** Environment represents a user-visible compute infrastructure for analytics within a lake. */
	export interface GoogleCloudDataplexV1Environment {

		/** Output only. Environment creation time. */
		createTime?: string | null;

		/** Optional. Description of the environment. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** URI Endpoints to access sessions associated with the Environment. */
		endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints;

		/** Configuration for the underlying infrastructure used to run workloads. */
		infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;

		/** Optional. User defined labels for the environment. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id} */
		name?: string | null;

		/** Configuration for sessions created for this environment. */
		sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;

		/** Status of sessions created for this environment. */
		sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus;

		/** Output only. Current state of the environment. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the environment was last updated. */
		updateTime?: string | null;
	}

	/** Environment represents a user-visible compute infrastructure for analytics within a lake. */
	export interface GoogleCloudDataplexV1EnvironmentFormProperties {

		/** Output only. Environment creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the environment. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User defined labels for the environment. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the environment. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the environment was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URI Endpoints to access sessions associated with the Environment. */
	export interface GoogleCloudDataplexV1EnvironmentEndpoints {

		/** Output only. URI to serve notebook APIs */
		notebooks?: string | null;

		/** Output only. URI to serve SQL APIs */
		sql?: string | null;
	}

	/** URI Endpoints to access sessions associated with the Environment. */
	export interface GoogleCloudDataplexV1EnvironmentEndpointsFormProperties {

		/** Output only. URI to serve notebook APIs */
		notebooks: FormControl<string | null | undefined>,

		/** Output only. URI to serve SQL APIs */
		sql: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentEndpointsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentEndpointsFormProperties>({
			notebooks: new FormControl<string | null | undefined>(undefined),
			sql: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the underlying infrastructure used to run workloads. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpec {

		/** Compute resources associated with the analyze interactive workloads. */
		compute?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;

		/** Software Runtime Configuration to run Analyze. */
		osImage?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
	}

	/** Configuration for the underlying infrastructure used to run workloads. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpecFormProperties {
	}
	export function CreateGoogleCloudDataplexV1EnvironmentInfrastructureSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentInfrastructureSpecFormProperties>({
		});

	}


	/** Compute resources associated with the analyze interactive workloads. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources {

		/** Optional. Size in GB of the disk. Default is 100 GB. */
		diskSizeGb?: number | null;

		/** Optional. Max configurable nodes. If max_node_count > node_count, then auto-scaling is enabled. */
		maxNodeCount?: number | null;

		/** Optional. Total number of nodes in the sessions created for this environment. */
		nodeCount?: number | null;
	}

	/** Compute resources associated with the analyze interactive workloads. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResourcesFormProperties {

		/** Optional. Size in GB of the disk. Default is 100 GB. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Optional. Max configurable nodes. If max_node_count > node_count, then auto-scaling is enabled. */
		maxNodeCount: FormControl<number | null | undefined>,

		/** Optional. Total number of nodes in the sessions created for this environment. */
		nodeCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResourcesFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResourcesFormProperties>({
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Software Runtime Configuration to run Analyze. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime {

		/** Required. Dataplex Image version. */
		imageVersion?: string | null;

		/** Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar */
		javaLibraries?: Array<string>;

		/** Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark". */
		properties?: {[id: string]: string };

		/** Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz */
		pythonPackages?: Array<string>;
	}

	/** Software Runtime Configuration to run Analyze. */
	export interface GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntimeFormProperties {

		/** Required. Dataplex Image version. */
		imageVersion: FormControl<string | null | undefined>,

		/** Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark". */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntimeFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntimeFormProperties>({
			imageVersion: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Configuration for sessions created for this environment. */
	export interface GoogleCloudDataplexV1EnvironmentSessionSpec {

		/** Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration. */
		enableFastStartup?: boolean | null;

		/** Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period. */
		maxIdleDuration?: string | null;
	}

	/** Configuration for sessions created for this environment. */
	export interface GoogleCloudDataplexV1EnvironmentSessionSpecFormProperties {

		/** Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration. */
		enableFastStartup: FormControl<boolean | null | undefined>,

		/** Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period. */
		maxIdleDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentSessionSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentSessionSpecFormProperties>({
			enableFastStartup: new FormControl<boolean | null | undefined>(undefined),
			maxIdleDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of sessions created for this environment. */
	export interface GoogleCloudDataplexV1EnvironmentSessionStatus {

		/** Output only. Queries over sessions to mark whether the environment is currently active or not */
		active?: boolean | null;
	}

	/** Status of sessions created for this environment. */
	export interface GoogleCloudDataplexV1EnvironmentSessionStatusFormProperties {

		/** Output only. Queries over sessions to mark whether the environment is currently active or not */
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1EnvironmentSessionStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1EnvironmentSessionStatusFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Payload associated with Governance related log events. */
	export interface GoogleCloudDataplexV1GovernanceEvent {

		/** Information about Entity resource that the log event is associated with. */
		entity?: GoogleCloudDataplexV1GovernanceEventEntity;

		/** The type of the event. */
		eventType?: GoogleCloudDataplexV1GovernanceEventEventType | null;

		/** The log message. */
		message?: string | null;
	}

	/** Payload associated with Governance related log events. */
	export interface GoogleCloudDataplexV1GovernanceEventFormProperties {

		/** The type of the event. */
		eventType: FormControl<GoogleCloudDataplexV1GovernanceEventEventType | null | undefined>,

		/** The log message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1GovernanceEventFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1GovernanceEventFormProperties>({
			eventType: new FormControl<GoogleCloudDataplexV1GovernanceEventEventType | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about Entity resource that the log event is associated with. */
	export interface GoogleCloudDataplexV1GovernanceEventEntity {

		/** The Entity resource the log event is associated with. Format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id} */
		entity?: string | null;

		/** Type of entity. */
		entityType?: GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null;
	}

	/** Information about Entity resource that the log event is associated with. */
	export interface GoogleCloudDataplexV1GovernanceEventEntityFormProperties {

		/** The Entity resource the log event is associated with. Format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id} */
		entity: FormControl<string | null | undefined>,

		/** Type of entity. */
		entityType: FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1GovernanceEventEntityFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1GovernanceEventEntityFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<GoogleCloudDataplexV1DiscoveryEventEntityDetailsType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1GovernanceEventEventType { EVENT_TYPE_UNSPECIFIED = 0, RESOURCE_IAM_POLICY_UPDATE = 1, BIGQUERY_TABLE_CREATE = 2, BIGQUERY_TABLE_UPDATE = 3, BIGQUERY_TABLE_DELETE = 4, BIGQUERY_CONNECTION_CREATE = 5, BIGQUERY_CONNECTION_UPDATE = 6, BIGQUERY_CONNECTION_DELETE = 7, BIGQUERY_TAXONOMY_CREATE = 8, BIGQUERY_POLICY_TAG_CREATE = 9, BIGQUERY_POLICY_TAG_DELETE = 10, BIGQUERY_POLICY_TAG_SET_IAM_POLICY = 11, ACCESS_POLICY_UPDATE = 12, GOVERNANCE_RULE_MATCHED_RESOURCES = 13, GOVERNANCE_RULE_SEARCH_LIMIT_EXCEEDS = 14, GOVERNANCE_RULE_ERRORS = 15, GOVERNANCE_RULE_PROCESSING = 16 }


	/** A job represents an instance of a task. */
	export interface GoogleCloudDataplexV1Job {

		/** Output only. The time when the job ended. */
		endTime?: string | null;

		/** Execution related settings, like retry and service_account. */
		executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;

		/** Output only. User-defined labels for the task. */
		labels?: {[id: string]: string };

		/** Output only. Additional information about the current state. */
		message?: string | null;

		/** Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. */
		name?: string | null;

		/** Output only. The number of times the job has been retried (excluding the initial attempt). */
		retryCount?: number | null;

		/** Output only. The underlying service running a job. */
		service?: GoogleCloudDataplexV1JobService | null;

		/** Output only. The full resource name for the job run under a particular service. */
		serviceJob?: string | null;

		/** Output only. The time when the job was started. */
		startTime?: string | null;

		/** Output only. Execution state for the job. */
		state?: GoogleCloudDataplexV1JobState | null;

		/** Output only. Job execution trigger. */
		trigger?: GoogleCloudDataplexV1JobTrigger | null;

		/** Output only. System generated globally unique ID for the job. */
		uid?: string | null;
	}

	/** A job represents an instance of a task. */
	export interface GoogleCloudDataplexV1JobFormProperties {

		/** Output only. The time when the job ended. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. User-defined labels for the task. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Additional information about the current state. */
		message: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of times the job has been retried (excluding the initial attempt). */
		retryCount: FormControl<number | null | undefined>,

		/** Output only. The underlying service running a job. */
		service: FormControl<GoogleCloudDataplexV1JobService | null | undefined>,

		/** Output only. The full resource name for the job run under a particular service. */
		serviceJob: FormControl<string | null | undefined>,

		/** Output only. The time when the job was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Execution state for the job. */
		state: FormControl<GoogleCloudDataplexV1JobState | null | undefined>,

		/** Output only. Job execution trigger. */
		trigger: FormControl<GoogleCloudDataplexV1JobTrigger | null | undefined>,

		/** Output only. System generated globally unique ID for the job. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1JobFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1JobFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<GoogleCloudDataplexV1JobService | null | undefined>(undefined),
			serviceJob: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1JobState | null | undefined>(undefined),
			trigger: new FormControl<GoogleCloudDataplexV1JobTrigger | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execution related settings, like retry and service_account. */
	export interface GoogleCloudDataplexV1TaskExecutionSpec {

		/** Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. */
		args?: {[id: string]: string };

		/** Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. */
		kmsKey?: string | null;

		/** Optional. The maximum duration after which the job execution is expired. */
		maxJobExecutionLifetime?: string | null;

		/** Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project. */
		project?: string | null;

		/** Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used. */
		serviceAccount?: string | null;
	}

	/** Execution related settings, like retry and service_account. */
	export interface GoogleCloudDataplexV1TaskExecutionSpecFormProperties {

		/** Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. */
		args: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. */
		kmsKey: FormControl<string | null | undefined>,

		/** Optional. The maximum duration after which the job execution is expired. */
		maxJobExecutionLifetime: FormControl<string | null | undefined>,

		/** Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project. */
		project: FormControl<string | null | undefined>,

		/** Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskExecutionSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskExecutionSpecFormProperties>({
			args: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			maxJobExecutionLifetime: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1JobService { SERVICE_UNSPECIFIED = 0, DATAPROC = 1 }

	export enum GoogleCloudDataplexV1JobState { STATE_UNSPECIFIED = 0, RUNNING = 1, CANCELLING = 2, CANCELLED = 3, SUCCEEDED = 4, FAILED = 5, ABORTED = 6 }

	export enum GoogleCloudDataplexV1JobTrigger { TRIGGER_UNSPECIFIED = 0, TASK_CONFIG = 1, RUN_REQUEST = 2 }


	/** The payload associated with Job logs that contains events describing jobs that have run within a Lake. */
	export interface GoogleCloudDataplexV1JobEvent {

		/** The time when the job ended running. */
		endTime?: string | null;

		/** Job execution trigger. */
		executionTrigger?: GoogleCloudDataplexV1JobEventExecutionTrigger | null;

		/** The unique id identifying the job. */
		jobId?: string | null;

		/** The log message. */
		message?: string | null;

		/** The number of retries. */
		retries?: number | null;

		/** The service used to execute the job. */
		service?: GoogleCloudDataplexV1JobService | null;

		/** The reference to the job within the service. */
		serviceJob?: string | null;

		/** The time when the job started running. */
		startTime?: string | null;

		/** The job state on completion. */
		state?: GoogleCloudDataplexV1JobEventState | null;

		/** The type of the job. */
		type?: GoogleCloudDataplexV1JobEventType | null;
	}

	/** The payload associated with Job logs that contains events describing jobs that have run within a Lake. */
	export interface GoogleCloudDataplexV1JobEventFormProperties {

		/** The time when the job ended running. */
		endTime: FormControl<string | null | undefined>,

		/** Job execution trigger. */
		executionTrigger: FormControl<GoogleCloudDataplexV1JobEventExecutionTrigger | null | undefined>,

		/** The unique id identifying the job. */
		jobId: FormControl<string | null | undefined>,

		/** The log message. */
		message: FormControl<string | null | undefined>,

		/** The number of retries. */
		retries: FormControl<number | null | undefined>,

		/** The service used to execute the job. */
		service: FormControl<GoogleCloudDataplexV1JobService | null | undefined>,

		/** The reference to the job within the service. */
		serviceJob: FormControl<string | null | undefined>,

		/** The time when the job started running. */
		startTime: FormControl<string | null | undefined>,

		/** The job state on completion. */
		state: FormControl<GoogleCloudDataplexV1JobEventState | null | undefined>,

		/** The type of the job. */
		type: FormControl<GoogleCloudDataplexV1JobEventType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1JobEventFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1JobEventFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			executionTrigger: new FormControl<GoogleCloudDataplexV1JobEventExecutionTrigger | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			retries: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<GoogleCloudDataplexV1JobService | null | undefined>(undefined),
			serviceJob: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1JobEventState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1JobEventType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1JobEventExecutionTrigger { EXECUTION_TRIGGER_UNSPECIFIED = 0, TASK_CONFIG = 1, RUN_REQUEST = 2 }

	export enum GoogleCloudDataplexV1JobEventState { STATE_UNSPECIFIED = 0, SUCCEEDED = 1, FAILED = 2, CANCELLED = 3, ABORTED = 4 }

	export enum GoogleCloudDataplexV1JobEventType { TYPE_UNSPECIFIED = 0, SPARK = 1, NOTEBOOK = 2 }


	/** A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata. */
	export interface GoogleCloudDataplexV1Lake {

		/** Aggregated status of the underlying assets of a lake or zone. */
		assetStatus?: GoogleCloudDataplexV1AssetStatus;

		/** Output only. The time when the lake was created. */
		createTime?: string | null;

		/** Optional. Description of the lake. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** Optional. User-defined labels for the lake. */
		labels?: {[id: string]: string };

		/** Settings to manage association of Dataproc Metastore with a lake. */
		metastore?: GoogleCloudDataplexV1LakeMetastore;

		/** Status of Lake and Dataproc Metastore service instance association. */
		metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;

		/** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
		name?: string | null;

		/** Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake. */
		serviceAccount?: string | null;

		/** Output only. Current state of the lake. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the lake was last updated. */
		updateTime?: string | null;
	}

	/** A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata. */
	export interface GoogleCloudDataplexV1LakeFormProperties {

		/** Output only. The time when the lake was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the lake. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the lake. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Current state of the lake. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the lake was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1LakeFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1LakeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to manage association of Dataproc Metastore with a lake. */
	export interface GoogleCloudDataplexV1LakeMetastore {

		/** Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id} */
		service?: string | null;
	}

	/** Settings to manage association of Dataproc Metastore with a lake. */
	export interface GoogleCloudDataplexV1LakeMetastoreFormProperties {

		/** Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id} */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1LakeMetastoreFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1LakeMetastoreFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of Lake and Dataproc Metastore service instance association. */
	export interface GoogleCloudDataplexV1LakeMetastoreStatus {

		/** The URI of the endpoint used to access the Metastore service. */
		endpoint?: string | null;

		/** Additional information about the current status. */
		message?: string | null;

		/** Current state of association. */
		state?: GoogleCloudDataplexV1LakeMetastoreStatusState | null;

		/** Last update time of the metastore status of the lake. */
		updateTime?: string | null;
	}

	/** Status of Lake and Dataproc Metastore service instance association. */
	export interface GoogleCloudDataplexV1LakeMetastoreStatusFormProperties {

		/** The URI of the endpoint used to access the Metastore service. */
		endpoint: FormControl<string | null | undefined>,

		/** Additional information about the current status. */
		message: FormControl<string | null | undefined>,

		/** Current state of association. */
		state: FormControl<GoogleCloudDataplexV1LakeMetastoreStatusState | null | undefined>,

		/** Last update time of the metastore status of the lake. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1LakeMetastoreStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1LakeMetastoreStatusFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1LakeMetastoreStatusState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1LakeMetastoreStatusState { STATE_UNSPECIFIED = 0, NONE = 1, READY = 2, UPDATING = 3, ERROR = 4 }


	/** List actions response. */
	export interface GoogleCloudDataplexV1ListActionsResponse {

		/** Actions under the given parent lake/zone/asset. */
		actions?: Array<GoogleCloudDataplexV1Action>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List actions response. */
	export interface GoogleCloudDataplexV1ListActionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListActionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List assets response. */
	export interface GoogleCloudDataplexV1ListAssetsResponse {

		/** Asset under the given parent zone. */
		assets?: Array<GoogleCloudDataplexV1Asset>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List assets response. */
	export interface GoogleCloudDataplexV1ListAssetsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListAssetsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListAssetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List content response. */
	export interface GoogleCloudDataplexV1ListContentResponse {

		/** Content under the given parent lake. */
		content?: Array<GoogleCloudDataplexV1Content>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List content response. */
	export interface GoogleCloudDataplexV1ListContentResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListContentResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListContentResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List DataAttributeBindings response. */
	export interface GoogleCloudDataplexV1ListDataAttributeBindingsResponse {

		/** DataAttributeBindings under the given parent Location. */
		dataAttributeBindings?: Array<GoogleCloudDataplexV1DataAttributeBinding>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** List DataAttributeBindings response. */
	export interface GoogleCloudDataplexV1ListDataAttributeBindingsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListDataAttributeBindingsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListDataAttributeBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List DataAttributes response. */
	export interface GoogleCloudDataplexV1ListDataAttributesResponse {

		/** DataAttributes under the given parent DataTaxonomy. */
		dataAttributes?: Array<GoogleCloudDataplexV1DataAttribute>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** List DataAttributes response. */
	export interface GoogleCloudDataplexV1ListDataAttributesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListDataAttributesResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListDataAttributesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List DataScanJobs response. */
	export interface GoogleCloudDataplexV1ListDataScanJobsResponse {

		/** DataScanJobs (BASIC view only) under a given dataScan. */
		dataScanJobs?: Array<GoogleCloudDataplexV1DataScanJob>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List DataScanJobs response. */
	export interface GoogleCloudDataplexV1ListDataScanJobsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListDataScanJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListDataScanJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List dataScans response. */
	export interface GoogleCloudDataplexV1ListDataScansResponse {

		/** DataScans (BASIC view only) under the given parent location. */
		dataScans?: Array<GoogleCloudDataplexV1DataScan>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** List dataScans response. */
	export interface GoogleCloudDataplexV1ListDataScansResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListDataScansResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListDataScansResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List DataTaxonomies response. */
	export interface GoogleCloudDataplexV1ListDataTaxonomiesResponse {

		/** DataTaxonomies under the given parent location. */
		dataTaxonomies?: Array<GoogleCloudDataplexV1DataTaxonomy>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** List DataTaxonomies response. */
	export interface GoogleCloudDataplexV1ListDataTaxonomiesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListDataTaxonomiesResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListDataTaxonomiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List metadata entities response. */
	export interface GoogleCloudDataplexV1ListEntitiesResponse {

		/** Entities in the specified parent zone. */
		entities?: Array<GoogleCloudDataplexV1Entity>;

		/** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
		nextPageToken?: string | null;
	}

	/** List metadata entities response. */
	export interface GoogleCloudDataplexV1ListEntitiesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListEntitiesResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListEntitiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List environments response. */
	export interface GoogleCloudDataplexV1ListEnvironmentsResponse {

		/** Environments under the given parent lake. */
		environments?: Array<GoogleCloudDataplexV1Environment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List environments response. */
	export interface GoogleCloudDataplexV1ListEnvironmentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListEnvironmentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListEnvironmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List jobs response. */
	export interface GoogleCloudDataplexV1ListJobsResponse {

		/** Jobs under a given task. */
		jobs?: Array<GoogleCloudDataplexV1Job>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** List jobs response. */
	export interface GoogleCloudDataplexV1ListJobsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List lakes response. */
	export interface GoogleCloudDataplexV1ListLakesResponse {

		/** Lakes under the given parent location. */
		lakes?: Array<GoogleCloudDataplexV1Lake>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** List lakes response. */
	export interface GoogleCloudDataplexV1ListLakesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListLakesResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListLakesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List metadata partitions response. */
	export interface GoogleCloudDataplexV1ListPartitionsResponse {

		/** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
		nextPageToken?: string | null;

		/** Partitions under the specified parent entity. */
		partitions?: Array<GoogleCloudDataplexV1Partition>;
	}

	/** List metadata partitions response. */
	export interface GoogleCloudDataplexV1ListPartitionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListPartitionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListPartitionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents partition metadata contained within entity instances. */
	export interface GoogleCloudDataplexV1Partition {

		/** Optional. The etag for this partition. */
		etag?: string | null;

		/** Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/ */
		location?: string | null;

		/** Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format. */
		name?: string | null;

		/** Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity. */
		values?: Array<string>;
	}

	/** Represents partition metadata contained within entity instances. */
	export interface GoogleCloudDataplexV1PartitionFormProperties {

		/** Optional. The etag for this partition. */
		etag: FormControl<string | null | undefined>,

		/** Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/ */
		location: FormControl<string | null | undefined>,

		/** Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1PartitionFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1PartitionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List sessions response. */
	export interface GoogleCloudDataplexV1ListSessionsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Sessions under a given environment. */
		sessions?: Array<GoogleCloudDataplexV1Session>;
	}

	/** List sessions response. */
	export interface GoogleCloudDataplexV1ListSessionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListSessionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListSessionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an active analyze session running for a user. */
	export interface GoogleCloudDataplexV1Session {

		/** Output only. Session start time. */
		createTime?: string | null;

		/** Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id} */
		name?: string | null;

		/** Output only. State of Session */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Output only. Email of user running the session. */
		userId?: string | null;
	}

	/** Represents an active analyze session running for a user. */
	export interface GoogleCloudDataplexV1SessionFormProperties {

		/** Output only. Session start time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. State of Session */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. Email of user running the session. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SessionFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SessionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List tasks response. */
	export interface GoogleCloudDataplexV1ListTasksResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Tasks under the given parent lake. */
		tasks?: Array<GoogleCloudDataplexV1Task>;

		/** Locations that could not be reached. */
		unreachableLocations?: Array<string>;
	}

	/** List tasks response. */
	export interface GoogleCloudDataplexV1ListTasksResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListTasksResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListTasksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A task represents a user-visible job. */
	export interface GoogleCloudDataplexV1Task {

		/** Output only. The time when the task was created. */
		createTime?: string | null;

		/** Optional. Description of the task. */
		description?: string | null;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** Execution related settings, like retry and service_account. */
		executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;

		/** Status of the task execution (e.g. Jobs). */
		executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;

		/** Optional. User-defined labels for the task. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. */
		name?: string | null;

		/** Config for running scheduled notebooks. */
		notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;

		/** User-specified config for running a Spark task. */
		spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;

		/** Output only. Current state of the task. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Task scheduling and trigger settings. */
		triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;

		/** Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the task was last updated. */
		updateTime?: string | null;
	}

	/** A task represents a user-visible job. */
	export interface GoogleCloudDataplexV1TaskFormProperties {

		/** Output only. The time when the task was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the task. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User-defined labels for the task. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the task. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the task was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of the task execution (e.g. Jobs). */
	export interface GoogleCloudDataplexV1TaskExecutionStatus {

		/** A job represents an instance of a task. */
		latestJob?: GoogleCloudDataplexV1Job;

		/** Output only. Last update time of the status. */
		updateTime?: string | null;
	}

	/** Status of the task execution (e.g. Jobs). */
	export interface GoogleCloudDataplexV1TaskExecutionStatusFormProperties {

		/** Output only. Last update time of the status. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskExecutionStatusFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskExecutionStatusFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for running scheduled notebooks. */
	export interface GoogleCloudDataplexV1TaskNotebookTaskConfig {

		/** Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. */
		fileUris?: Array<string>;

		/** Configuration for the underlying infrastructure used to run workloads. */
		infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

		/** Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value). */
		notebook?: string | null;
	}

	/** Config for running scheduled notebooks. */
	export interface GoogleCloudDataplexV1TaskNotebookTaskConfigFormProperties {

		/** Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value). */
		notebook: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskNotebookTaskConfigFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskNotebookTaskConfigFormProperties>({
			notebook: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the underlying infrastructure used to run workloads. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpec {

		/** Batch compute resources associated with the task. */
		batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;

		/** Container Image Runtime Configuration used with Batch execution. */
		containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;

		/** Cloud VPC Network used to run the infrastructure. */
		vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
	}

	/** Configuration for the underlying infrastructure used to run workloads. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecFormProperties {
	}
	export function CreateGoogleCloudDataplexV1TaskInfrastructureSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskInfrastructureSpecFormProperties>({
		});

	}


	/** Batch compute resources associated with the task. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources {

		/** Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2 */
		executorsCount?: number | null;

		/** Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000 */
		maxExecutorsCount?: number | null;
	}

	/** Batch compute resources associated with the task. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResourcesFormProperties {

		/** Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2 */
		executorsCount: FormControl<number | null | undefined>,

		/** Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000 */
		maxExecutorsCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResourcesFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResourcesFormProperties>({
			executorsCount: new FormControl<number | null | undefined>(undefined),
			maxExecutorsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container Image Runtime Configuration used with Batch execution. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime {

		/** Optional. Container image to use. */
		image?: string | null;

		/** Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar */
		javaJars?: Array<string>;

		/** Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties?: {[id: string]: string };

		/** Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz */
		pythonPackages?: Array<string>;
	}

	/** Container Image Runtime Configuration used with Batch execution. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntimeFormProperties {

		/** Optional. Container image to use. */
		image: FormControl<string | null | undefined>,

		/** Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntimeFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntimeFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Cloud VPC Network used to run the infrastructure. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork {

		/** Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used. */
		network?: string | null;

		/** Optional. List of network tags to apply to the job. */
		networkTags?: Array<string>;

		/** Optional. The Cloud VPC sub-network in which the job is run. */
		subNetwork?: string | null;
	}

	/** Cloud VPC Network used to run the infrastructure. */
	export interface GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetworkFormProperties {

		/** Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used. */
		network: FormControl<string | null | undefined>,

		/** Optional. The Cloud VPC sub-network in which the job is run. */
		subNetwork: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskInfrastructureSpecVpcNetworkFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			subNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User-specified config for running a Spark task. */
	export interface GoogleCloudDataplexV1TaskSparkTaskConfig {

		/** Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
		archiveUris?: Array<string>;

		/** Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. */
		fileUris?: Array<string>;

		/** Configuration for the underlying infrastructure used to run workloads. */
		infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value). */
		mainClass?: string | null;

		/** The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value). */
		mainJarFileUri?: string | null;

		/** The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value). */
		pythonScriptFile?: string | null;

		/** The query text. The execution args are used to declare a set of script variables (set key="value";). */
		sqlScript?: string | null;

		/** A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";). */
		sqlScriptFile?: string | null;
	}

	/** User-specified config for running a Spark task. */
	export interface GoogleCloudDataplexV1TaskSparkTaskConfigFormProperties {

		/** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value). */
		mainClass: FormControl<string | null | undefined>,

		/** The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value). */
		mainJarFileUri: FormControl<string | null | undefined>,

		/** The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value). */
		pythonScriptFile: FormControl<string | null | undefined>,

		/** The query text. The execution args are used to declare a set of script variables (set key="value";). */
		sqlScript: FormControl<string | null | undefined>,

		/** A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";). */
		sqlScriptFile: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskSparkTaskConfigFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskSparkTaskConfigFormProperties>({
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainJarFileUri: new FormControl<string | null | undefined>(undefined),
			pythonScriptFile: new FormControl<string | null | undefined>(undefined),
			sqlScript: new FormControl<string | null | undefined>(undefined),
			sqlScriptFile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Task scheduling and trigger settings. */
	export interface GoogleCloudDataplexV1TaskTriggerSpec {

		/** Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks. */
		disabled?: boolean | null;

		/** Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. */
		maxRetries?: number | null;

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. */
		schedule?: string | null;

		/** Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING. */
		startTime?: string | null;

		/** Required. Immutable. Trigger type of the user-specified Task. */
		type?: GoogleCloudDataplexV1TaskTriggerSpecType | null;
	}

	/** Task scheduling and trigger settings. */
	export interface GoogleCloudDataplexV1TaskTriggerSpecFormProperties {

		/** Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks. */
		disabled: FormControl<boolean | null | undefined>,

		/** Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. */
		maxRetries: FormControl<number | null | undefined>,

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. */
		schedule: FormControl<string | null | undefined>,

		/** Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING. */
		startTime: FormControl<string | null | undefined>,

		/** Required. Immutable. Trigger type of the user-specified Task. */
		type: FormControl<GoogleCloudDataplexV1TaskTriggerSpecType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1TaskTriggerSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1TaskTriggerSpecFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			maxRetries: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1TaskTriggerSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1TaskTriggerSpecType { TYPE_UNSPECIFIED = 0, ON_DEMAND = 1, RECURRING = 2 }


	/** List zones response. */
	export interface GoogleCloudDataplexV1ListZonesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Zones under the given parent lake. */
		zones?: Array<GoogleCloudDataplexV1Zone>;
	}

	/** List zones response. */
	export interface GoogleCloudDataplexV1ListZonesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ListZonesResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ListZonesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets. */
	export interface GoogleCloudDataplexV1Zone {

		/** Aggregated status of the underlying assets of a lake or zone. */
		assetStatus?: GoogleCloudDataplexV1AssetStatus;

		/** Output only. The time when the zone was created. */
		createTime?: string | null;

		/** Optional. Description of the zone. */
		description?: string | null;

		/** Settings to manage the metadata discovery and publishing in a zone. */
		discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;

		/** Optional. User friendly display name. */
		displayName?: string | null;

		/** Optional. User defined labels for the zone. */
		labels?: {[id: string]: string };

		/** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
		name?: string | null;

		/** Settings for resources attached as assets within a zone. */
		resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;

		/** Output only. Current state of the zone. */
		state?: GoogleCloudDataplexV1AssetState | null;

		/** Required. Immutable. The type of the zone. */
		type?: GoogleCloudDataplexV1ZoneType | null;

		/** Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name. */
		uid?: string | null;

		/** Output only. The time when the zone was last updated. */
		updateTime?: string | null;
	}

	/** A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets. */
	export interface GoogleCloudDataplexV1ZoneFormProperties {

		/** Output only. The time when the zone was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the zone. */
		description: FormControl<string | null | undefined>,

		/** Optional. User friendly display name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. User defined labels for the zone. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the zone. */
		state: FormControl<GoogleCloudDataplexV1AssetState | null | undefined>,

		/** Required. Immutable. The type of the zone. */
		type: FormControl<GoogleCloudDataplexV1ZoneType | null | undefined>,

		/** Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the zone was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ZoneFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ZoneFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDataplexV1AssetState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1ZoneType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to manage the metadata discovery and publishing in a zone. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpec {

		/** Describe CSV and similar semi-structured data formats. */
		csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;

		/** Required. Whether discovery is enabled. */
		enabled?: boolean | null;

		/** Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
		excludePatterns?: Array<string>;

		/** Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
		includePatterns?: Array<string>;

		/** Describe JSON data format. */
		jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
		schedule?: string | null;
	}

	/** Settings to manage the metadata discovery and publishing in a zone. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpecFormProperties {

		/** Required. Whether discovery is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
		schedule: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ZoneDiscoverySpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ZoneDiscoverySpecFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describe CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions {

		/** Optional. The delimiter being used to separate values. This defaults to ','. */
		delimiter?: string | null;

		/** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
		disableTypeInference?: boolean | null;

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding?: string | null;

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
		headerRows?: number | null;
	}

	/** Describe CSV and similar semi-structured data formats. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptionsFormProperties {

		/** Optional. The delimiter being used to separate values. This defaults to ','. */
		delimiter: FormControl<string | null | undefined>,

		/** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
		disableTypeInference: FormControl<boolean | null | undefined>,

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding: FormControl<string | null | undefined>,

		/** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
		headerRows: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ZoneDiscoverySpecCsvOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptionsFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined),
			disableTypeInference: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			headerRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describe JSON data format. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions {

		/** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
		disableTypeInference?: boolean | null;

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding?: string | null;
	}

	/** Describe JSON data format. */
	export interface GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptionsFormProperties {

		/** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
		disableTypeInference: FormControl<boolean | null | undefined>,

		/** Optional. The character encoding of the data. The default is UTF-8. */
		encoding: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ZoneDiscoverySpecJsonOptionsFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptionsFormProperties>({
			disableTypeInference: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for resources attached as assets within a zone. */
	export interface GoogleCloudDataplexV1ZoneResourceSpec {

		/** Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. */
		locationType?: GoogleCloudDataplexV1ZoneResourceSpecLocationType | null;
	}

	/** Settings for resources attached as assets within a zone. */
	export interface GoogleCloudDataplexV1ZoneResourceSpecFormProperties {

		/** Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. */
		locationType: FormControl<GoogleCloudDataplexV1ZoneResourceSpecLocationType | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1ZoneResourceSpecFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1ZoneResourceSpecFormProperties>({
			locationType: new FormControl<GoogleCloudDataplexV1ZoneResourceSpecLocationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1ZoneResourceSpecLocationType { LOCATION_TYPE_UNSPECIFIED = 0, SINGLE_REGION = 1, MULTI_REGION = 2 }

	export enum GoogleCloudDataplexV1ZoneType { TYPE_UNSPECIFIED = 0, RAW = 1, CURATED = 2 }


	/** Represents the metadata of a long-running operation. */
	export interface GoogleCloudDataplexV1OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of a long-running operation. */
	export interface GoogleCloudDataplexV1OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Run DataScan Request */
	export interface GoogleCloudDataplexV1RunDataScanRequest {
	}

	/** Run DataScan Request */
	export interface GoogleCloudDataplexV1RunDataScanRequestFormProperties {
	}
	export function CreateGoogleCloudDataplexV1RunDataScanRequestFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1RunDataScanRequestFormProperties>({
		});

	}


	/** Run DataScan Response. */
	export interface GoogleCloudDataplexV1RunDataScanResponse {

		/** A DataScanJob represents an instance of DataScan execution. */
		job?: GoogleCloudDataplexV1DataScanJob;
	}

	/** Run DataScan Response. */
	export interface GoogleCloudDataplexV1RunDataScanResponseFormProperties {
	}
	export function CreateGoogleCloudDataplexV1RunDataScanResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1RunDataScanResponseFormProperties>({
		});

	}

	export interface GoogleCloudDataplexV1RunTaskRequest {

		/** Optional. Execution spec arguments. If the map is left empty, the task will run with existing execution spec args from task definition. If the map contains an entry with a new key, the same will be added to existing set of args. If the map contains an entry with an existing arg key in task definition, the task will run with new arg value for that entry. Clearing an existing arg will require arg value to be explicitly set to a hyphen "-". The arg value cannot be empty. */
		args?: {[id: string]: string };

		/** Optional. User-defined labels for the task. If the map is left empty, the task will run with existing labels from task definition. If the map contains an entry with a new key, the same will be added to existing set of labels. If the map contains an entry with an existing label key in task definition, the task will run with new label value for that entry. Clearing an existing label will require label value to be explicitly set to a hyphen "-". The label value cannot be empty. */
		labels?: {[id: string]: string };
	}
	export interface GoogleCloudDataplexV1RunTaskRequestFormProperties {

		/** Optional. Execution spec arguments. If the map is left empty, the task will run with existing execution spec args from task definition. If the map contains an entry with a new key, the same will be added to existing set of args. If the map contains an entry with an existing arg key in task definition, the task will run with new arg value for that entry. Clearing an existing arg will require arg value to be explicitly set to a hyphen "-". The arg value cannot be empty. */
		args: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. User-defined labels for the task. If the map is left empty, the task will run with existing labels from task definition. If the map contains an entry with a new key, the same will be added to existing set of labels. If the map contains an entry with an existing label key in task definition, the task will run with new label value for that entry. Clearing an existing label will require label value to be explicitly set to a hyphen "-". The label value cannot be empty. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1RunTaskRequestFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1RunTaskRequestFormProperties>({
			args: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudDataplexV1RunTaskResponse {

		/** A job represents an instance of a task. */
		job?: GoogleCloudDataplexV1Job;
	}
	export interface GoogleCloudDataplexV1RunTaskResponseFormProperties {
	}
	export function CreateGoogleCloudDataplexV1RunTaskResponseFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1RunTaskResponseFormProperties>({
		});

	}


	/** These messages contain information about sessions within an environment. The monitored resource is 'Environment'. */
	export interface GoogleCloudDataplexV1SessionEvent {

		/** The status of the event. */
		eventSucceeded?: boolean | null;

		/** If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user. */
		fastStartupEnabled?: boolean | null;

		/** The log message. */
		message?: string | null;

		/** Execution details of the query. */
		query?: GoogleCloudDataplexV1SessionEventQueryDetail;

		/** Unique identifier for the session. */
		sessionId?: string | null;

		/** The type of the event. */
		type?: GoogleCloudDataplexV1SessionEventType | null;

		/** The idle duration of a warm pooled session before it is assigned to user. */
		unassignedDuration?: string | null;

		/** The information about the user that created the session. It will be the email address of the user. */
		userId?: string | null;
	}

	/** These messages contain information about sessions within an environment. The monitored resource is 'Environment'. */
	export interface GoogleCloudDataplexV1SessionEventFormProperties {

		/** The status of the event. */
		eventSucceeded: FormControl<boolean | null | undefined>,

		/** If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user. */
		fastStartupEnabled: FormControl<boolean | null | undefined>,

		/** The log message. */
		message: FormControl<string | null | undefined>,

		/** Unique identifier for the session. */
		sessionId: FormControl<string | null | undefined>,

		/** The type of the event. */
		type: FormControl<GoogleCloudDataplexV1SessionEventType | null | undefined>,

		/** The idle duration of a warm pooled session before it is assigned to user. */
		unassignedDuration: FormControl<string | null | undefined>,

		/** The information about the user that created the session. It will be the email address of the user. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SessionEventFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SessionEventFormProperties>({
			eventSucceeded: new FormControl<boolean | null | undefined>(undefined),
			fastStartupEnabled: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDataplexV1SessionEventType | null | undefined>(undefined),
			unassignedDuration: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execution details of the query. */
	export interface GoogleCloudDataplexV1SessionEventQueryDetail {

		/** The data processed by the query. */
		dataProcessedBytes?: string | null;

		/** Time taken for execution of the query. */
		duration?: string | null;

		/** Query Execution engine. */
		engine?: GoogleCloudDataplexV1SessionEventQueryDetailEngine | null;

		/** The unique Query id identifying the query. */
		queryId?: string | null;

		/** The query text executed. */
		queryText?: string | null;

		/** The size of results the query produced. */
		resultSizeBytes?: string | null;
	}

	/** Execution details of the query. */
	export interface GoogleCloudDataplexV1SessionEventQueryDetailFormProperties {

		/** The data processed by the query. */
		dataProcessedBytes: FormControl<string | null | undefined>,

		/** Time taken for execution of the query. */
		duration: FormControl<string | null | undefined>,

		/** Query Execution engine. */
		engine: FormControl<GoogleCloudDataplexV1SessionEventQueryDetailEngine | null | undefined>,

		/** The unique Query id identifying the query. */
		queryId: FormControl<string | null | undefined>,

		/** The query text executed. */
		queryText: FormControl<string | null | undefined>,

		/** The size of results the query produced. */
		resultSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDataplexV1SessionEventQueryDetailFormGroup() {
		return new FormGroup<GoogleCloudDataplexV1SessionEventQueryDetailFormProperties>({
			dataProcessedBytes: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			engine: new FormControl<GoogleCloudDataplexV1SessionEventQueryDetailEngine | null | undefined>(undefined),
			queryId: new FormControl<string | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined),
			resultSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDataplexV1SessionEventQueryDetailEngine { ENGINE_UNSPECIFIED = 0, SPARK_SQL = 1, BIGQUERY = 2 }

	export enum GoogleCloudDataplexV1SessionEventType { EVENT_TYPE_UNSPECIFIED = 0, START = 1, STOP = 2, QUERY = 3, CREATE = 4 }


	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<GoogleCloudLocationLocation>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudLocationListLocationsResponseFormGroup() {
		return new FormGroup<GoogleCloudLocationListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface GoogleCloudLocationLocation {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: "us-east1". */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface GoogleCloudLocationLocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: "us-east1". */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudLocationLocationFormGroup() {
		return new FormGroup<GoogleCloudLocationLocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates members, or principals, with a role. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}: All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*: All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}: A workload identity pool group. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*: All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: Deleted single identity in a workforce identity pool. For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value. */
		members?: Array<string>;

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role?: string | null;
	}

	/** Associates members, or principals, with a role. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy. */
		bindings?: Array<GoogleIamV1Binding>;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for SetIamPolicy method. */
	export interface GoogleIamV1SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag" */
		updateMask?: string | null;
	}

	/** Request message for SetIamPolicy method. */
	export interface GoogleIamV1SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag" */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for TestIamPermissions method. */
	export interface GoogleIamV1TestIamPermissionsRequest {

		/** The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for TestIamPermissions method. */
	export interface GoogleIamV1TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for TestIamPermissions method. */
	export interface GoogleIamV1TestIamPermissionsResponse {

		/** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for TestIamPermissions method. */
	export interface GoogleIamV1TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsResponseFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} etag Optional. The etag associated with the partition.
		 * @return {Empty} Successful response
		 */
		Dataplex_projects_locations_operations_delete(name: string, etag: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {Dataplex_projects_locations_operations_getView} view Optional. Used to select the subset of entity information to return. Defaults to BASIC.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_operations_get(name: string, view: Dataplex_projects_locations_operations_getView | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates an asset resource.
		 * Patch v1/{name}
		 * @param {string} name Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
		 * @param {string} updateMask Required. Mask of fields to update.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Asset): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a metadata entity. Only supports full resource update.
		 * Put v1/{name}
		 * @param {string} name Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleCloudDataplexV1Entity} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_entities_update(name: string, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Entity): Observable<GoogleCloudDataplexV1Entity> {
			return this.http.put<GoogleCloudDataplexV1Entity>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
		 * @return {GoogleCloudLocationListLocationsResponse} Successful response
		 */
		Dataplex_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudLocationListLocationsResponse> {
			return this.http.get<GoogleCloudLocationListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Dataplex_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Dataplex_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run an on demand execution of a Task.
		 * Post v1/{name}:run
		 * @param {string} name Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.
		 * @return {GoogleCloudDataplexV1RunTaskResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_tasks_run(name: string, requestBody: GoogleCloudDataplexV1RunTaskRequest): Observable<GoogleCloudDataplexV1RunTaskResponse> {
			return this.http.post<GoogleCloudDataplexV1RunTaskResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists action resources in an asset.
		 * Get v1/{parent}/actions
		 * @param {string} parent Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
		 * @param {number} pageSize Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListActionsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_actions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListActionsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListActionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/actions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists asset resources in a zone.
		 * Get v1/{parent}/assets
		 * @param {string} parent Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListAssetsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListAssetsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListAssetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an asset resource.
		 * Post v1/{parent}/assets
		 * @param {string} parent Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
		 * @param {string} assetId Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_create(parent: string, assetId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Asset): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assets&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Data Attribute resources in a DataTaxonomy.
		 * Get v1/{parent}/attributes
		 * @param {string} parent Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListDataAttributesResponse} Successful response
		 */
		Dataplex_projects_locations_dataTaxonomies_attributes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListDataAttributesResponse> {
			return this.http.get<GoogleCloudDataplexV1ListDataAttributesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a DataAttribute resource.
		 * Post v1/{parent}/attributes
		 * @param {string} parent Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}
		 * @param {string} dataAttributeId Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_dataTaxonomies_attributes_create(parent: string, dataAttributeId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1DataAttribute): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attributes&dataAttributeId=' + (dataAttributeId == null ? '' : encodeURIComponent(dataAttributeId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List content.
		 * Get v1/{parent}/content
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
		 * @param {string} filter Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
		 * @param {number} pageSize Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListContentResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_content_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListContentResponse> {
			return this.http.get<GoogleCloudDataplexV1ListContentResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a content.
		 * Post v1/{parent}/content
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleCloudDataplexV1Content} Successful response
		 */
		Dataplex_projects_locations_lakes_content_create(parent: string, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Content): Observable<GoogleCloudDataplexV1Content> {
			return this.http.post<GoogleCloudDataplexV1Content>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List content.
		 * Get v1/{parent}/contentitems
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
		 * @param {string} filter Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
		 * @param {number} pageSize Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListContentResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_contentitems_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListContentResponse> {
			return this.http.get<GoogleCloudDataplexV1ListContentResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contentitems&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a content.
		 * Post v1/{parent}/contentitems
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleCloudDataplexV1Content} Successful response
		 */
		Dataplex_projects_locations_lakes_contentitems_create(parent: string, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Content): Observable<GoogleCloudDataplexV1Content> {
			return this.http.post<GoogleCloudDataplexV1Content>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contentitems&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DataAttributeBinding resources in a project and location.
		 * Get v1/{parent}/dataAttributeBindings
		 * @param {string} parent Required. The resource name of the Location: projects/{project_number}/locations/{location_id}
		 * @param {string} filter Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name"
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListDataAttributeBindingsResponse} Successful response
		 */
		Dataplex_projects_locations_dataAttributeBindings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListDataAttributeBindingsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListDataAttributeBindingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataAttributeBindings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a DataAttributeBinding resource.
		 * Post v1/{parent}/dataAttributeBindings
		 * @param {string} parent Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}
		 * @param {string} dataAttributeBindingId Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_dataAttributeBindings_create(parent: string, dataAttributeBindingId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1DataAttributeBinding): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataAttributeBindings&dataAttributeBindingId=' + (dataAttributeBindingId == null ? '' : encodeURIComponent(dataAttributeBindingId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DataScans.
		 * Get v1/{parent}/dataScans
		 * @param {string} parent Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined.
		 * @param {number} pageSize Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListDataScansResponse} Successful response
		 */
		Dataplex_projects_locations_dataScans_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListDataScansResponse> {
			return this.http.get<GoogleCloudDataplexV1ListDataScansResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataScans&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DataScan resource.
		 * Post v1/{parent}/dataScans
		 * @param {string} parent Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a GCP region.
		 * @param {string} dataScanId Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_dataScans_create(parent: string, dataScanId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1DataScan): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataScans&dataScanId=' + (dataScanId == null ? '' : encodeURIComponent(dataScanId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DataTaxonomy resources in a project and location.
		 * Get v1/{parent}/dataTaxonomies
		 * @param {string} parent Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListDataTaxonomiesResponse} Successful response
		 */
		Dataplex_projects_locations_dataTaxonomies_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListDataTaxonomiesResponse> {
			return this.http.get<GoogleCloudDataplexV1ListDataTaxonomiesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataTaxonomies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a DataTaxonomy resource.
		 * Post v1/{parent}/dataTaxonomies
		 * @param {string} parent Required. The resource name of the data taxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.
		 * @param {string} dataTaxonomyId Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_dataTaxonomies_create(parent: string, dataTaxonomyId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1DataTaxonomy): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataTaxonomies&dataTaxonomyId=' + (dataTaxonomyId == null ? '' : encodeURIComponent(dataTaxonomyId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List metadata entities in a zone.
		 * Get v1/{parent}/entities
		 * @param {string} parent Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
		 * @param {string} filter Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"
		 * @param {number} pageSize Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.
		 * @param {string} pageToken Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.
		 * @param {Dataplex_projects_locations_lakes_zones_entities_listView} view Required. Specify the entity view to make a partial list request.
		 * @return {GoogleCloudDataplexV1ListEntitiesResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_entities_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Dataplex_projects_locations_lakes_zones_entities_listView | null | undefined): Observable<GoogleCloudDataplexV1ListEntitiesResponse> {
			return this.http.get<GoogleCloudDataplexV1ListEntitiesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entities&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Create a metadata entity.
		 * Post v1/{parent}/entities
		 * @param {string} parent Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleCloudDataplexV1Entity} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_entities_create(parent: string, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Entity): Observable<GoogleCloudDataplexV1Entity> {
			return this.http.post<GoogleCloudDataplexV1Entity>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entities&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists environments under the given lake.
		 * Get v1/{parent}/environments
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListEnvironmentsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_environments_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListEnvironmentsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListEnvironmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an environment resource.
		 * Post v1/{parent}/environments
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.
		 * @param {string} environmentId Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_environments_create(parent: string, environmentId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Environment): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Jobs under the given task.
		 * Get v1/{parent}/jobs
		 * @param {string} parent Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.
		 * @param {number} pageSize Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListJobsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_tasks_jobs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListJobsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists lake resources in a project and location.
		 * Get v1/{parent}/lakes
		 * @param {string} parent Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListLakesResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListLakesResponse> {
			return this.http.get<GoogleCloudDataplexV1ListLakesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/lakes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a lake resource.
		 * Post v1/{parent}/lakes
		 * @param {string} parent Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.
		 * @param {string} lakeId Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_create(parent: string, lakeId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Lake): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/lakes&lakeId=' + (lakeId == null ? '' : encodeURIComponent(lakeId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List metadata partitions of an entity.
		 * Get v1/{parent}/partitions
		 * @param {string} parent Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
		 * @param {string} filter Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.
		 * @param {number} pageSize Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.
		 * @param {string} pageToken Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListPartitionsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_entities_partitions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListPartitionsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListPartitionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/partitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a metadata partition.
		 * Post v1/{parent}/partitions
		 * @param {string} parent Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleCloudDataplexV1Partition} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_entities_partitions_create(parent: string, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Partition): Observable<GoogleCloudDataplexV1Partition> {
			return this.http.post<GoogleCloudDataplexV1Partition>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/partitions&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists session resources in an environment.
		 * Get v1/{parent}/sessions
		 * @param {string} parent Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}.
		 * @param {string} filter Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER
		 * @param {number} pageSize Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListSessionsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_environments_sessions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListSessionsResponse> {
			return this.http.get<GoogleCloudDataplexV1ListSessionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sessions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists tasks under the given lake.
		 * Get v1/{parent}/tasks
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListTasksResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_tasks_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListTasksResponse> {
			return this.http.get<GoogleCloudDataplexV1ListTasksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a task resource within a lake.
		 * Post v1/{parent}/tasks
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
		 * @param {string} taskId Required. Task identifier.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_tasks_create(parent: string, taskId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: GoogleCloudDataplexV1Task): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists zone resources in a lake.
		 * Get v1/{parent}/zones
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
		 * @param {string} filter Optional. Filter request.
		 * @param {string} orderBy Optional. Order by fields for the result.
		 * @param {number} pageSize Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
		 * @return {GoogleCloudDataplexV1ListZonesResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDataplexV1ListZonesResponse> {
			return this.http.get<GoogleCloudDataplexV1ListZonesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/zones&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a zone resource within a lake.
		 * Post v1/{parent}/zones
		 * @param {string} parent Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
		 * @param {boolean} validateOnly Optional. Only validate the request, but do not perform mutations. The default is false.
		 * @param {string} zoneId Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_create(parent: string, validateOnly: boolean | null | undefined, zoneId: string | null | undefined, requestBody: GoogleCloudDataplexV1Zone): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/zones&validateOnly=' + validateOnly + '&zoneId=' + (zoneId == null ? '' : encodeURIComponent(zoneId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<GoogleIamV1Policy> {
			return this.http.get<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Dataplex_projects_locations_lakes_zones_assets_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Dataplex_projects_locations_operations_getView { ENTITY_VIEW_UNSPECIFIED = 0, BASIC = 1, SCHEMA = 2, FULL = 3 }

	export enum Dataplex_projects_locations_lakes_zones_entities_listView { ENTITY_VIEW_UNSPECIFIED = 0, TABLES = 1, FILESETS = 2 }

}

