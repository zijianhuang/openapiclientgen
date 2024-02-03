import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateScheduleOutput {

		/** Required */
		ScheduleArn: string;
	}
	export interface CreateScheduleOutputFormProperties {

		/** Required */
		ScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleOutputFormGroup() {
		return new FormGroup<CreateScheduleOutputFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FlexibleTimeWindowMode { OFF = 'OFF', FLEXIBLE = 'FLEXIBLE' }


	/** An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue. */
	export interface DeadLetterConfig {
		Arn?: string;
	}

	/** An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue. */
	export interface DeadLetterConfigFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeadLetterConfigFormGroup() {
		return new FormGroup<DeadLetterConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html"> <code>RunTask</code> </a> API operation. */
	export interface EcsParameters {
		CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		EnableECSManagedTags?: boolean | null;
		EnableExecuteCommand?: boolean | null;
		Group?: string;
		LaunchType?: LaunchType;
		NetworkConfiguration?: NetworkConfiguration;
		PlacementConstraints?: Array<PlacementConstraint>;
		PlacementStrategy?: Array<PlacementStrategy>;
		PlatformVersion?: string;
		PropagateTags?: PropagateTags;
		ReferenceId?: string;
		Tags?: Array<TagMap>;
		TaskCount?: number | null;

		/** Required */
		TaskDefinitionArn: string;
	}

	/** The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html"> <code>RunTask</code> </a> API operation. */
	export interface EcsParametersFormProperties {
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
	export function CreateEcsParametersFormGroup() {
		return new FormGroup<EcsParametersFormProperties>({
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


	/** The details of a capacity provider strategy. */
	export interface CapacityProviderStrategyItem {
		base?: number | null;

		/** Required */
		capacityProvider: string;
		weight?: number | null;
	}

	/** The details of a capacity provider strategy. */
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


	/** Specifies the network configuration for an ECS task. */
	export interface NetworkConfiguration {
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** Specifies the network configuration for an ECS task. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode. */
	export interface AwsVpcConfiguration {
		AssignPublicIp?: AssignPublicIp;
		SecurityGroups?: Array<string>;

		/** Required */
		Subnets: Array<string>;
	}

	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode. */
	export interface AwsVpcConfigurationFormProperties {
		AssignPublicIp: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateAwsVpcConfigurationFormGroup() {
		return new FormGroup<AwsVpcConfigurationFormProperties>({
			AssignPublicIp: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export enum AssignPublicIp { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** An object representing a constraint on task placement. */
	export interface PlacementConstraint {
		expression?: string;
		type?: PlacementConstraintType;
	}

	/** An object representing a constraint on task placement. */
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


	/** The task placement strategy for a task or service. */
	export interface PlacementStrategy {
		field?: string;
		type?: PlacementStrategyType;
	}

	/** The task placement strategy for a task or service. */
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

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html"> <code>PutEvents</code> </a> API operation. */
	export interface EventBridgeParameters {

		/** Required */
		DetailType: string;

		/** Required */
		Source: string;
	}

	/** The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html"> <code>PutEvents</code> </a> API operation. */
	export interface EventBridgeParametersFormProperties {

		/** Required */
		DetailType: FormControl<string | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,
	}
	export function CreateEventBridgeParametersFormGroup() {
		return new FormGroup<EventBridgeParametersFormProperties>({
			DetailType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html"> <code>PutRecord</code> </a> API operation. */
	export interface KinesisParameters {

		/** Required */
		PartitionKey: string;
	}

	/** The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html"> <code>PutRecord</code> </a> API operation. */
	export interface KinesisParametersFormProperties {

		/** Required */
		PartitionKey: FormControl<string | null | undefined>,
	}
	export function CreateKinesisParametersFormGroup() {
		return new FormGroup<KinesisParametersFormProperties>({
			PartitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target. */
	export interface RetryPolicy {
		MaximumEventAgeInSeconds?: number | null;
		MaximumRetryAttempts?: number | null;
	}

	/** A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target. */
	export interface RetryPolicyFormProperties {
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
		MaximumRetryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined),
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html"> <code>StartPipelineExecution</code> </a> API operation. */
	export interface SageMakerPipelineParameters {
		PipelineParameterList?: Array<SageMakerPipelineParameter>;
	}

	/** The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html"> <code>StartPipelineExecution</code> </a> API operation. */
	export interface SageMakerPipelineParametersFormProperties {
	}
	export function CreateSageMakerPipelineParametersFormGroup() {
		return new FormGroup<SageMakerPipelineParametersFormProperties>({
		});

	}


	/** The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline. */
	export interface SageMakerPipelineParameter {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline. */
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


	/** The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html"> <code>SendMessage</code> </a> API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the <i>Amazon SQS Developer Guide</i>.  */
	export interface SqsParameters {
		MessageGroupId?: string;
	}

	/** The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html"> <code>SendMessage</code> </a> API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the <i>Amazon SQS Developer Guide</i>.  */
	export interface SqsParametersFormProperties {
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSqsParametersFormGroup() {
		return new FormGroup<SqsParametersFormProperties>({
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateScheduleGroupOutput {

		/** Required */
		ScheduleGroupArn: string;
	}
	export interface CreateScheduleGroupOutputFormProperties {

		/** Required */
		ScheduleGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleGroupOutputFormGroup() {
		return new FormGroup<CreateScheduleGroupOutputFormProperties>({
			ScheduleGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Tag to associate with a schedule group. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Tag to associate with a schedule group. */
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

	export interface DeleteScheduleOutput {
	}
	export interface DeleteScheduleOutputFormProperties {
	}
	export function CreateDeleteScheduleOutputFormGroup() {
		return new FormGroup<DeleteScheduleOutputFormProperties>({
		});

	}

	export interface DeleteScheduleGroupOutput {
	}
	export interface DeleteScheduleGroupOutputFormProperties {
	}
	export function CreateDeleteScheduleGroupOutputFormGroup() {
		return new FormGroup<DeleteScheduleGroupOutputFormProperties>({
		});

	}

	export interface GetScheduleOutput {
		ActionAfterCompletion?: ActionAfterCompletion;
		Arn?: string;
		CreationDate?: Date;
		Description?: string;
		EndDate?: Date;
		FlexibleTimeWindow?: FlexibleTimeWindow;
		GroupName?: string;
		KmsKeyArn?: string;
		LastModificationDate?: Date;
		Name?: string;
		ScheduleExpression?: string;
		ScheduleExpressionTimezone?: string;
		StartDate?: Date;
		State?: AssignPublicIp;
		Target?: Target;
	}
	export interface GetScheduleOutputFormProperties {
		ActionAfterCompletion: FormControl<ActionAfterCompletion | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		LastModificationDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		ScheduleExpressionTimezone: FormControl<string | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateGetScheduleOutputFormGroup() {
		return new FormGroup<GetScheduleOutputFormProperties>({
			ActionAfterCompletion: new FormControl<ActionAfterCompletion | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			LastModificationDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			ScheduleExpressionTimezone: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export enum ActionAfterCompletion { NONE = 'NONE', DELETE = 'DELETE' }


	/** Allows you to configure a time window during which EventBridge Scheduler invokes the schedule. */
	export interface FlexibleTimeWindow {
		MaximumWindowInMinutes?: number | null;

		/** Required */
		Mode: FlexibleTimeWindowMode;
	}

	/** Allows you to configure a time window during which EventBridge Scheduler invokes the schedule. */
	export interface FlexibleTimeWindowFormProperties {
		MaximumWindowInMinutes: FormControl<number | null | undefined>,

		/** Required */
		Mode: FormControl<FlexibleTimeWindowMode | null | undefined>,
	}
	export function CreateFlexibleTimeWindowFormGroup() {
		return new FormGroup<FlexibleTimeWindowFormProperties>({
			MaximumWindowInMinutes: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<FlexibleTimeWindowMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule. */
	export interface Target {

		/** Required */
		Arn: string;
		DeadLetterConfig?: DeadLetterConfig;
		EcsParameters?: EcsParameters;
		EventBridgeParameters?: EventBridgeParameters;
		Input?: string;
		KinesisParameters?: KinesisParameters;
		RetryPolicy?: RetryPolicy;

		/** Required */
		RoleArn: string;
		SageMakerPipelineParameters?: SageMakerPipelineParameters;
		SqsParameters?: SqsParameters;
	}

	/** The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule. */
	export interface TargetFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Input: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Input: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetScheduleGroupOutput {
		Arn?: string;
		CreationDate?: Date;
		LastModificationDate?: Date;
		Name?: string;
		State?: ScheduleGroupState;
	}
	export interface GetScheduleGroupOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastModificationDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ScheduleGroupState | null | undefined>,
	}
	export function CreateGetScheduleGroupOutputFormGroup() {
		return new FormGroup<GetScheduleGroupOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModificationDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ScheduleGroupState | null | undefined>(undefined),
		});

	}

	export enum ScheduleGroupState { ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface ListScheduleGroupsOutput {
		NextToken?: string;

		/** Required */
		ScheduleGroups: Array<ScheduleGroupSummary>;
	}
	export interface ListScheduleGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScheduleGroupsOutputFormGroup() {
		return new FormGroup<ListScheduleGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a schedule group. */
	export interface ScheduleGroupSummary {
		Arn?: string;
		CreationDate?: Date;
		LastModificationDate?: Date;
		Name?: string;
		State?: ScheduleGroupState;
	}

	/** The details of a schedule group. */
	export interface ScheduleGroupSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastModificationDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ScheduleGroupState | null | undefined>,
	}
	export function CreateScheduleGroupSummaryFormGroup() {
		return new FormGroup<ScheduleGroupSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModificationDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ScheduleGroupState | null | undefined>(undefined),
		});

	}

	export interface ListSchedulesOutput {
		NextToken?: string;

		/** Required */
		Schedules: Array<ScheduleSummary>;
	}
	export interface ListSchedulesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulesOutputFormGroup() {
		return new FormGroup<ListSchedulesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a schedule. */
	export interface ScheduleSummary {
		Arn?: string;
		CreationDate?: Date;
		GroupName?: string;
		LastModificationDate?: Date;
		Name?: string;
		State?: AssignPublicIp;
		Target?: TargetSummary;
	}

	/** The details of a schedule. */
	export interface ScheduleSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		LastModificationDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateScheduleSummaryFormGroup() {
		return new FormGroup<ScheduleSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			LastModificationDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}


	/** The details of a target. */
	export interface TargetSummary {

		/** Required */
		Arn: string;
	}

	/** The details of a target. */
	export interface TargetSummaryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTargetSummaryFormGroup() {
		return new FormGroup<TargetSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateScheduleOutput {

		/** Required */
		ScheduleArn: string;
	}
	export interface UpdateScheduleOutputFormProperties {

		/** Required */
		ScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScheduleOutputFormGroup() {
		return new FormGroup<UpdateScheduleOutputFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateScheduleGroupInput {
		ClientToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateScheduleGroupInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleGroupInputFormGroup() {
		return new FormGroup<CreateScheduleGroupInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface CreateScheduleInput {
		ActionAfterCompletion?: ActionAfterCompletion;
		ClientToken?: string;
		Description?: string;
		EndDate?: Date;

		/** Required */
		FlexibleTimeWindow: FlexibleTimeWindow;
		GroupName?: string;
		KmsKeyArn?: string;

		/** Required */
		ScheduleExpression: string;
		ScheduleExpressionTimezone?: string;
		StartDate?: Date;
		State?: AssignPublicIp;

		/** Required */
		Target: Target;
	}
	export interface CreateScheduleInputFormProperties {
		ActionAfterCompletion: FormControl<ActionAfterCompletion | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
		ScheduleExpressionTimezone: FormControl<string | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateCreateScheduleInputFormGroup() {
		return new FormGroup<CreateScheduleInputFormProperties>({
			ActionAfterCompletion: new FormControl<ActionAfterCompletion | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleExpressionTimezone: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export interface DeleteScheduleGroupInput {
	}
	export interface DeleteScheduleGroupInputFormProperties {
	}
	export function CreateDeleteScheduleGroupInputFormGroup() {
		return new FormGroup<DeleteScheduleGroupInputFormProperties>({
		});

	}

	export interface DeleteScheduleInput {
	}
	export interface DeleteScheduleInputFormProperties {
	}
	export function CreateDeleteScheduleInputFormGroup() {
		return new FormGroup<DeleteScheduleInputFormProperties>({
		});

	}

	export interface GetScheduleGroupInput {
	}
	export interface GetScheduleGroupInputFormProperties {
	}
	export function CreateGetScheduleGroupInputFormGroup() {
		return new FormGroup<GetScheduleGroupInputFormProperties>({
		});

	}

	export interface GetScheduleInput {
	}
	export interface GetScheduleInputFormProperties {
	}
	export function CreateGetScheduleInputFormGroup() {
		return new FormGroup<GetScheduleInputFormProperties>({
		});

	}

	export interface ListScheduleGroupsInput {
	}
	export interface ListScheduleGroupsInputFormProperties {
	}
	export function CreateListScheduleGroupsInputFormGroup() {
		return new FormGroup<ListScheduleGroupsInputFormProperties>({
		});

	}

	export interface ListSchedulesInput {
	}
	export interface ListSchedulesInputFormProperties {
	}
	export function CreateListSchedulesInputFormGroup() {
		return new FormGroup<ListSchedulesInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateScheduleInput {
		ActionAfterCompletion?: ActionAfterCompletion;
		ClientToken?: string;
		Description?: string;
		EndDate?: Date;

		/** Required */
		FlexibleTimeWindow: FlexibleTimeWindow;
		GroupName?: string;
		KmsKeyArn?: string;

		/** Required */
		ScheduleExpression: string;
		ScheduleExpressionTimezone?: string;
		StartDate?: Date;
		State?: AssignPublicIp;

		/** Required */
		Target: Target;
	}
	export interface UpdateScheduleInputFormProperties {
		ActionAfterCompletion: FormControl<ActionAfterCompletion | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
		ScheduleExpressionTimezone: FormControl<string | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateUpdateScheduleInputFormGroup() {
		return new FormGroup<UpdateScheduleInputFormProperties>({
			ActionAfterCompletion: new FormControl<ActionAfterCompletion | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleExpressionTimezone: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates the specified schedule.
		 * Post schedules/{Name}
		 * @param {string} Name The name of the schedule that you are creating.
		 * @return {CreateScheduleOutput} Success
		 */
		CreateSchedule(Name: string, requestBody: CreateSchedulePostBody): Observable<CreateScheduleOutput> {
			return this.http.post<CreateScheduleOutput>(this.baseUri + 'schedules/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified schedule.
		 * Delete schedules/{Name}
		 * @param {string} clientToken  Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency. 
		 * @param {string} groupName The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.
		 * @param {string} Name The name of the schedule to delete.
		 * @return {DeleteScheduleOutput} Success
		 */
		DeleteSchedule(clientToken: string | null | undefined, groupName: string | null | undefined, Name: string): Observable<DeleteScheduleOutput> {
			return this.http.delete<DeleteScheduleOutput>(this.baseUri + 'schedules/' + (Name == null ? '' : encodeURIComponent(Name)) + '?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)) + '&groupName=' + (groupName == null ? '' : encodeURIComponent(groupName)), {});
		}

		/**
		 * Retrieves the specified schedule.
		 * Get schedules/{Name}
		 * @param {string} groupName The name of the schedule group associated with this schedule. If you omit this, EventBridge Scheduler assumes that the schedule is associated with the default group.
		 * @param {string} Name The name of the schedule to retrieve.
		 * @return {GetScheduleOutput} Success
		 */
		GetSchedule(groupName: string | null | undefined, Name: string): Observable<GetScheduleOutput> {
			return this.http.get<GetScheduleOutput>(this.baseUri + 'schedules/' + (Name == null ? '' : encodeURIComponent(Name)) + '?groupName=' + (groupName == null ? '' : encodeURIComponent(groupName)), {});
		}

		/**
		 * <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
		 * Put schedules/{Name}
		 * @param {string} Name The name of the schedule that you are updating.
		 * @return {UpdateScheduleOutput} Success
		 */
		UpdateSchedule(Name: string, requestBody: UpdateSchedulePutBody): Observable<UpdateScheduleOutput> {
			return this.http.put<UpdateScheduleOutput>(this.baseUri + 'schedules/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the specified schedule group.
		 * Post schedule-groups/{Name}
		 * @param {string} Name The name of the schedule group that you are creating.
		 * @return {CreateScheduleGroupOutput} Success
		 */
		CreateScheduleGroup(Name: string, requestBody: CreateScheduleGroupPostBody): Observable<CreateScheduleGroupOutput> {
			return this.http.post<CreateScheduleGroupOutput>(this.baseUri + 'schedule-groups/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
		 * Delete schedule-groups/{Name}
		 * @param {string} clientToken  Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency. 
		 * @param {string} Name The name of the schedule group to delete.
		 * @return {DeleteScheduleGroupOutput} Success
		 */
		DeleteScheduleGroup(clientToken: string | null | undefined, Name: string): Observable<DeleteScheduleGroupOutput> {
			return this.http.delete<DeleteScheduleGroupOutput>(this.baseUri + 'schedule-groups/' + (Name == null ? '' : encodeURIComponent(Name)) + '?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Retrieves the specified schedule group.
		 * Get schedule-groups/{Name}
		 * @param {string} Name The name of the schedule group to retrieve.
		 * @return {GetScheduleGroupOutput} Success
		 */
		GetScheduleGroup(Name: string): Observable<GetScheduleGroupOutput> {
			return this.http.get<GetScheduleGroupOutput>(this.baseUri + 'schedule-groups/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Returns a paginated list of your schedule groups.
		 * Get schedule-groups
		 * @param {number} MaxResults If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.
		 * @param {string} NamePrefix The name prefix that you can use to return a filtered list of your schedule groups.
		 * @param {string} NextToken The token returned by a previous call to retrieve the next set of results.
		 * @return {ListScheduleGroupsOutput} Success
		 */
		ListScheduleGroups(MaxResults: number | null | undefined, NamePrefix: string | null | undefined, NextToken: string | null | undefined): Observable<ListScheduleGroupsOutput> {
			return this.http.get<ListScheduleGroupsOutput>(this.baseUri + 'schedule-groups?MaxResults=' + MaxResults + '&NamePrefix=' + (NamePrefix == null ? '' : encodeURIComponent(NamePrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a paginated list of your EventBridge Scheduler schedules.
		 * Get schedules
		 * @param {string} ScheduleGroup If specified, only lists the schedules whose associated schedule group matches the given filter.
		 * @param {number} MaxResults If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.
		 * @param {string} NamePrefix Schedule name prefix to return the filtered list of resources.
		 * @param {string} NextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {AssignPublicIp} State If specified, only lists the schedules whose current state matches the given filter.
		 * @return {ListSchedulesOutput} Success
		 */
		ListSchedules(ScheduleGroup: string | null | undefined, MaxResults: number | null | undefined, NamePrefix: string | null | undefined, NextToken: string | null | undefined, State: AssignPublicIp | null | undefined): Observable<ListSchedulesOutput> {
			return this.http.get<ListSchedulesOutput>(this.baseUri + 'schedules?ScheduleGroup=' + (ScheduleGroup == null ? '' : encodeURIComponent(ScheduleGroup)) + '&MaxResults=' + MaxResults + '&NamePrefix=' + (NamePrefix == null ? '' : encodeURIComponent(NamePrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&State=' + State, {});
		}

		/**
		 * Lists the tags associated with the Scheduler resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the EventBridge Scheduler resource for which you want to view tags.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the schedule group that you are adding tags to.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified EventBridge Scheduler schedule group.
		 * Delete tags/{ResourceArn}#TagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the schedule group from which you are removing tags.
		 * @param {Array<string>} TagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(ResourceArn: string, TagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#TagKeys&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateSchedulePostBody {

		/** Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target. */
		ActionAfterCompletion?: ActionAfterCompletion | null;

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The description you specify for the schedule.
		 * Max length: 512
		 * Min length: 0
		 */
		Description?: string | null;

		/** The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules. */
		EndDate?: Date | null;

		/**
		 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
		 * Required
		 */
		FlexibleTimeWindow: CreateSchedulePostBodyFlexibleTimeWindow;

		/**
		 * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
		 * Max length: 64
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn?: string | null;

		/**
		 * <p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(value unit)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: string;

		/**
		 * The timezone in which the scheduling expression is evaluated.
		 * Max length: 50
		 * Min length: 1
		 */
		ScheduleExpressionTimezone?: string | null;

		/** The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules. */
		StartDate?: Date | null;

		/** Specifies whether the schedule is enabled or disabled. */
		State?: AssignPublicIp | null;

		/**
		 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
		 * Required
		 */
		Target: CreateSchedulePostBodyTarget;
	}
	export interface CreateSchedulePostBodyFormProperties {

		/** Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target. */
		ActionAfterCompletion: FormControl<ActionAfterCompletion | null | undefined>,

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description you specify for the schedule.
		 * Max length: 512
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules. */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
		 * Max length: 64
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * <p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(value unit)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,

		/**
		 * The timezone in which the scheduling expression is evaluated.
		 * Max length: 50
		 * Min length: 1
		 */
		ScheduleExpressionTimezone: FormControl<string | null | undefined>,

		/** The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules. */
		StartDate: FormControl<Date | null | undefined>,

		/** Specifies whether the schedule is enabled or disabled. */
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateCreateSchedulePostBodyFormGroup() {
		return new FormGroup<CreateSchedulePostBodyFormProperties>({
			ActionAfterCompletion: new FormControl<ActionAfterCompletion | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-zA-Z-_.]+$')]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^arn:aws(-[a-z]+)?:kms:[a-z0-9\-]+:\d{12}:(key|alias)\/[0-9a-zA-Z-_]*$')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleExpressionTimezone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export interface CreateSchedulePostBodyFlexibleTimeWindow {
		MaximumWindowInMinutes?: number | null;
		Mode?: FlexibleTimeWindowMode;
	}
	export interface CreateSchedulePostBodyFlexibleTimeWindowFormProperties {
		MaximumWindowInMinutes: FormControl<number | null | undefined>,
		Mode: FormControl<FlexibleTimeWindowMode | null | undefined>,
	}
	export function CreateCreateSchedulePostBodyFlexibleTimeWindowFormGroup() {
		return new FormGroup<CreateSchedulePostBodyFlexibleTimeWindowFormProperties>({
			MaximumWindowInMinutes: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<FlexibleTimeWindowMode | null | undefined>(undefined),
		});

	}

	export interface CreateSchedulePostBodyTarget {
		Arn?: string;
		DeadLetterConfig?: DeadLetterConfig;
		EcsParameters?: EcsParameters;
		EventBridgeParameters?: EventBridgeParameters;
		Input?: string;
		KinesisParameters?: KinesisParameters;
		RetryPolicy?: RetryPolicy;
		RoleArn?: string;
		SageMakerPipelineParameters?: SageMakerPipelineParameters;
		SqsParameters?: SqsParameters;
	}
	export interface CreateSchedulePostBodyTargetFormProperties {
		Arn: FormControl<string | null | undefined>,
		Input: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchedulePostBodyTargetFormGroup() {
		return new FormGroup<CreateSchedulePostBodyTargetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Input: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchedulePutBody {

		/** Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target. */
		ActionAfterCompletion?: ActionAfterCompletion | null;

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The description you specify for the schedule.
		 * Max length: 512
		 * Min length: 0
		 */
		Description?: string | null;

		/** The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules. */
		EndDate?: Date | null;

		/**
		 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
		 * Required
		 */
		FlexibleTimeWindow: UpdateSchedulePutBodyFlexibleTimeWindow;

		/**
		 * The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update. If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.
		 * Max length: 64
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn?: string | null;

		/**
		 * <p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(value unit)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: string;

		/**
		 * The timezone in which the scheduling expression is evaluated.
		 * Max length: 50
		 * Min length: 1
		 */
		ScheduleExpressionTimezone?: string | null;

		/** The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules. */
		StartDate?: Date | null;

		/** Specifies whether the schedule is enabled or disabled. */
		State?: AssignPublicIp | null;

		/**
		 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
		 * Required
		 */
		Target: UpdateSchedulePutBodyTarget;
	}
	export interface UpdateSchedulePutBodyFormProperties {

		/** Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target. */
		ActionAfterCompletion: FormControl<ActionAfterCompletion | null | undefined>,

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description you specify for the schedule.
		 * Max length: 512
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules. */
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update. If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.
		 * Max length: 64
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * <p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(value unit)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,

		/**
		 * The timezone in which the scheduling expression is evaluated.
		 * Max length: 50
		 * Min length: 1
		 */
		ScheduleExpressionTimezone: FormControl<string | null | undefined>,

		/** The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules. */
		StartDate: FormControl<Date | null | undefined>,

		/** Specifies whether the schedule is enabled or disabled. */
		State: FormControl<AssignPublicIp | null | undefined>,
	}
	export function CreateUpdateSchedulePutBodyFormGroup() {
		return new FormGroup<UpdateSchedulePutBodyFormProperties>({
			ActionAfterCompletion: new FormControl<ActionAfterCompletion | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-zA-Z-_.]+$')]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^arn:aws(-[a-z]+)?:kms:[a-z0-9\-]+:\d{12}:(key|alias)\/[0-9a-zA-Z-_]*$')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ScheduleExpressionTimezone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<AssignPublicIp | null | undefined>(undefined),
		});

	}

	export interface UpdateSchedulePutBodyFlexibleTimeWindow {
		MaximumWindowInMinutes?: number | null;
		Mode?: FlexibleTimeWindowMode;
	}
	export interface UpdateSchedulePutBodyFlexibleTimeWindowFormProperties {
		MaximumWindowInMinutes: FormControl<number | null | undefined>,
		Mode: FormControl<FlexibleTimeWindowMode | null | undefined>,
	}
	export function CreateUpdateSchedulePutBodyFlexibleTimeWindowFormGroup() {
		return new FormGroup<UpdateSchedulePutBodyFlexibleTimeWindowFormProperties>({
			MaximumWindowInMinutes: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<FlexibleTimeWindowMode | null | undefined>(undefined),
		});

	}

	export interface UpdateSchedulePutBodyTarget {
		Arn?: string;
		DeadLetterConfig?: DeadLetterConfig;
		EcsParameters?: EcsParameters;
		EventBridgeParameters?: EventBridgeParameters;
		Input?: string;
		KinesisParameters?: KinesisParameters;
		RetryPolicy?: RetryPolicy;
		RoleArn?: string;
		SageMakerPipelineParameters?: SageMakerPipelineParameters;
		SqsParameters?: SqsParameters;
	}
	export interface UpdateSchedulePutBodyTargetFormProperties {
		Arn: FormControl<string | null | undefined>,
		Input: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchedulePutBodyTargetFormGroup() {
		return new FormGroup<UpdateSchedulePutBodyTargetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Input: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateScheduleGroupPostBody {

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The list of tags to associate with the schedule group.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateScheduleGroupPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleGroupPostBodyFormGroup() {
		return new FormGroup<CreateScheduleGroupPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of tags to associate with the schedule group.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

}

