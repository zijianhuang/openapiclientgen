import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddLayerVersionPermissionResponse {
		Statement?: string;
		RevisionId?: string;
	}

	export interface ServiceException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceConflictException {
	}

	export interface TooManyRequestsException {
	}

	export interface InvalidParameterValueException {
	}

	export interface PolicyLengthExceededException {
	}

	export interface PreconditionFailedException {
	}

	export interface AddPermissionResponse {
		Statement?: string;
	}


	/** Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>. */
	export interface AliasConfiguration {
		AliasArn?: string;
		Name?: string;
		FunctionVersion?: string;
		Description?: string;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string;
	}


	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
	export interface AliasRoutingConfiguration {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}

	export interface AdditionalVersionWeights {
	}


	/** A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details. */
	export interface EventSourceMappingConfiguration {
		UUID?: string;
		BatchSize?: number;
		MaximumBatchingWindowInSeconds?: number;
		ParallelizationFactor?: number;
		EventSourceArn?: string;
		FunctionArn?: string;
		LastModified?: Date;
		LastProcessingResult?: string;
		State?: string;
		StateTransitionReason?: string;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
		MaximumRecordAgeInSeconds?: number;
		BisectBatchOnFunctionError?: boolean;
		MaximumRetryAttempts?: number;
	}


	/** A configuration object that specifies the destination of an event after Lambda processes it. */
	export interface DestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}


	/** A destination for events that were processed successfully. */
	export interface OnSuccess {
		Destination?: string;
	}


	/** A destination for events that failed processing. */
	export interface OnFailure {
		Destination?: string;
	}


	/** Details about a function's configuration. */
	export interface FunctionConfiguration {
		FunctionName?: string;
		FunctionArn?: string;
		Runtime?: FunctionConfigurationRuntime;
		Role?: string;
		Handler?: string;
		CodeSize?: number;
		Description?: string;
		Timeout?: number;
		MemorySize?: number;
		LastModified?: string;
		CodeSha256?: string;
		Version?: string;

		/** The VPC security groups and subnets that are attached to a Lambda function. */
		VpcConfig?: VpcConfigResponse;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;

		/** The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error. */
		Environment?: EnvironmentResponse;
		KMSKeyArn?: string;

		/** The function's AWS X-Ray tracing configuration. */
		TracingConfig?: TracingConfigResponse;
		MasterArn?: string;
		RevisionId?: string;
		Layers?: Array<Layer>;
		State?: FunctionConfigurationState;
		StateReason?: string;
		StateReasonCode?: FunctionConfigurationStateReasonCode;
		LastUpdateStatus?: FunctionConfigurationLastUpdateStatus;
		LastUpdateStatusReason?: string;
		LastUpdateStatusReasonCode?: FunctionConfigurationLastUpdateStatusReasonCode;
	}

	export enum FunctionConfigurationRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }


	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface VpcConfigResponse {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
		VpcId?: string;
	}


	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
	export interface DeadLetterConfig {
		TargetArn?: string;
	}


	/** The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error. */
	export interface EnvironmentResponse {
		Variables?: EnvironmentVariables;

		/** Error messages for environment variables that couldn't be applied. */
		Error?: EnvironmentError;
	}

	export interface EnvironmentVariables {
	}


	/** Error messages for environment variables that couldn't be applied. */
	export interface EnvironmentError {
		ErrorCode?: string;
		Message?: string;
	}


	/** The function's AWS X-Ray tracing configuration. */
	export interface TracingConfigResponse {
		Mode?: TracingConfigResponseMode;
	}

	export enum TracingConfigResponseMode { Active = 0, PassThrough = 1 }


	/** An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface Layer {
		Arn?: string;
		CodeSize?: number;
	}

	export enum FunctionConfigurationState { Pending = 0, Active = 1, Inactive = 2, Failed = 3 }

	export enum FunctionConfigurationStateReasonCode { Idle = 0, Creating = 1, Restoring = 2, EniLimitExceeded = 3, InsufficientRolePermissions = 4, InvalidConfiguration = 5, InternalError = 6, SubnetOutOfIPAddresses = 7, InvalidSubnet = 8, InvalidSecurityGroup = 9 }

	export enum FunctionConfigurationLastUpdateStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export enum FunctionConfigurationLastUpdateStatusReasonCode { EniLimitExceeded = 0, InsufficientRolePermissions = 1, InvalidConfiguration = 2, InternalError = 3, SubnetOutOfIPAddresses = 4, InvalidSubnet = 5, InvalidSecurityGroup = 6 }

	export enum TracingMode { Active = 0, PassThrough = 1 }

	export interface CodeStorageExceededException {
	}

	export interface ResourceInUseException {
	}

	export interface GetAccountSettingsResponse {

		/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
		AccountLimit?: AccountLimit;

		/** The number of functions and amount of storage in use. */
		AccountUsage?: AccountUsage;
	}


	/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
	export interface AccountLimit {
		TotalCodeSize?: number;
		CodeSizeUnzipped?: number;
		CodeSizeZipped?: number;
		ConcurrentExecutions?: number;
		UnreservedConcurrentExecutions?: number;
	}


	/** The number of functions and amount of storage in use. */
	export interface AccountUsage {
		TotalCodeSize?: number;
		FunctionCount?: number;
	}

	export interface GetFunctionResponse {

		/** Details about a function's configuration. */
		Configuration?: FunctionConfiguration;

		/** Details about a function's deployment package. */
		Code?: FunctionCodeLocation;
		Tags?: Tags;
		Concurrency?: Concurrency;
	}


	/** Details about a function's deployment package. */
	export interface FunctionCodeLocation {
		RepositoryType?: string;
		Location?: string;
	}

	export interface Tags {
	}

	export interface Concurrency {
		ReservedConcurrentExecutions?: number;
	}

	export interface GetFunctionConcurrencyResponse {
		ReservedConcurrentExecutions?: number;
	}

	export interface FunctionEventInvokeConfig {
		LastModified?: Date;
		FunctionArn?: string;
		MaximumRetryAttempts?: number;
		MaximumEventAgeInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}

	export interface GetLayerVersionResponse {

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		Content?: LayerVersionContentOutput;
		LayerArn?: string;
		LayerVersionArn?: string;
		Description?: string;
		CreatedDate?: string;
		Version?: number;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
	}


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionContentOutput {
		Location?: string;
		CodeSha256?: string;
		CodeSize?: number;
	}

	export enum Runtime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface GetLayerVersionPolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}

	export interface GetPolicyResponse {
		Policy?: string;
		RevisionId?: string;
	}

	export interface GetProvisionedConcurrencyConfigResponse {
		RequestedProvisionedConcurrentExecutions?: number;
		AvailableProvisionedConcurrentExecutions?: number;
		AllocatedProvisionedConcurrentExecutions?: number;
		Status?: GetProvisionedConcurrencyConfigResponseStatus;
		StatusReason?: string;
		LastModified?: string;
	}

	export enum GetProvisionedConcurrencyConfigResponseStatus { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export interface ProvisionedConcurrencyConfigNotFoundException {
	}

	export interface InvocationResponse {
		StatusCode?: number;
		Payload?: string;
	}

	export interface InvalidRequestContentException {
	}

	export interface RequestTooLargeException {
	}

	export interface UnsupportedMediaTypeException {
	}

	export interface EC2UnexpectedException {
	}

	export interface SubnetIPAddressLimitReachedException {
	}

	export interface ENILimitReachedException {
	}

	export interface EC2ThrottledException {
	}

	export interface EC2AccessDeniedException {
	}

	export interface InvalidSubnetIDException {
	}

	export interface InvalidSecurityGroupIDException {
	}

	export interface InvalidZipFileException {
	}

	export interface KMSDisabledException {
	}

	export interface KMSInvalidStateException {
	}

	export interface KMSAccessDeniedException {
	}

	export interface KMSNotFoundException {
	}

	export interface InvalidRuntimeException {
	}

	export interface ResourceNotReadyException {
	}


	/** A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.  */
	export interface InvokeAsyncResponse {
		Status?: number;
	}

	export interface ListAliasesResponse {
		NextMarker?: string;
		Aliases?: Array<AliasConfiguration>;
	}

	export interface ListEventSourceMappingsResponse {
		NextMarker?: string;
		EventSourceMappings?: Array<EventSourceMappingConfiguration>;
	}

	export interface ListFunctionEventInvokeConfigsResponse {
		FunctionEventInvokeConfigs?: Array<FunctionEventInvokeConfig>;
		NextMarker?: string;
	}


	/** A list of Lambda functions. */
	export interface ListFunctionsResponse {
		NextMarker?: string;
		Functions?: Array<FunctionConfiguration>;
	}

	export interface ListLayerVersionsResponse {
		NextMarker?: string;
		LayerVersions?: Array<LayerVersionsListItem>;
	}


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionsListItem {
		LayerVersionArn?: string;
		Version?: number;
		Description?: string;
		CreatedDate?: string;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
	}

	export interface ListLayersResponse {
		NextMarker?: string;
		Layers?: Array<LayersListItem>;
	}


	/** Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayersListItem {
		LayerName?: string;
		LayerArn?: string;

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		LatestMatchingVersion?: LayerVersionsListItem;
	}

	export interface ListProvisionedConcurrencyConfigsResponse {
		ProvisionedConcurrencyConfigs?: Array<ProvisionedConcurrencyConfigListItem>;
		NextMarker?: string;
	}


	/** Details about the provisioned concurrency configuration for a function alias or version. */
	export interface ProvisionedConcurrencyConfigListItem {
		FunctionArn?: string;
		RequestedProvisionedConcurrentExecutions?: number;
		AvailableProvisionedConcurrentExecutions?: number;
		AllocatedProvisionedConcurrentExecutions?: number;
		Status?: GetProvisionedConcurrencyConfigResponseStatus;
		StatusReason?: string;
		LastModified?: string;
	}

	export interface ListTagsResponse {
		Tags?: Tags;
	}

	export interface ListVersionsByFunctionResponse {
		NextMarker?: string;
		Versions?: Array<FunctionConfiguration>;
	}

	export interface PublishLayerVersionResponse {

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		Content?: LayerVersionContentOutput;
		LayerArn?: string;
		LayerVersionArn?: string;
		Description?: string;
		CreatedDate?: string;
		Version?: number;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
	}

	export interface PutProvisionedConcurrencyConfigResponse {
		RequestedProvisionedConcurrentExecutions?: number;
		AvailableProvisionedConcurrentExecutions?: number;
		AllocatedProvisionedConcurrentExecutions?: number;
		Status?: GetProvisionedConcurrencyConfigResponseStatus;
		StatusReason?: string;
		LastModified?: string;
	}

	export interface AddLayerVersionPermissionRequest {
		StatementId: string;
		Action: string;
		Principal: string;
		OrganizationId?: string;
	}

	export interface AddPermissionRequest {
		StatementId: string;
		Action: string;
		Principal: string;
		SourceArn?: string;
		SourceAccount?: string;
		EventSourceToken?: string;
		RevisionId?: string;
	}

	export interface CreateAliasRequest {
		Name: string;
		FunctionVersion: string;
		Description?: string;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
	}

	export enum EventSourcePosition { TRIM_HORIZON = 0, LATEST = 1, AT_TIMESTAMP = 2 }

	export interface CreateEventSourceMappingRequest {
		EventSourceArn: string;
		FunctionName: string;
		Enabled?: boolean;
		BatchSize?: number;
		MaximumBatchingWindowInSeconds?: number;
		ParallelizationFactor?: number;
		StartingPosition?: EventSourcePosition;
		StartingPositionTimestamp?: Date;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
		MaximumRecordAgeInSeconds?: number;
		BisectBatchOnFunctionError?: boolean;
		MaximumRetryAttempts?: number;
	}


	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface FunctionCode {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
	}


	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
	export interface VpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}


	/** A function's environment variable settings. */
	export interface Environment {
		Variables?: EnvironmentVariables;
	}


	/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
	export interface TracingConfig {
		Mode?: TracingConfigResponseMode;
	}

	export interface CreateFunctionRequest {
		FunctionName: string;
		Runtime: CreateFunctionRequestRuntime;
		Role: string;
		Handler: string;

		/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
		Code: FunctionCode;
		Description?: string;
		Timeout?: number;
		MemorySize?: number;
		Publish?: boolean;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: VpcConfig;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: Environment;
		KMSKeyArn?: string;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: TracingConfig;
		Tags?: Tags;
		Layers?: Array<string>;
	}

	export enum CreateFunctionRequestRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface DeleteAliasRequest {
	}

	export interface DeleteEventSourceMappingRequest {
	}

	export interface DeleteFunctionConcurrencyRequest {
	}

	export interface DeleteFunctionEventInvokeConfigRequest {
	}

	export interface DeleteFunctionRequest {
	}

	export interface DeleteLayerVersionRequest {
	}

	export interface DeleteProvisionedConcurrencyConfigRequest {
	}

	export enum State { Pending = 0, Active = 1, Inactive = 2, Failed = 3 }

	export enum StateReasonCode { Idle = 0, Creating = 1, Restoring = 2, EniLimitExceeded = 3, InsufficientRolePermissions = 4, InvalidConfiguration = 5, InternalError = 6, SubnetOutOfIPAddresses = 7, InvalidSubnet = 8, InvalidSecurityGroup = 9 }

	export enum LastUpdateStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export enum LastUpdateStatusReasonCode { EniLimitExceeded = 0, InsufficientRolePermissions = 1, InvalidConfiguration = 2, InternalError = 3, SubnetOutOfIPAddresses = 4, InvalidSubnet = 5, InvalidSecurityGroup = 6 }

	export enum FunctionVersion { ALL = 0 }

	export interface GetAccountSettingsRequest {
	}

	export interface GetAliasRequest {
	}

	export interface GetEventSourceMappingRequest {
	}

	export interface GetFunctionConcurrencyRequest {
	}

	export interface GetFunctionConfigurationRequest {
	}

	export interface GetFunctionEventInvokeConfigRequest {
	}

	export interface GetFunctionRequest {
	}

	export interface GetLayerVersionByArnRequest {
	}

	export interface GetLayerVersionPolicyRequest {
	}

	export interface GetLayerVersionRequest {
	}

	export interface GetPolicyRequest {
	}

	export interface GetProvisionedConcurrencyConfigRequest {
	}

	export enum ProvisionedConcurrencyStatusEnum { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export enum InvocationType { Event = 0, RequestResponse = 1, DryRun = 2 }

	export enum LogType { None = 0, Tail = 1 }

	export interface InvocationRequest {
		Payload?: string;
	}

	export interface InvokeAsyncRequest {
		InvokeArgs: string;
	}


	/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
	export interface LayerVersionContentInput {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}

	export interface ListAliasesRequest {
	}

	export interface ListEventSourceMappingsRequest {
	}

	export interface ListFunctionEventInvokeConfigsRequest {
	}

	export interface ListFunctionsRequest {
	}

	export interface ListLayerVersionsRequest {
	}

	export interface ListLayersRequest {
	}

	export interface ListProvisionedConcurrencyConfigsRequest {
	}

	export interface ListTagsRequest {
	}

	export interface ListVersionsByFunctionRequest {
	}

	export interface PublishLayerVersionRequest {
		Description?: string;

		/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
		Content: LayerVersionContentInput;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
	}

	export interface PublishVersionRequest {
		CodeSha256?: string;
		Description?: string;
		RevisionId?: string;
	}

	export interface PutFunctionConcurrencyRequest {
		ReservedConcurrentExecutions: number;
	}

	export interface PutFunctionEventInvokeConfigRequest {
		MaximumRetryAttempts?: number;
		MaximumEventAgeInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}

	export interface PutProvisionedConcurrencyConfigRequest {
		ProvisionedConcurrentExecutions: number;
	}

	export interface RemoveLayerVersionPermissionRequest {
	}

	export interface RemovePermissionRequest {
	}

	export interface TagResourceRequest {
		Tags: Tags;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateAliasRequest {
		FunctionVersion?: string;
		Description?: string;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string;
	}

	export interface UpdateEventSourceMappingRequest {
		FunctionName?: string;
		Enabled?: boolean;
		BatchSize?: number;
		MaximumBatchingWindowInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
		MaximumRecordAgeInSeconds?: number;
		BisectBatchOnFunctionError?: boolean;
		MaximumRetryAttempts?: number;
		ParallelizationFactor?: number;
	}

	export interface UpdateFunctionCodeRequest {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		Publish?: boolean;
		DryRun?: boolean;
		RevisionId?: string;
	}

	export interface UpdateFunctionConfigurationRequest {
		Role?: string;
		Handler?: string;
		Description?: string;
		Timeout?: number;
		MemorySize?: number;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: VpcConfig;

		/** A function's environment variable settings. */
		Environment?: Environment;
		Runtime?: UpdateFunctionConfigurationRequestRuntime;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;
		KMSKeyArn?: string;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: TracingConfig;
		RevisionId?: string;
		Layers?: Array<string>;
	}

	export enum UpdateFunctionConfigurationRequestRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface UpdateFunctionEventInvokeConfigRequest {
		MaximumRetryAttempts?: number;
		MaximumEventAgeInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization.</p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
		 * Post 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {number} VersionNumber The version number.
		 * @param {string} RevisionId Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
		 * @return {void} 
		 */
		AddLayerVersionPermission(LayerName: string, VersionNumber: number, RevisionId: string, requestBody: AddLayerVersionPermissionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy&RevisionId=' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
		 * Get 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {number} VersionNumber The version number.
		 * @return {GetLayerVersionPolicyResponse} Success
		 */
		GetLayerVersionPolicy(LayerName: string, VersionNumber: number): Observable<GetLayerVersionPolicyResponse> {
			return this.http.get<GetLayerVersionPolicyResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy', {});
		}

		/**
		 * <p>Grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For AWS services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For AWS services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This action adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
		 * Post 2015-03-31/functions/{FunctionName}/policy
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to add permissions to a published version of the function.
		 * @return {void} 
		 */
		AddPermission(FunctionName: string, Qualifier: string, requestBody: AddPermissionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
		 * Get 2015-03-31/functions/{FunctionName}/policy
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to get the policy for that resource.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(FunctionName: string, Qualifier: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
		 * Post 2015-03-31/functions/{FunctionName}/aliases
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {void} 
		 */
		CreateAlias(FunctionName: string, requestBody: CreateAliasPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a> for a Lambda function.
		 * Get 2015-03-31/functions/{FunctionName}/aliases
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} FunctionVersion Specify a function version to only list aliases that invoke that version.
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Limit the number of aliases returned.
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(FunctionName: string, FunctionVersion: string, Marker: string, MaxItems: number): Observable<ListAliasesResponse> {
			return this.http.get<ListAliasesResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases&FunctionVersion=' + (FunctionVersion == null ? '' : encodeURIComponent(FunctionVersion)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function.</p> <p>For details about each event source type, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">Using AWS Lambda with Amazon DynamoDB</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Using AWS Lambda with Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html">Using AWS Lambda with Amazon SQS</a> </p> </li> </ul> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age.</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
		 * Post 2015-03-31/event-source-mappings/
		 * @return {void} 
		 */
		CreateEventSourceMapping(requestBody: CreateEventSourceMappingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/event-source-mappings/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a single event source.
		 * Get 2015-03-31/event-source-mappings/
		 * @param {string} EventSourceArn <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p> </li> </ul>
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of event source mappings to return.
		 * @return {ListEventSourceMappingsResponse} Success
		 */
		ListEventSourceMappings(EventSourceArn: string, FunctionName: string, Marker: string, MaxItems: number): Observable<ListEventSourceMappingsResponse> {
			return this.http.get<ListEventSourceMappingsResponse>(this.baseUri + '2015-03-31/event-source-mappings/?EventSourceArn=' + (EventSourceArn == null ? '' : encodeURIComponent(EventSourceArn)) + '&FunctionName=' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/deployment-package-v2.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>If another account or an AWS service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other AWS services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Functions</a>.</p>
		 * Post 2015-03-31/functions
		 * @return {void} 
		 */
		CreateFunction(requestBody: CreateFunctionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
		 * Delete 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Name The name of the alias.
		 * @return {void} 
		 */
		DeleteAlias(FunctionName: string, Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
		 * Get 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Name The name of the alias.
		 * @return {AliasConfiguration} Success
		 */
		GetAlias(FunctionName: string, Name: string): Observable<AliasConfiguration> {
			return this.http.get<AliasConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
		 * Put 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Name The name of the alias.
		 * @return {AliasConfiguration} Success
		 */
		UpdateAlias(FunctionName: string, Name: string, requestBody: UpdateAliasPutBody): Observable<AliasConfiguration> {
			return this.http.put<AliasConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
		 * Delete 2015-03-31/event-source-mappings/{UUID}
		 * @param {string} UUID The identifier of the event source mapping.
		 * @return {void} 
		 */
		DeleteEventSourceMapping(UUID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.
		 * Get 2015-03-31/event-source-mappings/{UUID}
		 * @param {string} UUID The identifier of the event source mapping.
		 * @return {EventSourceMappingConfiguration} Success
		 */
		GetEventSourceMapping(UUID: string): Observable<EventSourceMappingConfiguration> {
			return this.http.get<EventSourceMappingConfiguration>(this.baseUri + '2015-03-31/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), {});
		}

		/**
		 * <p>Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.</p> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age.</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
		 * Put 2015-03-31/event-source-mappings/{UUID}
		 * @param {string} UUID The identifier of the event source mapping.
		 * @return {void} 
		 */
		UpdateEventSourceMapping(UUID: string, requestBody: UpdateEventSourceMappingPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-03-31/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For AWS services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
		 * Delete 2015-03-31/functions/{FunctionName}
		 * @param {string} FunctionName <p>The name of the Lambda function or version.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version to delete. You can't delete a version that's referenced by an alias.
		 * @return {void} 
		 */
		DeleteFunction(FunctionName: string, Qualifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
		 * Get 2015-03-31/functions/{FunctionName}
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to get details about a published version of the function.
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(FunctionName: string, Qualifier: string): Observable<GetFunctionResponse> {
			return this.http.get<GetFunctionResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Removes a concurrent execution limit from a function.
		 * Delete 2017-10-31/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {void} 
		 */
		DeleteFunctionConcurrency(FunctionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
		 * Put 2017-10-31/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {Concurrency} Success
		 */
		PutFunctionConcurrency(FunctionName: string, requestBody: PutFunctionConcurrencyPutBody): Observable<Concurrency> {
			return this.http.put<Concurrency>(this.baseUri + '2017-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Delete 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {void} 
		 */
		DeleteFunctionEventInvokeConfig(FunctionName: string, Qualifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Get 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		GetFunctionEventInvokeConfig(FunctionName: string, Qualifier: string): Observable<FunctionEventInvokeConfig> {
			return this.http.get<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>PutFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
		 * Put 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		PutFunctionEventInvokeConfig(FunctionName: string, Qualifier: string, requestBody: PutFunctionEventInvokeConfigPutBody): Observable<FunctionEventInvokeConfig> {
			return this.http.put<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Post 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		UpdateFunctionEventInvokeConfig(FunctionName: string, Qualifier: string, requestBody: UpdateFunctionEventInvokeConfigPostBody): Observable<FunctionEventInvokeConfig> {
			return this.http.post<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
		 * Delete 2018-10-31/layers/{LayerName}/versions/{VersionNumber}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {number} VersionNumber The version number.
		 * @return {void} 
		 */
		DeleteLayerVersion(LayerName: string, VersionNumber: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
		 * Get 2018-10-31/layers/{LayerName}/versions/{VersionNumber}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {number} VersionNumber The version number.
		 * @return {GetLayerVersionResponse} Success
		 */
		GetLayerVersion(LayerName: string, VersionNumber: number): Observable<GetLayerVersionResponse> {
			return this.http.get<GetLayerVersionResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber, {});
		}

		/**
		 * Deletes the provisioned concurrency configuration for a function.
		 * Delete 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier The version number or alias name.
		 * @return {void} 
		 */
		DeleteProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the provisioned concurrency configuration for a function's alias or version.
		 * Get 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier The version number or alias name.
		 * @return {GetProvisionedConcurrencyConfigResponse} Success
		 */
		GetProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string): Observable<GetProvisionedConcurrencyConfigResponse> {
			return this.http.get<GetProvisionedConcurrencyConfigResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Adds a provisioned concurrency configuration to a function's alias or version.
		 * Put 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier The version number or alias name.
		 * @return {void} 
		 */
		PutProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string, requestBody: PutProvisionedConcurrencyConfigPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an AWS Region.
		 * Get 2016-08-19/account-settings/
		 * @return {GetAccountSettingsResponse} Success
		 */
		GetAccountSettings(): Observable<GetAccountSettingsResponse> {
			return this.http.get<GetAccountSettingsResponse>(this.baseUri + '2016-08-19/account-settings/', {});
		}

		/**
		 * Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
		 * Get 2019-09-30/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {GetFunctionConcurrencyResponse} Success
		 */
		GetFunctionConcurrency(FunctionName: string): Observable<GetFunctionConcurrencyResponse> {
			return this.http.get<GetFunctionConcurrencyResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', {});
		}

		/**
		 * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
		 * Get 2015-03-31/functions/{FunctionName}/configuration
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to get details about a published version of the function.
		 * @return {FunctionConfiguration} Success
		 */
		GetFunctionConfiguration(FunctionName: string, Qualifier: string): Observable<FunctionConfiguration> {
			return this.http.get<FunctionConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an account or AWS service, use <a>AddPermission</a>.</p>
		 * Put 2015-03-31/functions/{FunctionName}/configuration
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {FunctionConfiguration} Success
		 */
		UpdateFunctionConfiguration(FunctionName: string, requestBody: UpdateFunctionConfigurationPutBody): Observable<FunctionConfiguration> {
			return this.http.put<FunctionConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
		 * Get 2018-10-31/layers#find=LayerVersion&Arn
		 * @param {string} Arn The ARN of the layer version.
		 * @return {GetLayerVersionResponse} Success
		 */
		GetLayerVersionByArn(Arn: string, find: GetLayerVersionByArnFind): Observable<GetLayerVersionResponse> {
			return this.http.get<GetLayerVersionResponse>(this.baseUri + '2018-10-31/layers#find=LayerVersion&Arn?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&find=' + find, {});
		}

		/**
		 * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action.</p>
		 * Post 2015-03-31/functions/{FunctionName}/invocations
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to invoke a published version of the function.
		 * @return {InvocationResponse} Success
		 */
		Invoke(FunctionName: string, Qualifier: string, requestBody: InvokePostBody): Observable<InvocationResponse> {
			return this.http.post<InvocationResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/invocations&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>
		 * Post 2014-11-13/functions/{FunctionName}/invoke-async/
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {void} 
		 */
		InvokeAsync(FunctionName: string, requestBody: InvokeAsyncPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/invoke-async/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Get 2019-09-25/functions/{FunctionName}/event-invoke-config/list
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of configurations to return.
		 * @return {ListFunctionEventInvokeConfigsResponse} Success
		 */
		ListFunctionEventInvokeConfigs(FunctionName: string, Marker: string, MaxItems: number): Observable<ListFunctionEventInvokeConfigsResponse> {
			return this.http.get<ListFunctionEventInvokeConfigsResponse>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config/list&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version. To get more information about a function or version, use <a>GetFunction</a>.</p>
		 * Get 2015-03-31/functions/
		 * @param {string} MasterRegion For Lambda@Edge functions, the AWS Region of the master function. For example, <code>us-east-1</code> filters the list of functions to only include Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.
		 * @param {FunctionVersion} FunctionVersion Set to <code>ALL</code> to include entries for all published versions of each function.
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of functions to return.
		 * @return {ListFunctionsResponse} Success
		 */
		ListFunctions(MasterRegion: string, FunctionVersion: FunctionVersion, Marker: string, MaxItems: number): Observable<ListFunctionsResponse> {
			return this.http.get<ListFunctionsResponse>(this.baseUri + '2015-03-31/functions/?MasterRegion=' + (MasterRegion == null ? '' : encodeURIComponent(MasterRegion)) + '&FunctionVersion=' + FunctionVersion + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime.
		 * Get 2018-10-31/layers/{LayerName}/versions
		 * @param {ListLayerVersionsCompatibleRuntime} CompatibleRuntime A runtime identifier. For example, <code>go1.x</code>.
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of versions to return.
		 * @return {ListLayerVersionsResponse} Success
		 */
		ListLayerVersions(CompatibleRuntime: ListLayerVersionsCompatibleRuntime, LayerName: string, Marker: string, MaxItems: number): Observable<ListLayerVersionsResponse> {
			return this.http.get<ListLayerVersionsResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions?CompatibleRuntime=' + CompatibleRuntime + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
		 * Post 2018-10-31/layers/{LayerName}/versions
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @return {void} 
		 */
		PublishLayerVersion(LayerName: string, requestBody: PublishLayerVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime.
		 * Get 2018-10-31/layers
		 * @param {ListLayersCompatibleRuntime} CompatibleRuntime A runtime identifier. For example, <code>go1.x</code>.
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of layers to return.
		 * @return {ListLayersResponse} Success
		 */
		ListLayers(CompatibleRuntime: ListLayersCompatibleRuntime, Marker: string, MaxItems: number): Observable<ListLayersResponse> {
			return this.http.get<ListLayersResponse>(this.baseUri + '2018-10-31/layers?CompatibleRuntime=' + CompatibleRuntime + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * Retrieves a list of provisioned concurrency configurations for a function.
		 * Get 2019-09-30/functions/{FunctionName}/provisioned-concurrency#List=ALL
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Specify a number to limit the number of configurations returned.
		 * @return {ListProvisionedConcurrencyConfigsResponse} Success
		 */
		ListProvisionedConcurrencyConfigs(FunctionName: string, Marker: string, MaxItems: number, List: FunctionVersion): Observable<ListProvisionedConcurrencyConfigsResponse> {
			return this.http.get<ListProvisionedConcurrencyConfigsResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#List=ALL&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&List=' + List, {});
		}

		/**
		 * Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
		 * Get 2017-03-31/tags/{ARN}
		 * @param {string} ARN The function's Amazon Resource Name (ARN).
		 * @return {ListTagsResponse} Success
		 */
		ListTags(ARN: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + '2017-03-31/tags/' + (ARN == null ? '' : encodeURIComponent(ARN)), {});
		}

		/**
		 * Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.
		 * Post 2017-03-31/tags/{ARN}
		 * @param {string} ARN The function's Amazon Resource Name (ARN).
		 * @return {void} 
		 */
		TagResource(ARN: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-03-31/tags/' + (ARN == null ? '' : encodeURIComponent(ARN)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.
		 * Get 2015-03-31/functions/{FunctionName}/versions
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of versions to return.
		 * @return {ListVersionsByFunctionResponse} Success
		 */
		ListVersionsByFunction(FunctionName: string, Marker: string, MaxItems: number): Observable<ListVersionsByFunctionResponse> {
			return this.http.get<ListVersionsByFunctionResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/versions&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
		 * Post 2015-03-31/functions/{FunctionName}/versions
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {void} 
		 */
		PublishVersion(FunctionName: string, requestBody: PublishVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
		 * Delete 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 * @param {number} VersionNumber The version number.
		 * @param {string} StatementId The identifier that was specified when the statement was added.
		 * @param {string} RevisionId Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
		 * @return {void} 
		 */
		RemoveLayerVersionPermission(LayerName: string, VersionNumber: number, StatementId: string, RevisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy/' + (StatementId == null ? '' : encodeURIComponent(StatementId)) + '&RevisionId=' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes function-use permission from an AWS service or another account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
		 * Delete 2015-03-31/functions/{FunctionName}/policy/{StatementId}
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} StatementId Statement ID of the permission to remove.
		 * @param {string} Qualifier Specify a version or alias to remove permissions from a published version of the function.
		 * @param {string} RevisionId Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
		 * @return {void} 
		 */
		RemovePermission(FunctionName: string, StatementId: string, Qualifier: string, RevisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy/' + (StatementId == null ? '' : encodeURIComponent(StatementId)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)) + '&RevisionId=' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.
		 * Delete 2017-03-31/tags/{ARN}#tagKeys
		 * @param {string} ARN The function's Amazon Resource Name (ARN).
		 * @param {Array<string>} tagKeys A list of tag keys to remove from the function.
		 * @return {void} 
		 */
		UntagResource(ARN: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-03-31/tags/' + (ARN == null ? '' : encodeURIComponent(ARN)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a Lambda function's code.</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p>
		 * Put 2015-03-31/functions/{FunctionName}/code
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @return {FunctionConfiguration} Success
		 */
		UpdateFunctionCode(FunctionName: string, requestBody: UpdateFunctionCodePutBody): Observable<FunctionConfiguration> {
			return this.http.put<FunctionConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/code', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddLayerVersionPermissionPostBody {

		/**
		 * An identifier that distinguishes the policy from others on the same layer version.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ([a-zA-Z0-9-_]+)
		 */
		StatementId: string;

		/**
		 * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
		 * Pattern: lambda:GetLayerVersion
		 */
		Action: string;

		/**
		 * An account ID, or <code>*</code> to grant permission to all AWS accounts.
		 * Pattern: \d{12}|\*|arn:(aws[a-zA-Z-]*):iam::\d{12}:root
		 */
		Principal: string;

		/**
		 * With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.
		 * Pattern: o-[a-z0-9]{10,32}
		 */
		OrganizationId?: string;
	}

	export interface AddPermissionPostBody {

		/**
		 * A statement identifier that differentiates the statement from others in the same policy.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ([a-zA-Z0-9-_]+)
		 */
		StatementId: string;

		/**
		 * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
		 * Pattern: (lambda:[*]|lambda:[a-zA-Z]+|[*])
		 */
		Action: string;

		/**
		 * The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
		 * Pattern: .*
		 */
		Principal: string;

		/**
		 * For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
		 * Pattern: arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)
		 */
		SourceArn?: string;

		/**
		 * For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
		 * Pattern: \d{12}
		 */
		SourceAccount?: string;

		/**
		 * For Alexa Smart Home functions, a token that must be supplied by the invoker.
		 * Max length: 256
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9._\-]+
		 */
		EventSourceToken?: string;

		/** Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it. */
		RevisionId?: string;
	}

	export interface CreateAliasPostBody {

		/**
		 * The name of the alias.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_]+)
		 */
		Name: string;

		/**
		 * The function version that the alias invokes.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: (\$LATEST|[0-9]+)
		 */
		FunctionVersion: string;

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: CreateAliasPostBodyRoutingConfig;
	}

	export interface CreateAliasPostBodyRoutingConfig {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}

	export interface CreateEventSourceMappingPostBody {

		/**
		 * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p> </li> </ul>
		 * Pattern: arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)
		 */
		EventSourceArn: string;

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Max length: 140
		 * Min length: 1
		 * Pattern: (arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?
		 */
		FunctionName: string;

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled?: boolean;

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number;

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number;

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number;

		/** The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams. */
		StartingPosition?: EventSourcePosition;

		/** With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. */
		StartingPositionTimestamp?: Date;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: CreateEventSourceMappingPostBodyDestinationConfig;

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number;

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean;

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number;
	}

	export interface CreateEventSourceMappingPostBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}

	export interface CreateFunctionPostBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * Max length: 140
		 * Min length: 1
		 * Pattern: (arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?
		 */
		FunctionName: string;

		/** The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. */
		Runtime: CreateFunctionPostBodyRuntime;

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Pattern: arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		Role: string;

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Max length: 128
		 * Pattern: [^\s]+
		 */
		Handler: string;

		/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
		Code: CreateFunctionPostBodyCode;

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout?: number;

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number;

		/** Set to true to publish the first version of the function during creation. */
		Publish?: boolean;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: CreateFunctionPostBodyVpcConfig;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: CreateFunctionPostBodyDeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: CreateFunctionPostBodyEnvironment;

		/**
		 * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
		 * Pattern: (arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()
		 */
		KMSKeyArn?: string;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: CreateFunctionPostBodyTracingConfig;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function. */
		Tags?: {[id: string]: string };

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;
	}

	export enum CreateFunctionPostBodyRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface CreateFunctionPostBodyCode {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
	}

	export interface CreateFunctionPostBodyVpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	export interface CreateFunctionPostBodyDeadLetterConfig {
		TargetArn?: string;
	}

	export interface CreateFunctionPostBodyEnvironment {
		Variables?: EnvironmentVariables;
	}

	export interface CreateFunctionPostBodyTracingConfig {
		Mode?: TracingConfigResponseMode;
	}

	export interface UpdateAliasPutBody {

		/**
		 * The function version that the alias invokes.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: (\$LATEST|[0-9]+)
		 */
		FunctionVersion?: string;

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: UpdateAliasPutBodyRoutingConfig;

		/** Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it. */
		RevisionId?: string;
	}

	export interface UpdateAliasPutBodyRoutingConfig {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}

	export interface UpdateEventSourceMappingPutBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Max length: 140
		 * Min length: 1
		 * Pattern: (arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?
		 */
		FunctionName?: string;

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled?: boolean;

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number;

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: UpdateEventSourceMappingPutBodyDestinationConfig;

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number;

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean;

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number;

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number;
	}

	export interface UpdateEventSourceMappingPutBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}

	export interface PutFunctionConcurrencyPutBody {

		/**
		 * The number of simultaneous executions to reserve for the function.
		 * Minimum: 0
		 */
		ReservedConcurrentExecutions: number;
	}

	export interface PutFunctionEventInvokeConfigPutBody {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number;

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: PutFunctionEventInvokeConfigPutBodyDestinationConfig;
	}

	export interface PutFunctionEventInvokeConfigPutBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}

	export interface UpdateFunctionEventInvokeConfigPostBody {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number;

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: UpdateFunctionEventInvokeConfigPostBodyDestinationConfig;
	}

	export interface UpdateFunctionEventInvokeConfigPostBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}

	export interface PutProvisionedConcurrencyConfigPutBody {

		/**
		 * The amount of provisioned concurrency to allocate for the version or alias.
		 * Minimum: 1
		 */
		ProvisionedConcurrentExecutions: number;
	}

	export interface UpdateFunctionConfigurationPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Pattern: arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		Role?: string;

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Max length: 128
		 * Pattern: [^\s]+
		 */
		Handler?: string;

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout?: number;

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: UpdateFunctionConfigurationPutBodyVpcConfig;

		/** A function's environment variable settings. */
		Environment?: UpdateFunctionConfigurationPutBodyEnvironment;

		/** The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. */
		Runtime?: UpdateFunctionConfigurationPutBodyRuntime;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: UpdateFunctionConfigurationPutBodyDeadLetterConfig;

		/**
		 * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
		 * Pattern: (arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()
		 */
		KMSKeyArn?: string;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: UpdateFunctionConfigurationPutBodyTracingConfig;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;
	}

	export interface UpdateFunctionConfigurationPutBodyVpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	export interface UpdateFunctionConfigurationPutBodyEnvironment {
		Variables?: EnvironmentVariables;
	}

	export enum UpdateFunctionConfigurationPutBodyRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface UpdateFunctionConfigurationPutBodyDeadLetterConfig {
		TargetArn?: string;
	}

	export interface UpdateFunctionConfigurationPutBodyTracingConfig {
		Mode?: TracingConfigResponseMode;
	}

	export enum GetLayerVersionByArnFind { LayerVersion = 0 }

	export interface InvokePostBody {

		/** The JSON that you want to provide to your Lambda function as input. */
		Payload?: string;
	}

	export interface InvokeAsyncPostBody {

		/** The JSON that you want to provide to your Lambda function as input. */
		InvokeArgs: string;
	}

	export enum ListLayerVersionsCompatibleRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface PublishLayerVersionPostBody {

		/**
		 * The description of the version.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
		Content: PublishLayerVersionPostBodyContent;

		/**
		 * A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.
		 * Maximum items: 5
		 */
		CompatibleRuntimes?: Array<Runtime>;

		/**
		 * <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>
		 * Max length: 512
		 */
		LicenseInfo?: string;
	}

	export interface PublishLayerVersionPostBodyContent {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}

	export enum ListLayersCompatibleRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface TagResourcePostBody {

		/** A list of tags to apply to the function. */
		Tags: {[id: string]: string };
	}

	export interface PublishVersionPostBody {

		/** Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>. */
		CodeSha256?: string;

		/**
		 * A description for the version to override the description in the function configuration.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it. */
		RevisionId?: string;
	}

	export interface UpdateFunctionCodePutBody {

		/** The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you. */
		ZipFile?: string;

		/**
		 * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
		 * Max length: 63
		 * Min length: 3
		 * Pattern: ^[0-9A-Za-z\.\-_]*(?<!\.)$
		 */
		S3Bucket?: string;

		/**
		 * The Amazon S3 key of the deployment package.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string;

		/**
		 * For versioned objects, the version of the deployment package object to use.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string;

		/** Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately. */
		Publish?: boolean;

		/** Set to true to validate the request parameters and access permissions without modifying the function code. */
		DryRun?: boolean;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string;
	}

}

