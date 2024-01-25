import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A pipeline activity. */
	export interface Activity {

		/** Activity depends on condition. */
		dependsOn?: Array<ActivityDependency>;

		/** Activity description. */
		description?: string | null;

		/**
		 * Activity name.
		 * Required
		 */
		name: string;

		/**
		 * Type of activity.
		 * Required
		 */
		type: string;

		/** Activity user properties. */
		userProperties?: Array<UserProperty>;
	}

	/** A pipeline activity. */
	export interface ActivityFormProperties {

		/** Activity description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Activity name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of activity.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Activity dependency information. */
	export interface ActivityDependency {

		/**
		 * Activity name.
		 * Required
		 */
		activity: string;

		/**
		 * Match-Condition for the dependency.
		 * Required
		 */
		dependencyConditions: Array<string>;
	}

	/** Activity dependency information. */
	export interface ActivityDependencyFormProperties {

		/**
		 * Activity name.
		 * Required
		 */
		activity: FormControl<string | null | undefined>,
	}
	export function CreateActivityDependencyFormGroup() {
		return new FormGroup<ActivityDependencyFormProperties>({
			activity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User property. */
	export interface UserProperty {

		/**
		 * User property name.
		 * Required
		 */
		name: string;

		/**
		 * User property value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: string;
	}

	/** User property. */
	export interface UserPropertyFormProperties {

		/**
		 * User property name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User property value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserPropertyFormGroup() {
		return new FormGroup<UserPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Execution policy for an activity. */
	export interface ActivityPolicy {

		/** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
		retry?: string | null;

		/**
		 * Interval between each retry attempt (in seconds). The default is 30 sec.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		retryIntervalInSeconds?: number | null;

		/** When set to true, Input from activity is considered as secure and will not be logged to monitoring. */
		secureInput?: boolean | null;

		/** When set to true, Output from activity is considered as secure and will not be logged to monitoring. */
		secureOutput?: boolean | null;

		/** Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout?: string | null;
	}

	/** Execution policy for an activity. */
	export interface ActivityPolicyFormProperties {

		/** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
		retry: FormControl<string | null | undefined>,

		/**
		 * Interval between each retry attempt (in seconds). The default is 30 sec.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		retryIntervalInSeconds: FormControl<number | null | undefined>,

		/** When set to true, Input from activity is considered as secure and will not be logged to monitoring. */
		secureInput: FormControl<boolean | null | undefined>,

		/** When set to true, Output from activity is considered as secure and will not be logged to monitoring. */
		secureOutput: FormControl<boolean | null | undefined>,

		/** Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateActivityPolicyFormGroup() {
		return new FormGroup<ActivityPolicyFormProperties>({
			retry: new FormControl<string | null | undefined>(undefined),
			retryIntervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(86400)]),
			secureInput: new FormControl<boolean | null | undefined>(undefined),
			secureOutput: new FormControl<boolean | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Amazon Marketplace Web Service source. */
	export interface AmazonMWSSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Amazon Marketplace Web Service source. */
	export interface AmazonMWSSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateAmazonMWSSourceFormGroup() {
		return new FormGroup<AmazonMWSSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for Amazon Redshift Source. */
	export interface AmazonRedshiftSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;

		/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
		redshiftUnloadSettings?: RedshiftUnloadSettings;
	}

	/** A copy activity source for Amazon Redshift Source. */
	export interface AmazonRedshiftSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateAmazonRedshiftSourceFormGroup() {
		return new FormGroup<AmazonRedshiftSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
	export interface RedshiftUnloadSettings {

		/**
		 * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
		 * Required
		 */
		bucketName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		s3LinkedServiceName: any;
	}

	/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
	export interface RedshiftUnloadSettingsFormProperties {

		/**
		 * The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string).
		 * Required
		 */
		bucketName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		s3LinkedServiceName: FormControl<any | null | undefined>,
	}
	export function CreateRedshiftUnloadSettingsFormGroup() {
		return new FormGroup<RedshiftUnloadSettingsFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3LinkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure data lake store read settings. */
	export interface AmazonS3ReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
		prefix?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Azure data lake store read settings. */
	export interface AmazonS3ReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
		prefix: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateAmazonS3ReadSettingsFormGroup() {
		return new FormGroup<AmazonS3ReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Append value for a Variable of type Array. */
	export interface AppendVariableActivity extends ControlActivity {

		/**
		 * AppendVariable activity properties.
		 * Required
		 */
		typeProperties: AppendVariableActivityTypeProperties;
	}

	/** Append value for a Variable of type Array. */
	export interface AppendVariableActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateAppendVariableActivityFormGroup() {
		return new FormGroup<AppendVariableActivityFormProperties>({
		});

	}


	/** AppendVariable activity properties. */
	export interface AppendVariableActivityTypeProperties {

		/** Value to be appended. Could be a static value or Expression */
		value?: string | null;

		/** Name of the variable whose value needs to be appended to. */
		variableName?: string | null;
	}

	/** AppendVariable activity properties. */
	export interface AppendVariableActivityTypePropertiesFormProperties {

		/** Value to be appended. Could be a static value or Expression */
		value: FormControl<string | null | undefined>,

		/** Name of the variable whose value needs to be appended to. */
		variableName: FormControl<string | null | undefined>,
	}
	export function CreateAppendVariableActivityTypePropertiesFormGroup() {
		return new FormGroup<AppendVariableActivityTypePropertiesFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			variableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Avro sink. */
	export interface AvroSink {

		/** Avro write settings. */
		formatSettings?: AvroWriteSettings;

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity Avro sink. */
	export interface AvroSinkFormProperties {
	}
	export function CreateAvroSinkFormGroup() {
		return new FormGroup<AvroSinkFormProperties>({
		});

	}


	/** Avro write settings. */
	export interface AvroWriteSettings {

		/** Top level record name in write result, which is required in AVRO spec. */
		recordName?: string | null;

		/** Record namespace in the write result. */
		recordNamespace?: string | null;
	}

	/** Avro write settings. */
	export interface AvroWriteSettingsFormProperties {

		/** Top level record name in write result, which is required in AVRO spec. */
		recordName: FormControl<string | null | undefined>,

		/** Record namespace in the write result. */
		recordNamespace: FormControl<string | null | undefined>,
	}
	export function CreateAvroWriteSettingsFormGroup() {
		return new FormGroup<AvroWriteSettingsFormProperties>({
			recordName: new FormControl<string | null | undefined>(undefined),
			recordNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connector write settings. */
	export interface StoreWriteSettings {

		/** The type of copy behavior for copy sink. */
		copyBehavior?: string | null;

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections?: string | null;

		/**
		 * The write setting type.
		 * Required
		 */
		type: string;
	}

	/** Connector write settings. */
	export interface StoreWriteSettingsFormProperties {

		/** The type of copy behavior for copy sink. */
		copyBehavior: FormControl<string | null | undefined>,

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections: FormControl<string | null | undefined>,

		/**
		 * The write setting type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStoreWriteSettingsFormGroup() {
		return new FormGroup<StoreWriteSettingsFormProperties>({
			copyBehavior: new FormControl<string | null | undefined>(undefined),
			maxConcurrentConnections: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Avro source. */
	export interface AvroSource {

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity Avro source. */
	export interface AvroSourceFormProperties {
	}
	export function CreateAvroSourceFormGroup() {
		return new FormGroup<AvroSourceFormProperties>({
		});

	}


	/** Connector read setting. */
	export interface StoreReadSettings {

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections?: string | null;

		/**
		 * The read setting type.
		 * Required
		 */
		type: string;
	}

	/** Connector read setting. */
	export interface StoreReadSettingsFormProperties {

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections: FormControl<string | null | undefined>,

		/**
		 * The read setting type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStoreReadSettingsFormGroup() {
		return new FormGroup<StoreReadSettingsFormProperties>({
			maxConcurrentConnections: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure blobFS read settings. */
	export interface AzureBlobFSReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Azure blobFS read settings. */
	export interface AzureBlobFSReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSReadSettingsFormGroup() {
		return new FormGroup<AzureBlobFSReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Data Lake Storage Gen2 sink. */
	export interface AzureBlobFSSink {

		/** The type of copy behavior for copy sink. */
		copyBehavior?: string | null;
	}

	/** A copy activity Azure Data Lake Storage Gen2 sink. */
	export interface AzureBlobFSSinkFormProperties {

		/** The type of copy behavior for copy sink. */
		copyBehavior: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSSinkFormGroup() {
		return new FormGroup<AzureBlobFSSinkFormProperties>({
			copyBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure BlobFS source. */
	export interface AzureBlobFSSource {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
		skipHeaderLineCount?: string | null;

		/** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull?: string | null;
	}

	/** A copy activity Azure BlobFS source. */
	export interface AzureBlobFSSourceFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
		skipHeaderLineCount: FormControl<string | null | undefined>,

		/** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSSourceFormGroup() {
		return new FormGroup<AzureBlobFSSourceFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
			skipHeaderLineCount: new FormControl<string | null | undefined>(undefined),
			treatEmptyAsNull: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure blobFS write settings. */
	export interface AzureBlobFSWriteSettings {

		/** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
		blockSizeInMB?: string | null;
	}

	/** Azure blobFS write settings. */
	export interface AzureBlobFSWriteSettingsFormProperties {

		/** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
		blockSizeInMB: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFSWriteSettingsFormGroup() {
		return new FormGroup<AzureBlobFSWriteSettingsFormProperties>({
			blockSizeInMB: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure blob read settings. */
	export interface AzureBlobStorageReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). */
		prefix?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Azure blob wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Azure blob read settings. */
	export interface AzureBlobStorageReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). */
		prefix: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Azure blob wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageReadSettingsFormGroup() {
		return new FormGroup<AzureBlobStorageReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure blob write settings. */
	export interface AzureBlobStorageWriteSettings {

		/** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
		blockSizeInMB?: string | null;
	}

	/** Azure blob write settings. */
	export interface AzureBlobStorageWriteSettingsFormProperties {

		/** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
		blockSizeInMB: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageWriteSettingsFormGroup() {
		return new FormGroup<AzureBlobStorageWriteSettingsFormProperties>({
			blockSizeInMB: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Data Explorer command activity. */
	export interface AzureDataExplorerCommandActivity extends ExecutionActivity {

		/**
		 * Azure Data Explorer command activity properties.
		 * Required
		 */
		typeProperties: AzureDataExplorerCommandActivityTypeProperties;
	}

	/** Azure Data Explorer command activity. */
	export interface AzureDataExplorerCommandActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateAzureDataExplorerCommandActivityFormGroup() {
		return new FormGroup<AzureDataExplorerCommandActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Azure Data Explorer command activity properties. */
	export interface AzureDataExplorerCommandActivityTypeProperties {

		/**
		 * A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
		 * Required
		 */
		command: string;

		/** Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..) */
		commandTimeout?: string | null;
	}

	/** Azure Data Explorer command activity properties. */
	export interface AzureDataExplorerCommandActivityTypePropertiesFormProperties {

		/**
		 * A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string).
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/** Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..) */
		commandTimeout: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerCommandActivityTypePropertiesFormGroup() {
		return new FormGroup<AzureDataExplorerCommandActivityTypePropertiesFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commandTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Data Explorer sink. */
	export interface AzureDataExplorerSink {

		/** If set to true, any aggregation will be skipped. Default is false. Type: boolean. */
		flushImmediately?: string | null;

		/** An explicit column mapping description provided in a json format. Type: string. */
		ingestionMappingAsJson?: string | null;

		/** A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. */
		ingestionMappingName?: string | null;
	}

	/** A copy activity Azure Data Explorer sink. */
	export interface AzureDataExplorerSinkFormProperties {

		/** If set to true, any aggregation will be skipped. Default is false. Type: boolean. */
		flushImmediately: FormControl<string | null | undefined>,

		/** An explicit column mapping description provided in a json format. Type: string. */
		ingestionMappingAsJson: FormControl<string | null | undefined>,

		/** A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. */
		ingestionMappingName: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerSinkFormGroup() {
		return new FormGroup<AzureDataExplorerSinkFormProperties>({
			flushImmediately: new FormControl<string | null | undefined>(undefined),
			ingestionMappingAsJson: new FormControl<string | null | undefined>(undefined),
			ingestionMappingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Data Explorer (Kusto) source. */
	export interface AzureDataExplorerSource {

		/** The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. */
		noTruncation?: string | null;

		/**
		 * Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
		 * Required
		 */
		query: string;

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).. */
		queryTimeout?: string | null;
	}

	/** A copy activity Azure Data Explorer (Kusto) source. */
	export interface AzureDataExplorerSourceFormProperties {

		/** The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. */
		noTruncation: FormControl<string | null | undefined>,

		/**
		 * Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string).
		 * Required
		 */
		query: FormControl<string | null | undefined>,

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).. */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataExplorerSourceFormGroup() {
		return new FormGroup<AzureDataExplorerSourceFormProperties>({
			noTruncation: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure data lake store read settings. */
	export interface AzureDataLakeStoreReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** ADLS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** ADLS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Azure data lake store read settings. */
	export interface AzureDataLakeStoreReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** ADLS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** ADLS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreReadSettingsFormGroup() {
		return new FormGroup<AzureDataLakeStoreReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Data Lake Store sink. */
	export interface AzureDataLakeStoreSink {

		/** The type of copy behavior for copy sink. */
		copyBehavior?: string | null;

		/** Single File Parallel. */
		enableAdlsSingleFileParallel?: string | null;
	}

	/** A copy activity Azure Data Lake Store sink. */
	export interface AzureDataLakeStoreSinkFormProperties {

		/** The type of copy behavior for copy sink. */
		copyBehavior: FormControl<string | null | undefined>,

		/** Single File Parallel. */
		enableAdlsSingleFileParallel: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreSinkFormGroup() {
		return new FormGroup<AzureDataLakeStoreSinkFormProperties>({
			copyBehavior: new FormControl<string | null | undefined>(undefined),
			enableAdlsSingleFileParallel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Data Lake source. */
	export interface AzureDataLakeStoreSource {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;
	}

	/** A copy activity Azure Data Lake source. */
	export interface AzureDataLakeStoreSourceFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreSourceFormGroup() {
		return new FormGroup<AzureDataLakeStoreSourceFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure data lake store write settings. */
	export interface AzureDataLakeStoreWriteSettings {
	}

	/** Azure data lake store write settings. */
	export interface AzureDataLakeStoreWriteSettingsFormProperties {
	}
	export function CreateAzureDataLakeStoreWriteSettingsFormGroup() {
		return new FormGroup<AzureDataLakeStoreWriteSettingsFormProperties>({
		});

	}


	/** Azure File Storage read settings. */
	export interface AzureFileStorageReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Azure File Storage read settings. */
	export interface AzureFileStorageReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileStorageReadSettingsFormGroup() {
		return new FormGroup<AzureFileStorageReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Function activity. */
	export interface AzureFunctionActivity extends ExecutionActivity {

		/**
		 * Azure Function activity type properties.
		 * Required
		 */
		typeProperties: AzureFunctionActivityTypeProperties;
	}

	/** Azure Function activity. */
	export interface AzureFunctionActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateAzureFunctionActivityFormGroup() {
		return new FormGroup<AzureFunctionActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The list of HTTP methods supported by a AzureFunctionActivity. */
	export enum AzureFunctionActivityMethod { GET = 0, POST = 1, PUT = 2, DELETE = 3, OPTIONS = 4, HEAD = 5, TRACE = 6 }


	/** Azure Function activity type properties. */
	export interface AzureFunctionActivityTypeProperties {

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body?: string | null;

		/**
		 * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
		 * Required
		 */
		functionName: string;

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers?: string | null;

		/**
		 * The list of HTTP methods supported by a AzureFunctionActivity.
		 * Required
		 */
		method: AzureFunctionActivityMethod;
	}

	/** Azure Function activity type properties. */
	export interface AzureFunctionActivityTypePropertiesFormProperties {

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body: FormControl<string | null | undefined>,

		/**
		 * Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string)
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers: FormControl<string | null | undefined>,

		/**
		 * The list of HTTP methods supported by a AzureFunctionActivity.
		 * Required
		 */
		method: FormControl<AzureFunctionActivityMethod | null | undefined>,
	}
	export function CreateAzureFunctionActivityTypePropertiesFormGroup() {
		return new FormGroup<AzureFunctionActivityTypePropertiesFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<AzureFunctionActivityMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure ML Batch Execution activity. */
	export interface AzureMLBatchExecutionActivity extends ExecutionActivity {

		/**
		 * Azure ML Batch Execution activity properties.
		 * Required
		 */
		typeProperties: AzureMLBatchExecutionActivityTypeProperties;
	}

	/** Azure ML Batch Execution activity. */
	export interface AzureMLBatchExecutionActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateAzureMLBatchExecutionActivityFormGroup() {
		return new FormGroup<AzureMLBatchExecutionActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Azure ML Batch Execution activity properties. */
	export interface AzureMLBatchExecutionActivityTypeProperties {

		/** Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. */
		globalParameters?: {[id: string]: any };

		/** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. */
		webServiceInputs?: {[id: string]: AzureMLWebServiceFile };

		/** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. */
		webServiceOutputs?: {[id: string]: AzureMLWebServiceFile };
	}

	/** Azure ML Batch Execution activity properties. */
	export interface AzureMLBatchExecutionActivityTypePropertiesFormProperties {

		/** Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. */
		globalParameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. */
		webServiceInputs: FormControl<{[id: string]: AzureMLWebServiceFile } | null | undefined>,

		/** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. */
		webServiceOutputs: FormControl<{[id: string]: AzureMLWebServiceFile } | null | undefined>,
	}
	export function CreateAzureMLBatchExecutionActivityTypePropertiesFormGroup() {
		return new FormGroup<AzureMLBatchExecutionActivityTypePropertiesFormProperties>({
			globalParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			webServiceInputs: new FormControl<{[id: string]: AzureMLWebServiceFile } | null | undefined>(undefined),
			webServiceOutputs: new FormControl<{[id: string]: AzureMLWebServiceFile } | null | undefined>(undefined),
		});

	}


	/** Azure ML WebService Input/Output file */
	export interface AzureMLWebServiceFile {

		/**
		 * The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
		 * Required
		 */
		filePath: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;
	}

	/** Azure ML WebService Input/Output file */
	export interface AzureMLWebServiceFileFormProperties {

		/**
		 * The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string).
		 * Required
		 */
		filePath: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,
	}
	export function CreateAzureMLWebServiceFileFormGroup() {
		return new FormGroup<AzureMLWebServiceFileFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure ML Execute Pipeline activity. */
	export interface AzureMLExecutePipelineActivity extends ExecutionActivity {

		/**
		 * Azure ML Execute Pipeline activity properties.
		 * Required
		 */
		typeProperties: AzureMLExecutePipelineActivityTypeProperties;
	}

	/** Azure ML Execute Pipeline activity. */
	export interface AzureMLExecutePipelineActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateAzureMLExecutePipelineActivityFormGroup() {
		return new FormGroup<AzureMLExecutePipelineActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Azure ML Execute Pipeline activity properties. */
	export interface AzureMLExecutePipelineActivityTypeProperties {

		/** Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). */
		continueOnStepFailure?: string | null;

		/** Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). */
		experimentName?: string | null;

		/** The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). */
		mlParentRunId?: string | null;

		/**
		 * ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlPipelineId: string;

		/** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
		mlPipelineParameters?: string | null;
	}

	/** Azure ML Execute Pipeline activity properties. */
	export interface AzureMLExecutePipelineActivityTypePropertiesFormProperties {

		/** Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). */
		continueOnStepFailure: FormControl<string | null | undefined>,

		/** Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). */
		experimentName: FormControl<string | null | undefined>,

		/** The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). */
		mlParentRunId: FormControl<string | null | undefined>,

		/**
		 * ID of the published Azure ML pipeline. Type: string (or Expression with resultType string).
		 * Required
		 */
		mlPipelineId: FormControl<string | null | undefined>,

		/** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
		mlPipelineParameters: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLExecutePipelineActivityTypePropertiesFormGroup() {
		return new FormGroup<AzureMLExecutePipelineActivityTypePropertiesFormProperties>({
			continueOnStepFailure: new FormControl<string | null | undefined>(undefined),
			experimentName: new FormControl<string | null | undefined>(undefined),
			mlParentRunId: new FormControl<string | null | undefined>(undefined),
			mlPipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mlPipelineParameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. */
	export interface AzureMLPipelineParameters {
	}

	/** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. */
	export interface AzureMLPipelineParametersFormProperties {
	}
	export function CreateAzureMLPipelineParametersFormGroup() {
		return new FormGroup<AzureMLPipelineParametersFormProperties>({
		});

	}


	/** Azure ML Update Resource management activity. */
	export interface AzureMLUpdateResourceActivity extends ExecutionActivity {

		/**
		 * Azure ML Update Resource activity properties.
		 * Required
		 */
		typeProperties: AzureMLUpdateResourceActivityTypeProperties;
	}

	/** Azure ML Update Resource management activity. */
	export interface AzureMLUpdateResourceActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateAzureMLUpdateResourceActivityFormGroup() {
		return new FormGroup<AzureMLUpdateResourceActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Azure ML Update Resource activity properties. */
	export interface AzureMLUpdateResourceActivityTypeProperties {

		/**
		 * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
		 * Required
		 */
		trainedModelFilePath: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		trainedModelLinkedServiceName: any;

		/**
		 * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
		 * Required
		 */
		trainedModelName: string;
	}

	/** Azure ML Update Resource activity properties. */
	export interface AzureMLUpdateResourceActivityTypePropertiesFormProperties {

		/**
		 * The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string).
		 * Required
		 */
		trainedModelFilePath: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		trainedModelLinkedServiceName: FormControl<any | null | undefined>,

		/**
		 * Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string).
		 * Required
		 */
		trainedModelName: FormControl<string | null | undefined>,
	}
	export function CreateAzureMLUpdateResourceActivityTypePropertiesFormGroup() {
		return new FormGroup<AzureMLUpdateResourceActivityTypePropertiesFormProperties>({
			trainedModelFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainedModelLinkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			trainedModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Azure MariaDB source. */
	export interface AzureMariaDBSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Azure MariaDB source. */
	export interface AzureMariaDBSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateAzureMariaDBSourceFormGroup() {
		return new FormGroup<AzureMariaDBSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure MySql sink. */
	export interface AzureMySqlSink {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity Azure MySql sink. */
	export interface AzureMySqlSinkFormProperties {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateAzureMySqlSinkFormGroup() {
		return new FormGroup<AzureMySqlSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure MySQL source. */
	export interface AzureMySqlSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Azure MySQL source. */
	export interface AzureMySqlSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateAzureMySqlSourceFormGroup() {
		return new FormGroup<AzureMySqlSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure PostgreSQL sink. */
	export interface AzurePostgreSqlSink {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity Azure PostgreSQL sink. */
	export interface AzurePostgreSqlSinkFormProperties {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateAzurePostgreSqlSinkFormGroup() {
		return new FormGroup<AzurePostgreSqlSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure PostgreSQL source. */
	export interface AzurePostgreSqlSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Azure PostgreSQL source. */
	export interface AzurePostgreSqlSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateAzurePostgreSqlSourceFormGroup() {
		return new FormGroup<AzurePostgreSqlSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Queue sink. */
	export interface AzureQueueSink {
	}

	/** A copy activity Azure Queue sink. */
	export interface AzureQueueSinkFormProperties {
	}
	export function CreateAzureQueueSinkFormGroup() {
		return new FormGroup<AzureQueueSinkFormProperties>({
		});

	}


	/** A copy activity Azure Search Index sink. */
	export interface AzureSearchIndexSink {

		/** Specify the write behavior when upserting documents into Azure Search Index. */
		writeBehavior?: AzureSearchIndexSinkWriteBehavior | null;
	}

	/** A copy activity Azure Search Index sink. */
	export interface AzureSearchIndexSinkFormProperties {

		/** Specify the write behavior when upserting documents into Azure Search Index. */
		writeBehavior: FormControl<AzureSearchIndexSinkWriteBehavior | null | undefined>,
	}
	export function CreateAzureSearchIndexSinkFormGroup() {
		return new FormGroup<AzureSearchIndexSinkFormProperties>({
			writeBehavior: new FormControl<AzureSearchIndexSinkWriteBehavior | null | undefined>(undefined),
		});

	}

	export enum AzureSearchIndexSinkWriteBehavior { Merge = 0, Upload = 1 }


	/** A copy activity Azure SQL sink. */
	export interface AzureSqlSink {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName?: string | null;

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType?: string | null;

		/** SQL stored procedure parameters. */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName?: string | null;

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption?: string | null;
	}

	/** A copy activity Azure SQL sink. */
	export interface AzureSqlSinkFormProperties {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName: FormControl<string | null | undefined>,

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType: FormControl<string | null | undefined>,

		/** SQL stored procedure parameters. */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName: FormControl<string | null | undefined>,

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlSinkFormGroup() {
		return new FormGroup<AzureSqlSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
			sqlWriterStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlWriterTableType: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
			storedProcedureTableTypeParameterName: new FormControl<string | null | undefined>(undefined),
			tableOption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SQL stored procedure parameter. */
	export interface StoredProcedureParameter {

		/** Stored procedure parameter type. */
		type?: StoredProcedureParameterType | null;

		/** Stored procedure parameter value. Type: string (or Expression with resultType string). */
		value?: string | null;
	}

	/** SQL stored procedure parameter. */
	export interface StoredProcedureParameterFormProperties {

		/** Stored procedure parameter type. */
		type: FormControl<StoredProcedureParameterType | null | undefined>,

		/** Stored procedure parameter value. Type: string (or Expression with resultType string). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStoredProcedureParameterFormGroup() {
		return new FormGroup<StoredProcedureParameterFormProperties>({
			type: new FormControl<StoredProcedureParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StoredProcedureParameterType { String = 0, Int = 1, Int64 = 2, Decimal = 3, Guid = 4, Boolean = 5, Date = 6 }


	/** A copy activity Azure SQL source. */
	export interface AzureSqlSource {

		/** Which additional types to produce. */
		produceAdditionalTypes?: string | null;

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery?: string | null;

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName?: string | null;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };
	}

	/** A copy activity Azure SQL source. */
	export interface AzureSqlSourceFormProperties {

		/** Which additional types to produce. */
		produceAdditionalTypes: FormControl<string | null | undefined>,

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery: FormControl<string | null | undefined>,

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,
	}
	export function CreateAzureSqlSourceFormGroup() {
		return new FormGroup<AzureSqlSourceFormProperties>({
			produceAdditionalTypes: new FormControl<string | null | undefined>(undefined),
			sqlReaderQuery: new FormControl<string | null | undefined>(undefined),
			sqlReaderStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Table sink. */
	export interface AzureTableSink {

		/** Azure Table default partition key value. Type: string (or Expression with resultType string). */
		azureTableDefaultPartitionKeyValue?: string | null;

		/** Azure Table insert type. Type: string (or Expression with resultType string). */
		azureTableInsertType?: string | null;

		/** Azure Table partition key name. Type: string (or Expression with resultType string). */
		azureTablePartitionKeyName?: string | null;

		/** Azure Table row key name. Type: string (or Expression with resultType string). */
		azureTableRowKeyName?: string | null;
	}

	/** A copy activity Azure Table sink. */
	export interface AzureTableSinkFormProperties {

		/** Azure Table default partition key value. Type: string (or Expression with resultType string). */
		azureTableDefaultPartitionKeyValue: FormControl<string | null | undefined>,

		/** Azure Table insert type. Type: string (or Expression with resultType string). */
		azureTableInsertType: FormControl<string | null | undefined>,

		/** Azure Table partition key name. Type: string (or Expression with resultType string). */
		azureTablePartitionKeyName: FormControl<string | null | undefined>,

		/** Azure Table row key name. Type: string (or Expression with resultType string). */
		azureTableRowKeyName: FormControl<string | null | undefined>,
	}
	export function CreateAzureTableSinkFormGroup() {
		return new FormGroup<AzureTableSinkFormProperties>({
			azureTableDefaultPartitionKeyValue: new FormControl<string | null | undefined>(undefined),
			azureTableInsertType: new FormControl<string | null | undefined>(undefined),
			azureTablePartitionKeyName: new FormControl<string | null | undefined>(undefined),
			azureTableRowKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Table source. */
	export interface AzureTableSource {

		/** Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). */
		azureTableSourceIgnoreTableNotFound?: string | null;

		/** Azure Table source query. Type: string (or Expression with resultType string). */
		azureTableSourceQuery?: string | null;
	}

	/** A copy activity Azure Table source. */
	export interface AzureTableSourceFormProperties {

		/** Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). */
		azureTableSourceIgnoreTableNotFound: FormControl<string | null | undefined>,

		/** Azure Table source query. Type: string (or Expression with resultType string). */
		azureTableSourceQuery: FormControl<string | null | undefined>,
	}
	export function CreateAzureTableSourceFormGroup() {
		return new FormGroup<AzureTableSourceFormProperties>({
			azureTableSourceIgnoreTableNotFound: new FormControl<string | null | undefined>(undefined),
			azureTableSourceQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Binary sink. */
	export interface BinarySink {

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity Binary sink. */
	export interface BinarySinkFormProperties {
	}
	export function CreateBinarySinkFormGroup() {
		return new FormGroup<BinarySinkFormProperties>({
		});

	}


	/** A copy activity Binary source. */
	export interface BinarySource {

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity Binary source. */
	export interface BinarySourceFormProperties {
	}
	export function CreateBinarySourceFormGroup() {
		return new FormGroup<BinarySourceFormProperties>({
		});

	}


	/** A copy activity Azure Blob sink. */
	export interface BlobSink {

		/** Blob writer add header. Type: boolean (or Expression with resultType boolean). */
		blobWriterAddHeader?: string | null;

		/** Blob writer date time format. Type: string (or Expression with resultType string). */
		blobWriterDateTimeFormat?: string | null;

		/** Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). */
		blobWriterOverwriteFiles?: string | null;

		/** The type of copy behavior for copy sink. */
		copyBehavior?: string | null;
	}

	/** A copy activity Azure Blob sink. */
	export interface BlobSinkFormProperties {

		/** Blob writer add header. Type: boolean (or Expression with resultType boolean). */
		blobWriterAddHeader: FormControl<string | null | undefined>,

		/** Blob writer date time format. Type: string (or Expression with resultType string). */
		blobWriterDateTimeFormat: FormControl<string | null | undefined>,

		/** Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). */
		blobWriterOverwriteFiles: FormControl<string | null | undefined>,

		/** The type of copy behavior for copy sink. */
		copyBehavior: FormControl<string | null | undefined>,
	}
	export function CreateBlobSinkFormGroup() {
		return new FormGroup<BlobSinkFormProperties>({
			blobWriterAddHeader: new FormControl<string | null | undefined>(undefined),
			blobWriterDateTimeFormat: new FormControl<string | null | undefined>(undefined),
			blobWriterOverwriteFiles: new FormControl<string | null | undefined>(undefined),
			copyBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure Blob source. */
	export interface BlobSource {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
		skipHeaderLineCount?: string | null;

		/** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull?: string | null;
	}

	/** A copy activity Azure Blob source. */
	export interface BlobSourceFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
		skipHeaderLineCount: FormControl<string | null | undefined>,

		/** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
		treatEmptyAsNull: FormControl<string | null | undefined>,
	}
	export function CreateBlobSourceFormGroup() {
		return new FormGroup<BlobSourceFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
			skipHeaderLineCount: new FormControl<string | null | undefined>(undefined),
			treatEmptyAsNull: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for a Cassandra database. */
	export interface CassandraSource {

		/** The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. */
		consistencyLevel?: CassandraSourceConsistencyLevel | null;

		/** Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for a Cassandra database. */
	export interface CassandraSourceFormProperties {

		/** The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. */
		consistencyLevel: FormControl<CassandraSourceConsistencyLevel | null | undefined>,

		/** Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateCassandraSourceFormGroup() {
		return new FormGroup<CassandraSourceFormProperties>({
			consistencyLevel: new FormControl<CassandraSourceConsistencyLevel | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CassandraSourceConsistencyLevel { ALL = 0, EACH_QUORUM = 1, QUORUM = 2, LOCAL_QUORUM = 3, ONE = 4, TWO = 5, THREE = 6, LOCAL_ONE = 7, SERIAL = 8, LOCAL_SERIAL = 9 }


	/** A copy activity Common Data Service for Apps sink. */
	export interface CommonDataServiceForAppsSink {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName?: string | null;

		/** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues?: string | null;

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: CommonDataServiceForAppsSinkWriteBehavior;
	}

	/** A copy activity Common Data Service for Apps sink. */
	export interface CommonDataServiceForAppsSinkFormProperties {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName: FormControl<string | null | undefined>,

		/** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues: FormControl<string | null | undefined>,

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsSinkFormGroup() {
		return new FormGroup<CommonDataServiceForAppsSinkFormProperties>({
			alternateKeyName: new FormControl<string | null | undefined>(undefined),
			ignoreNullValues: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommonDataServiceForAppsSinkWriteBehavior { Upsert = 0 }


	/** A copy activity Common Data Service for Apps source. */
	export interface CommonDataServiceForAppsSource {

		/** FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Common Data Service for Apps source. */
	export interface CommonDataServiceForAppsSourceFormProperties {

		/** FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateCommonDataServiceForAppsSourceFormGroup() {
		return new FormGroup<CommonDataServiceForAppsSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Concur Service source. */
	export interface ConcurSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Concur Service source. */
	export interface ConcurSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateConcurSourceFormGroup() {
		return new FormGroup<ConcurSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base class for all control activities like IfCondition, ForEach , Until. */
	export interface ControlActivity {
	}

	/** Base class for all control activities like IfCondition, ForEach , Until. */
	export interface ControlActivityFormProperties {
	}
	export function CreateControlActivityFormGroup() {
		return new FormGroup<ControlActivityFormProperties>({
		});

	}


	/** Copy activity. */
	export interface CopyActivity extends ExecutionActivity {

		/** List of inputs for the activity. */
		CopyActivityInputs?: Array<CopyActivityInputs>;

		/** List of outputs for the activity. */
		CopyActivityOutputs?: Array<CopyActivityOutputs>;

		/**
		 * Copy activity properties.
		 * Required
		 */
		typeProperties: CopyActivityTypeProperties;
	}

	/** Copy activity. */
	export interface CopyActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateCopyActivityFormGroup() {
		return new FormGroup<CopyActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface CopyActivityInputs {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: CopyActivityInputsType;
	}
	export interface CopyActivityInputsFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: FormControl<CopyActivityInputsType | null | undefined>,
	}
	export function CreateCopyActivityInputsFormGroup() {
		return new FormGroup<CopyActivityInputsFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CopyActivityInputsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CopyActivityInputsType { DatasetReference = 0 }

	export interface CopyActivityOutputs {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: CopyActivityInputsType;
	}
	export interface CopyActivityOutputsFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: FormControl<CopyActivityInputsType | null | undefined>,
	}
	export function CreateCopyActivityOutputsFormGroup() {
		return new FormGroup<CopyActivityOutputsFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CopyActivityInputsType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Copy activity properties. */
	export interface CopyActivityTypeProperties {

		/** Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. */
		dataIntegrationUnits?: string | null;

		/** Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableSkipIncompatibleRow?: string | null;

		/** Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableStaging?: string | null;

		/** Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. */
		parallelCopies?: string | null;

		/** Preserve rules. */
		preserve?: Array<string>;

		/** Preserve Rules. */
		preserveRules?: Array<string>;

		/** Redirect incompatible row settings */
		redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;

		/**
		 * A copy activity sink.
		 * Required
		 */
		sink: CopySink;

		/**
		 * A copy activity source.
		 * Required
		 */
		source: CopySource;

		/** Staging settings. */
		stagingSettings?: StagingSettings;

		/** Copy activity translator. If not specified, tabular translator is used. */
		translator?: string | null;
	}

	/** Copy activity properties. */
	export interface CopyActivityTypePropertiesFormProperties {

		/** Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. */
		dataIntegrationUnits: FormControl<string | null | undefined>,

		/** Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableSkipIncompatibleRow: FormControl<string | null | undefined>,

		/** Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableStaging: FormControl<string | null | undefined>,

		/** Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. */
		parallelCopies: FormControl<string | null | undefined>,

		/** Copy activity translator. If not specified, tabular translator is used. */
		translator: FormControl<string | null | undefined>,
	}
	export function CreateCopyActivityTypePropertiesFormGroup() {
		return new FormGroup<CopyActivityTypePropertiesFormProperties>({
			dataIntegrationUnits: new FormControl<string | null | undefined>(undefined),
			enableSkipIncompatibleRow: new FormControl<string | null | undefined>(undefined),
			enableStaging: new FormControl<string | null | undefined>(undefined),
			parallelCopies: new FormControl<string | null | undefined>(undefined),
			translator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Redirect incompatible row settings */
	export interface RedirectIncompatibleRowSettings {

		/**
		 * Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
		 * Required
		 */
		linkedServiceName: string;

		/** The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). */
		path?: string | null;
	}

	/** Redirect incompatible row settings */
	export interface RedirectIncompatibleRowSettingsFormProperties {

		/**
		 * Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string).
		 * Required
		 */
		linkedServiceName: FormControl<string | null | undefined>,

		/** The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRedirectIncompatibleRowSettingsFormGroup() {
		return new FormGroup<RedirectIncompatibleRowSettingsFormProperties>({
			linkedServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity sink. */
	export interface CopySink {

		/** The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections?: string | null;

		/** Sink retry count. Type: integer (or Expression with resultType integer). */
		sinkRetryCount?: string | null;

		/** Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		sinkRetryWait?: string | null;

		/**
		 * Copy sink type.
		 * Required
		 */
		type: string;

		/** Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. */
		writeBatchSize?: string | null;

		/** Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		writeBatchTimeout?: string | null;
	}

	/** A copy activity sink. */
	export interface CopySinkFormProperties {

		/** The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections: FormControl<string | null | undefined>,

		/** Sink retry count. Type: integer (or Expression with resultType integer). */
		sinkRetryCount: FormControl<string | null | undefined>,

		/** Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		sinkRetryWait: FormControl<string | null | undefined>,

		/**
		 * Copy sink type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. */
		writeBatchSize: FormControl<string | null | undefined>,

		/** Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		writeBatchTimeout: FormControl<string | null | undefined>,
	}
	export function CreateCopySinkFormGroup() {
		return new FormGroup<CopySinkFormProperties>({
			maxConcurrentConnections: new FormControl<string | null | undefined>(undefined),
			sinkRetryCount: new FormControl<string | null | undefined>(undefined),
			sinkRetryWait: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeBatchSize: new FormControl<string | null | undefined>(undefined),
			writeBatchTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source. */
	export interface CopySource {

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections?: string | null;

		/** Source retry count. Type: integer (or Expression with resultType integer). */
		sourceRetryCount?: string | null;

		/** Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		sourceRetryWait?: string | null;

		/**
		 * Copy source type.
		 * Required
		 */
		type: string;
	}

	/** A copy activity source. */
	export interface CopySourceFormProperties {

		/** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
		maxConcurrentConnections: FormControl<string | null | undefined>,

		/** Source retry count. Type: integer (or Expression with resultType integer). */
		sourceRetryCount: FormControl<string | null | undefined>,

		/** Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		sourceRetryWait: FormControl<string | null | undefined>,

		/**
		 * Copy source type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCopySourceFormGroup() {
		return new FormGroup<CopySourceFormProperties>({
			maxConcurrentConnections: new FormControl<string | null | undefined>(undefined),
			sourceRetryCount: new FormControl<string | null | undefined>(undefined),
			sourceRetryWait: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Staging settings. */
	export interface StagingSettings {

		/** Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableCompression?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** The path to storage for storing the interim data. Type: string (or Expression with resultType string). */
		path?: string | null;
	}

	/** Staging settings. */
	export interface StagingSettingsFormProperties {

		/** Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableCompression: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** The path to storage for storing the interim data. Type: string (or Expression with resultType string). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateStagingSettingsFormGroup() {
		return new FormGroup<StagingSettingsFormProperties>({
			enableCompression: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All available types of copy behavior. */
	export enum CopyBehaviorType { PreserveHierarchy = 0, FlattenHierarchy = 1, MergeFiles = 2 }


	/** A copy activity translator. */
	export interface CopyTranslator {

		/**
		 * Copy translator type.
		 * Required
		 */
		type: string;
	}

	/** A copy activity translator. */
	export interface CopyTranslatorFormProperties {

		/**
		 * Copy translator type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCopyTranslatorFormGroup() {
		return new FormGroup<CopyTranslatorFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity sink for a CosmosDB (MongoDB API) database. */
	export interface CosmosDbMongoDbApiSink {

		/** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
		writeBehavior?: string | null;
	}

	/** A copy activity sink for a CosmosDB (MongoDB API) database. */
	export interface CosmosDbMongoDbApiSinkFormProperties {

		/** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
		writeBehavior: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbMongoDbApiSinkFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiSinkFormProperties>({
			writeBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for a CosmosDB (MongoDB API) database. */
	export interface CosmosDbMongoDbApiSource {

		/** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
		batchSize?: string | null;

		/** Cursor methods for Mongodb query */
		cursorMethods?: MongoDbCursorMethodsProperties;

		/** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
		filter?: string | null;

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout?: string | null;
	}

	/** A copy activity source for a CosmosDB (MongoDB API) database. */
	export interface CosmosDbMongoDbApiSourceFormProperties {

		/** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
		batchSize: FormControl<string | null | undefined>,

		/** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
		filter: FormControl<string | null | undefined>,

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbMongoDbApiSourceFormGroup() {
		return new FormGroup<CosmosDbMongoDbApiSourceFormProperties>({
			batchSize: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cursor methods for Mongodb query */
	export interface MongoDbCursorMethodsProperties {

		/** Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). */
		limit?: string | null;

		/** Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). */
		project?: string | null;

		/** Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). */
		skip?: string | null;

		/** Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
		sort?: string | null;
	}

	/** Cursor methods for Mongodb query */
	export interface MongoDbCursorMethodsPropertiesFormProperties {

		/** Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). */
		limit: FormControl<string | null | undefined>,

		/** Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). */
		project: FormControl<string | null | undefined>,

		/** Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). */
		skip: FormControl<string | null | undefined>,

		/** Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
		sort: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbCursorMethodsPropertiesFormGroup() {
		return new FormGroup<MongoDbCursorMethodsPropertiesFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure CosmosDB (SQL API) Collection sink. */
	export interface CosmosDbSqlApiSink {

		/** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
		writeBehavior?: string | null;
	}

	/** A copy activity Azure CosmosDB (SQL API) Collection sink. */
	export interface CosmosDbSqlApiSinkFormProperties {

		/** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
		writeBehavior: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbSqlApiSinkFormGroup() {
		return new FormGroup<CosmosDbSqlApiSinkFormProperties>({
			writeBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure CosmosDB (SQL API) Collection source. */
	export interface CosmosDbSqlApiSource {

		/** Page size of the result. Type: integer (or Expression with resultType integer). */
		pageSize?: string | null;

		/** Preferred regions. Type: array of strings (or Expression with resultType array of strings). */
		preferredRegions?: string | null;

		/** SQL API query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Azure CosmosDB (SQL API) Collection source. */
	export interface CosmosDbSqlApiSourceFormProperties {

		/** Page size of the result. Type: integer (or Expression with resultType integer). */
		pageSize: FormControl<string | null | undefined>,

		/** Preferred regions. Type: array of strings (or Expression with resultType array of strings). */
		preferredRegions: FormControl<string | null | undefined>,

		/** SQL API query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateCosmosDbSqlApiSourceFormGroup() {
		return new FormGroup<CosmosDbSqlApiSourceFormProperties>({
			pageSize: new FormControl<string | null | undefined>(undefined),
			preferredRegions: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Couchbase server source. */
	export interface CouchbaseSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Couchbase server source. */
	export interface CouchbaseSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateCouchbaseSourceFormGroup() {
		return new FormGroup<CouchbaseSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom activity type. */
	export interface CustomActivity extends ExecutionActivity {

		/**
		 * Custom activity properties.
		 * Required
		 */
		typeProperties: CustomActivityTypeProperties;
	}

	/** Custom activity type. */
	export interface CustomActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateCustomActivityFormGroup() {
		return new FormGroup<CustomActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Reference objects for custom activity */
	export interface CustomActivityReferenceObject {

		/** Dataset references. */
		CustomActivityReferenceObjectDatasets?: Array<CustomActivityReferenceObjectDatasets>;

		/** Linked service references. */
		CustomActivityReferenceObjectLinkedServices?: Array<CustomActivityReferenceObjectLinkedServices>;
	}

	/** Reference objects for custom activity */
	export interface CustomActivityReferenceObjectFormProperties {
	}
	export function CreateCustomActivityReferenceObjectFormGroup() {
		return new FormGroup<CustomActivityReferenceObjectFormProperties>({
		});

	}

	export interface CustomActivityReferenceObjectDatasets {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: CopyActivityInputsType;
	}
	export interface CustomActivityReferenceObjectDatasetsFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: FormControl<CopyActivityInputsType | null | undefined>,
	}
	export function CreateCustomActivityReferenceObjectDatasetsFormGroup() {
		return new FormGroup<CustomActivityReferenceObjectDatasetsFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CopyActivityInputsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomActivityReferenceObjectLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface CustomActivityReferenceObjectLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateCustomActivityReferenceObjectLinkedServicesFormGroup() {
		return new FormGroup<CustomActivityReferenceObjectLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomActivityReferenceObjectLinkedServicesType { LinkedServiceReference = 0 }


	/** Custom activity properties. */
	export interface CustomActivityTypeProperties {

		/**
		 * Command for custom activity Type: string (or Expression with resultType string).
		 * Required
		 */
		command: string;

		/** User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. */
		extendedProperties?: {[id: string]: any };

		/** Folder path for resource files Type: string (or Expression with resultType string). */
		folderPath?: string | null;

		/** Reference objects for custom activity */
		referenceObjects?: CustomActivityReferenceObject;

		/** Linked service reference type. */
		resourceLinkedService?: any;

		/** The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). */
		retentionTimeInDays?: string | null;
	}

	/** Custom activity properties. */
	export interface CustomActivityTypePropertiesFormProperties {

		/**
		 * Command for custom activity Type: string (or Expression with resultType string).
		 * Required
		 */
		command: FormControl<string | null | undefined>,

		/** User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. */
		extendedProperties: FormControl<{[id: string]: any } | null | undefined>,

		/** Folder path for resource files Type: string (or Expression with resultType string). */
		folderPath: FormControl<string | null | undefined>,

		/** Linked service reference type. */
		resourceLinkedService: FormControl<any | null | undefined>,

		/** The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). */
		retentionTimeInDays: FormControl<string | null | undefined>,
	}
	export function CreateCustomActivityTypePropertiesFormGroup() {
		return new FormGroup<CustomActivityTypePropertiesFormProperties>({
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extendedProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			resourceLinkedService: new FormControl<any | null | undefined>(undefined),
			retentionTimeInDays: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Default value. */
	export interface DWCopyCommandDefaultValue {

		/** Column name. Type: object (or Expression with resultType string). */
		columnName?: string | null;

		/** The default value of the column. Type: object (or Expression with resultType string). */
		defaultValue?: string | null;
	}

	/** Default value. */
	export interface DWCopyCommandDefaultValueFormProperties {

		/** Column name. Type: object (or Expression with resultType string). */
		columnName: FormControl<string | null | undefined>,

		/** The default value of the column. Type: object (or Expression with resultType string). */
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateDWCopyCommandDefaultValueFormGroup() {
		return new FormGroup<DWCopyCommandDefaultValueFormProperties>({
			columnName: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DW Copy Command settings. */
	export interface DWCopyCommandSettings {

		/** Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } */
		additionalOptions?: {[id: string]: string };

		/** Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). */
		defaultValues?: Array<DWCopyCommandDefaultValue>;
	}

	/** DW Copy Command settings. */
	export interface DWCopyCommandSettingsFormProperties {

		/** Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } */
		additionalOptions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDWCopyCommandSettingsFormGroup() {
		return new FormGroup<DWCopyCommandSettingsFormProperties>({
			additionalOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics U-SQL activity. */
	export interface DataLakeAnalyticsUSQLActivity extends ExecutionActivity {

		/**
		 * DataLakeAnalyticsU-SQL activity properties.
		 * Required
		 */
		typeProperties: DataLakeAnalyticsUSQLActivityTypeProperties;
	}

	/** Data Lake Analytics U-SQL activity. */
	export interface DataLakeAnalyticsUSQLActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateDataLakeAnalyticsUSQLActivityFormGroup() {
		return new FormGroup<DataLakeAnalyticsUSQLActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** DataLakeAnalyticsU-SQL activity properties. */
	export interface DataLakeAnalyticsUSQLActivityTypeProperties {

		/** Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). */
		compilationMode?: string | null;

		/** The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. */
		degreeOfParallelism?: string | null;

		/** Parameters for U-SQL job request. */
		parameters?: {[id: string]: any };

		/** Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. */
		priority?: string | null;

		/** Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). */
		runtimeVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		scriptLinkedService: any;

		/**
		 * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
		 * Required
		 */
		scriptPath: string;
	}

	/** DataLakeAnalyticsU-SQL activity properties. */
	export interface DataLakeAnalyticsUSQLActivityTypePropertiesFormProperties {

		/** Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). */
		compilationMode: FormControl<string | null | undefined>,

		/** The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. */
		degreeOfParallelism: FormControl<string | null | undefined>,

		/** Parameters for U-SQL job request. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. */
		priority: FormControl<string | null | undefined>,

		/** Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). */
		runtimeVersion: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		scriptLinkedService: FormControl<any | null | undefined>,

		/**
		 * Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string).
		 * Required
		 */
		scriptPath: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsUSQLActivityTypePropertiesFormGroup() {
		return new FormGroup<DataLakeAnalyticsUSQLActivityTypePropertiesFormProperties>({
			compilationMode: new FormControl<string | null | undefined>(undefined),
			degreeOfParallelism: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			scriptLinkedService: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			scriptPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DatabricksNotebook activity. */
	export interface DatabricksNotebookActivity extends ExecutionActivity {

		/**
		 * Databricks Notebook activity properties.
		 * Required
		 */
		typeProperties: DatabricksNotebookActivityTypeProperties;
	}

	/** DatabricksNotebook activity. */
	export interface DatabricksNotebookActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateDatabricksNotebookActivityFormGroup() {
		return new FormGroup<DatabricksNotebookActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Databricks Notebook activity properties. */
	export interface DatabricksNotebookActivityTypeProperties {

		/** Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. */
		baseParameters?: {[id: string]: any };

		/** A list of libraries to be installed on the cluster that will execute the job. */
		libraries?: Array<string>;

		/**
		 * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
		 * Required
		 */
		notebookPath: string;
	}

	/** Databricks Notebook activity properties. */
	export interface DatabricksNotebookActivityTypePropertiesFormProperties {

		/** Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. */
		baseParameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string).
		 * Required
		 */
		notebookPath: FormControl<string | null | undefined>,
	}
	export function CreateDatabricksNotebookActivityTypePropertiesFormGroup() {
		return new FormGroup<DatabricksNotebookActivityTypePropertiesFormProperties>({
			baseParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			notebookPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DatabricksSparkJar activity. */
	export interface DatabricksSparkJarActivity extends ExecutionActivity {

		/**
		 * Databricks SparkJar activity properties.
		 * Required
		 */
		typeProperties: DatabricksSparkJarActivityTypeProperties;
	}

	/** DatabricksSparkJar activity. */
	export interface DatabricksSparkJarActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateDatabricksSparkJarActivityFormGroup() {
		return new FormGroup<DatabricksSparkJarActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Databricks SparkJar activity properties. */
	export interface DatabricksSparkJarActivityTypeProperties {

		/** A list of libraries to be installed on the cluster that will execute the job. */
		libraries?: Array<string>;

		/**
		 * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
		 * Required
		 */
		mainClassName: string;

		/** Parameters that will be passed to the main method. */
		parameters?: Array<string>;
	}

	/** Databricks SparkJar activity properties. */
	export interface DatabricksSparkJarActivityTypePropertiesFormProperties {

		/**
		 * The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string).
		 * Required
		 */
		mainClassName: FormControl<string | null | undefined>,
	}
	export function CreateDatabricksSparkJarActivityTypePropertiesFormGroup() {
		return new FormGroup<DatabricksSparkJarActivityTypePropertiesFormProperties>({
			mainClassName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DatabricksSparkPython activity. */
	export interface DatabricksSparkPythonActivity extends ExecutionActivity {

		/**
		 * Databricks SparkPython activity properties.
		 * Required
		 */
		typeProperties: DatabricksSparkPythonActivityTypeProperties;
	}

	/** DatabricksSparkPython activity. */
	export interface DatabricksSparkPythonActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateDatabricksSparkPythonActivityFormGroup() {
		return new FormGroup<DatabricksSparkPythonActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Databricks SparkPython activity properties. */
	export interface DatabricksSparkPythonActivityTypeProperties {

		/** A list of libraries to be installed on the cluster that will execute the job. */
		libraries?: Array<string>;

		/** Command line parameters that will be passed to the Python file. */
		parameters?: Array<string>;

		/**
		 * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
		 * Required
		 */
		pythonFile: string;
	}

	/** Databricks SparkPython activity properties. */
	export interface DatabricksSparkPythonActivityTypePropertiesFormProperties {

		/**
		 * The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string).
		 * Required
		 */
		pythonFile: FormControl<string | null | undefined>,
	}
	export function CreateDatabricksSparkPythonActivityTypePropertiesFormGroup() {
		return new FormGroup<DatabricksSparkPythonActivityTypePropertiesFormProperties>({
			pythonFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity source for Db2 databases. */
	export interface Db2Source {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for Db2 databases. */
	export interface Db2SourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateDb2SourceFormGroup() {
		return new FormGroup<Db2SourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Delete activity. */
	export interface DeleteActivity extends ExecutionActivity {

		/**
		 * Delete activity properties.
		 * Required
		 */
		typeProperties: DeleteActivityTypeProperties;
	}

	/** Delete activity. */
	export interface DeleteActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateDeleteActivityFormGroup() {
		return new FormGroup<DeleteActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Delete activity properties. */
	export interface DeleteActivityTypeProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: any;

		/** Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableLogging?: string | null;

		/** Log storage settings. */
		logStorageSettings?: LogStorageSettings;

		/**
		 * The max concurrent connections to connect data source at the same time.
		 * Minimum: 1
		 */
		maxConcurrentConnections?: number | null;

		/** If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;
	}

	/** Delete activity properties. */
	export interface DeleteActivityTypePropertiesFormProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: FormControl<any | null | undefined>,

		/** Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). */
		enableLogging: FormControl<string | null | undefined>,

		/**
		 * The max concurrent connections to connect data source at the same time.
		 * Minimum: 1
		 */
		maxConcurrentConnections: FormControl<number | null | undefined>,

		/** If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActivityTypePropertiesFormGroup() {
		return new FormGroup<DeleteActivityTypePropertiesFormProperties>({
			dataset: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			enableLogging: new FormControl<string | null | undefined>(undefined),
			maxConcurrentConnections: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			recursive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log storage settings. */
	export interface LogStorageSettings {

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
		path?: string | null;
	}

	/** Log storage settings. */
	export interface LogStorageSettingsFormProperties {

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateLogStorageSettingsFormGroup() {
		return new FormGroup<LogStorageSettingsFormProperties>({
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Delimited text read settings. */
	export interface DelimitedTextReadSettings {

		/** Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). */
		skipLineCount?: string | null;
	}

	/** Delimited text read settings. */
	export interface DelimitedTextReadSettingsFormProperties {

		/** Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). */
		skipLineCount: FormControl<string | null | undefined>,
	}
	export function CreateDelimitedTextReadSettingsFormGroup() {
		return new FormGroup<DelimitedTextReadSettingsFormProperties>({
			skipLineCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity DelimitedText sink. */
	export interface DelimitedTextSink {

		/** Delimited text write settings. */
		formatSettings?: DelimitedTextWriteSettings;

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity DelimitedText sink. */
	export interface DelimitedTextSinkFormProperties {
	}
	export function CreateDelimitedTextSinkFormGroup() {
		return new FormGroup<DelimitedTextSinkFormProperties>({
		});

	}


	/** Delimited text write settings. */
	export interface DelimitedTextWriteSettings {

		/**
		 * The file extension used to create the files. Type: string (or Expression with resultType string).
		 * Required
		 */
		fileExtension: string;

		/** Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). */
		quoteAllText?: string | null;
	}

	/** Delimited text write settings. */
	export interface DelimitedTextWriteSettingsFormProperties {

		/**
		 * The file extension used to create the files. Type: string (or Expression with resultType string).
		 * Required
		 */
		fileExtension: FormControl<string | null | undefined>,

		/** Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). */
		quoteAllText: FormControl<string | null | undefined>,
	}
	export function CreateDelimitedTextWriteSettingsFormGroup() {
		return new FormGroup<DelimitedTextWriteSettingsFormProperties>({
			fileExtension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quoteAllText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity DelimitedText source. */
	export interface DelimitedTextSource {

		/** Delimited text read settings. */
		formatSettings?: DelimitedTextReadSettings;

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity DelimitedText source. */
	export interface DelimitedTextSourceFormProperties {
	}
	export function CreateDelimitedTextSourceFormGroup() {
		return new FormGroup<DelimitedTextSourceFormProperties>({
		});

	}


	/** Distcp settings. */
	export interface DistcpSettings {

		/** Specifies the Distcp options. Type: string (or Expression with resultType string). */
		distcpOptions?: string | null;

		/**
		 * Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		resourceManagerEndpoint: string;

		/**
		 * Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).
		 * Required
		 */
		tempScriptPath: string;
	}

	/** Distcp settings. */
	export interface DistcpSettingsFormProperties {

		/** Specifies the Distcp options. Type: string (or Expression with resultType string). */
		distcpOptions: FormControl<string | null | undefined>,

		/**
		 * Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string).
		 * Required
		 */
		resourceManagerEndpoint: FormControl<string | null | undefined>,

		/**
		 * Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string).
		 * Required
		 */
		tempScriptPath: FormControl<string | null | undefined>,
	}
	export function CreateDistcpSettingsFormGroup() {
		return new FormGroup<DistcpSettingsFormProperties>({
			distcpOptions: new FormControl<string | null | undefined>(undefined),
			resourceManagerEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tempScriptPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Document Database Collection sink. */
	export interface DocumentDbCollectionSink {

		/** Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). */
		nestingSeparator?: string | null;

		/** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
		writeBehavior?: string | null;
	}

	/** A copy activity Document Database Collection sink. */
	export interface DocumentDbCollectionSinkFormProperties {

		/** Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). */
		nestingSeparator: FormControl<string | null | undefined>,

		/** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
		writeBehavior: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDbCollectionSinkFormGroup() {
		return new FormGroup<DocumentDbCollectionSinkFormProperties>({
			nestingSeparator: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Document Database Collection source. */
	export interface DocumentDbCollectionSource {

		/** Nested properties separator. Type: string (or Expression with resultType string). */
		nestingSeparator?: string | null;

		/** Documents query. Type: string (or Expression with resultType string). */
		query?: string | null;

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout?: string | null;
	}

	/** A copy activity Document Database Collection source. */
	export interface DocumentDbCollectionSourceFormProperties {

		/** Nested properties separator. Type: string (or Expression with resultType string). */
		nestingSeparator: FormControl<string | null | undefined>,

		/** Documents query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDbCollectionSourceFormGroup() {
		return new FormGroup<DocumentDbCollectionSourceFormProperties>({
			nestingSeparator: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Drill server source. */
	export interface DrillSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Drill server source. */
	export interface DrillSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateDrillSourceFormGroup() {
		return new FormGroup<DrillSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Dynamics AX source. */
	export interface DynamicsAXSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Dynamics AX source. */
	export interface DynamicsAXSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsAXSourceFormGroup() {
		return new FormGroup<DynamicsAXSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Dynamics CRM sink. */
	export interface DynamicsCrmSink {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName?: string | null;

		/** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues?: string | null;

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: CommonDataServiceForAppsSinkWriteBehavior;
	}

	/** A copy activity Dynamics CRM sink. */
	export interface DynamicsCrmSinkFormProperties {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName: FormControl<string | null | undefined>,

		/** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues: FormControl<string | null | undefined>,

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>,
	}
	export function CreateDynamicsCrmSinkFormGroup() {
		return new FormGroup<DynamicsCrmSinkFormProperties>({
			alternateKeyName: new FormControl<string | null | undefined>(undefined),
			ignoreNullValues: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Dynamics CRM source. */
	export interface DynamicsCrmSource {

		/** FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Dynamics CRM source. */
	export interface DynamicsCrmSourceFormProperties {

		/** FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsCrmSourceFormGroup() {
		return new FormGroup<DynamicsCrmSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Dynamics sink. */
	export interface DynamicsSink {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName?: string | null;

		/** The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues?: string | null;

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: CommonDataServiceForAppsSinkWriteBehavior;
	}

	/** A copy activity Dynamics sink. */
	export interface DynamicsSinkFormProperties {

		/** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
		alternateKeyName: FormControl<string | null | undefined>,

		/** The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues: FormControl<string | null | undefined>,

		/**
		 * The write behavior for the operation.
		 * Required
		 */
		writeBehavior: FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>,
	}
	export function CreateDynamicsSinkFormGroup() {
		return new FormGroup<DynamicsSinkFormProperties>({
			alternateKeyName: new FormControl<string | null | undefined>(undefined),
			ignoreNullValues: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<CommonDataServiceForAppsSinkWriteBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Dynamics source. */
	export interface DynamicsSource {

		/** FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Dynamics source. */
	export interface DynamicsSourceFormProperties {

		/** FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateDynamicsSourceFormGroup() {
		return new FormGroup<DynamicsSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Eloqua server source. */
	export interface EloquaSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Eloqua server source. */
	export interface EloquaSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateEloquaSourceFormGroup() {
		return new FormGroup<EloquaSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Execute data flow activity. */
	export interface ExecuteDataFlowActivity extends ExecutionActivity {

		/**
		 * Execute data flow activity properties.
		 * Required
		 */
		typeProperties: ExecuteDataFlowActivityTypeProperties;
	}

	/** Execute data flow activity. */
	export interface ExecuteDataFlowActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateExecuteDataFlowActivityFormGroup() {
		return new FormGroup<ExecuteDataFlowActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Execute data flow activity properties. */
	export interface ExecuteDataFlowActivityTypeProperties {

		/** Compute properties for data flow activity. */
		compute?: ExecuteDataFlowActivityTypePropertiesCompute;

		/**
		 * Data flow reference type.
		 * Required
		 */
		dataFlow: any;

		/** Integration runtime reference type. */
		integrationRuntime?: any;

		/** Staging info for execute data flow activity. */
		staging?: any;
	}

	/** Execute data flow activity properties. */
	export interface ExecuteDataFlowActivityTypePropertiesFormProperties {

		/**
		 * Data flow reference type.
		 * Required
		 */
		dataFlow: FormControl<any | null | undefined>,

		/** Integration runtime reference type. */
		integrationRuntime: FormControl<any | null | undefined>,

		/** Staging info for execute data flow activity. */
		staging: FormControl<any | null | undefined>,
	}
	export function CreateExecuteDataFlowActivityTypePropertiesFormGroup() {
		return new FormGroup<ExecuteDataFlowActivityTypePropertiesFormProperties>({
			dataFlow: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			integrationRuntime: new FormControl<any | null | undefined>(undefined),
			staging: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ExecuteDataFlowActivityTypePropertiesCompute {

		/** Compute type of the cluster which will execute data flow job. */
		computeType?: ExecuteDataFlowActivityTypePropertiesComputeComputeType | null;

		/** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
		coreCount?: number | null;
	}
	export interface ExecuteDataFlowActivityTypePropertiesComputeFormProperties {

		/** Compute type of the cluster which will execute data flow job. */
		computeType: FormControl<ExecuteDataFlowActivityTypePropertiesComputeComputeType | null | undefined>,

		/** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
		coreCount: FormControl<number | null | undefined>,
	}
	export function CreateExecuteDataFlowActivityTypePropertiesComputeFormGroup() {
		return new FormGroup<ExecuteDataFlowActivityTypePropertiesComputeFormProperties>({
			computeType: new FormControl<ExecuteDataFlowActivityTypePropertiesComputeComputeType | null | undefined>(undefined),
			coreCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExecuteDataFlowActivityTypePropertiesComputeComputeType { General = 0, MemoryOptimized = 1, ComputeOptimized = 2 }


	/** Execute pipeline activity. */
	export interface ExecutePipelineActivity extends ControlActivity {

		/**
		 * Execute pipeline activity properties.
		 * Required
		 */
		typeProperties: ExecutePipelineActivityTypeProperties;
	}

	/** Execute pipeline activity. */
	export interface ExecutePipelineActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateExecutePipelineActivityFormGroup() {
		return new FormGroup<ExecutePipelineActivityFormProperties>({
		});

	}


	/** Execute pipeline activity properties. */
	export interface ExecutePipelineActivityTypeProperties {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Pipeline reference type.
		 * Required
		 */
		pipeline: any;

		/** Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. */
		waitOnCompletion?: boolean | null;
	}

	/** Execute pipeline activity properties. */
	export interface ExecutePipelineActivityTypePropertiesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Pipeline reference type.
		 * Required
		 */
		pipeline: FormControl<any | null | undefined>,

		/** Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. */
		waitOnCompletion: FormControl<boolean | null | undefined>,
	}
	export function CreateExecutePipelineActivityTypePropertiesFormGroup() {
		return new FormGroup<ExecutePipelineActivityTypePropertiesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			pipeline: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			waitOnCompletion: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Execute SSIS package activity. */
	export interface ExecuteSSISPackageActivity extends ExecutionActivity {

		/**
		 * Execute SSIS package activity properties.
		 * Required
		 */
		typeProperties: ExecuteSSISPackageActivityTypeProperties;
	}

	/** Execute SSIS package activity. */
	export interface ExecuteSSISPackageActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateExecuteSSISPackageActivityFormGroup() {
		return new FormGroup<ExecuteSSISPackageActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Execute SSIS package activity properties. */
	export interface ExecuteSSISPackageActivityTypeProperties {

		/**
		 * Integration runtime reference type.
		 * Required
		 */
		connectVia: any;

		/** The environment path to execute the SSIS package. Type: string (or Expression with resultType string). */
		environmentPath?: string | null;

		/** SSIS package execution credential. */
		executionCredential?: SSISExecutionCredential;

		/** SSIS package execution log location */
		logLocation?: SSISLogLocation;

		/** The logging level of SSIS package execution. Type: string (or Expression with resultType string). */
		loggingLevel?: string | null;

		/** The package level connection managers to execute the SSIS package. */
		packageConnectionManagers?: {[id: string]: SSISConnectionManager };

		/**
		 * SSIS package location.
		 * Required
		 */
		packageLocation: SSISPackageLocation;

		/** The package level parameters to execute the SSIS package. */
		packageParameters?: {[id: string]: SSISExecutionParameter };

		/** The project level connection managers to execute the SSIS package. */
		projectConnectionManagers?: {[id: string]: SSISConnectionManager };

		/** The project level parameters to execute the SSIS package. */
		projectParameters?: {[id: string]: SSISExecutionParameter };

		/** The property overrides to execute the SSIS package. */
		propertyOverrides?: {[id: string]: SSISPropertyOverride };

		/** Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). */
		runtime?: string | null;
	}

	/** Execute SSIS package activity properties. */
	export interface ExecuteSSISPackageActivityTypePropertiesFormProperties {

		/**
		 * Integration runtime reference type.
		 * Required
		 */
		connectVia: FormControl<any | null | undefined>,

		/** The environment path to execute the SSIS package. Type: string (or Expression with resultType string). */
		environmentPath: FormControl<string | null | undefined>,

		/** The logging level of SSIS package execution. Type: string (or Expression with resultType string). */
		loggingLevel: FormControl<string | null | undefined>,

		/** The package level connection managers to execute the SSIS package. */
		packageConnectionManagers: FormControl<{[id: string]: SSISConnectionManager } | null | undefined>,

		/** The package level parameters to execute the SSIS package. */
		packageParameters: FormControl<{[id: string]: SSISExecutionParameter } | null | undefined>,

		/** The project level connection managers to execute the SSIS package. */
		projectConnectionManagers: FormControl<{[id: string]: SSISConnectionManager } | null | undefined>,

		/** The project level parameters to execute the SSIS package. */
		projectParameters: FormControl<{[id: string]: SSISExecutionParameter } | null | undefined>,

		/** The property overrides to execute the SSIS package. */
		propertyOverrides: FormControl<{[id: string]: SSISPropertyOverride } | null | undefined>,

		/** Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). */
		runtime: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSSISPackageActivityTypePropertiesFormGroup() {
		return new FormGroup<ExecuteSSISPackageActivityTypePropertiesFormProperties>({
			connectVia: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			environmentPath: new FormControl<string | null | undefined>(undefined),
			loggingLevel: new FormControl<string | null | undefined>(undefined),
			packageConnectionManagers: new FormControl<{[id: string]: SSISConnectionManager } | null | undefined>(undefined),
			packageParameters: new FormControl<{[id: string]: SSISExecutionParameter } | null | undefined>(undefined),
			projectConnectionManagers: new FormControl<{[id: string]: SSISConnectionManager } | null | undefined>(undefined),
			projectParameters: new FormControl<{[id: string]: SSISExecutionParameter } | null | undefined>(undefined),
			propertyOverrides: new FormControl<{[id: string]: SSISPropertyOverride } | null | undefined>(undefined),
			runtime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSIS package execution credential. */
	export interface SSISExecutionCredential {

		/**
		 * Domain for windows authentication.
		 * Required
		 */
		domain: string;

		/**
		 * Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
		 * Required
		 */
		password: SSISExecutionCredentialPassword;

		/**
		 * UseName for windows authentication.
		 * Required
		 */
		userName: string;
	}

	/** SSIS package execution credential. */
	export interface SSISExecutionCredentialFormProperties {

		/**
		 * Domain for windows authentication.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * UseName for windows authentication.
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSSISExecutionCredentialFormGroup() {
		return new FormGroup<SSISExecutionCredentialFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSISExecutionCredentialPassword {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: string;
	}
	export interface SSISExecutionCredentialPasswordFormProperties {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSSISExecutionCredentialPasswordFormGroup() {
		return new FormGroup<SSISExecutionCredentialPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SSIS package execution log location */
	export interface SSISLogLocation {

		/**
		 * The SSIS package execution log path. Type: string (or Expression with resultType string).
		 * Required
		 */
		logPath: string;

		/**
		 * The type of SSIS log location.
		 * Required
		 */
		type: SSISLogLocationType;

		/**
		 * SSIS package execution log location properties.
		 * Required
		 */
		typeProperties: SSISLogLocationTypeProperties;
	}

	/** SSIS package execution log location */
	export interface SSISLogLocationFormProperties {

		/**
		 * The SSIS package execution log path. Type: string (or Expression with resultType string).
		 * Required
		 */
		logPath: FormControl<string | null | undefined>,

		/**
		 * The type of SSIS log location.
		 * Required
		 */
		type: FormControl<SSISLogLocationType | null | undefined>,
	}
	export function CreateSSISLogLocationFormGroup() {
		return new FormGroup<SSISLogLocationFormProperties>({
			logPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SSISLogLocationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SSISLogLocationType { File = 0 }


	/** SSIS package execution log location properties. */
	export interface SSISLogLocationTypeProperties {

		/** SSIS access credential. */
		accessCredential?: SSISAccessCredential;

		/** Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		logRefreshInterval?: string | null;
	}

	/** SSIS package execution log location properties. */
	export interface SSISLogLocationTypePropertiesFormProperties {

		/** Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		logRefreshInterval: FormControl<string | null | undefined>,
	}
	export function CreateSSISLogLocationTypePropertiesFormGroup() {
		return new FormGroup<SSISLogLocationTypePropertiesFormProperties>({
			logRefreshInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSIS access credential. */
	export interface SSISAccessCredential {

		/**
		 * Domain for windows authentication.
		 * Required
		 */
		domain: string;

		/**
		 * The base definition of a secret type.
		 * Required
		 */
		password: SSISAccessCredentialPassword;

		/**
		 * UseName for windows authentication.
		 * Required
		 */
		userName: string;
	}

	/** SSIS access credential. */
	export interface SSISAccessCredentialFormProperties {

		/**
		 * Domain for windows authentication.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * UseName for windows authentication.
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSSISAccessCredentialFormGroup() {
		return new FormGroup<SSISAccessCredentialFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSISAccessCredentialPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SSISAccessCredentialPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSSISAccessCredentialPasswordFormGroup() {
		return new FormGroup<SSISAccessCredentialPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SSIS Connection Manager. */
	export interface SSISConnectionManager {
	}

	/** SSIS Connection Manager. */
	export interface SSISConnectionManagerFormProperties {
	}
	export function CreateSSISConnectionManagerFormGroup() {
		return new FormGroup<SSISConnectionManagerFormProperties>({
		});

	}


	/** SSIS package location. */
	export interface SSISPackageLocation {

		/** The SSIS package path. Type: string (or Expression with resultType string). */
		packagePath?: string | null;

		/** The type of SSIS package location. */
		type?: SSISPackageLocationType | null;

		/** SSIS package location properties. */
		typeProperties?: SSISPackageLocationTypeProperties;
	}

	/** SSIS package location. */
	export interface SSISPackageLocationFormProperties {

		/** The SSIS package path. Type: string (or Expression with resultType string). */
		packagePath: FormControl<string | null | undefined>,

		/** The type of SSIS package location. */
		type: FormControl<SSISPackageLocationType | null | undefined>,
	}
	export function CreateSSISPackageLocationFormGroup() {
		return new FormGroup<SSISPackageLocationFormProperties>({
			packagePath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SSISPackageLocationType | null | undefined>(undefined),
		});

	}

	export enum SSISPackageLocationType { SSISDB = 0, File = 1, InlinePackage = 2 }


	/** SSIS package location properties. */
	export interface SSISPackageLocationTypeProperties {

		/** SSIS access credential. */
		accessCredential?: SSISAccessCredential;

		/** The embedded child package list. */
		childPackages?: Array<SSISChildPackage>;

		/** The configuration file of the package execution. Type: string (or Expression with resultType string). */
		configurationPath?: string | null;

		/** The embedded package content. Type: string (or Expression with resultType string). */
		packageContent?: string | null;

		/** The embedded package last modified date. */
		packageLastModifiedDate?: string | null;

		/** The package name. */
		packageName?: string | null;

		/** The base definition of a secret type. */
		packagePassword?: SSISPackageLocationTypePropertiesPackagePassword;
	}

	/** SSIS package location properties. */
	export interface SSISPackageLocationTypePropertiesFormProperties {

		/** The configuration file of the package execution. Type: string (or Expression with resultType string). */
		configurationPath: FormControl<string | null | undefined>,

		/** The embedded package content. Type: string (or Expression with resultType string). */
		packageContent: FormControl<string | null | undefined>,

		/** The embedded package last modified date. */
		packageLastModifiedDate: FormControl<string | null | undefined>,

		/** The package name. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateSSISPackageLocationTypePropertiesFormGroup() {
		return new FormGroup<SSISPackageLocationTypePropertiesFormProperties>({
			configurationPath: new FormControl<string | null | undefined>(undefined),
			packageContent: new FormControl<string | null | undefined>(undefined),
			packageLastModifiedDate: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSIS embedded child package. */
	export interface SSISChildPackage {

		/**
		 * Content for embedded child package. Type: string (or Expression with resultType string).
		 * Required
		 */
		packageContent: string;

		/** Last modified date for embedded child package. */
		packageLastModifiedDate?: string | null;

		/** Name for embedded child package. */
		packageName?: string | null;

		/**
		 * Path for embedded child package. Type: string (or Expression with resultType string).
		 * Required
		 */
		packagePath: string;
	}

	/** SSIS embedded child package. */
	export interface SSISChildPackageFormProperties {

		/**
		 * Content for embedded child package. Type: string (or Expression with resultType string).
		 * Required
		 */
		packageContent: FormControl<string | null | undefined>,

		/** Last modified date for embedded child package. */
		packageLastModifiedDate: FormControl<string | null | undefined>,

		/** Name for embedded child package. */
		packageName: FormControl<string | null | undefined>,

		/**
		 * Path for embedded child package. Type: string (or Expression with resultType string).
		 * Required
		 */
		packagePath: FormControl<string | null | undefined>,
	}
	export function CreateSSISChildPackageFormGroup() {
		return new FormGroup<SSISChildPackageFormProperties>({
			packageContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packageLastModifiedDate: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packagePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SSISPackageLocationTypePropertiesPackagePassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface SSISPackageLocationTypePropertiesPackagePasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSSISPackageLocationTypePropertiesPackagePasswordFormGroup() {
		return new FormGroup<SSISPackageLocationTypePropertiesPackagePasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SSIS execution parameter. */
	export interface SSISExecutionParameter {

		/**
		 * SSIS package execution parameter value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: string;
	}

	/** SSIS execution parameter. */
	export interface SSISExecutionParameterFormProperties {

		/**
		 * SSIS package execution parameter value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSSISExecutionParameterFormGroup() {
		return new FormGroup<SSISExecutionParameterFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SSIS property override. */
	export interface SSISPropertyOverride {

		/** Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true */
		isSensitive?: boolean | null;

		/**
		 * SSIS package property override value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: string;
	}

	/** SSIS property override. */
	export interface SSISPropertyOverrideFormProperties {

		/** Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true */
		isSensitive: FormControl<boolean | null | undefined>,

		/**
		 * SSIS package property override value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSSISPropertyOverrideFormGroup() {
		return new FormGroup<SSISPropertyOverrideFormProperties>({
			isSensitive: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base class for all execution activities. */
	export interface ExecutionActivity extends Activity {

		/** Linked service reference type. */
		linkedServiceName?: any;

		/** Execution policy for an activity. */
		policy?: ActivityPolicy;
	}

	/** Base class for all execution activities. */
	export interface ExecutionActivityFormProperties extends ActivityFormProperties {

		/** Linked service reference type. */
		linkedServiceName: FormControl<any | null | undefined>,
	}
	export function CreateExecutionActivityFormGroup() {
		return new FormGroup<ExecutionActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** File server read settings. */
	export interface FileServerReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** FileServer wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** FileServer wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** File server read settings. */
	export interface FileServerReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** FileServer wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** FileServer wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateFileServerReadSettingsFormGroup() {
		return new FormGroup<FileServerReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File server write settings. */
	export interface FileServerWriteSettings {
	}

	/** File server write settings. */
	export interface FileServerWriteSettingsFormProperties {
	}
	export function CreateFileServerWriteSettingsFormGroup() {
		return new FormGroup<FileServerWriteSettingsFormProperties>({
		});

	}


	/** A copy activity file system sink. */
	export interface FileSystemSink {

		/** The type of copy behavior for copy sink. */
		copyBehavior?: string | null;
	}

	/** A copy activity file system sink. */
	export interface FileSystemSinkFormProperties {

		/** The type of copy behavior for copy sink. */
		copyBehavior: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemSinkFormGroup() {
		return new FormGroup<FileSystemSinkFormProperties>({
			copyBehavior: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity file system source. */
	export interface FileSystemSource {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;
	}

	/** A copy activity file system source. */
	export interface FileSystemSourceFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemSourceFormGroup() {
		return new FormGroup<FileSystemSourceFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter and return results from input array based on the conditions. */
	export interface FilterActivity extends ControlActivity {

		/**
		 * Filter activity properties.
		 * Required
		 */
		typeProperties: FilterActivityTypeProperties;
	}

	/** Filter and return results from input array based on the conditions. */
	export interface FilterActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateFilterActivityFormGroup() {
		return new FormGroup<FilterActivityFormProperties>({
		});

	}


	/** Filter activity properties. */
	export interface FilterActivityTypeProperties {

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		condition: FilterActivityTypePropertiesCondition;

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		items: FilterActivityTypePropertiesItems;
	}

	/** Filter activity properties. */
	export interface FilterActivityTypePropertiesFormProperties {
	}
	export function CreateFilterActivityTypePropertiesFormGroup() {
		return new FormGroup<FilterActivityTypePropertiesFormProperties>({
		});

	}

	export interface FilterActivityTypePropertiesCondition {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface FilterActivityTypePropertiesConditionFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterActivityTypePropertiesConditionFormGroup() {
		return new FormGroup<FilterActivityTypePropertiesConditionFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterActivityTypePropertiesConditionType { Expression = 0 }

	export interface FilterActivityTypePropertiesItems {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface FilterActivityTypePropertiesItemsFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterActivityTypePropertiesItemsFormGroup() {
		return new FormGroup<FilterActivityTypePropertiesItemsFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This activity is used for iterating over a collection and execute given activities. */
	export interface ForEachActivity extends ControlActivity {

		/**
		 * ForEach activity properties.
		 * Required
		 */
		typeProperties: ForEachActivityTypeProperties;
	}

	/** This activity is used for iterating over a collection and execute given activities. */
	export interface ForEachActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateForEachActivityFormGroup() {
		return new FormGroup<ForEachActivityFormProperties>({
		});

	}


	/** ForEach activity properties. */
	export interface ForEachActivityTypeProperties {

		/**
		 * List of activities to execute .
		 * Required
		 */
		activities: Array<Activity>;

		/**
		 * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
		 * Maximum: 50
		 */
		batchCount?: number | null;

		/** Should the loop be executed in sequence or in parallel (max 50) */
		isSequential?: boolean | null;

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		items: ForEachActivityTypePropertiesItems;
	}

	/** ForEach activity properties. */
	export interface ForEachActivityTypePropertiesFormProperties {

		/**
		 * Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
		 * Maximum: 50
		 */
		batchCount: FormControl<number | null | undefined>,

		/** Should the loop be executed in sequence or in parallel (max 50) */
		isSequential: FormControl<boolean | null | undefined>,
	}
	export function CreateForEachActivityTypePropertiesFormGroup() {
		return new FormGroup<ForEachActivityTypePropertiesFormProperties>({
			batchCount: new FormControl<number | null | undefined>(undefined, [Validators.max(50)]),
			isSequential: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ForEachActivityTypePropertiesItems {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface ForEachActivityTypePropertiesItemsFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateForEachActivityTypePropertiesItemsFormGroup() {
		return new FormGroup<ForEachActivityTypePropertiesItemsFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Format read settings. */
	export interface FormatReadSettings {

		/**
		 * The read setting type.
		 * Required
		 */
		type: string;
	}

	/** Format read settings. */
	export interface FormatReadSettingsFormProperties {

		/**
		 * The read setting type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormatReadSettingsFormGroup() {
		return new FormGroup<FormatReadSettingsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Format write settings. */
	export interface FormatWriteSettings {

		/**
		 * The write setting type.
		 * Required
		 */
		type: string;
	}

	/** Format write settings. */
	export interface FormatWriteSettingsFormProperties {

		/**
		 * The write setting type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormatWriteSettingsFormGroup() {
		return new FormGroup<FormatWriteSettingsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Ftp read settings. */
	export interface FtpReadSettings {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Specify whether to use binary transfer mode for FTP stores. */
		useBinaryTransfer?: boolean | null;

		/** Ftp wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Ftp wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Ftp read settings. */
	export interface FtpReadSettingsFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Specify whether to use binary transfer mode for FTP stores. */
		useBinaryTransfer: FormControl<boolean | null | undefined>,

		/** Ftp wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Ftp wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateFtpReadSettingsFormGroup() {
		return new FormGroup<FtpReadSettingsFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
			useBinaryTransfer: new FormControl<boolean | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Activity to get metadata of dataset */
	export interface GetMetadataActivity extends ExecutionActivity {

		/**
		 * GetMetadata activity properties.
		 * Required
		 */
		typeProperties: GetMetadataActivityTypeProperties;
	}

	/** Activity to get metadata of dataset */
	export interface GetMetadataActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateGetMetadataActivityFormGroup() {
		return new FormGroup<GetMetadataActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** GetMetadata activity properties. */
	export interface GetMetadataActivityTypeProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: any;

		/** Fields of metadata to get from dataset. */
		fieldList?: Array<string>;
	}

	/** GetMetadata activity properties. */
	export interface GetMetadataActivityTypePropertiesFormProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: FormControl<any | null | undefined>,
	}
	export function CreateGetMetadataActivityTypePropertiesFormGroup() {
		return new FormGroup<GetMetadataActivityTypePropertiesFormProperties>({
			dataset: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Google AdWords service source. */
	export interface GoogleAdWordsSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Google AdWords service source. */
	export interface GoogleAdWordsSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdWordsSourceFormGroup() {
		return new FormGroup<GoogleAdWordsSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Google BigQuery service source. */
	export interface GoogleBigQuerySource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Google BigQuery service source. */
	export interface GoogleBigQuerySourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBigQuerySourceFormGroup() {
		return new FormGroup<GoogleBigQuerySourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Cloud Storage read settings. */
	export interface GoogleCloudStorageReadSettings {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). */
		prefix?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Google Cloud Storage read settings. */
	export interface GoogleCloudStorageReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). */
		prefix: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudStorageReadSettingsFormGroup() {
		return new FormGroup<GoogleCloudStorageReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Greenplum Database source. */
	export interface GreenplumSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Greenplum Database source. */
	export interface GreenplumSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGreenplumSourceFormGroup() {
		return new FormGroup<GreenplumSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity HBase server source. */
	export interface HBaseSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity HBase server source. */
	export interface HBaseSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateHBaseSourceFormGroup() {
		return new FormGroup<HBaseSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HDInsightActivityDebugInfoOption settings to use. */
	export enum HDInsightActivityDebugInfoOption { None = 0, Always = 1, Failure = 2 }


	/** HDInsight Hive activity type. */
	export interface HDInsightHiveActivity extends ExecutionActivity {

		/**
		 * HDInsight Hive activity properties.
		 * Required
		 */
		typeProperties: HDInsightHiveActivityTypeProperties;
	}

	/** HDInsight Hive activity type. */
	export interface HDInsightHiveActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateHDInsightHiveActivityFormGroup() {
		return new FormGroup<HDInsightHiveActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight Hive activity properties. */
	export interface HDInsightHiveActivityTypeProperties {

		/** User specified arguments to HDInsightActivity. */
		arguments?: Array<string>;

		/** Allows user to specify defines for Hive job request. */
		defines?: {[id: string]: any };

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo?: HDInsightActivityDebugInfoOption | null;

		/** Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) */
		queryTimeout?: number | null;

		/** Linked service reference type. */
		scriptLinkedService?: any;

		/** Script path. Type: string (or Expression with resultType string). */
		scriptPath?: string | null;

		/** Storage linked service references. */
		HDInsightHiveActivityTypePropertiesStorageLinkedServices?: Array<HDInsightHiveActivityTypePropertiesStorageLinkedServices>;

		/** User specified arguments under hivevar namespace. */
		variables?: Array<string>;
	}

	/** HDInsight Hive activity properties. */
	export interface HDInsightHiveActivityTypePropertiesFormProperties {

		/** Allows user to specify defines for Hive job request. */
		defines: FormControl<{[id: string]: any } | null | undefined>,

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo: FormControl<HDInsightActivityDebugInfoOption | null | undefined>,

		/** Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) */
		queryTimeout: FormControl<number | null | undefined>,

		/** Linked service reference type. */
		scriptLinkedService: FormControl<any | null | undefined>,

		/** Script path. Type: string (or Expression with resultType string). */
		scriptPath: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightHiveActivityTypePropertiesFormGroup() {
		return new FormGroup<HDInsightHiveActivityTypePropertiesFormProperties>({
			defines: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			getDebugInfo: new FormControl<HDInsightActivityDebugInfoOption | null | undefined>(undefined),
			queryTimeout: new FormControl<number | null | undefined>(undefined),
			scriptLinkedService: new FormControl<any | null | undefined>(undefined),
			scriptPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HDInsightHiveActivityTypePropertiesStorageLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface HDInsightHiveActivityTypePropertiesStorageLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateHDInsightHiveActivityTypePropertiesStorageLinkedServicesFormGroup() {
		return new FormGroup<HDInsightHiveActivityTypePropertiesStorageLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDInsight MapReduce activity type. */
	export interface HDInsightMapReduceActivity extends ExecutionActivity {

		/**
		 * HDInsight MapReduce activity properties.
		 * Required
		 */
		typeProperties: HDInsightMapReduceActivityTypeProperties;
	}

	/** HDInsight MapReduce activity type. */
	export interface HDInsightMapReduceActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateHDInsightMapReduceActivityFormGroup() {
		return new FormGroup<HDInsightMapReduceActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight MapReduce activity properties. */
	export interface HDInsightMapReduceActivityTypeProperties {

		/** User specified arguments to HDInsightActivity. */
		arguments?: Array<string>;

		/**
		 * Class name. Type: string (or Expression with resultType string).
		 * Required
		 */
		className: string;

		/** Allows user to specify defines for the MapReduce job request. */
		defines?: {[id: string]: any };

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo?: HDInsightActivityDebugInfoOption | null;

		/**
		 * Jar path. Type: string (or Expression with resultType string).
		 * Required
		 */
		jarFilePath: string;

		/** Jar libs. */
		jarLibs?: Array<string>;

		/** Linked service reference type. */
		jarLinkedService?: any;

		/** Storage linked service references. */
		HDInsightMapReduceActivityTypePropertiesStorageLinkedServices?: Array<HDInsightMapReduceActivityTypePropertiesStorageLinkedServices>;
	}

	/** HDInsight MapReduce activity properties. */
	export interface HDInsightMapReduceActivityTypePropertiesFormProperties {

		/**
		 * Class name. Type: string (or Expression with resultType string).
		 * Required
		 */
		className: FormControl<string | null | undefined>,

		/** Allows user to specify defines for the MapReduce job request. */
		defines: FormControl<{[id: string]: any } | null | undefined>,

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo: FormControl<HDInsightActivityDebugInfoOption | null | undefined>,

		/**
		 * Jar path. Type: string (or Expression with resultType string).
		 * Required
		 */
		jarFilePath: FormControl<string | null | undefined>,

		/** Linked service reference type. */
		jarLinkedService: FormControl<any | null | undefined>,
	}
	export function CreateHDInsightMapReduceActivityTypePropertiesFormGroup() {
		return new FormGroup<HDInsightMapReduceActivityTypePropertiesFormProperties>({
			className: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defines: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			getDebugInfo: new FormControl<HDInsightActivityDebugInfoOption | null | undefined>(undefined),
			jarFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jarLinkedService: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface HDInsightMapReduceActivityTypePropertiesStorageLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface HDInsightMapReduceActivityTypePropertiesStorageLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateHDInsightMapReduceActivityTypePropertiesStorageLinkedServicesFormGroup() {
		return new FormGroup<HDInsightMapReduceActivityTypePropertiesStorageLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDInsight Pig activity type. */
	export interface HDInsightPigActivity extends ExecutionActivity {

		/**
		 * HDInsight Pig activity properties.
		 * Required
		 */
		typeProperties: HDInsightPigActivityTypeProperties;
	}

	/** HDInsight Pig activity type. */
	export interface HDInsightPigActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateHDInsightPigActivityFormGroup() {
		return new FormGroup<HDInsightPigActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight Pig activity properties. */
	export interface HDInsightPigActivityTypeProperties {

		/** User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). */
		arguments?: string | null;

		/** Allows user to specify defines for Pig job request. */
		defines?: {[id: string]: any };

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo?: HDInsightActivityDebugInfoOption | null;

		/** Linked service reference type. */
		scriptLinkedService?: any;

		/** Script path. Type: string (or Expression with resultType string). */
		scriptPath?: string | null;

		/** Storage linked service references. */
		HDInsightPigActivityTypePropertiesStorageLinkedServices?: Array<HDInsightPigActivityTypePropertiesStorageLinkedServices>;
	}

	/** HDInsight Pig activity properties. */
	export interface HDInsightPigActivityTypePropertiesFormProperties {

		/** User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). */
		arguments: FormControl<string | null | undefined>,

		/** Allows user to specify defines for Pig job request. */
		defines: FormControl<{[id: string]: any } | null | undefined>,

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo: FormControl<HDInsightActivityDebugInfoOption | null | undefined>,

		/** Linked service reference type. */
		scriptLinkedService: FormControl<any | null | undefined>,

		/** Script path. Type: string (or Expression with resultType string). */
		scriptPath: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightPigActivityTypePropertiesFormGroup() {
		return new FormGroup<HDInsightPigActivityTypePropertiesFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			defines: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			getDebugInfo: new FormControl<HDInsightActivityDebugInfoOption | null | undefined>(undefined),
			scriptLinkedService: new FormControl<any | null | undefined>(undefined),
			scriptPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HDInsightPigActivityTypePropertiesStorageLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface HDInsightPigActivityTypePropertiesStorageLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateHDInsightPigActivityTypePropertiesStorageLinkedServicesFormGroup() {
		return new FormGroup<HDInsightPigActivityTypePropertiesStorageLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDInsight Spark activity. */
	export interface HDInsightSparkActivity extends ExecutionActivity {

		/**
		 * HDInsight spark activity properties.
		 * Required
		 */
		typeProperties: HDInsightSparkActivityTypeProperties;
	}

	/** HDInsight Spark activity. */
	export interface HDInsightSparkActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateHDInsightSparkActivityFormGroup() {
		return new FormGroup<HDInsightSparkActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight spark activity properties. */
	export interface HDInsightSparkActivityTypeProperties {

		/** The user-specified arguments to HDInsightSparkActivity. */
		arguments?: Array<string>;

		/** The application's Java/Spark main class. */
		className?: string | null;

		/**
		 * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
		 * Required
		 */
		entryFilePath: string;

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo?: HDInsightActivityDebugInfoOption | null;

		/** The user to impersonate that will execute the job. Type: string (or Expression with resultType string). */
		proxyUser?: string | null;

		/**
		 * The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string).
		 * Required
		 */
		rootPath: string;

		/** Spark configuration property. */
		sparkConfig?: {[id: string]: any };

		/** Linked service reference type. */
		sparkJobLinkedService?: any;
	}

	/** HDInsight spark activity properties. */
	export interface HDInsightSparkActivityTypePropertiesFormProperties {

		/** The application's Java/Spark main class. */
		className: FormControl<string | null | undefined>,

		/**
		 * The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string).
		 * Required
		 */
		entryFilePath: FormControl<string | null | undefined>,

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo: FormControl<HDInsightActivityDebugInfoOption | null | undefined>,

		/** The user to impersonate that will execute the job. Type: string (or Expression with resultType string). */
		proxyUser: FormControl<string | null | undefined>,

		/**
		 * The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string).
		 * Required
		 */
		rootPath: FormControl<string | null | undefined>,

		/** Spark configuration property. */
		sparkConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** Linked service reference type. */
		sparkJobLinkedService: FormControl<any | null | undefined>,
	}
	export function CreateHDInsightSparkActivityTypePropertiesFormGroup() {
		return new FormGroup<HDInsightSparkActivityTypePropertiesFormProperties>({
			className: new FormControl<string | null | undefined>(undefined),
			entryFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			getDebugInfo: new FormControl<HDInsightActivityDebugInfoOption | null | undefined>(undefined),
			proxyUser: new FormControl<string | null | undefined>(undefined),
			rootPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sparkConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sparkJobLinkedService: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight streaming activity type. */
	export interface HDInsightStreamingActivity extends ExecutionActivity {

		/**
		 * HDInsight streaming activity properties.
		 * Required
		 */
		typeProperties: HDInsightStreamingActivityTypeProperties;
	}

	/** HDInsight streaming activity type. */
	export interface HDInsightStreamingActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateHDInsightStreamingActivityFormGroup() {
		return new FormGroup<HDInsightStreamingActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** HDInsight streaming activity properties. */
	export interface HDInsightStreamingActivityTypeProperties {

		/** User specified arguments to HDInsightActivity. */
		arguments?: Array<string>;

		/** Combiner executable name. Type: string (or Expression with resultType string). */
		combiner?: string | null;

		/** Command line environment values. */
		commandEnvironment?: Array<string>;

		/** Allows user to specify defines for streaming job request. */
		defines?: {[id: string]: any };

		/** Linked service reference type. */
		fileLinkedService?: any;

		/**
		 * Paths to streaming job files. Can be directories.
		 * Required
		 */
		filePaths: Array<string>;

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo?: HDInsightActivityDebugInfoOption | null;

		/**
		 * Input blob path. Type: string (or Expression with resultType string).
		 * Required
		 */
		input: string;

		/**
		 * Mapper executable name. Type: string (or Expression with resultType string).
		 * Required
		 */
		mapper: string;

		/**
		 * Output blob path. Type: string (or Expression with resultType string).
		 * Required
		 */
		output: string;

		/**
		 * Reducer executable name. Type: string (or Expression with resultType string).
		 * Required
		 */
		reducer: string;

		/** Storage linked service references. */
		HDInsightStreamingActivityTypePropertiesStorageLinkedServices?: Array<HDInsightStreamingActivityTypePropertiesStorageLinkedServices>;
	}

	/** HDInsight streaming activity properties. */
	export interface HDInsightStreamingActivityTypePropertiesFormProperties {

		/** Combiner executable name. Type: string (or Expression with resultType string). */
		combiner: FormControl<string | null | undefined>,

		/** Allows user to specify defines for streaming job request. */
		defines: FormControl<{[id: string]: any } | null | undefined>,

		/** Linked service reference type. */
		fileLinkedService: FormControl<any | null | undefined>,

		/** The HDInsightActivityDebugInfoOption settings to use. */
		getDebugInfo: FormControl<HDInsightActivityDebugInfoOption | null | undefined>,

		/**
		 * Input blob path. Type: string (or Expression with resultType string).
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Mapper executable name. Type: string (or Expression with resultType string).
		 * Required
		 */
		mapper: FormControl<string | null | undefined>,

		/**
		 * Output blob path. Type: string (or Expression with resultType string).
		 * Required
		 */
		output: FormControl<string | null | undefined>,

		/**
		 * Reducer executable name. Type: string (or Expression with resultType string).
		 * Required
		 */
		reducer: FormControl<string | null | undefined>,
	}
	export function CreateHDInsightStreamingActivityTypePropertiesFormGroup() {
		return new FormGroup<HDInsightStreamingActivityTypePropertiesFormProperties>({
			combiner: new FormControl<string | null | undefined>(undefined),
			defines: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			fileLinkedService: new FormControl<any | null | undefined>(undefined),
			getDebugInfo: new FormControl<HDInsightActivityDebugInfoOption | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mapper: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reducer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HDInsightStreamingActivityTypePropertiesStorageLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface HDInsightStreamingActivityTypePropertiesStorageLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateHDInsightStreamingActivityTypePropertiesStorageLinkedServicesFormGroup() {
		return new FormGroup<HDInsightStreamingActivityTypePropertiesStorageLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** HDFS read settings. */
	export interface HdfsReadSettings {

		/** Distcp settings. */
		distcpSettings?: DistcpSettings;

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery?: boolean | null;

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** HDFS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** HDFS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** HDFS read settings. */
	export interface HdfsReadSettingsFormProperties {

		/** Indicates whether to enable partition discovery. */
		enablePartitionDiscovery: FormControl<boolean | null | undefined>,

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** HDFS wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** HDFS wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateHdfsReadSettingsFormGroup() {
		return new FormGroup<HdfsReadSettingsFormProperties>({
			enablePartitionDiscovery: new FormControl<boolean | null | undefined>(undefined),
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity HDFS source. */
	export interface HdfsSource {

		/** Distcp settings. */
		distcpSettings?: DistcpSettings;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;
	}

	/** A copy activity HDFS source. */
	export interface HdfsSourceFormProperties {

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,
	}
	export function CreateHdfsSourceFormGroup() {
		return new FormGroup<HdfsSourceFormProperties>({
			recursive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Hive Server source. */
	export interface HiveSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Hive Server source. */
	export interface HiveSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateHiveSourceFormGroup() {
		return new FormGroup<HiveSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sftp read settings. */
	export interface HttpReadSettings {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders?: string | null;

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody?: string | null;

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod?: string | null;

		/** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. */
		requestTimeout?: string | null;
	}

	/** Sftp read settings. */
	export interface HttpReadSettingsFormProperties {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders: FormControl<string | null | undefined>,

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody: FormControl<string | null | undefined>,

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod: FormControl<string | null | undefined>,

		/** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. */
		requestTimeout: FormControl<string | null | undefined>,
	}
	export function CreateHttpReadSettingsFormGroup() {
		return new FormGroup<HttpReadSettingsFormProperties>({
			additionalHeaders: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
			requestTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for an HTTP file. */
	export interface HttpSource {

		/** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		httpRequestTimeout?: string | null;
	}

	/** A copy activity source for an HTTP file. */
	export interface HttpSourceFormProperties {

		/** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		httpRequestTimeout: FormControl<string | null | undefined>,
	}
	export function CreateHttpSourceFormGroup() {
		return new FormGroup<HttpSourceFormProperties>({
			httpRequestTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Hubspot Service source. */
	export interface HubspotSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Hubspot Service source. */
	export interface HubspotSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateHubspotSourceFormGroup() {
		return new FormGroup<HubspotSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression. */
	export interface IfConditionActivity extends ControlActivity {

		/**
		 * IfCondition activity properties.
		 * Required
		 */
		typeProperties: IfConditionActivityTypeProperties;
	}

	/** This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression. */
	export interface IfConditionActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateIfConditionActivityFormGroup() {
		return new FormGroup<IfConditionActivityFormProperties>({
		});

	}


	/** IfCondition activity properties. */
	export interface IfConditionActivityTypeProperties {

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		expression: IfConditionActivityTypePropertiesExpression;

		/** List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. */
		ifFalseActivities?: Array<Activity>;

		/** List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. */
		ifTrueActivities?: Array<Activity>;
	}

	/** IfCondition activity properties. */
	export interface IfConditionActivityTypePropertiesFormProperties {
	}
	export function CreateIfConditionActivityTypePropertiesFormGroup() {
		return new FormGroup<IfConditionActivityTypePropertiesFormProperties>({
		});

	}

	export interface IfConditionActivityTypePropertiesExpression {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface IfConditionActivityTypePropertiesExpressionFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIfConditionActivityTypePropertiesExpressionFormGroup() {
		return new FormGroup<IfConditionActivityTypePropertiesExpressionFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity Impala server source. */
	export interface ImpalaSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Impala server source. */
	export interface ImpalaSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateImpalaSourceFormGroup() {
		return new FormGroup<ImpalaSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Informix sink. */
	export interface InformixSink {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity Informix sink. */
	export interface InformixSinkFormProperties {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateInformixSinkFormGroup() {
		return new FormGroup<InformixSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for Informix. */
	export interface InformixSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for Informix. */
	export interface InformixSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateInformixSourceFormGroup() {
		return new FormGroup<InformixSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Jira Service source. */
	export interface JiraSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Jira Service source. */
	export interface JiraSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateJiraSourceFormGroup() {
		return new FormGroup<JiraSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Json sink. */
	export interface JsonSink {

		/** Json write settings. */
		formatSettings?: JsonWriteSettings;

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity Json sink. */
	export interface JsonSinkFormProperties {
	}
	export function CreateJsonSinkFormGroup() {
		return new FormGroup<JsonSinkFormProperties>({
		});

	}


	/** Json write settings. */
	export interface JsonWriteSettings {

		/** File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. */
		filePattern?: JsonWriteSettingsFilePattern | null;
	}

	/** Json write settings. */
	export interface JsonWriteSettingsFormProperties {

		/** File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. */
		filePattern: FormControl<JsonWriteSettingsFilePattern | null | undefined>,
	}
	export function CreateJsonWriteSettingsFormGroup() {
		return new FormGroup<JsonWriteSettingsFormProperties>({
			filePattern: new FormControl<JsonWriteSettingsFilePattern | null | undefined>(undefined),
		});

	}

	export enum JsonWriteSettingsFilePattern { setOfObjects = 0, arrayOfObjects = 1 }


	/** A copy activity Json source. */
	export interface JsonSource {

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity Json source. */
	export interface JsonSourceFormProperties {
	}
	export function CreateJsonSourceFormGroup() {
		return new FormGroup<JsonSourceFormProperties>({
		});

	}


	/** Lookup activity. */
	export interface LookupActivity extends ExecutionActivity {

		/**
		 * Lookup activity properties.
		 * Required
		 */
		typeProperties: LookupActivityTypeProperties;
	}

	/** Lookup activity. */
	export interface LookupActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateLookupActivityFormGroup() {
		return new FormGroup<LookupActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Lookup activity properties. */
	export interface LookupActivityTypeProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: any;

		/** Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). */
		firstRowOnly?: string | null;

		/**
		 * A copy activity source.
		 * Required
		 */
		source: CopySource;
	}

	/** Lookup activity properties. */
	export interface LookupActivityTypePropertiesFormProperties {

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: FormControl<any | null | undefined>,

		/** Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). */
		firstRowOnly: FormControl<string | null | undefined>,
	}
	export function CreateLookupActivityTypePropertiesFormGroup() {
		return new FormGroup<LookupActivityTypePropertiesFormProperties>({
			dataset: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			firstRowOnly: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Magento server source. */
	export interface MagentoSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Magento server source. */
	export interface MagentoSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMagentoSourceFormGroup() {
		return new FormGroup<MagentoSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity MariaDB server source. */
	export interface MariaDBSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity MariaDB server source. */
	export interface MariaDBSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMariaDBSourceFormGroup() {
		return new FormGroup<MariaDBSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Marketo server source. */
	export interface MarketoSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Marketo server source. */
	export interface MarketoSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMarketoSourceFormGroup() {
		return new FormGroup<MarketoSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Microsoft Access sink. */
	export interface MicrosoftAccessSink {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity Microsoft Access sink. */
	export interface MicrosoftAccessSinkFormProperties {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessSinkFormGroup() {
		return new FormGroup<MicrosoftAccessSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for Microsoft Access. */
	export interface MicrosoftAccessSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for Microsoft Access. */
	export interface MicrosoftAccessSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMicrosoftAccessSourceFormGroup() {
		return new FormGroup<MicrosoftAccessSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for a MongoDB database. */
	export interface MongoDbSource {

		/** Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for a MongoDB database. */
	export interface MongoDbSourceFormProperties {

		/** Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbSourceFormGroup() {
		return new FormGroup<MongoDbSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for a MongoDB database. */
	export interface MongoDbV2Source {

		/** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
		batchSize?: string | null;

		/** Cursor methods for Mongodb query */
		cursorMethods?: MongoDbCursorMethodsProperties;

		/** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
		filter?: string | null;

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout?: string | null;
	}

	/** A copy activity source for a MongoDB database. */
	export interface MongoDbV2SourceFormProperties {

		/** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
		batchSize: FormControl<string | null | undefined>,

		/** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
		filter: FormControl<string | null | undefined>,

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbV2SourceFormGroup() {
		return new FormGroup<MongoDbV2SourceFormProperties>({
			batchSize: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for MySQL databases. */
	export interface MySqlSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for MySQL databases. */
	export interface MySqlSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMySqlSourceFormGroup() {
		return new FormGroup<MySqlSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that will be leveraged for Netezza source partitioning. */
	export interface NetezzaPartitionSettings {

		/** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName?: string | null;

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound?: string | null;

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound?: string | null;
	}

	/** The settings that will be leveraged for Netezza source partitioning. */
	export interface NetezzaPartitionSettingsFormProperties {

		/** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName: FormControl<string | null | undefined>,

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound: FormControl<string | null | undefined>,

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateNetezzaPartitionSettingsFormGroup() {
		return new FormGroup<NetezzaPartitionSettingsFormProperties>({
			partitionColumnName: new FormControl<string | null | undefined>(undefined),
			partitionLowerBound: new FormControl<string | null | undefined>(undefined),
			partitionUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Netezza source. */
	export interface NetezzaSource {

		/** The partition mechanism that will be used for Netezza read in parallel. */
		partitionOption?: NetezzaSourcePartitionOption | null;

		/** The settings that will be leveraged for Netezza source partitioning. */
		partitionSettings?: NetezzaPartitionSettings;

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Netezza source. */
	export interface NetezzaSourceFormProperties {

		/** The partition mechanism that will be used for Netezza read in parallel. */
		partitionOption: FormControl<NetezzaSourcePartitionOption | null | undefined>,

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateNetezzaSourceFormGroup() {
		return new FormGroup<NetezzaSourceFormProperties>({
			partitionOption: new FormControl<NetezzaSourcePartitionOption | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetezzaSourcePartitionOption { None = 0, DataSlice = 1, DynamicRange = 2 }


	/** A copy activity source for OData source. */
	export interface ODataSource {

		/** OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for OData source. */
	export interface ODataSourceFormProperties {

		/** OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateODataSourceFormGroup() {
		return new FormGroup<ODataSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity ODBC sink. */
	export interface OdbcSink {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity ODBC sink. */
	export interface OdbcSinkFormProperties {

		/** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateOdbcSinkFormGroup() {
		return new FormGroup<OdbcSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for ODBC databases. */
	export interface OdbcSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for ODBC databases. */
	export interface OdbcSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateOdbcSourceFormGroup() {
		return new FormGroup<OdbcSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for an Office 365 service. */
	export interface Office365Source {

		/** The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). */
		allowedGroups?: string | null;

		/** The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string). */
		dateFilterColumn?: string | null;

		/** End time of the requested range for this dataset. Type: string (or Expression with resultType string). */
		endTime?: string | null;

		/** The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] */
		outputColumns?: string | null;

		/** Start time of the requested range for this dataset. Type: string (or Expression with resultType string). */
		startTime?: string | null;

		/** The user scope uri. Type: string (or Expression with resultType string). */
		userScopeFilterUri?: string | null;
	}

	/** A copy activity source for an Office 365 service. */
	export interface Office365SourceFormProperties {

		/** The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). */
		allowedGroups: FormControl<string | null | undefined>,

		/** The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string). */
		dateFilterColumn: FormControl<string | null | undefined>,

		/** End time of the requested range for this dataset. Type: string (or Expression with resultType string). */
		endTime: FormControl<string | null | undefined>,

		/** The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] */
		outputColumns: FormControl<string | null | undefined>,

		/** Start time of the requested range for this dataset. Type: string (or Expression with resultType string). */
		startTime: FormControl<string | null | undefined>,

		/** The user scope uri. Type: string (or Expression with resultType string). */
		userScopeFilterUri: FormControl<string | null | undefined>,
	}
	export function CreateOffice365SourceFormGroup() {
		return new FormGroup<Office365SourceFormProperties>({
			allowedGroups: new FormControl<string | null | undefined>(undefined),
			dateFilterColumn: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			outputColumns: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			userScopeFilterUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that will be leveraged for Oracle source partitioning. */
	export interface OraclePartitionSettings {

		/** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName?: string | null;

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound?: string | null;

		/** Names of the physical partitions of Oracle table. */
		partitionNames?: string | null;

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound?: string | null;
	}

	/** The settings that will be leveraged for Oracle source partitioning. */
	export interface OraclePartitionSettingsFormProperties {

		/** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName: FormControl<string | null | undefined>,

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound: FormControl<string | null | undefined>,

		/** Names of the physical partitions of Oracle table. */
		partitionNames: FormControl<string | null | undefined>,

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateOraclePartitionSettingsFormGroup() {
		return new FormGroup<OraclePartitionSettingsFormProperties>({
			partitionColumnName: new FormControl<string | null | undefined>(undefined),
			partitionLowerBound: new FormControl<string | null | undefined>(undefined),
			partitionNames: new FormControl<string | null | undefined>(undefined),
			partitionUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Oracle Service Cloud source. */
	export interface OracleServiceCloudSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Oracle Service Cloud source. */
	export interface OracleServiceCloudSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateOracleServiceCloudSourceFormGroup() {
		return new FormGroup<OracleServiceCloudSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Oracle sink. */
	export interface OracleSink {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;
	}

	/** A copy activity Oracle sink. */
	export interface OracleSinkFormProperties {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,
	}
	export function CreateOracleSinkFormGroup() {
		return new FormGroup<OracleSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Oracle source. */
	export interface OracleSource {

		/** Oracle reader query. Type: string (or Expression with resultType string). */
		oracleReaderQuery?: string | null;

		/** The partition mechanism that will be used for Oracle read in parallel. */
		partitionOption?: OracleSourcePartitionOption | null;

		/** The settings that will be leveraged for Oracle source partitioning. */
		partitionSettings?: OraclePartitionSettings;

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout?: string | null;
	}

	/** A copy activity Oracle source. */
	export interface OracleSourceFormProperties {

		/** Oracle reader query. Type: string (or Expression with resultType string). */
		oracleReaderQuery: FormControl<string | null | undefined>,

		/** The partition mechanism that will be used for Oracle read in parallel. */
		partitionOption: FormControl<OracleSourcePartitionOption | null | undefined>,

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateOracleSourceFormGroup() {
		return new FormGroup<OracleSourceFormProperties>({
			oracleReaderQuery: new FormControl<string | null | undefined>(undefined),
			partitionOption: new FormControl<OracleSourcePartitionOption | null | undefined>(undefined),
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OracleSourcePartitionOption { None = 0, PhysicalPartitionsOfTable = 1, DynamicRange = 2 }


	/** A copy activity ORC sink. */
	export interface OrcSink {

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity ORC sink. */
	export interface OrcSinkFormProperties {
	}
	export function CreateOrcSinkFormGroup() {
		return new FormGroup<OrcSinkFormProperties>({
		});

	}


	/** A copy activity ORC source. */
	export interface OrcSource {

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity ORC source. */
	export interface OrcSourceFormProperties {
	}
	export function CreateOrcSourceFormGroup() {
		return new FormGroup<OrcSourceFormProperties>({
		});

	}


	/** A copy activity Parquet sink. */
	export interface ParquetSink {

		/** Connector write settings. */
		storeSettings?: StoreWriteSettings;
	}

	/** A copy activity Parquet sink. */
	export interface ParquetSinkFormProperties {
	}
	export function CreateParquetSinkFormGroup() {
		return new FormGroup<ParquetSinkFormProperties>({
		});

	}


	/** A copy activity Parquet source. */
	export interface ParquetSource {

		/** Connector read setting. */
		storeSettings?: StoreReadSettings;
	}

	/** A copy activity Parquet source. */
	export interface ParquetSourceFormProperties {
	}
	export function CreateParquetSourceFormGroup() {
		return new FormGroup<ParquetSourceFormProperties>({
		});

	}


	/** A copy activity Paypal Service source. */
	export interface PaypalSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Paypal Service source. */
	export interface PaypalSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePaypalSourceFormGroup() {
		return new FormGroup<PaypalSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Phoenix server source. */
	export interface PhoenixSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Phoenix server source. */
	export interface PhoenixSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePhoenixSourceFormGroup() {
		return new FormGroup<PhoenixSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data factory pipeline. */
	export interface Pipeline {

		/** List of activities in pipeline. */
		activities?: Array<Activity>;

		/** List of tags that can be used for describing the Pipeline. */
		annotations?: Array<string>;

		/**
		 * The max number of concurrent runs for the pipeline.
		 * Minimum: 1
		 */
		concurrency?: number | null;

		/** The description of the pipeline. */
		description?: string | null;

		/** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
		folder?: PipelineFolder;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: PipelineParameters };

		/** Dimensions emitted by Pipeline. */
		runDimensions?: {[id: string]: any };

		/** Definition of variable for a Pipeline. */
		variables?: {[id: string]: PipelineVariables };
	}

	/** A data factory pipeline. */
	export interface PipelineFormProperties {

		/**
		 * The max number of concurrent runs for the pipeline.
		 * Minimum: 1
		 */
		concurrency: FormControl<number | null | undefined>,

		/** The description of the pipeline. */
		description: FormControl<string | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: PipelineParameters } | null | undefined>,

		/** Dimensions emitted by Pipeline. */
		runDimensions: FormControl<{[id: string]: any } | null | undefined>,

		/** Definition of variable for a Pipeline. */
		variables: FormControl<{[id: string]: PipelineVariables } | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			concurrency: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: PipelineParameters } | null | undefined>(undefined),
			runDimensions: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: PipelineVariables } | null | undefined>(undefined),
		});

	}

	export interface PipelineFolder {

		/** The name of the folder that this Pipeline is in. */
		name?: string | null;
	}
	export interface PipelineFolderFormProperties {

		/** The name of the folder that this Pipeline is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePipelineFolderFormGroup() {
		return new FormGroup<PipelineFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PipelineParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: PipelineParametersType;
	}
	export interface PipelineParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<PipelineParametersType | null | undefined>,
	}
	export function CreatePipelineParametersFormGroup() {
		return new FormGroup<PipelineParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PipelineParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PipelineParametersType { Object = 0, String = 1, Int = 2, Float = 3, Bool = 4, Array = 5, SecureString = 6 }

	export interface PipelineVariables {

		/** Default value of variable. */
		defaultValue?: string | null;

		/**
		 * Variable type.
		 * Required
		 */
		type: PipelineVariablesType;
	}
	export interface PipelineVariablesFormProperties {

		/** Default value of variable. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Variable type.
		 * Required
		 */
		type: FormControl<PipelineVariablesType | null | undefined>,
	}
	export function CreatePipelineVariablesFormGroup() {
		return new FormGroup<PipelineVariablesFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PipelineVariablesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PipelineVariablesType { String = 0, Bool = 1, Array = 2 }


	/** PolyBase settings. */
	export interface PolybaseSettings {

		/** Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. */
		rejectSampleValue?: string | null;

		/** Indicates whether the RejectValue property is specified as a literal value or a percentage. */
		rejectType?: PolybaseSettingsRejectType | null;

		/** Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. */
		rejectValue?: string | null;

		/** Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). */
		useTypeDefault?: string | null;
	}

	/** PolyBase settings. */
	export interface PolybaseSettingsFormProperties {

		/** Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. */
		rejectSampleValue: FormControl<string | null | undefined>,

		/** Indicates whether the RejectValue property is specified as a literal value or a percentage. */
		rejectType: FormControl<PolybaseSettingsRejectType | null | undefined>,

		/** Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. */
		rejectValue: FormControl<string | null | undefined>,

		/** Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). */
		useTypeDefault: FormControl<string | null | undefined>,
	}
	export function CreatePolybaseSettingsFormGroup() {
		return new FormGroup<PolybaseSettingsFormProperties>({
			rejectSampleValue: new FormControl<string | null | undefined>(undefined),
			rejectType: new FormControl<PolybaseSettingsRejectType | null | undefined>(undefined),
			rejectValue: new FormControl<string | null | undefined>(undefined),
			useTypeDefault: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolybaseSettingsRejectType { value = 0, percentage = 1 }


	/** A copy activity source for PostgreSQL databases. */
	export interface PostgreSqlSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for PostgreSQL databases. */
	export interface PostgreSqlSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlSourceFormGroup() {
		return new FormGroup<PostgreSqlSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Presto server source. */
	export interface PrestoSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Presto server source. */
	export interface PrestoSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreatePrestoSourceFormGroup() {
		return new FormGroup<PrestoSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity QuickBooks server source. */
	export interface QuickBooksSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity QuickBooks server source. */
	export interface QuickBooksSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateQuickBooksSourceFormGroup() {
		return new FormGroup<QuickBooksSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for various relational databases. */
	export interface RelationalSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for various relational databases. */
	export interface RelationalSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateRelationalSourceFormGroup() {
		return new FormGroup<RelationalSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Responsys source. */
	export interface ResponsysSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Responsys source. */
	export interface ResponsysSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateResponsysSourceFormGroup() {
		return new FormGroup<ResponsysSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Rest service source. */
	export interface RestSource {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders?: string | null;

		/** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		httpRequestTimeout?: string | null;

		/** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
		paginationRules?: string | null;

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody?: string | null;

		/** The time to await before sending next page request. */
		requestInterval?: string | null;

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod?: string | null;
	}

	/** A copy activity Rest service source. */
	export interface RestSourceFormProperties {

		/** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
		additionalHeaders: FormControl<string | null | undefined>,

		/** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		httpRequestTimeout: FormControl<string | null | undefined>,

		/** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
		paginationRules: FormControl<string | null | undefined>,

		/** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
		requestBody: FormControl<string | null | undefined>,

		/** The time to await before sending next page request. */
		requestInterval: FormControl<string | null | undefined>,

		/** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
		requestMethod: FormControl<string | null | undefined>,
	}
	export function CreateRestSourceFormGroup() {
		return new FormGroup<RestSourceFormProperties>({
			additionalHeaders: new FormControl<string | null | undefined>(undefined),
			httpRequestTimeout: new FormControl<string | null | undefined>(undefined),
			paginationRules: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestInterval: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Salesforce Marketing Cloud source. */
	export interface SalesforceMarketingCloudSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Salesforce Marketing Cloud source. */
	export interface SalesforceMarketingCloudSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceMarketingCloudSourceFormGroup() {
		return new FormGroup<SalesforceMarketingCloudSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Salesforce Service Cloud sink. */
	export interface SalesforceServiceCloudSink {

		/** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
		externalIdFieldName?: string | null;

		/** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues?: string | null;

		/** The write behavior for the operation. Default is Insert. */
		writeBehavior?: SalesforceServiceCloudSinkWriteBehavior | null;
	}

	/** A copy activity Salesforce Service Cloud sink. */
	export interface SalesforceServiceCloudSinkFormProperties {

		/** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
		externalIdFieldName: FormControl<string | null | undefined>,

		/** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues: FormControl<string | null | undefined>,

		/** The write behavior for the operation. Default is Insert. */
		writeBehavior: FormControl<SalesforceServiceCloudSinkWriteBehavior | null | undefined>,
	}
	export function CreateSalesforceServiceCloudSinkFormGroup() {
		return new FormGroup<SalesforceServiceCloudSinkFormProperties>({
			externalIdFieldName: new FormControl<string | null | undefined>(undefined),
			ignoreNullValues: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<SalesforceServiceCloudSinkWriteBehavior | null | undefined>(undefined),
		});

	}

	export enum SalesforceServiceCloudSinkWriteBehavior { Insert = 0, Upsert = 1 }


	/** A copy activity Salesforce Service Cloud source. */
	export interface SalesforceServiceCloudSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;

		/** The read behavior for the operation. Default is Query. */
		readBehavior?: SalesforceServiceCloudSourceReadBehavior | null;
	}

	/** A copy activity Salesforce Service Cloud source. */
	export interface SalesforceServiceCloudSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,

		/** The read behavior for the operation. Default is Query. */
		readBehavior: FormControl<SalesforceServiceCloudSourceReadBehavior | null | undefined>,
	}
	export function CreateSalesforceServiceCloudSourceFormGroup() {
		return new FormGroup<SalesforceServiceCloudSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			readBehavior: new FormControl<SalesforceServiceCloudSourceReadBehavior | null | undefined>(undefined),
		});

	}

	export enum SalesforceServiceCloudSourceReadBehavior { Query = 0, QueryAll = 1 }


	/** A copy activity Salesforce sink. */
	export interface SalesforceSink {

		/** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
		externalIdFieldName?: string | null;

		/** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues?: string | null;

		/** The write behavior for the operation. Default is Insert. */
		writeBehavior?: SalesforceServiceCloudSinkWriteBehavior | null;
	}

	/** A copy activity Salesforce sink. */
	export interface SalesforceSinkFormProperties {

		/** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
		externalIdFieldName: FormControl<string | null | undefined>,

		/** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
		ignoreNullValues: FormControl<string | null | undefined>,

		/** The write behavior for the operation. Default is Insert. */
		writeBehavior: FormControl<SalesforceServiceCloudSinkWriteBehavior | null | undefined>,
	}
	export function CreateSalesforceSinkFormGroup() {
		return new FormGroup<SalesforceSinkFormProperties>({
			externalIdFieldName: new FormControl<string | null | undefined>(undefined),
			ignoreNullValues: new FormControl<string | null | undefined>(undefined),
			writeBehavior: new FormControl<SalesforceServiceCloudSinkWriteBehavior | null | undefined>(undefined),
		});

	}


	/** A copy activity Salesforce source. */
	export interface SalesforceSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;

		/** The read behavior for the operation. Default is Query. */
		readBehavior?: SalesforceServiceCloudSourceReadBehavior | null;
	}

	/** A copy activity Salesforce source. */
	export interface SalesforceSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,

		/** The read behavior for the operation. Default is Query. */
		readBehavior: FormControl<SalesforceServiceCloudSourceReadBehavior | null | undefined>,
	}
	export function CreateSalesforceSourceFormGroup() {
		return new FormGroup<SalesforceSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			readBehavior: new FormControl<SalesforceServiceCloudSourceReadBehavior | null | undefined>(undefined),
		});

	}


	/** A copy activity source for SapBW server via MDX. */
	export interface SapBwSource {

		/** MDX query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for SapBW server via MDX. */
	export interface SapBwSourceFormProperties {

		/** MDX query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSapBwSourceFormGroup() {
		return new FormGroup<SapBwSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity SAP Cloud for Customer sink. */
	export interface SapCloudForCustomerSink {

		/** The write behavior for the operation. Default is 'Insert'. */
		writeBehavior?: SapCloudForCustomerSinkWriteBehavior | null;
	}

	/** A copy activity SAP Cloud for Customer sink. */
	export interface SapCloudForCustomerSinkFormProperties {

		/** The write behavior for the operation. Default is 'Insert'. */
		writeBehavior: FormControl<SapCloudForCustomerSinkWriteBehavior | null | undefined>,
	}
	export function CreateSapCloudForCustomerSinkFormGroup() {
		return new FormGroup<SapCloudForCustomerSinkFormProperties>({
			writeBehavior: new FormControl<SapCloudForCustomerSinkWriteBehavior | null | undefined>(undefined),
		});

	}

	export enum SapCloudForCustomerSinkWriteBehavior { Insert = 0, Update = 1 }


	/** A copy activity source for SAP Cloud for Customer source. */
	export interface SapCloudForCustomerSource {

		/** SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for SAP Cloud for Customer source. */
	export interface SapCloudForCustomerSourceFormProperties {

		/** SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSapCloudForCustomerSourceFormGroup() {
		return new FormGroup<SapCloudForCustomerSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for SAP ECC source. */
	export interface SapEccSource {

		/** SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for SAP ECC source. */
	export interface SapEccSourceFormProperties {

		/** SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSapEccSourceFormGroup() {
		return new FormGroup<SapEccSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that will be leveraged for SAP HANA source partitioning. */
	export interface SapHanaPartitionSettings {

		/** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName?: string | null;
	}

	/** The settings that will be leveraged for SAP HANA source partitioning. */
	export interface SapHanaPartitionSettingsFormProperties {

		/** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName: FormControl<string | null | undefined>,
	}
	export function CreateSapHanaPartitionSettingsFormGroup() {
		return new FormGroup<SapHanaPartitionSettingsFormProperties>({
			partitionColumnName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for SAP HANA source. */
	export interface SapHanaSource {

		/** The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). */
		packetSize?: string | null;

		/** The partition mechanism that will be used for SAP HANA read in parallel. */
		partitionOption?: SapHanaSourcePartitionOption | null;

		/** The settings that will be leveraged for SAP HANA source partitioning. */
		partitionSettings?: SapHanaPartitionSettings;

		/** SAP HANA Sql query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for SAP HANA source. */
	export interface SapHanaSourceFormProperties {

		/** The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). */
		packetSize: FormControl<string | null | undefined>,

		/** The partition mechanism that will be used for SAP HANA read in parallel. */
		partitionOption: FormControl<SapHanaSourcePartitionOption | null | undefined>,

		/** SAP HANA Sql query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSapHanaSourceFormGroup() {
		return new FormGroup<SapHanaSourceFormProperties>({
			packetSize: new FormControl<string | null | undefined>(undefined),
			partitionOption: new FormControl<SapHanaSourcePartitionOption | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapHanaSourcePartitionOption { None = 0, PhysicalPartitionsOfTable = 1, SapHanaDynamicRange = 2 }


	/** A copy activity source for SAP Business Warehouse Open Hub Destination source. */
	export interface SapOpenHubSource {

		/** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
		baseRequestId?: string | null;

		/** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
		excludeLastRequest?: string | null;
	}

	/** A copy activity source for SAP Business Warehouse Open Hub Destination source. */
	export interface SapOpenHubSourceFormProperties {

		/** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
		baseRequestId: FormControl<string | null | undefined>,

		/** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
		excludeLastRequest: FormControl<string | null | undefined>,
	}
	export function CreateSapOpenHubSourceFormGroup() {
		return new FormGroup<SapOpenHubSourceFormProperties>({
			baseRequestId: new FormControl<string | null | undefined>(undefined),
			excludeLastRequest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that will be leveraged for SAP table source partitioning. */
	export interface SapTablePartitionSettings {

		/** The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). */
		maxPartitionsNumber?: string | null;

		/** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName?: string | null;

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound?: string | null;

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound?: string | null;
	}

	/** The settings that will be leveraged for SAP table source partitioning. */
	export interface SapTablePartitionSettingsFormProperties {

		/** The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). */
		maxPartitionsNumber: FormControl<string | null | undefined>,

		/** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName: FormControl<string | null | undefined>,

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound: FormControl<string | null | undefined>,

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateSapTablePartitionSettingsFormGroup() {
		return new FormGroup<SapTablePartitionSettingsFormProperties>({
			maxPartitionsNumber: new FormControl<string | null | undefined>(undefined),
			partitionColumnName: new FormControl<string | null | undefined>(undefined),
			partitionLowerBound: new FormControl<string | null | undefined>(undefined),
			partitionUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity source for SAP Table source. */
	export interface SapTableSource {

		/** Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). */
		batchSize?: string | null;

		/** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
		customRfcReadTableFunctionModule?: string | null;

		/** The partition mechanism that will be used for SAP table read in parallel. */
		partitionOption?: SapTableSourcePartitionOption | null;

		/** The settings that will be leveraged for SAP table source partitioning. */
		partitionSettings?: SapTablePartitionSettings;

		/** The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). */
		rfcTableFields?: string | null;

		/** The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). */
		rfcTableOptions?: string | null;

		/** The number of rows to be retrieved. Type: integer(or Expression with resultType integer). */
		rowCount?: string | null;

		/** The number of rows that will be skipped. Type: integer (or Expression with resultType integer). */
		rowSkips?: string | null;
	}

	/** A copy activity source for SAP Table source. */
	export interface SapTableSourceFormProperties {

		/** Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). */
		batchSize: FormControl<string | null | undefined>,

		/** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
		customRfcReadTableFunctionModule: FormControl<string | null | undefined>,

		/** The partition mechanism that will be used for SAP table read in parallel. */
		partitionOption: FormControl<SapTableSourcePartitionOption | null | undefined>,

		/** The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). */
		rfcTableFields: FormControl<string | null | undefined>,

		/** The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). */
		rfcTableOptions: FormControl<string | null | undefined>,

		/** The number of rows to be retrieved. Type: integer(or Expression with resultType integer). */
		rowCount: FormControl<string | null | undefined>,

		/** The number of rows that will be skipped. Type: integer (or Expression with resultType integer). */
		rowSkips: FormControl<string | null | undefined>,
	}
	export function CreateSapTableSourceFormGroup() {
		return new FormGroup<SapTableSourceFormProperties>({
			batchSize: new FormControl<string | null | undefined>(undefined),
			customRfcReadTableFunctionModule: new FormControl<string | null | undefined>(undefined),
			partitionOption: new FormControl<SapTableSourcePartitionOption | null | undefined>(undefined),
			rfcTableFields: new FormControl<string | null | undefined>(undefined),
			rfcTableOptions: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			rowSkips: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SapTableSourcePartitionOption { None = 0, PartitionOnInt = 1, PartitionOnCalendarYear = 2, PartitionOnCalendarMonth = 3, PartitionOnCalendarDate = 4, PartitionOnTime = 5 }


	/** A copy activity ServiceNow server source. */
	export interface ServiceNowSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity ServiceNow server source. */
	export interface ServiceNowSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowSourceFormGroup() {
		return new FormGroup<ServiceNowSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set value for a Variable. */
	export interface SetVariableActivity extends ControlActivity {

		/**
		 * SetVariable activity properties.
		 * Required
		 */
		typeProperties: SetVariableActivityTypeProperties;
	}

	/** Set value for a Variable. */
	export interface SetVariableActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateSetVariableActivityFormGroup() {
		return new FormGroup<SetVariableActivityFormProperties>({
		});

	}


	/** SetVariable activity properties. */
	export interface SetVariableActivityTypeProperties {

		/** Value to be set. Could be a static value or Expression */
		value?: string | null;

		/** Name of the variable whose value needs to be set. */
		variableName?: string | null;
	}

	/** SetVariable activity properties. */
	export interface SetVariableActivityTypePropertiesFormProperties {

		/** Value to be set. Could be a static value or Expression */
		value: FormControl<string | null | undefined>,

		/** Name of the variable whose value needs to be set. */
		variableName: FormControl<string | null | undefined>,
	}
	export function CreateSetVariableActivityTypePropertiesFormGroup() {
		return new FormGroup<SetVariableActivityTypePropertiesFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			variableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sftp read settings. */
	export interface SftpReadSettings {

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd?: string | null;

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart?: string | null;

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive?: string | null;

		/** Sftp wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName?: string | null;

		/** Sftp wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath?: string | null;
	}

	/** Sftp read settings. */
	export interface SftpReadSettingsFormProperties {

		/** The end of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeEnd: FormControl<string | null | undefined>,

		/** The start of file's modified datetime. Type: string (or Expression with resultType string). */
		modifiedDatetimeStart: FormControl<string | null | undefined>,

		/** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
		recursive: FormControl<string | null | undefined>,

		/** Sftp wildcardFileName. Type: string (or Expression with resultType string). */
		wildcardFileName: FormControl<string | null | undefined>,

		/** Sftp wildcardFolderPath. Type: string (or Expression with resultType string). */
		wildcardFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateSftpReadSettingsFormGroup() {
		return new FormGroup<SftpReadSettingsFormProperties>({
			modifiedDatetimeEnd: new FormControl<string | null | undefined>(undefined),
			modifiedDatetimeStart: new FormControl<string | null | undefined>(undefined),
			recursive: new FormControl<string | null | undefined>(undefined),
			wildcardFileName: new FormControl<string | null | undefined>(undefined),
			wildcardFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sftp write settings. */
	export interface SftpWriteSettings {

		/** Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). */
		operationTimeout?: string | null;
	}

	/** Sftp write settings. */
	export interface SftpWriteSettingsFormProperties {

		/** Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). */
		operationTimeout: FormControl<string | null | undefined>,
	}
	export function CreateSftpWriteSettingsFormGroup() {
		return new FormGroup<SftpWriteSettingsFormProperties>({
			operationTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Shopify Service source. */
	export interface ShopifySource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Shopify Service source. */
	export interface ShopifySourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateShopifySourceFormGroup() {
		return new FormGroup<ShopifySourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Spark Server source. */
	export interface SparkSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Spark Server source. */
	export interface SparkSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSparkSourceFormGroup() {
		return new FormGroup<SparkSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL Data Warehouse sink. */
	export interface SqlDWSink {

		/** Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). */
		allowCopyCommand?: string | null;

		/** Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). */
		allowPolyBase?: string | null;

		/** DW Copy Command settings. */
		copyCommandSettings?: DWCopyCommandSettings;

		/** PolyBase settings. */
		polyBaseSettings?: PolybaseSettings;

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption?: string | null;
	}

	/** A copy activity SQL Data Warehouse sink. */
	export interface SqlDWSinkFormProperties {

		/** Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). */
		allowCopyCommand: FormControl<string | null | undefined>,

		/** Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). */
		allowPolyBase: FormControl<string | null | undefined>,

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption: FormControl<string | null | undefined>,
	}
	export function CreateSqlDWSinkFormGroup() {
		return new FormGroup<SqlDWSinkFormProperties>({
			allowCopyCommand: new FormControl<string | null | undefined>(undefined),
			allowPolyBase: new FormControl<string | null | undefined>(undefined),
			preCopyScript: new FormControl<string | null | undefined>(undefined),
			tableOption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL Data Warehouse source. */
	export interface SqlDWSource {

		/** SQL Data Warehouse reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery?: string | null;

		/** Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName?: string | null;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. */
		storedProcedureParameters?: string | null;
	}

	/** A copy activity SQL Data Warehouse source. */
	export interface SqlDWSourceFormProperties {

		/** SQL Data Warehouse reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery: FormControl<string | null | undefined>,

		/** Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. */
		storedProcedureParameters: FormControl<string | null | undefined>,
	}
	export function CreateSqlDWSourceFormGroup() {
		return new FormGroup<SqlDWSourceFormProperties>({
			sqlReaderQuery: new FormControl<string | null | undefined>(undefined),
			sqlReaderStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure SQL Managed Instance sink. */
	export interface SqlMISink {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName?: string | null;

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType?: string | null;

		/** SQL stored procedure parameters. */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName?: string | null;

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption?: string | null;
	}

	/** A copy activity Azure SQL Managed Instance sink. */
	export interface SqlMISinkFormProperties {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName: FormControl<string | null | undefined>,

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType: FormControl<string | null | undefined>,

		/** SQL stored procedure parameters. */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName: FormControl<string | null | undefined>,

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption: FormControl<string | null | undefined>,
	}
	export function CreateSqlMISinkFormGroup() {
		return new FormGroup<SqlMISinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
			sqlWriterStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlWriterTableType: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
			storedProcedureTableTypeParameterName: new FormControl<string | null | undefined>(undefined),
			tableOption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Azure SQL Managed Instance source. */
	export interface SqlMISource {

		/** Which additional types to produce. */
		produceAdditionalTypes?: string | null;

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery?: string | null;

		/** Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName?: string | null;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };
	}

	/** A copy activity Azure SQL Managed Instance source. */
	export interface SqlMISourceFormProperties {

		/** Which additional types to produce. */
		produceAdditionalTypes: FormControl<string | null | undefined>,

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery: FormControl<string | null | undefined>,

		/** Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,
	}
	export function CreateSqlMISourceFormGroup() {
		return new FormGroup<SqlMISourceFormProperties>({
			produceAdditionalTypes: new FormControl<string | null | undefined>(undefined),
			sqlReaderQuery: new FormControl<string | null | undefined>(undefined),
			sqlReaderStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL server sink. */
	export interface SqlServerSink {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName?: string | null;

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType?: string | null;

		/** SQL stored procedure parameters. */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName?: string | null;

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption?: string | null;
	}

	/** A copy activity SQL server sink. */
	export interface SqlServerSinkFormProperties {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName: FormControl<string | null | undefined>,

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType: FormControl<string | null | undefined>,

		/** SQL stored procedure parameters. */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName: FormControl<string | null | undefined>,

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerSinkFormGroup() {
		return new FormGroup<SqlServerSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
			sqlWriterStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlWriterTableType: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
			storedProcedureTableTypeParameterName: new FormControl<string | null | undefined>(undefined),
			tableOption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL server source. */
	export interface SqlServerSource {

		/** Which additional types to produce. */
		produceAdditionalTypes?: string | null;

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery?: string | null;

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName?: string | null;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };
	}

	/** A copy activity SQL server source. */
	export interface SqlServerSourceFormProperties {

		/** Which additional types to produce. */
		produceAdditionalTypes: FormControl<string | null | undefined>,

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery: FormControl<string | null | undefined>,

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,
	}
	export function CreateSqlServerSourceFormGroup() {
		return new FormGroup<SqlServerSourceFormProperties>({
			produceAdditionalTypes: new FormControl<string | null | undefined>(undefined),
			sqlReaderQuery: new FormControl<string | null | undefined>(undefined),
			sqlReaderStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
		});

	}


	/** SQL stored procedure activity type. */
	export interface SqlServerStoredProcedureActivity extends ExecutionActivity {

		/**
		 * SQL stored procedure activity properties.
		 * Required
		 */
		typeProperties: SqlServerStoredProcedureActivityTypeProperties;
	}

	/** SQL stored procedure activity type. */
	export interface SqlServerStoredProcedureActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateSqlServerStoredProcedureActivityFormGroup() {
		return new FormGroup<SqlServerStoredProcedureActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** SQL stored procedure activity properties. */
	export interface SqlServerStoredProcedureActivityTypeProperties {

		/**
		 * Stored procedure name. Type: string (or Expression with resultType string).
		 * Required
		 */
		storedProcedureName: string;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };
	}

	/** SQL stored procedure activity properties. */
	export interface SqlServerStoredProcedureActivityTypePropertiesFormProperties {

		/**
		 * Stored procedure name. Type: string (or Expression with resultType string).
		 * Required
		 */
		storedProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,
	}
	export function CreateSqlServerStoredProcedureActivityTypePropertiesFormGroup() {
		return new FormGroup<SqlServerStoredProcedureActivityTypePropertiesFormProperties>({
			storedProcedureName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL sink. */
	export interface SqlSink {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript?: string | null;

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName?: string | null;

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType?: string | null;

		/** SQL stored procedure parameters. */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName?: string | null;

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption?: string | null;
	}

	/** A copy activity SQL sink. */
	export interface SqlSinkFormProperties {

		/** SQL pre-copy script. Type: string (or Expression with resultType string). */
		preCopyScript: FormControl<string | null | undefined>,

		/** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
		sqlWriterStoredProcedureName: FormControl<string | null | undefined>,

		/** SQL writer table type. Type: string (or Expression with resultType string). */
		sqlWriterTableType: FormControl<string | null | undefined>,

		/** SQL stored procedure parameters. */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,

		/** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
		storedProcedureTableTypeParameterName: FormControl<string | null | undefined>,

		/** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
		tableOption: FormControl<string | null | undefined>,
	}
	export function CreateSqlSinkFormGroup() {
		return new FormGroup<SqlSinkFormProperties>({
			preCopyScript: new FormControl<string | null | undefined>(undefined),
			sqlWriterStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlWriterTableType: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
			storedProcedureTableTypeParameterName: new FormControl<string | null | undefined>(undefined),
			tableOption: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity SQL source. */
	export interface SqlSource {

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery?: string | null;

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName?: string | null;

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters?: {[id: string]: StoredProcedureParameter };
	}

	/** A copy activity SQL source. */
	export interface SqlSourceFormProperties {

		/** SQL reader query. Type: string (or Expression with resultType string). */
		sqlReaderQuery: FormControl<string | null | undefined>,

		/** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
		sqlReaderStoredProcedureName: FormControl<string | null | undefined>,

		/** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
		storedProcedureParameters: FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>,
	}
	export function CreateSqlSourceFormGroup() {
		return new FormGroup<SqlSourceFormProperties>({
			sqlReaderQuery: new FormControl<string | null | undefined>(undefined),
			sqlReaderStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			storedProcedureParameters: new FormControl<{[id: string]: StoredProcedureParameter } | null | undefined>(undefined),
		});

	}


	/** A copy activity Square Service source. */
	export interface SquareSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Square Service source. */
	export interface SquareSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSquareSourceFormGroup() {
		return new FormGroup<SquareSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property. */
	export interface SwitchActivity extends ControlActivity {

		/**
		 * Switch activity properties.
		 * Required
		 */
		typeProperties: SwitchActivityTypeProperties;
	}

	/** This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property. */
	export interface SwitchActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateSwitchActivityFormGroup() {
		return new FormGroup<SwitchActivityFormProperties>({
		});

	}


	/** Switch activity properties. */
	export interface SwitchActivityTypeProperties {

		/** List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. */
		cases?: Array<SwitchCase>;

		/** List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. */
		defaultActivities?: Array<Activity>;

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		on: SwitchActivityTypePropertiesOn;
	}

	/** Switch activity properties. */
	export interface SwitchActivityTypePropertiesFormProperties {
	}
	export function CreateSwitchActivityTypePropertiesFormGroup() {
		return new FormGroup<SwitchActivityTypePropertiesFormProperties>({
		});

	}


	/** Switch cases with have a value and corresponding activities. */
	export interface SwitchCase {

		/** List of activities to execute for satisfied case condition. */
		activities?: Array<Activity>;

		/** Expected value that satisfies the expression result of the 'on' property. */
		value?: string | null;
	}

	/** Switch cases with have a value and corresponding activities. */
	export interface SwitchCaseFormProperties {

		/** Expected value that satisfies the expression result of the 'on' property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSwitchCaseFormGroup() {
		return new FormGroup<SwitchCaseFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SwitchActivityTypePropertiesOn {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface SwitchActivityTypePropertiesOnFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSwitchActivityTypePropertiesOnFormGroup() {
		return new FormGroup<SwitchActivityTypePropertiesOnFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity source for Sybase databases. */
	export interface SybaseSource {

		/** Database query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity source for Sybase databases. */
	export interface SybaseSourceFormProperties {

		/** Database query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSybaseSourceFormGroup() {
		return new FormGroup<SybaseSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy activity sources of tabular type. */
	export interface TabularSource {

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout?: string | null;
	}

	/** Copy activity sources of tabular type. */
	export interface TabularSourceFormProperties {

		/** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		queryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateTabularSourceFormGroup() {
		return new FormGroup<TabularSourceFormProperties>({
			queryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity tabular translator. */
	export interface TabularTranslator {

		/** The JSON Path of the Nested Array that is going to do cross-apply. Type: object (or Expression with resultType object). */
		collectionReference?: string | null;

		/** Column mappings. Example: "UserId: MyUserId, Group: MyGroup, Name: MyName" Type: string (or Expression with resultType string). This property will be retired. Please use mappings property. */
		columnMappings?: string | null;

		/** Whether to map complex (array and object) values to simple strings in json format. Type: boolean (or Expression with resultType boolean). */
		mapComplexValuesToString?: string | null;

		/** Column mappings with logical types. Tabular->tabular example: [{"source":{"name":"CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"name":"CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}].  Hierarchical->tabular example: [{"source":{"path":"$.CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"path":"$.CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}]. Type: object (or Expression with resultType object). */
		mappings?: string | null;

		/** The schema mapping to map between tabular data and hierarchical data. Example: {"Column1": "$.Column1", "Column2": "$.Column2.Property1", "Column3": "$.Column2.Property2"}. Type: object (or Expression with resultType object). This property will be retired. Please use mappings property. */
		schemaMapping?: string | null;
	}

	/** A copy activity tabular translator. */
	export interface TabularTranslatorFormProperties {

		/** The JSON Path of the Nested Array that is going to do cross-apply. Type: object (or Expression with resultType object). */
		collectionReference: FormControl<string | null | undefined>,

		/** Column mappings. Example: "UserId: MyUserId, Group: MyGroup, Name: MyName" Type: string (or Expression with resultType string). This property will be retired. Please use mappings property. */
		columnMappings: FormControl<string | null | undefined>,

		/** Whether to map complex (array and object) values to simple strings in json format. Type: boolean (or Expression with resultType boolean). */
		mapComplexValuesToString: FormControl<string | null | undefined>,

		/** Column mappings with logical types. Tabular->tabular example: [{"source":{"name":"CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"name":"CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}].  Hierarchical->tabular example: [{"source":{"path":"$.CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"path":"$.CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}]. Type: object (or Expression with resultType object). */
		mappings: FormControl<string | null | undefined>,

		/** The schema mapping to map between tabular data and hierarchical data. Example: {"Column1": "$.Column1", "Column2": "$.Column2.Property1", "Column3": "$.Column2.Property2"}. Type: object (or Expression with resultType object). This property will be retired. Please use mappings property. */
		schemaMapping: FormControl<string | null | undefined>,
	}
	export function CreateTabularTranslatorFormGroup() {
		return new FormGroup<TabularTranslatorFormProperties>({
			collectionReference: new FormControl<string | null | undefined>(undefined),
			columnMappings: new FormControl<string | null | undefined>(undefined),
			mapComplexValuesToString: new FormControl<string | null | undefined>(undefined),
			mappings: new FormControl<string | null | undefined>(undefined),
			schemaMapping: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings that will be leveraged for teradata source partitioning. */
	export interface TeradataPartitionSettings {

		/** The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName?: string | null;

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound?: string | null;

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound?: string | null;
	}

	/** The settings that will be leveraged for teradata source partitioning. */
	export interface TeradataPartitionSettingsFormProperties {

		/** The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). */
		partitionColumnName: FormControl<string | null | undefined>,

		/** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionLowerBound: FormControl<string | null | undefined>,

		/** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
		partitionUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateTeradataPartitionSettingsFormGroup() {
		return new FormGroup<TeradataPartitionSettingsFormProperties>({
			partitionColumnName: new FormControl<string | null | undefined>(undefined),
			partitionLowerBound: new FormControl<string | null | undefined>(undefined),
			partitionUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Teradata source. */
	export interface TeradataSource {

		/** The partition mechanism that will be used for teradata read in parallel. */
		partitionOption?: TeradataSourcePartitionOption | null;

		/** The settings that will be leveraged for teradata source partitioning. */
		partitionSettings?: TeradataPartitionSettings;

		/** Teradata query. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Teradata source. */
	export interface TeradataSourceFormProperties {

		/** The partition mechanism that will be used for teradata read in parallel. */
		partitionOption: FormControl<TeradataSourcePartitionOption | null | undefined>,

		/** Teradata query. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateTeradataSourceFormGroup() {
		return new FormGroup<TeradataSourceFormProperties>({
			partitionOption: new FormControl<TeradataSourcePartitionOption | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TeradataSourcePartitionOption { None = 0, Hash = 1, DynamicRange = 2 }


	/** This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier. */
	export interface UntilActivity extends ControlActivity {

		/**
		 * Until activity properties.
		 * Required
		 */
		typeProperties: UntilActivityTypeProperties;
	}

	/** This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier. */
	export interface UntilActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateUntilActivityFormGroup() {
		return new FormGroup<UntilActivityFormProperties>({
		});

	}


	/** Until activity properties. */
	export interface UntilActivityTypeProperties {

		/**
		 * List of activities to execute.
		 * Required
		 */
		activities: Array<Activity>;

		/**
		 * Azure Data Factory expression definition.
		 * Required
		 */
		expression: UntilActivityTypePropertiesExpression;

		/** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout?: string | null;
	}

	/** Until activity properties. */
	export interface UntilActivityTypePropertiesFormProperties {

		/** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateUntilActivityTypePropertiesFormGroup() {
		return new FormGroup<UntilActivityTypePropertiesFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntilActivityTypePropertiesExpression {

		/**
		 * Expression type.
		 * Required
		 */
		type: FilterActivityTypePropertiesConditionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}
	export interface UntilActivityTypePropertiesExpressionFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<FilterActivityTypePropertiesConditionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUntilActivityTypePropertiesExpressionFormGroup() {
		return new FormGroup<UntilActivityTypePropertiesExpressionFormProperties>({
			type: new FormControl<FilterActivityTypePropertiesConditionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This activity verifies that an external resource exists. */
	export interface ValidationActivity extends ControlActivity {

		/**
		 * Validation activity properties.
		 * Required
		 */
		typeProperties: ValidationActivityTypeProperties;
	}

	/** This activity verifies that an external resource exists. */
	export interface ValidationActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateValidationActivityFormGroup() {
		return new FormGroup<ValidationActivityFormProperties>({
		});

	}


	/** Validation activity properties. */
	export interface ValidationActivityTypeProperties {

		/** Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). */
		childItems?: string | null;

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: any;

		/** Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). */
		minimumSize?: string | null;

		/** A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). */
		sleep?: string | null;

		/** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout?: string | null;
	}

	/** Validation activity properties. */
	export interface ValidationActivityTypePropertiesFormProperties {

		/** Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). */
		childItems: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		dataset: FormControl<any | null | undefined>,

		/** Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). */
		minimumSize: FormControl<string | null | undefined>,

		/** A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). */
		sleep: FormControl<string | null | undefined>,

		/** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateValidationActivityTypePropertiesFormGroup() {
		return new FormGroup<ValidationActivityTypePropertiesFormProperties>({
			childItems: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			minimumSize: new FormControl<string | null | undefined>(undefined),
			sleep: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Vertica source. */
	export interface VerticaSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Vertica source. */
	export interface VerticaSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateVerticaSourceFormGroup() {
		return new FormGroup<VerticaSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This activity suspends pipeline execution for the specified interval. */
	export interface WaitActivity extends ControlActivity {

		/**
		 * Wait activity properties.
		 * Required
		 */
		typeProperties: WaitActivityTypeProperties;
	}

	/** This activity suspends pipeline execution for the specified interval. */
	export interface WaitActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateWaitActivityFormGroup() {
		return new FormGroup<WaitActivityFormProperties>({
		});

	}


	/** Wait activity properties. */
	export interface WaitActivityTypeProperties {

		/**
		 * Duration in seconds.
		 * Required
		 */
		waitTimeInSeconds: number;
	}

	/** Wait activity properties. */
	export interface WaitActivityTypePropertiesFormProperties {

		/**
		 * Duration in seconds.
		 * Required
		 */
		waitTimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateWaitActivityTypePropertiesFormGroup() {
		return new FormGroup<WaitActivityTypePropertiesFormProperties>({
			waitTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Web activity. */
	export interface WebActivity extends ExecutionActivity {

		/**
		 * Web activity type properties.
		 * Required
		 */
		typeProperties: WebActivityTypeProperties;
	}

	/** Web activity. */
	export interface WebActivityFormProperties extends ExecutionActivityFormProperties {
	}
	export function CreateWebActivityFormGroup() {
		return new FormGroup<WebActivityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedServiceName: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Web activity authentication properties. */
	export interface WebActivityAuthentication {

		/** The base definition of a secret type. */
		password?: WebActivityAuthenticationPassword;

		/** The base definition of a secret type. */
		pfx?: WebActivityAuthenticationPfx;

		/** Resource for which Azure Auth token will be requested when using MSI Authentication. */
		resource?: string | null;

		/**
		 * Web activity authentication (Basic/ClientCertificate/MSI)
		 * Required
		 */
		type: string;

		/** Web activity authentication user name for basic authentication. */
		username?: string | null;
	}

	/** Web activity authentication properties. */
	export interface WebActivityAuthenticationFormProperties {

		/** Resource for which Azure Auth token will be requested when using MSI Authentication. */
		resource: FormControl<string | null | undefined>,

		/**
		 * Web activity authentication (Basic/ClientCertificate/MSI)
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Web activity authentication user name for basic authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateWebActivityAuthenticationFormGroup() {
		return new FormGroup<WebActivityAuthenticationFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebActivityAuthenticationPassword {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface WebActivityAuthenticationPasswordFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebActivityAuthenticationPasswordFormGroup() {
		return new FormGroup<WebActivityAuthenticationPasswordFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebActivityAuthenticationPfx {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}
	export interface WebActivityAuthenticationPfxFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebActivityAuthenticationPfxFormGroup() {
		return new FormGroup<WebActivityAuthenticationPfxFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of HTTP methods supported by a WebActivity. */
	export enum WebActivityMethod { GET = 0, POST = 1, PUT = 2, DELETE = 3 }


	/** Web activity type properties. */
	export interface WebActivityTypeProperties {

		/** Web activity authentication properties. */
		authentication?: WebActivityAuthentication;

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body?: string | null;

		/** Integration runtime reference type. */
		connectVia?: any;

		/** List of datasets passed to web endpoint. */
		WebActivityTypePropertiesDatasets?: Array<WebActivityTypePropertiesDatasets>;

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers?: string | null;

		/** List of linked services passed to web endpoint. */
		WebActivityTypePropertiesLinkedServices?: Array<WebActivityTypePropertiesLinkedServices>;

		/**
		 * The list of HTTP methods supported by a WebActivity.
		 * Required
		 */
		method: WebActivityMethod;

		/**
		 * Web activity target endpoint and path. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;
	}

	/** Web activity type properties. */
	export interface WebActivityTypePropertiesFormProperties {

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body: FormControl<string | null | undefined>,

		/** Integration runtime reference type. */
		connectVia: FormControl<any | null | undefined>,

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers: FormControl<string | null | undefined>,

		/**
		 * The list of HTTP methods supported by a WebActivity.
		 * Required
		 */
		method: FormControl<WebActivityMethod | null | undefined>,

		/**
		 * Web activity target endpoint and path. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebActivityTypePropertiesFormGroup() {
		return new FormGroup<WebActivityTypePropertiesFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			connectVia: new FormControl<any | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<WebActivityMethod | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebActivityTypePropertiesDatasets {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: CopyActivityInputsType;
	}
	export interface WebActivityTypePropertiesDatasetsFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: FormControl<CopyActivityInputsType | null | undefined>,
	}
	export function CreateWebActivityTypePropertiesDatasetsFormGroup() {
		return new FormGroup<WebActivityTypePropertiesDatasetsFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CopyActivityInputsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebActivityTypePropertiesLinkedServices {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: CustomActivityReferenceObjectLinkedServicesType;
	}
	export interface WebActivityTypePropertiesLinkedServicesFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>,
	}
	export function CreateWebActivityTypePropertiesLinkedServicesFormGroup() {
		return new FormGroup<WebActivityTypePropertiesLinkedServicesFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CustomActivityReferenceObjectLinkedServicesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** WebHook activity. */
	export interface WebHookActivity extends ControlActivity {

		/**
		 * WebHook activity type properties.
		 * Required
		 */
		typeProperties: WebHookActivityTypeProperties;
	}

	/** WebHook activity. */
	export interface WebHookActivityFormProperties extends ControlActivityFormProperties {
	}
	export function CreateWebHookActivityFormGroup() {
		return new FormGroup<WebHookActivityFormProperties>({
		});

	}


	/** The list of HTTP methods supported by a WebHook activity. */
	export enum WebHookActivityMethod { POST = 0 }


	/** WebHook activity type properties. */
	export interface WebHookActivityTypeProperties {

		/** Web activity authentication properties. */
		authentication?: WebActivityAuthentication;

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body?: string | null;

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers?: string | null;

		/**
		 * The list of HTTP methods supported by a WebHook activity.
		 * Required
		 */
		method: WebHookActivityMethod;

		/** When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). */
		reportStatusOnCallBack?: string | null;

		/** The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout?: string | null;

		/**
		 * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: string;
	}

	/** WebHook activity type properties. */
	export interface WebHookActivityTypePropertiesFormProperties {

		/** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
		body: FormControl<string | null | undefined>,

		/** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
		headers: FormControl<string | null | undefined>,

		/**
		 * The list of HTTP methods supported by a WebHook activity.
		 * Required
		 */
		method: FormControl<WebHookActivityMethod | null | undefined>,

		/** When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). */
		reportStatusOnCallBack: FormControl<string | null | undefined>,

		/** The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
		timeout: FormControl<string | null | undefined>,

		/**
		 * WebHook activity target endpoint and path. Type: string (or Expression with resultType string).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebHookActivityTypePropertiesFormGroup() {
		return new FormGroup<WebHookActivityTypePropertiesFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<WebHookActivityMethod | null | undefined>(undefined, [Validators.required]),
			reportStatusOnCallBack: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A copy activity source for web page table. */
	export interface WebSource {
	}

	/** A copy activity source for web page table. */
	export interface WebSourceFormProperties {
	}
	export function CreateWebSourceFormGroup() {
		return new FormGroup<WebSourceFormProperties>({
		});

	}


	/** A copy activity Xero Service source. */
	export interface XeroSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Xero Service source. */
	export interface XeroSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateXeroSourceFormGroup() {
		return new FormGroup<XeroSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A copy activity Zoho server source. */
	export interface ZohoSource {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query?: string | null;
	}

	/** A copy activity Zoho server source. */
	export interface ZohoSourceFormProperties {

		/** A query to retrieve data from source. Type: string (or Expression with resultType string). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateZohoSourceFormGroup() {
		return new FormGroup<ZohoSourceFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

