import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddLayerVersionPermissionResponse {
		Statement?: string | null;
		RevisionId?: string | null;
	}
	export interface AddLayerVersionPermissionResponseFormProperties {
		Statement: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateAddLayerVersionPermissionResponseFormGroup() {
		return new FormGroup<AddLayerVersionPermissionResponseFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
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

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface PolicyLengthExceededException {
	}
	export interface PolicyLengthExceededExceptionFormProperties {
	}
	export function CreatePolicyLengthExceededExceptionFormGroup() {
		return new FormGroup<PolicyLengthExceededExceptionFormProperties>({
		});

	}

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface AddPermissionResponse {
		Statement?: string | null;
	}
	export interface AddPermissionResponseFormProperties {
		Statement: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionResponseFormGroup() {
		return new FormGroup<AddPermissionResponseFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>. */
	export interface AliasConfiguration {
		AliasArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string | null;
	}

	/** Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>. */
	export interface AliasConfigurationFormProperties {
		AliasArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateAliasConfigurationFormGroup() {
		return new FormGroup<AliasConfigurationFormProperties>({
			AliasArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('(?!^[0-9]+$)([a-zA-Z0-9-_]+)')]),
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
	export interface AliasRoutingConfiguration {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}

	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
	export interface AliasRoutingConfigurationFormProperties {
	}
	export function CreateAliasRoutingConfigurationFormGroup() {
		return new FormGroup<AliasRoutingConfigurationFormProperties>({
		});

	}

	export interface AdditionalVersionWeights {
	}
	export interface AdditionalVersionWeightsFormProperties {
	}
	export function CreateAdditionalVersionWeightsFormGroup() {
		return new FormGroup<AdditionalVersionWeightsFormProperties>({
		});

	}


	/** A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details. */
	export interface EventSourceMappingConfiguration {
		UUID?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;
		EventSourceArn?: string | null;
		FunctionArn?: string | null;
		LastModified?: Date | null;
		LastProcessingResult?: string | null;
		State?: string | null;
		StateTransitionReason?: string | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;
	}

	/** A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details. */
	export interface EventSourceMappingConfigurationFormProperties {
		UUID: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LastProcessingResult: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		StateTransitionReason: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateEventSourceMappingConfigurationFormGroup() {
		return new FormGroup<EventSourceMappingConfigurationFormProperties>({
			UUID: new FormControl<string | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LastProcessingResult: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			StateTransitionReason: new FormControl<string | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
		});

	}


	/** A configuration object that specifies the destination of an event after Lambda processes it. */
	export interface DestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}

	/** A configuration object that specifies the destination of an event after Lambda processes it. */
	export interface DestinationConfigFormProperties {
	}
	export function CreateDestinationConfigFormGroup() {
		return new FormGroup<DestinationConfigFormProperties>({
		});

	}


	/** A destination for events that were processed successfully. */
	export interface OnSuccess {

		/**
		 * Max length: 350
		 * Min length: 0
		 */
		Destination?: string | null;
	}

	/** A destination for events that were processed successfully. */
	export interface OnSuccessFormProperties {

		/**
		 * Max length: 350
		 * Min length: 0
		 */
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateOnSuccessFormGroup() {
		return new FormGroup<OnSuccessFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(350), Validators.minLength(0), Validators.pattern('^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)')]),
		});

	}


	/** A destination for events that failed processing. */
	export interface OnFailure {

		/**
		 * Max length: 350
		 * Min length: 0
		 */
		Destination?: string | null;
	}

	/** A destination for events that failed processing. */
	export interface OnFailureFormProperties {

		/**
		 * Max length: 350
		 * Min length: 0
		 */
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateOnFailureFormGroup() {
		return new FormGroup<OnFailureFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(350), Validators.minLength(0), Validators.pattern('^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)')]),
		});

	}


	/** Details about a function's configuration. */
	export interface FunctionConfiguration {

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		FunctionName?: string | null;
		FunctionArn?: string | null;
		Runtime?: FunctionConfigurationRuntime | null;
		Role?: string | null;

		/** Max length: 128 */
		Handler?: string | null;
		CodeSize?: number | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Minimum: 1 */
		Timeout?: number | null;

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number | null;
		LastModified?: string | null;
		CodeSha256?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Version?: string | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. */
		VpcConfig?: VpcConfigResponse;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;

		/** The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error. */
		Environment?: EnvironmentResponse;
		KMSKeyArn?: string | null;

		/** The function's AWS X-Ray tracing configuration. */
		TracingConfig?: TracingConfigResponse;
		MasterArn?: string | null;
		RevisionId?: string | null;
		Layers?: Array<Layer>;
		State?: FunctionConfigurationState | null;
		StateReason?: string | null;
		StateReasonCode?: FunctionConfigurationStateReasonCode | null;
		LastUpdateStatus?: FunctionConfigurationLastUpdateStatus | null;
		LastUpdateStatusReason?: string | null;
		LastUpdateStatusReasonCode?: FunctionConfigurationLastUpdateStatusReasonCode | null;
	}

	/** Details about a function's configuration. */
	export interface FunctionConfigurationFormProperties {

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		Runtime: FormControl<FunctionConfigurationRuntime | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/** Max length: 128 */
		Handler: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize: FormControl<number | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		CodeSha256: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
		MasterArn: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		State: FormControl<FunctionConfigurationState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<FunctionConfigurationStateReasonCode | null | undefined>,
		LastUpdateStatus: FormControl<FunctionConfigurationLastUpdateStatus | null | undefined>,
		LastUpdateStatusReason: FormControl<string | null | undefined>,
		LastUpdateStatusReasonCode: FormControl<FunctionConfigurationLastUpdateStatusReasonCode | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_\.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<FunctionConfigurationRuntime | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(3008)]),
			LastModified: new FormControl<string | null | undefined>(undefined),
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			MasterArn: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<FunctionConfigurationState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<FunctionConfigurationStateReasonCode | null | undefined>(undefined),
			LastUpdateStatus: new FormControl<FunctionConfigurationLastUpdateStatus | null | undefined>(undefined),
			LastUpdateStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateStatusReasonCode: new FormControl<FunctionConfigurationLastUpdateStatusReasonCode | null | undefined>(undefined),
		});

	}

	export enum FunctionConfigurationRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }


	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface VpcConfigResponse {

		/** Maximum items: 16 */
		SubnetIds?: Array<string>;

		/** Maximum items: 5 */
		SecurityGroupIds?: Array<string>;
		VpcId?: string | null;
	}

	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface VpcConfigResponseFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigResponseFormGroup() {
		return new FormGroup<VpcConfigResponseFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
	export interface DeadLetterConfig {
		TargetArn?: string | null;
	}

	/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
	export interface DeadLetterConfigFormProperties {
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeadLetterConfigFormGroup() {
		return new FormGroup<DeadLetterConfigFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error. */
	export interface EnvironmentResponse {
		Variables?: EnvironmentVariables;

		/** Error messages for environment variables that couldn't be applied. */
		Error?: EnvironmentError;
	}

	/** The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error. */
	export interface EnvironmentResponseFormProperties {
	}
	export function CreateEnvironmentResponseFormGroup() {
		return new FormGroup<EnvironmentResponseFormProperties>({
		});

	}

	export interface EnvironmentVariables {
	}
	export interface EnvironmentVariablesFormProperties {
	}
	export function CreateEnvironmentVariablesFormGroup() {
		return new FormGroup<EnvironmentVariablesFormProperties>({
		});

	}


	/** Error messages for environment variables that couldn't be applied. */
	export interface EnvironmentError {
		ErrorCode?: string | null;
		Message?: string | null;
	}

	/** Error messages for environment variables that couldn't be applied. */
	export interface EnvironmentErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentErrorFormGroup() {
		return new FormGroup<EnvironmentErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The function's AWS X-Ray tracing configuration. */
	export interface TracingConfigResponse {
		Mode?: TracingConfigResponseMode | null;
	}

	/** The function's AWS X-Ray tracing configuration. */
	export interface TracingConfigResponseFormProperties {
		Mode: FormControl<TracingConfigResponseMode | null | undefined>,
	}
	export function CreateTracingConfigResponseFormGroup() {
		return new FormGroup<TracingConfigResponseFormProperties>({
			Mode: new FormControl<TracingConfigResponseMode | null | undefined>(undefined),
		});

	}

	export enum TracingConfigResponseMode { Active = 0, PassThrough = 1 }


	/** An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface Layer {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		Arn?: string | null;
		CodeSize?: number | null;
	}

	/** An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+')]),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FunctionConfigurationState { Pending = 0, Active = 1, Inactive = 2, Failed = 3 }

	export enum FunctionConfigurationStateReasonCode { Idle = 0, Creating = 1, Restoring = 2, EniLimitExceeded = 3, InsufficientRolePermissions = 4, InvalidConfiguration = 5, InternalError = 6, SubnetOutOfIPAddresses = 7, InvalidSubnet = 8, InvalidSecurityGroup = 9 }

	export enum FunctionConfigurationLastUpdateStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export enum FunctionConfigurationLastUpdateStatusReasonCode { EniLimitExceeded = 0, InsufficientRolePermissions = 1, InvalidConfiguration = 2, InternalError = 3, SubnetOutOfIPAddresses = 4, InvalidSubnet = 5, InvalidSecurityGroup = 6 }

	export enum TracingMode { Active = 0, PassThrough = 1 }

	export interface CodeStorageExceededException {
	}
	export interface CodeStorageExceededExceptionFormProperties {
	}
	export function CreateCodeStorageExceededExceptionFormGroup() {
		return new FormGroup<CodeStorageExceededExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface GetAccountSettingsResponse {

		/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
		AccountLimit?: AccountLimit;

		/** The number of functions and amount of storage in use. */
		AccountUsage?: AccountUsage;
	}
	export interface GetAccountSettingsResponseFormProperties {
	}
	export function CreateGetAccountSettingsResponseFormGroup() {
		return new FormGroup<GetAccountSettingsResponseFormProperties>({
		});

	}


	/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
	export interface AccountLimit {
		TotalCodeSize?: number | null;
		CodeSizeUnzipped?: number | null;
		CodeSizeZipped?: number | null;
		ConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		UnreservedConcurrentExecutions?: number | null;
	}

	/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
	export interface AccountLimitFormProperties {
		TotalCodeSize: FormControl<number | null | undefined>,
		CodeSizeUnzipped: FormControl<number | null | undefined>,
		CodeSizeZipped: FormControl<number | null | undefined>,
		ConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		UnreservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateAccountLimitFormGroup() {
		return new FormGroup<AccountLimitFormProperties>({
			TotalCodeSize: new FormControl<number | null | undefined>(undefined),
			CodeSizeUnzipped: new FormControl<number | null | undefined>(undefined),
			CodeSizeZipped: new FormControl<number | null | undefined>(undefined),
			ConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			UnreservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** The number of functions and amount of storage in use. */
	export interface AccountUsage {
		TotalCodeSize?: number | null;
		FunctionCount?: number | null;
	}

	/** The number of functions and amount of storage in use. */
	export interface AccountUsageFormProperties {
		TotalCodeSize: FormControl<number | null | undefined>,
		FunctionCount: FormControl<number | null | undefined>,
	}
	export function CreateAccountUsageFormGroup() {
		return new FormGroup<AccountUsageFormProperties>({
			TotalCodeSize: new FormControl<number | null | undefined>(undefined),
			FunctionCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFunctionResponse {

		/** Details about a function's configuration. */
		Configuration?: FunctionConfiguration;

		/** Details about a function's deployment package. */
		Code?: FunctionCodeLocation;
		Tags?: Tags;
		Concurrency?: Concurrency;
	}
	export interface GetFunctionResponseFormProperties {
	}
	export function CreateGetFunctionResponseFormGroup() {
		return new FormGroup<GetFunctionResponseFormProperties>({
		});

	}


	/** Details about a function's deployment package. */
	export interface FunctionCodeLocation {
		RepositoryType?: string | null;
		Location?: string | null;
	}

	/** Details about a function's deployment package. */
	export interface FunctionCodeLocationFormProperties {
		RepositoryType: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateFunctionCodeLocationFormGroup() {
		return new FormGroup<FunctionCodeLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface Concurrency {

		/** Minimum: 0 */
		ReservedConcurrentExecutions?: number | null;
	}
	export interface ConcurrencyFormProperties {

		/** Minimum: 0 */
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateConcurrencyFormGroup() {
		return new FormGroup<ConcurrencyFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface GetFunctionConcurrencyResponse {

		/** Minimum: 0 */
		ReservedConcurrentExecutions?: number | null;
	}
	export interface GetFunctionConcurrencyResponseFormProperties {

		/** Minimum: 0 */
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateGetFunctionConcurrencyResponseFormGroup() {
		return new FormGroup<GetFunctionConcurrencyResponseFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface FunctionEventInvokeConfig {
		LastModified?: Date | null;
		FunctionArn?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}
	export interface FunctionEventInvokeConfigFormProperties {
		LastModified: FormControl<Date | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateFunctionEventInvokeConfigFormGroup() {
		return new FormGroup<FunctionEventInvokeConfigFormProperties>({
			LastModified: new FormControl<Date | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(21600)]),
		});

	}

	export interface GetLayerVersionResponse {

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		Content?: LayerVersionContentOutput;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
		CreatedDate?: string | null;
		Version?: number | null;

		/** Maximum items: 5 */
		CompatibleRuntimes?: Array<Runtime>;

		/** Max length: 512 */
		LicenseInfo?: string | null;
	}
	export interface GetLayerVersionResponseFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/** Max length: 512 */
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreateGetLayerVersionResponseFormGroup() {
		return new FormGroup<GetLayerVersionResponseFormProperties>({
			LayerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+')]),
			LayerVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionContentOutput {
		Location?: string | null;
		CodeSha256?: string | null;
		CodeSize?: number | null;
	}

	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionContentOutputFormProperties {
		Location: FormControl<string | null | undefined>,
		CodeSha256: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateLayerVersionContentOutputFormGroup() {
		return new FormGroup<LayerVersionContentOutputFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined),
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Runtime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface GetLayerVersionPolicyResponse {
		Policy?: string | null;
		RevisionId?: string | null;
	}
	export interface GetLayerVersionPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetLayerVersionPolicyResponseFormGroup() {
		return new FormGroup<GetLayerVersionPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPolicyResponse {
		Policy?: string | null;
		RevisionId?: string | null;
	}
	export interface GetPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetProvisionedConcurrencyConfigResponse {

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: GetProvisionedConcurrencyConfigResponseStatus | null;
		StatusReason?: string | null;
		LastModified?: string | null;
	}
	export interface GetProvisionedConcurrencyConfigResponseFormProperties {

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateGetProvisionedConcurrencyConfigResponseFormGroup() {
		return new FormGroup<GetProvisionedConcurrencyConfigResponseFormProperties>({
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Status: new FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetProvisionedConcurrencyConfigResponseStatus { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export interface ProvisionedConcurrencyConfigNotFoundException {
	}
	export interface ProvisionedConcurrencyConfigNotFoundExceptionFormProperties {
	}
	export function CreateProvisionedConcurrencyConfigNotFoundExceptionFormGroup() {
		return new FormGroup<ProvisionedConcurrencyConfigNotFoundExceptionFormProperties>({
		});

	}

	export interface InvocationResponse {
		StatusCode?: number | null;
		Payload?: string | null;
	}
	export interface InvocationResponseFormProperties {
		StatusCode: FormControl<number | null | undefined>,
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvocationResponseFormGroup() {
		return new FormGroup<InvocationResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined),
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestContentException {
	}
	export interface InvalidRequestContentExceptionFormProperties {
	}
	export function CreateInvalidRequestContentExceptionFormGroup() {
		return new FormGroup<InvalidRequestContentExceptionFormProperties>({
		});

	}

	export interface RequestTooLargeException {
	}
	export interface RequestTooLargeExceptionFormProperties {
	}
	export function CreateRequestTooLargeExceptionFormGroup() {
		return new FormGroup<RequestTooLargeExceptionFormProperties>({
		});

	}

	export interface UnsupportedMediaTypeException {
	}
	export interface UnsupportedMediaTypeExceptionFormProperties {
	}
	export function CreateUnsupportedMediaTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedMediaTypeExceptionFormProperties>({
		});

	}

	export interface EC2UnexpectedException {
	}
	export interface EC2UnexpectedExceptionFormProperties {
	}
	export function CreateEC2UnexpectedExceptionFormGroup() {
		return new FormGroup<EC2UnexpectedExceptionFormProperties>({
		});

	}

	export interface SubnetIPAddressLimitReachedException {
	}
	export interface SubnetIPAddressLimitReachedExceptionFormProperties {
	}
	export function CreateSubnetIPAddressLimitReachedExceptionFormGroup() {
		return new FormGroup<SubnetIPAddressLimitReachedExceptionFormProperties>({
		});

	}

	export interface ENILimitReachedException {
	}
	export interface ENILimitReachedExceptionFormProperties {
	}
	export function CreateENILimitReachedExceptionFormGroup() {
		return new FormGroup<ENILimitReachedExceptionFormProperties>({
		});

	}

	export interface EC2ThrottledException {
	}
	export interface EC2ThrottledExceptionFormProperties {
	}
	export function CreateEC2ThrottledExceptionFormGroup() {
		return new FormGroup<EC2ThrottledExceptionFormProperties>({
		});

	}

	export interface EC2AccessDeniedException {
	}
	export interface EC2AccessDeniedExceptionFormProperties {
	}
	export function CreateEC2AccessDeniedExceptionFormGroup() {
		return new FormGroup<EC2AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InvalidSubnetIDException {
	}
	export interface InvalidSubnetIDExceptionFormProperties {
	}
	export function CreateInvalidSubnetIDExceptionFormGroup() {
		return new FormGroup<InvalidSubnetIDExceptionFormProperties>({
		});

	}

	export interface InvalidSecurityGroupIDException {
	}
	export interface InvalidSecurityGroupIDExceptionFormProperties {
	}
	export function CreateInvalidSecurityGroupIDExceptionFormGroup() {
		return new FormGroup<InvalidSecurityGroupIDExceptionFormProperties>({
		});

	}

	export interface InvalidZipFileException {
	}
	export interface InvalidZipFileExceptionFormProperties {
	}
	export function CreateInvalidZipFileExceptionFormGroup() {
		return new FormGroup<InvalidZipFileExceptionFormProperties>({
		});

	}

	export interface KMSDisabledException {
	}
	export interface KMSDisabledExceptionFormProperties {
	}
	export function CreateKMSDisabledExceptionFormGroup() {
		return new FormGroup<KMSDisabledExceptionFormProperties>({
		});

	}

	export interface KMSInvalidStateException {
	}
	export interface KMSInvalidStateExceptionFormProperties {
	}
	export function CreateKMSInvalidStateExceptionFormGroup() {
		return new FormGroup<KMSInvalidStateExceptionFormProperties>({
		});

	}

	export interface KMSAccessDeniedException {
	}
	export interface KMSAccessDeniedExceptionFormProperties {
	}
	export function CreateKMSAccessDeniedExceptionFormGroup() {
		return new FormGroup<KMSAccessDeniedExceptionFormProperties>({
		});

	}

	export interface KMSNotFoundException {
	}
	export interface KMSNotFoundExceptionFormProperties {
	}
	export function CreateKMSNotFoundExceptionFormGroup() {
		return new FormGroup<KMSNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidRuntimeException {
	}
	export interface InvalidRuntimeExceptionFormProperties {
	}
	export function CreateInvalidRuntimeExceptionFormGroup() {
		return new FormGroup<InvalidRuntimeExceptionFormProperties>({
		});

	}

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
		});

	}


	/** A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.  */
	export interface InvokeAsyncResponse {
		Status?: number | null;
	}

	/** A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.  */
	export interface InvokeAsyncResponseFormProperties {
		Status: FormControl<number | null | undefined>,
	}
	export function CreateInvokeAsyncResponseFormGroup() {
		return new FormGroup<InvokeAsyncResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAliasesResponse {
		NextMarker?: string | null;
		Aliases?: Array<AliasConfiguration>;
	}
	export interface ListAliasesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesResponseFormGroup() {
		return new FormGroup<ListAliasesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventSourceMappingsResponse {
		NextMarker?: string | null;
		EventSourceMappings?: Array<EventSourceMappingConfiguration>;
	}
	export interface ListEventSourceMappingsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListEventSourceMappingsResponseFormGroup() {
		return new FormGroup<ListEventSourceMappingsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionEventInvokeConfigsResponse {
		FunctionEventInvokeConfigs?: Array<FunctionEventInvokeConfig>;
		NextMarker?: string | null;
	}
	export interface ListFunctionEventInvokeConfigsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionEventInvokeConfigsResponseFormGroup() {
		return new FormGroup<ListFunctionEventInvokeConfigsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Lambda functions. */
	export interface ListFunctionsResponse {
		NextMarker?: string | null;
		Functions?: Array<FunctionConfiguration>;
	}

	/** A list of Lambda functions. */
	export interface ListFunctionsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsResponseFormGroup() {
		return new FormGroup<ListFunctionsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLayerVersionsResponse {
		NextMarker?: string | null;
		LayerVersions?: Array<LayerVersionsListItem>;
	}
	export interface ListLayerVersionsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListLayerVersionsResponseFormGroup() {
		return new FormGroup<ListLayerVersionsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionsListItem {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn?: string | null;
		Version?: number | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
		CreatedDate?: string | null;

		/** Maximum items: 5 */
		CompatibleRuntimes?: Array<Runtime>;

		/** Max length: 512 */
		LicenseInfo?: string | null;
	}

	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayerVersionsListItemFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,

		/** Max length: 512 */
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreateLayerVersionsListItemFormGroup() {
		return new FormGroup<LayerVersionsListItemFormProperties>({
			LayerVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+')]),
			Version: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export interface ListLayersResponse {
		NextMarker?: string | null;
		Layers?: Array<LayersListItem>;
	}
	export interface ListLayersResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListLayersResponseFormGroup() {
		return new FormGroup<ListLayersResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayersListItem {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerName?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn?: string | null;

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		LatestMatchingVersion?: LayerVersionsListItem;
	}

	/** Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
	export interface LayersListItemFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerName: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn: FormControl<string | null | undefined>,
	}
	export function CreateLayersListItemFormGroup() {
		return new FormGroup<LayersListItemFormProperties>({
			LayerName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+')]),
			LayerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+')]),
		});

	}

	export interface ListProvisionedConcurrencyConfigsResponse {
		ProvisionedConcurrencyConfigs?: Array<ProvisionedConcurrencyConfigListItem>;
		NextMarker?: string | null;
	}
	export interface ListProvisionedConcurrencyConfigsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListProvisionedConcurrencyConfigsResponseFormGroup() {
		return new FormGroup<ListProvisionedConcurrencyConfigsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the provisioned concurrency configuration for a function alias or version. */
	export interface ProvisionedConcurrencyConfigListItem {
		FunctionArn?: string | null;

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: GetProvisionedConcurrencyConfigResponseStatus | null;
		StatusReason?: string | null;
		LastModified?: string | null;
	}

	/** Details about the provisioned concurrency configuration for a function alias or version. */
	export interface ProvisionedConcurrencyConfigListItemFormProperties {
		FunctionArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedConcurrencyConfigListItemFormGroup() {
		return new FormGroup<ProvisionedConcurrencyConfigListItemFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Status: new FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsResponse {
		Tags?: Tags;
	}
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}

	export interface ListVersionsByFunctionResponse {
		NextMarker?: string | null;
		Versions?: Array<FunctionConfiguration>;
	}
	export interface ListVersionsByFunctionResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsByFunctionResponseFormGroup() {
		return new FormGroup<ListVersionsByFunctionResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishLayerVersionResponse {

		/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. */
		Content?: LayerVersionContentOutput;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
		CreatedDate?: string | null;
		Version?: number | null;

		/** Maximum items: 5 */
		CompatibleRuntimes?: Array<Runtime>;

		/** Max length: 512 */
		LicenseInfo?: string | null;
	}
	export interface PublishLayerVersionResponseFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		LayerVersionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,

		/** Max length: 512 */
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionResponseFormGroup() {
		return new FormGroup<PublishLayerVersionResponseFormProperties>({
			LayerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+')]),
			LayerVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:\d{12}:layer:[a-zA-Z0-9-_]+:[0-9]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export interface PutProvisionedConcurrencyConfigResponse {

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions?: number | null;

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: GetProvisionedConcurrencyConfigResponseStatus | null;
		StatusReason?: string | null;
		LastModified?: string | null;
	}
	export interface PutProvisionedConcurrencyConfigResponseFormProperties {

		/** Minimum: 1 */
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreatePutProvisionedConcurrencyConfigResponseFormGroup() {
		return new FormGroup<PutProvisionedConcurrencyConfigResponseFormProperties>({
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Status: new FormControl<GetProvisionedConcurrencyConfigResponseStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddLayerVersionPermissionRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: string;

		/** Required */
		Action: string;

		/** Required */
		Principal: string;
		OrganizationId?: string | null;
	}
	export interface AddLayerVersionPermissionRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateAddLayerVersionPermissionRequestFormGroup() {
		return new FormGroup<AddLayerVersionPermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddPermissionRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: string;

		/** Required */
		Action: string;

		/** Required */
		Principal: string;
		SourceArn?: string | null;
		SourceAccount?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		EventSourceToken?: string | null;
		RevisionId?: string | null;
	}
	export interface AddPermissionRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		EventSourceToken: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionRequestFormGroup() {
		return new FormGroup<AddPermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
			EventSourceToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9._\-]+')]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAliasRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
	}
	export interface CreateAliasRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('(?!^[0-9]+$)([a-zA-Z0-9-_]+)')]),
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export enum EventSourcePosition { TRIM_HORIZON = 0, LATEST = 1, AT_TIMESTAMP = 2 }

	export interface CreateEventSourceMappingRequest {

		/** Required */
		EventSourceArn: string;

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: string;
		Enabled?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;
		StartingPosition?: EventSourcePosition | null;
		StartingPositionTimestamp?: Date | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;
	}
	export interface CreateEventSourceMappingRequestFormProperties {

		/** Required */
		EventSourceArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,
		StartingPosition: FormControl<EventSourcePosition | null | undefined>,
		StartingPositionTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateCreateEventSourceMappingRequestFormGroup() {
		return new FormGroup<CreateEventSourceMappingRequestFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			StartingPosition: new FormControl<EventSourcePosition | null | undefined>(undefined),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
		});

	}


	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface FunctionCode {
		ZipFile?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;
	}

	/** The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly. */
	export interface FunctionCodeFormProperties {
		ZipFile: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateFunctionCodeFormGroup() {
		return new FormGroup<FunctionCodeFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
	export interface VpcConfig {

		/** Maximum items: 16 */
		SubnetIds?: Array<string>;

		/** Maximum items: 5 */
		SecurityGroupIds?: Array<string>;
	}

	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}


	/** A function's environment variable settings. */
	export interface Environment {
		Variables?: EnvironmentVariables;
	}

	/** A function's environment variable settings. */
	export interface EnvironmentFormProperties {
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
		});

	}


	/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
	export interface TracingConfig {
		Mode?: TracingConfigResponseMode | null;
	}

	/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
	export interface TracingConfigFormProperties {
		Mode: FormControl<TracingConfigResponseMode | null | undefined>,
	}
	export function CreateTracingConfigFormGroup() {
		return new FormGroup<TracingConfigFormProperties>({
			Mode: new FormControl<TracingConfigResponseMode | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionRequest {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: string;

		/** Required */
		Runtime: CreateFunctionRequestRuntime;

		/** Required */
		Role: string;

		/**
		 * Required
		 * Max length: 128
		 */
		Handler: string;

		/**
		 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
		 * Required
		 */
		Code: FunctionCode;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Minimum: 1 */
		Timeout?: number | null;

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number | null;
		Publish?: boolean | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: VpcConfig;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: Environment;
		KMSKeyArn?: string | null;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: TracingConfig;
		Tags?: Tags;
		Layers?: Array<string>;
	}
	export interface CreateFunctionRequestFormProperties {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** Required */
		Runtime: FormControl<CreateFunctionRequestRuntime | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize: FormControl<number | null | undefined>,
		Publish: FormControl<boolean | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionRequestFormGroup() {
		return new FormGroup<CreateFunctionRequestFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Runtime: new FormControl<CreateFunctionRequestRuntime | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(3008)]),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateFunctionRequestRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface DeleteAliasRequest {
	}
	export interface DeleteAliasRequestFormProperties {
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
		});

	}

	export interface DeleteEventSourceMappingRequest {
	}
	export interface DeleteEventSourceMappingRequestFormProperties {
	}
	export function CreateDeleteEventSourceMappingRequestFormGroup() {
		return new FormGroup<DeleteEventSourceMappingRequestFormProperties>({
		});

	}

	export interface DeleteFunctionConcurrencyRequest {
	}
	export interface DeleteFunctionConcurrencyRequestFormProperties {
	}
	export function CreateDeleteFunctionConcurrencyRequestFormGroup() {
		return new FormGroup<DeleteFunctionConcurrencyRequestFormProperties>({
		});

	}

	export interface DeleteFunctionEventInvokeConfigRequest {
	}
	export interface DeleteFunctionEventInvokeConfigRequestFormProperties {
	}
	export function CreateDeleteFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<DeleteFunctionEventInvokeConfigRequestFormProperties>({
		});

	}

	export interface DeleteFunctionRequest {
	}
	export interface DeleteFunctionRequestFormProperties {
	}
	export function CreateDeleteFunctionRequestFormGroup() {
		return new FormGroup<DeleteFunctionRequestFormProperties>({
		});

	}

	export interface DeleteLayerVersionRequest {
	}
	export interface DeleteLayerVersionRequestFormProperties {
	}
	export function CreateDeleteLayerVersionRequestFormGroup() {
		return new FormGroup<DeleteLayerVersionRequestFormProperties>({
		});

	}

	export interface DeleteProvisionedConcurrencyConfigRequest {
	}
	export interface DeleteProvisionedConcurrencyConfigRequestFormProperties {
	}
	export function CreateDeleteProvisionedConcurrencyConfigRequestFormGroup() {
		return new FormGroup<DeleteProvisionedConcurrencyConfigRequestFormProperties>({
		});

	}

	export enum State { Pending = 0, Active = 1, Inactive = 2, Failed = 3 }

	export enum StateReasonCode { Idle = 0, Creating = 1, Restoring = 2, EniLimitExceeded = 3, InsufficientRolePermissions = 4, InvalidConfiguration = 5, InternalError = 6, SubnetOutOfIPAddresses = 7, InvalidSubnet = 8, InvalidSecurityGroup = 9 }

	export enum LastUpdateStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export enum LastUpdateStatusReasonCode { EniLimitExceeded = 0, InsufficientRolePermissions = 1, InvalidConfiguration = 2, InternalError = 3, SubnetOutOfIPAddresses = 4, InvalidSubnet = 5, InvalidSecurityGroup = 6 }

	export enum FunctionVersion { ALL = 0 }

	export interface GetAccountSettingsRequest {
	}
	export interface GetAccountSettingsRequestFormProperties {
	}
	export function CreateGetAccountSettingsRequestFormGroup() {
		return new FormGroup<GetAccountSettingsRequestFormProperties>({
		});

	}

	export interface GetAliasRequest {
	}
	export interface GetAliasRequestFormProperties {
	}
	export function CreateGetAliasRequestFormGroup() {
		return new FormGroup<GetAliasRequestFormProperties>({
		});

	}

	export interface GetEventSourceMappingRequest {
	}
	export interface GetEventSourceMappingRequestFormProperties {
	}
	export function CreateGetEventSourceMappingRequestFormGroup() {
		return new FormGroup<GetEventSourceMappingRequestFormProperties>({
		});

	}

	export interface GetFunctionConcurrencyRequest {
	}
	export interface GetFunctionConcurrencyRequestFormProperties {
	}
	export function CreateGetFunctionConcurrencyRequestFormGroup() {
		return new FormGroup<GetFunctionConcurrencyRequestFormProperties>({
		});

	}

	export interface GetFunctionConfigurationRequest {
	}
	export interface GetFunctionConfigurationRequestFormProperties {
	}
	export function CreateGetFunctionConfigurationRequestFormGroup() {
		return new FormGroup<GetFunctionConfigurationRequestFormProperties>({
		});

	}

	export interface GetFunctionEventInvokeConfigRequest {
	}
	export interface GetFunctionEventInvokeConfigRequestFormProperties {
	}
	export function CreateGetFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<GetFunctionEventInvokeConfigRequestFormProperties>({
		});

	}

	export interface GetFunctionRequest {
	}
	export interface GetFunctionRequestFormProperties {
	}
	export function CreateGetFunctionRequestFormGroup() {
		return new FormGroup<GetFunctionRequestFormProperties>({
		});

	}

	export interface GetLayerVersionByArnRequest {
	}
	export interface GetLayerVersionByArnRequestFormProperties {
	}
	export function CreateGetLayerVersionByArnRequestFormGroup() {
		return new FormGroup<GetLayerVersionByArnRequestFormProperties>({
		});

	}

	export interface GetLayerVersionPolicyRequest {
	}
	export interface GetLayerVersionPolicyRequestFormProperties {
	}
	export function CreateGetLayerVersionPolicyRequestFormGroup() {
		return new FormGroup<GetLayerVersionPolicyRequestFormProperties>({
		});

	}

	export interface GetLayerVersionRequest {
	}
	export interface GetLayerVersionRequestFormProperties {
	}
	export function CreateGetLayerVersionRequestFormGroup() {
		return new FormGroup<GetLayerVersionRequestFormProperties>({
		});

	}

	export interface GetPolicyRequest {
	}
	export interface GetPolicyRequestFormProperties {
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
		});

	}

	export interface GetProvisionedConcurrencyConfigRequest {
	}
	export interface GetProvisionedConcurrencyConfigRequestFormProperties {
	}
	export function CreateGetProvisionedConcurrencyConfigRequestFormGroup() {
		return new FormGroup<GetProvisionedConcurrencyConfigRequestFormProperties>({
		});

	}

	export enum ProvisionedConcurrencyStatusEnum { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export enum InvocationType { Event = 0, RequestResponse = 1, DryRun = 2 }

	export enum LogType { None = 0, Tail = 1 }

	export interface InvocationRequest {
		Payload?: string | null;
	}
	export interface InvocationRequestFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvocationRequestFormGroup() {
		return new FormGroup<InvocationRequestFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvokeAsyncRequest {

		/** Required */
		InvokeArgs: string;
	}
	export interface InvokeAsyncRequestFormProperties {

		/** Required */
		InvokeArgs: FormControl<string | null | undefined>,
	}
	export function CreateInvokeAsyncRequestFormGroup() {
		return new FormGroup<InvokeAsyncRequestFormProperties>({
			InvokeArgs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
	export interface LayerVersionContentInput {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;
		ZipFile?: string | null;
	}

	/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
	export interface LayerVersionContentInputFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateLayerVersionContentInputFormGroup() {
		return new FormGroup<LayerVersionContentInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesRequest {
	}
	export interface ListAliasesRequestFormProperties {
	}
	export function CreateListAliasesRequestFormGroup() {
		return new FormGroup<ListAliasesRequestFormProperties>({
		});

	}

	export interface ListEventSourceMappingsRequest {
	}
	export interface ListEventSourceMappingsRequestFormProperties {
	}
	export function CreateListEventSourceMappingsRequestFormGroup() {
		return new FormGroup<ListEventSourceMappingsRequestFormProperties>({
		});

	}

	export interface ListFunctionEventInvokeConfigsRequest {
	}
	export interface ListFunctionEventInvokeConfigsRequestFormProperties {
	}
	export function CreateListFunctionEventInvokeConfigsRequestFormGroup() {
		return new FormGroup<ListFunctionEventInvokeConfigsRequestFormProperties>({
		});

	}

	export interface ListFunctionsRequest {
	}
	export interface ListFunctionsRequestFormProperties {
	}
	export function CreateListFunctionsRequestFormGroup() {
		return new FormGroup<ListFunctionsRequestFormProperties>({
		});

	}

	export interface ListLayerVersionsRequest {
	}
	export interface ListLayerVersionsRequestFormProperties {
	}
	export function CreateListLayerVersionsRequestFormGroup() {
		return new FormGroup<ListLayerVersionsRequestFormProperties>({
		});

	}

	export interface ListLayersRequest {
	}
	export interface ListLayersRequestFormProperties {
	}
	export function CreateListLayersRequestFormGroup() {
		return new FormGroup<ListLayersRequestFormProperties>({
		});

	}

	export interface ListProvisionedConcurrencyConfigsRequest {
	}
	export interface ListProvisionedConcurrencyConfigsRequestFormProperties {
	}
	export function CreateListProvisionedConcurrencyConfigsRequestFormGroup() {
		return new FormGroup<ListProvisionedConcurrencyConfigsRequestFormProperties>({
		});

	}

	export interface ListTagsRequest {
	}
	export interface ListTagsRequestFormProperties {
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
		});

	}

	export interface ListVersionsByFunctionRequest {
	}
	export interface ListVersionsByFunctionRequestFormProperties {
	}
	export function CreateListVersionsByFunctionRequestFormGroup() {
		return new FormGroup<ListVersionsByFunctionRequestFormProperties>({
		});

	}

	export interface PublishLayerVersionRequest {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
		 * Required
		 */
		Content: LayerVersionContentInput;

		/** Maximum items: 5 */
		CompatibleRuntimes?: Array<Runtime>;

		/** Max length: 512 */
		LicenseInfo?: string | null;
	}
	export interface PublishLayerVersionRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 512 */
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionRequestFormGroup() {
		return new FormGroup<PublishLayerVersionRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export interface PublishVersionRequest {
		CodeSha256?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
		RevisionId?: string | null;
	}
	export interface PublishVersionRequestFormProperties {
		CodeSha256: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublishVersionRequestFormGroup() {
		return new FormGroup<PublishVersionRequestFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFunctionConcurrencyRequest {

		/**
		 * Required
		 * Minimum: 0
		 */
		ReservedConcurrentExecutions: number;
	}
	export interface PutFunctionConcurrencyRequestFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionConcurrencyRequestFormGroup() {
		return new FormGroup<PutFunctionConcurrencyRequestFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PutFunctionEventInvokeConfigRequest {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}
	export interface PutFunctionEventInvokeConfigRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<PutFunctionEventInvokeConfigRequestFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(21600)]),
		});

	}

	export interface PutProvisionedConcurrencyConfigRequest {

		/**
		 * Required
		 * Minimum: 1
		 */
		ProvisionedConcurrentExecutions: number;
	}
	export interface PutProvisionedConcurrencyConfigRequestFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		ProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutProvisionedConcurrencyConfigRequestFormGroup() {
		return new FormGroup<PutProvisionedConcurrencyConfigRequestFormProperties>({
			ProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface RemoveLayerVersionPermissionRequest {
	}
	export interface RemoveLayerVersionPermissionRequestFormProperties {
	}
	export function CreateRemoveLayerVersionPermissionRequestFormGroup() {
		return new FormGroup<RemoveLayerVersionPermissionRequestFormProperties>({
		});

	}

	export interface RemovePermissionRequest {
	}
	export interface RemovePermissionRequestFormProperties {
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
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

	export interface UpdateAliasRequest {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string | null;
	}
	export interface UpdateAliasRequestFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasRequestFormGroup() {
		return new FormGroup<UpdateAliasRequestFormProperties>({
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourceMappingRequest {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName?: string | null;
		Enabled?: boolean | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;
	}
	export interface UpdateEventSourceMappingRequestFormProperties {

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingRequestFormGroup() {
		return new FormGroup<UpdateEventSourceMappingRequestFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export interface UpdateFunctionCodeRequest {
		ZipFile?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;
		Publish?: boolean | null;
		DryRun?: boolean | null;
		RevisionId?: string | null;
	}
	export interface UpdateFunctionCodeRequestFormProperties {
		ZipFile: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,
		Publish: FormControl<boolean | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionCodeRequestFormGroup() {
		return new FormGroup<UpdateFunctionCodeRequestFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationRequest {
		Role?: string | null;

		/** Max length: 128 */
		Handler?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Minimum: 1 */
		Timeout?: number | null;

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: VpcConfig;

		/** A function's environment variable settings. */
		Environment?: Environment;
		Runtime?: UpdateFunctionConfigurationRequestRuntime | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: DeadLetterConfig;
		KMSKeyArn?: string | null;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: TracingConfig;
		RevisionId?: string | null;
		Layers?: Array<string>;
	}
	export interface UpdateFunctionConfigurationRequestFormProperties {
		Role: FormControl<string | null | undefined>,

		/** Max length: 128 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize: FormControl<number | null | undefined>,
		Runtime: FormControl<UpdateFunctionConfigurationRequestRuntime | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationRequestFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(3008)]),
			Runtime: new FormControl<UpdateFunctionConfigurationRequestRuntime | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateFunctionConfigurationRequestRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface UpdateFunctionEventInvokeConfigRequest {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: DestinationConfig;
	}
	export interface UpdateFunctionEventInvokeConfigRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<UpdateFunctionEventInvokeConfigRequestFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(21600)]),
		});

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
		AddLayerVersionPermission(LayerName: string, VersionNumber: number, RevisionId: string | null | undefined, requestBody: AddLayerVersionPermissionPostBody): Observable<HttpResponse<string>> {
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
		AddPermission(FunctionName: string, Qualifier: string | null | undefined, requestBody: AddPermissionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
		 * Get 2015-03-31/functions/{FunctionName}/policy
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to get the policy for that resource.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(FunctionName: string, Qualifier: string | null | undefined): Observable<GetPolicyResponse> {
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
		ListAliases(FunctionName: string, FunctionVersion: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListAliasesResponse> {
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
		ListEventSourceMappings(EventSourceArn: string | null | undefined, FunctionName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListEventSourceMappingsResponse> {
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
		DeleteFunction(FunctionName: string, Qualifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
		 * Get 2015-03-31/functions/{FunctionName}
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier Specify a version or alias to get details about a published version of the function.
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(FunctionName: string, Qualifier: string | null | undefined): Observable<GetFunctionResponse> {
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
		DeleteFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Get 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		GetFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<FunctionEventInvokeConfig> {
			return this.http.get<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>PutFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
		 * Put 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		PutFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: PutFunctionEventInvokeConfigPutBody): Observable<FunctionEventInvokeConfig> {
			return this.http.put<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Post 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * @param {string} Qualifier A version number or alias name.
		 * @return {FunctionEventInvokeConfig} Success
		 */
		UpdateFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: UpdateFunctionEventInvokeConfigPostBody): Observable<FunctionEventInvokeConfig> {
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
		GetFunctionConfiguration(FunctionName: string, Qualifier: string | null | undefined): Observable<FunctionConfiguration> {
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
		Invoke(FunctionName: string, Qualifier: string | null | undefined, requestBody: InvokePostBody): Observable<InvocationResponse> {
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
		ListFunctionEventInvokeConfigs(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionEventInvokeConfigsResponse> {
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
		ListFunctions(MasterRegion: string | null | undefined, FunctionVersion: FunctionVersion | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionsResponse> {
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
		ListLayerVersions(CompatibleRuntime: ListLayerVersionsCompatibleRuntime | null | undefined, LayerName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListLayerVersionsResponse> {
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
		ListLayers(CompatibleRuntime: ListLayersCompatibleRuntime | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListLayersResponse> {
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
		ListProvisionedConcurrencyConfigs(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, List: FunctionVersion): Observable<ListProvisionedConcurrencyConfigsResponse> {
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
		ListVersionsByFunction(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListVersionsByFunctionResponse> {
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
		RemoveLayerVersionPermission(LayerName: string, VersionNumber: number, StatementId: string, RevisionId: string | null | undefined): Observable<HttpResponse<string>> {
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
		RemovePermission(FunctionName: string, StatementId: string, Qualifier: string | null | undefined, RevisionId: string | null | undefined): Observable<HttpResponse<string>> {
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
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: string;

		/**
		 * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
		 * Required
		 */
		Action: string;

		/**
		 * An account ID, or <code>*</code> to grant permission to all AWS accounts.
		 * Required
		 */
		Principal: string;

		/** With the principal set to <code>*</code>, grant permission to all accounts in the specified organization. */
		OrganizationId?: string | null;
	}
	export interface AddLayerVersionPermissionPostBodyFormProperties {

		/**
		 * An identifier that distinguishes the policy from others on the same layer version.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
		 * Required
		 */
		Action: FormControl<string | null | undefined>,

		/**
		 * An account ID, or <code>*</code> to grant permission to all AWS accounts.
		 * Required
		 */
		Principal: FormControl<string | null | undefined>,

		/** With the principal set to <code>*</code>, grant permission to all accounts in the specified organization. */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateAddLayerVersionPermissionPostBodyFormGroup() {
		return new FormGroup<AddLayerVersionPermissionPostBodyFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddPermissionPostBody {

		/**
		 * A statement identifier that differentiates the statement from others in the same policy.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: string;

		/**
		 * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
		 * Required
		 */
		Action: string;

		/**
		 * The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
		 * Required
		 */
		Principal: string;

		/** For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic. */
		SourceArn?: string | null;

		/** For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account. */
		SourceAccount?: string | null;

		/**
		 * For Alexa Smart Home functions, a token that must be supplied by the invoker.
		 * Max length: 256
		 * Min length: 0
		 */
		EventSourceToken?: string | null;

		/** Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it. */
		RevisionId?: string | null;
	}
	export interface AddPermissionPostBodyFormProperties {

		/**
		 * A statement identifier that differentiates the statement from others in the same policy.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
		 * Required
		 */
		Action: FormControl<string | null | undefined>,

		/**
		 * The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
		 * Required
		 */
		Principal: FormControl<string | null | undefined>,

		/** For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic. */
		SourceArn: FormControl<string | null | undefined>,

		/** For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account. */
		SourceAccount: FormControl<string | null | undefined>,

		/**
		 * For Alexa Smart Home functions, a token that must be supplied by the invoker.
		 * Max length: 256
		 * Min length: 0
		 */
		EventSourceToken: FormControl<string | null | undefined>,

		/** Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionPostBodyFormGroup() {
		return new FormGroup<AddPermissionPostBodyFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
			EventSourceToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('[a-zA-Z0-9._\-]+')]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAliasPostBody {

		/**
		 * The name of the alias.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The function version that the alias invokes.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: string;

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: CreateAliasPostBodyRoutingConfig;
	}
	export interface CreateAliasPostBodyFormProperties {

		/**
		 * The name of the alias.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The function version that the alias invokes.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasPostBodyFormGroup() {
		return new FormGroup<CreateAliasPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('(?!^[0-9]+$)([a-zA-Z0-9-_]+)')]),
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface CreateAliasPostBodyRoutingConfig {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}
	export interface CreateAliasPostBodyRoutingConfigFormProperties {
	}
	export function CreateCreateAliasPostBodyRoutingConfigFormGroup() {
		return new FormGroup<CreateAliasPostBodyRoutingConfigFormProperties>({
		});

	}

	export interface CreateEventSourceMappingPostBody {

		/**
		 * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p> </li> </ul>
		 * Required
		 */
		EventSourceArn: string;

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: string;

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled?: boolean | null;

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;

		/** The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams. */
		StartingPosition?: EventSourcePosition | null;

		/** With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. */
		StartingPositionTimestamp?: Date | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: CreateEventSourceMappingPostBodyDestinationConfig;

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;
	}
	export interface CreateEventSourceMappingPostBodyFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p> </li> </ul>
		 * Required
		 */
		EventSourceArn: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,

		/** The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams. */
		StartingPosition: FormControl<EventSourcePosition | null | undefined>,

		/** With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. */
		StartingPositionTimestamp: FormControl<Date | null | undefined>,

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodyFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			StartingPosition: new FormControl<EventSourcePosition | null | undefined>(undefined),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
		});

	}

	export interface CreateEventSourceMappingPostBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}
	export interface CreateEventSourceMappingPostBodyDestinationConfigFormProperties {
	}
	export function CreateCreateEventSourceMappingPostBodyDestinationConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyDestinationConfigFormProperties>({
		});

	}

	export interface CreateFunctionPostBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: string;

		/**
		 * The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.
		 * Required
		 */
		Runtime: CreateFunctionPostBodyRuntime;

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Required
		 */
		Role: string;

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Required
		 * Max length: 128
		 */
		Handler: string;

		/**
		 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
		 * Required
		 */
		Code: CreateFunctionPostBodyCode;

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout?: number | null;

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number | null;

		/** Set to true to publish the first version of the function during creation. */
		Publish?: boolean | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: CreateFunctionPostBodyVpcConfig;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: CreateFunctionPostBodyDeadLetterConfig;

		/** A function's environment variable settings. */
		Environment?: CreateFunctionPostBodyEnvironment;

		/** The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key. */
		KMSKeyArn?: string | null;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: CreateFunctionPostBodyTracingConfig;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function. */
		Tags?: {[id: string]: string };

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;
	}
	export interface CreateFunctionPostBodyFormProperties {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/**
		 * The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.
		 * Required
		 */
		Runtime: FormControl<CreateFunctionPostBodyRuntime | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Required
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Required
		 * Max length: 128
		 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize: FormControl<number | null | undefined>,

		/** Set to true to publish the first version of the function during creation. */
		Publish: FormControl<boolean | null | undefined>,

		/** The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key. */
		KMSKeyArn: FormControl<string | null | undefined>,

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionPostBodyFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Runtime: new FormControl<CreateFunctionPostBodyRuntime | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(3008)]),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum CreateFunctionPostBodyRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface CreateFunctionPostBodyCode {
		ZipFile?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;
	}
	export interface CreateFunctionPostBodyCodeFormProperties {
		ZipFile: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyCodeFormGroup() {
		return new FormGroup<CreateFunctionPostBodyCodeFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface CreateFunctionPostBodyVpcConfig {

		/** Maximum items: 16 */
		SubnetIds?: Array<string>;

		/** Maximum items: 5 */
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateFunctionPostBodyVpcConfigFormProperties {
	}
	export function CreateCreateFunctionPostBodyVpcConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyVpcConfigFormProperties>({
		});

	}

	export interface CreateFunctionPostBodyDeadLetterConfig {
		TargetArn?: string | null;
	}
	export interface CreateFunctionPostBodyDeadLetterConfigFormProperties {
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyDeadLetterConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyDeadLetterConfigFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodyEnvironment {
		Variables?: EnvironmentVariables;
	}
	export interface CreateFunctionPostBodyEnvironmentFormProperties {
	}
	export function CreateCreateFunctionPostBodyEnvironmentFormGroup() {
		return new FormGroup<CreateFunctionPostBodyEnvironmentFormProperties>({
		});

	}

	export interface CreateFunctionPostBodyTracingConfig {
		Mode?: TracingConfigResponseMode | null;
	}
	export interface CreateFunctionPostBodyTracingConfigFormProperties {
		Mode: FormControl<TracingConfigResponseMode | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyTracingConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyTracingConfigFormProperties>({
			Mode: new FormControl<TracingConfigResponseMode | null | undefined>(undefined),
		});

	}

	export interface UpdateAliasPutBody {

		/**
		 * The function version that the alias invokes.
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion?: string | null;

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: UpdateAliasPutBodyRoutingConfig;

		/** Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it. */
		RevisionId?: string | null;
	}
	export interface UpdateAliasPutBodyFormProperties {

		/**
		 * The function version that the alias invokes.
		 * Max length: 1024
		 * Min length: 1
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the alias.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasPutBodyFormGroup() {
		return new FormGroup<UpdateAliasPutBodyFormProperties>({
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAliasPutBodyRoutingConfig {
		AdditionalVersionWeights?: AdditionalVersionWeights;
	}
	export interface UpdateAliasPutBodyRoutingConfigFormProperties {
	}
	export function CreateUpdateAliasPutBodyRoutingConfigFormGroup() {
		return new FormGroup<UpdateAliasPutBodyRoutingConfigFormProperties>({
		});

	}

	export interface UpdateEventSourceMappingPutBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName?: string | null;

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled?: boolean | null;

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: UpdateEventSourceMappingPutBodyDestinationConfig;

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;
	}
	export interface UpdateEventSourceMappingPutBodyFormProperties {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Max length: 140
		 * Min length: 1
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** Disables the event source mapping to pause polling and invocation. */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>The maximum number of items to retrieve in a single batch.</p> <ul> <li> <p> <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * (Streams) The maximum age of a record that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,

		/** (Streams) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * (Streams) The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * (Streams) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingPutBodyFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(140), Validators.minLength(1), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export interface UpdateEventSourceMappingPutBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}
	export interface UpdateEventSourceMappingPutBodyDestinationConfigFormProperties {
	}
	export function CreateUpdateEventSourceMappingPutBodyDestinationConfigFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyDestinationConfigFormProperties>({
		});

	}

	export interface PutFunctionConcurrencyPutBody {

		/**
		 * The number of simultaneous executions to reserve for the function.
		 * Required
		 * Minimum: 0
		 */
		ReservedConcurrentExecutions: number;
	}
	export interface PutFunctionConcurrencyPutBodyFormProperties {

		/**
		 * The number of simultaneous executions to reserve for the function.
		 * Required
		 * Minimum: 0
		 */
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionConcurrencyPutBodyFormGroup() {
		return new FormGroup<PutFunctionConcurrencyPutBodyFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface PutFunctionEventInvokeConfigPutBody {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: PutFunctionEventInvokeConfigPutBodyDestinationConfig;
	}
	export interface PutFunctionEventInvokeConfigPutBodyFormProperties {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionEventInvokeConfigPutBodyFormGroup() {
		return new FormGroup<PutFunctionEventInvokeConfigPutBodyFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(21600)]),
		});

	}

	export interface PutFunctionEventInvokeConfigPutBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}
	export interface PutFunctionEventInvokeConfigPutBodyDestinationConfigFormProperties {
	}
	export function CreatePutFunctionEventInvokeConfigPutBodyDestinationConfigFormGroup() {
		return new FormGroup<PutFunctionEventInvokeConfigPutBodyDestinationConfigFormProperties>({
		});

	}

	export interface UpdateFunctionEventInvokeConfigPostBody {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: UpdateFunctionEventInvokeConfigPostBodyDestinationConfig;
	}
	export interface UpdateFunctionEventInvokeConfigPostBodyFormProperties {

		/**
		 * The maximum number of times to retry when the function returns an error.
		 * Minimum: 0
		 * Maximum: 2
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * The maximum age of a request that Lambda sends to a function for processing.
		 * Minimum: 60
		 * Maximum: 21600
		 */
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFunctionEventInvokeConfigPostBodyFormGroup() {
		return new FormGroup<UpdateFunctionEventInvokeConfigPostBodyFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(21600)]),
		});

	}

	export interface UpdateFunctionEventInvokeConfigPostBodyDestinationConfig {

		/** A destination for events that were processed successfully. */
		OnSuccess?: OnSuccess;

		/** A destination for events that failed processing. */
		OnFailure?: OnFailure;
	}
	export interface UpdateFunctionEventInvokeConfigPostBodyDestinationConfigFormProperties {
	}
	export function CreateUpdateFunctionEventInvokeConfigPostBodyDestinationConfigFormGroup() {
		return new FormGroup<UpdateFunctionEventInvokeConfigPostBodyDestinationConfigFormProperties>({
		});

	}

	export interface PutProvisionedConcurrencyConfigPutBody {

		/**
		 * The amount of provisioned concurrency to allocate for the version or alias.
		 * Required
		 * Minimum: 1
		 */
		ProvisionedConcurrentExecutions: number;
	}
	export interface PutProvisionedConcurrencyConfigPutBodyFormProperties {

		/**
		 * The amount of provisioned concurrency to allocate for the version or alias.
		 * Required
		 * Minimum: 1
		 */
		ProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutProvisionedConcurrencyConfigPutBodyFormGroup() {
		return new FormGroup<PutProvisionedConcurrencyConfigPutBodyFormProperties>({
			ProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateFunctionConfigurationPutBody {

		/** The Amazon Resource Name (ARN) of the function's execution role. */
		Role?: string | null;

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Max length: 128
		 */
		Handler?: string | null;

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout?: number | null;

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize?: number | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>. */
		VpcConfig?: UpdateFunctionConfigurationPutBodyVpcConfig;

		/** A function's environment variable settings. */
		Environment?: UpdateFunctionConfigurationPutBodyEnvironment;

		/** The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. */
		Runtime?: UpdateFunctionConfigurationPutBodyRuntime | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: UpdateFunctionConfigurationPutBodyDeadLetterConfig;

		/** The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key. */
		KMSKeyArn?: string | null;

		/** The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: UpdateFunctionConfigurationPutBodyTracingConfig;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string | null;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;
	}
	export interface UpdateFunctionConfigurationPutBodyFormProperties {

		/** The Amazon Resource Name (ARN) of the function's execution role. */
		Role: FormControl<string | null | undefined>,

		/**
		 * The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.
		 * Max length: 128
		 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * A description of the function.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
		 * Minimum: 1
		 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
		 * Minimum: 128
		 * Maximum: 3008
		 */
		MemorySize: FormControl<number | null | undefined>,

		/** The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. */
		Runtime: FormControl<UpdateFunctionConfigurationPutBodyRuntime | null | undefined>,

		/** The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key. */
		KMSKeyArn: FormControl<string | null | undefined>,

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(3008)]),
			Runtime: new FormControl<UpdateFunctionConfigurationPutBodyRuntime | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodyVpcConfig {

		/** Maximum items: 16 */
		SubnetIds?: Array<string>;

		/** Maximum items: 5 */
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateFunctionConfigurationPutBodyVpcConfigFormProperties {
	}
	export function CreateUpdateFunctionConfigurationPutBodyVpcConfigFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyVpcConfigFormProperties>({
		});

	}

	export interface UpdateFunctionConfigurationPutBodyEnvironment {
		Variables?: EnvironmentVariables;
	}
	export interface UpdateFunctionConfigurationPutBodyEnvironmentFormProperties {
	}
	export function CreateUpdateFunctionConfigurationPutBodyEnvironmentFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyEnvironmentFormProperties>({
		});

	}

	export enum UpdateFunctionConfigurationPutBodyRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface UpdateFunctionConfigurationPutBodyDeadLetterConfig {
		TargetArn?: string | null;
	}
	export interface UpdateFunctionConfigurationPutBodyDeadLetterConfigFormProperties {
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyDeadLetterConfigFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyDeadLetterConfigFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodyTracingConfig {
		Mode?: TracingConfigResponseMode | null;
	}
	export interface UpdateFunctionConfigurationPutBodyTracingConfigFormProperties {
		Mode: FormControl<TracingConfigResponseMode | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyTracingConfigFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyTracingConfigFormProperties>({
			Mode: new FormControl<TracingConfigResponseMode | null | undefined>(undefined),
		});

	}

	export enum GetLayerVersionByArnFind { LayerVersion = 0 }

	export interface InvokePostBody {

		/** The JSON that you want to provide to your Lambda function as input. */
		Payload?: string | null;
	}
	export interface InvokePostBodyFormProperties {

		/** The JSON that you want to provide to your Lambda function as input. */
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvokePostBodyFormGroup() {
		return new FormGroup<InvokePostBodyFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvokeAsyncPostBody {

		/**
		 * The JSON that you want to provide to your Lambda function as input.
		 * Required
		 */
		InvokeArgs: string;
	}
	export interface InvokeAsyncPostBodyFormProperties {

		/**
		 * The JSON that you want to provide to your Lambda function as input.
		 * Required
		 */
		InvokeArgs: FormControl<string | null | undefined>,
	}
	export function CreateInvokeAsyncPostBodyFormGroup() {
		return new FormGroup<InvokeAsyncPostBodyFormProperties>({
			InvokeArgs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListLayerVersionsCompatibleRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface PublishLayerVersionPostBody {

		/**
		 * The description of the version.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
		 * Required
		 */
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
		LicenseInfo?: string | null;
	}
	export interface PublishLayerVersionPostBodyFormProperties {

		/**
		 * The description of the version.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>
		 * Max length: 512
		 */
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionPostBodyFormGroup() {
		return new FormGroup<PublishLayerVersionPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export interface PublishLayerVersionPostBodyContent {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;
		ZipFile?: string | null;
	}
	export interface PublishLayerVersionPostBodyContentFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionPostBodyContentFormGroup() {
		return new FormGroup<PublishLayerVersionPostBodyContentFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListLayersCompatibleRuntime { nodejs = 0, nodejs4_3 = 1, nodejs6_10 = 2, nodejs8_10 = 3, nodejs10_x = 4, nodejs12_x = 5, java8 = 6, java11 = 7, python2_7 = 8, python3_6 = 9, python3_7 = 10, python3_8 = 11, dotnetcore1_0 = 12, dotnetcore2_0 = 13, dotnetcore2_1 = 14, dotnetcore3_1 = 15, nodejs4_3_edge = 16, go1_x = 17, ruby2_5 = 18, ruby2_7 = 19, provided = 20 }

	export interface TagResourcePostBody {

		/**
		 * A list of tags to apply to the function.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of tags to apply to the function.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishVersionPostBody {

		/** Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>. */
		CodeSha256?: string | null;

		/**
		 * A description for the version to override the description in the function configuration.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it. */
		RevisionId?: string | null;
	}
	export interface PublishVersionPostBodyFormProperties {

		/** Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>. */
		CodeSha256: FormControl<string | null | undefined>,

		/**
		 * A description for the version to override the description in the function configuration.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublishVersionPostBodyFormGroup() {
		return new FormGroup<PublishVersionPostBodyFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionCodePutBody {

		/** The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you. */
		ZipFile?: string | null;

		/**
		 * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket?: string | null;

		/**
		 * The Amazon S3 key of the deployment package.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key?: string | null;

		/**
		 * For versioned objects, the version of the deployment package object to use.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion?: string | null;

		/** Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately. */
		Publish?: boolean | null;

		/** Set to true to validate the request parameters and access permissions without modifying the function code. */
		DryRun?: boolean | null;

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string | null;
	}
	export interface UpdateFunctionCodePutBodyFormProperties {

		/** The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you. */
		ZipFile: FormControl<string | null | undefined>,

		/**
		 * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
		 * Max length: 63
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 key of the deployment package.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * For versioned objects, the version of the deployment package object to use.
		 * Max length: 1024
		 * Min length: 1
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,

		/** Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately. */
		Publish: FormControl<boolean | null | undefined>,

		/** Set to true to validate the request parameters and access permissions without modifying the function code. */
		DryRun: FormControl<boolean | null | undefined>,

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionCodePutBodyFormGroup() {
		return new FormGroup<UpdateFunctionCodePutBodyFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

