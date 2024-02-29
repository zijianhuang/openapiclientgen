import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetUserAccessTasksResponse {
		userAccessResultsList?: Array<UserAccessResultItem>;
	}
	export interface BatchGetUserAccessTasksResponseFormProperties {
	}
	export function CreateBatchGetUserAccessTasksResponseFormGroup() {
		return new FormGroup<BatchGetUserAccessTasksResponseFormProperties>({
		});

	}


	/** Contains information about a user's access to an application. */
	export interface UserAccessResultItem {
		app?: string;
		tenantId?: string;
		tenantDisplayName?: string;
		taskId?: string;
		resultStatus?: ResultStatus;
		email?: string;
		userId?: string;
		userFullName?: string;
		userFirstName?: string;
		userLastName?: string;
		userStatus?: string;
		taskError?: TaskError;
	}

	/** Contains information about a user's access to an application. */
	export interface UserAccessResultItemFormProperties {
		app: FormControl<string | null | undefined>,
		tenantId: FormControl<string | null | undefined>,
		tenantDisplayName: FormControl<string | null | undefined>,
		taskId: FormControl<string | null | undefined>,
		resultStatus: FormControl<ResultStatus | null | undefined>,
		email: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userFullName: FormControl<string | null | undefined>,
		userFirstName: FormControl<string | null | undefined>,
		userLastName: FormControl<string | null | undefined>,
		userStatus: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessResultItemFormGroup() {
		return new FormGroup<UserAccessResultItemFormProperties>({
			app: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantDisplayName: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
			resultStatus: new FormControl<ResultStatus | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userFullName: new FormControl<string | null | undefined>(undefined),
			userFirstName: new FormControl<string | null | undefined>(undefined),
			userLastName: new FormControl<string | null | undefined>(undefined),
			userStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResultStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', EXPIRED = 'EXPIRED' }


	/** Contains information about an error returned from a user access task. */
	export interface TaskError {
		errorCode?: string;
		errorMessage?: string;
	}

	/** Contains information about an error returned from a user access task. */
	export interface TaskErrorFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTaskErrorFormGroup() {
		return new FormGroup<TaskErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConnectAppAuthorizationResponse {

		/** Required */
		appAuthorizationSummary: AppAuthorizationSummary;
	}
	export interface ConnectAppAuthorizationResponseFormProperties {
	}
	export function CreateConnectAppAuthorizationResponseFormGroup() {
		return new FormGroup<ConnectAppAuthorizationResponseFormProperties>({
		});

	}


	/** Contains a summary of an app authorization. */
	export interface AppAuthorizationSummary {

		/** Required */
		appAuthorizationArn: string;

		/** Required */
		appBundleArn: string;

		/** Required */
		app: string;

		/** Required */
		tenant: Tenant;

		/** Required */
		status: AppAuthorizationStatus;

		/** Required */
		updatedAt: Date;
	}

	/** Contains a summary of an app authorization. */
	export interface AppAuthorizationSummaryFormProperties {

		/** Required */
		appAuthorizationArn: FormControl<string | null | undefined>,

		/** Required */
		appBundleArn: FormControl<string | null | undefined>,

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AppAuthorizationStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAppAuthorizationSummaryFormGroup() {
		return new FormGroup<AppAuthorizationSummaryFormProperties>({
			appAuthorizationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appBundleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AppAuthorizationStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an application tenant. */
	export interface Tenant {

		/** Required */
		tenantIdentifier: string;

		/** Required */
		tenantDisplayName: string;
	}

	/** Contains information about an application tenant. */
	export interface TenantFormProperties {

		/** Required */
		tenantIdentifier: FormControl<string | null | undefined>,

		/** Required */
		tenantDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateTenantFormGroup() {
		return new FormGroup<TenantFormProperties>({
			tenantIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppAuthorizationStatus { PendingConnect = 'PendingConnect', Connected = 'Connected', ConnectionValidationFailed = 'ConnectionValidationFailed', TokenAutoRotationFailed = 'TokenAutoRotationFailed' }

	export interface CreateAppAuthorizationResponse {

		/** Required */
		appAuthorization: AppAuthorization;
	}
	export interface CreateAppAuthorizationResponseFormProperties {
	}
	export function CreateCreateAppAuthorizationResponseFormGroup() {
		return new FormGroup<CreateAppAuthorizationResponseFormProperties>({
		});

	}


	/** Contains information about an app authorization. */
	export interface AppAuthorization {

		/** Required */
		appAuthorizationArn: string;

		/** Required */
		appBundleArn: string;

		/** Required */
		app: string;

		/** Required */
		tenant: Tenant;

		/** Required */
		authType: AuthType;

		/** Required */
		status: AppAuthorizationStatus;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
		persona?: Persona;
		authUrl?: string;
	}

	/** Contains information about an app authorization. */
	export interface AppAuthorizationFormProperties {

		/** Required */
		appAuthorizationArn: FormControl<string | null | undefined>,

		/** Required */
		appBundleArn: FormControl<string | null | undefined>,

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		authType: FormControl<AuthType | null | undefined>,

		/** Required */
		status: FormControl<AppAuthorizationStatus | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
		persona: FormControl<Persona | null | undefined>,
		authUrl: FormControl<string | null | undefined>,
	}
	export function CreateAppAuthorizationFormGroup() {
		return new FormGroup<AppAuthorizationFormProperties>({
			appAuthorizationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appBundleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AppAuthorizationStatus | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			persona: new FormControl<Persona | null | undefined>(undefined),
			authUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthType { oauth2 = 'oauth2', apiKey = 'apiKey' }

	export enum Persona { admin = 'admin', endUser = 'endUser' }


	/** Contains OAuth2 client credential information. */
	export interface Oauth2Credential {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;
	}

	/** Contains OAuth2 client credential information. */
	export interface Oauth2CredentialFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,
	}
	export function CreateOauth2CredentialFormGroup() {
		return new FormGroup<Oauth2CredentialFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains API key credential information. */
	export interface ApiKeyCredential {

		/** Required */
		apiKey: string;
	}

	/** Contains API key credential information. */
	export interface ApiKeyCredentialFormProperties {

		/** Required */
		apiKey: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyCredentialFormGroup() {
		return new FormGroup<ApiKeyCredentialFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The key or keys of the key-value pairs for the tag or tags assigned to a resource. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** The key or keys of the key-value pairs for the tag or tags assigned to a resource. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateAppBundleResponse {

		/** Required */
		appBundle: AppBundle;
	}
	export interface CreateAppBundleResponseFormProperties {
	}
	export function CreateCreateAppBundleResponseFormGroup() {
		return new FormGroup<CreateAppBundleResponseFormProperties>({
		});

	}


	/** Contains information about an app bundle. */
	export interface AppBundle {

		/** Required */
		arn: string;
		customerManagedKeyArn?: string;
	}

	/** Contains information about an app bundle. */
	export interface AppBundleFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		customerManagedKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateAppBundleFormGroup() {
		return new FormGroup<AppBundleFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customerManagedKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIngestionResponse {

		/** Required */
		ingestion: Ingestion;
	}
	export interface CreateIngestionResponseFormProperties {
	}
	export function CreateCreateIngestionResponseFormGroup() {
		return new FormGroup<CreateIngestionResponseFormProperties>({
		});

	}


	/** Contains information about an ingestion. */
	export interface Ingestion {

		/** Required */
		arn: string;

		/** Required */
		appBundleArn: string;

		/** Required */
		app: string;

		/** Required */
		tenantId: string;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		state: IngestionState;

		/** Required */
		ingestionType: IngestionType;
	}

	/** Contains information about an ingestion. */
	export interface IngestionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		appBundleArn: FormControl<string | null | undefined>,

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		tenantId: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<IngestionState | null | undefined>,

		/** Required */
		ingestionType: FormControl<IngestionType | null | undefined>,
	}
	export function CreateIngestionFormGroup() {
		return new FormGroup<IngestionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appBundleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<IngestionState | null | undefined>(undefined, [Validators.required]),
			ingestionType: new FormControl<IngestionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IngestionState { enabled = 'enabled', disabled = 'disabled' }

	export enum IngestionType { auditLog = 'auditLog' }

	export interface CreateIngestionDestinationResponse {

		/** Required */
		ingestionDestination: IngestionDestination;
	}
	export interface CreateIngestionDestinationResponseFormProperties {
	}
	export function CreateCreateIngestionDestinationResponseFormGroup() {
		return new FormGroup<CreateIngestionDestinationResponseFormProperties>({
		});

	}


	/** Contains information about an ingestion destination. */
	export interface IngestionDestination {

		/** Required */
		arn: string;

		/** Required */
		ingestionArn: string;

		/** Required */
		processingConfiguration: ProcessingConfiguration;

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		status?: IngestionDestinationStatus;
		statusReason?: string;
		createdAt?: Date;
		updatedAt?: Date;
	}

	/** Contains information about an ingestion destination. */
	export interface IngestionDestinationFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		ingestionArn: FormControl<string | null | undefined>,
		status: FormControl<IngestionDestinationStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateIngestionDestinationFormGroup() {
		return new FormGroup<IngestionDestinationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ingestionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<IngestionDestinationStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information about how ingested data is processed. */
	export interface ProcessingConfiguration {
		auditLog?: AuditLogProcessingConfiguration;
	}

	/** Contains information about how ingested data is processed. */
	export interface ProcessingConfigurationFormProperties {
	}
	export function CreateProcessingConfigurationFormGroup() {
		return new FormGroup<ProcessingConfigurationFormProperties>({
		});

	}


	/** Contains information about an audit log processing configuration. */
	export interface AuditLogProcessingConfiguration {

		/** Required */
		schema: Schema;

		/** Required */
		format: Format;
	}

	/** Contains information about an audit log processing configuration. */
	export interface AuditLogProcessingConfigurationFormProperties {

		/** Required */
		schema: FormControl<Schema | null | undefined>,

		/** Required */
		format: FormControl<Format | null | undefined>,
	}
	export function CreateAuditLogProcessingConfigurationFormGroup() {
		return new FormGroup<AuditLogProcessingConfigurationFormProperties>({
			schema: new FormControl<Schema | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Schema { ocsf = 'ocsf', raw = 'raw' }

	export enum Format { json = 'json', parquet = 'parquet' }


	/** Contains information about the destination of ingested data. */
	export interface DestinationConfiguration {
		auditLog?: AuditLogDestinationConfiguration;
	}

	/** Contains information about the destination of ingested data. */
	export interface DestinationConfigurationFormProperties {
	}
	export function CreateDestinationConfigurationFormGroup() {
		return new FormGroup<DestinationConfigurationFormProperties>({
		});

	}


	/** Contains information about an audit log destination configuration. */
	export interface AuditLogDestinationConfiguration {

		/** Required */
		destination: Destination;
	}

	/** Contains information about an audit log destination configuration. */
	export interface AuditLogDestinationConfigurationFormProperties {
	}
	export function CreateAuditLogDestinationConfigurationFormGroup() {
		return new FormGroup<AuditLogDestinationConfigurationFormProperties>({
		});

	}


	/** Contains information about an audit log destination. */
	export interface Destination {
		s3Bucket?: S3Bucket;
		firehoseStream?: FirehoseStream;
	}

	/** Contains information about an audit log destination. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** Contains information about an Amazon S3 bucket. */
	export interface S3Bucket {

		/** Required */
		bucketName: string;
		prefix?: string;
	}

	/** Contains information about an Amazon S3 bucket. */
	export interface S3BucketFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketFormGroup() {
		return new FormGroup<S3BucketFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseStream {

		/** Required */
		streamName: string;
	}

	/** Contains information about an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseStreamFormProperties {

		/** Required */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateFirehoseStreamFormGroup() {
		return new FormGroup<FirehoseStreamFormProperties>({
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IngestionDestinationStatus { Active = 'Active', Failed = 'Failed' }

	export interface DeleteAppAuthorizationResponse {
	}
	export interface DeleteAppAuthorizationResponseFormProperties {
	}
	export function CreateDeleteAppAuthorizationResponseFormGroup() {
		return new FormGroup<DeleteAppAuthorizationResponseFormProperties>({
		});

	}

	export interface DeleteAppBundleResponse {
	}
	export interface DeleteAppBundleResponseFormProperties {
	}
	export function CreateDeleteAppBundleResponseFormGroup() {
		return new FormGroup<DeleteAppBundleResponseFormProperties>({
		});

	}

	export interface DeleteIngestionResponse {
	}
	export interface DeleteIngestionResponseFormProperties {
	}
	export function CreateDeleteIngestionResponseFormGroup() {
		return new FormGroup<DeleteIngestionResponseFormProperties>({
		});

	}

	export interface DeleteIngestionDestinationResponse {
	}
	export interface DeleteIngestionDestinationResponseFormProperties {
	}
	export function CreateDeleteIngestionDestinationResponseFormGroup() {
		return new FormGroup<DeleteIngestionDestinationResponseFormProperties>({
		});

	}

	export interface GetAppAuthorizationResponse {

		/** Required */
		appAuthorization: AppAuthorization;
	}
	export interface GetAppAuthorizationResponseFormProperties {
	}
	export function CreateGetAppAuthorizationResponseFormGroup() {
		return new FormGroup<GetAppAuthorizationResponseFormProperties>({
		});

	}

	export interface GetAppBundleResponse {

		/** Required */
		appBundle: AppBundle;
	}
	export interface GetAppBundleResponseFormProperties {
	}
	export function CreateGetAppBundleResponseFormGroup() {
		return new FormGroup<GetAppBundleResponseFormProperties>({
		});

	}

	export interface GetIngestionResponse {

		/** Required */
		ingestion: Ingestion;
	}
	export interface GetIngestionResponseFormProperties {
	}
	export function CreateGetIngestionResponseFormGroup() {
		return new FormGroup<GetIngestionResponseFormProperties>({
		});

	}

	export interface GetIngestionDestinationResponse {

		/** Required */
		ingestionDestination: IngestionDestination;
	}
	export interface GetIngestionDestinationResponseFormProperties {
	}
	export function CreateGetIngestionDestinationResponseFormGroup() {
		return new FormGroup<GetIngestionDestinationResponseFormProperties>({
		});

	}

	export interface ListAppAuthorizationsResponse {

		/** Required */
		appAuthorizationSummaryList: Array<AppAuthorizationSummary>;
		nextToken?: string;
	}
	export interface ListAppAuthorizationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppAuthorizationsResponseFormGroup() {
		return new FormGroup<ListAppAuthorizationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppBundlesResponse {

		/** Required */
		appBundleSummaryList: Array<AppBundleSummary>;
		nextToken?: string;
	}
	export interface ListAppBundlesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppBundlesResponseFormGroup() {
		return new FormGroup<ListAppBundlesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an app bundle. */
	export interface AppBundleSummary {

		/** Required */
		arn: string;
	}

	/** Contains a summary of an app bundle. */
	export interface AppBundleSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateAppBundleSummaryFormGroup() {
		return new FormGroup<AppBundleSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIngestionDestinationsResponse {

		/** Required */
		ingestionDestinations: Array<IngestionDestinationSummary>;
		nextToken?: string;
	}
	export interface ListIngestionDestinationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIngestionDestinationsResponseFormGroup() {
		return new FormGroup<ListIngestionDestinationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an ingestion destination. */
	export interface IngestionDestinationSummary {

		/** Required */
		arn: string;
	}

	/** Contains a summary of an ingestion destination. */
	export interface IngestionDestinationSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateIngestionDestinationSummaryFormGroup() {
		return new FormGroup<IngestionDestinationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIngestionsResponse {

		/** Required */
		ingestions: Array<IngestionSummary>;
		nextToken?: string;
	}
	export interface ListIngestionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIngestionsResponseFormGroup() {
		return new FormGroup<ListIngestionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an ingestion. */
	export interface IngestionSummary {

		/** Required */
		arn: string;

		/** Required */
		app: string;

		/** Required */
		tenantId: string;

		/** Required */
		state: IngestionState;
	}

	/** Contains a summary of an ingestion. */
	export interface IngestionSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		tenantId: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<IngestionState | null | undefined>,
	}
	export function CreateIngestionSummaryFormGroup() {
		return new FormGroup<IngestionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<IngestionState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartIngestionResponse {
	}
	export interface StartIngestionResponseFormProperties {
	}
	export function CreateStartIngestionResponseFormGroup() {
		return new FormGroup<StartIngestionResponseFormProperties>({
		});

	}

	export interface StartUserAccessTasksResponse {
		userAccessTasksList?: Array<UserAccessTaskItem>;
	}
	export interface StartUserAccessTasksResponseFormProperties {
	}
	export function CreateStartUserAccessTasksResponseFormGroup() {
		return new FormGroup<StartUserAccessTasksResponseFormProperties>({
		});

	}


	/** Contains information about a user access task. */
	export interface UserAccessTaskItem {

		/** Required */
		app: string;

		/** Required */
		tenantId: string;
		taskId?: string;
		error?: TaskError;
	}

	/** Contains information about a user access task. */
	export interface UserAccessTaskItemFormProperties {

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		tenantId: FormControl<string | null | undefined>,
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessTaskItemFormGroup() {
		return new FormGroup<UserAccessTaskItemFormProperties>({
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopIngestionResponse {
	}
	export interface StopIngestionResponseFormProperties {
	}
	export function CreateStopIngestionResponseFormGroup() {
		return new FormGroup<StopIngestionResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAppAuthorizationResponse {

		/** Required */
		appAuthorization: AppAuthorization;
	}
	export interface UpdateAppAuthorizationResponseFormProperties {
	}
	export function CreateUpdateAppAuthorizationResponseFormGroup() {
		return new FormGroup<UpdateAppAuthorizationResponseFormProperties>({
		});

	}

	export interface UpdateIngestionDestinationResponse {

		/** Required */
		ingestionDestination: IngestionDestination;
	}
	export interface UpdateIngestionDestinationResponseFormProperties {
	}
	export function CreateUpdateIngestionDestinationResponseFormGroup() {
		return new FormGroup<UpdateIngestionDestinationResponseFormProperties>({
		});

	}


	/** Contains authorization request information, which is required for Amazon Web Services AppFabric to get the OAuth2 access token for an application. */
	export interface AuthRequest {

		/** Required */
		redirectUri: string;

		/** Required */
		code: string;
	}

	/** Contains authorization request information, which is required for Amazon Web Services AppFabric to get the OAuth2 access token for an application. */
	export interface AuthRequestFormProperties {

		/** Required */
		redirectUri: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
	}
	export function CreateAuthRequestFormGroup() {
		return new FormGroup<AuthRequestFormProperties>({
			redirectUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetUserAccessTasksRequest {

		/** Required */
		appBundleIdentifier: string;

		/** Required */
		taskIdList: Array<string>;
	}
	export interface BatchGetUserAccessTasksRequestFormProperties {

		/** Required */
		appBundleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetUserAccessTasksRequestFormGroup() {
		return new FormGroup<BatchGetUserAccessTasksRequestFormProperties>({
			appBundleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectAppAuthorizationRequest {
		authRequest?: AuthRequest;
	}
	export interface ConnectAppAuthorizationRequestFormProperties {
	}
	export function CreateConnectAppAuthorizationRequestFormGroup() {
		return new FormGroup<ConnectAppAuthorizationRequestFormProperties>({
		});

	}


	/** Contains credential information for an application. */
	export interface Credential {
		oauth2Credential?: Oauth2Credential;
		apiKeyCredential?: ApiKeyCredential;
	}

	/** Contains credential information for an application. */
	export interface CredentialFormProperties {
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
		});

	}

	export interface CreateAppAuthorizationRequest {

		/** Required */
		app: string;

		/** Required */
		credential: Credential;

		/** Required */
		tenant: Tenant;

		/** Required */
		authType: AuthType;
		clientToken?: string;
		tags?: Array<Tag>;
	}
	export interface CreateAppAuthorizationRequestFormProperties {

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		authType: FormControl<AuthType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppAuthorizationRequestFormGroup() {
		return new FormGroup<CreateAppAuthorizationRequestFormProperties>({
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppBundleRequest {
		clientToken?: string;
		customerManagedKeyIdentifier?: string;
		tags?: Array<Tag>;
	}
	export interface CreateAppBundleRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		customerManagedKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppBundleRequestFormGroup() {
		return new FormGroup<CreateAppBundleRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			customerManagedKeyIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIngestionDestinationRequest {

		/** Required */
		processingConfiguration: ProcessingConfiguration;

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		clientToken?: string;
		tags?: Array<Tag>;
	}
	export interface CreateIngestionDestinationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIngestionDestinationRequestFormGroup() {
		return new FormGroup<CreateIngestionDestinationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIngestionRequest {

		/** Required */
		app: string;

		/** Required */
		tenantId: string;

		/** Required */
		ingestionType: IngestionType;
		clientToken?: string;
		tags?: Array<Tag>;
	}
	export interface CreateIngestionRequestFormProperties {

		/** Required */
		app: FormControl<string | null | undefined>,

		/** Required */
		tenantId: FormControl<string | null | undefined>,

		/** Required */
		ingestionType: FormControl<IngestionType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIngestionRequestFormGroup() {
		return new FormGroup<CreateIngestionRequestFormProperties>({
			app: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ingestionType: new FormControl<IngestionType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAppAuthorizationRequest {
	}
	export interface DeleteAppAuthorizationRequestFormProperties {
	}
	export function CreateDeleteAppAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteAppAuthorizationRequestFormProperties>({
		});

	}

	export interface DeleteAppBundleRequest {
	}
	export interface DeleteAppBundleRequestFormProperties {
	}
	export function CreateDeleteAppBundleRequestFormGroup() {
		return new FormGroup<DeleteAppBundleRequestFormProperties>({
		});

	}

	export interface DeleteIngestionDestinationRequest {
	}
	export interface DeleteIngestionDestinationRequestFormProperties {
	}
	export function CreateDeleteIngestionDestinationRequestFormGroup() {
		return new FormGroup<DeleteIngestionDestinationRequestFormProperties>({
		});

	}

	export interface DeleteIngestionRequest {
	}
	export interface DeleteIngestionRequestFormProperties {
	}
	export function CreateDeleteIngestionRequestFormGroup() {
		return new FormGroup<DeleteIngestionRequestFormProperties>({
		});

	}

	export interface GetAppAuthorizationRequest {
	}
	export interface GetAppAuthorizationRequestFormProperties {
	}
	export function CreateGetAppAuthorizationRequestFormGroup() {
		return new FormGroup<GetAppAuthorizationRequestFormProperties>({
		});

	}

	export interface GetAppBundleRequest {
	}
	export interface GetAppBundleRequestFormProperties {
	}
	export function CreateGetAppBundleRequestFormGroup() {
		return new FormGroup<GetAppBundleRequestFormProperties>({
		});

	}

	export interface GetIngestionDestinationRequest {
	}
	export interface GetIngestionDestinationRequestFormProperties {
	}
	export function CreateGetIngestionDestinationRequestFormGroup() {
		return new FormGroup<GetIngestionDestinationRequestFormProperties>({
		});

	}

	export interface GetIngestionRequest {
	}
	export interface GetIngestionRequestFormProperties {
	}
	export function CreateGetIngestionRequestFormGroup() {
		return new FormGroup<GetIngestionRequestFormProperties>({
		});

	}

	export interface ListAppAuthorizationsRequest {
	}
	export interface ListAppAuthorizationsRequestFormProperties {
	}
	export function CreateListAppAuthorizationsRequestFormGroup() {
		return new FormGroup<ListAppAuthorizationsRequestFormProperties>({
		});

	}

	export interface ListAppBundlesRequest {
	}
	export interface ListAppBundlesRequestFormProperties {
	}
	export function CreateListAppBundlesRequestFormGroup() {
		return new FormGroup<ListAppBundlesRequestFormProperties>({
		});

	}

	export interface ListIngestionDestinationsRequest {
	}
	export interface ListIngestionDestinationsRequestFormProperties {
	}
	export function CreateListIngestionDestinationsRequestFormGroup() {
		return new FormGroup<ListIngestionDestinationsRequestFormProperties>({
		});

	}

	export interface ListIngestionsRequest {
	}
	export interface ListIngestionsRequestFormProperties {
	}
	export function CreateListIngestionsRequestFormGroup() {
		return new FormGroup<ListIngestionsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface StartIngestionRequest {
	}
	export interface StartIngestionRequestFormProperties {
	}
	export function CreateStartIngestionRequestFormGroup() {
		return new FormGroup<StartIngestionRequestFormProperties>({
		});

	}

	export interface StartUserAccessTasksRequest {

		/** Required */
		appBundleIdentifier: string;

		/** Required */
		email: string;
	}
	export interface StartUserAccessTasksRequestFormProperties {

		/** Required */
		appBundleIdentifier: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
	}
	export function CreateStartUserAccessTasksRequestFormGroup() {
		return new FormGroup<StartUserAccessTasksRequestFormProperties>({
			appBundleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopIngestionRequest {
	}
	export interface StopIngestionRequestFormProperties {
	}
	export function CreateStopIngestionRequestFormGroup() {
		return new FormGroup<StopIngestionRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAppAuthorizationRequest {
		credential?: Credential;
		tenant?: Tenant;
	}
	export interface UpdateAppAuthorizationRequestFormProperties {
	}
	export function CreateUpdateAppAuthorizationRequestFormGroup() {
		return new FormGroup<UpdateAppAuthorizationRequestFormProperties>({
		});

	}

	export interface UpdateIngestionDestinationRequest {

		/** Required */
		destinationConfiguration: DestinationConfiguration;
	}
	export interface UpdateIngestionDestinationRequestFormProperties {
	}
	export function CreateUpdateIngestionDestinationRequestFormGroup() {
		return new FormGroup<UpdateIngestionDestinationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Gets user access details in a batch request.</p> <p>This action polls data from the tasks that are kicked off by the <code>StartUserAccessTasks</code> action.</p>
		 * Post useraccess/batchget
		 * @return {BatchGetUserAccessTasksResponse} Success
		 */
		BatchGetUserAccessTasks(requestBody: BatchGetUserAccessTasksPostBody): Observable<BatchGetUserAccessTasksResponse> {
			return this.http.post<BatchGetUserAccessTasksResponse>(this.baseUri + 'useraccess/batchget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to call the APIs of the application.
		 * Post appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle that contains the app authorization to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appAuthorizationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {ConnectAppAuthorizationResponse} Success
		 */
		ConnectAppAuthorization(appBundleIdentifier: string, appAuthorizationIdentifier: string, requestBody: ConnectAppAuthorizationPostBody): Observable<ConnectAppAuthorizationResponse> {
			return this.http.post<ConnectAppAuthorizationResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations/' + (appAuthorizationIdentifier == null ? '' : encodeURIComponent(appAuthorizationIdentifier)) + '/connect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an app authorization within an app bundle, which allows AppFabric to connect to an application.
		 * Post appbundles/{appBundleIdentifier}/appauthorizations
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		CreateAppAuthorization(appBundleIdentifier: string, requestBody: CreateAppAuthorizationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all app authorizations configured for an app bundle.
		 * Get appbundles/{appBundleIdentifier}/appauthorizations
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {number} maxResults <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.
		 *     Min length: 1    Max length: 2048
		 * @return {ListAppAuthorizationsResponse} Success
		 */
		ListAppAuthorizations(appBundleIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAppAuthorizationsResponse> {
			return this.http.get<ListAppAuthorizationsResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an app bundle to collect data from an application using AppFabric.
		 * Post appbundles
		 * @return {void} 
		 */
		CreateAppBundle(requestBody: CreateAppBundlePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appbundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of app bundles.
		 * Get appbundles
		 * @param {number} maxResults <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.
		 *     Min length: 1    Max length: 2048
		 * @return {ListAppBundlesResponse} Success
		 */
		ListAppBundles(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAppBundlesResponse> {
			return this.http.get<ListAppBundlesResponse>(this.baseUri + 'appbundles?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a data ingestion for an application.
		 * Post appbundles/{appBundleIdentifier}/ingestions
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		CreateIngestion(appBundleIdentifier: string, requestBody: CreateIngestionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all ingestions configured for an app bundle.
		 * Get appbundles/{appBundleIdentifier}/ingestions
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {number} maxResults <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.
		 * @return {ListIngestionsResponse} Success
		 */
		ListIngestions(appBundleIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListIngestionsResponse> {
			return this.http.get<ListIngestionsResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.
		 * Post appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		CreateIngestionDestination(appBundleIdentifier: string, ingestionIdentifier: string, requestBody: CreateIngestionDestinationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/ingestiondestinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of all ingestion destinations configured for an ingestion.
		 * Get appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {number} maxResults <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.
		 * @return {ListIngestionDestinationsResponse} Success
		 */
		ListIngestionDestinations(appBundleIdentifier: string, ingestionIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListIngestionDestinationsResponse> {
			return this.http.get<ListIngestionDestinationsResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/ingestiondestinations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes an app authorization. You must delete the associated ingestion before you can delete an app authorization.
		 * Delete appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appAuthorizationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		DeleteAppAuthorization(appBundleIdentifier: string, appAuthorizationIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations/' + (appAuthorizationIdentifier == null ? '' : encodeURIComponent(appAuthorizationIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an app authorization.
		 * Get appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appAuthorizationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {GetAppAuthorizationResponse} Success
		 */
		GetAppAuthorization(appBundleIdentifier: string, appAuthorizationIdentifier: string): Observable<GetAppAuthorizationResponse> {
			return this.http.get<GetAppAuthorizationResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations/' + (appAuthorizationIdentifier == null ? '' : encodeURIComponent(appAuthorizationIdentifier)), {});
		}

		/**
		 * <p>Updates an app authorization within an app bundle, which allows AppFabric to connect to an application.</p> <p>If the app authorization was in a <code>connected</code> state, updating the app authorization will set it back to a <code>PendingConnect</code> state.</p>
		 * Patch appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appAuthorizationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {UpdateAppAuthorizationResponse} Success
		 */
		UpdateAppAuthorization(appBundleIdentifier: string, appAuthorizationIdentifier: string, requestBody: UpdateAppAuthorizationPatchBody): Observable<UpdateAppAuthorizationResponse> {
			return this.http.patch<UpdateAppAuthorizationResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/appauthorizations/' + (appAuthorizationIdentifier == null ? '' : encodeURIComponent(appAuthorizationIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an app bundle. You must delete all associated app authorizations before you can delete an app bundle.
		 * Delete appbundles/{appBundleIdentifier}
		 * @param {string} appBundleIdentifier The ID or Amazon Resource Name (ARN) of the app bundle that needs to be deleted.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		DeleteAppBundle(appBundleIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an app bundle.
		 * Get appbundles/{appBundleIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {GetAppBundleResponse} Success
		 */
		GetAppBundle(appBundleIdentifier: string): Observable<GetAppBundleResponse> {
			return this.http.get<GetAppBundleResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)), {});
		}

		/**
		 * Deletes an ingestion. You must stop (disable) the ingestion and you must delete all associated ingestion destinations before you can delete an app ingestion.
		 * Delete appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		DeleteIngestion(appBundleIdentifier: string, ingestionIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an ingestion.
		 * Get appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {GetIngestionResponse} Success
		 */
		GetIngestion(appBundleIdentifier: string, ingestionIdentifier: string): Observable<GetIngestionResponse> {
			return this.http.get<GetIngestionResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)), {});
		}

		/**
		 * <p>Deletes an ingestion destination.</p> <p>This deletes the association between an ingestion and it's destination. It doesn't delete previously ingested data or the storage destination, such as the Amazon S3 bucket where the data is delivered. If the ingestion destination is deleted while the associated ingestion is enabled, the ingestion will fail and is eventually disabled.</p>
		 * Delete appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionDestinationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {void} 
		 */
		DeleteIngestionDestination(appBundleIdentifier: string, ingestionIdentifier: string, ingestionDestinationIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/ingestiondestinations/' + (ingestionDestinationIdentifier == null ? '' : encodeURIComponent(ingestionDestinationIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an ingestion destination.
		 * Get appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionDestinationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {GetIngestionDestinationResponse} Success
		 */
		GetIngestionDestination(appBundleIdentifier: string, ingestionIdentifier: string, ingestionDestinationIdentifier: string): Observable<GetIngestionDestinationResponse> {
			return this.http.get<GetIngestionDestinationResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/ingestiondestinations/' + (ingestionDestinationIdentifier == null ? '' : encodeURIComponent(ingestionDestinationIdentifier)), {});
		}

		/**
		 * Updates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.
		 * Patch appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} ingestionDestinationIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {UpdateIngestionDestinationResponse} Success
		 */
		UpdateIngestionDestination(appBundleIdentifier: string, ingestionIdentifier: string, ingestionDestinationIdentifier: string, requestBody: UpdateIngestionDestinationPatchBody): Observable<UpdateIngestionDestinationResponse> {
			return this.http.patch<UpdateIngestionDestinationResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/ingestiondestinations/' + (ingestionDestinationIdentifier == null ? '' : encodeURIComponent(ingestionDestinationIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags for a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns one or more tags (key-value pairs) to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to tag.
		 *     Min length: 1    Max length: 1011
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts (enables) an ingestion, which collects data from an application.
		 * Post appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {StartIngestionResponse} Success
		 */
		StartIngestion(ingestionIdentifier: string, appBundleIdentifier: string): Observable<StartIngestionResponse> {
			return this.http.post<StartIngestionResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/start', null, {});
		}

		/**
		 * <p>Starts the tasks to search user access status for a specific email address.</p> <p>The tasks are stopped when the user access status data is found. The tasks are terminated when the API calls to the application time out.</p>
		 * Post useraccess/start
		 * @return {void} 
		 */
		StartUserAccessTasks(requestBody: StartUserAccessTasksPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'useraccess/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops (disables) an ingestion.
		 * Post appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop
		 * @param {string} ingestionIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @param {string} appBundleIdentifier The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 *     Min length: 1    Max length: 1011
		 * @return {StopIngestionResponse} Success
		 */
		StopIngestion(ingestionIdentifier: string, appBundleIdentifier: string): Observable<StopIngestionResponse> {
			return this.http.post<StopIngestionResponse>(this.baseUri + 'appbundles/' + (appBundleIdentifier == null ? '' : encodeURIComponent(appBundleIdentifier)) + '/ingestions/' + (ingestionIdentifier == null ? '' : encodeURIComponent(ingestionIdentifier)) + '/stop', null, {});
		}

		/**
		 * Removes a tag or tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that you want to untag.
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
		 *     Minimum items: 0    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchGetUserAccessTasksPostBody {

		/**
		 * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		appBundleIdentifier: string;

		/**
		 * The tasks IDs to use for the request.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		taskIdList: Array<string>;
	}
	export interface BatchGetUserAccessTasksPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		appBundleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetUserAccessTasksPostBodyFormGroup() {
		return new FormGroup<BatchGetUserAccessTasksPostBodyFormProperties>({
			appBundleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:.+$|^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface ConnectAppAuthorizationPostBody {

		/** Contains authorization request information, which is required for Amazon Web Services AppFabric to get the OAuth2 access token for an application. */
		authRequest?: ConnectAppAuthorizationPostBodyAuthRequest;
	}
	export interface ConnectAppAuthorizationPostBodyFormProperties {
	}
	export function CreateConnectAppAuthorizationPostBodyFormGroup() {
		return new FormGroup<ConnectAppAuthorizationPostBodyFormProperties>({
		});

	}

	export interface ConnectAppAuthorizationPostBodyAuthRequest {
		redirectUri?: string;
		code?: string;
	}
	export interface ConnectAppAuthorizationPostBodyAuthRequestFormProperties {
		redirectUri: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateConnectAppAuthorizationPostBodyAuthRequestFormGroup() {
		return new FormGroup<ConnectAppAuthorizationPostBodyAuthRequestFormProperties>({
			redirectUri: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppAuthorizationPostBody {

		/**
		 * <p>The name of the application.</p> <p>Valid values are:</p> <ul> <li> <p> <code>SLACK</code> </p> </li> <li> <p> <code>ASANA</code> </p> </li> <li> <p> <code>JIRA</code> </p> </li> <li> <p> <code>M365</code> </p> </li> <li> <p> <code>M365AUDITLOGS</code> </p> </li> <li> <p> <code>ZOOM</code> </p> </li> <li> <p> <code>ZENDESK</code> </p> </li> <li> <p> <code>OKTA</code> </p> </li> <li> <p> <code>GOOGLE</code> </p> </li> <li> <p> <code>DROPBOX</code> </p> </li> <li> <p> <code>SMARTSHEET</code> </p> </li> <li> <p> <code>CISCO</code> </p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		app: string;

		/**
		 * Contains credential information for an application.
		 * Required
		 */
		credential: CreateAppAuthorizationPostBodyCredential;

		/**
		 * Contains information about an application tenant.
		 * Required
		 */
		tenant: CreateAppAuthorizationPostBodyTenant;

		/**
		 * The authorization type for the app authorization.
		 * Required
		 */
		authType: AuthType;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/**
		 * A map of the key-value pairs of the tag or tags to assign to the resource.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateAppAuthorizationPostBodyFormProperties {

		/**
		 * <p>The name of the application.</p> <p>Valid values are:</p> <ul> <li> <p> <code>SLACK</code> </p> </li> <li> <p> <code>ASANA</code> </p> </li> <li> <p> <code>JIRA</code> </p> </li> <li> <p> <code>M365</code> </p> </li> <li> <p> <code>M365AUDITLOGS</code> </p> </li> <li> <p> <code>ZOOM</code> </p> </li> <li> <p> <code>ZENDESK</code> </p> </li> <li> <p> <code>OKTA</code> </p> </li> <li> <p> <code>GOOGLE</code> </p> </li> <li> <p> <code>DROPBOX</code> </p> </li> <li> <p> <code>SMARTSHEET</code> </p> </li> <li> <p> <code>CISCO</code> </p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		app: FormControl<string | null | undefined>,

		/**
		 * The authorization type for the app authorization.
		 * Required
		 */
		authType: FormControl<AuthType | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppAuthorizationPostBodyFormGroup() {
		return new FormGroup<CreateAppAuthorizationPostBodyFormProperties>({
			app: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface CreateAppAuthorizationPostBodyCredential {
		oauth2Credential?: Oauth2Credential;
		apiKeyCredential?: ApiKeyCredential;
	}
	export interface CreateAppAuthorizationPostBodyCredentialFormProperties {
	}
	export function CreateCreateAppAuthorizationPostBodyCredentialFormGroup() {
		return new FormGroup<CreateAppAuthorizationPostBodyCredentialFormProperties>({
		});

	}

	export interface CreateAppAuthorizationPostBodyTenant {
		tenantIdentifier?: string;
		tenantDisplayName?: string;
	}
	export interface CreateAppAuthorizationPostBodyTenantFormProperties {
		tenantIdentifier: FormControl<string | null | undefined>,
		tenantDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppAuthorizationPostBodyTenantFormGroup() {
		return new FormGroup<CreateAppAuthorizationPostBodyTenantFormProperties>({
			tenantIdentifier: new FormControl<string | null | undefined>(undefined),
			tenantDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppBundlePostBody {

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to use to encrypt the application data. If this is not specified, an Amazon Web Services owned key is used for encryption.
		 * Min length: 1
		 * Max length: 1011
		 */
		customerManagedKeyIdentifier?: string | null;

		/**
		 * A map of the key-value pairs of the tag or tags to assign to the resource.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateAppBundlePostBodyFormProperties {

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to use to encrypt the application data. If this is not specified, an Amazon Web Services owned key is used for encryption.
		 * Min length: 1
		 * Max length: 1011
		 */
		customerManagedKeyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppBundlePostBodyFormGroup() {
		return new FormGroup<CreateAppBundlePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
			customerManagedKeyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:.+$|^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface CreateIngestionPostBody {

		/**
		 * <p>The name of the application.</p> <p>Valid values are:</p> <ul> <li> <p> <code>SLACK</code> </p> </li> <li> <p> <code>ASANA</code> </p> </li> <li> <p> <code>JIRA</code> </p> </li> <li> <p> <code>M365</code> </p> </li> <li> <p> <code>M365AUDITLOGS</code> </p> </li> <li> <p> <code>ZOOM</code> </p> </li> <li> <p> <code>ZENDESK</code> </p> </li> <li> <p> <code>OKTA</code> </p> </li> <li> <p> <code>GOOGLE</code> </p> </li> <li> <p> <code>DROPBOX</code> </p> </li> <li> <p> <code>SMARTSHEET</code> </p> </li> <li> <p> <code>CISCO</code> </p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		app: string;

		/**
		 * The ID of the application tenant.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		tenantId: string;

		/**
		 * The ingestion type.
		 * Required
		 */
		ingestionType: IngestionType;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/**
		 * A map of the key-value pairs of the tag or tags to assign to the resource.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateIngestionPostBodyFormProperties {

		/**
		 * <p>The name of the application.</p> <p>Valid values are:</p> <ul> <li> <p> <code>SLACK</code> </p> </li> <li> <p> <code>ASANA</code> </p> </li> <li> <p> <code>JIRA</code> </p> </li> <li> <p> <code>M365</code> </p> </li> <li> <p> <code>M365AUDITLOGS</code> </p> </li> <li> <p> <code>ZOOM</code> </p> </li> <li> <p> <code>ZENDESK</code> </p> </li> <li> <p> <code>OKTA</code> </p> </li> <li> <p> <code>GOOGLE</code> </p> </li> <li> <p> <code>DROPBOX</code> </p> </li> <li> <p> <code>SMARTSHEET</code> </p> </li> <li> <p> <code>CISCO</code> </p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		app: FormControl<string | null | undefined>,

		/**
		 * The ID of the application tenant.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The ingestion type.
		 * Required
		 */
		ingestionType: FormControl<IngestionType | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIngestionPostBodyFormGroup() {
		return new FormGroup<CreateIngestionPostBodyFormProperties>({
			app: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			tenantId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			ingestionType: new FormControl<IngestionType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface CreateIngestionDestinationPostBody {

		/**
		 * Contains information about how ingested data is processed.
		 * Required
		 */
		processingConfiguration: CreateIngestionDestinationPostBodyProcessingConfiguration;

		/**
		 * Contains information about the destination of ingested data.
		 * Required
		 */
		destinationConfiguration: CreateIngestionDestinationPostBodyDestinationConfiguration;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/**
		 * A map of the key-value pairs of the tag or tags to assign to the resource.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateIngestionDestinationPostBodyFormProperties {

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIngestionDestinationPostBodyFormGroup() {
		return new FormGroup<CreateIngestionDestinationPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
		});

	}

	export interface CreateIngestionDestinationPostBodyProcessingConfiguration {
		auditLog?: AuditLogProcessingConfiguration;
	}
	export interface CreateIngestionDestinationPostBodyProcessingConfigurationFormProperties {
	}
	export function CreateCreateIngestionDestinationPostBodyProcessingConfigurationFormGroup() {
		return new FormGroup<CreateIngestionDestinationPostBodyProcessingConfigurationFormProperties>({
		});

	}

	export interface CreateIngestionDestinationPostBodyDestinationConfiguration {
		auditLog?: AuditLogDestinationConfiguration;
	}
	export interface CreateIngestionDestinationPostBodyDestinationConfigurationFormProperties {
	}
	export function CreateCreateIngestionDestinationPostBodyDestinationConfigurationFormGroup() {
		return new FormGroup<CreateIngestionDestinationPostBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface UpdateAppAuthorizationPatchBody {

		/** Contains credential information for an application. */
		credential?: UpdateAppAuthorizationPatchBodyCredential;

		/** Contains information about an application tenant. */
		tenant?: UpdateAppAuthorizationPatchBodyTenant;
	}
	export interface UpdateAppAuthorizationPatchBodyFormProperties {
	}
	export function CreateUpdateAppAuthorizationPatchBodyFormGroup() {
		return new FormGroup<UpdateAppAuthorizationPatchBodyFormProperties>({
		});

	}

	export interface UpdateAppAuthorizationPatchBodyCredential {
		oauth2Credential?: Oauth2Credential;
		apiKeyCredential?: ApiKeyCredential;
	}
	export interface UpdateAppAuthorizationPatchBodyCredentialFormProperties {
	}
	export function CreateUpdateAppAuthorizationPatchBodyCredentialFormGroup() {
		return new FormGroup<UpdateAppAuthorizationPatchBodyCredentialFormProperties>({
		});

	}

	export interface UpdateAppAuthorizationPatchBodyTenant {
		tenantIdentifier?: string;
		tenantDisplayName?: string;
	}
	export interface UpdateAppAuthorizationPatchBodyTenantFormProperties {
		tenantIdentifier: FormControl<string | null | undefined>,
		tenantDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppAuthorizationPatchBodyTenantFormGroup() {
		return new FormGroup<UpdateAppAuthorizationPatchBodyTenantFormProperties>({
			tenantIdentifier: new FormControl<string | null | undefined>(undefined),
			tenantDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIngestionDestinationPatchBody {

		/**
		 * Contains information about the destination of ingested data.
		 * Required
		 */
		destinationConfiguration: UpdateIngestionDestinationPatchBodyDestinationConfiguration;
	}
	export interface UpdateIngestionDestinationPatchBodyFormProperties {
	}
	export function CreateUpdateIngestionDestinationPatchBodyFormGroup() {
		return new FormGroup<UpdateIngestionDestinationPatchBodyFormProperties>({
		});

	}

	export interface UpdateIngestionDestinationPatchBodyDestinationConfiguration {
		auditLog?: AuditLogDestinationConfiguration;
	}
	export interface UpdateIngestionDestinationPatchBodyDestinationConfigurationFormProperties {
	}
	export function CreateUpdateIngestionDestinationPatchBodyDestinationConfigurationFormGroup() {
		return new FormGroup<UpdateIngestionDestinationPatchBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A map of the key-value pairs of the tag or tags to assign to the resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface StartUserAccessTasksPostBody {

		/**
		 * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		appBundleIdentifier: string;

		/**
		 * The email address of the target user.
		 * Required
		 * Min length: 0
		 * Max length: 320
		 */
		email: string;
	}
	export interface StartUserAccessTasksPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		appBundleIdentifier: FormControl<string | null | undefined>,

		/**
		 * The email address of the target user.
		 * Required
		 * Min length: 0
		 * Max length: 320
		 */
		email: FormControl<string | null | undefined>,
	}
	export function CreateStartUserAccessTasksPostBodyFormGroup() {
		return new FormGroup<StartUserAccessTasksPostBodyFormProperties>({
			appBundleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:.+$|^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(320), Validators.pattern('[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*')]),
		});

	}

}

