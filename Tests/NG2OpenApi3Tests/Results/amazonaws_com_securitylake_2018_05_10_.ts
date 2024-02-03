import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAwsLogSourceResponse {
		failed?: Array<string>;
	}
	export interface CreateAwsLogSourceResponseFormProperties {
	}
	export function CreateCreateAwsLogSourceResponseFormGroup() {
		return new FormGroup<CreateAwsLogSourceResponseFormProperties>({
		});

	}


	/** The Security Lake logs source configuration file describes the information needed to generate Security Lake logs.  */
	export interface AwsLogSourceConfiguration {
		accounts?: Array<string>;

		/** Required */
		regions: Array<string>;

		/** Required */
		sourceName: AwsLogSourceName;
		sourceVersion?: string;
	}

	/** The Security Lake logs source configuration file describes the information needed to generate Security Lake logs.  */
	export interface AwsLogSourceConfigurationFormProperties {

		/** Required */
		sourceName: FormControl<AwsLogSourceName | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsLogSourceConfigurationFormGroup() {
		return new FormGroup<AwsLogSourceConfigurationFormProperties>({
			sourceName: new FormControl<AwsLogSourceName | null | undefined>(undefined, [Validators.required]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AwsLogSourceName { ROUTE53 = 'ROUTE53', VPC_FLOW = 'VPC_FLOW', SH_FINDINGS = 'SH_FINDINGS', CLOUD_TRAIL_MGMT = 'CLOUD_TRAIL_MGMT', LAMBDA_EXECUTION = 'LAMBDA_EXECUTION', S3_DATA = 'S3_DATA' }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface CreateCustomLogSourceResponse {
		source?: CustomLogSourceResource;
	}
	export interface CreateCustomLogSourceResponseFormProperties {
	}
	export function CreateCreateCustomLogSourceResponseFormGroup() {
		return new FormGroup<CreateCustomLogSourceResponseFormProperties>({
		});

	}


	/** Amazon Security Lake can collect logs and events from third-party custom sources. */
	export interface CustomLogSourceResource {
		attributes?: CustomLogSourceAttributes;
		provider?: CustomLogSourceProvider;
		sourceName?: string;
		sourceVersion?: string;
	}

	/** Amazon Security Lake can collect logs and events from third-party custom sources. */
	export interface CustomLogSourceResourceFormProperties {
		sourceName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCustomLogSourceResourceFormGroup() {
		return new FormGroup<CustomLogSourceResourceFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attributes of a third-party custom source. */
	export interface CustomLogSourceAttributes {
		crawlerArn?: string;
		databaseArn?: string;
		tableArn?: string;
	}

	/** The attributes of a third-party custom source. */
	export interface CustomLogSourceAttributesFormProperties {
		crawlerArn: FormControl<string | null | undefined>,
		databaseArn: FormControl<string | null | undefined>,
		tableArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomLogSourceAttributesFormGroup() {
		return new FormGroup<CustomLogSourceAttributesFormProperties>({
			crawlerArn: new FormControl<string | null | undefined>(undefined),
			databaseArn: new FormControl<string | null | undefined>(undefined),
			tableArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the log provider for a third-party custom source. */
	export interface CustomLogSourceProvider {
		location?: string;
		roleArn?: string;
	}

	/** The details of the log provider for a third-party custom source. */
	export interface CustomLogSourceProviderFormProperties {
		location: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomLogSourceProviderFormGroup() {
		return new FormGroup<CustomLogSourceProviderFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for the Glue Crawler for the third-party custom source. */
	export interface CustomLogSourceCrawlerConfiguration {

		/** Required */
		roleArn: string;
	}

	/** The configuration for the Glue Crawler for the third-party custom source. */
	export interface CustomLogSourceCrawlerConfigurationFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomLogSourceCrawlerConfigurationFormGroup() {
		return new FormGroup<CustomLogSourceCrawlerConfigurationFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The AWS identity. */
	export interface AwsIdentity {

		/** Required */
		externalId: string;

		/** Required */
		principal: string;
	}

	/** The AWS identity. */
	export interface AwsIdentityFormProperties {

		/** Required */
		externalId: FormControl<string | null | undefined>,

		/** Required */
		principal: FormControl<string | null | undefined>,
	}
	export function CreateAwsIdentityFormGroup() {
		return new FormGroup<AwsIdentityFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataLakeResponse {
		dataLakes?: Array<DataLakeResource>;
	}
	export interface CreateDataLakeResponseFormProperties {
	}
	export function CreateCreateDataLakeResponseFormGroup() {
		return new FormGroup<CreateDataLakeResponseFormProperties>({
		});

	}


	/** Provides details of Amazon Security Lake object. */
	export interface DataLakeResource {
		createStatus?: DataLakeStatus;

		/** Required */
		dataLakeArn: string;
		encryptionConfiguration?: DataLakeEncryptionConfiguration;
		lifecycleConfiguration?: DataLakeLifecycleConfiguration;

		/** Required */
		region: string;
		replicationConfiguration?: DataLakeReplicationConfiguration;
		s3BucketArn?: string;
		updateStatus?: DataLakeUpdateStatus;
	}

	/** Provides details of Amazon Security Lake object. */
	export interface DataLakeResourceFormProperties {
		createStatus: FormControl<DataLakeStatus | null | undefined>,

		/** Required */
		dataLakeArn: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
		s3BucketArn: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeResourceFormGroup() {
		return new FormGroup<DataLakeResourceFormProperties>({
			createStatus: new FormControl<DataLakeStatus | null | undefined>(undefined),
			dataLakeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3BucketArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataLakeStatus { INITIALIZED = 'INITIALIZED', PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** Provides encryption details of Amazon Security Lake object. */
	export interface DataLakeEncryptionConfiguration {
		kmsKeyId?: string;
	}

	/** Provides encryption details of Amazon Security Lake object. */
	export interface DataLakeEncryptionConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeEncryptionConfigurationFormGroup() {
		return new FormGroup<DataLakeEncryptionConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleConfiguration {
		expiration?: DataLakeLifecycleExpiration;
		transitions?: Array<DataLakeLifecycleTransition>;
	}

	/** Provides lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleConfigurationFormProperties {
	}
	export function CreateDataLakeLifecycleConfigurationFormGroup() {
		return new FormGroup<DataLakeLifecycleConfigurationFormProperties>({
		});

	}


	/** Provide expiration lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleExpiration {
		days?: number | null;
	}

	/** Provide expiration lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleExpirationFormProperties {
		days: FormControl<number | null | undefined>,
	}
	export function CreateDataLakeLifecycleExpirationFormGroup() {
		return new FormGroup<DataLakeLifecycleExpirationFormProperties>({
			days: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provide transition lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleTransition {
		days?: number | null;
		storageClass?: string;
	}

	/** Provide transition lifecycle details of Amazon Security Lake object. */
	export interface DataLakeLifecycleTransitionFormProperties {
		days: FormControl<number | null | undefined>,
		storageClass: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeLifecycleTransitionFormGroup() {
		return new FormGroup<DataLakeLifecycleTransitionFormProperties>({
			days: new FormControl<number | null | undefined>(undefined),
			storageClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides replication details of Amazon Security Lake object. */
	export interface DataLakeReplicationConfiguration {
		regions?: Array<string>;
		roleArn?: string;
	}

	/** Provides replication details of Amazon Security Lake object. */
	export interface DataLakeReplicationConfigurationFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeReplicationConfigurationFormGroup() {
		return new FormGroup<DataLakeReplicationConfigurationFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API request. This is set to Completed after the configuration is updated, or removed if deletion of the data lake is successful. */
	export interface DataLakeUpdateStatus {
		exception?: DataLakeUpdateException;
		requestId?: string;
		status?: DataLakeStatus;
	}

	/** The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API request. This is set to Completed after the configuration is updated, or removed if deletion of the data lake is successful. */
	export interface DataLakeUpdateStatusFormProperties {
		requestId: FormControl<string | null | undefined>,
		status: FormControl<DataLakeStatus | null | undefined>,
	}
	export function CreateDataLakeUpdateStatusFormGroup() {
		return new FormGroup<DataLakeUpdateStatusFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataLakeStatus | null | undefined>(undefined),
		});

	}


	/** The details of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API request which failed. */
	export interface DataLakeUpdateException {
		code?: string;
		reason?: string;
	}

	/** The details of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API request which failed. */
	export interface DataLakeUpdateExceptionFormProperties {
		code: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeUpdateExceptionFormGroup() {
		return new FormGroup<DataLakeUpdateExceptionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details of Amazon Security Lake object. */
	export interface DataLakeConfiguration {
		encryptionConfiguration?: DataLakeEncryptionConfiguration;
		lifecycleConfiguration?: DataLakeLifecycleConfiguration;

		/** Required */
		region: string;
		replicationConfiguration?: DataLakeReplicationConfiguration;
	}

	/** Provides details of Amazon Security Lake object. */
	export interface DataLakeConfigurationFormProperties {

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeConfigurationFormGroup() {
		return new FormGroup<DataLakeConfigurationFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A <i>tag</i> is a label that you can define and associate with Amazon Web Services resources, including certain types of Amazon Security Lake resources. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with the following types of Security Lake resources: subscribers, and the data lake configuration for your Amazon Web Services account in individual Amazon Web Services Regions.</p> <p>A resource can have up to 50 tags. Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>. A <i>tag key</i> is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A <i>tag value</i> acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: _ . : / = + @ -</p> <p>For more information, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html">Tagging Amazon Security Lake resources</a> in the <i>Amazon Security Lake User Guide</i>.</p> */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** <p>A <i>tag</i> is a label that you can define and associate with Amazon Web Services resources, including certain types of Amazon Security Lake resources. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with the following types of Security Lake resources: subscribers, and the data lake configuration for your Amazon Web Services account in individual Amazon Web Services Regions.</p> <p>A resource can have up to 50 tags. Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>. A <i>tag key</i> is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A <i>tag value</i> acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: _ . : / = + @ -</p> <p>For more information, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html">Tagging Amazon Security Lake resources</a> in the <i>Amazon Security Lake User Guide</i>.</p> */
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

	export interface CreateDataLakeExceptionSubscriptionResponse {
	}
	export interface CreateDataLakeExceptionSubscriptionResponseFormProperties {
	}
	export function CreateCreateDataLakeExceptionSubscriptionResponseFormGroup() {
		return new FormGroup<CreateDataLakeExceptionSubscriptionResponseFormProperties>({
		});

	}

	export interface CreateDataLakeOrganizationConfigurationResponse {
	}
	export interface CreateDataLakeOrganizationConfigurationResponseFormProperties {
	}
	export function CreateCreateDataLakeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<CreateDataLakeOrganizationConfigurationResponseFormProperties>({
		});

	}


	/** Automatically enable new organization accounts as member accounts from an Amazon Security Lake administrator account. */
	export interface DataLakeAutoEnableNewAccountConfiguration {

		/** Required */
		region: string;

		/** Required */
		sources: Array<AwsLogSourceResource>;
	}

	/** Automatically enable new organization accounts as member accounts from an Amazon Security Lake administrator account. */
	export interface DataLakeAutoEnableNewAccountConfigurationFormProperties {

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAutoEnableNewAccountConfigurationFormGroup() {
		return new FormGroup<DataLakeAutoEnableNewAccountConfigurationFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services. */
	export interface AwsLogSourceResource {
		sourceName?: AwsLogSourceName;
		sourceVersion?: string;
	}

	/** Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services. */
	export interface AwsLogSourceResourceFormProperties {
		sourceName: FormControl<AwsLogSourceName | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateAwsLogSourceResourceFormGroup() {
		return new FormGroup<AwsLogSourceResourceFormProperties>({
			sourceName: new FormControl<AwsLogSourceName | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubscriberResponse {
		subscriber?: SubscriberResource;
	}
	export interface CreateSubscriberResponseFormProperties {
	}
	export function CreateCreateSubscriberResponseFormGroup() {
		return new FormGroup<CreateSubscriberResponseFormProperties>({
		});

	}


	/** Provides details about the Amazon Security Lake account subscription. Subscribers are notified of new objects for a source as the data is written to your Amazon S3 bucket for Security Lake. */
	export interface SubscriberResource {
		accessTypes?: Array<AccessType>;
		createdAt?: Date;
		resourceShareArn?: string;
		resourceShareName?: string;
		roleArn?: string;
		s3BucketArn?: string;

		/** Required */
		sources: Array<LogSourceResource>;

		/** Required */
		subscriberArn: string;
		subscriberDescription?: string;
		subscriberEndpoint?: string;

		/** Required */
		subscriberId: string;

		/** Required */
		subscriberIdentity: AwsIdentity;

		/** Required */
		subscriberName: string;
		subscriberStatus?: SubscriberStatus;
		updatedAt?: Date;
	}

	/** Provides details about the Amazon Security Lake account subscription. Subscribers are notified of new objects for a source as the data is written to your Amazon S3 bucket for Security Lake. */
	export interface SubscriberResourceFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		resourceShareName: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		s3BucketArn: FormControl<string | null | undefined>,

		/** Required */
		subscriberArn: FormControl<string | null | undefined>,
		subscriberDescription: FormControl<string | null | undefined>,
		subscriberEndpoint: FormControl<string | null | undefined>,

		/** Required */
		subscriberId: FormControl<string | null | undefined>,

		/** Required */
		subscriberName: FormControl<string | null | undefined>,
		subscriberStatus: FormControl<SubscriberStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSubscriberResourceFormGroup() {
		return new FormGroup<SubscriberResourceFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceShareName: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			s3BucketArn: new FormControl<string | null | undefined>(undefined),
			subscriberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriberDescription: new FormControl<string | null | undefined>(undefined),
			subscriberEndpoint: new FormControl<string | null | undefined>(undefined),
			subscriberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriberName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriberStatus: new FormControl<SubscriberStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccessType { LAKEFORMATION = 'LAKEFORMATION', S3 = 'S3' }


	/** The supported source types from which logs and events are collected in Amazon Security Lake. For a list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>. */
	export interface LogSourceResource {
		awsLogSource?: AwsLogSourceResource;
		customLogSource?: CustomLogSourceResource;
	}

	/** The supported source types from which logs and events are collected in Amazon Security Lake. For a list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>. */
	export interface LogSourceResourceFormProperties {
	}
	export function CreateLogSourceResourceFormGroup() {
		return new FormGroup<LogSourceResourceFormProperties>({
		});

	}

	export enum SubscriberStatus { ACTIVE = 'ACTIVE', DEACTIVATED = 'DEACTIVATED', PENDING = 'PENDING', READY = 'READY' }

	export interface CreateSubscriberNotificationResponse {
		subscriberEndpoint?: string;
	}
	export interface CreateSubscriberNotificationResponseFormProperties {
		subscriberEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriberNotificationResponseFormGroup() {
		return new FormGroup<CreateSubscriberNotificationResponseFormProperties>({
			subscriberEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configurations for HTTPS subscriber notification. */
	export interface HttpsNotificationConfiguration {
		authorizationApiKeyName?: string;
		authorizationApiKeyValue?: string;

		/** Required */
		endpoint: string;
		httpMethod?: HttpMethod;

		/** Required */
		targetRoleArn: string;
	}

	/** The configurations for HTTPS subscriber notification. */
	export interface HttpsNotificationConfigurationFormProperties {
		authorizationApiKeyName: FormControl<string | null | undefined>,
		authorizationApiKeyValue: FormControl<string | null | undefined>,

		/** Required */
		endpoint: FormControl<string | null | undefined>,
		httpMethod: FormControl<HttpMethod | null | undefined>,

		/** Required */
		targetRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateHttpsNotificationConfigurationFormGroup() {
		return new FormGroup<HttpsNotificationConfigurationFormProperties>({
			authorizationApiKeyName: new FormControl<string | null | undefined>(undefined),
			authorizationApiKeyValue: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpMethod: new FormControl<HttpMethod | null | undefined>(undefined),
			targetRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HttpMethod { POST = 'POST', PUT = 'PUT' }


	/** The configurations for SQS subscriber notification. */
	export interface SqsNotificationConfiguration {
	}

	/** The configurations for SQS subscriber notification. */
	export interface SqsNotificationConfigurationFormProperties {
	}
	export function CreateSqsNotificationConfigurationFormGroup() {
		return new FormGroup<SqsNotificationConfigurationFormProperties>({
		});

	}

	export interface DeleteAwsLogSourceResponse {
		failed?: Array<string>;
	}
	export interface DeleteAwsLogSourceResponseFormProperties {
	}
	export function CreateDeleteAwsLogSourceResponseFormGroup() {
		return new FormGroup<DeleteAwsLogSourceResponseFormProperties>({
		});

	}

	export interface DeleteCustomLogSourceResponse {
	}
	export interface DeleteCustomLogSourceResponseFormProperties {
	}
	export function CreateDeleteCustomLogSourceResponseFormGroup() {
		return new FormGroup<DeleteCustomLogSourceResponseFormProperties>({
		});

	}

	export interface DeleteDataLakeResponse {
	}
	export interface DeleteDataLakeResponseFormProperties {
	}
	export function CreateDeleteDataLakeResponseFormGroup() {
		return new FormGroup<DeleteDataLakeResponseFormProperties>({
		});

	}

	export interface DeleteDataLakeExceptionSubscriptionResponse {
	}
	export interface DeleteDataLakeExceptionSubscriptionResponseFormProperties {
	}
	export function CreateDeleteDataLakeExceptionSubscriptionResponseFormGroup() {
		return new FormGroup<DeleteDataLakeExceptionSubscriptionResponseFormProperties>({
		});

	}

	export interface DeleteDataLakeOrganizationConfigurationResponse {
	}
	export interface DeleteDataLakeOrganizationConfigurationResponseFormProperties {
	}
	export function CreateDeleteDataLakeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DeleteDataLakeOrganizationConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteSubscriberResponse {
	}
	export interface DeleteSubscriberResponseFormProperties {
	}
	export function CreateDeleteSubscriberResponseFormGroup() {
		return new FormGroup<DeleteSubscriberResponseFormProperties>({
		});

	}

	export interface DeleteSubscriberNotificationResponse {
	}
	export interface DeleteSubscriberNotificationResponseFormProperties {
	}
	export function CreateDeleteSubscriberNotificationResponseFormGroup() {
		return new FormGroup<DeleteSubscriberNotificationResponseFormProperties>({
		});

	}

	export interface DeregisterDataLakeDelegatedAdministratorResponse {
	}
	export interface DeregisterDataLakeDelegatedAdministratorResponseFormProperties {
	}
	export function CreateDeregisterDataLakeDelegatedAdministratorResponseFormGroup() {
		return new FormGroup<DeregisterDataLakeDelegatedAdministratorResponseFormProperties>({
		});

	}

	export interface GetDataLakeExceptionSubscriptionResponse {
		exceptionTimeToLive?: number | null;
		notificationEndpoint?: string;
		subscriptionProtocol?: string;
	}
	export interface GetDataLakeExceptionSubscriptionResponseFormProperties {
		exceptionTimeToLive: FormControl<number | null | undefined>,
		notificationEndpoint: FormControl<string | null | undefined>,
		subscriptionProtocol: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeExceptionSubscriptionResponseFormGroup() {
		return new FormGroup<GetDataLakeExceptionSubscriptionResponseFormProperties>({
			exceptionTimeToLive: new FormControl<number | null | undefined>(undefined),
			notificationEndpoint: new FormControl<string | null | undefined>(undefined),
			subscriptionProtocol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataLakeOrganizationConfigurationResponse {
		autoEnableNewAccount?: Array<DataLakeAutoEnableNewAccountConfiguration>;
	}
	export interface GetDataLakeOrganizationConfigurationResponseFormProperties {
	}
	export function CreateGetDataLakeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<GetDataLakeOrganizationConfigurationResponseFormProperties>({
		});

	}

	export interface GetDataLakeSourcesResponse {
		dataLakeArn?: string;
		dataLakeSources?: Array<DataLakeSource>;
		nextToken?: string;
	}
	export interface GetDataLakeSourcesResponseFormProperties {
		dataLakeArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSourcesResponseFormGroup() {
		return new FormGroup<GetDataLakeSourcesResponseFormProperties>({
			dataLakeArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon Security Lake collects logs and events from supported Amazon Web Services and custom sources. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>. */
	export interface DataLakeSource {
		account?: string;
		eventClasses?: Array<string>;
		sourceName?: string;
		sourceStatuses?: Array<DataLakeSourceStatus>;
	}

	/** Amazon Security Lake collects logs and events from supported Amazon Web Services and custom sources. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>. */
	export interface DataLakeSourceFormProperties {
		account: FormControl<string | null | undefined>,
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeSourceFormGroup() {
		return new FormGroup<DataLakeSourceFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Retrieves the Logs status for the Amazon Security Lake account. */
	export interface DataLakeSourceStatus {
		resource?: string;
		status?: SourceCollectionStatus;
	}

	/** Retrieves the Logs status for the Amazon Security Lake account. */
	export interface DataLakeSourceStatusFormProperties {
		resource: FormControl<string | null | undefined>,
		status: FormControl<SourceCollectionStatus | null | undefined>,
	}
	export function CreateDataLakeSourceStatusFormGroup() {
		return new FormGroup<DataLakeSourceStatusFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SourceCollectionStatus | null | undefined>(undefined),
		});

	}

	export enum SourceCollectionStatus { COLLECTING = 'COLLECTING', MISCONFIGURED = 'MISCONFIGURED', NOT_COLLECTING = 'NOT_COLLECTING' }

	export interface GetSubscriberResponse {
		subscriber?: SubscriberResource;
	}
	export interface GetSubscriberResponseFormProperties {
	}
	export function CreateGetSubscriberResponseFormGroup() {
		return new FormGroup<GetSubscriberResponseFormProperties>({
		});

	}

	export interface ListDataLakeExceptionsResponse {
		exceptions?: Array<DataLakeException>;
		nextToken?: string;
	}
	export interface ListDataLakeExceptionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataLakeExceptionsResponseFormGroup() {
		return new FormGroup<ListDataLakeExceptionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for an Amazon Security Lake exception. */
	export interface DataLakeException {
		exception?: string;
		region?: string;
		remediation?: string;
		timestamp?: Date;
	}

	/** The details for an Amazon Security Lake exception. */
	export interface DataLakeExceptionFormProperties {
		exception: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		remediation: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDataLakeExceptionFormGroup() {
		return new FormGroup<DataLakeExceptionFormProperties>({
			exception: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataLakesResponse {
		dataLakes?: Array<DataLakeResource>;
	}
	export interface ListDataLakesResponseFormProperties {
	}
	export function CreateListDataLakesResponseFormGroup() {
		return new FormGroup<ListDataLakesResponseFormProperties>({
		});

	}

	export interface ListLogSourcesResponse {
		nextToken?: string;
		sources?: Array<LogSource>;
	}
	export interface ListLogSourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogSourcesResponseFormGroup() {
		return new FormGroup<ListLogSourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services and custom sources.  */
	export interface LogSource {
		account?: string;
		region?: string;
		sources?: Array<LogSourceResource>;
	}

	/** Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services and custom sources.  */
	export interface LogSourceFormProperties {
		account: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateLogSourceFormGroup() {
		return new FormGroup<LogSourceFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscribersResponse {
		nextToken?: string;
		subscribers?: Array<SubscriberResource>;
	}
	export interface ListSubscribersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscribersResponseFormGroup() {
		return new FormGroup<ListSubscribersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface RegisterDataLakeDelegatedAdministratorResponse {
	}
	export interface RegisterDataLakeDelegatedAdministratorResponseFormProperties {
	}
	export function CreateRegisterDataLakeDelegatedAdministratorResponseFormGroup() {
		return new FormGroup<RegisterDataLakeDelegatedAdministratorResponseFormProperties>({
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

	export interface UpdateDataLakeResponse {
		dataLakes?: Array<DataLakeResource>;
	}
	export interface UpdateDataLakeResponseFormProperties {
	}
	export function CreateUpdateDataLakeResponseFormGroup() {
		return new FormGroup<UpdateDataLakeResponseFormProperties>({
		});

	}

	export interface UpdateDataLakeExceptionSubscriptionResponse {
	}
	export interface UpdateDataLakeExceptionSubscriptionResponseFormProperties {
	}
	export function CreateUpdateDataLakeExceptionSubscriptionResponseFormGroup() {
		return new FormGroup<UpdateDataLakeExceptionSubscriptionResponseFormProperties>({
		});

	}

	export interface UpdateSubscriberResponse {
		subscriber?: SubscriberResource;
	}
	export interface UpdateSubscriberResponseFormProperties {
	}
	export function CreateUpdateSubscriberResponseFormGroup() {
		return new FormGroup<UpdateSubscriberResponseFormProperties>({
		});

	}

	export interface UpdateSubscriberNotificationResponse {
		subscriberEndpoint?: string;
	}
	export interface UpdateSubscriberNotificationResponseFormProperties {
		subscriberEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriberNotificationResponseFormGroup() {
		return new FormGroup<UpdateSubscriberNotificationResponseFormProperties>({
			subscriberEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAwsLogSourceRequest {

		/** Required */
		sources: Array<AwsLogSourceConfiguration>;
	}
	export interface CreateAwsLogSourceRequestFormProperties {
	}
	export function CreateCreateAwsLogSourceRequestFormGroup() {
		return new FormGroup<CreateAwsLogSourceRequestFormProperties>({
		});

	}


	/** The configuration for the third-party custom source. */
	export interface CustomLogSourceConfiguration {

		/** Required */
		crawlerConfiguration: CustomLogSourceCrawlerConfiguration;

		/** Required */
		providerIdentity: AwsIdentity;
	}

	/** The configuration for the third-party custom source. */
	export interface CustomLogSourceConfigurationFormProperties {
	}
	export function CreateCustomLogSourceConfigurationFormGroup() {
		return new FormGroup<CustomLogSourceConfigurationFormProperties>({
		});

	}

	export interface CreateCustomLogSourceRequest {
		configuration?: CustomLogSourceConfiguration;
		eventClasses?: Array<string>;

		/** Required */
		sourceName: string;
		sourceVersion?: string;
	}
	export interface CreateCustomLogSourceRequestFormProperties {

		/** Required */
		sourceName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomLogSourceRequestFormGroup() {
		return new FormGroup<CreateCustomLogSourceRequestFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataLakeExceptionSubscriptionRequest {
		exceptionTimeToLive?: number | null;

		/** Required */
		notificationEndpoint: string;

		/** Required */
		subscriptionProtocol: string;
	}
	export interface CreateDataLakeExceptionSubscriptionRequestFormProperties {
		exceptionTimeToLive: FormControl<number | null | undefined>,

		/** Required */
		notificationEndpoint: FormControl<string | null | undefined>,

		/** Required */
		subscriptionProtocol: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataLakeExceptionSubscriptionRequestFormGroup() {
		return new FormGroup<CreateDataLakeExceptionSubscriptionRequestFormProperties>({
			exceptionTimeToLive: new FormControl<number | null | undefined>(undefined),
			notificationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionProtocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataLakeOrganizationConfigurationRequest {

		/** Required */
		autoEnableNewAccount: Array<DataLakeAutoEnableNewAccountConfiguration>;
	}
	export interface CreateDataLakeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateCreateDataLakeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<CreateDataLakeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface CreateDataLakeRequest {

		/** Required */
		configurations: Array<DataLakeConfiguration>;

		/** Required */
		metaStoreManagerRoleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateDataLakeRequestFormProperties {

		/** Required */
		metaStoreManagerRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataLakeRequestFormGroup() {
		return new FormGroup<CreateDataLakeRequestFormProperties>({
			metaStoreManagerRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.  */
	export interface NotificationConfiguration {
		httpsNotificationConfiguration?: HttpsNotificationConfiguration;
		sqsNotificationConfiguration?: SqsNotificationConfiguration;
	}

	/** Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.  */
	export interface NotificationConfigurationFormProperties {
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
		});

	}

	export interface CreateSubscriberNotificationRequest {

		/** Required */
		configuration: NotificationConfiguration;
	}
	export interface CreateSubscriberNotificationRequestFormProperties {
	}
	export function CreateCreateSubscriberNotificationRequestFormGroup() {
		return new FormGroup<CreateSubscriberNotificationRequestFormProperties>({
		});

	}

	export interface CreateSubscriberRequest {
		accessTypes?: Array<AccessType>;

		/** Required */
		sources: Array<LogSourceResource>;
		subscriberDescription?: string;

		/** Required */
		subscriberIdentity: AwsIdentity;

		/** Required */
		subscriberName: string;
		tags?: Array<Tag>;
	}
	export interface CreateSubscriberRequestFormProperties {
		subscriberDescription: FormControl<string | null | undefined>,

		/** Required */
		subscriberName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriberRequestFormGroup() {
		return new FormGroup<CreateSubscriberRequestFormProperties>({
			subscriberDescription: new FormControl<string | null | undefined>(undefined),
			subscriberName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAwsLogSourceRequest {

		/** Required */
		sources: Array<AwsLogSourceConfiguration>;
	}
	export interface DeleteAwsLogSourceRequestFormProperties {
	}
	export function CreateDeleteAwsLogSourceRequestFormGroup() {
		return new FormGroup<DeleteAwsLogSourceRequestFormProperties>({
		});

	}

	export interface DeleteCustomLogSourceRequest {
	}
	export interface DeleteCustomLogSourceRequestFormProperties {
	}
	export function CreateDeleteCustomLogSourceRequestFormGroup() {
		return new FormGroup<DeleteCustomLogSourceRequestFormProperties>({
		});

	}

	export interface DeleteDataLakeExceptionSubscriptionRequest {
	}
	export interface DeleteDataLakeExceptionSubscriptionRequestFormProperties {
	}
	export function CreateDeleteDataLakeExceptionSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteDataLakeExceptionSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteDataLakeOrganizationConfigurationRequest {

		/** Required */
		autoEnableNewAccount: Array<DataLakeAutoEnableNewAccountConfiguration>;
	}
	export interface DeleteDataLakeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateDeleteDataLakeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteDataLakeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteDataLakeRequest {

		/** Required */
		regions: Array<string>;
	}
	export interface DeleteDataLakeRequestFormProperties {
	}
	export function CreateDeleteDataLakeRequestFormGroup() {
		return new FormGroup<DeleteDataLakeRequestFormProperties>({
		});

	}

	export interface DeleteSubscriberNotificationRequest {
	}
	export interface DeleteSubscriberNotificationRequestFormProperties {
	}
	export function CreateDeleteSubscriberNotificationRequestFormGroup() {
		return new FormGroup<DeleteSubscriberNotificationRequestFormProperties>({
		});

	}

	export interface DeleteSubscriberRequest {
	}
	export interface DeleteSubscriberRequestFormProperties {
	}
	export function CreateDeleteSubscriberRequestFormGroup() {
		return new FormGroup<DeleteSubscriberRequestFormProperties>({
		});

	}

	export interface DeregisterDataLakeDelegatedAdministratorRequest {
	}
	export interface DeregisterDataLakeDelegatedAdministratorRequestFormProperties {
	}
	export function CreateDeregisterDataLakeDelegatedAdministratorRequestFormGroup() {
		return new FormGroup<DeregisterDataLakeDelegatedAdministratorRequestFormProperties>({
		});

	}

	export interface GetDataLakeExceptionSubscriptionRequest {
	}
	export interface GetDataLakeExceptionSubscriptionRequestFormProperties {
	}
	export function CreateGetDataLakeExceptionSubscriptionRequestFormGroup() {
		return new FormGroup<GetDataLakeExceptionSubscriptionRequestFormProperties>({
		});

	}

	export interface GetDataLakeOrganizationConfigurationRequest {
	}
	export interface GetDataLakeOrganizationConfigurationRequestFormProperties {
	}
	export function CreateGetDataLakeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<GetDataLakeOrganizationConfigurationRequestFormProperties>({
		});

	}

	export interface GetDataLakeSourcesRequest {
		accounts?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface GetDataLakeSourcesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSourcesRequestFormGroup() {
		return new FormGroup<GetDataLakeSourcesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSubscriberRequest {
	}
	export interface GetSubscriberRequestFormProperties {
	}
	export function CreateGetSubscriberRequestFormGroup() {
		return new FormGroup<GetSubscriberRequestFormProperties>({
		});

	}

	export interface ListDataLakeExceptionsRequest {
		maxResults?: number | null;
		nextToken?: string;
		regions?: Array<string>;
	}
	export interface ListDataLakeExceptionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataLakeExceptionsRequestFormGroup() {
		return new FormGroup<ListDataLakeExceptionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataLakesRequest {
	}
	export interface ListDataLakesRequestFormProperties {
	}
	export function CreateListDataLakesRequestFormGroup() {
		return new FormGroup<ListDataLakesRequestFormProperties>({
		});

	}

	export interface ListLogSourcesRequest {
		accounts?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
		regions?: Array<string>;
		sources?: Array<LogSourceResource>;
	}
	export interface ListLogSourcesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogSourcesRequestFormGroup() {
		return new FormGroup<ListLogSourcesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscribersRequest {
	}
	export interface ListSubscribersRequestFormProperties {
	}
	export function CreateListSubscribersRequestFormGroup() {
		return new FormGroup<ListSubscribersRequestFormProperties>({
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

	export interface RegisterDataLakeDelegatedAdministratorRequest {

		/** Required */
		accountId: string;
	}
	export interface RegisterDataLakeDelegatedAdministratorRequestFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDataLakeDelegatedAdministratorRequestFormGroup() {
		return new FormGroup<RegisterDataLakeDelegatedAdministratorRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateDataLakeExceptionSubscriptionRequest {
		exceptionTimeToLive?: number | null;

		/** Required */
		notificationEndpoint: string;

		/** Required */
		subscriptionProtocol: string;
	}
	export interface UpdateDataLakeExceptionSubscriptionRequestFormProperties {
		exceptionTimeToLive: FormControl<number | null | undefined>,

		/** Required */
		notificationEndpoint: FormControl<string | null | undefined>,

		/** Required */
		subscriptionProtocol: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataLakeExceptionSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateDataLakeExceptionSubscriptionRequestFormProperties>({
			exceptionTimeToLive: new FormControl<number | null | undefined>(undefined),
			notificationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionProtocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataLakeRequest {

		/** Required */
		configurations: Array<DataLakeConfiguration>;
	}
	export interface UpdateDataLakeRequestFormProperties {
	}
	export function CreateUpdateDataLakeRequestFormGroup() {
		return new FormGroup<UpdateDataLakeRequestFormProperties>({
		});

	}

	export interface UpdateSubscriberNotificationRequest {

		/** Required */
		configuration: NotificationConfiguration;
	}
	export interface UpdateSubscriberNotificationRequestFormProperties {
	}
	export function CreateUpdateSubscriberNotificationRequestFormGroup() {
		return new FormGroup<UpdateSubscriberNotificationRequestFormProperties>({
		});

	}

	export interface UpdateSubscriberRequest {
		sources?: Array<LogSourceResource>;
		subscriberDescription?: string;
		subscriberIdentity?: AwsIdentity;
		subscriberName?: string;
	}
	export interface UpdateSubscriberRequestFormProperties {
		subscriberDescription: FormControl<string | null | undefined>,
		subscriberName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriberRequestFormGroup() {
		return new FormGroup<UpdateSubscriberRequestFormProperties>({
			subscriberDescription: new FormControl<string | null | undefined>(undefined),
			subscriberName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. Once you add an Amazon Web Service as a source, Security Lake starts collecting logs and events from it.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source.</p>
		 * Post v1/datalake/logsources/aws
		 * @return {CreateAwsLogSourceResponse} Success
		 */
		CreateAwsLogSource(requestBody: CreateAwsLogSourcePostBody): Observable<CreateAwsLogSourceResponse> {
			return this.http.post<CreateAwsLogSourceResponse>(this.baseUri + 'v1/datalake/logsources/aws', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source. In addition, this operation also creates an associated Glue table and an Glue crawler.
		 * Post v1/datalake/logsources/custom
		 * @return {CreateCustomLogSourceResponse} Success
		 */
		CreateCustomLogSource(requestBody: CreateCustomLogSourcePostBody): Observable<CreateCustomLogSourceResponse> {
			return this.http.post<CreateCustomLogSourceResponse>(this.baseUri + 'v1/datalake/logsources/custom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. To specify particular Regions, configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
		 * Post v1/datalake
		 * @return {CreateDataLakeResponse} Success
		 */
		CreateDataLake(requestBody: CreateDataLakePostBody): Observable<CreateDataLakeResponse> {
			return this.http.post<CreateDataLakeResponse>(this.baseUri + 'v1/datalake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions.
		 * Put v1/datalake
		 * @return {UpdateDataLakeResponse} Success
		 */
		UpdateDataLake(requestBody: UpdateDataLakePutBody): Observable<UpdateDataLakeResponse> {
			return this.http.put<UpdateDataLakeResponse>(this.baseUri + 'v1/datalake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
		 * Post v1/datalake/exceptions/subscription
		 * @return {CreateDataLakeExceptionSubscriptionResponse} Success
		 */
		CreateDataLakeExceptionSubscription(requestBody: CreateDataLakeExceptionSubscriptionPostBody): Observable<CreateDataLakeExceptionSubscriptionResponse> {
			return this.http.post<CreateDataLakeExceptionSubscriptionResponse>(this.baseUri + 'v1/datalake/exceptions/subscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
		 * Delete v1/datalake/exceptions/subscription
		 * @return {DeleteDataLakeExceptionSubscriptionResponse} Success
		 */
		DeleteDataLakeExceptionSubscription(): Observable<DeleteDataLakeExceptionSubscriptionResponse> {
			return this.http.delete<DeleteDataLakeExceptionSubscriptionResponse>(this.baseUri + 'v1/datalake/exceptions/subscription', {});
		}

		/**
		 * Retrieves the details of exception notifications for the account in Amazon Security Lake.
		 * Get v1/datalake/exceptions/subscription
		 * @return {GetDataLakeExceptionSubscriptionResponse} Success
		 */
		GetDataLakeExceptionSubscription(): Observable<GetDataLakeExceptionSubscriptionResponse> {
			return this.http.get<GetDataLakeExceptionSubscriptionResponse>(this.baseUri + 'v1/datalake/exceptions/subscription', {});
		}

		/**
		 * Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
		 * Put v1/datalake/exceptions/subscription
		 * @return {UpdateDataLakeExceptionSubscriptionResponse} Success
		 */
		UpdateDataLakeExceptionSubscription(requestBody: UpdateDataLakeExceptionSubscriptionPutBody): Observable<UpdateDataLakeExceptionSubscriptionResponse> {
			return this.http.put<UpdateDataLakeExceptionSubscriptionResponse>(this.baseUri + 'v1/datalake/exceptions/subscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
		 * Post v1/datalake/organization/configuration
		 * @return {CreateDataLakeOrganizationConfigurationResponse} Success
		 */
		CreateDataLakeOrganizationConfiguration(requestBody: CreateDataLakeOrganizationConfigurationPostBody): Observable<CreateDataLakeOrganizationConfigurationResponse> {
			return this.http.post<CreateDataLakeOrganizationConfigurationResponse>(this.baseUri + 'v1/datalake/organization/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
		 * Get v1/datalake/organization/configuration
		 * @return {GetDataLakeOrganizationConfigurationResponse} Success
		 */
		GetDataLakeOrganizationConfiguration(): Observable<GetDataLakeOrganizationConfigurationResponse> {
			return this.http.get<GetDataLakeOrganizationConfigurationResponse>(this.baseUri + 'v1/datalake/organization/configuration', {});
		}

		/**
		 * Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
		 * Post v1/subscribers
		 * @return {CreateSubscriberResponse} Success
		 */
		CreateSubscriber(requestBody: CreateSubscriberPostBody): Observable<CreateSubscriberResponse> {
			return this.http.post<CreateSubscriberResponse>(this.baseUri + 'v1/subscribers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
		 * Get v1/subscribers
		 * @param {number} maxResults The maximum number of accounts for which the configuration is displayed.
		 * @param {string} nextToken If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
		 * @return {ListSubscribersResponse} Success
		 */
		ListSubscribers(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSubscribersResponse> {
			return this.http.get<ListSubscribersResponse>(this.baseUri + 'v1/subscribers?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
		 * Post v1/subscribers/{subscriberId}/notification
		 * @param {string} subscriberId The subscriber ID for the notification subscription.
		 * @return {CreateSubscriberNotificationResponse} Success
		 */
		CreateSubscriberNotification(subscriberId: string, requestBody: CreateSubscriberNotificationPostBody): Observable<CreateSubscriberNotificationResponse> {
			return this.http.post<CreateSubscriberNotificationResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)) + '/notification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
		 * Delete v1/subscribers/{subscriberId}/notification
		 * @param {string} subscriberId The ID of the Security Lake subscriber account.
		 * @return {DeleteSubscriberNotificationResponse} Success
		 */
		DeleteSubscriberNotification(subscriberId: string): Observable<DeleteSubscriberNotificationResponse> {
			return this.http.delete<DeleteSubscriberNotificationResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)) + '/notification', {});
		}

		/**
		 * Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.
		 * Put v1/subscribers/{subscriberId}/notification
		 * @param {string} subscriberId The subscription ID for which the subscription notification is specified.
		 * @return {UpdateSubscriberNotificationResponse} Success
		 */
		UpdateSubscriberNotification(subscriberId: string, requestBody: UpdateSubscriberNotificationPutBody): Observable<UpdateSubscriberNotificationResponse> {
			return this.http.put<UpdateSubscriberNotificationResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)) + '/notification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. You can remove a source for one or more Regions. When you remove the source, Security Lake stops collecting data from that source in the specified Regions and accounts, and subscribers can no longer consume new data from the source. However, subscribers can still consume data that Security Lake collected from the source before removal.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. </p>
		 * Post v1/datalake/logsources/aws/delete
		 * @return {DeleteAwsLogSourceResponse} Success
		 */
		DeleteAwsLogSource(requestBody: DeleteAwsLogSourcePostBody): Observable<DeleteAwsLogSourceResponse> {
			return this.http.post<DeleteAwsLogSourceResponse>(this.baseUri + 'v1/datalake/logsources/aws/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a custom log source from Amazon Security Lake, to stop sending data from the custom source to Security Lake.
		 * Delete v1/datalake/logsources/custom/{sourceName}
		 * @param {string} sourceName The source name of custom log source that you want to delete.
		 * @param {string} sourceVersion The source version for the third-party custom source. You can limit the custom source removal to the specified source version.
		 * @return {DeleteCustomLogSourceResponse} Success
		 */
		DeleteCustomLogSource(sourceName: string, sourceVersion: string | null | undefined): Observable<DeleteCustomLogSourceResponse> {
			return this.http.delete<DeleteCustomLogSourceResponse>(this.baseUri + 'v1/datalake/logsources/custom/' + (sourceName == null ? '' : encodeURIComponent(sourceName)) + '&sourceVersion=' + (sourceVersion == null ? '' : encodeURIComponent(sourceVersion)), {});
		}

		/**
		 * <p>When you disable Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions and it stops collecting data from your sources. Also, this API automatically takes steps to remove the account from Security Lake. However, Security Lake retains all of your existing settings and the resources that it created in your Amazon Web Services account in the current Amazon Web Services Region.</p> <p>The <code>DeleteDataLake</code> operation does not delete the data that is stored in your Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
		 * Post v1/datalake/delete
		 * @return {DeleteDataLakeResponse} Success
		 */
		DeleteDataLake(requestBody: DeleteDataLakePostBody): Observable<DeleteDataLakeResponse> {
			return this.http.post<DeleteDataLakeResponse>(this.baseUri + 'v1/datalake/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Turns off automatic enablement of Amazon Security Lake for member accounts that are added to an organization in Organizations. Only the delegated Security Lake administrator for an organization can perform this operation. If the delegated Security Lake administrator performs this operation, new member accounts won't automatically contribute data to the data lake.
		 * Post v1/datalake/organization/configuration/delete
		 * @return {DeleteDataLakeOrganizationConfigurationResponse} Success
		 */
		DeleteDataLakeOrganizationConfiguration(requestBody: DeleteDataLakeOrganizationConfigurationPostBody): Observable<DeleteDataLakeOrganizationConfigurationResponse> {
			return this.http.post<DeleteDataLakeOrganizationConfigurationResponse>(this.baseUri + 'v1/datalake/organization/configuration/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the subscription permission and all notification settings for accounts that are already enabled in Amazon Security Lake. When you run <code>DeleteSubscriber</code>, the subscriber will no longer consume data from Security Lake and the subscriber is removed. This operation deletes the subscriber and removes access to data in the current Amazon Web Services Region.
		 * Delete v1/subscribers/{subscriberId}
		 * @param {string} subscriberId A value created by Security Lake that uniquely identifies your <code>DeleteSubscriber</code> API request.
		 * @return {DeleteSubscriberResponse} Success
		 */
		DeleteSubscriber(subscriberId: string): Observable<DeleteSubscriberResponse> {
			return this.http.delete<DeleteSubscriberResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)), {});
		}

		/**
		 * Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
		 * Get v1/subscribers/{subscriberId}
		 * @param {string} subscriberId A value created by Amazon Security Lake that uniquely identifies your <code>GetSubscriber</code> API request.
		 * @return {GetSubscriberResponse} Success
		 */
		GetSubscriber(subscriberId: string): Observable<GetSubscriberResponse> {
			return this.http.get<GetSubscriberResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)), {});
		}

		/**
		 * Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from.
		 * Put v1/subscribers/{subscriberId}
		 * @param {string} subscriberId A value created by Security Lake that uniquely identifies your subscription.
		 * @return {UpdateSubscriberResponse} Success
		 */
		UpdateSubscriber(subscriberId: string, requestBody: UpdateSubscriberPutBody): Observable<UpdateSubscriberResponse> {
			return this.http.put<UpdateSubscriberResponse>(this.baseUri + 'v1/subscribers/' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
		 * Delete v1/datalake/delegate
		 * @return {DeregisterDataLakeDelegatedAdministratorResponse} Success
		 */
		DeregisterDataLakeDelegatedAdministrator(): Observable<DeregisterDataLakeDelegatedAdministratorResponse> {
			return this.http.delete<DeregisterDataLakeDelegatedAdministratorResponse>(this.baseUri + 'v1/datalake/delegate', {});
		}

		/**
		 * Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
		 * Post v1/datalake/delegate
		 * @return {RegisterDataLakeDelegatedAdministratorResponse} Success
		 */
		RegisterDataLakeDelegatedAdministrator(requestBody: RegisterDataLakeDelegatedAdministratorPostBody): Observable<RegisterDataLakeDelegatedAdministratorResponse> {
			return this.http.post<RegisterDataLakeDelegatedAdministratorResponse>(this.baseUri + 'v1/datalake/delegate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from.
		 * Post v1/datalake/sources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetDataLakeSourcesResponse} Success
		 */
		GetDataLakeSources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetDataLakeSourcesPostBody): Observable<GetDataLakeSourcesResponse> {
			return this.http.post<GetDataLakeSourcesResponse>(this.baseUri + 'v1/datalake/sources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
		 * Post v1/datalake/exceptions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDataLakeExceptionsResponse} Success
		 */
		ListDataLakeExceptions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDataLakeExceptionsPostBody): Observable<ListDataLakeExceptionsResponse> {
			return this.http.post<ListDataLakeExceptionsResponse>(this.baseUri + 'v1/datalake/exceptions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services Regions. You can use this operation to determine whether Security Lake is enabled for a Region.
		 * Get v1/datalakes
		 * @param {Array<string>} regions The list of regions where Security Lake is enabled.
		 * @return {ListDataLakesResponse} Success
		 */
		ListDataLakes(regions: Array<string> | null | undefined): Observable<ListDataLakesResponse> {
			return this.http.get<ListDataLakesResponse>(this.baseUri + 'v1/datalakes?' + regions?.map(z => `regions=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieves the log sources in the current Amazon Web Services Region.
		 * Post v1/datalake/logsources/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListLogSourcesResponse} Success
		 */
		ListLogSources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListLogSourcesPostBody): Observable<ListLogSourcesResponse> {
			return this.http.post<ListLogSourcesResponse>(this.baseUri + 'v1/datalake/logsources/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the tags (keys and values) that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the Amazon Security Lake resource to retrieve the tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates one or more tags that are associated with an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region. A <i>tag</i> is a label that you can define and associate with Amazon Web Services resources. Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>. A <i>tag key</i> is a general label that acts as a category for a more specific tag value. A <i>tag value</i> acts as a descriptor for a tag key. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. For more information, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html">Tagging Amazon Security Lake resources</a> in the <i>Amazon Security Lake User Guide</i>.
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the Amazon Security Lake resource to add or update the tags for.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags (keys and values) from an Amazon Security Lake resource: a subscriber, or the data lake configuration for your Amazon Web Services account in a particular Amazon Web Services Region.
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the Amazon Security Lake resource to remove one or more tags from.
		 * @param {Array<string>} tagKeys A list of one or more tag keys. For each value in the list, specify the tag key for a tag to remove from the Amazon Security Lake resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAwsLogSourcePostBody {

		/**
		 * Specify the natively-supported Amazon Web Services service to add as a source in Security Lake.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		sources: Array<AwsLogSourceConfiguration>;
	}
	export interface CreateAwsLogSourcePostBodyFormProperties {
	}
	export function CreateCreateAwsLogSourcePostBodyFormGroup() {
		return new FormGroup<CreateAwsLogSourcePostBodyFormProperties>({
		});

	}

	export interface CreateCustomLogSourcePostBody {

		/** The configuration for the third-party custom source. */
		configuration?: CreateCustomLogSourcePostBodyConfiguration;

		/** <p>The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake. The supported event classes are:</p> <ul> <li> <p> <code>ACCESS_ACTIVITY</code> </p> </li> <li> <p> <code>FILE_ACTIVITY</code> </p> </li> <li> <p> <code>KERNEL_ACTIVITY</code> </p> </li> <li> <p> <code>KERNEL_EXTENSION</code> </p> </li> <li> <p> <code>MEMORY_ACTIVITY</code> </p> </li> <li> <p> <code>MODULE_ACTIVITY</code> </p> </li> <li> <p> <code>PROCESS_ACTIVITY</code> </p> </li> <li> <p> <code>REGISTRY_KEY_ACTIVITY</code> </p> </li> <li> <p> <code>REGISTRY_VALUE_ACTIVITY</code> </p> </li> <li> <p> <code>RESOURCE_ACTIVITY</code> </p> </li> <li> <p> <code>SCHEDULED_JOB_ACTIVITY</code> </p> </li> <li> <p> <code>SECURITY_FINDING</code> </p> </li> <li> <p> <code>ACCOUNT_CHANGE</code> </p> </li> <li> <p> <code>AUTHENTICATION</code> </p> </li> <li> <p> <code>AUTHORIZATION</code> </p> </li> <li> <p> <code>ENTITY_MANAGEMENT_AUDIT</code> </p> </li> <li> <p> <code>DHCP_ACTIVITY</code> </p> </li> <li> <p> <code>NETWORK_ACTIVITY</code> </p> </li> <li> <p> <code>DNS_ACTIVITY</code> </p> </li> <li> <p> <code>FTP_ACTIVITY</code> </p> </li> <li> <p> <code>HTTP_ACTIVITY</code> </p> </li> <li> <p> <code>RDP_ACTIVITY</code> </p> </li> <li> <p> <code>SMB_ACTIVITY</code> </p> </li> <li> <p> <code>SSH_ACTIVITY</code> </p> </li> <li> <p> <code>CONFIG_STATE</code> </p> </li> <li> <p> <code>INVENTORY_INFO</code> </p> </li> <li> <p> <code>EMAIL_ACTIVITY</code> </p> </li> <li> <p> <code>API_ACTIVITY</code> </p> </li> <li> <p> <code>CLOUD_API</code> </p> </li> </ul> */
		eventClasses?: Array<string>;

		/**
		 * Specify the name for a third-party custom source. This must be a Regionally unique value.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		sourceName: string;

		/**
		 * Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
		 * Max length: 32
		 * Min length: 1
		 */
		sourceVersion?: string | null;
	}
	export interface CreateCustomLogSourcePostBodyFormProperties {

		/**
		 * Specify the name for a third-party custom source. This must be a Regionally unique value.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		sourceName: FormControl<string | null | undefined>,

		/**
		 * Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
		 * Max length: 32
		 * Min length: 1
		 */
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomLogSourcePostBodyFormGroup() {
		return new FormGroup<CreateCustomLogSourcePostBodyFormProperties>({
			sourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\\\w\-_:/.]*$')]),
			sourceVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[A-Za-z0-9\-\.\_]*$')]),
		});

	}

	export interface CreateCustomLogSourcePostBodyConfiguration {
		crawlerConfiguration?: CustomLogSourceCrawlerConfiguration;
		providerIdentity?: AwsIdentity;
	}
	export interface CreateCustomLogSourcePostBodyConfigurationFormProperties {
	}
	export function CreateCreateCustomLogSourcePostBodyConfigurationFormGroup() {
		return new FormGroup<CreateCustomLogSourcePostBodyConfigurationFormProperties>({
		});

	}

	export interface CreateDataLakePostBody {

		/**
		 * Specify the Region or Regions that will contribute data to the rollup region.
		 * Required
		 */
		configurations: Array<DataLakeConfiguration>;

		/**
		 * The Amazon Resource Name (ARN) used to create and update the Glue table. This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.
		 * Required
		 */
		metaStoreManagerRoleArn: string;

		/**
		 * An array of objects, one for each tag to associate with the data lake configuration. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateDataLakePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) used to create and update the Glue table. This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.
		 * Required
		 */
		metaStoreManagerRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataLakePostBodyFormGroup() {
		return new FormGroup<CreateDataLakePostBodyFormProperties>({
			metaStoreManagerRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:.*$')]),
		});

	}

	export interface UpdateDataLakePutBody {

		/**
		 * Specify the Region or Regions that will contribute data to the rollup region.
		 * Required
		 */
		configurations: Array<DataLakeConfiguration>;
	}
	export interface UpdateDataLakePutBodyFormProperties {
	}
	export function CreateUpdateDataLakePutBodyFormGroup() {
		return new FormGroup<UpdateDataLakePutBodyFormProperties>({
		});

	}

	export interface CreateDataLakeExceptionSubscriptionPostBody {

		/**
		 * The expiration period and time-to-live (TTL).
		 * Minimum: 1
		 */
		exceptionTimeToLive?: number | null;

		/**
		 * The Amazon Web Services account where you want to receive exception notifications.
		 * Required
		 */
		notificationEndpoint: string;

		/**
		 * The subscription protocol to which exception notifications are posted.
		 * Required
		 */
		subscriptionProtocol: string;
	}
	export interface CreateDataLakeExceptionSubscriptionPostBodyFormProperties {

		/**
		 * The expiration period and time-to-live (TTL).
		 * Minimum: 1
		 */
		exceptionTimeToLive: FormControl<number | null | undefined>,

		/**
		 * The Amazon Web Services account where you want to receive exception notifications.
		 * Required
		 */
		notificationEndpoint: FormControl<string | null | undefined>,

		/**
		 * The subscription protocol to which exception notifications are posted.
		 * Required
		 */
		subscriptionProtocol: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataLakeExceptionSubscriptionPostBodyFormGroup() {
		return new FormGroup<CreateDataLakeExceptionSubscriptionPostBodyFormProperties>({
			exceptionTimeToLive: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			notificationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
			subscriptionProtocol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z\-]*$')]),
		});

	}

	export interface UpdateDataLakeExceptionSubscriptionPutBody {

		/**
		 * The time-to-live (TTL) for the exception message to remain.
		 * Minimum: 1
		 */
		exceptionTimeToLive?: number | null;

		/**
		 * The account that is subscribed to receive exception notifications.
		 * Required
		 */
		notificationEndpoint: string;

		/**
		 * The subscription protocol to which exception messages are posted.
		 * Required
		 */
		subscriptionProtocol: string;
	}
	export interface UpdateDataLakeExceptionSubscriptionPutBodyFormProperties {

		/**
		 * The time-to-live (TTL) for the exception message to remain.
		 * Minimum: 1
		 */
		exceptionTimeToLive: FormControl<number | null | undefined>,

		/**
		 * The account that is subscribed to receive exception notifications.
		 * Required
		 */
		notificationEndpoint: FormControl<string | null | undefined>,

		/**
		 * The subscription protocol to which exception messages are posted.
		 * Required
		 */
		subscriptionProtocol: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataLakeExceptionSubscriptionPutBodyFormGroup() {
		return new FormGroup<UpdateDataLakeExceptionSubscriptionPutBodyFormProperties>({
			exceptionTimeToLive: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			notificationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
			subscriptionProtocol: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z\-]*$')]),
		});

	}

	export interface CreateDataLakeOrganizationConfigurationPostBody {

		/**
		 * Enable Security Lake with the specified configuration settings, to begin collecting security data for new accounts in your organization.
		 * Required
		 */
		autoEnableNewAccount: Array<DataLakeAutoEnableNewAccountConfiguration>;
	}
	export interface CreateDataLakeOrganizationConfigurationPostBodyFormProperties {
	}
	export function CreateCreateDataLakeOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateDataLakeOrganizationConfigurationPostBodyFormProperties>({
		});

	}

	export interface CreateSubscriberPostBody {

		/** The Amazon S3 or Lake Formation access type. */
		accessTypes?: Array<AccessType>;

		/**
		 * The supported Amazon Web Services from which logs and events are collected. Security Lake supports log and event collection for natively supported Amazon Web Services.
		 * Required
		 */
		sources: Array<LogSourceResource>;

		/** The description for your subscriber account in Security Lake. */
		subscriberDescription?: string | null;

		/**
		 * The AWS identity.
		 * Required
		 */
		subscriberIdentity: CreateSubscriberPostBodySubscriberIdentity;

		/**
		 * The name of your Security Lake subscriber account.
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		subscriberName: string;

		/**
		 * An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateSubscriberPostBodyFormProperties {

		/** The description for your subscriber account in Security Lake. */
		subscriberDescription: FormControl<string | null | undefined>,

		/**
		 * The name of your Security Lake subscriber account.
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		subscriberName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriberPostBodyFormGroup() {
		return new FormGroup<CreateSubscriberPostBodyFormProperties>({
			subscriberDescription: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\\\w\s\-_:/,.@=+]*$')]),
			subscriberName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface CreateSubscriberPostBodySubscriberIdentity {
		externalId?: string;
		principal?: string;
	}
	export interface CreateSubscriberPostBodySubscriberIdentityFormProperties {
		externalId: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubscriberPostBodySubscriberIdentityFormGroup() {
		return new FormGroup<CreateSubscriberPostBodySubscriberIdentityFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubscriberNotificationPostBody {

		/**
		 * Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
		 * Required
		 */
		configuration: CreateSubscriberNotificationPostBodyConfiguration;
	}
	export interface CreateSubscriberNotificationPostBodyFormProperties {
	}
	export function CreateCreateSubscriberNotificationPostBodyFormGroup() {
		return new FormGroup<CreateSubscriberNotificationPostBodyFormProperties>({
		});

	}

	export interface CreateSubscriberNotificationPostBodyConfiguration {
		httpsNotificationConfiguration?: HttpsNotificationConfiguration;
		sqsNotificationConfiguration?: SqsNotificationConfiguration;
	}
	export interface CreateSubscriberNotificationPostBodyConfigurationFormProperties {
	}
	export function CreateCreateSubscriberNotificationPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateSubscriberNotificationPostBodyConfigurationFormProperties>({
		});

	}

	export interface UpdateSubscriberNotificationPutBody {

		/**
		 * Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
		 * Required
		 */
		configuration: UpdateSubscriberNotificationPutBodyConfiguration;
	}
	export interface UpdateSubscriberNotificationPutBodyFormProperties {
	}
	export function CreateUpdateSubscriberNotificationPutBodyFormGroup() {
		return new FormGroup<UpdateSubscriberNotificationPutBodyFormProperties>({
		});

	}

	export interface UpdateSubscriberNotificationPutBodyConfiguration {
		httpsNotificationConfiguration?: HttpsNotificationConfiguration;
		sqsNotificationConfiguration?: SqsNotificationConfiguration;
	}
	export interface UpdateSubscriberNotificationPutBodyConfigurationFormProperties {
	}
	export function CreateUpdateSubscriberNotificationPutBodyConfigurationFormGroup() {
		return new FormGroup<UpdateSubscriberNotificationPutBodyConfigurationFormProperties>({
		});

	}

	export interface DeleteAwsLogSourcePostBody {

		/**
		 * Specify the natively-supported Amazon Web Services service to remove as a source in Security Lake.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		sources: Array<AwsLogSourceConfiguration>;
	}
	export interface DeleteAwsLogSourcePostBodyFormProperties {
	}
	export function CreateDeleteAwsLogSourcePostBodyFormGroup() {
		return new FormGroup<DeleteAwsLogSourcePostBodyFormProperties>({
		});

	}

	export interface DeleteDataLakePostBody {

		/**
		 * The list of Regions where Security Lake is enabled.
		 * Required
		 */
		regions: Array<string>;
	}
	export interface DeleteDataLakePostBodyFormProperties {
	}
	export function CreateDeleteDataLakePostBodyFormGroup() {
		return new FormGroup<DeleteDataLakePostBodyFormProperties>({
		});

	}

	export interface DeleteDataLakeOrganizationConfigurationPostBody {

		/**
		 * Turns off automatic enablement of Security Lake for member accounts that are added to an organization.
		 * Required
		 */
		autoEnableNewAccount: Array<DataLakeAutoEnableNewAccountConfiguration>;
	}
	export interface DeleteDataLakeOrganizationConfigurationPostBodyFormProperties {
	}
	export function CreateDeleteDataLakeOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteDataLakeOrganizationConfigurationPostBodyFormProperties>({
		});

	}

	export interface UpdateSubscriberPutBody {

		/** The supported Amazon Web Services from which logs and events are collected. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>. */
		sources?: Array<LogSourceResource>;

		/** The description of the Security Lake account subscriber. */
		subscriberDescription?: string | null;

		/** The AWS identity. */
		subscriberIdentity?: UpdateSubscriberPutBodySubscriberIdentity;

		/**
		 * The name of the Security Lake account subscriber.
		 * Max length: 64
		 * Min length: 0
		 */
		subscriberName?: string | null;
	}
	export interface UpdateSubscriberPutBodyFormProperties {

		/** The description of the Security Lake account subscriber. */
		subscriberDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the Security Lake account subscriber.
		 * Max length: 64
		 * Min length: 0
		 */
		subscriberName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriberPutBodyFormGroup() {
		return new FormGroup<UpdateSubscriberPutBodyFormProperties>({
			subscriberDescription: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\\\w\s\-_:/,.@=+]*$')]),
			subscriberName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64), Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
		});

	}

	export interface UpdateSubscriberPutBodySubscriberIdentity {
		externalId?: string;
		principal?: string;
	}
	export interface UpdateSubscriberPutBodySubscriberIdentityFormProperties {
		externalId: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriberPutBodySubscriberIdentityFormGroup() {
		return new FormGroup<UpdateSubscriberPutBodySubscriberIdentityFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterDataLakeDelegatedAdministratorPostBody {

		/**
		 * The Amazon Web Services account ID of the Security Lake delegated administrator.
		 * Required
		 */
		accountId: string;
	}
	export interface RegisterDataLakeDelegatedAdministratorPostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID of the Security Lake delegated administrator.
		 * Required
		 */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDataLakeDelegatedAdministratorPostBodyFormGroup() {
		return new FormGroup<RegisterDataLakeDelegatedAdministratorPostBodyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
		});

	}

	export interface GetDataLakeSourcesPostBody {

		/** The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved. */
		accounts?: Array<string>;

		/**
		 * The maximum limit of accounts for which the static snapshot of the current Region, including enabled accounts and log sources, is retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p> */
		nextToken?: string | null;
	}
	export interface GetDataLakeSourcesPostBodyFormProperties {

		/**
		 * The maximum limit of accounts for which the static snapshot of the current Region, including enabled accounts and log sources, is retrieved.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSourcesPostBodyFormGroup() {
		return new FormGroup<GetDataLakeSourcesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
		});

	}

	export interface ListDataLakeExceptionsPostBody {

		/**
		 * List the maximum number of failures in Security Lake.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** <p>List if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p> */
		nextToken?: string | null;

		/** List the Amazon Web Services Regions from which exceptions are retrieved. */
		regions?: Array<string>;
	}
	export interface ListDataLakeExceptionsPostBodyFormProperties {

		/**
		 * List the maximum number of failures in Security Lake.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>List if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p> <p>Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataLakeExceptionsPostBodyFormGroup() {
		return new FormGroup<ListDataLakeExceptionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
		});

	}

	export interface ListLogSourcesPostBody {

		/** The list of Amazon Web Services accounts for which log sources are displayed. */
		accounts?: Array<string>;

		/**
		 * The maximum number of accounts for which the log sources are displayed.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page. */
		nextToken?: string | null;

		/** The list of regions for which log sources are displayed. */
		regions?: Array<string>;

		/** The list of sources for which log sources are displayed. */
		sources?: Array<LogSourceResource>;
	}
	export interface ListLogSourcesPostBodyFormProperties {

		/**
		 * The maximum number of accounts for which the log sources are displayed.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogSourcesPostBodyFormGroup() {
		return new FormGroup<ListLogSourcesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[\\\w\-_:/.@=+]*$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * An array of objects, one for each tag (key and value) to associate with the Amazon Security Lake resource. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
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

}

