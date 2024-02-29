import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddLayerVersionPermissionResponse {
		Statement?: string;
		RevisionId?: string;
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
		Statement?: string;
	}
	export interface AddPermissionResponseFormProperties {
		Statement: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionResponseFormGroup() {
		return new FormGroup<AddPermissionResponseFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>. */
	export interface AliasConfiguration {
		AliasArn?: string;
		Name?: string;
		FunctionVersion?: string;
		Description?: string;
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string;
	}

	/** Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>. */
	export interface AliasConfigurationFormProperties {
		AliasArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		FunctionVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateAliasConfigurationFormGroup() {
		return new FormGroup<AliasConfigurationFormProperties>({
			AliasArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			FunctionVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateCodeSigningConfigResponse {

		/** Required */
		CodeSigningConfig: CodeSigningConfig;
	}
	export interface CreateCodeSigningConfigResponseFormProperties {
	}
	export function CreateCreateCodeSigningConfigResponseFormGroup() {
		return new FormGroup<CreateCodeSigningConfigResponseFormProperties>({
		});

	}


	/** Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>.  */
	export interface CodeSigningConfig {

		/** Required */
		CodeSigningConfigId: string;

		/** Required */
		CodeSigningConfigArn: string;
		Description?: string;

		/** Required */
		AllowedPublishers: AllowedPublishers;

		/** Required */
		CodeSigningPolicies: CodeSigningPolicies;

		/** Required */
		LastModified: string;
	}

	/** Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>.  */
	export interface CodeSigningConfigFormProperties {

		/** Required */
		CodeSigningConfigId: FormControl<string | null | undefined>,

		/** Required */
		CodeSigningConfigArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateCodeSigningConfigFormGroup() {
		return new FormGroup<CodeSigningConfigFormProperties>({
			CodeSigningConfigId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of signing profiles that can sign a code package.  */
	export interface AllowedPublishers {

		/** Required */
		SigningProfileVersionArns: Array<string>;
	}

	/** List of signing profiles that can sign a code package.  */
	export interface AllowedPublishersFormProperties {
	}
	export function CreateAllowedPublishersFormGroup() {
		return new FormGroup<AllowedPublishersFormProperties>({
		});

	}


	/** Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry. */
	export interface CodeSigningPolicies {
		UntrustedArtifactOnDeployment?: CodeSigningPolicy;
	}

	/** Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry. */
	export interface CodeSigningPoliciesFormProperties {
		UntrustedArtifactOnDeployment: FormControl<CodeSigningPolicy | null | undefined>,
	}
	export function CreateCodeSigningPoliciesFormGroup() {
		return new FormGroup<CodeSigningPoliciesFormProperties>({
			UntrustedArtifactOnDeployment: new FormControl<CodeSigningPolicy | null | undefined>(undefined),
		});

	}

	export enum CodeSigningPolicy { Warn = 'Warn', Enforce = 'Enforce' }


	/** A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>. */
	export interface EventSourceMappingConfiguration {
		UUID?: string;
		StartingPosition?: EventSourcePosition;
		StartingPositionTimestamp?: Date;
		BatchSize?: number | null;
		MaximumBatchingWindowInSeconds?: number | null;
		ParallelizationFactor?: number | null;
		EventSourceArn?: string;
		FilterCriteria?: FilterCriteria;
		FunctionArn?: string;
		LastModified?: Date;
		LastProcessingResult?: string;
		State?: string;
		StateTransitionReason?: string;
		DestinationConfig?: DestinationConfig;
		Topics?: Array<string>;
		Queues?: Array<string>;
		SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
		SelfManagedEventSource?: SelfManagedEventSource;
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;
		MaximumRetryAttempts?: number | null;
		TumblingWindowInSeconds?: number | null;
		FunctionResponseTypes?: Array<FunctionResponseType>;
		AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
		SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
		ScalingConfig?: ScalingConfig;
		DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
	}

	/** A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>. */
	export interface EventSourceMappingConfigurationFormProperties {
		UUID: FormControl<string | null | undefined>,
		StartingPosition: FormControl<EventSourcePosition | null | undefined>,
		StartingPositionTimestamp: FormControl<Date | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LastProcessingResult: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		StateTransitionReason: FormControl<string | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		TumblingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateEventSourceMappingConfigurationFormGroup() {
		return new FormGroup<EventSourceMappingConfigurationFormProperties>({
			UUID: new FormControl<string | null | undefined>(undefined),
			StartingPosition: new FormControl<EventSourcePosition | null | undefined>(undefined),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LastProcessingResult: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			StateTransitionReason: new FormControl<string | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			TumblingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EventSourcePosition { TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST', AT_TIMESTAMP = 'AT_TIMESTAMP' }


	/**  An object that contains the filters for an event source.  */
	export interface FilterCriteria {
		Filters?: Array<Filter>;
	}

	/**  An object that contains the filters for an event source.  */
	export interface FilterCriteriaFormProperties {
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
		});

	}


	/**  A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern.  */
	export interface Filter {
		Pattern?: string;
	}

	/**  A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern.  */
	export interface FilterFormProperties {
		Pattern: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration object that specifies the destination of an event after Lambda processes it. */
	export interface DestinationConfig {
		OnSuccess?: OnSuccess;
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
		Destination?: string;
	}

	/** A destination for events that were processed successfully. */
	export interface OnSuccessFormProperties {
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateOnSuccessFormGroup() {
		return new FormGroup<OnSuccessFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A destination for events that failed processing. */
	export interface OnFailure {
		Destination?: string;
	}

	/** A destination for events that failed processing. */
	export interface OnFailureFormProperties {
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateOnFailureFormGroup() {
		return new FormGroup<OnFailureFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host. */
	export interface SourceAccessConfiguration {
		Type?: SourceAccessType;
		URI?: string;
	}

	/** To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host. */
	export interface SourceAccessConfigurationFormProperties {
		Type: FormControl<SourceAccessType | null | undefined>,
		URI: FormControl<string | null | undefined>,
	}
	export function CreateSourceAccessConfigurationFormGroup() {
		return new FormGroup<SourceAccessConfigurationFormProperties>({
			Type: new FormControl<SourceAccessType | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceAccessType { BASIC_AUTH = 'BASIC_AUTH', VPC_SUBNET = 'VPC_SUBNET', VPC_SECURITY_GROUP = 'VPC_SECURITY_GROUP', SASL_SCRAM_512_AUTH = 'SASL_SCRAM_512_AUTH', SASL_SCRAM_256_AUTH = 'SASL_SCRAM_256_AUTH', VIRTUAL_HOST = 'VIRTUAL_HOST', CLIENT_CERTIFICATE_TLS_AUTH = 'CLIENT_CERTIFICATE_TLS_AUTH', SERVER_ROOT_CA_CERTIFICATE = 'SERVER_ROOT_CA_CERTIFICATE' }


	/** The self-managed Apache Kafka cluster for your event source. */
	export interface SelfManagedEventSource {
		Endpoints?: Endpoints;
	}

	/** The self-managed Apache Kafka cluster for your event source. */
	export interface SelfManagedEventSourceFormProperties {
	}
	export function CreateSelfManagedEventSourceFormGroup() {
		return new FormGroup<SelfManagedEventSourceFormProperties>({
		});

	}

	export interface Endpoints {
	}
	export interface EndpointsFormProperties {
	}
	export function CreateEndpointsFormGroup() {
		return new FormGroup<EndpointsFormProperties>({
		});

	}

	export enum FunctionResponseType { ReportBatchItemFailures = 'ReportBatchItemFailures' }


	/** Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. */
	export interface AmazonManagedKafkaEventSourceConfig {
		ConsumerGroupId?: string;
	}

	/** Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. */
	export interface AmazonManagedKafkaEventSourceConfigFormProperties {
		ConsumerGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAmazonManagedKafkaEventSourceConfigFormGroup() {
		return new FormGroup<AmazonManagedKafkaEventSourceConfigFormProperties>({
			ConsumerGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specific configuration settings for a self-managed Apache Kafka event source. */
	export interface SelfManagedKafkaEventSourceConfig {
		ConsumerGroupId?: string;
	}

	/** Specific configuration settings for a self-managed Apache Kafka event source. */
	export interface SelfManagedKafkaEventSourceConfigFormProperties {
		ConsumerGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedKafkaEventSourceConfigFormGroup() {
		return new FormGroup<SelfManagedKafkaEventSourceConfigFormProperties>({
			ConsumerGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value. */
	export interface ScalingConfig {
		MaximumConcurrency?: number | null;
	}

	/** (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value. */
	export interface ScalingConfigFormProperties {
		MaximumConcurrency: FormControl<number | null | undefined>,
	}
	export function CreateScalingConfigFormGroup() {
		return new FormGroup<ScalingConfigFormProperties>({
			MaximumConcurrency: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Specific configuration settings for a DocumentDB event source.  */
	export interface DocumentDBEventSourceConfig {
		DatabaseName?: string;
		CollectionName?: string;
		FullDocument?: FullDocument;
	}

	/**  Specific configuration settings for a DocumentDB event source.  */
	export interface DocumentDBEventSourceConfigFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		CollectionName: FormControl<string | null | undefined>,
		FullDocument: FormControl<FullDocument | null | undefined>,
	}
	export function CreateDocumentDBEventSourceConfigFormGroup() {
		return new FormGroup<DocumentDBEventSourceConfigFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			CollectionName: new FormControl<string | null | undefined>(undefined),
			FullDocument: new FormControl<FullDocument | null | undefined>(undefined),
		});

	}

	export enum FullDocument { UpdateLookup = 'UpdateLookup', Default = 'Default' }


	/** Details about a function's configuration. */
	export interface FunctionConfiguration {
		FunctionName?: string;
		FunctionArn?: string;
		Runtime?: Runtime;
		Role?: string;
		Handler?: string;
		CodeSize?: number | null;
		Description?: string;
		Timeout?: number | null;
		MemorySize?: number | null;
		LastModified?: string;
		CodeSha256?: string;
		Version?: string;
		VpcConfig?: VpcConfigResponse;
		DeadLetterConfig?: DeadLetterConfig;
		Environment?: EnvironmentResponse;
		KMSKeyArn?: string;
		TracingConfig?: TracingConfigResponse;
		MasterArn?: string;
		RevisionId?: string;
		Layers?: Array<Layer>;
		State?: State;
		StateReason?: string;
		StateReasonCode?: StateReasonCode;
		LastUpdateStatus?: LastUpdateStatus;
		LastUpdateStatusReason?: string;
		LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode;
		FileSystemConfigs?: Array<FileSystemConfig>;
		PackageType?: PackageType;
		ImageConfigResponse?: ImageConfigResponse;
		SigningProfileVersionArn?: string;
		SigningJobArn?: string;
		Architectures?: Array<Architecture>;
		EphemeralStorage?: EphemeralStorage;
		SnapStart?: SnapStartResponse;
		RuntimeVersionConfig?: RuntimeVersionConfig;
	}

	/** Details about a function's configuration. */
	export interface FunctionConfigurationFormProperties {
		FunctionName: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		Runtime: FormControl<Runtime | null | undefined>,
		Role: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
		CodeSha256: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
		MasterArn: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		StateReasonCode: FormControl<StateReasonCode | null | undefined>,
		LastUpdateStatus: FormControl<LastUpdateStatus | null | undefined>,
		LastUpdateStatusReason: FormControl<string | null | undefined>,
		LastUpdateStatusReasonCode: FormControl<LastUpdateStatusReasonCode | null | undefined>,
		PackageType: FormControl<PackageType | null | undefined>,
		SigningProfileVersionArn: FormControl<string | null | undefined>,
		SigningJobArn: FormControl<string | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			MasterArn: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			StateReasonCode: new FormControl<StateReasonCode | null | undefined>(undefined),
			LastUpdateStatus: new FormControl<LastUpdateStatus | null | undefined>(undefined),
			LastUpdateStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateStatusReasonCode: new FormControl<LastUpdateStatusReasonCode | null | undefined>(undefined),
			PackageType: new FormControl<PackageType | null | undefined>(undefined),
			SigningProfileVersionArn: new FormControl<string | null | undefined>(undefined),
			SigningJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Runtime { nodejs = 'nodejs', 'nodejs4.3' = 'nodejs4.3', 'nodejs6.10' = 'nodejs6.10', 'nodejs8.10' = 'nodejs8.10', 'nodejs10.x' = 'nodejs10.x', 'nodejs12.x' = 'nodejs12.x', 'nodejs14.x' = 'nodejs14.x', 'nodejs16.x' = 'nodejs16.x', java8 = 'java8', 'java8.al2' = 'java8.al2', java11 = 'java11', 'python2.7' = 'python2.7', 'python3.6' = 'python3.6', 'python3.7' = 'python3.7', 'python3.8' = 'python3.8', 'python3.9' = 'python3.9', 'dotnetcore1.0' = 'dotnetcore1.0', 'dotnetcore2.0' = 'dotnetcore2.0', 'dotnetcore2.1' = 'dotnetcore2.1', 'dotnetcore3.1' = 'dotnetcore3.1', dotnet6 = 'dotnet6', 'nodejs4.3-edge' = 'nodejs4.3-edge', 'go1.x' = 'go1.x', 'ruby2.5' = 'ruby2.5', 'ruby2.7' = 'ruby2.7', provided = 'provided', 'provided.al2' = 'provided.al2', 'nodejs18.x' = 'nodejs18.x', 'python3.10' = 'python3.10', java17 = 'java17', 'ruby3.2' = 'ruby3.2', 'python3.11' = 'python3.11' }


	/** The VPC security groups and subnets that are attached to a Lambda function. */
	export interface VpcConfigResponse {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
		VpcId?: string;
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
		TargetArn?: string;
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


	/** The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error. */
	export interface EnvironmentResponse {
		Variables?: EnvironmentVariables;
		Error?: EnvironmentError;
	}

	/** The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error. */
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
		ErrorCode?: string;
		Message?: string;
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


	/** The function's X-Ray tracing configuration. */
	export interface TracingConfigResponse {
		Mode?: TracingMode;
	}

	/** The function's X-Ray tracing configuration. */
	export interface TracingConfigResponseFormProperties {
		Mode: FormControl<TracingMode | null | undefined>,
	}
	export function CreateTracingConfigResponseFormGroup() {
		return new FormGroup<TracingConfigResponseFormProperties>({
			Mode: new FormControl<TracingMode | null | undefined>(undefined),
		});

	}

	export enum TracingMode { Active = 'Active', PassThrough = 'PassThrough' }


	/** An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface Layer {
		Arn?: string;
		CodeSize?: number | null;
		SigningProfileVersionArn?: string;
		SigningJobArn?: string;
	}

	/** An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayerFormProperties {
		Arn: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
		SigningProfileVersionArn: FormControl<string | null | undefined>,
		SigningJobArn: FormControl<string | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			SigningProfileVersionArn: new FormControl<string | null | undefined>(undefined),
			SigningJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum State { Pending = 'Pending', Active = 'Active', Inactive = 'Inactive', Failed = 'Failed' }

	export enum StateReasonCode { Idle = 'Idle', Creating = 'Creating', Restoring = 'Restoring', EniLimitExceeded = 'EniLimitExceeded', InsufficientRolePermissions = 'InsufficientRolePermissions', InvalidConfiguration = 'InvalidConfiguration', InternalError = 'InternalError', SubnetOutOfIPAddresses = 'SubnetOutOfIPAddresses', InvalidSubnet = 'InvalidSubnet', InvalidSecurityGroup = 'InvalidSecurityGroup', ImageDeleted = 'ImageDeleted', ImageAccessDenied = 'ImageAccessDenied', InvalidImage = 'InvalidImage', KMSKeyAccessDenied = 'KMSKeyAccessDenied', KMSKeyNotFound = 'KMSKeyNotFound', InvalidStateKMSKey = 'InvalidStateKMSKey', DisabledKMSKey = 'DisabledKMSKey', EFSIOError = 'EFSIOError', EFSMountConnectivityError = 'EFSMountConnectivityError', EFSMountFailure = 'EFSMountFailure', EFSMountTimeout = 'EFSMountTimeout', InvalidRuntime = 'InvalidRuntime', InvalidZipFileException = 'InvalidZipFileException', FunctionError = 'FunctionError' }

	export enum LastUpdateStatus { Successful = 'Successful', Failed = 'Failed', InProgress = 'InProgress' }

	export enum LastUpdateStatusReasonCode { EniLimitExceeded = 'EniLimitExceeded', InsufficientRolePermissions = 'InsufficientRolePermissions', InvalidConfiguration = 'InvalidConfiguration', InternalError = 'InternalError', SubnetOutOfIPAddresses = 'SubnetOutOfIPAddresses', InvalidSubnet = 'InvalidSubnet', InvalidSecurityGroup = 'InvalidSecurityGroup', ImageDeleted = 'ImageDeleted', ImageAccessDenied = 'ImageAccessDenied', InvalidImage = 'InvalidImage', KMSKeyAccessDenied = 'KMSKeyAccessDenied', KMSKeyNotFound = 'KMSKeyNotFound', InvalidStateKMSKey = 'InvalidStateKMSKey', DisabledKMSKey = 'DisabledKMSKey', EFSIOError = 'EFSIOError', EFSMountConnectivityError = 'EFSMountConnectivityError', EFSMountFailure = 'EFSMountFailure', EFSMountTimeout = 'EFSMountTimeout', InvalidRuntime = 'InvalidRuntime', InvalidZipFileException = 'InvalidZipFileException', FunctionError = 'FunctionError' }


	/** Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>. */
	export interface FileSystemConfig {

		/** Required */
		Arn: string;

		/** Required */
		LocalMountPath: string;
	}

	/** Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>. */
	export interface FileSystemConfigFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		LocalMountPath: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemConfigFormGroup() {
		return new FormGroup<FileSystemConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PackageType { Zip = 'Zip', Image = 'Image' }


	/** Response to a <code>GetFunctionConfiguration</code> request. */
	export interface ImageConfigResponse {
		ImageConfig?: ImageConfig;
		Error?: ImageConfigError;
	}

	/** Response to a <code>GetFunctionConfiguration</code> request. */
	export interface ImageConfigResponseFormProperties {
	}
	export function CreateImageConfigResponseFormGroup() {
		return new FormGroup<ImageConfigResponseFormProperties>({
		});

	}


	/** Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>. */
	export interface ImageConfig {
		EntryPoint?: Array<string>;
		Command?: Array<string>;
		WorkingDirectory?: string;
	}

	/** Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>. */
	export interface ImageConfigFormProperties {
		WorkingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigFormGroup() {
		return new FormGroup<ImageConfigFormProperties>({
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response to <code>GetFunctionConfiguration</code>. */
	export interface ImageConfigError {
		ErrorCode?: string;
		Message?: string;
	}

	/** Error response to <code>GetFunctionConfiguration</code>. */
	export interface ImageConfigErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigErrorFormGroup() {
		return new FormGroup<ImageConfigErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Architecture { x86_64 = 'x86_64', arm64 = 'arm64' }


	/** The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB. */
	export interface EphemeralStorage {

		/** Required */
		Size: number;
	}

	/** The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB. */
	export interface EphemeralStorageFormProperties {

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateEphemeralStorageFormGroup() {
		return new FormGroup<EphemeralStorageFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting. */
	export interface SnapStartResponse {
		ApplyOn?: SnapStartApplyOn;
		OptimizationStatus?: SnapStartOptimizationStatus;
	}

	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting. */
	export interface SnapStartResponseFormProperties {
		ApplyOn: FormControl<SnapStartApplyOn | null | undefined>,
		OptimizationStatus: FormControl<SnapStartOptimizationStatus | null | undefined>,
	}
	export function CreateSnapStartResponseFormGroup() {
		return new FormGroup<SnapStartResponseFormProperties>({
			ApplyOn: new FormControl<SnapStartApplyOn | null | undefined>(undefined),
			OptimizationStatus: new FormControl<SnapStartOptimizationStatus | null | undefined>(undefined),
		});

	}

	export enum SnapStartApplyOn { PublishedVersions = 'PublishedVersions', None = 'None' }

	export enum SnapStartOptimizationStatus { On = 'On', Off = 'Off' }


	/** The ARN of the runtime and any errors that occured. */
	export interface RuntimeVersionConfig {
		RuntimeVersionArn?: string;
		Error?: RuntimeVersionError;
	}

	/** The ARN of the runtime and any errors that occured. */
	export interface RuntimeVersionConfigFormProperties {
		RuntimeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeVersionConfigFormGroup() {
		return new FormGroup<RuntimeVersionConfigFormProperties>({
			RuntimeVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Any error returned when the runtime version information for the function could not be retrieved. */
	export interface RuntimeVersionError {
		ErrorCode?: string;
		Message?: string;
	}

	/** Any error returned when the runtime version information for the function could not be retrieved. */
	export interface RuntimeVersionErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeVersionErrorFormGroup() {
		return new FormGroup<RuntimeVersionErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CodeStorageExceededException {
	}
	export interface CodeStorageExceededExceptionFormProperties {
	}
	export function CreateCodeStorageExceededExceptionFormGroup() {
		return new FormGroup<CodeStorageExceededExceptionFormProperties>({
		});

	}

	export interface CodeVerificationFailedException {
	}
	export interface CodeVerificationFailedExceptionFormProperties {
	}
	export function CreateCodeVerificationFailedExceptionFormGroup() {
		return new FormGroup<CodeVerificationFailedExceptionFormProperties>({
		});

	}

	export interface InvalidCodeSignatureException {
	}
	export interface InvalidCodeSignatureExceptionFormProperties {
	}
	export function CreateInvalidCodeSignatureExceptionFormGroup() {
		return new FormGroup<InvalidCodeSignatureExceptionFormProperties>({
		});

	}

	export interface CodeSigningConfigNotFoundException {
	}
	export interface CodeSigningConfigNotFoundExceptionFormProperties {
	}
	export function CreateCodeSigningConfigNotFoundExceptionFormGroup() {
		return new FormGroup<CodeSigningConfigNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateFunctionUrlConfigResponse {

		/** Required */
		FunctionUrl: string;

		/** Required */
		FunctionArn: string;

		/** Required */
		AuthType: FunctionUrlAuthType;
		Cors?: Cors;

		/** Required */
		CreationTime: string;
		InvokeMode?: InvokeMode;
	}
	export interface CreateFunctionUrlConfigResponseFormProperties {

		/** Required */
		FunctionUrl: FormControl<string | null | undefined>,

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,

		/** Required */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateCreateFunctionUrlConfigResponseFormGroup() {
		return new FormGroup<CreateFunctionUrlConfigResponseFormProperties>({
			FunctionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export enum FunctionUrlAuthType { NONE = 'NONE', AWS_IAM = 'AWS_IAM' }


	/** The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL. */
	export interface Cors {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}

	/** The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL. */
	export interface CorsFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateCorsFormGroup() {
		return new FormGroup<CorsFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InvokeMode { BUFFERED = 'BUFFERED', RESPONSE_STREAM = 'RESPONSE_STREAM' }

	export interface DeleteCodeSigningConfigResponse {
	}
	export interface DeleteCodeSigningConfigResponseFormProperties {
	}
	export function CreateDeleteCodeSigningConfigResponseFormGroup() {
		return new FormGroup<DeleteCodeSigningConfigResponseFormProperties>({
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
		AccountLimit?: AccountLimit;
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
		UnreservedConcurrentExecutions?: number | null;
	}

	/** Limits that are related to concurrency and storage. All file and storage sizes are in bytes. */
	export interface AccountLimitFormProperties {
		TotalCodeSize: FormControl<number | null | undefined>,
		CodeSizeUnzipped: FormControl<number | null | undefined>,
		CodeSizeZipped: FormControl<number | null | undefined>,
		ConcurrentExecutions: FormControl<number | null | undefined>,
		UnreservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateAccountLimitFormGroup() {
		return new FormGroup<AccountLimitFormProperties>({
			TotalCodeSize: new FormControl<number | null | undefined>(undefined),
			CodeSizeUnzipped: new FormControl<number | null | undefined>(undefined),
			CodeSizeZipped: new FormControl<number | null | undefined>(undefined),
			ConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			UnreservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
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

	export interface GetCodeSigningConfigResponse {

		/** Required */
		CodeSigningConfig: CodeSigningConfig;
	}
	export interface GetCodeSigningConfigResponseFormProperties {
	}
	export function CreateGetCodeSigningConfigResponseFormGroup() {
		return new FormGroup<GetCodeSigningConfigResponseFormProperties>({
		});

	}

	export interface GetFunctionResponse {
		Configuration?: FunctionConfiguration;
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
		RepositoryType?: string;
		Location?: string;
		ImageUri?: string;
		ResolvedImageUri?: string;
	}

	/** Details about a function's deployment package. */
	export interface FunctionCodeLocationFormProperties {
		RepositoryType: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		ImageUri: FormControl<string | null | undefined>,
		ResolvedImageUri: FormControl<string | null | undefined>,
	}
	export function CreateFunctionCodeLocationFormGroup() {
		return new FormGroup<FunctionCodeLocationFormProperties>({
			RepositoryType: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			ImageUri: new FormControl<string | null | undefined>(undefined),
			ResolvedImageUri: new FormControl<string | null | undefined>(undefined),
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
		ReservedConcurrentExecutions?: number | null;
	}
	export interface ConcurrencyFormProperties {
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateConcurrencyFormGroup() {
		return new FormGroup<ConcurrencyFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFunctionCodeSigningConfigResponse {

		/** Required */
		CodeSigningConfigArn: string;

		/** Required */
		FunctionName: string;
	}
	export interface GetFunctionCodeSigningConfigResponseFormProperties {

		/** Required */
		CodeSigningConfigArn: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreateGetFunctionCodeSigningConfigResponseFormGroup() {
		return new FormGroup<GetFunctionCodeSigningConfigResponseFormProperties>({
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFunctionConcurrencyResponse {
		ReservedConcurrentExecutions?: number | null;
	}
	export interface GetFunctionConcurrencyResponseFormProperties {
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateGetFunctionConcurrencyResponseFormGroup() {
		return new FormGroup<GetFunctionConcurrencyResponseFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FunctionEventInvokeConfig {
		LastModified?: Date;
		FunctionArn?: string;
		MaximumRetryAttempts?: number | null;
		MaximumEventAgeInSeconds?: number | null;
		DestinationConfig?: DestinationConfig;
	}
	export interface FunctionEventInvokeConfigFormProperties {
		LastModified: FormControl<Date | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateFunctionEventInvokeConfigFormGroup() {
		return new FormGroup<FunctionEventInvokeConfigFormProperties>({
			LastModified: new FormControl<Date | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFunctionUrlConfigResponse {

		/** Required */
		FunctionUrl: string;

		/** Required */
		FunctionArn: string;

		/** Required */
		AuthType: FunctionUrlAuthType;
		Cors?: Cors;

		/** Required */
		CreationTime: string;

		/** Required */
		LastModifiedTime: string;
		InvokeMode?: InvokeMode;
	}
	export interface GetFunctionUrlConfigResponseFormProperties {

		/** Required */
		FunctionUrl: FormControl<string | null | undefined>,

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,

		/** Required */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<string | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateGetFunctionUrlConfigResponseFormGroup() {
		return new FormGroup<GetFunctionUrlConfigResponseFormProperties>({
			FunctionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export interface GetLayerVersionResponse {
		Content?: LayerVersionContentOutput;
		LayerArn?: string;
		LayerVersionArn?: string;
		Description?: string;
		CreatedDate?: string;
		Version?: number | null;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
		CompatibleArchitectures?: Array<Architecture>;
	}
	export interface GetLayerVersionResponseFormProperties {
		LayerArn: FormControl<string | null | undefined>,
		LayerVersionArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreateGetLayerVersionResponseFormGroup() {
		return new FormGroup<GetLayerVersionResponseFormProperties>({
			LayerArn: new FormControl<string | null | undefined>(undefined),
			LayerVersionArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayerVersionContentOutput {
		Location?: string;
		CodeSha256?: string;
		CodeSize?: number | null;
		SigningProfileVersionArn?: string;
		SigningJobArn?: string;
	}

	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayerVersionContentOutputFormProperties {
		Location: FormControl<string | null | undefined>,
		CodeSha256: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
		SigningProfileVersionArn: FormControl<string | null | undefined>,
		SigningJobArn: FormControl<string | null | undefined>,
	}
	export function CreateLayerVersionContentOutputFormGroup() {
		return new FormGroup<LayerVersionContentOutputFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined),
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
			SigningProfileVersionArn: new FormControl<string | null | undefined>(undefined),
			SigningJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLayerVersionPolicyResponse {
		Policy?: string;
		RevisionId?: string;
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
		Policy?: string;
		RevisionId?: string;
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
		RequestedProvisionedConcurrentExecutions?: number | null;
		AvailableProvisionedConcurrentExecutions?: number | null;
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: ProvisionedConcurrencyStatusEnum;
		StatusReason?: string;
		LastModified?: string;
	}
	export interface GetProvisionedConcurrencyConfigResponseFormProperties {
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateGetProvisionedConcurrencyConfigResponseFormGroup() {
		return new FormGroup<GetProvisionedConcurrencyConfigResponseFormProperties>({
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisionedConcurrencyStatusEnum { IN_PROGRESS = 'IN_PROGRESS', READY = 'READY', FAILED = 'FAILED' }

	export interface ProvisionedConcurrencyConfigNotFoundException {
	}
	export interface ProvisionedConcurrencyConfigNotFoundExceptionFormProperties {
	}
	export function CreateProvisionedConcurrencyConfigNotFoundExceptionFormGroup() {
		return new FormGroup<ProvisionedConcurrencyConfigNotFoundExceptionFormProperties>({
		});

	}

	export interface GetRuntimeManagementConfigResponse {
		UpdateRuntimeOn?: UpdateRuntimeOn;
		RuntimeVersionArn?: string;
		FunctionArn?: string;
	}
	export interface GetRuntimeManagementConfigResponseFormProperties {
		UpdateRuntimeOn: FormControl<UpdateRuntimeOn | null | undefined>,
		RuntimeVersionArn: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRuntimeManagementConfigResponseFormGroup() {
		return new FormGroup<GetRuntimeManagementConfigResponseFormProperties>({
			UpdateRuntimeOn: new FormControl<UpdateRuntimeOn | null | undefined>(undefined),
			RuntimeVersionArn: new FormControl<string | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateRuntimeOn { Auto = 'Auto', Manual = 'Manual', FunctionUpdate = 'FunctionUpdate' }

	export interface InvocationResponse {
		StatusCode?: number | null;
		Payload?: string;
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

	export interface EFSMountConnectivityException {
	}
	export interface EFSMountConnectivityExceptionFormProperties {
	}
	export function CreateEFSMountConnectivityExceptionFormGroup() {
		return new FormGroup<EFSMountConnectivityExceptionFormProperties>({
		});

	}

	export interface EFSMountFailureException {
	}
	export interface EFSMountFailureExceptionFormProperties {
	}
	export function CreateEFSMountFailureExceptionFormGroup() {
		return new FormGroup<EFSMountFailureExceptionFormProperties>({
		});

	}

	export interface EFSMountTimeoutException {
	}
	export interface EFSMountTimeoutExceptionFormProperties {
	}
	export function CreateEFSMountTimeoutExceptionFormGroup() {
		return new FormGroup<EFSMountTimeoutExceptionFormProperties>({
		});

	}

	export interface EFSIOException {
	}
	export interface EFSIOExceptionFormProperties {
	}
	export function CreateEFSIOExceptionFormGroup() {
		return new FormGroup<EFSIOExceptionFormProperties>({
		});

	}

	export interface SnapStartException {
	}
	export interface SnapStartExceptionFormProperties {
	}
	export function CreateSnapStartExceptionFormGroup() {
		return new FormGroup<SnapStartExceptionFormProperties>({
		});

	}

	export interface SnapStartTimeoutException {
	}
	export interface SnapStartTimeoutExceptionFormProperties {
	}
	export function CreateSnapStartTimeoutExceptionFormGroup() {
		return new FormGroup<SnapStartTimeoutExceptionFormProperties>({
		});

	}

	export interface SnapStartNotReadyException {
	}
	export interface SnapStartNotReadyExceptionFormProperties {
	}
	export function CreateSnapStartNotReadyExceptionFormGroup() {
		return new FormGroup<SnapStartNotReadyExceptionFormProperties>({
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

	export interface RecursiveInvocationException {
	}
	export interface RecursiveInvocationExceptionFormProperties {
	}
	export function CreateRecursiveInvocationExceptionFormGroup() {
		return new FormGroup<RecursiveInvocationExceptionFormProperties>({
		});

	}


	/** A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. */
	export interface InvokeAsyncResponse {
		Status?: number | null;
	}

	/** A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. */
	export interface InvokeAsyncResponseFormProperties {
		Status: FormControl<number | null | undefined>,
	}
	export function CreateInvokeAsyncResponseFormGroup() {
		return new FormGroup<InvokeAsyncResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvokeWithResponseStreamResponse {
		StatusCode?: number | null;
		EventStream?: InvokeWithResponseStreamResponseEvent;
	}
	export interface InvokeWithResponseStreamResponseFormProperties {
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInvokeWithResponseStreamResponseFormGroup() {
		return new FormGroup<InvokeWithResponseStreamResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object. */
	export interface InvokeWithResponseStreamResponseEvent {
		PayloadChunk?: InvokeResponseStreamUpdate;
		InvokeComplete?: InvokeWithResponseStreamCompleteEvent;
	}

	/** An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object. */
	export interface InvokeWithResponseStreamResponseEventFormProperties {
	}
	export function CreateInvokeWithResponseStreamResponseEventFormGroup() {
		return new FormGroup<InvokeWithResponseStreamResponseEventFormProperties>({
		});

	}


	/** A chunk of the streamed response payload. */
	export interface InvokeResponseStreamUpdate {
		Payload?: string;
	}

	/** A chunk of the streamed response payload. */
	export interface InvokeResponseStreamUpdateFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvokeResponseStreamUpdateFormGroup() {
		return new FormGroup<InvokeResponseStreamUpdateFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response confirming that the event stream is complete. */
	export interface InvokeWithResponseStreamCompleteEvent {
		ErrorCode?: string;
		ErrorDetails?: string;
		LogResult?: string;
	}

	/** A response confirming that the event stream is complete. */
	export interface InvokeWithResponseStreamCompleteEventFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorDetails: FormControl<string | null | undefined>,
		LogResult: FormControl<string | null | undefined>,
	}
	export function CreateInvokeWithResponseStreamCompleteEventFormGroup() {
		return new FormGroup<InvokeWithResponseStreamCompleteEventFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorDetails: new FormControl<string | null | undefined>(undefined),
			LogResult: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesResponse {
		NextMarker?: string;
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

	export interface ListCodeSigningConfigsResponse {
		NextMarker?: string;
		CodeSigningConfigs?: Array<CodeSigningConfig>;
	}
	export interface ListCodeSigningConfigsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCodeSigningConfigsResponseFormGroup() {
		return new FormGroup<ListCodeSigningConfigsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventSourceMappingsResponse {
		NextMarker?: string;
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
		NextMarker?: string;
	}
	export interface ListFunctionEventInvokeConfigsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionEventInvokeConfigsResponseFormGroup() {
		return new FormGroup<ListFunctionEventInvokeConfigsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionUrlConfigsResponse {

		/** Required */
		FunctionUrlConfigs: Array<FunctionUrlConfig>;
		NextMarker?: string;
	}
	export interface ListFunctionUrlConfigsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionUrlConfigsResponseFormGroup() {
		return new FormGroup<ListFunctionUrlConfigsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a Lambda function URL. */
	export interface FunctionUrlConfig {

		/** Required */
		FunctionUrl: string;

		/** Required */
		FunctionArn: string;

		/** Required */
		CreationTime: string;

		/** Required */
		LastModifiedTime: string;
		Cors?: Cors;

		/** Required */
		AuthType: FunctionUrlAuthType;
		InvokeMode?: InvokeMode;
	}

	/** Details about a Lambda function URL. */
	export interface FunctionUrlConfigFormProperties {

		/** Required */
		FunctionUrl: FormControl<string | null | undefined>,

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<string | null | undefined>,

		/** Required */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateFunctionUrlConfigFormGroup() {
		return new FormGroup<FunctionUrlConfigFormProperties>({
			FunctionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}


	/** A list of Lambda functions. */
	export interface ListFunctionsResponse {
		NextMarker?: string;
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

	export interface ListFunctionsByCodeSigningConfigResponse {
		NextMarker?: string;
		FunctionArns?: Array<string>;
	}
	export interface ListFunctionsByCodeSigningConfigResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsByCodeSigningConfigResponseFormGroup() {
		return new FormGroup<ListFunctionsByCodeSigningConfigResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLayerVersionsResponse {
		NextMarker?: string;
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


	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayerVersionsListItem {
		LayerVersionArn?: string;
		Version?: number | null;
		Description?: string;
		CreatedDate?: string;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
		CompatibleArchitectures?: Array<Architecture>;
	}

	/** Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayerVersionsListItemFormProperties {
		LayerVersionArn: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreateLayerVersionsListItemFormGroup() {
		return new FormGroup<LayerVersionsListItemFormProperties>({
			LayerVersionArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLayersResponse {
		NextMarker?: string;
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


	/** Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayersListItem {
		LayerName?: string;
		LayerArn?: string;
		LatestMatchingVersion?: LayerVersionsListItem;
	}

	/** Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. */
	export interface LayersListItemFormProperties {
		LayerName: FormControl<string | null | undefined>,
		LayerArn: FormControl<string | null | undefined>,
	}
	export function CreateLayersListItemFormGroup() {
		return new FormGroup<LayersListItemFormProperties>({
			LayerName: new FormControl<string | null | undefined>(undefined),
			LayerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisionedConcurrencyConfigsResponse {
		ProvisionedConcurrencyConfigs?: Array<ProvisionedConcurrencyConfigListItem>;
		NextMarker?: string;
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
		FunctionArn?: string;
		RequestedProvisionedConcurrentExecutions?: number | null;
		AvailableProvisionedConcurrentExecutions?: number | null;
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: ProvisionedConcurrencyStatusEnum;
		StatusReason?: string;
		LastModified?: string;
	}

	/** Details about the provisioned concurrency configuration for a function alias or version. */
	export interface ProvisionedConcurrencyConfigListItemFormProperties {
		FunctionArn: FormControl<string | null | undefined>,
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedConcurrencyConfigListItemFormGroup() {
		return new FormGroup<ProvisionedConcurrencyConfigListItemFormProperties>({
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>(undefined),
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
		NextMarker?: string;
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
		Content?: LayerVersionContentOutput;
		LayerArn?: string;
		LayerVersionArn?: string;
		Description?: string;
		CreatedDate?: string;
		Version?: number | null;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
		CompatibleArchitectures?: Array<Architecture>;
	}
	export interface PublishLayerVersionResponseFormProperties {
		LayerArn: FormControl<string | null | undefined>,
		LayerVersionArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionResponseFormGroup() {
		return new FormGroup<PublishLayerVersionResponseFormProperties>({
			LayerArn: new FormControl<string | null | undefined>(undefined),
			LayerVersionArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFunctionCodeSigningConfigResponse {

		/** Required */
		CodeSigningConfigArn: string;

		/** Required */
		FunctionName: string;
	}
	export interface PutFunctionCodeSigningConfigResponseFormProperties {

		/** Required */
		CodeSigningConfigArn: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
	}
	export function CreatePutFunctionCodeSigningConfigResponseFormGroup() {
		return new FormGroup<PutFunctionCodeSigningConfigResponseFormProperties>({
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProvisionedConcurrencyConfigResponse {
		RequestedProvisionedConcurrentExecutions?: number | null;
		AvailableProvisionedConcurrentExecutions?: number | null;
		AllocatedProvisionedConcurrentExecutions?: number | null;
		Status?: ProvisionedConcurrencyStatusEnum;
		StatusReason?: string;
		LastModified?: string;
	}
	export interface PutProvisionedConcurrencyConfigResponseFormProperties {
		RequestedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AvailableProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		AllocatedProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
		Status: FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreatePutProvisionedConcurrencyConfigResponseFormGroup() {
		return new FormGroup<PutProvisionedConcurrencyConfigResponseFormProperties>({
			RequestedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AvailableProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			AllocatedProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ProvisionedConcurrencyStatusEnum | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRuntimeManagementConfigResponse {

		/** Required */
		UpdateRuntimeOn: UpdateRuntimeOn;

		/** Required */
		FunctionArn: string;
		RuntimeVersionArn?: string;
	}
	export interface PutRuntimeManagementConfigResponseFormProperties {

		/** Required */
		UpdateRuntimeOn: FormControl<UpdateRuntimeOn | null | undefined>,

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,
		RuntimeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuntimeManagementConfigResponseFormGroup() {
		return new FormGroup<PutRuntimeManagementConfigResponseFormProperties>({
			UpdateRuntimeOn: new FormControl<UpdateRuntimeOn | null | undefined>(undefined, [Validators.required]),
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuntimeVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCodeSigningConfigResponse {

		/** Required */
		CodeSigningConfig: CodeSigningConfig;
	}
	export interface UpdateCodeSigningConfigResponseFormProperties {
	}
	export function CreateUpdateCodeSigningConfigResponseFormGroup() {
		return new FormGroup<UpdateCodeSigningConfigResponseFormProperties>({
		});

	}

	export interface UpdateFunctionUrlConfigResponse {

		/** Required */
		FunctionUrl: string;

		/** Required */
		FunctionArn: string;

		/** Required */
		AuthType: FunctionUrlAuthType;
		Cors?: Cors;

		/** Required */
		CreationTime: string;

		/** Required */
		LastModifiedTime: string;
		InvokeMode?: InvokeMode;
	}
	export interface UpdateFunctionUrlConfigResponseFormProperties {

		/** Required */
		FunctionUrl: FormControl<string | null | undefined>,

		/** Required */
		FunctionArn: FormControl<string | null | undefined>,

		/** Required */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<string | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateUpdateFunctionUrlConfigResponseFormGroup() {
		return new FormGroup<UpdateFunctionUrlConfigResponseFormProperties>({
			FunctionUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export interface AddLayerVersionPermissionRequest {

		/** Required */
		StatementId: string;

		/** Required */
		Action: string;

		/** Required */
		Principal: string;
		OrganizationId?: string;
	}
	export interface AddLayerVersionPermissionRequestFormProperties {

		/** Required */
		StatementId: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateAddLayerVersionPermissionRequestFormGroup() {
		return new FormGroup<AddLayerVersionPermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddPermissionRequest {

		/** Required */
		StatementId: string;

		/** Required */
		Action: string;

		/** Required */
		Principal: string;
		SourceArn?: string;
		SourceAccount?: string;
		EventSourceToken?: string;
		RevisionId?: string;
		PrincipalOrgID?: string;
		FunctionUrlAuthType?: FunctionUrlAuthType;
	}
	export interface AddPermissionRequestFormProperties {

		/** Required */
		StatementId: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<string | null | undefined>,

		/** Required */
		Principal: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		SourceAccount: FormControl<string | null | undefined>,
		EventSourceToken: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
		PrincipalOrgID: FormControl<string | null | undefined>,
		FunctionUrlAuthType: FormControl<FunctionUrlAuthType | null | undefined>,
	}
	export function CreateAddPermissionRequestFormGroup() {
		return new FormGroup<AddPermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceAccount: new FormControl<string | null | undefined>(undefined),
			EventSourceToken: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			PrincipalOrgID: new FormControl<string | null | undefined>(undefined),
			FunctionUrlAuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined),
		});

	}

	export interface CreateAliasRequest {

		/** Required */
		Name: string;

		/** Required */
		FunctionVersion: string;
		Description?: string;
		RoutingConfig?: AliasRoutingConfiguration;
	}
	export interface CreateAliasRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		FunctionVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCodeSigningConfigRequest {
		Description?: string;

		/** Required */
		AllowedPublishers: AllowedPublishers;
		CodeSigningPolicies?: CodeSigningPolicies;
	}
	export interface CreateCodeSigningConfigRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeSigningConfigRequestFormGroup() {
		return new FormGroup<CreateCodeSigningConfigRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventSourceMappingRequest {
		EventSourceArn?: string;

		/** Required */
		FunctionName: string;
		Enabled?: boolean | null;
		BatchSize?: number | null;
		FilterCriteria?: FilterCriteria;
		MaximumBatchingWindowInSeconds?: number | null;
		ParallelizationFactor?: number | null;
		StartingPosition?: EventSourcePosition;
		StartingPositionTimestamp?: Date;
		DestinationConfig?: DestinationConfig;
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;
		MaximumRetryAttempts?: number | null;
		TumblingWindowInSeconds?: number | null;
		Topics?: Array<string>;
		Queues?: Array<string>;
		SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
		SelfManagedEventSource?: SelfManagedEventSource;
		FunctionResponseTypes?: Array<FunctionResponseType>;
		AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
		SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
		ScalingConfig?: ScalingConfig;
		DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
	}
	export interface CreateEventSourceMappingRequestFormProperties {
		EventSourceArn: FormControl<string | null | undefined>,

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,
		StartingPosition: FormControl<EventSourcePosition | null | undefined>,
		StartingPositionTimestamp: FormControl<Date | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		TumblingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateEventSourceMappingRequestFormGroup() {
		return new FormGroup<CreateEventSourceMappingRequestFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
			StartingPosition: new FormControl<EventSourcePosition | null | undefined>(undefined),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			TumblingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image. */
	export interface FunctionCode {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ImageUri?: string;
	}

	/** The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image. */
	export interface FunctionCodeFormProperties {
		ZipFile: FormControl<string | null | undefined>,
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ImageUri: FormControl<string | null | undefined>,
	}
	export function CreateFunctionCodeFormGroup() {
		return new FormGroup<FunctionCodeFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			ImageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>. */
	export interface VpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>. */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}


	/** A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. */
	export interface Environment {
		Variables?: EnvironmentVariables;
	}

	/** A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. */
	export interface EnvironmentFormProperties {
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
		});

	}


	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
	export interface TracingConfig {
		Mode?: TracingMode;
	}

	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
	export interface TracingConfigFormProperties {
		Mode: FormControl<TracingMode | null | undefined>,
	}
	export function CreateTracingConfigFormGroup() {
		return new FormGroup<TracingConfigFormProperties>({
			Mode: new FormControl<TracingMode | null | undefined>(undefined),
		});

	}


	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. */
	export interface SnapStart {
		ApplyOn?: SnapStartApplyOn;
	}

	/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. */
	export interface SnapStartFormProperties {
		ApplyOn: FormControl<SnapStartApplyOn | null | undefined>,
	}
	export function CreateSnapStartFormGroup() {
		return new FormGroup<SnapStartFormProperties>({
			ApplyOn: new FormControl<SnapStartApplyOn | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionRequest {

		/** Required */
		FunctionName: string;
		Runtime?: Runtime;

		/** Required */
		Role: string;
		Handler?: string;

		/** Required */
		Code: FunctionCode;
		Description?: string;
		Timeout?: number | null;
		MemorySize?: number | null;
		Publish?: boolean | null;
		VpcConfig?: VpcConfig;
		PackageType?: PackageType;
		DeadLetterConfig?: DeadLetterConfig;
		Environment?: Environment;
		KMSKeyArn?: string;
		TracingConfig?: TracingConfig;
		Tags?: Tags;
		Layers?: Array<string>;
		FileSystemConfigs?: Array<FileSystemConfig>;
		ImageConfig?: ImageConfig;
		CodeSigningConfigArn?: string;
		Architectures?: Array<Architecture>;
		EphemeralStorage?: EphemeralStorage;
		SnapStart?: SnapStart;
	}
	export interface CreateFunctionRequestFormProperties {

		/** Required */
		FunctionName: FormControl<string | null | undefined>,
		Runtime: FormControl<Runtime | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		Publish: FormControl<boolean | null | undefined>,
		PackageType: FormControl<PackageType | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
		CodeSigningConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionRequestFormGroup() {
		return new FormGroup<CreateFunctionRequestFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Handler: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			PackageType: new FormControl<PackageType | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionUrlConfigRequest {

		/** Required */
		AuthType: FunctionUrlAuthType;
		Cors?: Cors;
		InvokeMode?: InvokeMode;
	}
	export interface CreateFunctionUrlConfigRequestFormProperties {

		/** Required */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateCreateFunctionUrlConfigRequestFormGroup() {
		return new FormGroup<CreateFunctionUrlConfigRequestFormProperties>({
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export interface DeleteAliasRequest {
	}
	export interface DeleteAliasRequestFormProperties {
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
		});

	}

	export interface DeleteCodeSigningConfigRequest {
	}
	export interface DeleteCodeSigningConfigRequestFormProperties {
	}
	export function CreateDeleteCodeSigningConfigRequestFormGroup() {
		return new FormGroup<DeleteCodeSigningConfigRequestFormProperties>({
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

	export interface DeleteFunctionCodeSigningConfigRequest {
	}
	export interface DeleteFunctionCodeSigningConfigRequestFormProperties {
	}
	export function CreateDeleteFunctionCodeSigningConfigRequestFormGroup() {
		return new FormGroup<DeleteFunctionCodeSigningConfigRequestFormProperties>({
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

	export interface DeleteFunctionUrlConfigRequest {
	}
	export interface DeleteFunctionUrlConfigRequestFormProperties {
	}
	export function CreateDeleteFunctionUrlConfigRequestFormGroup() {
		return new FormGroup<DeleteFunctionUrlConfigRequestFormProperties>({
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

	export enum EndPointType { KAFKA_BOOTSTRAP_SERVERS = 'KAFKA_BOOTSTRAP_SERVERS' }

	export enum FunctionVersion { ALL = 'ALL' }

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

	export interface GetCodeSigningConfigRequest {
	}
	export interface GetCodeSigningConfigRequestFormProperties {
	}
	export function CreateGetCodeSigningConfigRequestFormGroup() {
		return new FormGroup<GetCodeSigningConfigRequestFormProperties>({
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

	export interface GetFunctionCodeSigningConfigRequest {
	}
	export interface GetFunctionCodeSigningConfigRequestFormProperties {
	}
	export function CreateGetFunctionCodeSigningConfigRequestFormGroup() {
		return new FormGroup<GetFunctionCodeSigningConfigRequestFormProperties>({
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

	export interface GetFunctionUrlConfigRequest {
	}
	export interface GetFunctionUrlConfigRequestFormProperties {
	}
	export function CreateGetFunctionUrlConfigRequestFormGroup() {
		return new FormGroup<GetFunctionUrlConfigRequestFormProperties>({
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

	export interface GetRuntimeManagementConfigRequest {
	}
	export interface GetRuntimeManagementConfigRequestFormProperties {
	}
	export function CreateGetRuntimeManagementConfigRequestFormGroup() {
		return new FormGroup<GetRuntimeManagementConfigRequestFormProperties>({
		});

	}

	export enum InvocationType { Event = 'Event', RequestResponse = 'RequestResponse', DryRun = 'DryRun' }

	export enum LogType { None = 'None', Tail = 'Tail' }

	export interface InvocationRequest {
		Payload?: string;
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

	export enum ResponseStreamingInvocationType { RequestResponse = 'RequestResponse', DryRun = 'DryRun' }

	export interface InvokeWithResponseStreamRequest {
		Payload?: string;
	}
	export interface InvokeWithResponseStreamRequestFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvokeWithResponseStreamRequestFormGroup() {
		return new FormGroup<InvokeWithResponseStreamRequestFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
	export interface LayerVersionContentInput {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}

	/** A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly. */
	export interface LayerVersionContentInputFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateLayerVersionContentInputFormGroup() {
		return new FormGroup<LayerVersionContentInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
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

	export interface ListCodeSigningConfigsRequest {
	}
	export interface ListCodeSigningConfigsRequestFormProperties {
	}
	export function CreateListCodeSigningConfigsRequestFormGroup() {
		return new FormGroup<ListCodeSigningConfigsRequestFormProperties>({
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

	export interface ListFunctionUrlConfigsRequest {
	}
	export interface ListFunctionUrlConfigsRequestFormProperties {
	}
	export function CreateListFunctionUrlConfigsRequestFormGroup() {
		return new FormGroup<ListFunctionUrlConfigsRequestFormProperties>({
		});

	}

	export interface ListFunctionsByCodeSigningConfigRequest {
	}
	export interface ListFunctionsByCodeSigningConfigRequestFormProperties {
	}
	export function CreateListFunctionsByCodeSigningConfigRequestFormGroup() {
		return new FormGroup<ListFunctionsByCodeSigningConfigRequestFormProperties>({
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
		Description?: string;

		/** Required */
		Content: LayerVersionContentInput;
		CompatibleRuntimes?: Array<Runtime>;
		LicenseInfo?: string;
		CompatibleArchitectures?: Array<Architecture>;
	}
	export interface PublishLayerVersionRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		LicenseInfo: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionRequestFormGroup() {
		return new FormGroup<PublishLayerVersionRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishVersionRequest {
		CodeSha256?: string;
		Description?: string;
		RevisionId?: string;
	}
	export interface PublishVersionRequestFormProperties {
		CodeSha256: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublishVersionRequestFormGroup() {
		return new FormGroup<PublishVersionRequestFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFunctionCodeSigningConfigRequest {

		/** Required */
		CodeSigningConfigArn: string;
	}
	export interface PutFunctionCodeSigningConfigRequestFormProperties {

		/** Required */
		CodeSigningConfigArn: FormControl<string | null | undefined>,
	}
	export function CreatePutFunctionCodeSigningConfigRequestFormGroup() {
		return new FormGroup<PutFunctionCodeSigningConfigRequestFormProperties>({
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutFunctionConcurrencyRequest {

		/** Required */
		ReservedConcurrentExecutions: number;
	}
	export interface PutFunctionConcurrencyRequestFormProperties {

		/** Required */
		ReservedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionConcurrencyRequestFormGroup() {
		return new FormGroup<PutFunctionConcurrencyRequestFormProperties>({
			ReservedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutFunctionEventInvokeConfigRequest {
		MaximumRetryAttempts?: number | null;
		MaximumEventAgeInSeconds?: number | null;
		DestinationConfig?: DestinationConfig;
	}
	export interface PutFunctionEventInvokeConfigRequestFormProperties {
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<PutFunctionEventInvokeConfigRequestFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutProvisionedConcurrencyConfigRequest {

		/** Required */
		ProvisionedConcurrentExecutions: number;
	}
	export interface PutProvisionedConcurrencyConfigRequestFormProperties {

		/** Required */
		ProvisionedConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreatePutProvisionedConcurrencyConfigRequestFormGroup() {
		return new FormGroup<PutProvisionedConcurrencyConfigRequestFormProperties>({
			ProvisionedConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRuntimeManagementConfigRequest {

		/** Required */
		UpdateRuntimeOn: UpdateRuntimeOn;
		RuntimeVersionArn?: string;
	}
	export interface PutRuntimeManagementConfigRequestFormProperties {

		/** Required */
		UpdateRuntimeOn: FormControl<UpdateRuntimeOn | null | undefined>,
		RuntimeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuntimeManagementConfigRequestFormGroup() {
		return new FormGroup<PutRuntimeManagementConfigRequestFormProperties>({
			UpdateRuntimeOn: new FormControl<UpdateRuntimeOn | null | undefined>(undefined, [Validators.required]),
			RuntimeVersionArn: new FormControl<string | null | undefined>(undefined),
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
		FunctionVersion?: string;
		Description?: string;
		RoutingConfig?: AliasRoutingConfiguration;
		RevisionId?: string;
	}
	export interface UpdateAliasRequestFormProperties {
		FunctionVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasRequestFormGroup() {
		return new FormGroup<UpdateAliasRequestFormProperties>({
			FunctionVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCodeSigningConfigRequest {
		Description?: string;
		AllowedPublishers?: AllowedPublishers;
		CodeSigningPolicies?: CodeSigningPolicies;
	}
	export interface UpdateCodeSigningConfigRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCodeSigningConfigRequestFormGroup() {
		return new FormGroup<UpdateCodeSigningConfigRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourceMappingRequest {
		FunctionName?: string;
		Enabled?: boolean | null;
		BatchSize?: number | null;
		FilterCriteria?: FilterCriteria;
		MaximumBatchingWindowInSeconds?: number | null;
		DestinationConfig?: DestinationConfig;
		MaximumRecordAgeInSeconds?: number | null;
		BisectBatchOnFunctionError?: boolean | null;
		MaximumRetryAttempts?: number | null;
		ParallelizationFactor?: number | null;
		SourceAccessConfigurations?: Array<SourceAccessConfiguration>;
		TumblingWindowInSeconds?: number | null;
		FunctionResponseTypes?: Array<FunctionResponseType>;
		ScalingConfig?: ScalingConfig;
		DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
	}
	export interface UpdateEventSourceMappingRequestFormProperties {
		FunctionName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,
		TumblingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingRequestFormGroup() {
		return new FormGroup<UpdateEventSourceMappingRequestFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
			TumblingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionCodeRequest {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ImageUri?: string;
		Publish?: boolean | null;
		DryRun?: boolean | null;
		RevisionId?: string;
		Architectures?: Array<Architecture>;
	}
	export interface UpdateFunctionCodeRequestFormProperties {
		ZipFile: FormControl<string | null | undefined>,
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ImageUri: FormControl<string | null | undefined>,
		Publish: FormControl<boolean | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionCodeRequestFormGroup() {
		return new FormGroup<UpdateFunctionCodeRequestFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			ImageUri: new FormControl<string | null | undefined>(undefined),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationRequest {
		Role?: string;
		Handler?: string;
		Description?: string;
		Timeout?: number | null;
		MemorySize?: number | null;
		VpcConfig?: VpcConfig;
		Environment?: Environment;
		Runtime?: Runtime;
		DeadLetterConfig?: DeadLetterConfig;
		KMSKeyArn?: string;
		TracingConfig?: TracingConfig;
		RevisionId?: string;
		Layers?: Array<string>;
		FileSystemConfigs?: Array<FileSystemConfig>;
		ImageConfig?: ImageConfig;
		EphemeralStorage?: EphemeralStorage;
		SnapStart?: SnapStart;
	}
	export interface UpdateFunctionConfigurationRequestFormProperties {
		Role: FormControl<string | null | undefined>,
		Handler: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
		MemorySize: FormControl<number | null | undefined>,
		Runtime: FormControl<Runtime | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationRequestFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined),
			Handler: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
			MemorySize: new FormControl<number | null | undefined>(undefined),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionEventInvokeConfigRequest {
		MaximumRetryAttempts?: number | null;
		MaximumEventAgeInSeconds?: number | null;
		DestinationConfig?: DestinationConfig;
	}
	export interface UpdateFunctionEventInvokeConfigRequestFormProperties {
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFunctionEventInvokeConfigRequestFormGroup() {
		return new FormGroup<UpdateFunctionEventInvokeConfigRequestFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionUrlConfigRequest {
		AuthType?: FunctionUrlAuthType;
		Cors?: Cors;
		InvokeMode?: InvokeMode;
	}
	export interface UpdateFunctionUrlConfigRequestFormProperties {
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateUpdateFunctionUrlConfigRequestFormGroup() {
		return new FormGroup<UpdateFunctionUrlConfigRequestFormProperties>({
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
		 * Post 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {number} VersionNumber The version number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} RevisionId Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
		 * @return {void} 
		 */
		AddLayerVersionPermission(LayerName: string, VersionNumber: number, RevisionId: string | null | undefined, requestBody: AddLayerVersionPermissionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy&RevisionId=' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
		 * Get 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {number} VersionNumber The version number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetLayerVersionPolicyResponse} Success
		 */
		GetLayerVersionPolicy(LayerName: string, VersionNumber: number): Observable<GetLayerVersionPolicyResponse> {
			return this.http.get<GetLayerVersionPolicyResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy', {});
		}

		/**
		 * <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
		 * Post 2015-03-31/functions/{FunctionName}/policy
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier Specify a version or alias to add permissions to a published version of the function.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		AddPermission(FunctionName: string, Qualifier: string | null | undefined, requestBody: AddPermissionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
		 * Get 2015-03-31/functions/{FunctionName}/policy
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier Specify a version or alias to get the policy for that resource.
		 *     Min length: 1    Max length: 128
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(FunctionName: string, Qualifier: string | null | undefined): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/policy&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
		 * Post 2015-03-31/functions/{FunctionName}/aliases
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {void} 
		 */
		CreateAlias(FunctionName: string, requestBody: CreateAliasPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.
		 * Get 2015-03-31/functions/{FunctionName}/aliases
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} FunctionVersion Specify a function version to only list aliases that invoke that version.
		 *     Min length: 1    Max length: 1024
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Limit the number of aliases returned.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(FunctionName: string, FunctionVersion: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListAliasesResponse> {
			return this.http.get<ListAliasesResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases&FunctionVersion=' + (FunctionVersion == null ? '' : encodeURIComponent(FunctionVersion)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).
		 * Post 2020-04-22/code-signing-configs/
		 * @return {void} 
		 */
		CreateCodeSigningConfig(requestBody: CreateCodeSigningConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-04-22/code-signing-configs/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call.
		 * Get 2020-04-22/code-signing-configs/
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Maximum number of items to return.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListCodeSigningConfigsResponse} Success
		 */
		ListCodeSigningConfigs(Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListCodeSigningConfigsResponse> {
			return this.http.get<ListCodeSigningConfigsResponse>(this.baseUri + '2020-04-22/code-signing-configs/?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
		 * Post 2015-03-31/event-source-mappings/
		 * @return {void} 
		 */
		CreateEventSourceMapping(requestBody: CreateEventSourceMappingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/event-source-mappings/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.
		 * Get 2015-03-31/event-source-mappings/
		 * @param {string} EventSourceArn <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListEventSourceMappingsResponse} Success
		 */
		ListEventSourceMappings(EventSourceArn: string | null | undefined, FunctionName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListEventSourceMappingsResponse> {
			return this.http.get<ListEventSourceMappingsResponse>(this.baseUri + '2015-03-31/event-source-mappings/?EventSourceArn=' + (EventSourceArn == null ? '' : encodeURIComponent(EventSourceArn)) + '&FunctionName=' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>
		 * Post 2015-03-31/functions
		 * @return {void} 
		 */
		CreateFunction(requestBody: CreateFunctionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.
		 * Post 2021-10-31/functions/{FunctionName}/url
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The alias name.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		CreateFunctionUrlConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: CreateFunctionUrlConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2021-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/url&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.
		 * Delete 2021-10-31/functions/{FunctionName}/url
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The alias name.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteFunctionUrlConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2021-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/url&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details about a Lambda function URL.
		 * Get 2021-10-31/functions/{FunctionName}/url
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The alias name.
		 *     Min length: 1    Max length: 128
		 * @return {GetFunctionUrlConfigResponse} Success
		 */
		GetFunctionUrlConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<GetFunctionUrlConfigResponse> {
			return this.http.get<GetFunctionUrlConfigResponse>(this.baseUri + '2021-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/url&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Updates the configuration for a Lambda function URL.
		 * Put 2021-10-31/functions/{FunctionName}/url
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The alias name.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateFunctionUrlConfigResponse} Success
		 */
		UpdateFunctionUrlConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: UpdateFunctionUrlConfigPutBody): Observable<UpdateFunctionUrlConfigResponse> {
			return this.http.put<UpdateFunctionUrlConfigResponse>(this.baseUri + '2021-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/url&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
		 * Delete 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Name The name of the alias.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteAlias(FunctionName: string, Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
		 * Get 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Name The name of the alias.
		 *     Min length: 1    Max length: 128
		 * @return {AliasConfiguration} Success
		 */
		GetAlias(FunctionName: string, Name: string): Observable<AliasConfiguration> {
			return this.http.get<AliasConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
		 * Put 2015-03-31/functions/{FunctionName}/aliases/{Name}
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Name The name of the alias.
		 *     Min length: 1    Max length: 128
		 * @return {AliasConfiguration} Success
		 */
		UpdateAlias(FunctionName: string, Name: string, requestBody: UpdateAliasPutBody): Observable<AliasConfiguration> {
			return this.http.put<AliasConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/aliases/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it.
		 * Delete 2020-04-22/code-signing-configs/{CodeSigningConfigArn}
		 * @param {string} CodeSigningConfigArn The The Amazon Resource Name (ARN) of the code signing configuration.
		 *     Max length: 200
		 * @return {void} 
		 */
		DeleteCodeSigningConfig(CodeSigningConfigArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-04-22/code-signing-configs/' + (CodeSigningConfigArn == null ? '' : encodeURIComponent(CodeSigningConfigArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the specified code signing configuration.
		 * Get 2020-04-22/code-signing-configs/{CodeSigningConfigArn}
		 * @param {string} CodeSigningConfigArn The The Amazon Resource Name (ARN) of the code signing configuration. 
		 *     Max length: 200
		 * @return {GetCodeSigningConfigResponse} Success
		 */
		GetCodeSigningConfig(CodeSigningConfigArn: string): Observable<GetCodeSigningConfigResponse> {
			return this.http.get<GetCodeSigningConfigResponse>(this.baseUri + '2020-04-22/code-signing-configs/' + (CodeSigningConfigArn == null ? '' : encodeURIComponent(CodeSigningConfigArn)), {});
		}

		/**
		 * Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
		 * Put 2020-04-22/code-signing-configs/{CodeSigningConfigArn}
		 * @param {string} CodeSigningConfigArn The The Amazon Resource Name (ARN) of the code signing configuration.
		 *     Max length: 200
		 * @return {UpdateCodeSigningConfigResponse} Success
		 */
		UpdateCodeSigningConfig(CodeSigningConfigArn: string, requestBody: UpdateCodeSigningConfigPutBody): Observable<UpdateCodeSigningConfigResponse> {
			return this.http.put<UpdateCodeSigningConfigResponse>(this.baseUri + '2020-04-22/code-signing-configs/' + (CodeSigningConfigArn == null ? '' : encodeURIComponent(CodeSigningConfigArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
		 * Put 2015-03-31/event-source-mappings/{UUID}
		 * @param {string} UUID The identifier of the event source mapping.
		 * @return {void} 
		 */
		UpdateEventSourceMapping(UUID: string, requestBody: UpdateEventSourceMappingPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2015-03-31/event-source-mappings/' + (UUID == null ? '' : encodeURIComponent(UUID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted. This doesn't require the user to have explicit permissions for <a>DeleteAlias</a>.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
		 * Delete 2015-03-31/functions/{FunctionName}
		 * @param {string} FunctionName <p>The name of the Lambda function or version.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier Specify a version to delete. You can't delete a version that an alias references.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteFunction(FunctionName: string, Qualifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
		 * Get 2015-03-31/functions/{FunctionName}
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier Specify a version or alias to get details about a published version of the function.
		 *     Min length: 1    Max length: 128
		 * @return {GetFunctionResponse} Success
		 */
		GetFunction(FunctionName: string, Qualifier: string | null | undefined): Observable<GetFunctionResponse> {
			return this.http.get<GetFunctionResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Removes the code signing configuration from the function.
		 * Delete 2020-06-30/functions/{FunctionName}/code-signing-config
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {void} 
		 */
		DeleteFunctionCodeSigningConfig(FunctionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-06-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/code-signing-config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the code signing configuration for the specified function.
		 * Get 2020-06-30/functions/{FunctionName}/code-signing-config
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {GetFunctionCodeSigningConfigResponse} Success
		 */
		GetFunctionCodeSigningConfig(FunctionName: string): Observable<GetFunctionCodeSigningConfigResponse> {
			return this.http.get<GetFunctionCodeSigningConfigResponse>(this.baseUri + '2020-06-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/code-signing-config', {});
		}

		/**
		 * Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
		 * Put 2020-06-30/functions/{FunctionName}/code-signing-config
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {PutFunctionCodeSigningConfigResponse} Success
		 */
		PutFunctionCodeSigningConfig(FunctionName: string, requestBody: PutFunctionCodeSigningConfigPutBody): Observable<PutFunctionCodeSigningConfigResponse> {
			return this.http.put<PutFunctionCodeSigningConfigResponse>(this.baseUri + '2020-06-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/code-signing-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a concurrent execution limit from a function.
		 * Delete 2017-10-31/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {void} 
		 */
		DeleteFunctionConcurrency(FunctionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
		 * Put 2017-10-31/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {Concurrency} Success
		 */
		PutFunctionConcurrency(FunctionName: string, requestBody: PutFunctionConcurrencyPutBody): Observable<Concurrency> {
			return this.http.put<Concurrency>(this.baseUri + '2017-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Delete 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier A version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Get 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier A version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {FunctionEventInvokeConfig} Success
		 */
		GetFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<FunctionEventInvokeConfig> {
			return this.http.get<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
		 * Put 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier A version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {FunctionEventInvokeConfig} Success
		 */
		PutFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: PutFunctionEventInvokeConfigPutBody): Observable<FunctionEventInvokeConfig> {
			return this.http.put<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Post 2019-09-25/functions/{FunctionName}/event-invoke-config
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier A version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {FunctionEventInvokeConfig} Success
		 */
		UpdateFunctionEventInvokeConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: UpdateFunctionEventInvokeConfigPostBody): Observable<FunctionEventInvokeConfig> {
			return this.http.post<FunctionEventInvokeConfig>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
		 * Delete 2018-10-31/layers/{LayerName}/versions/{VersionNumber}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {number} VersionNumber The version number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		DeleteLayerVersion(LayerName: string, VersionNumber: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
		 * Get 2018-10-31/layers/{LayerName}/versions/{VersionNumber}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {number} VersionNumber The version number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetLayerVersionResponse} Success
		 */
		GetLayerVersion(LayerName: string, VersionNumber: number): Observable<GetLayerVersionResponse> {
			return this.http.get<GetLayerVersionResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber, {});
		}

		/**
		 * Deletes the provisioned concurrency configuration for a function.
		 * Delete 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the provisioned concurrency configuration for a function's alias or version.
		 * Get 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {GetProvisionedConcurrencyConfigResponse} Success
		 */
		GetProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string): Observable<GetProvisionedConcurrencyConfigResponse> {
			return this.http.get<GetProvisionedConcurrencyConfigResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Adds a provisioned concurrency configuration to a function's alias or version.
		 * Put 2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier The version number or alias name.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		PutProvisionedConcurrencyConfig(FunctionName: string, Qualifier: string, requestBody: PutProvisionedConcurrencyConfigPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#Qualifier&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.
		 * Get 2016-08-19/account-settings/
		 * @return {GetAccountSettingsResponse} Success
		 */
		GetAccountSettings(): Observable<GetAccountSettingsResponse> {
			return this.http.get<GetAccountSettingsResponse>(this.baseUri + '2016-08-19/account-settings/', {});
		}

		/**
		 * Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
		 * Get 2019-09-30/functions/{FunctionName}/concurrency
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {GetFunctionConcurrencyResponse} Success
		 */
		GetFunctionConcurrency(FunctionName: string): Observable<GetFunctionConcurrencyResponse> {
			return this.http.get<GetFunctionConcurrencyResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/concurrency', {});
		}

		/**
		 * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
		 * Get 2015-03-31/functions/{FunctionName}/configuration
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier Specify a version or alias to get details about a published version of the function.
		 *     Min length: 1    Max length: 128
		 * @return {FunctionConfiguration} Success
		 */
		GetFunctionConfiguration(FunctionName: string, Qualifier: string | null | undefined): Observable<FunctionConfiguration> {
			return this.http.get<FunctionConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
		 * Put 2015-03-31/functions/{FunctionName}/configuration
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {FunctionConfiguration} Success
		 */
		UpdateFunctionConfiguration(FunctionName: string, requestBody: UpdateFunctionConfigurationPutBody): Observable<FunctionConfiguration> {
			return this.http.put<FunctionConfiguration>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
		 * Get 2018-10-31/layers#find=LayerVersion&Arn
		 * @param {string} Arn The ARN of the layer version.
		 *     Min length: 1    Max length: 140
		 * @return {GetLayerVersionResponse} Success
		 */
		GetLayerVersionByArn(Arn: string, find: GetLayerVersionByArnFind): Observable<GetLayerVersionResponse> {
			return this.http.get<GetLayerVersionResponse>(this.baseUri + '2018-10-31/layers#find=LayerVersion&Arn?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&find=' + find, {});
		}

		/**
		 * Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
		 * Get 2021-07-20/functions/{FunctionName}/runtime-management-config
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.
		 *     Min length: 1    Max length: 128
		 * @return {GetRuntimeManagementConfigResponse} Success
		 */
		GetRuntimeManagementConfig(FunctionName: string, Qualifier: string | null | undefined): Observable<GetRuntimeManagementConfigResponse> {
			return this.http.get<GetRuntimeManagementConfigResponse>(this.baseUri + '2021-07-20/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/runtime-management-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), {});
		}

		/**
		 * Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
		 * Put 2021-07-20/functions/{FunctionName}/runtime-management-config
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Qualifier Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.
		 *     Min length: 1    Max length: 128
		 * @return {PutRuntimeManagementConfigResponse} Success
		 */
		PutRuntimeManagementConfig(FunctionName: string, Qualifier: string | null | undefined, requestBody: PutRuntimeManagementConfigPutBody): Observable<PutRuntimeManagementConfigResponse> {
			return this.http.put<PutRuntimeManagementConfigResponse>(this.baseUri + '2021-07-20/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/runtime-management-config&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
		 * Post 2015-03-31/functions/{FunctionName}/invocations
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier Specify a version or alias to invoke a published version of the function.
		 *     Min length: 1    Max length: 128
		 * @return {InvocationResponse} Success
		 */
		Invoke(FunctionName: string, Qualifier: string | null | undefined, requestBody: InvokePostBody): Observable<InvocationResponse> {
			return this.http.post<InvocationResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/invocations&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>
		 * Post 2014-11-13/functions/{FunctionName}/invoke-async/
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @return {void} 
		 */
		InvokeAsync(FunctionName: string, requestBody: InvokeAsyncPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2014-11-13/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/invoke-async/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
		 * Post 2021-11-15/functions/{FunctionName}/response-streaming-invocations
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 170
		 * @param {string} Qualifier The alias name.
		 *     Min length: 1    Max length: 128
		 * @return {InvokeWithResponseStreamResponse} Success
		 */
		InvokeWithResponseStream(FunctionName: string, Qualifier: string | null | undefined, requestBody: InvokeWithResponseStreamPostBody): Observable<InvokeWithResponseStreamResponse> {
			return this.http.post<InvokeWithResponseStreamResponse>(this.baseUri + '2021-11-15/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/response-streaming-invocations&Qualifier=' + (Qualifier == null ? '' : encodeURIComponent(Qualifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
		 * Get 2019-09-25/functions/{FunctionName}/event-invoke-config/list
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of configurations to return.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListFunctionEventInvokeConfigsResponse} Success
		 */
		ListFunctionEventInvokeConfigs(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionEventInvokeConfigsResponse> {
			return this.http.get<ListFunctionEventInvokeConfigsResponse>(this.baseUri + '2019-09-25/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/event-invoke-config/list&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * Returns a list of Lambda function URLs for the specified function.
		 * Get 2021-10-31/functions/{FunctionName}/urls
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of function URLs to return in the response. Note that <code>ListFunctionUrlConfigs</code> returns a maximum of 50 items in each response, even if you set the number higher.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListFunctionUrlConfigsResponse} Success
		 */
		ListFunctionUrlConfigs(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionUrlConfigsResponse> {
			return this.http.get<ListFunctionUrlConfigsResponse>(this.baseUri + '2021-10-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/urls&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>
		 * Get 2015-03-31/functions/
		 * @param {string} MasterRegion For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.
		 * @param {FunctionVersion} FunctionVersion Set to <code>ALL</code> to include entries for all published versions of each function.
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response, even if you set the number higher.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListFunctionsResponse} Success
		 */
		ListFunctions(MasterRegion: string | null | undefined, FunctionVersion: FunctionVersion | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionsResponse> {
			return this.http.get<ListFunctionsResponse>(this.baseUri + '2015-03-31/functions/?MasterRegion=' + (MasterRegion == null ? '' : encodeURIComponent(MasterRegion)) + '&FunctionVersion=' + FunctionVersion + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.
		 * Get 2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions
		 * @param {string} CodeSigningConfigArn The The Amazon Resource Name (ARN) of the code signing configuration.
		 *     Max length: 200
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Maximum number of items to return.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListFunctionsByCodeSigningConfigResponse} Success
		 */
		ListFunctionsByCodeSigningConfig(CodeSigningConfigArn: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListFunctionsByCodeSigningConfigResponse> {
			return this.http.get<ListFunctionsByCodeSigningConfigResponse>(this.baseUri + '2020-04-22/code-signing-configs/' + (CodeSigningConfigArn == null ? '' : encodeURIComponent(CodeSigningConfigArn)) + '/functions&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.
		 * Get 2018-10-31/layers/{LayerName}/versions
		 * @param {Runtime} CompatibleRuntime <p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of versions to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {Architecture} CompatibleArchitecture The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
		 * @return {ListLayerVersionsResponse} Success
		 */
		ListLayerVersions(CompatibleRuntime: Runtime | null | undefined, LayerName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, CompatibleArchitecture: Architecture | null | undefined): Observable<ListLayerVersionsResponse> {
			return this.http.get<ListLayerVersionsResponse>(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions?CompatibleRuntime=' + CompatibleRuntime + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&CompatibleArchitecture=' + CompatibleArchitecture, {});
		}

		/**
		 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
		 * Post 2018-10-31/layers/{LayerName}/versions
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @return {void} 
		 */
		PublishLayerVersion(LayerName: string, requestBody: PublishLayerVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
		 * Get 2018-10-31/layers
		 * @param {Runtime} CompatibleRuntime <p>A runtime identifier. For example, <code>go1.x</code>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
		 * @param {string} Marker A pagination token returned by a previous call.
		 * @param {number} MaxItems The maximum number of layers to return.
		 *     Minimum: 1    Maximum: 50
		 * @param {Architecture} CompatibleArchitecture The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
		 * @return {ListLayersResponse} Success
		 */
		ListLayers(CompatibleRuntime: Runtime | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, CompatibleArchitecture: Architecture | null | undefined): Observable<ListLayersResponse> {
			return this.http.get<ListLayersResponse>(this.baseUri + '2018-10-31/layers?CompatibleRuntime=' + CompatibleRuntime + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&CompatibleArchitecture=' + CompatibleArchitecture, {});
		}

		/**
		 * Retrieves a list of provisioned concurrency configurations for a function.
		 * Get 2019-09-30/functions/{FunctionName}/provisioned-concurrency#List=ALL
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems Specify a number to limit the number of configurations returned.
		 *     Minimum: 1    Maximum: 50
		 * @return {ListProvisionedConcurrencyConfigsResponse} Success
		 */
		ListProvisionedConcurrencyConfigs(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, List: FunctionVersion): Observable<ListProvisionedConcurrencyConfigsResponse> {
			return this.http.get<ListProvisionedConcurrencyConfigsResponse>(this.baseUri + '2019-09-30/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/provisioned-concurrency#List=ALL&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&List=' + List, {});
		}

		/**
		 * Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
		 * Get 2017-03-31/tags/{ARN}
		 * @param {string} ARN The function's Amazon Resource Name (ARN). Note: Lambda does not support adding tags to aliases or versions.
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
		 *     Min length: 1    Max length: 170
		 * @param {string} Marker Specify the pagination token that's returned by a previous request to retrieve the next page of results.
		 * @param {number} MaxItems The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response, even if you set the number higher.
		 *     Minimum: 1    Maximum: 10000
		 * @return {ListVersionsByFunctionResponse} Success
		 */
		ListVersionsByFunction(FunctionName: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<ListVersionsByFunctionResponse> {
			return this.http.get<ListVersionsByFunctionResponse>(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/versions&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, {});
		}

		/**
		 * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
		 * Post 2015-03-31/functions/{FunctionName}/versions
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @return {void} 
		 */
		PublishVersion(FunctionName: string, requestBody: PublishVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2015-03-31/functions/' + (FunctionName == null ? '' : encodeURIComponent(FunctionName)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
		 * Delete 2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}
		 * @param {string} LayerName The name or Amazon Resource Name (ARN) of the layer.
		 *     Min length: 1    Max length: 140
		 * @param {number} VersionNumber The version number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} StatementId The identifier that was specified when the statement was added.
		 *     Min length: 1    Max length: 100
		 * @param {string} RevisionId Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
		 * @return {void} 
		 */
		RemoveLayerVersionPermission(LayerName: string, VersionNumber: number, StatementId: string, RevisionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2018-10-31/layers/' + (LayerName == null ? '' : encodeURIComponent(LayerName)) + '/versions/' + VersionNumber + '/policy/' + (StatementId == null ? '' : encodeURIComponent(StatementId)) + '&RevisionId=' + (RevisionId == null ? '' : encodeURIComponent(RevisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
		 * Delete 2015-03-31/functions/{FunctionName}/policy/{StatementId}
		 * @param {string} FunctionName <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
		 * @param {string} StatementId Statement ID of the permission to remove.
		 *     Min length: 1    Max length: 100
		 * @param {string} Qualifier Specify a version or alias to remove permissions from a published version of the function.
		 *     Min length: 1    Max length: 128
		 * @param {string} RevisionId Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
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
		 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
		 * Put 2015-03-31/functions/{FunctionName}/code
		 * @param {string} FunctionName <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 *     Min length: 1    Max length: 140
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
		 * Min length: 1
		 * Max length: 100
		 */
		StatementId: string;

		/**
		 * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
		 * Required
		 * Max length: 22
		 */
		Action: string;

		/**
		 * An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
		 * Required
		 */
		Principal: string;

		/**
		 * With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.
		 * Max length: 34
		 */
		OrganizationId?: string | null;
	}
	export interface AddLayerVersionPermissionPostBodyFormProperties {

		/**
		 * An identifier that distinguishes the policy from others on the same layer version.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.
		 * Required
		 * Max length: 22
		 */
		Action: FormControl<string | null | undefined>,

		/**
		 * An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
		 * Required
		 */
		Principal: FormControl<string | null | undefined>,

		/**
		 * With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.
		 * Max length: 34
		 */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateAddLayerVersionPermissionPostBodyFormGroup() {
		return new FormGroup<AddLayerVersionPermissionPostBodyFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(22), Validators.pattern('lambda:GetLayerVersion')]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('\d{12}|\*|arn:(aws[a-zA-Z-]*):iam::\d{12}:root')]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(34), Validators.pattern('o-[a-z0-9]{10,32}')]),
		});

	}

	export interface AddPermissionPostBody {

		/**
		 * A statement identifier that differentiates the statement from others in the same policy.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		StatementId: string;

		/**
		 * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
		 * Required
		 */
		Action: string;

		/**
		 * The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
		 * Required
		 */
		Principal: string;

		/** <p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p> */
		SourceArn?: string | null;

		/**
		 * For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
		 * Max length: 12
		 */
		SourceAccount?: string | null;

		/**
		 * For Alexa Smart Home functions, a token that the invoker must supply.
		 * Min length: 0
		 * Max length: 256
		 */
		EventSourceToken?: string | null;

		/** Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it. */
		RevisionId?: string | null;

		/**
		 * The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.
		 * Min length: 12
		 * Max length: 34
		 */
		PrincipalOrgID?: string | null;

		/** The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>. */
		FunctionUrlAuthType?: FunctionUrlAuthType | null;
	}
	export interface AddPermissionPostBodyFormProperties {

		/**
		 * A statement identifier that differentiates the statement from others in the same policy.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
		 * Required
		 */
		Action: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
		 * Required
		 */
		Principal: FormControl<string | null | undefined>,

		/** <p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p> */
		SourceArn: FormControl<string | null | undefined>,

		/**
		 * For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
		 * Max length: 12
		 */
		SourceAccount: FormControl<string | null | undefined>,

		/**
		 * For Alexa Smart Home functions, a token that the invoker must supply.
		 * Min length: 0
		 * Max length: 256
		 */
		EventSourceToken: FormControl<string | null | undefined>,

		/** Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,

		/**
		 * The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.
		 * Min length: 12
		 * Max length: 34
		 */
		PrincipalOrgID: FormControl<string | null | undefined>,

		/** The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>. */
		FunctionUrlAuthType: FormControl<FunctionUrlAuthType | null | undefined>,
	}
	export function CreateAddPermissionPostBodyFormGroup() {
		return new FormGroup<AddPermissionPostBodyFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('([a-zA-Z0-9-_]+)')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(lambda:[*]|lambda:[a-zA-Z]+|[*])')]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[^\s]+')]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)')]),
			SourceAccount: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.pattern('\d{12}')]),
			EventSourceToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._\-]+')]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
			PrincipalOrgID: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(34), Validators.pattern('^o-[a-z0-9]{10,32}$')]),
			FunctionUrlAuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined),
		});

	}

	export interface CreateAliasPostBody {

		/**
		 * The name of the alias.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: string;

		/**
		 * The function version that the alias invokes.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		FunctionVersion: string;

		/**
		 * A description of the alias.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias. */
		RoutingConfig?: CreateAliasPostBodyRoutingConfig;
	}
	export interface CreateAliasPostBodyFormProperties {

		/**
		 * The name of the alias.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The function version that the alias invokes.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the alias.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasPostBodyFormGroup() {
		return new FormGroup<CreateAliasPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(?!^[0-9]+$)([a-zA-Z0-9-_]+)')]),
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
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

	export interface CreateCodeSigningConfigPostBody {

		/**
		 * Descriptive name for this code signing configuration.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/**
		 * List of signing profiles that can sign a code package.
		 * Required
		 */
		AllowedPublishers: CreateCodeSigningConfigPostBodyAllowedPublishers;

		/** Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry. */
		CodeSigningPolicies?: CreateCodeSigningConfigPostBodyCodeSigningPolicies;
	}
	export interface CreateCodeSigningConfigPostBodyFormProperties {

		/**
		 * Descriptive name for this code signing configuration.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeSigningConfigPostBodyFormGroup() {
		return new FormGroup<CreateCodeSigningConfigPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface CreateCodeSigningConfigPostBodyAllowedPublishers {
		SigningProfileVersionArns?: Array<string>;
	}
	export interface CreateCodeSigningConfigPostBodyAllowedPublishersFormProperties {
	}
	export function CreateCreateCodeSigningConfigPostBodyAllowedPublishersFormGroup() {
		return new FormGroup<CreateCodeSigningConfigPostBodyAllowedPublishersFormProperties>({
		});

	}

	export interface CreateCodeSigningConfigPostBodyCodeSigningPolicies {
		UntrustedArtifactOnDeployment?: CodeSigningPolicy;
	}
	export interface CreateCodeSigningConfigPostBodyCodeSigningPoliciesFormProperties {
		UntrustedArtifactOnDeployment: FormControl<CodeSigningPolicy | null | undefined>,
	}
	export function CreateCreateCodeSigningConfigPostBodyCodeSigningPoliciesFormGroup() {
		return new FormGroup<CreateCodeSigningConfigPostBodyCodeSigningPoliciesFormProperties>({
			UntrustedArtifactOnDeployment: new FormControl<CodeSigningPolicy | null | undefined>(undefined),
		});

	}

	export interface CreateEventSourceMappingPostBody {

		/** <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul> */
		EventSourceArn?: string | null;

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Required
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName: string;

		/** <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p> */
		Enabled?: boolean | null;

		/**
		 * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/** An object that contains the filters for an event source. */
		FilterCriteria?: CreateEventSourceMappingPostBodyFilterCriteria;

		/**
		 * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/**
		 * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;

		/** The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka. */
		StartingPosition?: EventSourcePosition | null;

		/** With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future. */
		StartingPositionTimestamp?: Date | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: CreateEventSourceMappingPostBodyDestinationConfig;

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).
		 * Minimum: -1
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;

		/** (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
		 * Minimum: -1
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
		 * Minimum: 0
		 * Maximum: 900
		 */
		TumblingWindowInSeconds?: number | null;

		/**
		 * The name of the Kafka topic.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Topics?: Array<string>;

		/**
		 * (MQ) The name of the Amazon MQ broker destination queue to consume.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Queues?: Array<string>;

		/**
		 * An array of authentication protocols or VPC components required to secure your event source.
		 * Minimum items: 0
		 * Maximum items: 22
		 */
		SourceAccessConfigurations?: Array<SourceAccessConfiguration>;

		/** The self-managed Apache Kafka cluster for your event source. */
		SelfManagedEventSource?: CreateEventSourceMappingPostBodySelfManagedEventSource;

		/**
		 * (Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		FunctionResponseTypes?: Array<FunctionResponseType>;

		/** Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source. */
		AmazonManagedKafkaEventSourceConfig?: CreateEventSourceMappingPostBodyAmazonManagedKafkaEventSourceConfig;

		/** Specific configuration settings for a self-managed Apache Kafka event source. */
		SelfManagedKafkaEventSourceConfig?: CreateEventSourceMappingPostBodySelfManagedKafkaEventSourceConfig;

		/** (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value. */
		ScalingConfig?: CreateEventSourceMappingPostBodyScalingConfig;

		/** Specific configuration settings for a DocumentDB event source. */
		DocumentDBEventSourceConfig?: CreateEventSourceMappingPostBodyDocumentDBEventSourceConfig;
	}
	export interface CreateEventSourceMappingPostBodyFormProperties {

		/** <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul> */
		EventSourceArn: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Required
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p> */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,

		/** The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka. */
		StartingPosition: FormControl<EventSourcePosition | null | undefined>,

		/** With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future. */
		StartingPositionTimestamp: FormControl<Date | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).
		 * Minimum: -1
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,

		/** (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
		 * Minimum: -1
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
		 * Minimum: 0
		 * Maximum: 900
		 */
		TumblingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodyFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)')]),
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			StartingPosition: new FormControl<EventSourcePosition | null | undefined>(undefined),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(10000)]),
			TumblingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(900)]),
		});

	}

	export interface CreateEventSourceMappingPostBodyFilterCriteria {
		Filters?: Array<Filter>;
	}
	export interface CreateEventSourceMappingPostBodyFilterCriteriaFormProperties {
	}
	export function CreateCreateEventSourceMappingPostBodyFilterCriteriaFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyFilterCriteriaFormProperties>({
		});

	}

	export interface CreateEventSourceMappingPostBodyDestinationConfig {
		OnSuccess?: OnSuccess;
		OnFailure?: OnFailure;
	}
	export interface CreateEventSourceMappingPostBodyDestinationConfigFormProperties {
	}
	export function CreateCreateEventSourceMappingPostBodyDestinationConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyDestinationConfigFormProperties>({
		});

	}

	export interface CreateEventSourceMappingPostBodySelfManagedEventSource {
		Endpoints?: Endpoints;
	}
	export interface CreateEventSourceMappingPostBodySelfManagedEventSourceFormProperties {
	}
	export function CreateCreateEventSourceMappingPostBodySelfManagedEventSourceFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodySelfManagedEventSourceFormProperties>({
		});

	}

	export interface CreateEventSourceMappingPostBodyAmazonManagedKafkaEventSourceConfig {
		ConsumerGroupId?: string;
	}
	export interface CreateEventSourceMappingPostBodyAmazonManagedKafkaEventSourceConfigFormProperties {
		ConsumerGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodyAmazonManagedKafkaEventSourceConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyAmazonManagedKafkaEventSourceConfigFormProperties>({
			ConsumerGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventSourceMappingPostBodySelfManagedKafkaEventSourceConfig {
		ConsumerGroupId?: string;
	}
	export interface CreateEventSourceMappingPostBodySelfManagedKafkaEventSourceConfigFormProperties {
		ConsumerGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodySelfManagedKafkaEventSourceConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodySelfManagedKafkaEventSourceConfigFormProperties>({
			ConsumerGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventSourceMappingPostBodyScalingConfig {
		MaximumConcurrency?: number | null;
	}
	export interface CreateEventSourceMappingPostBodyScalingConfigFormProperties {
		MaximumConcurrency: FormControl<number | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodyScalingConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyScalingConfigFormProperties>({
			MaximumConcurrency: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateEventSourceMappingPostBodyDocumentDBEventSourceConfig {
		DatabaseName?: string;
		CollectionName?: string;
		FullDocument?: FullDocument;
	}
	export interface CreateEventSourceMappingPostBodyDocumentDBEventSourceConfigFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		CollectionName: FormControl<string | null | undefined>,
		FullDocument: FormControl<FullDocument | null | undefined>,
	}
	export function CreateCreateEventSourceMappingPostBodyDocumentDBEventSourceConfigFormGroup() {
		return new FormGroup<CreateEventSourceMappingPostBodyDocumentDBEventSourceConfigFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			CollectionName: new FormControl<string | null | undefined>(undefined),
			FullDocument: new FormControl<FullDocument | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * Required
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName: string;

		/** <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p> */
		Runtime?: Runtime | null;

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Required
		 */
		Role: string;

		/**
		 * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.
		 * Max length: 128
		 */
		Handler?: string | null;

		/**
		 * The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
		 * Required
		 */
		Code: CreateFunctionPostBodyCode;

		/**
		 * A description of the function.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/**
		 * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.
		 * Minimum: 1
		 */
		Timeout?: number | null;

		/**
		 * The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
		 * Minimum: 128
		 * Maximum: 10240
		 */
		MemorySize?: number | null;

		/** Set to true to publish the first version of the function during creation. */
		Publish?: boolean | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>. */
		VpcConfig?: CreateFunctionPostBodyVpcConfig;

		/** The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive. */
		PackageType?: PackageType | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: CreateFunctionPostBodyDeadLetterConfig;

		/** A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. */
		Environment?: CreateFunctionPostBodyEnvironment;

		/** The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key. */
		KMSKeyArn?: string | null;

		/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: CreateFunctionPostBodyTracingConfig;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function. */
		Tags?: {[id: string]: string };

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;

		/**
		 * Connection settings for an Amazon EFS file system.
		 * Maximum items: 1
		 */
		FileSystemConfigs?: Array<FileSystemConfig>;

		/** Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>. */
		ImageConfig?: CreateFunctionPostBodyImageConfig;

		/**
		 * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
		 * Max length: 200
		 */
		CodeSigningConfigArn?: string | null;

		/**
		 * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Architectures?: Array<Architecture>;

		/** The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB. */
		EphemeralStorage?: CreateFunctionPostBodyEphemeralStorage;

		/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. */
		SnapStart?: CreateFunctionPostBodySnapStart;
	}
	export interface CreateFunctionPostBodyFormProperties {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
		 * Required
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p> */
		Runtime: FormControl<Runtime | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the function's execution role.
		 * Required
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.
		 * Max length: 128
		 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * A description of the function.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.
		 * Minimum: 1
		 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
		 * Minimum: 128
		 * Maximum: 10240
		 */
		MemorySize: FormControl<number | null | undefined>,

		/** Set to true to publish the first version of the function during creation. */
		Publish: FormControl<boolean | null | undefined>,

		/** The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive. */
		PackageType: FormControl<PackageType | null | undefined>,

		/** The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key. */
		KMSKeyArn: FormControl<string | null | undefined>,

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
		 * Max length: 200
		 */
		CodeSigningConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionPostBodyFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(10240)]),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			PackageType: new FormControl<PackageType | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.pattern('arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}')]),
		});

	}

	export interface CreateFunctionPostBodyCode {
		ZipFile?: string;
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ImageUri?: string;
	}
	export interface CreateFunctionPostBodyCodeFormProperties {
		ZipFile: FormControl<string | null | undefined>,
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ImageUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyCodeFormGroup() {
		return new FormGroup<CreateFunctionPostBodyCodeFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			ImageUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodyVpcConfig {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreateFunctionPostBodyVpcConfigFormProperties {
	}
	export function CreateCreateFunctionPostBodyVpcConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyVpcConfigFormProperties>({
		});

	}

	export interface CreateFunctionPostBodyDeadLetterConfig {
		TargetArn?: string;
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
		Mode?: TracingMode;
	}
	export interface CreateFunctionPostBodyTracingConfigFormProperties {
		Mode: FormControl<TracingMode | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyTracingConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyTracingConfigFormProperties>({
			Mode: new FormControl<TracingMode | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodyImageConfig {
		EntryPoint?: Array<string>;
		Command?: Array<string>;
		WorkingDirectory?: string;
	}
	export interface CreateFunctionPostBodyImageConfigFormProperties {
		WorkingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyImageConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodyImageConfigFormProperties>({
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodyEphemeralStorage {
		Size?: number | null;
	}
	export interface CreateFunctionPostBodyEphemeralStorageFormProperties {
		Size: FormControl<number | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyEphemeralStorageFormGroup() {
		return new FormGroup<CreateFunctionPostBodyEphemeralStorageFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodySnapStart {
		ApplyOn?: SnapStartApplyOn;
	}
	export interface CreateFunctionPostBodySnapStartFormProperties {
		ApplyOn: FormControl<SnapStartApplyOn | null | undefined>,
	}
	export function CreateCreateFunctionPostBodySnapStartFormGroup() {
		return new FormGroup<CreateFunctionPostBodySnapStartFormProperties>({
			ApplyOn: new FormControl<SnapStartApplyOn | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionUrlConfigPostBody {

		/**
		 * The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.
		 * Required
		 */
		AuthType: FunctionUrlAuthType;

		/** The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL. */
		Cors?: CreateFunctionUrlConfigPostBodyCors;

		/** <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul> */
		InvokeMode?: InvokeMode | null;
	}
	export interface CreateFunctionUrlConfigPostBodyFormProperties {

		/**
		 * The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.
		 * Required
		 */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,

		/** <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul> */
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateCreateFunctionUrlConfigPostBodyFormGroup() {
		return new FormGroup<CreateFunctionUrlConfigPostBodyFormProperties>({
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined, [Validators.required]),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionUrlConfigPostBodyCors {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}
	export interface CreateFunctionUrlConfigPostBodyCorsFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateCreateFunctionUrlConfigPostBodyCorsFormGroup() {
		return new FormGroup<CreateFunctionUrlConfigPostBodyCorsFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionUrlConfigPutBody {

		/** The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>. */
		AuthType?: FunctionUrlAuthType | null;

		/** The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL. */
		Cors?: UpdateFunctionUrlConfigPutBodyCors;

		/** <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul> */
		InvokeMode?: InvokeMode | null;
	}
	export interface UpdateFunctionUrlConfigPutBodyFormProperties {

		/** The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>. */
		AuthType: FormControl<FunctionUrlAuthType | null | undefined>,

		/** <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p> </li> </ul> */
		InvokeMode: FormControl<InvokeMode | null | undefined>,
	}
	export function CreateUpdateFunctionUrlConfigPutBodyFormGroup() {
		return new FormGroup<UpdateFunctionUrlConfigPutBodyFormProperties>({
			AuthType: new FormControl<FunctionUrlAuthType | null | undefined>(undefined),
			InvokeMode: new FormControl<InvokeMode | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionUrlConfigPutBodyCors {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}
	export interface UpdateFunctionUrlConfigPutBodyCorsFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFunctionUrlConfigPutBodyCorsFormGroup() {
		return new FormGroup<UpdateFunctionUrlConfigPutBodyCorsFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateAliasPutBody {

		/**
		 * The function version that the alias invokes.
		 * Min length: 1
		 * Max length: 1024
		 */
		FunctionVersion?: string | null;

		/**
		 * A description of the alias.
		 * Min length: 0
		 * Max length: 256
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
		 * Min length: 1
		 * Max length: 1024
		 */
		FunctionVersion: FormControl<string | null | undefined>,

		/**
		 * A description of the alias.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,

		/** Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasPutBodyFormGroup() {
		return new FormGroup<UpdateAliasPutBodyFormProperties>({
			FunctionVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('(\$LATEST|[0-9]+)')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
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

	export interface UpdateCodeSigningConfigPutBody {

		/**
		 * Descriptive name for this code signing configuration.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/** List of signing profiles that can sign a code package. */
		AllowedPublishers?: UpdateCodeSigningConfigPutBodyAllowedPublishers;

		/** Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry. */
		CodeSigningPolicies?: UpdateCodeSigningConfigPutBodyCodeSigningPolicies;
	}
	export interface UpdateCodeSigningConfigPutBodyFormProperties {

		/**
		 * Descriptive name for this code signing configuration.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCodeSigningConfigPutBodyFormGroup() {
		return new FormGroup<UpdateCodeSigningConfigPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export interface UpdateCodeSigningConfigPutBodyAllowedPublishers {
		SigningProfileVersionArns?: Array<string>;
	}
	export interface UpdateCodeSigningConfigPutBodyAllowedPublishersFormProperties {
	}
	export function CreateUpdateCodeSigningConfigPutBodyAllowedPublishersFormGroup() {
		return new FormGroup<UpdateCodeSigningConfigPutBodyAllowedPublishersFormProperties>({
		});

	}

	export interface UpdateCodeSigningConfigPutBodyCodeSigningPolicies {
		UntrustedArtifactOnDeployment?: CodeSigningPolicy;
	}
	export interface UpdateCodeSigningConfigPutBodyCodeSigningPoliciesFormProperties {
		UntrustedArtifactOnDeployment: FormControl<CodeSigningPolicy | null | undefined>,
	}
	export function CreateUpdateCodeSigningConfigPutBodyCodeSigningPoliciesFormGroup() {
		return new FormGroup<UpdateCodeSigningConfigPutBodyCodeSigningPoliciesFormProperties>({
			UntrustedArtifactOnDeployment: new FormControl<CodeSigningPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourceMappingPutBody {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName?: string | null;

		/** <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p> */
		Enabled?: boolean | null;

		/**
		 * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize?: number | null;

		/** An object that contains the filters for an event source. */
		FilterCriteria?: UpdateEventSourceMappingPutBodyFilterCriteria;

		/**
		 * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds?: number | null;

		/** A configuration object that specifies the destination of an event after Lambda processes it. */
		DestinationConfig?: UpdateEventSourceMappingPutBodyDestinationConfig;

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).
		 * Minimum: -1
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds?: number | null;

		/** (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError?: boolean | null;

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
		 * Minimum: -1
		 * Maximum: 10000
		 */
		MaximumRetryAttempts?: number | null;

		/**
		 * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor?: number | null;

		/**
		 * An array of authentication protocols or VPC components required to secure your event source.
		 * Minimum items: 0
		 * Maximum items: 22
		 */
		SourceAccessConfigurations?: Array<SourceAccessConfiguration>;

		/**
		 * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
		 * Minimum: 0
		 * Maximum: 900
		 */
		TumblingWindowInSeconds?: number | null;

		/**
		 * (Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		FunctionResponseTypes?: Array<FunctionResponseType>;

		/** (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value. */
		ScalingConfig?: UpdateEventSourceMappingPutBodyScalingConfig;

		/** Specific configuration settings for a DocumentDB event source. */
		DocumentDBEventSourceConfig?: UpdateEventSourceMappingPutBodyDocumentDBEventSourceConfig;
	}
	export interface UpdateEventSourceMappingPutBodyFormProperties {

		/**
		 * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
		 * Min length: 1
		 * Max length: 140
		 */
		FunctionName: FormControl<string | null | undefined>,

		/** <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p> */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
		 * Minimum: 1
		 * Maximum: 10000
		 */
		BatchSize: FormControl<number | null | undefined>,

		/**
		 * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
		 * Minimum: 0
		 * Maximum: 300
		 */
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).
		 * Minimum: -1
		 * Maximum: 604800
		 */
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,

		/** (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. */
		BisectBatchOnFunctionError: FormControl<boolean | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
		 * Minimum: -1
		 * Maximum: 10000
		 */
		MaximumRetryAttempts: FormControl<number | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
		 * Minimum: 1
		 * Maximum: 10
		 */
		ParallelizationFactor: FormControl<number | null | undefined>,

		/**
		 * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
		 * Minimum: 0
		 * Maximum: 900
		 */
		TumblingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingPutBodyFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyFormProperties>({
			FunctionName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(604800)]),
			BisectBatchOnFunctionError: new FormControl<boolean | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(10000)]),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			TumblingWindowInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(900)]),
		});

	}

	export interface UpdateEventSourceMappingPutBodyFilterCriteria {
		Filters?: Array<Filter>;
	}
	export interface UpdateEventSourceMappingPutBodyFilterCriteriaFormProperties {
	}
	export function CreateUpdateEventSourceMappingPutBodyFilterCriteriaFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyFilterCriteriaFormProperties>({
		});

	}

	export interface UpdateEventSourceMappingPutBodyDestinationConfig {
		OnSuccess?: OnSuccess;
		OnFailure?: OnFailure;
	}
	export interface UpdateEventSourceMappingPutBodyDestinationConfigFormProperties {
	}
	export function CreateUpdateEventSourceMappingPutBodyDestinationConfigFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyDestinationConfigFormProperties>({
		});

	}

	export interface UpdateEventSourceMappingPutBodyScalingConfig {
		MaximumConcurrency?: number | null;
	}
	export interface UpdateEventSourceMappingPutBodyScalingConfigFormProperties {
		MaximumConcurrency: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingPutBodyScalingConfigFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyScalingConfigFormProperties>({
			MaximumConcurrency: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourceMappingPutBodyDocumentDBEventSourceConfig {
		DatabaseName?: string;
		CollectionName?: string;
		FullDocument?: FullDocument;
	}
	export interface UpdateEventSourceMappingPutBodyDocumentDBEventSourceConfigFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		CollectionName: FormControl<string | null | undefined>,
		FullDocument: FormControl<FullDocument | null | undefined>,
	}
	export function CreateUpdateEventSourceMappingPutBodyDocumentDBEventSourceConfigFormGroup() {
		return new FormGroup<UpdateEventSourceMappingPutBodyDocumentDBEventSourceConfigFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			CollectionName: new FormControl<string | null | undefined>(undefined),
			FullDocument: new FormControl<FullDocument | null | undefined>(undefined),
		});

	}

	export interface PutFunctionCodeSigningConfigPutBody {

		/**
		 * The The Amazon Resource Name (ARN) of the code signing configuration.
		 * Required
		 * Max length: 200
		 */
		CodeSigningConfigArn: string;
	}
	export interface PutFunctionCodeSigningConfigPutBodyFormProperties {

		/**
		 * The The Amazon Resource Name (ARN) of the code signing configuration.
		 * Required
		 * Max length: 200
		 */
		CodeSigningConfigArn: FormControl<string | null | undefined>,
	}
	export function CreatePutFunctionCodeSigningConfigPutBodyFormGroup() {
		return new FormGroup<PutFunctionCodeSigningConfigPutBodyFormProperties>({
			CodeSigningConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(200), Validators.pattern('arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:code-signing-config:csc-[a-z0-9]{17}')]),
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
		OnSuccess?: OnSuccess;
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
		OnSuccess?: OnSuccess;
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
		 * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.
		 * Max length: 128
		 */
		Handler?: string | null;

		/**
		 * A description of the function.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/**
		 * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.
		 * Minimum: 1
		 */
		Timeout?: number | null;

		/**
		 * The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
		 * Minimum: 128
		 * Maximum: 10240
		 */
		MemorySize?: number | null;

		/** The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>. */
		VpcConfig?: UpdateFunctionConfigurationPutBodyVpcConfig;

		/** A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration. */
		Environment?: UpdateFunctionConfigurationPutBodyEnvironment;

		/** <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p> */
		Runtime?: Runtime | null;

		/** The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations. */
		DeadLetterConfig?: UpdateFunctionConfigurationPutBodyDeadLetterConfig;

		/** The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key. */
		KMSKeyArn?: string | null;

		/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>. */
		TracingConfig?: UpdateFunctionConfigurationPutBodyTracingConfig;

		/** Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string | null;

		/** A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version. */
		Layers?: Array<string>;

		/**
		 * Connection settings for an Amazon EFS file system.
		 * Maximum items: 1
		 */
		FileSystemConfigs?: Array<FileSystemConfig>;

		/** Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>. */
		ImageConfig?: UpdateFunctionConfigurationPutBodyImageConfig;

		/** The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB. */
		EphemeralStorage?: UpdateFunctionConfigurationPutBodyEphemeralStorage;

		/** The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. */
		SnapStart?: UpdateFunctionConfigurationPutBodySnapStart;
	}
	export interface UpdateFunctionConfigurationPutBodyFormProperties {

		/** The Amazon Resource Name (ARN) of the function's execution role. */
		Role: FormControl<string | null | undefined>,

		/**
		 * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.
		 * Max length: 128
		 */
		Handler: FormControl<string | null | undefined>,

		/**
		 * A description of the function.
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.
		 * Minimum: 1
		 */
		Timeout: FormControl<number | null | undefined>,

		/**
		 * The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
		 * Minimum: 128
		 * Maximum: 10240
		 */
		MemorySize: FormControl<number | null | undefined>,

		/** <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p> */
		Runtime: FormControl<Runtime | null | undefined>,

		/** The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key. */
		KMSKeyArn: FormControl<string | null | undefined>,

		/** Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			Handler: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[^\s]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MemorySize: new FormControl<number | null | undefined>(undefined, [Validators.min(128), Validators.max(10240)]),
			Runtime: new FormControl<Runtime | null | undefined>(undefined),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()')]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodyVpcConfig {
		SubnetIds?: Array<string>;
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

	export interface UpdateFunctionConfigurationPutBodyDeadLetterConfig {
		TargetArn?: string;
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
		Mode?: TracingMode;
	}
	export interface UpdateFunctionConfigurationPutBodyTracingConfigFormProperties {
		Mode: FormControl<TracingMode | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyTracingConfigFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyTracingConfigFormProperties>({
			Mode: new FormControl<TracingMode | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodyImageConfig {
		EntryPoint?: Array<string>;
		Command?: Array<string>;
		WorkingDirectory?: string;
	}
	export interface UpdateFunctionConfigurationPutBodyImageConfigFormProperties {
		WorkingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyImageConfigFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyImageConfigFormProperties>({
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodyEphemeralStorage {
		Size?: number | null;
	}
	export interface UpdateFunctionConfigurationPutBodyEphemeralStorageFormProperties {
		Size: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodyEphemeralStorageFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodyEphemeralStorageFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionConfigurationPutBodySnapStart {
		ApplyOn?: SnapStartApplyOn;
	}
	export interface UpdateFunctionConfigurationPutBodySnapStartFormProperties {
		ApplyOn: FormControl<SnapStartApplyOn | null | undefined>,
	}
	export function CreateUpdateFunctionConfigurationPutBodySnapStartFormGroup() {
		return new FormGroup<UpdateFunctionConfigurationPutBodySnapStartFormProperties>({
			ApplyOn: new FormControl<SnapStartApplyOn | null | undefined>(undefined),
		});

	}

	export enum GetLayerVersionByArnFind { LayerVersion = 'LayerVersion' }

	export interface PutRuntimeManagementConfigPutBody {

		/**
		 * <p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>
		 * Required
		 */
		UpdateRuntimeOn: UpdateRuntimeOn;

		/**
		 * <p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>
		 * Min length: 26
		 * Max length: 2048
		 */
		RuntimeVersionArn?: string | null;
	}
	export interface PutRuntimeManagementConfigPutBodyFormProperties {

		/**
		 * <p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>
		 * Required
		 */
		UpdateRuntimeOn: FormControl<UpdateRuntimeOn | null | undefined>,

		/**
		 * <p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>
		 * Min length: 26
		 * Max length: 2048
		 */
		RuntimeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuntimeManagementConfigPutBodyFormGroup() {
		return new FormGroup<PutRuntimeManagementConfigPutBodyFormProperties>({
			UpdateRuntimeOn: new FormControl<UpdateRuntimeOn | null | undefined>(undefined, [Validators.required]),
			RuntimeVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(26), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z-]*):lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}::runtime:.+$')]),
		});

	}

	export interface InvokePostBody {

		/** <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p> */
		Payload?: string | null;
	}
	export interface InvokePostBodyFormProperties {

		/** <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p> */
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

	export interface InvokeWithResponseStreamPostBody {

		/** <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p> */
		Payload?: string | null;
	}
	export interface InvokeWithResponseStreamPostBodyFormProperties {

		/** <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p> */
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateInvokeWithResponseStreamPostBodyFormGroup() {
		return new FormGroup<InvokeWithResponseStreamPostBodyFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishLayerVersionPostBody {

		/**
		 * The description of the version.
		 * Min length: 0
		 * Max length: 256
		 */
		Description?: string | null;

		/**
		 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
		 * Required
		 */
		Content: PublishLayerVersionPostBodyContent;

		/**
		 * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
		 * Maximum items: 15
		 */
		CompatibleRuntimes?: Array<Runtime>;

		/**
		 * <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>
		 * Max length: 512
		 */
		LicenseInfo?: string | null;

		/**
		 * A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.
		 * Maximum items: 2
		 */
		CompatibleArchitectures?: Array<Architecture>;
	}
	export interface PublishLayerVersionPostBodyFormProperties {

		/**
		 * The description of the version.
		 * Min length: 0
		 * Max length: 256
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
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			LicenseInfo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}

	export interface PublishLayerVersionPostBodyContent {
		S3Bucket?: string;
		S3Key?: string;
		S3ObjectVersion?: string;
		ZipFile?: string;
	}
	export interface PublishLayerVersionPostBodyContentFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3Key: FormControl<string | null | undefined>,
		S3ObjectVersion: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreatePublishLayerVersionPostBodyContentFormGroup() {
		return new FormGroup<PublishLayerVersionPostBodyContentFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3Key: new FormControl<string | null | undefined>(undefined),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * Min length: 0
		 * Max length: 256
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
		 * Min length: 0
		 * Max length: 256
		 */
		Description: FormControl<string | null | undefined>,

		/** Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePublishVersionPostBodyFormGroup() {
		return new FormGroup<PublishVersionPostBodyFormProperties>({
			CodeSha256: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionCodePutBody {

		/** The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package. */
		ZipFile?: string | null;

		/**
		 * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.
		 * Min length: 3
		 * Max length: 63
		 */
		S3Bucket?: string | null;

		/**
		 * The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.
		 * Min length: 1
		 * Max length: 1024
		 */
		S3Key?: string | null;

		/**
		 * For versioned objects, the version of the deployment package object to use.
		 * Min length: 1
		 * Max length: 1024
		 */
		S3ObjectVersion?: string | null;

		/** URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive. */
		ImageUri?: string | null;

		/** Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately. */
		Publish?: boolean | null;

		/** Set to true to validate the request parameters and access permissions without modifying the function code. */
		DryRun?: boolean | null;

		/** Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId?: string | null;

		/**
		 * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Architectures?: Array<Architecture>;
	}
	export interface UpdateFunctionCodePutBodyFormProperties {

		/** The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package. */
		ZipFile: FormControl<string | null | undefined>,

		/**
		 * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.
		 * Min length: 3
		 * Max length: 63
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.
		 * Min length: 1
		 * Max length: 1024
		 */
		S3Key: FormControl<string | null | undefined>,

		/**
		 * For versioned objects, the version of the deployment package object to use.
		 * Min length: 1
		 * Max length: 1024
		 */
		S3ObjectVersion: FormControl<string | null | undefined>,

		/** URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive. */
		ImageUri: FormControl<string | null | undefined>,

		/** Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately. */
		Publish: FormControl<boolean | null | undefined>,

		/** Set to true to validate the request parameters and access permissions without modifying the function code. */
		DryRun: FormControl<boolean | null | undefined>,

		/** Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it. */
		RevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionCodePutBodyFormGroup() {
		return new FormGroup<UpdateFunctionCodePutBodyFormProperties>({
			ZipFile: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			S3Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			S3ObjectVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ImageUri: new FormControl<string | null | undefined>(undefined),
			Publish: new FormControl<boolean | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			RevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

