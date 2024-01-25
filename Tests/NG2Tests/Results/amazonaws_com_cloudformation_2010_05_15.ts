import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface TokenAlreadyExistsException {
	}
	export interface TokenAlreadyExistsExceptionFormProperties {
	}
	export function CreateTokenAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TokenAlreadyExistsExceptionFormProperties>({
		});

	}


	/** The output for a <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackOutput {
	}

	/** The output for a <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackOutputFormProperties {
	}
	export function CreateContinueUpdateRollbackOutputFormGroup() {
		return new FormGroup<ContinueUpdateRollbackOutputFormProperties>({
		});

	}


	/** The output for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetOutput {

		/** Min length: 1 */
		Id?: string | null;
		StackId?: string | null;
	}

	/** The output for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetOutputFormProperties {

		/** Min length: 1 */
		Id: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChangeSetOutputFormGroup() {
		return new FormGroup<CreateChangeSetOutputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('arn:[-a-zA-Z0-9:/]*')]),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Parameter data type. */
	export interface Parameter {
		ParameterKey?: string | null;
		ParameterValue?: string | null;
		UsePreviousValue?: boolean | null;
		ResolvedValue?: string | null;
	}

	/** The Parameter data type. */
	export interface ParameterFormProperties {
		ParameterKey: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
		UsePreviousValue: FormControl<boolean | null | undefined>,
		ResolvedValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
			UsePreviousValue: new FormControl<boolean | null | undefined>(undefined),
			ResolvedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Capability { CAPABILITY_IAM = 0, CAPABILITY_NAMED_IAM = 1, CAPABILITY_AUTO_EXPAND = 2 }


	/** A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.  */
	export interface RollbackTrigger {

		/** Required */
		Arn: string;

		/** Required */
		Type: string;
	}

	/** A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.  */
	export interface RollbackTriggerFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTriggerFormGroup() {
		return new FormGroup<RollbackTriggerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: string;
	}

	/** The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}


	/** Describes the target resource of an import operation. */
	export interface ResourceToImport {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: string;

		/** Required */
		LogicalResourceId: string;

		/** Required */
		ResourceIdentifier: ResourceIdentifierProperties;
	}

	/** Describes the target resource of an import operation. */
	export interface ResourceToImportFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceToImportFormGroup() {
		return new FormGroup<ResourceToImportFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceIdentifierProperties {
	}
	export interface ResourceIdentifierPropertiesFormProperties {
	}
	export function CreateResourceIdentifierPropertiesFormGroup() {
		return new FormGroup<ResourceIdentifierPropertiesFormProperties>({
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InsufficientCapabilitiesException {
	}
	export interface InsufficientCapabilitiesExceptionFormProperties {
	}
	export function CreateInsufficientCapabilitiesExceptionFormGroup() {
		return new FormGroup<InsufficientCapabilitiesExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}


	/** The output for a <a>CreateStack</a> action. */
	export interface CreateStackOutput {
		StackId?: string | null;
	}

	/** The output for a <a>CreateStack</a> action. */
	export interface CreateStackOutputFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackOutputFormGroup() {
		return new FormGroup<CreateStackOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStackInstancesOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface CreateStackInstancesOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackInstancesOutputFormGroup() {
		return new FormGroup<CreateStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface StackSetNotFoundException {
	}
	export interface StackSetNotFoundExceptionFormProperties {
	}
	export function CreateStackSetNotFoundExceptionFormGroup() {
		return new FormGroup<StackSetNotFoundExceptionFormProperties>({
		});

	}

	export interface OperationInProgressException {
	}
	export interface OperationInProgressExceptionFormProperties {
	}
	export function CreateOperationInProgressExceptionFormGroup() {
		return new FormGroup<OperationInProgressExceptionFormProperties>({
		});

	}

	export interface OperationIdAlreadyExistsException {
	}
	export interface OperationIdAlreadyExistsExceptionFormProperties {
	}
	export function CreateOperationIdAlreadyExistsExceptionFormGroup() {
		return new FormGroup<OperationIdAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface StaleRequestException {
	}
	export interface StaleRequestExceptionFormProperties {
	}
	export function CreateStaleRequestExceptionFormGroup() {
		return new FormGroup<StaleRequestExceptionFormProperties>({
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface CreateStackSetOutput {
		StackSetId?: string | null;
	}
	export interface CreateStackSetOutputFormProperties {
		StackSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackSetOutputFormGroup() {
		return new FormGroup<CreateStackSetOutputFormProperties>({
			StackSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameAlreadyExistsException {
	}
	export interface NameAlreadyExistsExceptionFormProperties {
	}
	export function CreateNameAlreadyExistsExceptionFormGroup() {
		return new FormGroup<NameAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreatedButModifiedException {
	}
	export interface CreatedButModifiedExceptionFormProperties {
	}
	export function CreateCreatedButModifiedExceptionFormGroup() {
		return new FormGroup<CreatedButModifiedExceptionFormProperties>({
		});

	}


	/** The output for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetOutput {
	}

	/** The output for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetOutputFormProperties {
	}
	export function CreateDeleteChangeSetOutputFormGroup() {
		return new FormGroup<DeleteChangeSetOutputFormProperties>({
		});

	}

	export interface InvalidChangeSetStatusException {
	}
	export interface InvalidChangeSetStatusExceptionFormProperties {
	}
	export function CreateInvalidChangeSetStatusExceptionFormGroup() {
		return new FormGroup<InvalidChangeSetStatusExceptionFormProperties>({
		});

	}

	export interface DeleteStackInstancesOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface DeleteStackInstancesOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackInstancesOutputFormGroup() {
		return new FormGroup<DeleteStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface DeleteStackSetOutput {
	}
	export interface DeleteStackSetOutputFormProperties {
	}
	export function CreateDeleteStackSetOutputFormGroup() {
		return new FormGroup<DeleteStackSetOutputFormProperties>({
		});

	}

	export interface StackSetNotEmptyException {
	}
	export interface StackSetNotEmptyExceptionFormProperties {
	}
	export function CreateStackSetNotEmptyExceptionFormGroup() {
		return new FormGroup<StackSetNotEmptyExceptionFormProperties>({
		});

	}

	export interface DeregisterTypeOutput {
	}
	export interface DeregisterTypeOutputFormProperties {
	}
	export function CreateDeregisterTypeOutputFormGroup() {
		return new FormGroup<DeregisterTypeOutputFormProperties>({
		});

	}

	export interface CFNRegistryException {
	}
	export interface CFNRegistryExceptionFormProperties {
	}
	export function CreateCFNRegistryExceptionFormGroup() {
		return new FormGroup<CFNRegistryExceptionFormProperties>({
		});

	}

	export interface TypeNotFoundException {
	}
	export interface TypeNotFoundExceptionFormProperties {
	}
	export function CreateTypeNotFoundExceptionFormGroup() {
		return new FormGroup<TypeNotFoundExceptionFormProperties>({
		});

	}


	/** The output for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsOutput {
		AccountLimits?: Array<AccountLimit>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsOutputFormGroup() {
		return new FormGroup<DescribeAccountLimitsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** <p>The AccountLimit data type. </p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface AccountLimit {
		Name?: string | null;
		Value?: number | null;
	}

	/** <p>The AccountLimit data type. </p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface AccountLimitFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateAccountLimitFormGroup() {
		return new FormGroup<AccountLimitFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName?: string | null;

		/** Min length: 1 */
		ChangeSetId?: string | null;
		StackId?: string | null;
		StackName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Parameters?: Array<Parameter>;
		CreationTime?: Date | null;
		ExecutionStatus?: DescribeChangeSetOutputExecutionStatus | null;
		Status?: DescribeChangeSetOutputStatus | null;
		StatusReason?: string | null;

		/** Maximum items: 5 */
		NotificationARNs?: Array<string>;

		/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;
		Capabilities?: Array<Capability>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		Changes?: Array<Change>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		ChangeSetId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExecutionStatus: FormControl<DescribeChangeSetOutputExecutionStatus | null | undefined>,
		Status: FormControl<DescribeChangeSetOutputStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetOutputFormGroup() {
		return new FormGroup<DescribeChangeSetOutputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*')]),
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('arn:[-a-zA-Z0-9:/]*')]),
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionStatus: new FormControl<DescribeChangeSetOutputExecutionStatus | null | undefined>(undefined),
			Status: new FormControl<DescribeChangeSetOutputStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum DescribeChangeSetOutputExecutionStatus { UNAVAILABLE = 0, AVAILABLE = 1, EXECUTE_IN_PROGRESS = 2, EXECUTE_COMPLETE = 3, EXECUTE_FAILED = 4, OBSOLETE = 5 }

	export enum DescribeChangeSetOutputStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, DELETE_COMPLETE = 3, FAILED = 4 }


	/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
	export interface RollbackConfiguration {

		/** Maximum items: 5 */
		RollbackTriggers?: Array<RollbackTrigger>;

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes?: number | null;
	}

	/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
	export interface RollbackConfigurationFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateRollbackConfigurationFormGroup() {
		return new FormGroup<RollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(180)]),
		});

	}


	/** The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set. */
	export interface Change {
		Type?: ChangeType | null;

		/** The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set. */
		ResourceChange?: ResourceChange;
	}

	/** The <code>Change</code> structure describes the changes AWS CloudFormation will perform if you execute the change set. */
	export interface ChangeFormProperties {
		Type: FormControl<ChangeType | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			Type: new FormControl<ChangeType | null | undefined>(undefined),
		});

	}

	export enum ChangeType { Resource = 0 }


	/** The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set. */
	export interface ResourceChange {
		Action?: ResourceChangeAction | null;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType?: string | null;
		Replacement?: ResourceChangeReplacement | null;
		Scope?: Array<ResourceAttribute>;
		Details?: Array<ResourceChangeDetail>;
	}

	/** The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set. */
	export interface ResourceChangeFormProperties {
		Action: FormControl<ResourceChangeAction | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,
		Replacement: FormControl<ResourceChangeReplacement | null | undefined>,
	}
	export function CreateResourceChangeFormGroup() {
		return new FormGroup<ResourceChangeFormProperties>({
			Action: new FormControl<ResourceChangeAction | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Replacement: new FormControl<ResourceChangeReplacement | null | undefined>(undefined),
		});

	}

	export enum ResourceChangeAction { Add = 0, Modify = 1, Remove = 2, Import = 3 }

	export enum ResourceChangeReplacement { True = 0, False = 1, Conditional = 2 }

	export enum ResourceAttribute { Properties = 0, Metadata = 1, CreationPolicy = 2, UpdatePolicy = 3, DeletionPolicy = 4, Tags = 5 }


	/** For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource. */
	export interface ResourceChangeDetail {

		/** The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
		Target?: ResourceTargetDefinition;
		Evaluation?: ResourceChangeDetailEvaluation | null;
		ChangeSource?: ResourceChangeDetailChangeSource | null;
		CausingEntity?: string | null;
	}

	/** For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource. */
	export interface ResourceChangeDetailFormProperties {
		Evaluation: FormControl<ResourceChangeDetailEvaluation | null | undefined>,
		ChangeSource: FormControl<ResourceChangeDetailChangeSource | null | undefined>,
		CausingEntity: FormControl<string | null | undefined>,
	}
	export function CreateResourceChangeDetailFormGroup() {
		return new FormGroup<ResourceChangeDetailFormProperties>({
			Evaluation: new FormControl<ResourceChangeDetailEvaluation | null | undefined>(undefined),
			ChangeSource: new FormControl<ResourceChangeDetailChangeSource | null | undefined>(undefined),
			CausingEntity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceAttribute | null;
		Name?: string | null;
		RequiresRecreation?: ResourceTargetDefinitionRequiresRecreation | null;
	}

	/** The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
	export interface ResourceTargetDefinitionFormProperties {
		Attribute: FormControl<ResourceAttribute | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RequiresRecreation: FormControl<ResourceTargetDefinitionRequiresRecreation | null | undefined>,
	}
	export function CreateResourceTargetDefinitionFormGroup() {
		return new FormGroup<ResourceTargetDefinitionFormProperties>({
			Attribute: new FormControl<ResourceAttribute | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RequiresRecreation: new FormControl<ResourceTargetDefinitionRequiresRecreation | null | undefined>(undefined),
		});

	}

	export enum ResourceTargetDefinitionRequiresRecreation { Never = 0, Conditionally = 1, Always = 2 }

	export enum ResourceChangeDetailEvaluation { Static = 0, Dynamic = 1 }

	export enum ResourceChangeDetailChangeSource { ResourceReference = 0, ParameterReference = 1, ResourceAttribute = 2, DirectModification = 3, Automatic = 4 }

	export interface ChangeSetNotFoundException {
	}
	export interface ChangeSetNotFoundExceptionFormProperties {
	}
	export function CreateChangeSetNotFoundExceptionFormGroup() {
		return new FormGroup<ChangeSetNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeStackDriftDetectionStatusOutput {

		/** Required */
		StackId: string;

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: string;
		StackDriftStatus?: DescribeStackDriftDetectionStatusOutputStackDriftStatus | null;

		/** Required */
		DetectionStatus: DescribeStackDriftDetectionStatusOutputDetectionStatus;
		DetectionStatusReason?: string | null;
		DriftedStackResourceCount?: number | null;

		/** Required */
		Timestamp: Date;
	}
	export interface DescribeStackDriftDetectionStatusOutputFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: FormControl<string | null | undefined>,
		StackDriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,

		/** Required */
		DetectionStatus: FormControl<DescribeStackDriftDetectionStatusOutputDetectionStatus | null | undefined>,
		DetectionStatusReason: FormControl<string | null | undefined>,
		DriftedStackResourceCount: FormControl<number | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStackDriftDetectionStatusOutputFormGroup() {
		return new FormGroup<DescribeStackDriftDetectionStatusOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
			StackDriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined),
			DetectionStatus: new FormControl<DescribeStackDriftDetectionStatusOutputDetectionStatus | null | undefined>(undefined, [Validators.required]),
			DetectionStatusReason: new FormControl<string | null | undefined>(undefined),
			DriftedStackResourceCount: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DescribeStackDriftDetectionStatusOutputStackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }

	export enum DescribeStackDriftDetectionStatusOutputDetectionStatus { DETECTION_IN_PROGRESS = 0, DETECTION_FAILED = 1, DETECTION_COMPLETE = 2 }


	/** The output for a <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsOutput {
		StackEvents?: Array<StackEvent>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for a <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackEventsOutputFormGroup() {
		return new FormGroup<DescribeStackEventsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The StackEvent data type. */
	export interface StackEvent {

		/** Required */
		StackId: string;

		/** Required */
		EventId: string;

		/** Required */
		StackName: string;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType?: string | null;

		/** Required */
		Timestamp: Date;
		ResourceStatus?: StackEventResourceStatus | null;
		ResourceStatusReason?: string | null;
		ResourceProperties?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The StackEvent data type. */
	export interface StackEventFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		ResourceStatus: FormControl<StackEventResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
		ResourceProperties: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStackEventFormGroup() {
		return new FormGroup<StackEventFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<StackEventResourceStatus | null | undefined>(undefined),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			ResourceProperties: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum StackEventResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }

	export interface DescribeStackInstanceOutput {

		/** An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. */
		StackInstance?: StackInstance;
	}
	export interface DescribeStackInstanceOutputFormProperties {
	}
	export function CreateDescribeStackInstanceOutputFormGroup() {
		return new FormGroup<DescribeStackInstanceOutputFormProperties>({
		});

	}


	/** An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. */
	export interface StackInstance {
		StackSetId?: string | null;
		Region?: string | null;
		Account?: string | null;
		StackId?: string | null;
		ParameterOverrides?: Array<Parameter>;
		Status?: StackInstanceStatus | null;
		StatusReason?: string | null;
		OrganizationalUnitId?: string | null;
		DriftStatus?: DescribeStackDriftDetectionStatusOutputStackDriftStatus | null;
		LastDriftCheckTimestamp?: Date | null;
	}

	/** An AWS CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. */
	export interface StackInstanceFormProperties {
		StackSetId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Account: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		Status: FormControl<StackInstanceStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
		DriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackInstanceFormGroup() {
		return new FormGroup<StackInstanceFormProperties>({
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-]{1,128}$')]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			StackId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackInstanceStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$')]),
			DriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StackInstanceStatus { CURRENT = 0, OUTDATED = 1, INOPERABLE = 2 }

	export interface StackInstanceNotFoundException {
	}
	export interface StackInstanceNotFoundExceptionFormProperties {
	}
	export function CreateStackInstanceNotFoundExceptionFormGroup() {
		return new FormGroup<StackInstanceNotFoundExceptionFormProperties>({
		});

	}


	/** The output for a <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceOutput {

		/** Contains detailed information about the specified stack resource. */
		StackResourceDetail?: StackResourceDetail;
	}

	/** The output for a <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceOutputFormProperties {
	}
	export function CreateDescribeStackResourceOutputFormGroup() {
		return new FormGroup<DescribeStackResourceOutputFormProperties>({
		});

	}


	/** Contains detailed information about the specified stack resource. */
	export interface StackResourceDetail {
		StackName?: string | null;
		StackId?: string | null;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: string;

		/** Required */
		LastUpdatedTimestamp: Date;

		/** Required */
		ResourceStatus: StackEventResourceStatus;
		ResourceStatusReason?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Metadata?: string | null;

		/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformation;
	}

	/** Contains detailed information about the specified stack resource. */
	export interface StackResourceDetailFormProperties {
		StackName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<StackEventResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceDetailFormGroup() {
		return new FormGroup<StackResourceDetailFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<StackEventResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformation {

		/** Required */
		StackResourceDriftStatus: StackResourceDriftInformationStackResourceDriftStatus;
		LastCheckTimestamp?: Date | null;
	}

	/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationFormProperties {

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftInformationFormGroup() {
		return new FormGroup<StackResourceDriftInformationFormProperties>({
			StackResourceDriftStatus: new FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StackResourceDriftInformationStackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }

	export interface DescribeStackResourceDriftsOutput {

		/** Required */
		StackResourceDrifts: Array<StackResourceDrift>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeStackResourceDriftsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackResourceDriftsOutputFormGroup() {
		return new FormGroup<DescribeStackResourceDriftsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
	export interface StackResourceDrift {

		/** Required */
		StackId: string;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string | null;

		/** Maximum items: 5 */
		PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: string;
		ExpectedProperties?: string | null;
		ActualProperties?: string | null;
		PropertyDifferences?: Array<PropertyDifference>;

		/** Required */
		StackResourceDriftStatus: StackResourceDriftInformationStackResourceDriftStatus;

		/** Required */
		Timestamp: Date;
	}

	/** <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
	export interface StackResourceDriftFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,
		ExpectedProperties: FormControl<string | null | undefined>,
		ActualProperties: FormControl<string | null | undefined>,

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftFormGroup() {
		return new FormGroup<StackResourceDriftFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ExpectedProperties: new FormControl<string | null | undefined>(undefined),
			ActualProperties: new FormControl<string | null | undefined>(undefined),
			StackResourceDriftStatus: new FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource. */
	export interface PhysicalResourceIdContextKeyValuePair {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource. */
	export interface PhysicalResourceIdContextKeyValuePairFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreatePhysicalResourceIdContextKeyValuePairFormGroup() {
		return new FormGroup<PhysicalResourceIdContextKeyValuePairFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>. */
	export interface PropertyDifference {

		/** Required */
		PropertyPath: string;

		/** Required */
		ExpectedValue: string;

		/** Required */
		ActualValue: string;

		/** Required */
		DifferenceType: PropertyDifferenceDifferenceType;
	}

	/** Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>. */
	export interface PropertyDifferenceFormProperties {

		/** Required */
		PropertyPath: FormControl<string | null | undefined>,

		/** Required */
		ExpectedValue: FormControl<string | null | undefined>,

		/** Required */
		ActualValue: FormControl<string | null | undefined>,

		/** Required */
		DifferenceType: FormControl<PropertyDifferenceDifferenceType | null | undefined>,
	}
	export function CreatePropertyDifferenceFormGroup() {
		return new FormGroup<PropertyDifferenceFormProperties>({
			PropertyPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpectedValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActualValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DifferenceType: new FormControl<PropertyDifferenceDifferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PropertyDifferenceDifferenceType { ADD = 0, REMOVE = 1, NOT_EQUAL = 2 }

	export enum StackResourceDriftStatus { IN_SYNC = 0, MODIFIED = 1, DELETED = 2, NOT_CHECKED = 3 }


	/** The output for a <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesOutput {
		StackResources?: Array<StackResource>;
	}

	/** The output for a <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesOutputFormProperties {
	}
	export function CreateDescribeStackResourcesOutputFormGroup() {
		return new FormGroup<DescribeStackResourcesOutputFormProperties>({
		});

	}


	/** The StackResource data type. */
	export interface StackResource {
		StackName?: string | null;
		StackId?: string | null;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: string;

		/** Required */
		Timestamp: Date;

		/** Required */
		ResourceStatus: StackEventResourceStatus;
		ResourceStatusReason?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformation;
	}

	/** The StackResource data type. */
	export interface StackResourceFormProperties {
		StackName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<StackEventResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceFormGroup() {
		return new FormGroup<StackResourceFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<StackEventResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DescribeStackSetOutput {

		/** A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires. */
		StackSet?: StackSet;
	}
	export interface DescribeStackSetOutputFormProperties {
	}
	export function CreateDescribeStackSetOutputFormGroup() {
		return new FormGroup<DescribeStackSetOutputFormProperties>({
		});

	}


	/** A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires.  */
	export interface StackSet {
		StackSetName?: string | null;
		StackSetId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Status?: StackSetStatus | null;

		/** Min length: 1 */
		TemplateBody?: string | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		StackSetARN?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName?: string | null;

		/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

		/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		PermissionModel?: StackSetPermissionModel | null;
		OrganizationalUnitIds?: Array<string>;
	}

	/** A structure that contains information about a stack set. A stack set enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, as well as any parameters and capabilities that the template requires.  */
	export interface StackSetFormProperties {
		StackSetName: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,
		StackSetARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<StackSetPermissionModel | null | undefined>,
	}
	export function CreateStackSetFormGroup() {
		return new FormGroup<StackSetFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			StackSetARN: new FormControl<string | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z_0-9+=,.@-]+')]),
			PermissionModel: new FormControl<StackSetPermissionModel | null | undefined>(undefined),
		});

	}

	export enum StackSetStatus { ACTIVE = 0, DELETED = 1 }


	/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface StackSetDriftDetectionDetails {
		DriftStatus?: StackSetDriftDetectionDetailsDriftStatus | null;
		DriftDetectionStatus?: StackSetDriftDetectionDetailsDriftDetectionStatus | null;
		LastDriftCheckTimestamp?: Date | null;

		/** Minimum: 0 */
		TotalStackInstancesCount?: number | null;

		/** Minimum: 0 */
		DriftedStackInstancesCount?: number | null;

		/** Minimum: 0 */
		InSyncStackInstancesCount?: number | null;

		/** Minimum: 0 */
		InProgressStackInstancesCount?: number | null;

		/** Minimum: 0 */
		FailedStackInstancesCount?: number | null;
	}

	/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
	export interface StackSetDriftDetectionDetailsFormProperties {
		DriftStatus: FormControl<StackSetDriftDetectionDetailsDriftStatus | null | undefined>,
		DriftDetectionStatus: FormControl<StackSetDriftDetectionDetailsDriftDetectionStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		TotalStackInstancesCount: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		DriftedStackInstancesCount: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		InSyncStackInstancesCount: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		InProgressStackInstancesCount: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		FailedStackInstancesCount: FormControl<number | null | undefined>,
	}
	export function CreateStackSetDriftDetectionDetailsFormGroup() {
		return new FormGroup<StackSetDriftDetectionDetailsFormProperties>({
			DriftStatus: new FormControl<StackSetDriftDetectionDetailsDriftStatus | null | undefined>(undefined),
			DriftDetectionStatus: new FormControl<StackSetDriftDetectionDetailsDriftDetectionStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			TotalStackInstancesCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			DriftedStackInstancesCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			InSyncStackInstancesCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			InProgressStackInstancesCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailedStackInstancesCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum StackSetDriftDetectionDetailsDriftStatus { DRIFTED = 0, IN_SYNC = 1, NOT_CHECKED = 2 }

	export enum StackSetDriftDetectionDetailsDriftDetectionStatus { COMPLETED = 0, FAILED = 1, PARTIAL_SUCCESS = 2, IN_PROGRESS = 3, STOPPED = 4 }


	/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
	export interface AutoDeployment {
		Enabled?: boolean | null;
		RetainStacksOnAccountRemoval?: boolean | null;
	}

	/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
	export interface AutoDeploymentFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		RetainStacksOnAccountRemoval: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoDeploymentFormGroup() {
		return new FormGroup<AutoDeploymentFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			RetainStacksOnAccountRemoval: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StackSetPermissionModel { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }

	export interface DescribeStackSetOperationOutput {

		/** The structure that contains information about a stack set operation. */
		StackSetOperation?: StackSetOperation;
	}
	export interface DescribeStackSetOperationOutputFormProperties {
	}
	export function CreateDescribeStackSetOperationOutputFormGroup() {
		return new FormGroup<DescribeStackSetOperationOutputFormProperties>({
		});

	}


	/** The structure that contains information about a stack set operation.  */
	export interface StackSetOperation {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
		StackSetId?: string | null;
		Action?: StackSetOperationAction | null;
		Status?: StackSetOperationStatus | null;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;
		RetainStacks?: boolean | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName?: string | null;
		CreationTimestamp?: Date | null;
		EndTimestamp?: Date | null;

		/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;

		/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress is not included. </p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p> */
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
	}

	/** The structure that contains information about a stack set operation.  */
	export interface StackSetOperationFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,
		Action: FormControl<StackSetOperationAction | null | undefined>,
		Status: FormControl<StackSetOperationStatus | null | undefined>,
		RetainStacks: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackSetOperationFormGroup() {
		return new FormGroup<StackSetOperationFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<StackSetOperationAction | null | undefined>(undefined),
			Status: new FormControl<StackSetOperationStatus | null | undefined>(undefined),
			RetainStacks: new FormControl<boolean | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z_0-9+=,.@-]+')]),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StackSetOperationAction { CREATE = 0, UPDATE = 1, DELETE = 2, DETECT_DRIFT = 3 }

	export enum StackSetOperationStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, STOPPING = 3, STOPPED = 4, QUEUED = 5 }


	/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
	export interface StackSetOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}

	/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
	export interface StackSetOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateStackSetOperationPreferencesFormGroup() {
		return new FormGroup<StackSetOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
	export interface DeploymentTargets {
		Accounts?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}

	/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
	export interface DeploymentTargetsFormProperties {
	}
	export function CreateDeploymentTargetsFormGroup() {
		return new FormGroup<DeploymentTargetsFormProperties>({
		});

	}

	export interface OperationNotFoundException {
	}
	export interface OperationNotFoundExceptionFormProperties {
	}
	export function CreateOperationNotFoundExceptionFormGroup() {
		return new FormGroup<OperationNotFoundExceptionFormProperties>({
		});

	}


	/** The output for a <a>DescribeStacks</a> action. */
	export interface DescribeStacksOutput {
		Stacks?: Array<Stack>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for a <a>DescribeStacks</a> action. */
	export interface DescribeStacksOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksOutputFormGroup() {
		return new FormGroup<DescribeStacksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The Stack data type. */
	export interface Stack {
		StackId?: string | null;

		/** Required */
		StackName: string;

		/** Min length: 1 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Parameters?: Array<Parameter>;

		/** Required */
		CreationTime: Date;
		DeletionTime?: Date | null;
		LastUpdatedTime?: Date | null;

		/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;

		/** Required */
		StackStatus: StackStackStatus;
		StackStatusReason?: string | null;
		DisableRollback?: boolean | null;

		/** Maximum items: 5 */
		NotificationARNs?: Array<string>;

		/** Minimum: 1 */
		TimeoutInMinutes?: number | null;
		Capabilities?: Array<Capability>;
		Outputs?: Array<Output>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
		EnableTerminationProtection?: boolean | null;
		ParentId?: string | null;
		RootId?: string | null;

		/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
		DriftInformation?: StackDriftInformation;
	}

	/** The Stack data type. */
	export interface StackFormProperties {
		StackId: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		DeletionTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		StackStatus: FormControl<StackStackStatus | null | undefined>,
		StackStatusReason: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		TimeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
		ParentId: FormControl<string | null | undefined>,
		RootId: FormControl<string | null | undefined>,
	}
	export function CreateStackFormGroup() {
		return new FormGroup<StackFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('arn:[-a-zA-Z0-9:/]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DeletionTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			StackStatus: new FormControl<StackStackStatus | null | undefined>(undefined, [Validators.required]),
			StackStatusReason: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
			RootId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackStackStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, ROLLBACK_IN_PROGRESS = 3, ROLLBACK_FAILED = 4, ROLLBACK_COMPLETE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, DELETE_COMPLETE = 8, UPDATE_IN_PROGRESS = 9, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 10, UPDATE_COMPLETE = 11, UPDATE_ROLLBACK_IN_PROGRESS = 12, UPDATE_ROLLBACK_FAILED = 13, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 14, UPDATE_ROLLBACK_COMPLETE = 15, REVIEW_IN_PROGRESS = 16, IMPORT_IN_PROGRESS = 17, IMPORT_COMPLETE = 18, IMPORT_ROLLBACK_IN_PROGRESS = 19, IMPORT_ROLLBACK_FAILED = 20, IMPORT_ROLLBACK_COMPLETE = 21 }


	/** The Output data type. */
	export interface Output {
		OutputKey?: string | null;
		OutputValue?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		ExportName?: string | null;
	}

	/** The Output data type. */
	export interface OutputFormProperties {
		OutputKey: FormControl<string | null | undefined>,
		OutputValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		ExportName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ExportName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformation {

		/** Required */
		StackDriftStatus: DescribeStackDriftDetectionStatusOutputStackDriftStatus;
		LastCheckTimestamp?: Date | null;
	}

	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationFormProperties {

		/** Required */
		StackDriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackDriftInformationFormGroup() {
		return new FormGroup<StackDriftInformationFormProperties>({
			StackDriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeTypeOutput {

		/** Max length: 1024 */
		Arn?: string | null;
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DefaultVersionId?: string | null;
		IsDefaultVersion?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Max length: 16777216
		 * Min length: 1
		 */
		Schema?: string | null;
		ProvisioningType?: DescribeTypeOutputProvisioningType | null;
		DeprecatedStatus?: DescribeTypeOutputDeprecatedStatus | null;

		/** Contains logging configuration information for a type. */
		LoggingConfig?: LoggingConfig;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ExecutionRoleArn?: string | null;
		Visibility?: DescribeTypeOutputVisibility | null;

		/** Max length: 4096 */
		SourceUrl?: string | null;

		/** Max length: 4096 */
		DocumentationUrl?: string | null;
		LastUpdated?: Date | null;
		TimeCreated?: Date | null;
	}
	export interface DescribeTypeOutputFormProperties {

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DefaultVersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 16777216
		 * Min length: 1
		 */
		Schema: FormControl<string | null | undefined>,
		ProvisioningType: FormControl<DescribeTypeOutputProvisioningType | null | undefined>,
		DeprecatedStatus: FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		Visibility: FormControl<DescribeTypeOutputVisibility | null | undefined>,

		/** Max length: 4096 */
		SourceUrl: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		DocumentationUrl: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		TimeCreated: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTypeOutputFormGroup() {
		return new FormGroup<DescribeTypeOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Schema: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16777216)]),
			ProvisioningType: new FormControl<DescribeTypeOutputProvisioningType | null | undefined>(undefined),
			DeprecatedStatus: new FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('arn:.+:iam::[0-9]{12}:role/.+')]),
			Visibility: new FormControl<DescribeTypeOutputVisibility | null | undefined>(undefined),
			SourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			DocumentationUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			TimeCreated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeTypeOutputType { RESOURCE = 0 }

	export enum DescribeTypeOutputProvisioningType { NON_PROVISIONABLE = 0, IMMUTABLE = 1, FULLY_MUTABLE = 2 }

	export enum DescribeTypeOutputDeprecatedStatus { LIVE = 0, DEPRECATED = 1 }


	/** Contains logging configuration information for a type. */
	export interface LoggingConfig {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		LogRoleArn: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: string;
	}

	/** Contains logging configuration information for a type. */
	export interface LoggingConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		LogRoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			LogRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('arn:.+:iam::[0-9]{12}:role/.+')]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
		});

	}

	export enum DescribeTypeOutputVisibility { PUBLIC = 0, PRIVATE = 1 }

	export interface DescribeTypeRegistrationOutput {
		ProgressStatus?: DescribeTypeRegistrationOutputProgressStatus | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** Max length: 1024 */
		TypeArn?: string | null;

		/** Max length: 1024 */
		TypeVersionArn?: string | null;
	}
	export interface DescribeTypeRegistrationOutputFormProperties {
		ProgressStatus: FormControl<DescribeTypeRegistrationOutputProgressStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		TypeArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		TypeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeRegistrationOutputFormGroup() {
		return new FormGroup<DescribeTypeRegistrationOutputFormProperties>({
			ProgressStatus: new FormControl<DescribeTypeRegistrationOutputProgressStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			TypeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			TypeVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
		});

	}

	export enum DescribeTypeRegistrationOutputProgressStatus { COMPLETE = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DetectStackDriftOutput {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: string;
	}
	export interface DetectStackDriftOutputFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackDriftOutputFormGroup() {
		return new FormGroup<DetectStackDriftOutputFormProperties>({
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export interface DetectStackResourceDriftOutput {

		/**
		 * <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>
		 * Required
		 */
		StackResourceDrift: StackResourceDrift;
	}
	export interface DetectStackResourceDriftOutputFormProperties {
	}
	export function CreateDetectStackResourceDriftOutputFormGroup() {
		return new FormGroup<DetectStackResourceDriftOutputFormProperties>({
		});

	}

	export interface DetectStackSetDriftOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface DetectStackSetDriftOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackSetDriftOutputFormGroup() {
		return new FormGroup<DetectStackSetDriftOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The output for a <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostOutput {
		Url?: string | null;
	}

	/** The output for a <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostOutputFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateEstimateTemplateCostOutputFormGroup() {
		return new FormGroup<EstimateTemplateCostOutputFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetOutput {
	}

	/** The output for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetOutputFormProperties {
	}
	export function CreateExecuteChangeSetOutputFormGroup() {
		return new FormGroup<ExecuteChangeSetOutputFormProperties>({
		});

	}


	/** The output for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyOutput {

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody?: string | null;
	}

	/** The output for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyOutputFormProperties {

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody: FormControl<string | null | undefined>,
	}
	export function CreateGetStackPolicyOutputFormGroup() {
		return new FormGroup<GetStackPolicyOutputFormProperties>({
			StackPolicyBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
		});

	}


	/** The output for <a>GetTemplate</a> action. */
	export interface GetTemplateOutput {

		/** Min length: 1 */
		TemplateBody?: string | null;
		StagesAvailable?: Array<TemplateStage>;
	}

	/** The output for <a>GetTemplate</a> action. */
	export interface GetTemplateOutputFormProperties {

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateOutputFormGroup() {
		return new FormGroup<GetTemplateOutputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export enum TemplateStage { Original = 0, Processed = 1 }


	/** The output for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryOutput {
		Parameters?: Array<ParameterDeclaration>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string | null;
		ResourceTypes?: Array<string>;
		Version?: string | null;
		Metadata?: string | null;
		DeclaredTransforms?: Array<string>;
		ResourceIdentifierSummaries?: Array<ResourceIdentifierSummary>;
	}

	/** The output for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		CapabilitiesReason: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateSummaryOutputFormGroup() {
		return new FormGroup<GetTemplateSummaryOutputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CapabilitiesReason: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ParameterDeclaration data type. */
	export interface ParameterDeclaration {
		ParameterKey?: string | null;
		DefaultValue?: string | null;
		ParameterType?: string | null;
		NoEcho?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property. */
		ParameterConstraints?: ParameterConstraints;
	}

	/** The ParameterDeclaration data type. */
	export interface ParameterDeclarationFormProperties {
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ParameterType: FormControl<string | null | undefined>,
		NoEcho: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateParameterDeclarationFormGroup() {
		return new FormGroup<ParameterDeclarationFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			ParameterType: new FormControl<string | null | undefined>(undefined),
			NoEcho: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property. */
	export interface ParameterConstraints {
		AllowedValues?: Array<string>;
	}

	/** A set of criteria that AWS CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, AWS CloudFormation returns only the <code>AllowedValues</code> property. */
	export interface ParameterConstraintsFormProperties {
	}
	export function CreateParameterConstraintsFormGroup() {
		return new FormGroup<ParameterConstraintsFormProperties>({
		});

	}


	/** Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type. */
	export interface ResourceIdentifierSummary {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		LogicalResourceIds?: Array<string>;
		ResourceIdentifiers?: Array<string>;
	}

	/** Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type. */
	export interface ResourceIdentifierSummaryFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierSummaryFormGroup() {
		return new FormGroup<ResourceIdentifierSummaryFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}


	/** The output for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsOutput {
		Summaries?: Array<ChangeSetSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsOutputFormGroup() {
		return new FormGroup<ListChangeSetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated. */
	export interface ChangeSetSummary {
		StackId?: string | null;
		StackName?: string | null;

		/** Min length: 1 */
		ChangeSetId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName?: string | null;
		ExecutionStatus?: DescribeChangeSetOutputExecutionStatus | null;
		Status?: DescribeChangeSetOutputStatus | null;
		StatusReason?: string | null;
		CreationTime?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated. */
	export interface ChangeSetSummaryFormProperties {
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		ChangeSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,
		ExecutionStatus: FormControl<DescribeChangeSetOutputExecutionStatus | null | undefined>,
		Status: FormControl<DescribeChangeSetOutputStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateChangeSetSummaryFormGroup() {
		return new FormGroup<ChangeSetSummaryFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			ChangeSetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('arn:[-a-zA-Z0-9:/]*')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*')]),
			ExecutionStatus: new FormControl<DescribeChangeSetOutputExecutionStatus | null | undefined>(undefined),
			Status: new FormControl<DescribeChangeSetOutputStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListExportsOutput {
		Exports?: Array<Export>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListExportsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsOutputFormGroup() {
		return new FormGroup<ListExportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The <code>Export</code> structure describes the exported output values for a stack. */
	export interface Export {
		ExportingStackId?: string | null;
		Name?: string | null;
		Value?: string | null;
	}

	/** The <code>Export</code> structure describes the exported output values for a stack. */
	export interface ExportFormProperties {
		ExportingStackId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			ExportingStackId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsOutput {
		Imports?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListImportsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsOutputFormGroup() {
		return new FormGroup<ListImportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListStackInstancesOutput {
		Summaries?: Array<StackInstanceSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListStackInstancesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstancesOutputFormGroup() {
		return new FormGroup<ListStackInstancesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The structure that contains summary information about a stack instance. */
	export interface StackInstanceSummary {
		StackSetId?: string | null;
		Region?: string | null;
		Account?: string | null;
		StackId?: string | null;
		Status?: StackInstanceStatus | null;
		StatusReason?: string | null;
		OrganizationalUnitId?: string | null;
		DriftStatus?: DescribeStackDriftDetectionStatusOutputStackDriftStatus | null;
		LastDriftCheckTimestamp?: Date | null;
	}

	/** The structure that contains summary information about a stack instance. */
	export interface StackInstanceSummaryFormProperties {
		StackSetId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Account: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		Status: FormControl<StackInstanceStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
		DriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackInstanceSummaryFormGroup() {
		return new FormGroup<StackInstanceSummaryFormProperties>({
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-]{1,128}$')]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			StackId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackInstanceStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$')]),
			DriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output for a <a>ListStackResources</a> action. */
	export interface ListStackResourcesOutput {
		StackResourceSummaries?: Array<StackResourceSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for a <a>ListStackResources</a> action. */
	export interface ListStackResourcesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackResourcesOutputFormGroup() {
		return new FormGroup<ListStackResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Contains high-level information about the specified stack resource. */
	export interface StackResourceSummary {

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: string;

		/** Required */
		LastUpdatedTimestamp: Date;

		/** Required */
		ResourceStatus: StackEventResourceStatus;
		ResourceStatusReason?: string | null;

		/** Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
		DriftInformation?: StackResourceDriftInformationSummary;
	}

	/** Contains high-level information about the specified stack resource. */
	export interface StackResourceSummaryFormProperties {

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<StackEventResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceSummaryFormGroup() {
		return new FormGroup<StackResourceSummaryFormProperties>({
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<StackEventResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationSummary {

		/** Required */
		StackResourceDriftStatus: StackResourceDriftInformationStackResourceDriftStatus;
		LastCheckTimestamp?: Date | null;
	}

	/** Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationSummaryFormProperties {

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftInformationSummaryFormGroup() {
		return new FormGroup<StackResourceDriftInformationSummaryFormProperties>({
			StackResourceDriftStatus: new FormControl<StackResourceDriftInformationStackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStackSetOperationResultsOutput {
		Summaries?: Array<StackSetOperationResultSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListStackSetOperationResultsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetOperationResultsOutputFormGroup() {
		return new FormGroup<ListStackSetOperationResultsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The structure that contains information about a specified operation's results for a given account in a given Region. */
	export interface StackSetOperationResultSummary {
		Account?: string | null;
		Region?: string | null;
		Status?: StackSetOperationResultSummaryStatus | null;
		StatusReason?: string | null;

		/** <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
		AccountGateResult?: AccountGateResult;
		OrganizationalUnitId?: string | null;
	}

	/** The structure that contains information about a specified operation's results for a given account in a given Region. */
	export interface StackSetOperationResultSummaryFormProperties {
		Account: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Status: FormControl<StackSetOperationResultSummaryStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateStackSetOperationResultSummaryFormGroup() {
		return new FormGroup<StackSetOperationResultSummaryFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-]{1,128}$')]),
			Status: new FormControl<StackSetOperationResultSummaryStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$')]),
		});

	}

	export enum StackSetOperationResultSummaryStatus { PENDING = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }


	/** <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
	export interface AccountGateResult {
		Status?: AccountGateResultStatus | null;
		StatusReason?: string | null;
	}

	/** <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
	export interface AccountGateResultFormProperties {
		Status: FormControl<AccountGateResultStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateAccountGateResultFormGroup() {
		return new FormGroup<AccountGateResultFormProperties>({
			Status: new FormControl<AccountGateResultStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountGateResultStatus { SUCCEEDED = 0, FAILED = 1, SKIPPED = 2 }

	export interface ListStackSetOperationsOutput {
		Summaries?: Array<StackSetOperationSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListStackSetOperationsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetOperationsOutputFormGroup() {
		return new FormGroup<ListStackSetOperationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The structures that contain summary information about the specified operation. */
	export interface StackSetOperationSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
		Action?: StackSetOperationAction | null;
		Status?: StackSetOperationStatus | null;
		CreationTimestamp?: Date | null;
		EndTimestamp?: Date | null;
	}

	/** The structures that contain summary information about the specified operation. */
	export interface StackSetOperationSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
		Action: FormControl<StackSetOperationAction | null | undefined>,
		Status: FormControl<StackSetOperationStatus | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackSetOperationSummaryFormGroup() {
		return new FormGroup<StackSetOperationSummaryFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
			Action: new FormControl<StackSetOperationAction | null | undefined>(undefined),
			Status: new FormControl<StackSetOperationStatus | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStackSetsOutput {
		Summaries?: Array<StackSetSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListStackSetsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetsOutputFormGroup() {
		return new FormGroup<ListStackSetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The structures that contain summary information about the specified stack set. */
	export interface StackSetSummary {
		StackSetName?: string | null;
		StackSetId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Status?: StackSetStatus | null;

		/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;
		PermissionModel?: StackSetPermissionModel | null;
		DriftStatus?: DescribeStackDriftDetectionStatusOutputStackDriftStatus | null;
		LastDriftCheckTimestamp?: Date | null;
	}

	/** The structures that contain summary information about the specified stack set. */
	export interface StackSetSummaryFormProperties {
		StackSetName: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,
		PermissionModel: FormControl<StackSetPermissionModel | null | undefined>,
		DriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackSetSummaryFormGroup() {
		return new FormGroup<StackSetSummaryFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
			PermissionModel: new FormControl<StackSetPermissionModel | null | undefined>(undefined),
			DriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output for <a>ListStacks</a> action. */
	export interface ListStacksOutput {
		StackSummaries?: Array<StackSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The output for <a>ListStacks</a> action. */
	export interface ListStacksOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStacksOutputFormGroup() {
		return new FormGroup<ListStacksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The StackSummary Data Type */
	export interface StackSummary {
		StackId?: string | null;

		/** Required */
		StackName: string;
		TemplateDescription?: string | null;

		/** Required */
		CreationTime: Date;
		LastUpdatedTime?: Date | null;
		DeletionTime?: Date | null;

		/** Required */
		StackStatus: StackStackStatus;
		StackStatusReason?: string | null;
		ParentId?: string | null;
		RootId?: string | null;

		/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
		DriftInformation?: StackDriftInformationSummary;
	}

	/** The StackSummary Data Type */
	export interface StackSummaryFormProperties {
		StackId: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		DeletionTime: FormControl<Date | null | undefined>,

		/** Required */
		StackStatus: FormControl<StackStackStatus | null | undefined>,
		StackStatusReason: FormControl<string | null | undefined>,
		ParentId: FormControl<string | null | undefined>,
		RootId: FormControl<string | null | undefined>,
	}
	export function CreateStackSummaryFormGroup() {
		return new FormGroup<StackSummaryFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			DeletionTime: new FormControl<Date | null | undefined>(undefined),
			StackStatus: new FormControl<StackStackStatus | null | undefined>(undefined, [Validators.required]),
			StackStatusReason: new FormControl<string | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
			RootId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationSummary {

		/** Required */
		StackDriftStatus: DescribeStackDriftDetectionStatusOutputStackDriftStatus;
		LastCheckTimestamp?: Date | null;
	}

	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationSummaryFormProperties {

		/** Required */
		StackDriftStatus: FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackDriftInformationSummaryFormGroup() {
		return new FormGroup<StackDriftInformationSummaryFormProperties>({
			StackDriftStatus: new FormControl<DescribeStackDriftDetectionStatusOutputStackDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StackStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, ROLLBACK_IN_PROGRESS = 3, ROLLBACK_FAILED = 4, ROLLBACK_COMPLETE = 5, DELETE_IN_PROGRESS = 6, DELETE_FAILED = 7, DELETE_COMPLETE = 8, UPDATE_IN_PROGRESS = 9, UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 10, UPDATE_COMPLETE = 11, UPDATE_ROLLBACK_IN_PROGRESS = 12, UPDATE_ROLLBACK_FAILED = 13, UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 14, UPDATE_ROLLBACK_COMPLETE = 15, REVIEW_IN_PROGRESS = 16, IMPORT_IN_PROGRESS = 17, IMPORT_COMPLETE = 18, IMPORT_ROLLBACK_IN_PROGRESS = 19, IMPORT_ROLLBACK_FAILED = 20, IMPORT_ROLLBACK_COMPLETE = 21 }

	export interface ListTypeRegistrationsOutput {
		RegistrationTokenList?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTypeRegistrationsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeRegistrationsOutputFormGroup() {
		return new FormGroup<ListTypeRegistrationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListTypeVersionsOutput {
		TypeVersionSummaries?: Array<TypeVersionSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTypeVersionsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeVersionsOutputFormGroup() {
		return new FormGroup<ListTypeVersionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Contains summary information about a specific version of a CloudFormation type. */
	export interface TypeVersionSummary {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId?: string | null;
		IsDefaultVersion?: boolean | null;

		/** Max length: 1024 */
		Arn?: string | null;
		TimeCreated?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** Contains summary information about a specific version of a CloudFormation type. */
	export interface TypeVersionSummaryFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,
		TimeCreated: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTypeVersionSummaryFormGroup() {
		return new FormGroup<TypeVersionSummaryFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			TimeCreated: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListTypesOutput {
		TypeSummaries?: Array<TypeSummary>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTypesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesOutputFormGroup() {
		return new FormGroup<ListTypesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Contains summary information about the specified CloudFormation type. */
	export interface TypeSummary {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DefaultVersionId?: string | null;

		/** Max length: 1024 */
		TypeArn?: string | null;
		LastUpdated?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** Contains summary information about the specified CloudFormation type. */
	export interface TypeSummaryFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DefaultVersionId: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		TypeArn: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTypeSummaryFormGroup() {
		return new FormGroup<TypeSummaryFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
			TypeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface RecordHandlerProgressOutput {
	}
	export interface RecordHandlerProgressOutputFormProperties {
	}
	export function CreateRecordHandlerProgressOutputFormGroup() {
		return new FormGroup<RecordHandlerProgressOutputFormProperties>({
		});

	}

	export interface InvalidStateTransitionException {
	}
	export interface InvalidStateTransitionExceptionFormProperties {
	}
	export function CreateInvalidStateTransitionExceptionFormGroup() {
		return new FormGroup<InvalidStateTransitionExceptionFormProperties>({
		});

	}

	export interface OperationStatusCheckFailedException {
	}
	export interface OperationStatusCheckFailedExceptionFormProperties {
	}
	export function CreateOperationStatusCheckFailedExceptionFormGroup() {
		return new FormGroup<OperationStatusCheckFailedExceptionFormProperties>({
		});

	}

	export interface RegisterTypeOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RegistrationToken?: string | null;
	}
	export interface RegisterTypeOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RegistrationToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTypeOutputFormGroup() {
		return new FormGroup<RegisterTypeOutputFormProperties>({
			RegistrationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface SetTypeDefaultVersionOutput {
	}
	export interface SetTypeDefaultVersionOutputFormProperties {
	}
	export function CreateSetTypeDefaultVersionOutputFormGroup() {
		return new FormGroup<SetTypeDefaultVersionOutputFormProperties>({
		});

	}

	export interface StopStackSetOperationOutput {
	}
	export interface StopStackSetOperationOutputFormProperties {
	}
	export function CreateStopStackSetOperationOutputFormGroup() {
		return new FormGroup<StopStackSetOperationOutputFormProperties>({
		});

	}


	/** The output for an <a>UpdateStack</a> action. */
	export interface UpdateStackOutput {
		StackId?: string | null;
	}

	/** The output for an <a>UpdateStack</a> action. */
	export interface UpdateStackOutputFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackOutputFormGroup() {
		return new FormGroup<UpdateStackOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackInstancesOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface UpdateStackInstancesOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackInstancesOutputFormGroup() {
		return new FormGroup<UpdateStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateStackSetOutput {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface UpdateStackSetOutputFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackSetOutputFormGroup() {
		return new FormGroup<UpdateStackSetOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateTerminationProtectionOutput {
		StackId?: string | null;
	}
	export interface UpdateTerminationProtectionOutputFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTerminationProtectionOutputFormGroup() {
		return new FormGroup<UpdateTerminationProtectionOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateOutput {
		Parameters?: Array<TemplateParameter>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string | null;
		DeclaredTransforms?: Array<string>;
	}

	/** The output for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		CapabilitiesReason: FormControl<string | null | undefined>,
	}
	export function CreateValidateTemplateOutputFormGroup() {
		return new FormGroup<ValidateTemplateOutputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CapabilitiesReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TemplateParameter data type. */
	export interface TemplateParameter {
		ParameterKey?: string | null;
		DefaultValue?: string | null;
		NoEcho?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** The TemplateParameter data type. */
	export interface TemplateParameterFormProperties {
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		NoEcho: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTemplateParameterFormGroup() {
		return new FormGroup<TemplateParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			NoEcho: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum AccountGateStatus { SUCCEEDED = 0, FAILED = 1, SKIPPED = 2 }


	/** The input for the <a>CancelUpdateStack</a> action. */
	export interface CancelUpdateStackInput {

		/** Required */
		StackName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The input for the <a>CancelUpdateStack</a> action. */
	export interface CancelUpdateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelUpdateStackInputFormGroup() {
		return new FormGroup<CancelUpdateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum ChangeAction { Add = 0, Modify = 1, Remove = 2, Import = 3 }

	export enum ChangeSetStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, DELETE_COMPLETE = 3, FAILED = 4 }

	export enum ExecutionStatus { UNAVAILABLE = 0, AVAILABLE = 1, EXECUTE_IN_PROGRESS = 2, EXECUTE_COMPLETE = 3, EXECUTE_FAILED = 4, OBSOLETE = 5 }

	export enum ChangeSetType { CREATE = 0, UPDATE = 1, IMPORT = 2 }

	export enum ChangeSource { ResourceReference = 0, ParameterReference = 1, ResourceAttribute = 2, DirectModification = 3, Automatic = 4 }


	/** The input for the <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;
		ResourcesToSkip?: Array<string>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The input for the <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateContinueUpdateRollbackInputFormGroup() {
		return new FormGroup<ContinueUpdateRollbackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The input for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		UsePreviousTemplate?: boolean | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;

		/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;

		/** Maximum items: 5 */
		NotificationARNs?: Array<string>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		ChangeSetType?: ChangeSetType | null;

		/** Maximum items: 200 */
		ResourcesToImport?: Array<ResourceToImport>;
	}

	/** The input for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		ChangeSetType: FormControl<ChangeSetType | null | undefined>,
	}
	export function CreateCreateChangeSetInputFormGroup() {
		return new FormGroup<CreateChangeSetInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ChangeSetType: new FormControl<ChangeSetType | null | undefined>(undefined),
		});

	}

	export enum OnFailure { DO_NOTHING = 0, ROLLBACK = 1, DELETE = 2 }


	/** The input for <a>CreateStack</a> action. */
	export interface CreateStackInput {

		/** Required */
		StackName: string;

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		Parameters?: Array<Parameter>;
		DisableRollback?: boolean | null;

		/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;

		/** Minimum: 1 */
		TimeoutInMinutes?: number | null;

		/** Maximum items: 5 */
		NotificationARNs?: Array<string>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;
		OnFailure?: OnFailure | null;

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody?: string | null;

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL?: string | null;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
		EnableTerminationProtection?: boolean | null;
	}

	/** The input for <a>CreateStack</a> action. */
	export interface CreateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		TimeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,
		OnFailure: FormControl<OnFailure | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateStackInputFormGroup() {
		return new FormGroup<CreateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			OnFailure: new FormControl<OnFailure | null | undefined>(undefined),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;

		/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;
		ParameterOverrides?: Array<Parameter>;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface CreateStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackInstancesInputFormGroup() {
		return new FormGroup<CreateStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum PermissionModels { SERVICE_MANAGED = 0, SELF_MANAGED = 1 }

	export interface CreateStackSetInput {

		/** Required */
		StackSetName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName?: string | null;
		PermissionModel?: StackSetPermissionModel | null;

		/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<StackSetPermissionModel | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackSetInputFormGroup() {
		return new FormGroup<CreateStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z_0-9+=,.@-]+')]),
			PermissionModel: new FormControl<StackSetPermissionModel | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The input for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetInput {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: string;

		/** Min length: 1 */
		StackName?: string | null;
	}

	/** The input for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChangeSetInputFormGroup() {
		return new FormGroup<DeleteChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*|arn:[-a-zA-Z0-9:/]*')]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
		});

	}


	/** The input for <a>DeleteStack</a> action. */
	export interface DeleteStackInput {

		/** Required */
		StackName: string;
		RetainResources?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The input for <a>DeleteStack</a> action. */
	export interface DeleteStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackInputFormGroup() {
		return new FormGroup<DeleteStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface DeleteStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;

		/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;

		/** Required */
		RetainStacks: boolean;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface DeleteStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		RetainStacks: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackInstancesInputFormGroup() {
		return new FormGroup<DeleteStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetainStacks: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface DeleteStackSetInput {

		/** Required */
		StackSetName: string;
	}
	export interface DeleteStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackSetInputFormGroup() {
		return new FormGroup<DeleteStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeprecatedStatus { LIVE = 0, DEPRECATED = 1 }

	export enum RegistryType { RESOURCE = 0 }

	export interface DeregisterTypeInput {

		/** Max length: 1024 */
		Arn?: string | null;
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId?: string | null;
	}
	export interface DeregisterTypeInputFormProperties {

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTypeInputFormGroup() {
		return new FormGroup<DeregisterTypeInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+')]),
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
		});

	}


	/** The input for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsInputFormGroup() {
		return new FormGroup<DescribeAccountLimitsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The input for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetInput {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: string;

		/** Min length: 1 */
		StackName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetInputFormGroup() {
		return new FormGroup<DescribeChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*|arn:[-a-zA-Z0-9:/]*')]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DescribeStackDriftDetectionStatusInput {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: string;
	}
	export interface DescribeStackDriftDetectionStatusInputFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StackDriftDetectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackDriftDetectionStatusInputFormGroup() {
		return new FormGroup<DescribeStackDriftDetectionStatusInputFormProperties>({
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36)]),
		});

	}

	export enum StackDriftStatus { DRIFTED = 0, IN_SYNC = 1, UNKNOWN = 2, NOT_CHECKED = 3 }

	export enum StackDriftDetectionStatus { DETECTION_IN_PROGRESS = 0, DETECTION_FAILED = 1, DETECTION_COMPLETE = 2 }


	/** The input for <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsInput {
		StackName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsInputFormProperties {
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackEventsInputFormGroup() {
		return new FormGroup<DescribeStackEventsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DescribeStackInstanceInput {

		/** Required */
		StackSetName: string;

		/** Required */
		StackInstanceAccount: string;

		/** Required */
		StackInstanceRegion: string;
	}
	export interface DescribeStackInstanceInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		StackInstanceAccount: FormControl<string | null | undefined>,

		/** Required */
		StackInstanceRegion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackInstanceInputFormGroup() {
		return new FormGroup<DescribeStackInstanceInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackInstanceAccount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{12}$')]),
			StackInstanceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9-]{1,128}$')]),
		});

	}

	export interface DescribeStackResourceDriftsInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		StackResourceDriftStatusFilters?: Array<StackResourceDriftStatus>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeStackResourceDriftsInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeStackResourceDriftsInputFormGroup() {
		return new FormGroup<DescribeStackResourceDriftsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** The input for <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceInput {

		/** Required */
		StackName: string;

		/** Required */
		LogicalResourceId: string;
	}

	/** The input for <a>DescribeStackResource</a> action. */
	export interface DescribeStackResourceInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackResourceInputFormGroup() {
		return new FormGroup<DescribeStackResourceInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesInput {
		StackName?: string | null;
		LogicalResourceId?: string | null;
		PhysicalResourceId?: string | null;
	}

	/** The input for <a>DescribeStackResources</a> action. */
	export interface DescribeStackResourcesInputFormProperties {
		StackName: FormControl<string | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackResourcesInputFormGroup() {
		return new FormGroup<DescribeStackResourcesInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStackSetInput {

		/** Required */
		StackSetName: string;
	}
	export interface DescribeStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackSetInputFormGroup() {
		return new FormGroup<DescribeStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStackSetOperationInput {

		/** Required */
		StackSetName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: string;
	}
	export interface DescribeStackSetOperationInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackSetOperationInputFormGroup() {
		return new FormGroup<DescribeStackSetOperationInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The input for <a>DescribeStacks</a> action. */
	export interface DescribeStacksInput {
		StackName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for <a>DescribeStacks</a> action. */
	export interface DescribeStacksInputFormProperties {
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksInputFormGroup() {
		return new FormGroup<DescribeStacksInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface DescribeTypeInput {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/** Max length: 1024 */
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId?: string | null;
	}
	export interface DescribeTypeInputFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeInputFormGroup() {
		return new FormGroup<DescribeTypeInputFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
		});

	}

	export enum ProvisioningType { NON_PROVISIONABLE = 0, IMMUTABLE = 1, FULLY_MUTABLE = 2 }

	export enum Visibility { PUBLIC = 0, PRIVATE = 1 }

	export interface DescribeTypeRegistrationInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegistrationToken: string;
	}
	export interface DescribeTypeRegistrationInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RegistrationToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeRegistrationInputFormGroup() {
		return new FormGroup<DescribeTypeRegistrationInputFormProperties>({
			RegistrationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum RegistrationStatus { COMPLETE = 0, IN_PROGRESS = 1, FAILED = 2 }

	export interface DetectStackDriftInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		LogicalResourceIds?: Array<string>;
	}
	export interface DetectStackDriftInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackDriftInputFormGroup() {
		return new FormGroup<DetectStackDriftInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
		});

	}

	export interface DetectStackResourceDriftInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/** Required */
		LogicalResourceId: string;
	}
	export interface DetectStackResourceDriftInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackResourceDriftInputFormGroup() {
		return new FormGroup<DetectStackResourceDriftInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectStackSetDriftInput {

		/** Required */
		StackSetName: string;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface DetectStackSetDriftInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackSetDriftInputFormGroup() {
		return new FormGroup<DetectStackSetDriftInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*(?::[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})?')]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum DifferenceType { ADD = 0, REMOVE = 1, NOT_EQUAL = 2 }


	/** The input for an <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostInput {

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		Parameters?: Array<Parameter>;
	}

	/** The input for an <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostInputFormProperties {

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
	}
	export function CreateEstimateTemplateCostInputFormGroup() {
		return new FormGroup<EstimateTemplateCostInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum EvaluationType { Static = 0, Dynamic = 1 }


	/** The input for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetInput {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: string;

		/** Min length: 1 */
		StackName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The input for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteChangeSetInputFormGroup() {
		return new FormGroup<ExecuteChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*|arn:[-a-zA-Z0-9:/]*')]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The input for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyInput {

		/** Required */
		StackName: string;
	}

	/** The input for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateGetStackPolicyInputFormGroup() {
		return new FormGroup<GetStackPolicyInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for a <a>GetTemplate</a> action. */
	export interface GetTemplateInput {
		StackName?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName?: string | null;
		TemplateStage?: TemplateStage | null;
	}

	/** The input for a <a>GetTemplate</a> action. */
	export interface GetTemplateInputFormProperties {
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		ChangeSetName: FormControl<string | null | undefined>,
		TemplateStage: FormControl<TemplateStage | null | undefined>,
	}
	export function CreateGetTemplateInputFormGroup() {
		return new FormGroup<GetTemplateInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*|arn:[-a-zA-Z0-9:/]*')]),
			TemplateStage: new FormControl<TemplateStage | null | undefined>(undefined),
		});

	}


	/** The input for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryInput {

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;

		/** Min length: 1 */
		StackName?: string | null;
		StackSetName?: string | null;
	}

	/** The input for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryInputFormProperties {

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,

		/** Min length: 1 */
		StackName: FormControl<string | null | undefined>,
		StackSetName: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateSummaryInputFormGroup() {
		return new FormGroup<GetTemplateSummaryInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*(?::[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})?')]),
		});

	}

	export enum HandlerErrorCode { NotUpdatable = 0, InvalidRequest = 1, AccessDenied = 2, InvalidCredentials = 3, AlreadyExists = 4, NotFound = 5, ResourceConflict = 6, Throttling = 7, ServiceLimitExceeded = 8, NotStabilized = 9, GeneralServiceException = 10, ServiceInternalError = 11, NetworkFailure = 12, InternalFailure = 13 }


	/** The input for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsInputFormGroup() {
		return new FormGroup<ListChangeSetsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListExportsInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListExportsInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsInputFormGroup() {
		return new FormGroup<ListExportsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListImportsInput {

		/** Required */
		ExportName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListImportsInputFormProperties {

		/** Required */
		ExportName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsInputFormGroup() {
		return new FormGroup<ListImportsInputFormProperties>({
			ExportName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListStackInstancesInput {

		/** Required */
		StackSetName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		StackInstanceAccount?: string | null;
		StackInstanceRegion?: string | null;
	}
	export interface ListStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		StackInstanceAccount: FormControl<string | null | undefined>,
		StackInstanceRegion: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstancesInputFormGroup() {
		return new FormGroup<ListStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			StackInstanceAccount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{12}$')]),
			StackInstanceRegion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-]{1,128}$')]),
		});

	}


	/** The input for the <a>ListStackResource</a> action. */
	export interface ListStackResourcesInput {

		/** Required */
		StackName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}

	/** The input for the <a>ListStackResource</a> action. */
	export interface ListStackResourcesInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackResourcesInputFormGroup() {
		return new FormGroup<ListStackResourcesInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListStackSetOperationResultsInput {

		/** Required */
		StackSetName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListStackSetOperationResultsInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStackSetOperationResultsInputFormGroup() {
		return new FormGroup<ListStackSetOperationResultsInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListStackSetOperationsInput {

		/** Required */
		StackSetName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListStackSetOperationsInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStackSetOperationsInputFormGroup() {
		return new FormGroup<ListStackSetOperationsInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListStackSetsInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Status?: StackSetStatus | null;
	}
	export interface ListStackSetsInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,
	}
	export function CreateListStackSetsInputFormGroup() {
		return new FormGroup<ListStackSetsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
		});

	}


	/** The input for <a>ListStacks</a> action. */
	export interface ListStacksInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
		StackStatusFilter?: Array<StackStatus>;
	}

	/** The input for <a>ListStacks</a> action. */
	export interface ListStacksInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStacksInputFormGroup() {
		return new FormGroup<ListStacksInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListTypeRegistrationsInput {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/** Max length: 1024 */
		TypeArn?: string | null;
		RegistrationStatusFilter?: DescribeTypeRegistrationOutputProgressStatus | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTypeRegistrationsInputFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		TypeArn: FormControl<string | null | undefined>,
		RegistrationStatusFilter: FormControl<DescribeTypeRegistrationOutputProgressStatus | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeRegistrationsInputFormGroup() {
		return new FormGroup<ListTypeRegistrationsInputFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			TypeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+')]),
			RegistrationStatusFilter: new FormControl<DescribeTypeRegistrationOutputProgressStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface ListTypeVersionsInput {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/** Max length: 1024 */
		Arn?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
		DeprecatedStatus?: DescribeTypeOutputDeprecatedStatus | null;
	}
	export interface ListTypeVersionsInputFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
		DeprecatedStatus: FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>,
	}
	export function CreateListTypeVersionsInputFormGroup() {
		return new FormGroup<ListTypeVersionsInputFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			DeprecatedStatus: new FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>(undefined),
		});

	}

	export interface ListTypesInput {
		Visibility?: DescribeTypeOutputVisibility | null;
		ProvisioningType?: DescribeTypeOutputProvisioningType | null;
		DeprecatedStatus?: DescribeTypeOutputDeprecatedStatus | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTypesInputFormProperties {
		Visibility: FormControl<DescribeTypeOutputVisibility | null | undefined>,
		ProvisioningType: FormControl<DescribeTypeOutputProvisioningType | null | undefined>,
		DeprecatedStatus: FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesInputFormGroup() {
		return new FormGroup<ListTypesInputFormProperties>({
			Visibility: new FormControl<DescribeTypeOutputVisibility | null | undefined>(undefined),
			ProvisioningType: new FormControl<DescribeTypeOutputProvisioningType | null | undefined>(undefined),
			DeprecatedStatus: new FormControl<DescribeTypeOutputDeprecatedStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export enum OperationStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3 }

	export interface RecordHandlerProgressInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		BearerToken: string;

		/** Required */
		OperationStatus: OperationStatus;
		CurrentOperationStatus?: OperationStatus | null;

		/** Max length: 1024 */
		StatusMessage?: string | null;
		ErrorCode?: HandlerErrorCode | null;

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		ResourceModel?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface RecordHandlerProgressInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		BearerToken: FormControl<string | null | undefined>,

		/** Required */
		OperationStatus: FormControl<OperationStatus | null | undefined>,
		CurrentOperationStatus: FormControl<OperationStatus | null | undefined>,

		/** Max length: 1024 */
		StatusMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<HandlerErrorCode | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		ResourceModel: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateRecordHandlerProgressInputFormGroup() {
		return new FormGroup<RecordHandlerProgressInputFormProperties>({
			BearerToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			OperationStatus: new FormControl<OperationStatus | null | undefined>(undefined, [Validators.required]),
			CurrentOperationStatus: new FormControl<OperationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ErrorCode: new FormControl<HandlerErrorCode | null | undefined>(undefined),
			ResourceModel: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface RegisterTypeInput {
		Type?: DescribeTypeOutputType | null;

		/**
		 * Required
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		SchemaHandlerPackage: string;

		/** Contains logging configuration information for a type. */
		LoggingConfig?: LoggingConfig;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ExecutionRoleArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface RegisterTypeInputFormProperties {
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Required
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		SchemaHandlerPackage: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTypeInputFormGroup() {
		return new FormGroup<RegisterTypeInputFormProperties>({
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			SchemaHandlerPackage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('arn:.+:iam::[0-9]{12}:role/.+')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export enum Replacement { True = 0, False = 1, Conditional = 2 }

	export enum RequiresRecreation { Never = 0, Conditionally = 1, Always = 2 }

	export enum ResourceSignalStatus { SUCCESS = 0, FAILURE = 1 }

	export enum ResourceStatus { CREATE_IN_PROGRESS = 0, CREATE_FAILED = 1, CREATE_COMPLETE = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4, DELETE_COMPLETE = 5, DELETE_SKIPPED = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8, UPDATE_COMPLETE = 9, IMPORT_FAILED = 10, IMPORT_COMPLETE = 11, IMPORT_IN_PROGRESS = 12, IMPORT_ROLLBACK_IN_PROGRESS = 13, IMPORT_ROLLBACK_FAILED = 14, IMPORT_ROLLBACK_COMPLETE = 15 }


	/** The input for the <a>SetStackPolicy</a> action. */
	export interface SetStackPolicyInput {

		/** Required */
		StackName: string;

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody?: string | null;

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL?: string | null;
	}

	/** The input for the <a>SetStackPolicy</a> action. */
	export interface SetStackPolicyInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL: FormControl<string | null | undefined>,
	}
	export function CreateSetStackPolicyInputFormGroup() {
		return new FormGroup<SetStackPolicyInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
		});

	}

	export interface SetTypeDefaultVersionInput {

		/** Max length: 1024 */
		Arn?: string | null;
		Type?: DescribeTypeOutputType | null;

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId?: string | null;
	}
	export interface SetTypeDefaultVersionInputFormProperties {

		/** Max length: 1024 */
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<DescribeTypeOutputType | null | undefined>,

		/**
		 * Max length: 196
		 * Min length: 10
		 */
		TypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateSetTypeDefaultVersionInputFormGroup() {
		return new FormGroup<SetTypeDefaultVersionInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+')]),
			Type: new FormControl<DescribeTypeOutputType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(196), Validators.pattern('[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[A-Za-z0-9-]+')]),
		});

	}


	/** The input for the <a>SignalResource</a> action. */
	export interface SignalResourceInput {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;

		/** Required */
		LogicalResourceId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		UniqueId: string;

		/** Required */
		Status: ResourceSignalStatus;
	}

	/** The input for the <a>SignalResource</a> action. */
	export interface SignalResourceInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		UniqueId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<ResourceSignalStatus | null | undefined>,
	}
	export function CreateSignalResourceInputFormGroup() {
		return new FormGroup<SignalResourceInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UniqueId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<ResourceSignalStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StackSetDriftStatus { DRIFTED = 0, IN_SYNC = 1, NOT_CHECKED = 2 }

	export enum StackSetDriftDetectionStatus { COMPLETED = 0, FAILED = 1, PARTIAL_SUCCESS = 2, IN_PROGRESS = 3, STOPPED = 4 }

	export enum StackSetOperationResultStatus { PENDING = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }

	export interface StopStackSetOperationInput {

		/** Required */
		StackSetName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: string;
	}
	export interface StopStackSetOperationInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateStopStackSetOperationInputFormGroup() {
		return new FormGroup<StopStackSetOperationInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}


	/** The input for an <a>UpdateStack</a> action. */
	export interface UpdateStackInput {

		/** Required */
		StackName: string;

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		UsePreviousTemplate?: boolean | null;

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyDuringUpdateBody?: string | null;

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyDuringUpdateURL?: string | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN?: string | null;

		/** <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
		RollbackConfiguration?: RollbackConfiguration;

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody?: string | null;

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL?: string | null;

		/** Maximum items: 5 */
		NotificationARNs?: Array<string>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}

	/** The input for an <a>UpdateStack</a> action. */
	export interface UpdateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyDuringUpdateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyDuringUpdateURL: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		StackPolicyBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		StackPolicyURL: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackInputFormGroup() {
		return new FormGroup<UpdateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			StackPolicyDuringUpdateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			StackPolicyDuringUpdateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;

		/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;
		ParameterOverrides?: Array<Parameter>;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
	}
	export interface UpdateStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackInstancesInputFormGroup() {
		return new FormGroup<UpdateStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z][-a-zA-Z0-9]*(?::[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})?')]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateStackSetInput {

		/** Required */
		StackSetName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
		UsePreviousTemplate?: boolean | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/** <p>The user-specified preferences for how AWS CloudFormation performs a stack set operation. </p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
		OperationPreferences?: StackSetOperationPreferences;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName?: string | null;

		/** <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts to which StackSets deploys. StackSets does not deploy stack instances to the organization master account, even if the master account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
		DeploymentTargets?: DeploymentTargets;
		PermissionModel?: StackSetPermissionModel | null;

		/** [<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). */
		AutoDeployment?: AutoDeployment;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId?: string | null;
		Accounts?: Array<string>;
		Regions?: Array<string>;
	}
	export interface UpdateStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		AdministrationRoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<StackSetPermissionModel | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackSetInputFormGroup() {
		return new FormGroup<UpdateStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z_0-9+=,.@-]+')]),
			PermissionModel: new FormControl<StackSetPermissionModel | null | undefined>(undefined),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9][-a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateTerminationProtectionInput {

		/** Required */
		EnableTerminationProtection: boolean;

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: string;
	}
	export interface UpdateTerminationProtectionInputFormProperties {

		/** Required */
		EnableTerminationProtection: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTerminationProtectionInputFormGroup() {
		return new FormGroup<UpdateTerminationProtectionInputFormProperties>({
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('([a-zA-Z][-a-zA-Z0-9]*)|(arn:\b(aws|aws-us-gov|aws-cn)\b:[-a-zA-Z0-9:/._+]*)')]),
		});

	}


	/** The input for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateInput {

		/** Min length: 1 */
		TemplateBody?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL?: string | null;
	}

	/** The input for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateInputFormProperties {

		/** Min length: 1 */
		TemplateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TemplateURL: FormControl<string | null | undefined>,
	}
	export function CreateValidateTemplateInputFormGroup() {
		return new FormGroup<ValidateTemplateInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			TemplateURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p> </note>
		 * Get #Action=CancelUpdateStack
		 * @param {string} StackName The name or the unique stack ID that is associated with the stack.
		 * @param {string} ClientRequestToken A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_CancelUpdateStack(StackName: string, ClientRequestToken: string | null | undefined, Action: GET_CancelUpdateStackAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CancelUpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
		 * Get #Action=ContinueUpdateRollback
		 * @param {string} StackName <p>The name or the unique ID of the stack that you want to continue rolling back.</p> <note> <p>Don't specify the name of a nested stack (a stack that was created by using the <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code> resource).</p> </note>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {Array<string>} ResourcesToSkip <p>A list of the logical IDs of the resources that AWS CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update was cancelled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason. </p> <important> <p>Specify this property to skip rolling back resources that AWS CloudFormation can't successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. AWS CloudFormation sets the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable. </p> </important> <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources. </p> <p>To skip resources that are part of nested stacks, use the following format: <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or <code>DELETE_FAILED</code>. </p> <note> <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>. </p> </note>
		 * @param {string} ClientRequestToken A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_ContinueUpdateRollback(StackName: string, RoleARN: string | null | undefined, ResourcesToSkip: Array<string> | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_ContinueUpdateRollbackAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ContinueUpdateRollback?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&' + ResourcesToSkip?.map(z => `ResourcesToSkip=${encodeURIComponent(z)}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that AWS CloudFormation will create. If you create a change set for an existing stack, AWS CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources AWS CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make changes until you execute the change set.</p>
		 * Get #Action=CreateChangeSet
		 * @param {string} StackName The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.
		 * @param {string} TemplateBody <p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 * @param {boolean} UsePreviousTemplate Whether to reuse the template that is associated with the stack to create the change set.
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a>Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <note> <p>This capacity does not apply to creating change sets, and specifying it when creating change sets has no effect.</p> <p>Also, change sets do not currently support nested stacks. If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p> </note> <p>For more information on macros, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a> in the AWS CloudFormation User Guide.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {GET_CreateChangeSetRollbackConfiguration} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {Array<string>} NotificationARNs The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
		 * @param {string} ChangeSetName <p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters.</p>
		 * @param {string} ClientToken A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @param {string} Description A description to help you identify this change set.
		 * @param {ChangeSetType} ChangeSetType <p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>. To create a change set for an import operation, specify <code>IMPORT</code>.</p> <p>If you create a change set for a new stack, AWS Cloudformation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995"> <code>REVIEW_IN_PROGRESS</code> </a> state until you execute the change set.</p> <p>By default, AWS CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>
		 * @param {Array<ResourceToImport>} ResourcesToImport The resources to import into your stack.
		 * @return {void} Success
		 */
		GET_CreateChangeSet(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, RollbackConfiguration: GET_CreateChangeSetRollbackConfiguration | null | undefined, NotificationARNs: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, ChangeSetName: string, ClientToken: string | null | undefined, Description: string | null | undefined, ChangeSetType: ChangeSetType | null | undefined, ResourcesToImport: Array<ResourceToImport> | null | undefined, Action: GET_CreateChangeSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateChangeSet?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + RollbackConfiguration + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&ClientToken=' + (ClientToken == null ? '' : encodeURIComponent(ClientToken)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&ChangeSetType=' + ChangeSetType + '&' + ResourcesToImport?.map(z => `ResourcesToImport=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.
		 * Get #Action=CreateStack
		 * @param {string} StackName <p>The name that is associated with the stack. The name must be unique in the Region in which you are creating the stack.</p> <note> <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.</p> </note>
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {boolean} DisableRollback <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p> <p>Default: <code>false</code> </p>
		 * @param {GET_CreateStackRollbackConfiguration} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {number} TimeoutInMinutes The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.
		 * @param {Array<string>} NotificationARNs The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI).
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <p>Change sets do not currently support nested stacks. If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create the stack directly from the template using this capability.</p> <important> <p>You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.</p> </important> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with for this create stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template resource types: <code>AWS::*</code> (for all AWS resource), <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i> </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources of a particular AWS service), and <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i> </code> (for a specific AWS resource).</p> <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {OnFailure} OnFailure <p>Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p> <p>Default: <code>ROLLBACK</code> </p>
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the <i>AWS CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create a stack with the same name. You might retry <code>CreateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @param {boolean} EnableTerminationProtection <p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>. Termination protection is disabled on stacks by default. </p> <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>
		 * @return {void} Success
		 */
		GET_CreateStack(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, DisableRollback: boolean | null | undefined, RollbackConfiguration: GET_CreateStackRollbackConfiguration | null | undefined, TimeoutInMinutes: number | null | undefined, NotificationARNs: Array<string> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, OnFailure: OnFailure | null | undefined, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, Tags: Array<Tag> | null | undefined, ClientRequestToken: string | null | undefined, EnableTerminationProtection: boolean | null | undefined, Action: GET_CreateStackAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&DisableRollback=' + DisableRollback + '&RollbackConfiguration=' + RollbackConfiguration + '&TimeoutInMinutes=' + TimeoutInMinutes + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&OnFailure=' + OnFailure + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&EnableTerminationProtection=' + EnableTerminationProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.
		 * Get #Action=CreateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to create stack instances from.
		 * @param {Array<string>} Accounts <p>[<code>Self-managed</code> permissions] The names of one or more AWS accounts that you want to create stack instances in the specified Region(s) for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_CreateStackInstancesDeploymentTargets} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts for which to create stack instances in the specified Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The names of one or more Regions where you want to create stack instances using the specified AWS account(s). 
		 * @param {Array<Parameter>} ParameterOverrides <p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>
		 * @param {GET_CreateStackInstancesOperationPreferences} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @return {void} Success
		 */
		GET_CreateStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_CreateStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, ParameterOverrides: Array<Parameter> | null | undefined, OperationPreferences: GET_CreateStackInstancesOperationPreferences | null | undefined, OperationId: string | null | undefined, Action: GET_CreateStackInstancesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&' + ParameterOverrides?.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a stack set.
		 * Get #Action=CreateStackSet
		 * @param {string} StackSetName <p>The name to associate with the stack set. The name must be unique in the Region where you create your stack set.</p> <note> <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.</p> </note>
		 * @param {string} Description A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 * @param {Array<Parameter>} Parameters The input parameters for the stack set template. 
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates contain macros. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <note> <p>Stack sets do not currently support macros in stack templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability, if you include a macro in your template the stack set operation will fail.</p> </note> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.</p> <p>If you specify tags as part of a <code>CreateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not created.</p>
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. </p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p>
		 * @param {StackSetPermissionModel} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. By default, <code>SELF-MANAGED</code> is specified.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {GET_CreateStackSetAutoDeployment} AutoDeployment Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>.
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry <code>CreateStackSet</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
		 * @return {void} Success
		 */
		GET_CreateStackSet(StackSetName: string, Description: string | null | undefined, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, Tags: Array<Tag> | null | undefined, AdministrationRoleARN: string | null | undefined, ExecutionRoleName: string | null | undefined, PermissionModel: StackSetPermissionModel | null | undefined, AutoDeployment: GET_CreateStackSetAutoDeployment | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_CreateStackSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + AutoDeployment + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, AWS CloudFormation successfully deleted the change set.</p>
		 * Get #Action=DeleteChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to delete.
		 * @param {string} StackName If you specified the name of a change set to delete, specify the stack name or ID (ARN) that is associated with it.
		 * @return {void} Success
		 */
		GET_DeleteChangeSet(ChangeSetName: string, StackName: string | null | undefined, Action: GET_DeleteChangeSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the deletion has been completed successfully.
		 * Get #Action=DeleteStack
		 * @param {string} StackName The name or the unique stack ID that is associated with the stack.
		 * @param {Array<string>} RetainResources <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, AWS CloudFormation deletes the stack but does not delete the retained resources.</p> <p>Retaining resources is useful when you cannot delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry <code>DeleteStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @return {void} Success
		 */
		GET_DeleteStack(StackName: string, RetainResources: Array<string> | null | undefined, RoleARN: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_DeleteStackAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + RetainResources?.map(z => `RetainResources=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes stack instances for the specified accounts, in the specified Regions.
		 * Get #Action=DeleteStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to delete stack instances for.
		 * @param {Array<string>} Accounts <p>[<code>Self-managed</code> permissions] The names of the AWS accounts that you want to delete stack instances for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_DeleteStackInstancesDeploymentTargets} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts from which to delete stack instances.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The Regions where you want to delete stack set instances. 
		 * @param {GET_DeleteStackInstancesOperationPreferences} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {boolean} RetainStacks <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @return {void} Success
		 */
		GET_DeleteStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_DeleteStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, OperationPreferences: GET_DeleteStackInstancesOperationPreferences | null | undefined, RetainStacks: boolean, OperationId: string | null | undefined, Action: GET_DeleteStackInstancesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&RetainStacks=' + RetainStacks + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a stack set. Before you can delete a stack set, all of its member stack instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>.
		 * Get #Action=DeleteStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.
		 * @return {void} Success
		 */
		GET_DeleteStackSet(StackSetName: string, Action: GET_DeleteStackSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes a type or type version from active use in the CloudFormation registry. If a type or type version is deregistered, it cannot be used in CloudFormation operations.</p> <p>To deregister a type, you must individually deregister all registered versions of that type. If a type has only a single registered version, deregistering that version results in the type itself being deregistered. </p> <p>You cannot deregister the default version of a type, unless it is the only registered version of that type, in which case the type itself is deregistered as well. </p>
		 * Get #Action=DeregisterType
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.
		 * @return {void} Success
		 */
		GET_DeregisterType(Arn: string | null | undefined, Type: DescribeTypeOutputType | null | undefined, TypeName: string | null | undefined, VersionId: string | null | undefined, Action: GET_DeregisterTypeAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeregisterType?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.
		 * Get #Action=DescribeAccountLimits
		 * @param {string} NextToken A string that identifies the next page of limits that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(NextToken: string | null | undefined, Action: GET_DescribeAccountLimitsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User Guide.
		 * Get #Action=DescribeChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to describe.
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
		 * @param {string} NextToken A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeChangeSet(ChangeSetName: string, StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeChangeSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information on stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
		 * Get #Action=DescribeStackDriftDetectionStatus
		 * @param {string} StackDriftDetectionId <p>The ID of the drift detection results of this operation. </p> <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how long, may vary. </p>
		 * @return {void} Success
		 */
		GET_DescribeStackDriftDetectionStatus(StackDriftDetectionId: string, Action: GET_DescribeStackDriftDetectionStatusAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackDriftDetectionStatus?StackDriftDetectionId=' + (StackDriftDetectionId == null ? '' : encodeURIComponent(StackDriftDetectionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the AWS CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
		 * Get #Action=DescribeStackEvents
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of events that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeStackEvents(StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeStackEventsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackEvents?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the stack instance that's associated with the specified stack set, AWS account, and Region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
		 * Get #Action=DescribeStackInstance
		 * @param {string} StackSetName The name or the unique stack ID of the stack set that you want to get stack instance information for.
		 * @param {string} StackInstanceAccount The ID of an AWS account that's associated with this stack instance.
		 * @param {string} StackInstanceRegion The name of a Region that's associated with this stack instance.
		 * @return {void} Success
		 */
		GET_DescribeStackInstance(StackSetName: string, StackInstanceAccount: string, StackInstanceRegion: string, Action: GET_DescribeStackInstanceAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackInstance?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get #Action=DescribeStackResource
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResource(StackName: string, LogicalResourceId: string, Action: GET_DescribeStackResourceAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where AWS CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that have not yet been checked for drift are not included. Resources that do not currently support drift detection are not checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
		 * Get #Action=DescribeStackResourceDrifts
		 * @param {string} StackName The name of the stack for which you want drift information.
		 * @param {Array<StackResourceDriftStatus>} StackResourceDriftStatusFilters <p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resources's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p> </li> </ul>
		 * @param {string} NextToken A string that identifies the next page of stack resource drift results.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_DescribeStackResourceDrifts(StackName: string, StackResourceDriftStatusFilters: Array<StackResourceDriftStatus> | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_DescribeStackResourceDriftsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResourceDrifts?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + StackResourceDriftStatusFilters?.map(z => `StackResourceDriftStatusFilters=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns AWS resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
		 * Get #Action=DescribeStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you do not specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @param {string} PhysicalResourceId <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you do not specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResources(StackName: string | null | undefined, LogicalResourceId: string | null | undefined, PhysicalResourceId: string | null | undefined, Action: GET_DescribeStackResourcesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&PhysicalResourceId=' + (PhysicalResourceId == null ? '' : encodeURIComponent(PhysicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the description of the specified stack set.
		 * Get #Action=DescribeStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set whose description you want.
		 * @return {void} Success
		 */
		GET_DescribeStackSet(StackSetName: string, Action: GET_DescribeStackSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the description of the specified stack set operation.
		 * Get #Action=DescribeStackSetOperation
		 * @param {string} StackSetName The name or the unique stack ID of the stack set for the stack operation.
		 * @param {string} OperationId The unique ID of the stack set operation. 
		 * @return {void} Success
		 */
		GET_DescribeStackSetOperation(StackSetName: string, OperationId: string, Action: GET_DescribeStackSetOperationAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is returned.</p> </note>
		 * Get #Action=DescribeStacks
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 * @return {void} Success
		 */
		GET_DescribeStacks(StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeStacksAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStacks?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns detailed information about a type that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
		 * Get #Action=DescribeType
		 * @param {DescribeTypeOutputType} Type <p>The kind of type. </p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
		 * @return {void} Success
		 */
		GET_DescribeType(Type: DescribeTypeOutputType | null | undefined, TypeName: string | null | undefined, Arn: string | null | undefined, VersionId: string | null | undefined, Action: GET_DescribeTypeAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a type's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <code> <a>RegisterType</a> </code>, you can then use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <code> <a>DescribeType</a> </code> to return detailed informaiton about a type.</p>
		 * Get #Action=DescribeTypeRegistration
		 * @param {string} RegistrationToken <p>The identifier for this registration request.</p> <p>This registration token is generated by CloudFormation when you initiate a registration request using <code> <a>RegisterType</a> </code>.</p>
		 * @return {void} Success
		 */
		GET_DescribeTypeRegistration(RegistrationToken: string, Action: GET_DescribeTypeRegistrationAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTypeRegistration?RegistrationToken=' + (RegistrationToken == null ? '' : encodeURIComponent(RegistrationToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, AWS CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, AWS CloudFormation does not detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
		 * Get #Action=DetectStackDrift
		 * @param {string} StackName The name of the stack for which you want to detect drift. 
		 * @param {Array<string>} LogicalResourceIds The logical names of any resources you want to use as filters.
		 * @return {void} Success
		 */
		GET_DetectStackDrift(StackName: string, LogicalResourceIds: Array<string> | null | undefined, Action: GET_DetectStackDriftAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + LogicalResourceIds?.map(z => `LogicalResourceIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which AWS CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
		 * Get #Action=DetectStackResourceDrift
		 * @param {string} StackName The name of the stack to which the resource belongs.
		 * @param {string} LogicalResourceId The logical name of the resource for which to return drift information.
		 * @return {void} Success
		 */
		GET_DetectStackResourceDrift(StackName: string, LogicalResourceId: string, Action: GET_DetectStackResourceDriftAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackResourceDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation Performs Drift Detection on a Stack Set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <code> <a>DescribeStackSetOperation</a> </code> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, as well as the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <code> <a>DescribeStackSet</a> </code> to return detailed informaiton about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress is not included.)</p> </li> <li> <p>Use <code> <a>ListStackInstances</a> </code> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <code> <a>DescribeStackInstance</a> </code> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information on performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a>. </p> <p>You can only run a single drift detection operation on a given stack set at one time. </p> <p>To stop a drift detection stack set operation, use <code> <a>StopStackSetOperation</a> </code>.</p>
		 * Get #Action=DetectStackSetDrift
		 * @param {string} StackSetName The name of the stack set on which to perform the drift detection operation.
		 * @param {string} OperationId  <i>The ID of the stack set operation.</i> 
		 * @return {void} Success
		 */
		GET_DetectStackSetDrift(StackSetName: string, OperationPreferences: GET_DetectStackSetDriftOperationPreferences | null | undefined, OperationId: string | null | undefined, Action: GET_DetectStackSetDriftAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackSetDrift?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
		 * Get #Action=EstimateTemplateCost
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters.
		 * @return {void} Success
		 */
		GET_EstimateTemplateCost(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Action: GET_EstimateTemplateCostAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EstimateTemplateCost?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p>
		 * Get #Action=ExecuteChangeSet
		 * @param {string} ChangeSetName The name or ARN of the change set that you want use to update the specified stack.
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or ID (ARN) that is associated with the change set you want to execute.
		 * @param {string} ClientRequestToken A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.
		 * @return {void} Success
		 */
		GET_ExecuteChangeSet(ChangeSetName: string, StackName: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_ExecuteChangeSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExecuteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
		 * Get #Action=GetStackPolicy
		 * @param {string} StackName The name or unique stack ID that is associated with the stack whose policy you want to get.
		 * @return {void} Success
		 */
		GET_GetStackPolicy(StackName: string, Action: GET_GetStackPolicyAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.</p> <note> <p> If the template does not exist, a <code>ValidationError</code> is returned. </p> </note>
		 * Get #Action=GetTemplate
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of a change set for which AWS CloudFormation returns the associated template. If you specify a name, you must also specify the <code>StackName</code>.
		 * @param {TemplateStage} TemplateStage <p>For templates that include transforms, the stage of the template that AWS CloudFormation returns. To get the user-submitted template, specify <code>Original</code>. To get the template after AWS CloudFormation has processed all transforms, specify <code>Processed</code>. </p> <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same template. By default, AWS CloudFormation specifies <code>Original</code>. </p>
		 * @return {void} Success
		 */
		GET_GetTemplate(StackName: string | null | undefined, ChangeSetName: string | null | undefined, TemplateStage: TemplateStage | null | undefined, Action: GET_GetTemplateAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTemplate?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&TemplateStage=' + TemplateStage + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a <code>ValidationError</code> is returned.</p>
		 * Get #Action=GetTemplateSummary
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} StackName <p>The name or the stack ID that is associated with the stack, which are not always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {string} StackSetName <p>The name or unique ID of the stack set from which the stack was created.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @return {void} Success
		 */
		GET_GetTemplateSummary(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, StackName: string | null | undefined, StackSetName: string | null | undefined, Action: GET_GetTemplateSummaryAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTemplateSummary?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.
		 * Get #Action=ListChangeSets
		 * @param {string} StackName The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
		 * @param {string} NextToken A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.
		 * @return {void} Success
		 */
		GET_ListChangeSets(StackName: string, NextToken: string | null | undefined, Action: GET_ListChangeSetsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListChangeSets?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> AWS CloudFormation Export Stack Output Values</a>.</p>
		 * Get #Action=ListExports
		 * @param {string} NextToken A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.
		 * @return {void} Success
		 */
		GET_ListExports(NextToken: string | null | undefined, Action: GET_ListExportsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListExports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>. </p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p>
		 * Get #Action=ListImports
		 * @param {string} ExportName The name of the exported output value. AWS CloudFormation returns the stack names that are importing this value. 
		 * @param {string} NextToken A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value. 
		 * @return {void} Success
		 */
		GET_ListImports(ExportName: string, NextToken: string | null | undefined, Action: GET_ListImportsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListImports?ExportName=' + (ExportName == null ? '' : encodeURIComponent(ExportName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific AWS account name or Region.
		 * Get #Action=ListStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to list stack instances for.
		 * @param {string} NextToken If the previous request didn't return all of the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} StackInstanceAccount The name of the AWS account that you want to list stack instances for.
		 * @param {string} StackInstanceRegion The name of the Region where you want to list stack instances. 
		 * @return {void} Success
		 */
		GET_ListStackInstances(StackSetName: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, StackInstanceAccount: string | null | undefined, StackInstanceRegion: string | null | undefined, Action: GET_ListStackInstancesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get #Action=ListStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which are not always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stack resources that you want to retrieve.
		 * @return {void} Success
		 */
		GET_ListStackResources(StackName: string, NextToken: string | null | undefined, Action: GET_ListStackResourcesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about the results of a stack set operation.
		 * Get #Action=ListStackSetOperationResults
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation results for.
		 * @param {string} OperationId The ID of the stack set operation.
		 * @param {string} NextToken If the previous request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_ListStackSetOperationResults(StackSetName: string, OperationId: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListStackSetOperationResultsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSetOperationResults?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about operations performed on a stack set.
		 * Get #Action=ListStackSetOperations
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation summaries for.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @return {void} Success
		 */
		GET_ListStackSetOperations(StackSetName: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListStackSetOperationsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSetOperations?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about stack sets that are associated with the user.
		 * Get #Action=ListStackSets
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {StackSetStatus} Status The status of the stack sets that you want to get summary information about.
		 * @return {void} Success
		 */
		GET_ListStackSets(NextToken: string | null | undefined, MaxResults: number | null | undefined, Status: StackSetStatus | null | undefined, Action: GET_ListStackSetsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
		 * Get #Action=ListStacks
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 * @param {Array<StackStatus>} StackStatusFilter Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.
		 * @return {void} Success
		 */
		GET_ListStacks(NextToken: string | null | undefined, StackStatusFilter: Array<StackStatus> | null | undefined, Action: GET_ListStacksAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStacks?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&' + StackStatusFilter?.map(z => `StackStatusFilter=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of registration tokens for the specified type(s).
		 * Get #Action=ListTypeRegistrations
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeArn <p>The Amazon Resource Name (ARN) of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeRegistrationOutputProgressStatus} RegistrationStatusFilter <p>The current status of the type registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @return {void} Success
		 */
		GET_ListTypeRegistrations(Type: DescribeTypeOutputType | null | undefined, TypeName: string | null | undefined, TypeArn: string | null | undefined, RegistrationStatusFilter: DescribeTypeRegistrationOutputProgressStatus | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListTypeRegistrationsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypeRegistrations?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&TypeArn=' + (TypeArn == null ? '' : encodeURIComponent(TypeArn)) + '&RegistrationStatusFilter=' + RegistrationStatusFilter + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about the versions of a type.
		 * Get #Action=ListTypeVersions
		 * @param {DescribeTypeOutputType} Type <p>The kind of the type.</p> <p>Currently the only valid value is <code>RESOURCE</code>.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @param {DescribeTypeOutputDeprecatedStatus} DeprecatedStatus <p>The deprecation status of the type versions that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The type version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p> </li> <li> <p> <code>DEPRECATED</code>: The type version has been deregistered and can no longer be used in CloudFormation operations. </p> </li> </ul> <p>The default is <code>LIVE</code>.</p>
		 * @return {void} Success
		 */
		GET_ListTypeVersions(Type: DescribeTypeOutputType | null | undefined, TypeName: string | null | undefined, Arn: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, DeprecatedStatus: DescribeTypeOutputDeprecatedStatus | null | undefined, Action: GET_ListTypeVersionsAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypeVersions?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&DeprecatedStatus=' + DeprecatedStatus + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about types that have been registered with CloudFormation.
		 * Get #Action=ListTypes
		 * @param {DescribeTypeOutputVisibility} Visibility <p>The scope at which the type is visible and usable in CloudFormation operations.</p> <p>Valid values include:</p> <ul> <li> <p> <code>PRIVATE</code>: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you create as <code>PRIVATE</code>.</p> </li> <li> <p> <code>PUBLIC</code>: The type is publically visible and usable within any Amazon account.</p> </li> </ul> <p>The default is <code>PRIVATE</code>.</p>
		 * @param {DescribeTypeOutputProvisioningType} ProvisioningType <p>The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p> <p>Valid values include:</p> <ul> <li> <p> <code>FULLY_MUTABLE</code>: The type includes an update handler to process updates to the type during stack update operations.</p> </li> <li> <p> <code>IMMUTABLE</code>: The type does not include an update handler, so the type cannot be updated and must instead be replaced during stack update operations.</p> </li> <li> <p> <code>NON_PROVISIONABLE</code>: The type does not include create, read, and delete handlers, and therefore cannot actually be provisioned.</p> </li> </ul>
		 * @param {DescribeTypeOutputDeprecatedStatus} DeprecatedStatus <p>The deprecation status of the types that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The type is registered for use in CloudFormation operations.</p> </li> <li> <p> <code>DEPRECATED</code>: The type has been deregistered and can no longer be used in CloudFormation operations. </p> </li> </ul>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 * @return {void} Success
		 */
		GET_ListTypes(Visibility: DescribeTypeOutputVisibility | null | undefined, ProvisioningType: DescribeTypeOutputProvisioningType | null | undefined, DeprecatedStatus: DescribeTypeOutputDeprecatedStatus | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListTypesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypes?Visibility=' + Visibility + '&ProvisioningType=' + ProvisioningType + '&DeprecatedStatus=' + DeprecatedStatus + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Do not use this API in your code.</p>
		 * Get #Action=RecordHandlerProgress
		 * @param {string} BearerToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {OperationStatus} OperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {OperationStatus} CurrentOperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} StatusMessage Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {HandlerErrorCode} ErrorCode Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} ResourceModel Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} ClientRequestToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @return {void} Success
		 */
		GET_RecordHandlerProgress(BearerToken: string, OperationStatus: OperationStatus, CurrentOperationStatus: OperationStatus | null | undefined, StatusMessage: string | null | undefined, ErrorCode: HandlerErrorCode | null | undefined, ResourceModel: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_RecordHandlerProgressAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RecordHandlerProgress?BearerToken=' + (BearerToken == null ? '' : encodeURIComponent(BearerToken)) + '&OperationStatus=' + OperationStatus + '&CurrentOperationStatus=' + CurrentOperationStatus + '&StatusMessage=' + (StatusMessage == null ? '' : encodeURIComponent(StatusMessage)) + '&ErrorCode=' + ErrorCode + '&ResourceModel=' + (ResourceModel == null ? '' : encodeURIComponent(ResourceModel)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers a type with the CloudFormation service. Registering a type makes it available for use in CloudFormation templates in your AWS account, and includes:</p> <ul> <li> <p>Validating the resource schema</p> </li> <li> <p>Determining which handlers have been specified for the resource</p> </li> <li> <p>Making the resource type available for use in your account</p> </li> </ul> <p>For more information on how to develop types and ready them for registeration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource type versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific resource type versions if necessary.</p> <p>Once you have initiated a registration request using <code> <a>RegisterType</a> </code>, you can use <code> <a>DescribeTypeRegistration</a> </code> to monitor the progress of the registration request.</p>
		 * Get #Action=RegisterType
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Currently, the only valid value is <code>RESOURCE</code>.</p>
		 * @param {string} TypeName <p>The name of the type being registered.</p> <p>We recommend that type names adhere to the following pattern: <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p> <note> <p>The following organization namespaces are reserved and cannot be used in your resource type names:</p> <ul> <li> <p> <code>Alexa</code> </p> </li> <li> <p> <code>AMZN</code> </p> </li> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>AWS</code> </p> </li> <li> <p> <code>Custom</code> </p> </li> <li> <p> <code>Dev</code> </p> </li> </ul> </note>
		 * @param {string} SchemaHandlerPackage <p>A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.</p> <p>For information on generating a schema handler package for the type you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the <i>CloudFormation CLI User Guide</i>.</p> <note> <p>As part of registering a resource provider type, CloudFormation must be able to access the S3 bucket which contains the schema handler package for that resource provider. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-register-permissions">IAM Permissions for Registering a Resource Provider</a> in the <i>AWS CloudFormation User Guide</i>.</p> </note>
		 * @param {GET_RegisterTypeLoggingConfig} LoggingConfig Specifies logging configuration information for a type.
		 * @param {string} ExecutionRoleArn The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an <i> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a> </i> that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
		 * @param {string} ClientRequestToken A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of a type from the same registeration request, even if the request is submitted multiple times. 
		 * @return {void} Success
		 */
		GET_RegisterType(Type: DescribeTypeOutputType | null | undefined, TypeName: string, SchemaHandlerPackage: string, LoggingConfig: GET_RegisterTypeLoggingConfig | null | undefined, ExecutionRoleArn: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_RegisterTypeAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RegisterType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&SchemaHandlerPackage=' + (SchemaHandlerPackage == null ? '' : encodeURIComponent(SchemaHandlerPackage)) + '&LoggingConfig=' + LoggingConfig + '&ExecutionRoleArn=' + (ExecutionRoleArn == null ? '' : encodeURIComponent(ExecutionRoleArn)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets a stack policy for a specified stack.
		 * Get #Action=SetStackPolicy
		 * @param {string} StackName The name or unique stack ID that you want to associate a policy with.
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the AWS CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 * @return {void} Success
		 */
		GET_SetStackPolicy(StackName: string, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, Action: GET_SetStackPolicyAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Specify the default version of a type. The default version of a type will be used in CloudFormation operations.
		 * Get #Action=SetTypeDefaultVersion
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {DescribeTypeOutputType} Type <p>The kind of type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the type.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} VersionId The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.
		 * @return {void} Success
		 */
		GET_SetTypeDefaultVersion(Arn: string | null | undefined, Type: DescribeTypeOutputType | null | undefined, TypeName: string | null | undefined, VersionId: string | null | undefined, Action: GET_SetTypeDefaultVersionAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetTypeDefaultVersion?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
		 * Get #Action=SignalResource
		 * @param {string} StackName The stack name or unique stack ID that includes the resource that you want to signal.
		 * @param {string} LogicalResourceId The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
		 * @param {string} UniqueId A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
		 * @param {ResourceSignalStatus} Status The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update.
		 * @return {void} Success
		 */
		GET_SignalResource(StackName: string, LogicalResourceId: string, UniqueId: string, Status: ResourceSignalStatus, Action: GET_SignalResourceAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SignalResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&UniqueId=' + (UniqueId == null ? '' : encodeURIComponent(UniqueId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an in-progress operation on a stack set and its associated stack instances.
		 * Get #Action=StopStackSetOperation
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to stop the operation for.
		 * @param {string} OperationId The ID of the stack operation. 
		 * @return {void} Success
		 */
		GET_StopStackSetOperation(StackSetName: string, OperationId: string, Action: GET_StopStackSetOperationAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StopStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
		 * Get #Action=UpdateStack
		 * @param {string} StackName The name or unique stack ID of the stack to update.
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {boolean} UsePreviousTemplate <p>Reuse the existing template that is associated with the stack that you are updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {string} StackPolicyDuringUpdateBody <p>Structure containing the temporary overriding stack policy body. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 * @param {string} StackPolicyDuringUpdateURL <p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <p>Change sets do not currently support nested stacks. If you want to update a stack from a stack template that contains macros <i>and</i> nested stacks, you must update the stack directly from the template using this capability.</p> <important> <p>You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without AWS CloudFormation being notified.</p> </important> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with for this update stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 * @param {GET_UpdateStackRollbackConfiguration} RollbackConfiguration The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {string} StackPolicyBody <p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 * @param {string} StackPolicyURL <p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 * @param {Array<string>} NotificationARNs Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack. Specify an empty list to remove all notification topics.
		 * @param {Array<Tag>} Tags <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.</p> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. If you specify an empty value, AWS CloudFormation removes all associated tags.</p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to update a stack with the same name. You might retry <code>UpdateStack</code> requests to ensure that AWS CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
		 * @return {void} Success
		 */
		GET_UpdateStack(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, StackPolicyDuringUpdateBody: string | null | undefined, StackPolicyDuringUpdateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, RollbackConfiguration: GET_UpdateStackRollbackConfiguration | null | undefined, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, NotificationARNs: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_UpdateStackAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&StackPolicyDuringUpdateBody=' + (StackPolicyDuringUpdateBody == null ? '' : encodeURIComponent(StackPolicyDuringUpdateBody)) + '&StackPolicyDuringUpdateURL=' + (StackPolicyDuringUpdateURL == null ? '' : encodeURIComponent(StackPolicyDuringUpdateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + RollbackConfiguration + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the parameter values for stack instances for the specified accounts, within the specified Regions. A stack instance refers to a stack in a specific account and Region. </p> <p>You can only update stack instances in Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p> <p>During stack set updates, any parameters overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * Get #Action=UpdateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set associated with the stack instances.
		 * @param {Array<string>} Accounts <p>[<code>Self-managed</code> permissions] The names of one or more AWS accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_UpdateStackInstancesDeploymentTargets} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The names of one or more Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Regions.
		 * @param {Array<Parameter>} ParameterOverrides <p> A list of input parameters whose values you want to update for the specified stack instances. </p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance update operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * @param {GET_UpdateStackInstancesOperationPreferences} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
		 * @return {void} Success
		 */
		GET_UpdateStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_UpdateStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, ParameterOverrides: Array<Parameter> | null | undefined, OperationPreferences: GET_UpdateStackInstancesOperationPreferences | null | undefined, OperationId: string | null | undefined, Action: GET_UpdateStackInstancesAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&' + ParameterOverrides?.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the stack set, and associated stack instances in the specified accounts and Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>
		 * Get #Action=UpdateStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to update.
		 * @param {string} Description A brief description of updates that you are making.
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>
		 * @param {boolean} UsePreviousTemplate <p>Use the existing template that's associated with the stack set that you're updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true. </p>
		 * @param {Array<Parameter>} Parameters A list of input parameters for the stack set template. 
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to update the stack set and its associated stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates contain macros. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets do not currently support macros in stack templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this capability, if you include a macro in your template the stack set operation will fail.</p> </important> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p> <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:</p> <ul> <li> <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. </p> </li> <li> <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i> the tags that you want associated with this stack set, even tags you've specifed before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well. </p> </li> <li> <p>If you specify an empty value, AWS CloudFormation removes all currently associated tags.</p> </li> </ul> <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, AWS CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, AWS CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not updated.</p>
		 * @param {GET_UpdateStackSetOperationPreferences} OperationPreferences Preferences for how AWS CloudFormation performs this stack set operation.
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Number (ARN) of the IAM role to use to update this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Granting Permissions for Stack Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p>If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously.</p>
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets. </p> <p> If you specify a customized execution role, AWS CloudFormation uses that role to update the stack. If you do not specify a customized execution role, AWS CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>
		 * @param {GET_UpdateStackSetDeploymentTargets} DeploymentTargets <p>[<code>Service-managed</code> permissions] The AWS Organizations accounts in which to update associated stack instances.</p> <p>To update all the stack instances associated with this stack set, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p> <p>If the stack set update includes changes to the template (that is, if <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the <code>Parameters</code>, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>
		 * @param {StackSetPermissionModel} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. You cannot modify <code>PermissionModel</code> if there are stack instances associated with your stack set.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {GET_UpdateStackSetAutoDeployment} AutoDeployment <p>[<code>Service-managed</code> permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).</p> <p>If you specify <code>AutoDeployment</code>, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p>
		 * @param {string} OperationId <p>The unique ID for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, AWS CloudFormation generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
		 * @param {Array<string>} Accounts <p>[<code>Self-managed</code> permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Regions in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status. </p>
		 * @param {Array<string>} Regions <p>The Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, AWS CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status. </p>
		 * @return {void} Success
		 */
		GET_UpdateStackSet(StackSetName: string, Description: string | null | undefined, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, Tags: Array<Tag> | null | undefined, OperationPreferences: GET_UpdateStackSetOperationPreferences | null | undefined, AdministrationRoleARN: string | null | undefined, ExecutionRoleName: string | null | undefined, DeploymentTargets: GET_UpdateStackSetDeploymentTargets | null | undefined, PermissionModel: StackSetPermissionModel | null | undefined, AutoDeployment: GET_UpdateStackSetAutoDeployment | null | undefined, OperationId: string | null | undefined, Accounts: Array<string> | null | undefined, Regions: Array<string> | null | undefined, Action: GET_UpdateStackSetAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&DeploymentTargets=' + DeploymentTargets + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + AutoDeployment + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&' + Regions?.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p> For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>
		 * Get #Action=UpdateTerminationProtection
		 * @param {boolean} EnableTerminationProtection Whether to enable termination protection on the specified stack.
		 * @param {string} StackName The name or unique ID of the stack for which you want to set termination protection.
		 * @return {void} Success
		 */
		GET_UpdateTerminationProtection(EnableTerminationProtection: boolean, StackName: string, Action: GET_UpdateTerminationProtectionAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateTerminationProtection?EnableTerminationProtection=' + EnableTerminationProtection + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.
		 * Get #Action=ValidateTemplate
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 * @return {void} Success
		 */
		GET_ValidateTemplate(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Action: GET_ValidateTemplateAction, Version: GET_CancelUpdateStackVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ValidateTemplate?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_CancelUpdateStackAction { CancelUpdateStack = 0 }

	export enum GET_CancelUpdateStackVersion { '2010-05-15' = 0 }

	export enum GET_ContinueUpdateRollbackAction { ContinueUpdateRollback = 0 }

	export interface GET_CreateChangeSetRollbackConfiguration {

		/** Maximum items: 5 */
		RollbackTriggers?: Array<RollbackTrigger>;

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_CreateChangeSetRollbackConfigurationFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateChangeSetRollbackConfigurationFormGroup() {
		return new FormGroup<GET_CreateChangeSetRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(180)]),
		});

	}

	export enum GET_CreateChangeSetAction { CreateChangeSet = 0 }

	export interface GET_CreateStackRollbackConfiguration {

		/** Maximum items: 5 */
		RollbackTriggers?: Array<RollbackTrigger>;

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_CreateStackRollbackConfigurationFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateStackRollbackConfigurationFormGroup() {
		return new FormGroup<GET_CreateStackRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(180)]),
		});

	}

	export enum GET_CreateStackAction { CreateStack = 0 }

	export interface GET_CreateStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface GET_CreateStackInstancesDeploymentTargetsFormProperties {
	}
	export function CreateGET_CreateStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_CreateStackInstancesDeploymentTargetsFormProperties>({
		});

	}

	export interface GET_CreateStackInstancesOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_CreateStackInstancesOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_CreateStackInstancesOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum GET_CreateStackInstancesAction { CreateStackInstances = 0 }

	export interface GET_CreateStackSetAutoDeployment {
		Enabled?: boolean | null;
		RetainStacksOnAccountRemoval?: boolean | null;
	}
	export interface GET_CreateStackSetAutoDeploymentFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		RetainStacksOnAccountRemoval: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_CreateStackSetAutoDeploymentFormGroup() {
		return new FormGroup<GET_CreateStackSetAutoDeploymentFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			RetainStacksOnAccountRemoval: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_CreateStackSetAction { CreateStackSet = 0 }

	export enum GET_DeleteChangeSetAction { DeleteChangeSet = 0 }

	export enum GET_DeleteStackAction { DeleteStack = 0 }

	export interface GET_DeleteStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface GET_DeleteStackInstancesDeploymentTargetsFormProperties {
	}
	export function CreateGET_DeleteStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_DeleteStackInstancesDeploymentTargetsFormProperties>({
		});

	}

	export interface GET_DeleteStackInstancesOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_DeleteStackInstancesOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_DeleteStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_DeleteStackInstancesOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum GET_DeleteStackInstancesAction { DeleteStackInstances = 0 }

	export enum GET_DeleteStackSetAction { DeleteStackSet = 0 }

	export enum GET_DeregisterTypeAction { DeregisterType = 0 }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 0 }

	export enum GET_DescribeChangeSetAction { DescribeChangeSet = 0 }

	export enum GET_DescribeStackDriftDetectionStatusAction { DescribeStackDriftDetectionStatus = 0 }

	export enum GET_DescribeStackEventsAction { DescribeStackEvents = 0 }

	export enum GET_DescribeStackInstanceAction { DescribeStackInstance = 0 }

	export enum GET_DescribeStackResourceAction { DescribeStackResource = 0 }

	export enum GET_DescribeStackResourceDriftsAction { DescribeStackResourceDrifts = 0 }

	export enum GET_DescribeStackResourcesAction { DescribeStackResources = 0 }

	export enum GET_DescribeStackSetAction { DescribeStackSet = 0 }

	export enum GET_DescribeStackSetOperationAction { DescribeStackSetOperation = 0 }

	export enum GET_DescribeStacksAction { DescribeStacks = 0 }

	export enum GET_DescribeTypeAction { DescribeType = 0 }

	export enum GET_DescribeTypeRegistrationAction { DescribeTypeRegistration = 0 }

	export enum GET_DetectStackDriftAction { DetectStackDrift = 0 }

	export enum GET_DetectStackResourceDriftAction { DetectStackResourceDrift = 0 }

	export interface GET_DetectStackSetDriftOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_DetectStackSetDriftOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_DetectStackSetDriftOperationPreferencesFormGroup() {
		return new FormGroup<GET_DetectStackSetDriftOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum GET_DetectStackSetDriftAction { DetectStackSetDrift = 0 }

	export enum GET_EstimateTemplateCostAction { EstimateTemplateCost = 0 }

	export enum GET_ExecuteChangeSetAction { ExecuteChangeSet = 0 }

	export enum GET_GetStackPolicyAction { GetStackPolicy = 0 }

	export enum GET_GetTemplateAction { GetTemplate = 0 }

	export enum GET_GetTemplateSummaryAction { GetTemplateSummary = 0 }

	export enum GET_ListChangeSetsAction { ListChangeSets = 0 }

	export enum GET_ListExportsAction { ListExports = 0 }

	export enum GET_ListImportsAction { ListImports = 0 }

	export enum GET_ListStackInstancesAction { ListStackInstances = 0 }

	export enum GET_ListStackResourcesAction { ListStackResources = 0 }

	export enum GET_ListStackSetOperationResultsAction { ListStackSetOperationResults = 0 }

	export enum GET_ListStackSetOperationsAction { ListStackSetOperations = 0 }

	export enum GET_ListStackSetsAction { ListStackSets = 0 }

	export enum GET_ListStacksAction { ListStacks = 0 }

	export enum GET_ListTypeRegistrationsAction { ListTypeRegistrations = 0 }

	export enum GET_ListTypeVersionsAction { ListTypeVersions = 0 }

	export enum GET_ListTypesAction { ListTypes = 0 }

	export enum GET_RecordHandlerProgressAction { RecordHandlerProgress = 0 }

	export interface GET_RegisterTypeLoggingConfig {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		LogRoleArn: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: string;
	}
	export interface GET_RegisterTypeLoggingConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		LogRoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGET_RegisterTypeLoggingConfigFormGroup() {
		return new FormGroup<GET_RegisterTypeLoggingConfigFormProperties>({
			LogRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('arn:.+:iam::[0-9]{12}:role/.+')]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
		});

	}

	export enum GET_RegisterTypeAction { RegisterType = 0 }

	export enum GET_SetStackPolicyAction { SetStackPolicy = 0 }

	export enum GET_SetTypeDefaultVersionAction { SetTypeDefaultVersion = 0 }

	export enum GET_SignalResourceAction { SignalResource = 0 }

	export enum GET_StopStackSetOperationAction { StopStackSetOperation = 0 }

	export interface GET_UpdateStackRollbackConfiguration {

		/** Maximum items: 5 */
		RollbackTriggers?: Array<RollbackTrigger>;

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_UpdateStackRollbackConfigurationFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 180
		 */
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackRollbackConfigurationFormGroup() {
		return new FormGroup<GET_UpdateStackRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(180)]),
		});

	}

	export enum GET_UpdateStackAction { UpdateStack = 0 }

	export interface GET_UpdateStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface GET_UpdateStackInstancesDeploymentTargetsFormProperties {
	}
	export function CreateGET_UpdateStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_UpdateStackInstancesDeploymentTargetsFormProperties>({
		});

	}

	export interface GET_UpdateStackInstancesOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_UpdateStackInstancesOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_UpdateStackInstancesOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum GET_UpdateStackInstancesAction { UpdateStackInstances = 0 }

	export interface GET_UpdateStackSetOperationPreferences {
		RegionOrder?: Array<string>;

		/** Minimum: 0 */
		FailureToleranceCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage?: number | null;

		/** Minimum: 1 */
		MaxConcurrentCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_UpdateStackSetOperationPreferencesFormProperties {

		/** Minimum: 0 */
		FailureToleranceCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FailureTolerancePercentage: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxConcurrentCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackSetOperationPreferencesFormGroup() {
		return new FormGroup<GET_UpdateStackSetOperationPreferencesFormProperties>({
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface GET_UpdateStackSetDeploymentTargets {
		Accounts?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface GET_UpdateStackSetDeploymentTargetsFormProperties {
	}
	export function CreateGET_UpdateStackSetDeploymentTargetsFormGroup() {
		return new FormGroup<GET_UpdateStackSetDeploymentTargetsFormProperties>({
		});

	}

	export interface GET_UpdateStackSetAutoDeployment {
		Enabled?: boolean | null;
		RetainStacksOnAccountRemoval?: boolean | null;
	}
	export interface GET_UpdateStackSetAutoDeploymentFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		RetainStacksOnAccountRemoval: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_UpdateStackSetAutoDeploymentFormGroup() {
		return new FormGroup<GET_UpdateStackSetAutoDeploymentFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			RetainStacksOnAccountRemoval: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateStackSetAction { UpdateStackSet = 0 }

	export enum GET_UpdateTerminationProtectionAction { UpdateTerminationProtection = 0 }

	export enum GET_ValidateTemplateAction { ValidateTemplate = 0 }

}

