import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an On-Premises Agent pool. */
	export interface AgentPool {

		/** Specifies a bandwidth limit for an agent pool. */
		bandwidthLimit?: BandwidthLimit;

		/** Specifies the client-specified AgentPool description. */
		displayName?: string | null;

		/** Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}` */
		name?: string | null;

		/** Output only. Specifies the state of the AgentPool. */
		state?: AgentPoolState | null;
	}

	/** Represents an On-Premises Agent pool. */
	export interface AgentPoolFormProperties {

		/** Specifies the client-specified AgentPool description. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. Specifies the state of the AgentPool. */
		state: FormControl<AgentPoolState | null | undefined>,
	}
	export function CreateAgentPoolFormGroup() {
		return new FormGroup<AgentPoolFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AgentPoolState | null | undefined>(undefined),
		});

	}


	/** Specifies a bandwidth limit for an agent pool. */
	export interface BandwidthLimit {

		/** Bandwidth rate in megabytes per second, distributed across all the agents in the pool. */
		limitMbps?: string | null;
	}

	/** Specifies a bandwidth limit for an agent pool. */
	export interface BandwidthLimitFormProperties {

		/** Bandwidth rate in megabytes per second, distributed across all the agents in the pool. */
		limitMbps: FormControl<string | null | undefined>,
	}
	export function CreateBandwidthLimitFormGroup() {
		return new FormGroup<BandwidthLimitFormProperties>({
			limitMbps: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentPoolState { STATE_UNSPECIFIED = 0, CREATING = 1, CREATED = 2, DELETING = 3 }


	/** AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
	export interface AwsAccessKey {

		/** Required. AWS access key ID. */
		accessKeyId?: string | null;

		/** Required. AWS secret access key. This field is not returned in RPC responses. */
		secretAccessKey?: string | null;
	}

	/** AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
	export interface AwsAccessKeyFormProperties {

		/** Required. AWS access key ID. */
		accessKeyId: FormControl<string | null | undefined>,

		/** Required. AWS secret access key. This field is not returned in RPC responses. */
		secretAccessKey: FormControl<string | null | undefined>,
	}
	export function CreateAwsAccessKeyFormGroup() {
		return new FormGroup<AwsAccessKeyFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AwsS3CompatibleData resource. */
	export interface AwsS3CompatibleData {

		/** Required. Specifies the name of the bucket. */
		bucketName?: string | null;

		/** Required. Specifies the endpoint of the storage service. */
		endpoint?: string | null;

		/** Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path?: string | null;

		/** Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region. */
		region?: string | null;

		/** S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers. */
		s3Metadata?: S3CompatibleMetadata;
	}

	/** An AwsS3CompatibleData resource. */
	export interface AwsS3CompatibleDataFormProperties {

		/** Required. Specifies the name of the bucket. */
		bucketName: FormControl<string | null | undefined>,

		/** Required. Specifies the endpoint of the storage service. */
		endpoint: FormControl<string | null | undefined>,

		/** Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path: FormControl<string | null | undefined>,

		/** Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3CompatibleDataFormGroup() {
		return new FormGroup<AwsS3CompatibleDataFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers. */
	export interface S3CompatibleMetadata {

		/** Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use. */
		authMethod?: S3CompatibleMetadataAuthMethod | null;

		/** The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use. */
		listApi?: S3CompatibleMetadataListApi | null;

		/** Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used. */
		protocol?: S3CompatibleMetadataProtocol | null;

		/** Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used. */
		requestModel?: S3CompatibleMetadataRequestModel | null;
	}

	/** S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers. */
	export interface S3CompatibleMetadataFormProperties {

		/** Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use. */
		authMethod: FormControl<S3CompatibleMetadataAuthMethod | null | undefined>,

		/** The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use. */
		listApi: FormControl<S3CompatibleMetadataListApi | null | undefined>,

		/** Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used. */
		protocol: FormControl<S3CompatibleMetadataProtocol | null | undefined>,

		/** Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used. */
		requestModel: FormControl<S3CompatibleMetadataRequestModel | null | undefined>,
	}
	export function CreateS3CompatibleMetadataFormGroup() {
		return new FormGroup<S3CompatibleMetadataFormProperties>({
			authMethod: new FormControl<S3CompatibleMetadataAuthMethod | null | undefined>(undefined),
			listApi: new FormControl<S3CompatibleMetadataListApi | null | undefined>(undefined),
			protocol: new FormControl<S3CompatibleMetadataProtocol | null | undefined>(undefined),
			requestModel: new FormControl<S3CompatibleMetadataRequestModel | null | undefined>(undefined),
		});

	}

	export enum S3CompatibleMetadataAuthMethod { AUTH_METHOD_UNSPECIFIED = 0, AUTH_METHOD_AWS_SIGNATURE_V4 = 1, AUTH_METHOD_AWS_SIGNATURE_V2 = 2 }

	export enum S3CompatibleMetadataListApi { LIST_API_UNSPECIFIED = 0, LIST_OBJECTS_V2 = 1, LIST_OBJECTS = 2 }

	export enum S3CompatibleMetadataProtocol { NETWORK_PROTOCOL_UNSPECIFIED = 0, NETWORK_PROTOCOL_HTTPS = 1, NETWORK_PROTOCOL_HTTP = 2 }

	export enum S3CompatibleMetadataRequestModel { REQUEST_MODEL_UNSPECIFIED = 0, REQUEST_MODEL_VIRTUAL_HOSTED_STYLE = 1, REQUEST_MODEL_PATH_STYLE = 2 }


	/** An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name. */
	export interface AwsS3Data {

		/** AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
		awsAccessKey?: AwsAccessKey;

		/** Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)). */
		bucketName?: string | null;

		/** Optional. Cloudfront domain name pointing to this bucket (as origin), to use when fetching. Format: `https://{id}.cloudfront.net` or any valid custom domain `https://...` */
		cloudfrontDomain?: string | null;

		/** Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in Secret Manager in JSON format: { "access_key_id": "ACCESS_KEY_ID", "secret_access_key": "SECRET_ACCESS_KEY" } GoogleServiceAccount must be granted `roles/secretmanager.secretAccessor` for the resource. See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more information. If `credentials_secret` is specified, do not specify role_arn or aws_access_key. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: `projects/{project_number}/secrets/{secret_name}` */
		credentialsSecret?: string | null;

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path?: string | null;

		/** The Amazon Resource Name (ARN) of the role to support temporary credentials via `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount for this project. */
		roleArn?: string | null;
	}

	/** An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name. */
	export interface AwsS3DataFormProperties {

		/** Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)). */
		bucketName: FormControl<string | null | undefined>,

		/** Optional. Cloudfront domain name pointing to this bucket (as origin), to use when fetching. Format: `https://{id}.cloudfront.net` or any valid custom domain `https://...` */
		cloudfrontDomain: FormControl<string | null | undefined>,

		/** Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in Secret Manager in JSON format: { "access_key_id": "ACCESS_KEY_ID", "secret_access_key": "SECRET_ACCESS_KEY" } GoogleServiceAccount must be granted `roles/secretmanager.secretAccessor` for the resource. See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more information. If `credentials_secret` is specified, do not specify role_arn or aws_access_key. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: `projects/{project_number}/secrets/{secret_name}` */
		credentialsSecret: FormControl<string | null | undefined>,

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) of the role to support temporary credentials via `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount for this project. */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateAwsS3DataFormGroup() {
		return new FormGroup<AwsS3DataFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			cloudfrontDomain: new FormControl<string | null | undefined>(undefined),
			credentialsSecret: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names). */
	export interface AzureBlobStorageData {

		/** Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
		azureCredentials?: AzureCredentials;

		/** Required. The container to transfer from the Azure Storage account. */
		container?: string | null;

		/** Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored in Secret Manager in JSON format: { "sas_token" : "SAS_TOKEN" } GoogleServiceAccount must be granted `roles/secretmanager.secretAccessor` for the resource. See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more information. If `credentials_secret` is specified, do not specify azure_credentials. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: `projects/{project_number}/secrets/{secret_name}` */
		credentialsSecret?: string | null;

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path?: string | null;

		/** Required. The name of the Azure Storage account. */
		storageAccount?: string | null;
	}

	/** An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names). */
	export interface AzureBlobStorageDataFormProperties {

		/** Required. The container to transfer from the Azure Storage account. */
		container: FormControl<string | null | undefined>,

		/** Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored in Secret Manager in JSON format: { "sas_token" : "SAS_TOKEN" } GoogleServiceAccount must be granted `roles/secretmanager.secretAccessor` for the resource. See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more information. If `credentials_secret` is specified, do not specify azure_credentials. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: `projects/{project_number}/secrets/{secret_name}` */
		credentialsSecret: FormControl<string | null | undefined>,

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. */
		path: FormControl<string | null | undefined>,

		/** Required. The name of the Azure Storage account. */
		storageAccount: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobStorageDataFormGroup() {
		return new FormGroup<AzureBlobStorageDataFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			credentialsSecret: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			storageAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
	export interface AzureCredentials {

		/** Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview). */
		sasToken?: string | null;
	}

	/** Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials). */
	export interface AzureCredentialsFormProperties {

		/** Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview). */
		sasToken: FormControl<string | null | undefined>,
	}
	export function CreateAzureCredentialsFormGroup() {
		return new FormGroup<AzureCredentialsFormProperties>({
			sasToken: new FormControl<string | null | undefined>(undefined),
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


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
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


	/** An entry describing an error that has occurred. */
	export interface ErrorLogEntry {

		/** A list of messages that carry the error details. */
		errorDetails?: Array<string>;

		/** Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated. */
		url?: string | null;
	}

	/** An entry describing an error that has occurred. */
	export interface ErrorLogEntryFormProperties {

		/** Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateErrorLogEntryFormGroup() {
		return new FormGroup<ErrorLogEntryFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of errors by error code, plus a count and sample error log entries. */
	export interface ErrorSummary {

		/** Required. */
		errorCode?: ErrorSummaryErrorCode | null;

		/** Required. Count of this type of error. */
		errorCount?: string | null;

		/** Error samples. At most 5 error log entries are recorded for a given error code for a single transfer operation. */
		errorLogEntries?: Array<ErrorLogEntry>;
	}

	/** A summary of errors by error code, plus a count and sample error log entries. */
	export interface ErrorSummaryFormProperties {

		/** Required. */
		errorCode: FormControl<ErrorSummaryErrorCode | null | undefined>,

		/** Required. Count of this type of error. */
		errorCount: FormControl<string | null | undefined>,
	}
	export function CreateErrorSummaryFormGroup() {
		return new FormGroup<ErrorSummaryFormProperties>({
			errorCode: new FormControl<ErrorSummaryErrorCode | null | undefined>(undefined),
			errorCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorSummaryErrorCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


	/** Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. */
	export interface EventStream {

		/** Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated. */
		eventStreamExpirationTime?: string | null;

		/** Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately. */
		eventStreamStartTime?: string | null;

		/** Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. */
		name?: string | null;
	}

	/** Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. */
	export interface EventStreamFormProperties {

		/** Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated. */
		eventStreamExpirationTime: FormControl<string | null | undefined>,

		/** Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately. */
		eventStreamStartTime: FormControl<string | null | undefined>,

		/** Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEventStreamFormGroup() {
		return new FormGroup<EventStreamFormProperties>({
			eventStreamExpirationTime: new FormControl<string | null | undefined>(undefined),
			eventStreamStartTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated. */
	export interface GcsData {

		/** Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements). */
		bucketName?: string | null;

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames). */
		path?: string | null;
	}

	/** In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated. */
	export interface GcsDataFormProperties {

		/** Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements). */
		bucketName: FormControl<string | null | undefined>,

		/** Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames). */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGcsDataFormGroup() {
		return new FormGroup<GcsDataFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google service account */
	export interface GoogleServiceAccount {

		/** Email address of the service account. */
		accountEmail?: string | null;

		/** Unique identifier for the service account. */
		subjectId?: string | null;
	}

	/** Google service account */
	export interface GoogleServiceAccountFormProperties {

		/** Email address of the service account. */
		accountEmail: FormControl<string | null | undefined>,

		/** Unique identifier for the service account. */
		subjectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleServiceAccountFormGroup() {
		return new FormGroup<GoogleServiceAccountFormProperties>({
			accountEmail: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer. */
	export interface HttpData {

		/** Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. */
		listUrl?: string | null;
	}

	/** An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer. */
	export interface HttpDataFormProperties {

		/** Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported. */
		listUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpDataFormGroup() {
		return new FormGroup<HttpDataFormProperties>({
			listUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from ListAgentPools. */
	export interface ListAgentPoolsResponse {

		/** A list of agent pools. */
		agentPools?: Array<AgentPool>;

		/** The list next page token. */
		nextPageToken?: string | null;
	}

	/** Response from ListAgentPools. */
	export interface ListAgentPoolsResponseFormProperties {

		/** The list next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentPoolsResponseFormGroup() {
		return new FormGroup<ListAgentPoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/** Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get. */
		metadata?: {[id: string]: any };

		/** The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`. */
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

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** Response from ListTransferJobs. */
	export interface ListTransferJobsResponse {

		/** The list next page token. */
		nextPageToken?: string | null;

		/** A list of transfer jobs. */
		transferJobs?: Array<TransferJob>;
	}

	/** Response from ListTransferJobs. */
	export interface ListTransferJobsResponseFormProperties {

		/** The list next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransferJobsResponseFormGroup() {
		return new FormGroup<ListTransferJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents the configuration of a transfer job that runs periodically. */
	export interface TransferJob {

		/** Output only. The time that the transfer job was created. */
		creationTime?: string | null;

		/** Output only. The time that the transfer job was deleted. */
		deletionTime?: string | null;

		/** A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. */
		description?: string | null;

		/** Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files. */
		eventStream?: EventStream;

		/** Output only. The time that the transfer job was last modified. */
		lastModificationTime?: string | null;

		/** The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig. */
		latestOperationName?: string | null;

		/** Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details. */
		loggingConfig?: LoggingConfig;

		/** A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error. */
		name?: string | null;

		/** Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`. */
		notificationConfig?: NotificationConfig;

		/** The ID of the Google Cloud project that owns the job. */
		projectId?: string | null;

		/** Transfers can be scheduled to recur or to run just once. */
		schedule?: Schedule;

		/** Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. */
		status?: TransferJobStatus | null;

		/** Configuration for running a transfer. */
		transferSpec?: TransferSpec;
	}

	/** This resource represents the configuration of a transfer job that runs periodically. */
	export interface TransferJobFormProperties {

		/** Output only. The time that the transfer job was created. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. The time that the transfer job was deleted. */
		deletionTime: FormControl<string | null | undefined>,

		/** A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. */
		description: FormControl<string | null | undefined>,

		/** Output only. The time that the transfer job was last modified. */
		lastModificationTime: FormControl<string | null | undefined>,

		/** The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig. */
		latestOperationName: FormControl<string | null | undefined>,

		/** A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error. */
		name: FormControl<string | null | undefined>,

		/** The ID of the Google Cloud project that owns the job. */
		projectId: FormControl<string | null | undefined>,

		/** Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. */
		status: FormControl<TransferJobStatus | null | undefined>,
	}
	export function CreateTransferJobFormGroup() {
		return new FormGroup<TransferJobFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			deletionTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModificationTime: new FormControl<string | null | undefined>(undefined),
			latestOperationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TransferJobStatus | null | undefined>(undefined),
		});

	}


	/** Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details. */
	export interface LoggingConfig {

		/** For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. */
		enableOnpremGcsTransferLogs?: boolean | null;

		/** States in which `log_actions` are logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead. */
		logActionStates?: Array<string>;

		/** Specifies the actions to be logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead. */
		logActions?: Array<string>;
	}

	/** Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details. */
	export interface LoggingConfigFormProperties {

		/** For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. */
		enableOnpremGcsTransferLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			enableOnpremGcsTransferLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`. */
	export interface NotificationConfig {

		/** Event types for which a notification is desired. If empty, send notifications for all event types. */
		eventTypes?: Array<string>;

		/** Required. The desired format of the notification message payloads. */
		payloadFormat?: NotificationConfigPayloadFormat | null;

		/** Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project}/topics/{topic}`. Not matching this format results in an INVALID_ARGUMENT error. */
		pubsubTopic?: string | null;
	}

	/** Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`. */
	export interface NotificationConfigFormProperties {

		/** Required. The desired format of the notification message payloads. */
		payloadFormat: FormControl<NotificationConfigPayloadFormat | null | undefined>,

		/** Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project}/topics/{topic}`. Not matching this format results in an INVALID_ARGUMENT error. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			payloadFormat: new FormControl<NotificationConfigPayloadFormat | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotificationConfigPayloadFormat { PAYLOAD_FORMAT_UNSPECIFIED = 0, NONE = 1, JSON = 2 }


	/** Transfers can be scheduled to recur or to run just once. */
	export interface Schedule {

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		endTimeOfDay?: TimeOfDay;

		/** Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. */
		repeatInterval?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		scheduleEndDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		scheduleStartDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTimeOfDay?: TimeOfDay;
	}

	/** Transfers can be scheduled to recur or to run just once. */
	export interface ScheduleFormProperties {

		/** Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. */
		repeatInterval: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			repeatInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TransferJobStatus { STATUS_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2, DELETED = 3 }


	/** Configuration for running a transfer. */
	export interface TransferSpec {

		/** An AwsS3CompatibleData resource. */
		awsS3CompatibleDataSource?: AwsS3CompatibleData;

		/** An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name. */
		awsS3DataSource?: AwsS3Data;

		/** An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names). */
		azureBlobStorageDataSource?: AzureBlobStorageData;

		/** In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated. */
		gcsDataSink?: GcsData;

		/** In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated. */
		gcsDataSource?: GcsData;

		/** In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated. */
		gcsIntermediateDataLocation?: GcsData;

		/** An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer. */
		httpDataSource?: HttpData;

		/** Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`. */
		objectConditions?: ObjectConditions;

		/** A POSIX filesystem resource. */
		posixDataSink?: PosixFilesystem;

		/** A POSIX filesystem resource. */
		posixDataSource?: PosixFilesystem;

		/** Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used. */
		sinkAgentPoolName?: string | null;

		/** Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. */
		sourceAgentPoolName?: string | null;

		/** Specifies where the manifest is located. */
		transferManifest?: TransferManifest;

		/** TransferOptions define the actions to be performed on objects in a transfer. */
		transferOptions?: TransferOptions;
	}

	/** Configuration for running a transfer. */
	export interface TransferSpecFormProperties {

		/** Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used. */
		sinkAgentPoolName: FormControl<string | null | undefined>,

		/** Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. */
		sourceAgentPoolName: FormControl<string | null | undefined>,
	}
	export function CreateTransferSpecFormGroup() {
		return new FormGroup<TransferSpecFormProperties>({
			sinkAgentPoolName: new FormControl<string | null | undefined>(undefined),
			sourceAgentPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`. */
	export interface ObjectConditions {

		/** If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers). */
		excludePrefixes?: Array<string>;

		/** If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers). */
		includePrefixes?: Array<string>;

		/** If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. */
		lastModifiedBefore?: string | null;

		/** If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day */
		lastModifiedSince?: string | null;

		/** Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred. */
		maxTimeElapsedSinceLastModification?: string | null;

		/** Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred. */
		minTimeElapsedSinceLastModification?: string | null;
	}

	/** Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`. */
	export interface ObjectConditionsFormProperties {

		/** If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. */
		lastModifiedBefore: FormControl<string | null | undefined>,

		/** If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day */
		lastModifiedSince: FormControl<string | null | undefined>,

		/** Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred. */
		maxTimeElapsedSinceLastModification: FormControl<string | null | undefined>,

		/** Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred. */
		minTimeElapsedSinceLastModification: FormControl<string | null | undefined>,
	}
	export function CreateObjectConditionsFormGroup() {
		return new FormGroup<ObjectConditionsFormProperties>({
			lastModifiedBefore: new FormControl<string | null | undefined>(undefined),
			lastModifiedSince: new FormControl<string | null | undefined>(undefined),
			maxTimeElapsedSinceLastModification: new FormControl<string | null | undefined>(undefined),
			minTimeElapsedSinceLastModification: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A POSIX filesystem resource. */
	export interface PosixFilesystem {

		/** Root directory path to the filesystem. */
		rootDirectory?: string | null;
	}

	/** A POSIX filesystem resource. */
	export interface PosixFilesystemFormProperties {

		/** Root directory path to the filesystem. */
		rootDirectory: FormControl<string | null | undefined>,
	}
	export function CreatePosixFilesystemFormGroup() {
		return new FormGroup<PosixFilesystemFormProperties>({
			rootDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies where the manifest is located. */
	export interface TransferManifest {

		/** Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have `storage.objects.get` permission for this object. An example path is `gs://bucket_name/path/manifest.csv`. */
		location?: string | null;
	}

	/** Specifies where the manifest is located. */
	export interface TransferManifestFormProperties {

		/** Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have `storage.objects.get` permission for this object. An example path is `gs://bucket_name/path/manifest.csv`. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateTransferManifestFormGroup() {
		return new FormGroup<TransferManifestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TransferOptions define the actions to be performed on objects in a transfer. */
	export interface TransferOptions {

		/** Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive. */
		deleteObjectsFromSourceAfterTransfer?: boolean | null;

		/** Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive. */
		deleteObjectsUniqueInSink?: boolean | null;

		/** Specifies the metadata options for running a transfer. */
		metadataOptions?: MetadataOptions;

		/** When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object. */
		overwriteObjectsAlreadyExistingInSink?: boolean | null;

		/** When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink. */
		overwriteWhen?: TransferOptionsOverwriteWhen | null;
	}

	/** TransferOptions define the actions to be performed on objects in a transfer. */
	export interface TransferOptionsFormProperties {

		/** Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive. */
		deleteObjectsFromSourceAfterTransfer: FormControl<boolean | null | undefined>,

		/** Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive. */
		deleteObjectsUniqueInSink: FormControl<boolean | null | undefined>,

		/** When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object. */
		overwriteObjectsAlreadyExistingInSink: FormControl<boolean | null | undefined>,

		/** When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink. */
		overwriteWhen: FormControl<TransferOptionsOverwriteWhen | null | undefined>,
	}
	export function CreateTransferOptionsFormGroup() {
		return new FormGroup<TransferOptionsFormProperties>({
			deleteObjectsFromSourceAfterTransfer: new FormControl<boolean | null | undefined>(undefined),
			deleteObjectsUniqueInSink: new FormControl<boolean | null | undefined>(undefined),
			overwriteObjectsAlreadyExistingInSink: new FormControl<boolean | null | undefined>(undefined),
			overwriteWhen: new FormControl<TransferOptionsOverwriteWhen | null | undefined>(undefined),
		});

	}


	/** Specifies the metadata options for running a transfer. */
	export interface MetadataOptions {

		/** Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT. */
		acl?: MetadataOptionsAcl | null;

		/** Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		gid?: MetadataOptionsGid | null;

		/** Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT. */
		kmsKey?: MetadataOptionsKmsKey | null;

		/** Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		mode?: MetadataOptionsMode | null;

		/** Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT. */
		storageClass?: MetadataOptionsStorageClass | null;

		/** Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		symlink?: MetadataOptionsSymlink | null;

		/** Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE. */
		temporaryHold?: MetadataOptionsTemporaryHold | null;

		/** Specifies how each object's `timeCreated` metadata is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TIME_CREATED_SKIP. */
		timeCreated?: MetadataOptionsTimeCreated | null;

		/** Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		uid?: MetadataOptionsUid | null;
	}

	/** Specifies the metadata options for running a transfer. */
	export interface MetadataOptionsFormProperties {

		/** Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT. */
		acl: FormControl<MetadataOptionsAcl | null | undefined>,

		/** Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		gid: FormControl<MetadataOptionsGid | null | undefined>,

		/** Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT. */
		kmsKey: FormControl<MetadataOptionsKmsKey | null | undefined>,

		/** Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		mode: FormControl<MetadataOptionsMode | null | undefined>,

		/** Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT. */
		storageClass: FormControl<MetadataOptionsStorageClass | null | undefined>,

		/** Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		symlink: FormControl<MetadataOptionsSymlink | null | undefined>,

		/** Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE. */
		temporaryHold: FormControl<MetadataOptionsTemporaryHold | null | undefined>,

		/** Specifies how each object's `timeCreated` metadata is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TIME_CREATED_SKIP. */
		timeCreated: FormControl<MetadataOptionsTimeCreated | null | undefined>,

		/** Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers. */
		uid: FormControl<MetadataOptionsUid | null | undefined>,
	}
	export function CreateMetadataOptionsFormGroup() {
		return new FormGroup<MetadataOptionsFormProperties>({
			acl: new FormControl<MetadataOptionsAcl | null | undefined>(undefined),
			gid: new FormControl<MetadataOptionsGid | null | undefined>(undefined),
			kmsKey: new FormControl<MetadataOptionsKmsKey | null | undefined>(undefined),
			mode: new FormControl<MetadataOptionsMode | null | undefined>(undefined),
			storageClass: new FormControl<MetadataOptionsStorageClass | null | undefined>(undefined),
			symlink: new FormControl<MetadataOptionsSymlink | null | undefined>(undefined),
			temporaryHold: new FormControl<MetadataOptionsTemporaryHold | null | undefined>(undefined),
			timeCreated: new FormControl<MetadataOptionsTimeCreated | null | undefined>(undefined),
			uid: new FormControl<MetadataOptionsUid | null | undefined>(undefined),
		});

	}

	export enum MetadataOptionsAcl { ACL_UNSPECIFIED = 0, ACL_DESTINATION_BUCKET_DEFAULT = 1, ACL_PRESERVE = 2 }

	export enum MetadataOptionsGid { GID_UNSPECIFIED = 0, GID_SKIP = 1, GID_NUMBER = 2 }

	export enum MetadataOptionsKmsKey { KMS_KEY_UNSPECIFIED = 0, KMS_KEY_DESTINATION_BUCKET_DEFAULT = 1, KMS_KEY_PRESERVE = 2 }

	export enum MetadataOptionsMode { MODE_UNSPECIFIED = 0, MODE_SKIP = 1, MODE_PRESERVE = 2 }

	export enum MetadataOptionsStorageClass { STORAGE_CLASS_UNSPECIFIED = 0, STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT = 1, STORAGE_CLASS_PRESERVE = 2, STORAGE_CLASS_STANDARD = 3, STORAGE_CLASS_NEARLINE = 4, STORAGE_CLASS_COLDLINE = 5, STORAGE_CLASS_ARCHIVE = 6 }

	export enum MetadataOptionsSymlink { SYMLINK_UNSPECIFIED = 0, SYMLINK_SKIP = 1, SYMLINK_PRESERVE = 2 }

	export enum MetadataOptionsTemporaryHold { TEMPORARY_HOLD_UNSPECIFIED = 0, TEMPORARY_HOLD_SKIP = 1, TEMPORARY_HOLD_PRESERVE = 2 }

	export enum MetadataOptionsTimeCreated { TIME_CREATED_UNSPECIFIED = 0, TIME_CREATED_SKIP = 1, TIME_CREATED_PRESERVE_AS_CUSTOM_TIME = 2 }

	export enum MetadataOptionsUid { UID_UNSPECIFIED = 0, UID_SKIP = 1, UID_NUMBER = 2 }

	export enum TransferOptionsOverwriteWhen { OVERWRITE_WHEN_UNSPECIFIED = 0, DIFFERENT = 1, NEVER = 2, ALWAYS = 3 }


	/** Request passed to PauseTransferOperation. */
	export interface PauseTransferOperationRequest {
	}

	/** Request passed to PauseTransferOperation. */
	export interface PauseTransferOperationRequestFormProperties {
	}
	export function CreatePauseTransferOperationRequestFormGroup() {
		return new FormGroup<PauseTransferOperationRequestFormProperties>({
		});

	}


	/** Request passed to ResumeTransferOperation. */
	export interface ResumeTransferOperationRequest {
	}

	/** Request passed to ResumeTransferOperation. */
	export interface ResumeTransferOperationRequestFormProperties {
	}
	export function CreateResumeTransferOperationRequestFormGroup() {
		return new FormGroup<ResumeTransferOperationRequestFormProperties>({
		});

	}


	/** Request passed to RunTransferJob. */
	export interface RunTransferJobRequest {

		/** Required. The ID of the Google Cloud project that owns the transfer job. */
		projectId?: string | null;
	}

	/** Request passed to RunTransferJob. */
	export interface RunTransferJobRequestFormProperties {

		/** Required. The ID of the Google Cloud project that owns the transfer job. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateRunTransferJobRequestFormGroup() {
		return new FormGroup<RunTransferJobRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of counters that report the progress of a transfer operation. */
	export interface TransferCounters {

		/** Bytes that are copied to the data sink. */
		bytesCopiedToSink?: string | null;

		/** Bytes that are deleted from the data sink. */
		bytesDeletedFromSink?: string | null;

		/** Bytes that are deleted from the data source. */
		bytesDeletedFromSource?: string | null;

		/** Bytes that failed to be deleted from the data sink. */
		bytesFailedToDeleteFromSink?: string | null;

		/** Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. */
		bytesFoundFromSource?: string | null;

		/** Bytes found only in the data sink that are scheduled to be deleted. */
		bytesFoundOnlyFromSink?: string | null;

		/** Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred. */
		bytesFromSourceFailed?: string | null;

		/** Bytes in the data source that are not transferred because they already exist in the data sink. */
		bytesFromSourceSkippedBySync?: string | null;

		/** For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred. */
		directoriesFailedToListFromSource?: string | null;

		/** For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is `base/` and there are two other directories, `a/` and `b/` under this directory, the count after listing `base/`, `base/a/` and `base/b/` is 3. */
		directoriesFoundFromSource?: string | null;

		/** For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source. */
		directoriesSuccessfullyListedFromSource?: string | null;

		/** Number of successfully cleaned up intermediate objects. */
		intermediateObjectsCleanedUp?: string | null;

		/** Number of intermediate objects failed cleaned up. */
		intermediateObjectsFailedCleanedUp?: string | null;

		/** Objects that are copied to the data sink. */
		objectsCopiedToSink?: string | null;

		/** Objects that are deleted from the data sink. */
		objectsDeletedFromSink?: string | null;

		/** Objects that are deleted from the data source. */
		objectsDeletedFromSource?: string | null;

		/** Objects that failed to be deleted from the data sink. */
		objectsFailedToDeleteFromSink?: string | null;

		/** Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. */
		objectsFoundFromSource?: string | null;

		/** Objects found only in the data sink that are scheduled to be deleted. */
		objectsFoundOnlyFromSink?: string | null;

		/** Objects in the data source that failed to be transferred or that failed to be deleted after being transferred. */
		objectsFromSourceFailed?: string | null;

		/** Objects in the data source that are not transferred because they already exist in the data sink. */
		objectsFromSourceSkippedBySync?: string | null;
	}

	/** A collection of counters that report the progress of a transfer operation. */
	export interface TransferCountersFormProperties {

		/** Bytes that are copied to the data sink. */
		bytesCopiedToSink: FormControl<string | null | undefined>,

		/** Bytes that are deleted from the data sink. */
		bytesDeletedFromSink: FormControl<string | null | undefined>,

		/** Bytes that are deleted from the data source. */
		bytesDeletedFromSource: FormControl<string | null | undefined>,

		/** Bytes that failed to be deleted from the data sink. */
		bytesFailedToDeleteFromSink: FormControl<string | null | undefined>,

		/** Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. */
		bytesFoundFromSource: FormControl<string | null | undefined>,

		/** Bytes found only in the data sink that are scheduled to be deleted. */
		bytesFoundOnlyFromSink: FormControl<string | null | undefined>,

		/** Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred. */
		bytesFromSourceFailed: FormControl<string | null | undefined>,

		/** Bytes in the data source that are not transferred because they already exist in the data sink. */
		bytesFromSourceSkippedBySync: FormControl<string | null | undefined>,

		/** For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred. */
		directoriesFailedToListFromSource: FormControl<string | null | undefined>,

		/** For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is `base/` and there are two other directories, `a/` and `b/` under this directory, the count after listing `base/`, `base/a/` and `base/b/` is 3. */
		directoriesFoundFromSource: FormControl<string | null | undefined>,

		/** For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source. */
		directoriesSuccessfullyListedFromSource: FormControl<string | null | undefined>,

		/** Number of successfully cleaned up intermediate objects. */
		intermediateObjectsCleanedUp: FormControl<string | null | undefined>,

		/** Number of intermediate objects failed cleaned up. */
		intermediateObjectsFailedCleanedUp: FormControl<string | null | undefined>,

		/** Objects that are copied to the data sink. */
		objectsCopiedToSink: FormControl<string | null | undefined>,

		/** Objects that are deleted from the data sink. */
		objectsDeletedFromSink: FormControl<string | null | undefined>,

		/** Objects that are deleted from the data source. */
		objectsDeletedFromSource: FormControl<string | null | undefined>,

		/** Objects that failed to be deleted from the data sink. */
		objectsFailedToDeleteFromSink: FormControl<string | null | undefined>,

		/** Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. */
		objectsFoundFromSource: FormControl<string | null | undefined>,

		/** Objects found only in the data sink that are scheduled to be deleted. */
		objectsFoundOnlyFromSink: FormControl<string | null | undefined>,

		/** Objects in the data source that failed to be transferred or that failed to be deleted after being transferred. */
		objectsFromSourceFailed: FormControl<string | null | undefined>,

		/** Objects in the data source that are not transferred because they already exist in the data sink. */
		objectsFromSourceSkippedBySync: FormControl<string | null | undefined>,
	}
	export function CreateTransferCountersFormGroup() {
		return new FormGroup<TransferCountersFormProperties>({
			bytesCopiedToSink: new FormControl<string | null | undefined>(undefined),
			bytesDeletedFromSink: new FormControl<string | null | undefined>(undefined),
			bytesDeletedFromSource: new FormControl<string | null | undefined>(undefined),
			bytesFailedToDeleteFromSink: new FormControl<string | null | undefined>(undefined),
			bytesFoundFromSource: new FormControl<string | null | undefined>(undefined),
			bytesFoundOnlyFromSink: new FormControl<string | null | undefined>(undefined),
			bytesFromSourceFailed: new FormControl<string | null | undefined>(undefined),
			bytesFromSourceSkippedBySync: new FormControl<string | null | undefined>(undefined),
			directoriesFailedToListFromSource: new FormControl<string | null | undefined>(undefined),
			directoriesFoundFromSource: new FormControl<string | null | undefined>(undefined),
			directoriesSuccessfullyListedFromSource: new FormControl<string | null | undefined>(undefined),
			intermediateObjectsCleanedUp: new FormControl<string | null | undefined>(undefined),
			intermediateObjectsFailedCleanedUp: new FormControl<string | null | undefined>(undefined),
			objectsCopiedToSink: new FormControl<string | null | undefined>(undefined),
			objectsDeletedFromSink: new FormControl<string | null | undefined>(undefined),
			objectsDeletedFromSource: new FormControl<string | null | undefined>(undefined),
			objectsFailedToDeleteFromSink: new FormControl<string | null | undefined>(undefined),
			objectsFoundFromSource: new FormControl<string | null | undefined>(undefined),
			objectsFoundOnlyFromSink: new FormControl<string | null | undefined>(undefined),
			objectsFromSourceFailed: new FormControl<string | null | undefined>(undefined),
			objectsFromSourceSkippedBySync: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the execution of a transfer. */
	export interface TransferOperation {

		/** A collection of counters that report the progress of a transfer operation. */
		counters?: TransferCounters;

		/** End time of this transfer execution. */
		endTime?: string | null;

		/** Summarizes errors encountered with sample error log entries. */
		errorBreakdowns?: Array<ErrorSummary>;

		/** Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details. */
		loggingConfig?: LoggingConfig;

		/** A globally unique ID assigned by the system. */
		name?: string | null;

		/** Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`. */
		notificationConfig?: NotificationConfig;

		/** The ID of the Google Cloud project that owns the operation. */
		projectId?: string | null;

		/** Start time of this transfer execution. */
		startTime?: string | null;

		/** Status of the transfer operation. */
		status?: TransferOperationStatus | null;

		/** The name of the transfer job that triggers this transfer operation. */
		transferJobName?: string | null;

		/** Configuration for running a transfer. */
		transferSpec?: TransferSpec;
	}

	/** A description of the execution of a transfer. */
	export interface TransferOperationFormProperties {

		/** End time of this transfer execution. */
		endTime: FormControl<string | null | undefined>,

		/** A globally unique ID assigned by the system. */
		name: FormControl<string | null | undefined>,

		/** The ID of the Google Cloud project that owns the operation. */
		projectId: FormControl<string | null | undefined>,

		/** Start time of this transfer execution. */
		startTime: FormControl<string | null | undefined>,

		/** Status of the transfer operation. */
		status: FormControl<TransferOperationStatus | null | undefined>,

		/** The name of the transfer job that triggers this transfer operation. */
		transferJobName: FormControl<string | null | undefined>,
	}
	export function CreateTransferOperationFormGroup() {
		return new FormGroup<TransferOperationFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TransferOperationStatus | null | undefined>(undefined),
			transferJobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransferOperationStatus { STATUS_UNSPECIFIED = 0, IN_PROGRESS = 1, PAUSED = 2, SUCCESS = 3, FAILED = 4, ABORTED = 5, QUEUED = 6, SUSPENDING = 7 }


	/** Request passed to UpdateTransferJob. */
	export interface UpdateTransferJobRequest {

		/** Required. The ID of the Google Cloud project that owns the job. */
		projectId?: string | null;

		/** This resource represents the configuration of a transfer job that runs periodically. */
		transferJob?: TransferJob;

		/** The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT. */
		updateTransferJobFieldMask?: string | null;
	}

	/** Request passed to UpdateTransferJob. */
	export interface UpdateTransferJobRequestFormProperties {

		/** Required. The ID of the Google Cloud project that owns the job. */
		projectId: FormControl<string | null | undefined>,

		/** The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT. */
		updateTransferJobFieldMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTransferJobRequestFormGroup() {
		return new FormGroup<UpdateTransferJobRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			updateTransferJobFieldMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
		 * Get v1/googleServiceAccounts/{projectId}
		 * @param {string} projectId Required. The ID of the Google Cloud project that the Google service account is associated with.
		 * @return {GoogleServiceAccount} Successful response
		 */
		Storagetransfer_googleServiceAccounts_get(projectId: string): Observable<GoogleServiceAccount> {
			return this.http.get<GoogleServiceAccount>(this.baseUri + 'v1/googleServiceAccounts/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Lists agent pools.
		 * Get v1/projects/{projectId}/agentPools
		 * @param {string} projectId Required. The ID of the Google Cloud project that owns the job.
		 * @param {string} filter An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
		 * @param {number} pageSize The list page size. The max allowed value is `256`.
		 * @param {string} pageToken The list page token.
		 * @return {ListAgentPoolsResponse} Successful response
		 */
		Storagetransfer_projects_agentPools_list(projectId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAgentPoolsResponse> {
			return this.http.get<ListAgentPoolsResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/agentPools&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an agent pool resource.
		 * Post v1/projects/{projectId}/agentPools
		 * @param {string} projectId Required. The ID of the Google Cloud project that owns the agent pool.
		 * @param {string} agentPoolId Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.
		 * @return {AgentPool} Successful response
		 */
		Storagetransfer_projects_agentPools_create(projectId: string, agentPoolId: string | null | undefined, requestBody: AgentPool): Observable<AgentPool> {
			return this.http.post<AgentPool>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/agentPools&agentPoolId=' + (agentPoolId == null ? '' : encodeURIComponent(agentPoolId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists transfer jobs.
		 * Get v1/transferJobs
		 * @param {string} filter Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.
		 * @param {number} pageSize The list page size. The max allowed value is 256.
		 * @param {string} pageToken The list page token.
		 * @return {ListTransferJobsResponse} Successful response
		 */
		Storagetransfer_transferJobs_list(filter: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTransferJobsResponse> {
			return this.http.get<ListTransferJobsResponse>(this.baseUri + 'v1/transferJobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a transfer job that runs periodically.
		 * Post v1/transferJobs
		 * @return {TransferJob} Successful response
		 */
		Storagetransfer_transferJobs_create(requestBody: TransferJob): Observable<TransferJob> {
			return this.http.post<TransferJob>(this.baseUri + 'v1/transferJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
		 * Delete v1/{jobName}
		 * @param {string} jobName Required. The job to delete.
		 * @param {string} projectId Required. The ID of the Google Cloud project that owns the job.
		 * @return {Empty} Successful response
		 */
		Storagetransfer_transferJobs_delete(jobName: string, projectId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Gets a transfer job.
		 * Get v1/{jobName}
		 * @param {string} jobName Required. The job to get.
		 * @param {string} projectId Required. The ID of the Google Cloud project that owns the job.
		 * @return {TransferJob} Successful response
		 */
		Storagetransfer_transferJobs_get(jobName: string, projectId: string): Observable<TransferJob> {
			return this.http.get<TransferJob>(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
		 * Patch v1/{jobName}
		 * @param {string} jobName Required. The name of job to update.
		 * @return {TransferJob} Successful response
		 */
		Storagetransfer_transferJobs_patch(jobName: string, requestBody: UpdateTransferJobRequest): Observable<TransferJob> {
			return this.http.patch<TransferJob>(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.
		 * Post v1/{jobName}:run
		 * @param {string} jobName Required. The name of the transfer job.
		 * @return {Operation} Successful response
		 */
		Storagetransfer_transferJobs_run(jobName: string, requestBody: RunTransferJobRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an agent pool.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the agent pool to delete.
		 * @return {Empty} Successful response
		 */
		Storagetransfer_projects_agentPools_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the type being listed; must be `transferOperations`.
		 * @param {string} filter Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
		 * @param {number} pageSize The list page size. The max allowed value is 256.
		 * @param {string} pageToken The list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Storagetransfer_transferOperations_list(name: string, filter: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates an existing agent pool resource.
		 * Patch v1/{name}
		 * @param {string} name Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`
		 * @param {string} updateMask The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit
		 * @return {AgentPool} Successful response
		 */
		Storagetransfer_projects_agentPools_patch(name: string, updateMask: string | null | undefined, requestBody: AgentPool): Observable<AgentPool> {
			return this.http.patch<AgentPool>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Storagetransfer_transferOperations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pauses a transfer operation.
		 * Post v1/{name}:pause
		 * @param {string} name Required. The name of the transfer operation.
		 * @return {Empty} Successful response
		 */
		Storagetransfer_transferOperations_pause(name: string, requestBody: PauseTransferOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes a transfer operation that is paused.
		 * Post v1/{name}:resume
		 * @param {string} name Required. The name of the transfer operation.
		 * @return {Empty} Successful response
		 */
		Storagetransfer_transferOperations_resume(name: string, requestBody: ResumeTransferOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

