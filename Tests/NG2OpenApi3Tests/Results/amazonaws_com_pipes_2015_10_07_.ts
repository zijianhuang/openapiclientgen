import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreatePipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeState;
		LastModifiedTime?: Date;
		Name?: string;
	}
	export interface CreatePipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipeResponseFormGroup() {
		return new FormGroup<CreatePipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PipeState { RUNNING = 'RUNNING', STOPPED = 'STOPPED', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', STARTING = 'STARTING', STOPPING = 'STOPPING', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED', START_FAILED = 'START_FAILED', STOP_FAILED = 'STOP_FAILED' }

	export enum RequestedPipeState { RUNNING = 'RUNNING', STOPPED = 'STOPPED' }


	/** These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence. */
	export interface PipeEnrichmentHttpParameters {
		HeaderParameters?: HeaderParametersMap;
		PathParameterValues?: Array<string>;
		QueryStringParameters?: QueryStringParametersMap;
	}

	/** These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence. */
	export interface PipeEnrichmentHttpParametersFormProperties {
	}
	export function CreatePipeEnrichmentHttpParametersFormGroup() {
		return new FormGroup<PipeEnrichmentHttpParametersFormProperties>({
		});

	}

	export interface HeaderParametersMap {
	}
	export interface HeaderParametersMapFormProperties {
	}
	export function CreateHeaderParametersMapFormGroup() {
		return new FormGroup<HeaderParametersMapFormProperties>({
		});

	}

	export interface QueryStringParametersMap {
	}
	export interface QueryStringParametersMapFormProperties {
	}
	export function CreateQueryStringParametersMapFormGroup() {
		return new FormGroup<QueryStringParametersMapFormProperties>({
		});

	}


	/** The parameters for using an Active MQ broker as a source. */
	export interface PipeSourceActiveMQBrokerParameters {
		BatchSize?: number | null;

		/** Required */
		Credentials: MQBrokerAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;

		/** Required */
		QueueName: string;
	}

	/** The parameters for using an Active MQ broker as a source. */
	export interface PipeSourceActiveMQBrokerParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/** Required */
		QueueName: FormControl<string | null | undefined>,
	}
	export function CreatePipeSourceActiveMQBrokerParametersFormGroup() {
		return new FormGroup<PipeSourceActiveMQBrokerParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Secrets Manager secret that stores your broker credentials. */
	export interface MQBrokerAccessCredentials {
		BasicAuth?: string;
	}

	/** The Secrets Manager secret that stores your broker credentials. */
	export interface MQBrokerAccessCredentialsFormProperties {
		BasicAuth: FormControl<string | null | undefined>,
	}
	export function CreateMQBrokerAccessCredentialsFormGroup() {
		return new FormGroup<MQBrokerAccessCredentialsFormProperties>({
			BasicAuth: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a DynamoDB stream as a source. */
	export interface PipeSourceDynamoDBStreamParameters {
		BatchSize?: number | null;
		DeadLetterConfig?: DeadLetterConfig;
		MaximumBatchingWindowInSeconds?: number | null;
		MaximumRecordAgeInSeconds?: number | null;
		MaximumRetryAttempts?: number | null;
		OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
		ParallelizationFactor?: number | null;

		/** Required */
		StartingPosition: DynamoDBStreamStartPosition;
	}

	/** The parameters for using a DynamoDB stream as a source. */
	export interface PipeSourceDynamoDBStreamParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		OnPartialBatchItemFailure: FormControl<OnPartialBatchItemFailureStreams | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,

		/** Required */
		StartingPosition: FormControl<DynamoDBStreamStartPosition | null | undefined>,
	}
	export function CreatePipeSourceDynamoDBStreamParametersFormGroup() {
		return new FormGroup<PipeSourceDynamoDBStreamParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			OnPartialBatchItemFailure: new FormControl<OnPartialBatchItemFailureStreams | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
			StartingPosition: new FormControl<DynamoDBStreamStartPosition | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration. */
	export interface DeadLetterConfig {
		Arn?: string;
	}

	/** A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration. */
	export interface DeadLetterConfigFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeadLetterConfigFormGroup() {
		return new FormGroup<DeadLetterConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnPartialBatchItemFailureStreams { AUTOMATIC_BISECT = 'AUTOMATIC_BISECT' }

	export enum DynamoDBStreamStartPosition { TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST' }


	/** The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>. */
	export interface FilterCriteria {
		Filters?: Array<Filter>;
	}

	/** The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>. */
	export interface FilterCriteriaFormProperties {
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
		});

	}


	/** Filter events using an event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>. */
	export interface Filter {
		Pattern?: string;
	}

	/** Filter events using an event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>. */
	export interface FilterFormProperties {
		Pattern: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Kinesis stream as a source. */
	export interface PipeSourceKinesisStreamParameters {
		BatchSize?: number | null;
		DeadLetterConfig?: DeadLetterConfig;
		MaximumBatchingWindowInSeconds?: number | null;
		MaximumRecordAgeInSeconds?: number | null;
		MaximumRetryAttempts?: number | null;
		OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
		ParallelizationFactor?: number | null;

		/** Required */
		StartingPosition: KinesisStreamStartPosition;
		StartingPositionTimestamp?: Date;
	}

	/** The parameters for using a Kinesis stream as a source. */
	export interface PipeSourceKinesisStreamParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		OnPartialBatchItemFailure: FormControl<OnPartialBatchItemFailureStreams | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,

		/** Required */
		StartingPosition: FormControl<KinesisStreamStartPosition | null | undefined>,
		StartingPositionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePipeSourceKinesisStreamParametersFormGroup() {
		return new FormGroup<PipeSourceKinesisStreamParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			OnPartialBatchItemFailure: new FormControl<OnPartialBatchItemFailureStreams | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
			StartingPosition: new FormControl<KinesisStreamStartPosition | null | undefined>(undefined, [Validators.required]),
			StartingPositionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum KinesisStreamStartPosition { TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST', AT_TIMESTAMP = 'AT_TIMESTAMP' }


	/** The parameters for using an MSK stream as a source. */
	export interface PipeSourceManagedStreamingKafkaParameters {
		BatchSize?: number | null;
		ConsumerGroupID?: string;
		Credentials?: MSKAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
		StartingPosition?: DynamoDBStreamStartPosition;

		/** Required */
		TopicName: string;
	}

	/** The parameters for using an MSK stream as a source. */
	export interface PipeSourceManagedStreamingKafkaParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		ConsumerGroupID: FormControl<string | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		StartingPosition: FormControl<DynamoDBStreamStartPosition | null | undefined>,

		/** Required */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreatePipeSourceManagedStreamingKafkaParametersFormGroup() {
		return new FormGroup<PipeSourceManagedStreamingKafkaParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			ConsumerGroupID: new FormControl<string | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			StartingPosition: new FormControl<DynamoDBStreamStartPosition | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Secrets Manager secret that stores your stream credentials. */
	export interface MSKAccessCredentials {
		ClientCertificateTlsAuth?: string;
		SaslScram512Auth?: string;
	}

	/** The Secrets Manager secret that stores your stream credentials. */
	export interface MSKAccessCredentialsFormProperties {
		ClientCertificateTlsAuth: FormControl<string | null | undefined>,
		SaslScram512Auth: FormControl<string | null | undefined>,
	}
	export function CreateMSKAccessCredentialsFormGroup() {
		return new FormGroup<MSKAccessCredentialsFormProperties>({
			ClientCertificateTlsAuth: new FormControl<string | null | undefined>(undefined),
			SaslScram512Auth: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Rabbit MQ broker as a source. */
	export interface PipeSourceRabbitMQBrokerParameters {
		BatchSize?: number | null;

		/** Required */
		Credentials: MQBrokerAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;

		/** Required */
		QueueName: string;
		VirtualHost?: string;
	}

	/** The parameters for using a Rabbit MQ broker as a source. */
	export interface PipeSourceRabbitMQBrokerParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,

		/** Required */
		QueueName: FormControl<string | null | undefined>,
		VirtualHost: FormControl<string | null | undefined>,
	}
	export function CreatePipeSourceRabbitMQBrokerParametersFormGroup() {
		return new FormGroup<PipeSourceRabbitMQBrokerParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VirtualHost: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a self-managed Apache Kafka stream as a source. */
	export interface PipeSourceSelfManagedKafkaParameters {
		AdditionalBootstrapServers?: Array<string>;
		BatchSize?: number | null;
		ConsumerGroupID?: string;
		Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
		ServerRootCaCertificate?: string;
		StartingPosition?: DynamoDBStreamStartPosition;

		/** Required */
		TopicName: string;
		Vpc?: SelfManagedKafkaAccessConfigurationVpc;
	}

	/** The parameters for using a self-managed Apache Kafka stream as a source. */
	export interface PipeSourceSelfManagedKafkaParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		ConsumerGroupID: FormControl<string | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		ServerRootCaCertificate: FormControl<string | null | undefined>,
		StartingPosition: FormControl<DynamoDBStreamStartPosition | null | undefined>,

		/** Required */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreatePipeSourceSelfManagedKafkaParametersFormGroup() {
		return new FormGroup<PipeSourceSelfManagedKafkaParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			ConsumerGroupID: new FormControl<string | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			ServerRootCaCertificate: new FormControl<string | null | undefined>(undefined),
			StartingPosition: new FormControl<DynamoDBStreamStartPosition | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Secrets Manager secret that stores your stream credentials. */
	export interface SelfManagedKafkaAccessConfigurationCredentials {
		BasicAuth?: string;
		ClientCertificateTlsAuth?: string;
		SaslScram256Auth?: string;
		SaslScram512Auth?: string;
	}

	/** The Secrets Manager secret that stores your stream credentials. */
	export interface SelfManagedKafkaAccessConfigurationCredentialsFormProperties {
		BasicAuth: FormControl<string | null | undefined>,
		ClientCertificateTlsAuth: FormControl<string | null | undefined>,
		SaslScram256Auth: FormControl<string | null | undefined>,
		SaslScram512Auth: FormControl<string | null | undefined>,
	}
	export function CreateSelfManagedKafkaAccessConfigurationCredentialsFormGroup() {
		return new FormGroup<SelfManagedKafkaAccessConfigurationCredentialsFormProperties>({
			BasicAuth: new FormControl<string | null | undefined>(undefined),
			ClientCertificateTlsAuth: new FormControl<string | null | undefined>(undefined),
			SaslScram256Auth: new FormControl<string | null | undefined>(undefined),
			SaslScram512Auth: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used. */
	export interface SelfManagedKafkaAccessConfigurationVpc {
		SecurityGroup?: Array<string>;
		Subnets?: Array<string>;
	}

	/** This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used. */
	export interface SelfManagedKafkaAccessConfigurationVpcFormProperties {
	}
	export function CreateSelfManagedKafkaAccessConfigurationVpcFormGroup() {
		return new FormGroup<SelfManagedKafkaAccessConfigurationVpcFormProperties>({
		});

	}


	/** The parameters for using a Amazon SQS stream as a source. */
	export interface PipeSourceSqsQueueParameters {
		BatchSize?: number | null;
		MaximumBatchingWindowInSeconds?: number | null;
	}

	/** The parameters for using a Amazon SQS stream as a source. */
	export interface PipeSourceSqsQueueParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePipeSourceSqsQueueParametersFormGroup() {
		return new FormGroup<PipeSourceSqsQueueParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using an Batch job as a target. */
	export interface PipeTargetBatchJobParameters {
		ArrayProperties?: BatchArrayProperties;
		ContainerOverrides?: BatchContainerOverrides;
		DependsOn?: Array<BatchJobDependency>;

		/** Required */
		JobDefinition: string;

		/** Required */
		JobName: string;
		Parameters?: BatchParametersMap;
		RetryStrategy?: BatchRetryStrategy;
	}

	/** The parameters for using an Batch job as a target. */
	export interface PipeTargetBatchJobParametersFormProperties {

		/** Required */
		JobDefinition: FormControl<string | null | undefined>,

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetBatchJobParametersFormGroup() {
		return new FormGroup<PipeTargetBatchJobParametersFormProperties>({
			JobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job. */
	export interface BatchArrayProperties {
		Size?: number | null;
	}

	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job. */
	export interface BatchArrayPropertiesFormProperties {
		Size: FormControl<number | null | undefined>,
	}
	export function CreateBatchArrayPropertiesFormGroup() {
		return new FormGroup<BatchArrayPropertiesFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The overrides that are sent to a container. */
	export interface BatchContainerOverrides {
		Command?: Array<string>;
		Environment?: Array<BatchEnvironmentVariable>;
		InstanceType?: string;
		ResourceRequirements?: Array<BatchResourceRequirement>;
	}

	/** The overrides that are sent to a container. */
	export interface BatchContainerOverridesFormProperties {
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateBatchContainerOverridesFormGroup() {
		return new FormGroup<BatchContainerOverridesFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.</p> <note> <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p> </note> */
	export interface BatchEnvironmentVariable {
		Name?: string;
		Value?: string;
	}

	/** <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.</p> <note> <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p> </note> */
	export interface BatchEnvironmentVariableFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateBatchEnvironmentVariableFormGroup() {
		return new FormGroup<BatchEnvironmentVariableFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>. */
	export interface BatchResourceRequirement {

		/** Required */
		Type: BatchResourceRequirementType;

		/** Required */
		Value: string;
	}

	/** The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>. */
	export interface BatchResourceRequirementFormProperties {

		/** Required */
		Type: FormControl<BatchResourceRequirementType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateBatchResourceRequirementFormGroup() {
		return new FormGroup<BatchResourceRequirementFormProperties>({
			Type: new FormControl<BatchResourceRequirementType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchResourceRequirementType { GPU = 'GPU', MEMORY = 'MEMORY', VCPU = 'VCPU' }


	/** An object that represents an Batch job dependency. */
	export interface BatchJobDependency {
		JobId?: string;
		Type?: BatchJobDependencyType;
	}

	/** An object that represents an Batch job dependency. */
	export interface BatchJobDependencyFormProperties {
		JobId: FormControl<string | null | undefined>,
		Type: FormControl<BatchJobDependencyType | null | undefined>,
	}
	export function CreateBatchJobDependencyFormGroup() {
		return new FormGroup<BatchJobDependencyFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<BatchJobDependencyType | null | undefined>(undefined),
		});

	}

	export enum BatchJobDependencyType { N_TO_N = 'N_TO_N', SEQUENTIAL = 'SEQUENTIAL' }

	export interface BatchParametersMap {
	}
	export interface BatchParametersMapFormProperties {
	}
	export function CreateBatchParametersMapFormGroup() {
		return new FormGroup<BatchParametersMapFormProperties>({
		});

	}


	/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html"> Automated job retries</a> in the <i>Batch User Guide</i>. */
	export interface BatchRetryStrategy {
		Attempts?: number | null;
	}

	/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html"> Automated job retries</a> in the <i>Batch User Guide</i>. */
	export interface BatchRetryStrategyFormProperties {
		Attempts: FormControl<number | null | undefined>,
	}
	export function CreateBatchRetryStrategyFormGroup() {
		return new FormGroup<BatchRetryStrategyFormProperties>({
			Attempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using an CloudWatch Logs log stream as a target. */
	export interface PipeTargetCloudWatchLogsParameters {
		LogStreamName?: string;
		Timestamp?: string;
	}

	/** The parameters for using an CloudWatch Logs log stream as a target. */
	export interface PipeTargetCloudWatchLogsParametersFormProperties {
		LogStreamName: FormControl<string | null | undefined>,
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetCloudWatchLogsParametersFormGroup() {
		return new FormGroup<PipeTargetCloudWatchLogsParametersFormProperties>({
			LogStreamName: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using an Amazon ECS task as a target. */
	export interface PipeTargetEcsTaskParameters {
		CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		EnableECSManagedTags?: boolean | null;
		EnableExecuteCommand?: boolean | null;
		Group?: string;
		LaunchType?: LaunchType;
		NetworkConfiguration?: NetworkConfiguration;
		Overrides?: EcsTaskOverride;
		PlacementConstraints?: Array<PlacementConstraint>;
		PlacementStrategy?: Array<PlacementStrategy>;
		PlatformVersion?: string;
		PropagateTags?: PropagateTags;
		ReferenceId?: string;
		Tags?: Array<Tag>;
		TaskCount?: number | null;

		/** Required */
		TaskDefinitionArn: string;
	}

	/** The parameters for using an Amazon ECS task as a target. */
	export interface PipeTargetEcsTaskParametersFormProperties {
		EnableECSManagedTags: FormControl<boolean | null | undefined>,
		EnableExecuteCommand: FormControl<boolean | null | undefined>,
		Group: FormControl<string | null | undefined>,
		LaunchType: FormControl<LaunchType | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		PropagateTags: FormControl<PropagateTags | null | undefined>,
		ReferenceId: FormControl<string | null | undefined>,
		TaskCount: FormControl<number | null | undefined>,

		/** Required */
		TaskDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetEcsTaskParametersFormGroup() {
		return new FormGroup<PipeTargetEcsTaskParametersFormProperties>({
			EnableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			EnableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			LaunchType: new FormControl<LaunchType | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			PropagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			TaskCount: new FormControl<number | null | undefined>(undefined),
			TaskDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference. */
	export interface CapacityProviderStrategyItem {
		base?: number | null;

		/** Required */
		capacityProvider: string;
		weight?: number | null;
	}

	/** The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference. */
	export interface CapacityProviderStrategyItemFormProperties {
		base: FormControl<number | null | undefined>,

		/** Required */
		capacityProvider: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateCapacityProviderStrategyItemFormGroup() {
		return new FormGroup<CapacityProviderStrategyItemFormProperties>({
			base: new FormControl<number | null | undefined>(undefined),
			capacityProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LaunchType { EC2 = 'EC2', FARGATE = 'FARGATE', EXTERNAL = 'EXTERNAL' }


	/** This structure specifies the network configuration for an Amazon ECS task. */
	export interface NetworkConfiguration {
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** This structure specifies the network configuration for an Amazon ECS task. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfiguration {
		AssignPublicIp?: AssignPublicIp;
		SecurityGroups?: Array<string>;

		/** Required */
		Subnets: Array<string>;
	}

	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfigurationFormProperties {
		AssignPublicIp: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateAwsVpcConfigurationFormGroup() {
		return new FormGroup<AwsVpcConfigurationFormProperties>({
			AssignPublicIp: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export enum AssignPublicIp { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** The overrides that are associated with a task. */
	export interface EcsTaskOverride {
		ContainerOverrides?: Array<EcsContainerOverride>;
		Cpu?: string;
		EphemeralStorage?: EcsEphemeralStorage;
		ExecutionRoleArn?: string;
		InferenceAcceleratorOverrides?: Array<EcsInferenceAcceleratorOverride>;
		Memory?: string;
		TaskRoleArn?: string;
	}

	/** The overrides that are associated with a task. */
	export interface EcsTaskOverrideFormProperties {
		Cpu: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		Memory: FormControl<string | null | undefined>,
		TaskRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateEcsTaskOverrideFormGroup() {
		return new FormGroup<EcsTaskOverrideFormProperties>({
			Cpu: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<string | null | undefined>(undefined),
			TaskRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included. */
	export interface EcsContainerOverride {
		Command?: Array<string>;
		Cpu?: number | null;
		Environment?: Array<EcsEnvironmentVariable>;
		EnvironmentFiles?: Array<EcsEnvironmentFile>;
		Memory?: number | null;
		MemoryReservation?: number | null;
		Name?: string;
		ResourceRequirements?: Array<EcsResourceRequirement>;
	}

	/** The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included. */
	export interface EcsContainerOverrideFormProperties {
		Cpu: FormControl<number | null | undefined>,
		Memory: FormControl<number | null | undefined>,
		MemoryReservation: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateEcsContainerOverrideFormGroup() {
		return new FormGroup<EcsContainerOverrideFormProperties>({
			Cpu: new FormControl<number | null | undefined>(undefined),
			Memory: new FormControl<number | null | undefined>(undefined),
			MemoryReservation: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. */
	export interface EcsEnvironmentVariable {
		name?: string;
		value?: string;
	}

	/** The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. */
	export interface EcsEnvironmentVariableFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEcsEnvironmentVariableFormGroup() {
		return new FormGroup<EcsEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information about the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is only supported for tasks hosted on Fargate using the following platform versions:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> */
	export interface EcsEnvironmentFile {

		/** Required */
		type: EcsEnvironmentFileType;

		/** Required */
		value: string;
	}

	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information about the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is only supported for tasks hosted on Fargate using the following platform versions:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> */
	export interface EcsEnvironmentFileFormProperties {

		/** Required */
		type: FormControl<EcsEnvironmentFileType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEcsEnvironmentFileFormGroup() {
		return new FormGroup<EcsEnvironmentFileFormProperties>({
			type: new FormControl<EcsEnvironmentFileType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EcsEnvironmentFileType { s3 = 's3' }


	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface EcsResourceRequirement {

		/** Required */
		type: EcsResourceRequirementType;

		/** Required */
		value: string;
	}

	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface EcsResourceRequirementFormProperties {

		/** Required */
		type: FormControl<EcsResourceRequirementType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEcsResourceRequirementFormGroup() {
		return new FormGroup<EcsResourceRequirementFormProperties>({
			type: new FormControl<EcsResourceRequirementType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EcsResourceRequirementType { GPU = 'GPU', InferenceAccelerator = 'InferenceAccelerator' }


	/** <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>This parameter is only supported for tasks hosted on Fargate using Linux platform version <code>1.4.0</code> or later. This parameter is not supported for Windows containers on Fargate.</p> </note> */
	export interface EcsEphemeralStorage {

		/** Required */
		sizeInGiB: number;
	}

	/** <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>This parameter is only supported for tasks hosted on Fargate using Linux platform version <code>1.4.0</code> or later. This parameter is not supported for Windows containers on Fargate.</p> </note> */
	export interface EcsEphemeralStorageFormProperties {

		/** Required */
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreateEcsEphemeralStorageFormGroup() {
		return new FormGroup<EcsEphemeralStorageFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface EcsInferenceAcceleratorOverride {
		deviceName?: string;
		deviceType?: string;
	}

	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface EcsInferenceAcceleratorOverrideFormProperties {
		deviceName: FormControl<string | null | undefined>,
		deviceType: FormControl<string | null | undefined>,
	}
	export function CreateEcsInferenceAcceleratorOverrideFormGroup() {
		return new FormGroup<EcsInferenceAcceleratorOverrideFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide. */
	export interface PlacementConstraint {
		expression?: string;
		type?: PlacementConstraintType;
	}

	/** An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide. */
	export interface PlacementConstraintFormProperties {
		expression: FormControl<string | null | undefined>,
		type: FormControl<PlacementConstraintType | null | undefined>,
	}
	export function CreatePlacementConstraintFormGroup() {
		return new FormGroup<PlacementConstraintFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlacementConstraintType | null | undefined>(undefined),
		});

	}

	export enum PlacementConstraintType { distinctInstance = 'distinctInstance', memberOf = 'memberOf' }


	/** The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide. */
	export interface PlacementStrategy {
		field?: string;
		type?: PlacementStrategyType;
	}

	/** The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide. */
	export interface PlacementStrategyFormProperties {
		field: FormControl<string | null | undefined>,
		type: FormControl<PlacementStrategyType | null | undefined>,
	}
	export function CreatePlacementStrategyFormGroup() {
		return new FormGroup<PlacementStrategyFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlacementStrategyType | null | undefined>(undefined),
		});

	}

	export enum PlacementStrategyType { random = 'random', spread = 'spread', binpack = 'binpack' }

	export enum PropagateTags { TASK_DEFINITION = 'TASK_DEFINITION' }


	/** A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters for using an EventBridge event bus as a target. */
	export interface PipeTargetEventBridgeEventBusParameters {
		DetailType?: string;
		EndpointId?: string;
		Resources?: Array<string>;
		Source?: string;
		Time?: string;
	}

	/** The parameters for using an EventBridge event bus as a target. */
	export interface PipeTargetEventBridgeEventBusParametersFormProperties {
		DetailType: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Time: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetEventBridgeEventBusParametersFormGroup() {
		return new FormGroup<PipeTargetEventBridgeEventBusParametersFormProperties>({
			DetailType: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. */
	export interface PipeTargetHttpParameters {
		HeaderParameters?: HeaderParametersMap;
		PathParameterValues?: Array<string>;
		QueryStringParameters?: QueryStringParametersMap;
	}

	/** These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. */
	export interface PipeTargetHttpParametersFormProperties {
	}
	export function CreatePipeTargetHttpParametersFormGroup() {
		return new FormGroup<PipeTargetHttpParametersFormProperties>({
		});

	}


	/** The parameters for using a Kinesis stream as a source. */
	export interface PipeTargetKinesisStreamParameters {

		/** Required */
		PartitionKey: string;
	}

	/** The parameters for using a Kinesis stream as a source. */
	export interface PipeTargetKinesisStreamParametersFormProperties {

		/** Required */
		PartitionKey: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetKinesisStreamParametersFormGroup() {
		return new FormGroup<PipeTargetKinesisStreamParametersFormProperties>({
			PartitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters for using a Lambda function as a target. */
	export interface PipeTargetLambdaFunctionParameters {
		InvocationType?: PipeTargetInvocationType;
	}

	/** The parameters for using a Lambda function as a target. */
	export interface PipeTargetLambdaFunctionParametersFormProperties {
		InvocationType: FormControl<PipeTargetInvocationType | null | undefined>,
	}
	export function CreatePipeTargetLambdaFunctionParametersFormGroup() {
		return new FormGroup<PipeTargetLambdaFunctionParametersFormProperties>({
			InvocationType: new FormControl<PipeTargetInvocationType | null | undefined>(undefined),
		});

	}

	export enum PipeTargetInvocationType { REQUEST_RESPONSE = 'REQUEST_RESPONSE', FIRE_AND_FORGET = 'FIRE_AND_FORGET' }


	/** These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement. */
	export interface PipeTargetRedshiftDataParameters {

		/** Required */
		Database: string;
		DbUser?: string;
		SecretManagerArn?: string;

		/** Required */
		Sqls: Array<string>;
		StatementName?: string;
		WithEvent?: boolean | null;
	}

	/** These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement. */
	export interface PipeTargetRedshiftDataParametersFormProperties {

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		SecretManagerArn: FormControl<string | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		WithEvent: FormControl<boolean | null | undefined>,
	}
	export function CreatePipeTargetRedshiftDataParametersFormGroup() {
		return new FormGroup<PipeTargetRedshiftDataParametersFormProperties>({
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			SecretManagerArn: new FormControl<string | null | undefined>(undefined),
			StatementName: new FormControl<string | null | undefined>(undefined),
			WithEvent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The parameters for using a SageMaker pipeline as a target. */
	export interface PipeTargetSageMakerPipelineParameters {
		PipelineParameterList?: Array<SageMakerPipelineParameter>;
	}

	/** The parameters for using a SageMaker pipeline as a target. */
	export interface PipeTargetSageMakerPipelineParametersFormProperties {
	}
	export function CreatePipeTargetSageMakerPipelineParametersFormGroup() {
		return new FormGroup<PipeTargetSageMakerPipelineParametersFormProperties>({
		});

	}


	/** Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline. */
	export interface SageMakerPipelineParameter {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline. */
	export interface SageMakerPipelineParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSageMakerPipelineParameterFormGroup() {
		return new FormGroup<SageMakerPipelineParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters for using a Amazon SQS stream as a source. */
	export interface PipeTargetSqsQueueParameters {
		MessageDeduplicationId?: string;
		MessageGroupId?: string;
	}

	/** The parameters for using a Amazon SQS stream as a source. */
	export interface PipeTargetSqsQueueParametersFormProperties {
		MessageDeduplicationId: FormControl<string | null | undefined>,
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetSqsQueueParametersFormGroup() {
		return new FormGroup<PipeTargetSqsQueueParametersFormProperties>({
			MessageDeduplicationId: new FormControl<string | null | undefined>(undefined),
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Step Functions state machine as a target. */
	export interface PipeTargetStateMachineParameters {
		InvocationType?: PipeTargetInvocationType;
	}

	/** The parameters for using a Step Functions state machine as a target. */
	export interface PipeTargetStateMachineParametersFormProperties {
		InvocationType: FormControl<PipeTargetInvocationType | null | undefined>,
	}
	export function CreatePipeTargetStateMachineParametersFormGroup() {
		return new FormGroup<PipeTargetStateMachineParametersFormProperties>({
			InvocationType: new FormControl<PipeTargetInvocationType | null | undefined>(undefined),
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeletePipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeStateDescribeResponse;
		LastModifiedTime?: Date;
		Name?: string;
	}
	export interface DeletePipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeStateDescribeResponse | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeletePipeResponseFormGroup() {
		return new FormGroup<DeletePipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeStateDescribeResponse | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RequestedPipeStateDescribeResponse { RUNNING = 'RUNNING', STOPPED = 'STOPPED', DELETED = 'DELETED' }

	export interface DescribePipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		Description?: string;
		DesiredState?: RequestedPipeStateDescribeResponse;
		Enrichment?: string;
		EnrichmentParameters?: PipeEnrichmentParameters;
		LastModifiedTime?: Date;
		Name?: string;
		RoleArn?: string;
		Source?: string;
		SourceParameters?: PipeSourceParameters;
		StateReason?: string;
		Tags?: TagMap;
		Target?: string;
		TargetParameters?: PipeTargetParameters;
	}
	export interface DescribePipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DesiredState: FormControl<RequestedPipeStateDescribeResponse | null | undefined>,
		Enrichment: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateDescribePipeResponseFormGroup() {
		return new FormGroup<DescribePipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeStateDescribeResponse | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters required to set up enrichment on your pipe. */
	export interface PipeEnrichmentParameters {
		HttpParameters?: PipeEnrichmentHttpParameters;
		InputTemplate?: string;
	}

	/** The parameters required to set up enrichment on your pipe. */
	export interface PipeEnrichmentParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreatePipeEnrichmentParametersFormGroup() {
		return new FormGroup<PipeEnrichmentParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters required to set up a source for your pipe. */
	export interface PipeSourceParameters {
		ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
		DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
		FilterCriteria?: FilterCriteria;
		KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
		ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
		RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
		SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
		SqsQueueParameters?: PipeSourceSqsQueueParameters;
	}

	/** The parameters required to set up a source for your pipe. */
	export interface PipeSourceParametersFormProperties {
	}
	export function CreatePipeSourceParametersFormGroup() {
		return new FormGroup<PipeSourceParametersFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** The parameters required to set up a target for your pipe. */
	export interface PipeTargetParameters {
		BatchJobParameters?: PipeTargetBatchJobParameters;
		CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
		EcsTaskParameters?: PipeTargetEcsTaskParameters;
		EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
		HttpParameters?: PipeTargetHttpParameters;
		InputTemplate?: string;
		KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
		LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
		RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
		SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
		SqsQueueParameters?: PipeTargetSqsQueueParameters;
		StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
	}

	/** The parameters required to set up a target for your pipe. */
	export interface PipeTargetParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreatePipeTargetParametersFormGroup() {
		return new FormGroup<PipeTargetParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPipesResponse {
		NextToken?: string;
		Pipes?: Array<Pipe>;
	}
	export interface ListPipesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipesResponseFormGroup() {
		return new FormGroup<ListPipesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code. */
	export interface Pipe {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeState;
		Enrichment?: string;
		LastModifiedTime?: Date;
		Name?: string;
		Source?: string;
		StateReason?: string;
		Target?: string;
	}

	/** An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code. */
	export interface PipeFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		Enrichment: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreatePipeFormGroup() {
		return new FormGroup<PipeFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartPipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeState;
		LastModifiedTime?: Date;
		Name?: string;
	}
	export interface StartPipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartPipeResponseFormGroup() {
		return new FormGroup<StartPipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeState;
		LastModifiedTime?: Date;
		Name?: string;
	}
	export interface StopPipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopPipeResponseFormGroup() {
		return new FormGroup<StopPipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdatePipeResponse {
		Arn?: string;
		CreationTime?: Date;
		CurrentState?: PipeState;
		DesiredState?: RequestedPipeState;
		LastModifiedTime?: Date;
		Name?: string;
	}
	export interface UpdatePipeResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CurrentState: FormControl<PipeState | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipeResponseFormGroup() {
		return new FormGroup<UpdatePipeResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentState: new FormControl<PipeState | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using an Active MQ broker as a source. */
	export interface UpdatePipeSourceActiveMQBrokerParameters {
		BatchSize?: number | null;

		/** Required */
		Credentials: MQBrokerAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
	}

	/** The parameters for using an Active MQ broker as a source. */
	export interface UpdatePipeSourceActiveMQBrokerParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceActiveMQBrokerParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceActiveMQBrokerParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using a DynamoDB stream as a source. */
	export interface UpdatePipeSourceDynamoDBStreamParameters {
		BatchSize?: number | null;
		DeadLetterConfig?: DeadLetterConfig;
		MaximumBatchingWindowInSeconds?: number | null;
		MaximumRecordAgeInSeconds?: number | null;
		MaximumRetryAttempts?: number | null;
		OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
		ParallelizationFactor?: number | null;
	}

	/** The parameters for using a DynamoDB stream as a source. */
	export interface UpdatePipeSourceDynamoDBStreamParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		OnPartialBatchItemFailure: FormControl<OnPartialBatchItemFailureStreams | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceDynamoDBStreamParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceDynamoDBStreamParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			OnPartialBatchItemFailure: new FormControl<OnPartialBatchItemFailureStreams | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Kinesis stream as a source. */
	export interface UpdatePipeSourceKinesisStreamParameters {
		BatchSize?: number | null;
		DeadLetterConfig?: DeadLetterConfig;
		MaximumBatchingWindowInSeconds?: number | null;
		MaximumRecordAgeInSeconds?: number | null;
		MaximumRetryAttempts?: number | null;
		OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
		ParallelizationFactor?: number | null;
	}

	/** The parameters for using a Kinesis stream as a source. */
	export interface UpdatePipeSourceKinesisStreamParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		MaximumRecordAgeInSeconds: FormControl<number | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		OnPartialBatchItemFailure: FormControl<OnPartialBatchItemFailureStreams | null | undefined>,
		ParallelizationFactor: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceKinesisStreamParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceKinesisStreamParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRecordAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			OnPartialBatchItemFailure: new FormControl<OnPartialBatchItemFailureStreams | null | undefined>(undefined),
			ParallelizationFactor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using an MSK stream as a source. */
	export interface UpdatePipeSourceManagedStreamingKafkaParameters {
		BatchSize?: number | null;
		Credentials?: MSKAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
	}

	/** The parameters for using an MSK stream as a source. */
	export interface UpdatePipeSourceManagedStreamingKafkaParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceManagedStreamingKafkaParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceManagedStreamingKafkaParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Rabbit MQ broker as a source. */
	export interface UpdatePipeSourceRabbitMQBrokerParameters {
		BatchSize?: number | null;

		/** Required */
		Credentials: MQBrokerAccessCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
	}

	/** The parameters for using a Rabbit MQ broker as a source. */
	export interface UpdatePipeSourceRabbitMQBrokerParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceRabbitMQBrokerParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceRabbitMQBrokerParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The parameters for using a self-managed Apache Kafka stream as a source. */
	export interface UpdatePipeSourceSelfManagedKafkaParameters {
		BatchSize?: number | null;
		Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
		MaximumBatchingWindowInSeconds?: number | null;
		ServerRootCaCertificate?: string;
		Vpc?: SelfManagedKafkaAccessConfigurationVpc;
	}

	/** The parameters for using a self-managed Apache Kafka stream as a source. */
	export interface UpdatePipeSourceSelfManagedKafkaParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
		ServerRootCaCertificate: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipeSourceSelfManagedKafkaParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceSelfManagedKafkaParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
			ServerRootCaCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for using a Amazon SQS stream as a source. */
	export interface UpdatePipeSourceSqsQueueParameters {
		BatchSize?: number | null;
		MaximumBatchingWindowInSeconds?: number | null;
	}

	/** The parameters for using a Amazon SQS stream as a source. */
	export interface UpdatePipeSourceSqsQueueParametersFormProperties {
		BatchSize: FormControl<number | null | undefined>,
		MaximumBatchingWindowInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePipeSourceSqsQueueParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceSqsQueueParametersFormProperties>({
			BatchSize: new FormControl<number | null | undefined>(undefined),
			MaximumBatchingWindowInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePipeRequest {
		Description?: string;
		DesiredState?: RequestedPipeState;
		Enrichment?: string;
		EnrichmentParameters?: PipeEnrichmentParameters;

		/** Required */
		RoleArn: string;

		/** Required */
		Source: string;
		SourceParameters?: PipeSourceParameters;
		Tags?: TagMap;

		/** Required */
		Target: string;
		TargetParameters?: PipeTargetParameters;
	}
	export interface CreatePipeRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		Enrichment: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipeRequestFormGroup() {
		return new FormGroup<CreatePipeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePipeRequest {
	}
	export interface DeletePipeRequestFormProperties {
	}
	export function CreateDeletePipeRequestFormGroup() {
		return new FormGroup<DeletePipeRequestFormProperties>({
		});

	}

	export interface DescribePipeRequest {
	}
	export interface DescribePipeRequestFormProperties {
	}
	export function CreateDescribePipeRequestFormGroup() {
		return new FormGroup<DescribePipeRequestFormProperties>({
		});

	}

	export interface ListPipesRequest {
	}
	export interface ListPipesRequestFormProperties {
	}
	export function CreateListPipesRequestFormGroup() {
		return new FormGroup<ListPipesRequestFormProperties>({
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

	export enum MSKStartPosition { TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST' }

	export enum SelfManagedKafkaStartPosition { TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST' }

	export interface StartPipeRequest {
	}
	export interface StartPipeRequestFormProperties {
	}
	export function CreateStartPipeRequestFormGroup() {
		return new FormGroup<StartPipeRequestFormProperties>({
		});

	}

	export interface StopPipeRequest {
	}
	export interface StopPipeRequestFormProperties {
	}
	export function CreateStopPipeRequestFormGroup() {
		return new FormGroup<StopPipeRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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


	/** The parameters required to set up a source for your pipe. */
	export interface UpdatePipeSourceParameters {
		ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters;
		DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters;
		FilterCriteria?: FilterCriteria;
		KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters;
		ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters;
		RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters;
		SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters;
		SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters;
	}

	/** The parameters required to set up a source for your pipe. */
	export interface UpdatePipeSourceParametersFormProperties {
	}
	export function CreateUpdatePipeSourceParametersFormGroup() {
		return new FormGroup<UpdatePipeSourceParametersFormProperties>({
		});

	}

	export interface UpdatePipeRequest {
		Description?: string;
		DesiredState?: RequestedPipeState;
		Enrichment?: string;
		EnrichmentParameters?: PipeEnrichmentParameters;

		/** Required */
		RoleArn: string;
		SourceParameters?: UpdatePipeSourceParameters;
		Target?: string;
		TargetParameters?: PipeTargetParameters;
	}
	export interface UpdatePipeRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		DesiredState: FormControl<RequestedPipeState | null | undefined>,
		Enrichment: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipeRequestFormGroup() {
		return new FormGroup<UpdatePipeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
		 * Post v1/pipes/{Name}
		 * @param {string} Name The name of the pipe.
		 * @return {CreatePipeResponse} Success
		 */
		CreatePipe(Name: string, requestBody: CreatePipePostBody): Observable<CreatePipeResponse> {
			return this.http.post<CreatePipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
		 * Delete v1/pipes/{Name}
		 * @param {string} Name The name of the pipe.
		 * @return {DeletePipeResponse} Success
		 */
		DeletePipe(Name: string): Observable<DeletePipeResponse> {
			return this.http.delete<DeletePipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
		 * Get v1/pipes/{Name}
		 * @param {string} Name The name of the pipe.
		 * @return {DescribePipeResponse} Success
		 */
		DescribePipe(Name: string): Observable<DescribePipeResponse> {
			return this.http.get<DescribePipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
		 * Put v1/pipes/{Name}
		 * @param {string} Name The name of the pipe.
		 * @return {UpdatePipeResponse} Success
		 */
		UpdatePipe(Name: string, requestBody: UpdatePipePutBody): Observable<UpdatePipeResponse> {
			return this.http.put<UpdatePipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
		 * Get v1/pipes
		 * @param {PipeState} CurrentState The state the pipe is in.
		 * @param {RequestedPipeState} DesiredState The state the pipe should be in.
		 * @param {number} Limit The maximum number of pipes to include in the response.
		 * @param {string} NamePrefix A value that will return a subset of the pipes associated with this account. For example, <code>"NamePrefix": "ABC"</code> will return all endpoints with "ABC" in the name.
		 * @param {string} NextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
		 * @param {string} SourcePrefix The prefix matching the pipe source.
		 * @param {string} TargetPrefix The prefix matching the pipe target.
		 * @return {ListPipesResponse} Success
		 */
		ListPipes(CurrentState: PipeState | null | undefined, DesiredState: RequestedPipeState | null | undefined, Limit: number | null | undefined, NamePrefix: string | null | undefined, NextToken: string | null | undefined, SourcePrefix: string | null | undefined, TargetPrefix: string | null | undefined): Observable<ListPipesResponse> {
			return this.http.get<ListPipesResponse>(this.baseUri + 'v1/pipes?CurrentState=' + CurrentState + '&DesiredState=' + DesiredState + '&Limit=' + Limit + '&NamePrefix=' + (NamePrefix == null ? '' : encodeURIComponent(NamePrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&SourcePrefix=' + (SourcePrefix == null ? '' : encodeURIComponent(SourcePrefix)) + '&TargetPrefix=' + (TargetPrefix == null ? '' : encodeURIComponent(TargetPrefix)), {});
		}

		/**
		 * Displays the tags associated with a pipe.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the pipe for which you want to view tags.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the pipe.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start an existing pipe.
		 * Post v1/pipes/{Name}/start
		 * @param {string} Name The name of the pipe.
		 * @return {StartPipeResponse} Success
		 */
		StartPipe(Name: string): Observable<StartPipeResponse> {
			return this.http.post<StartPipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)) + '/start', null, {});
		}

		/**
		 * Stop an existing pipe.
		 * Post v1/pipes/{Name}/stop
		 * @param {string} Name The name of the pipe.
		 * @return {StopPipeResponse} Success
		 */
		StopPipe(Name: string): Observable<StopPipeResponse> {
			return this.http.post<StopPipeResponse>(this.baseUri + 'v1/pipes/' + (Name == null ? '' : encodeURIComponent(Name)) + '/stop', null, {});
		}

		/**
		 * Removes one or more tags from the specified pipes.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the pipe.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the pipe.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreatePipePostBody {

		/**
		 * A description of the pipe.
		 * Max length: 512
		 * Min length: 0
		 */
		Description?: string | null;

		/** The state the pipe should be in. */
		DesiredState?: RequestedPipeState | null;

		/**
		 * The ARN of the enrichment resource.
		 * Max length: 1600
		 * Min length: 0
		 */
		Enrichment?: string | null;

		/** The parameters required to set up enrichment on your pipe. */
		EnrichmentParameters?: CreatePipePostBodyEnrichmentParameters;

		/**
		 * The ARN of the role that allows the pipe to send data to the target.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: string;

		/**
		 * The ARN of the source resource.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Source: string;

		/** The parameters required to set up a source for your pipe. */
		SourceParameters?: CreatePipePostBodySourceParameters;

		/** The list of key-value pairs to associate with the pipe. */
		Tags?: {[id: string]: string };

		/**
		 * The ARN of the target resource.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Target: string;

		/** The parameters required to set up a target for your pipe. */
		TargetParameters?: CreatePipePostBodyTargetParameters;
	}
	export interface CreatePipePostBodyFormProperties {

		/**
		 * A description of the pipe.
		 * Max length: 512
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The state the pipe should be in. */
		DesiredState: FormControl<RequestedPipeState | null | undefined>,

		/**
		 * The ARN of the enrichment resource.
		 * Max length: 1600
		 * Min length: 0
		 */
		Enrichment: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role that allows the pipe to send data to the target.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the source resource.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,

		/** The list of key-value pairs to associate with the pipe. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The ARN of the target resource.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipePostBodyFormGroup() {
		return new FormGroup<CreatePipePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('^.*$')]),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z0-9+=,.@\-_/]+$')]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^smk://(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]):[0-9]{1,5}|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$')]),
		});

	}

	export interface CreatePipePostBodyEnrichmentParameters {
		HttpParameters?: PipeEnrichmentHttpParameters;
		InputTemplate?: string;
	}
	export interface CreatePipePostBodyEnrichmentParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipePostBodyEnrichmentParametersFormGroup() {
		return new FormGroup<CreatePipePostBodyEnrichmentParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePipePostBodySourceParameters {
		ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
		DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
		FilterCriteria?: FilterCriteria;
		KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
		ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
		RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
		SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
		SqsQueueParameters?: PipeSourceSqsQueueParameters;
	}
	export interface CreatePipePostBodySourceParametersFormProperties {
	}
	export function CreateCreatePipePostBodySourceParametersFormGroup() {
		return new FormGroup<CreatePipePostBodySourceParametersFormProperties>({
		});

	}

	export interface CreatePipePostBodyTargetParameters {
		BatchJobParameters?: PipeTargetBatchJobParameters;
		CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
		EcsTaskParameters?: PipeTargetEcsTaskParameters;
		EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
		HttpParameters?: PipeTargetHttpParameters;
		InputTemplate?: string;
		KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
		LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
		RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
		SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
		SqsQueueParameters?: PipeTargetSqsQueueParameters;
		StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
	}
	export interface CreatePipePostBodyTargetParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipePostBodyTargetParametersFormGroup() {
		return new FormGroup<CreatePipePostBodyTargetParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePipePutBody {

		/**
		 * A description of the pipe.
		 * Max length: 512
		 * Min length: 0
		 */
		Description?: string | null;

		/** The state the pipe should be in. */
		DesiredState?: RequestedPipeState | null;

		/**
		 * The ARN of the enrichment resource.
		 * Max length: 1600
		 * Min length: 0
		 */
		Enrichment?: string | null;

		/** The parameters required to set up enrichment on your pipe. */
		EnrichmentParameters?: UpdatePipePutBodyEnrichmentParameters;

		/**
		 * The ARN of the role that allows the pipe to send data to the target.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: string;

		/** The parameters required to set up a source for your pipe. */
		SourceParameters?: UpdatePipePutBodySourceParameters;

		/**
		 * The ARN of the target resource.
		 * Max length: 1600
		 * Min length: 1
		 */
		Target?: string | null;

		/** The parameters required to set up a target for your pipe. */
		TargetParameters?: UpdatePipePutBodyTargetParameters;
	}
	export interface UpdatePipePutBodyFormProperties {

		/**
		 * A description of the pipe.
		 * Max length: 512
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The state the pipe should be in. */
		DesiredState: FormControl<RequestedPipeState | null | undefined>,

		/**
		 * The ARN of the enrichment resource.
		 * Max length: 1600
		 * Min length: 0
		 */
		Enrichment: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role that allows the pipe to send data to the target.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the target resource.
		 * Max length: 1600
		 * Min length: 1
		 */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipePutBodyFormGroup() {
		return new FormGroup<UpdatePipePutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('^.*$')]),
			DesiredState: new FormControl<RequestedPipeState | null | undefined>(undefined),
			Enrichment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z0-9+=,.@\-_/]+$')]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$')]),
		});

	}

	export interface UpdatePipePutBodyEnrichmentParameters {
		HttpParameters?: PipeEnrichmentHttpParameters;
		InputTemplate?: string;
	}
	export interface UpdatePipePutBodyEnrichmentParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipePutBodyEnrichmentParametersFormGroup() {
		return new FormGroup<UpdatePipePutBodyEnrichmentParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePipePutBodySourceParameters {
		ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters;
		DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters;
		FilterCriteria?: FilterCriteria;
		KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters;
		ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters;
		RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters;
		SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters;
		SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters;
	}
	export interface UpdatePipePutBodySourceParametersFormProperties {
	}
	export function CreateUpdatePipePutBodySourceParametersFormGroup() {
		return new FormGroup<UpdatePipePutBodySourceParametersFormProperties>({
		});

	}

	export interface UpdatePipePutBodyTargetParameters {
		BatchJobParameters?: PipeTargetBatchJobParameters;
		CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
		EcsTaskParameters?: PipeTargetEcsTaskParameters;
		EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
		HttpParameters?: PipeTargetHttpParameters;
		InputTemplate?: string;
		KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
		LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
		RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
		SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
		SqsQueueParameters?: PipeTargetSqsQueueParameters;
		StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
	}
	export interface UpdatePipePutBodyTargetParametersFormProperties {
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipePutBodyTargetParametersFormGroup() {
		return new FormGroup<UpdatePipePutBodyTargetParametersFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value pairs associated with the pipe.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of key-value pairs associated with the pipe.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

