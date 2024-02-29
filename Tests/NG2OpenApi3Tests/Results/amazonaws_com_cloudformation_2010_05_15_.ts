import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivateOrganizationsAccessOutput {
	}
	export interface ActivateOrganizationsAccessOutputFormProperties {
	}
	export function CreateActivateOrganizationsAccessOutputFormGroup() {
		return new FormGroup<ActivateOrganizationsAccessOutputFormProperties>({
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

	export interface OperationNotFoundException {
	}
	export interface OperationNotFoundExceptionFormProperties {
	}
	export function CreateOperationNotFoundExceptionFormGroup() {
		return new FormGroup<OperationNotFoundExceptionFormProperties>({
		});

	}

	export interface ActivateTypeOutput {
		Arn?: string;
	}
	export interface ActivateTypeOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateActivateTypeOutputFormGroup() {
		return new FormGroup<ActivateTypeOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
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

	export interface BatchDescribeTypeConfigurationsOutput {
		Errors?: Array<BatchDescribeTypeConfigurationsError>;
		UnprocessedTypeConfigurations?: Array<TypeConfigurationIdentifier>;
		TypeConfigurations?: Array<TypeConfigurationDetails>;
	}
	export interface BatchDescribeTypeConfigurationsOutputFormProperties {
	}
	export function CreateBatchDescribeTypeConfigurationsOutputFormGroup() {
		return new FormGroup<BatchDescribeTypeConfigurationsOutputFormProperties>({
		});

	}


	/** Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension. */
	export interface BatchDescribeTypeConfigurationsError {
		ErrorCode?: string;
		ErrorMessage?: string;
		TypeConfigurationIdentifier?: TypeConfigurationIdentifier;
	}

	/** Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension. */
	export interface BatchDescribeTypeConfigurationsErrorFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDescribeTypeConfigurationsErrorFormGroup() {
		return new FormGroup<BatchDescribeTypeConfigurationsErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifying information for the configuration of a CloudFormation extension. */
	export interface TypeConfigurationIdentifier {
		TypeArn?: string;
		TypeConfigurationAlias?: string;
		TypeConfigurationArn?: string;
		Type?: ThirdPartyType;
		TypeName?: string;
	}

	/** Identifying information for the configuration of a CloudFormation extension. */
	export interface TypeConfigurationIdentifierFormProperties {
		TypeArn: FormControl<string | null | undefined>,
		TypeConfigurationAlias: FormControl<string | null | undefined>,
		TypeConfigurationArn: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateTypeConfigurationIdentifierFormGroup() {
		return new FormGroup<TypeConfigurationIdentifierFormProperties>({
			TypeArn: new FormControl<string | null | undefined>(undefined),
			TypeConfigurationAlias: new FormControl<string | null | undefined>(undefined),
			TypeConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyType { RESOURCE = 'RESOURCE', MODULE = 'MODULE', HOOK = 'HOOK' }


	/** <p>Detailed information concerning the specification of a CloudFormation extension in a given account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface TypeConfigurationDetails {
		Arn?: string;
		Alias?: string;
		Configuration?: string;
		LastUpdated?: Date;
		TypeArn?: string;
		TypeName?: string;
		IsDefaultConfiguration?: boolean | null;
	}

	/** <p>Detailed information concerning the specification of a CloudFormation extension in a given account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface TypeConfigurationDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		TypeArn: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IsDefaultConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateTypeConfigurationDetailsFormGroup() {
		return new FormGroup<TypeConfigurationDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			TypeArn: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IsDefaultConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TypeConfigurationNotFoundException {
	}
	export interface TypeConfigurationNotFoundExceptionFormProperties {
	}
	export function CreateTypeConfigurationNotFoundExceptionFormGroup() {
		return new FormGroup<TypeConfigurationNotFoundExceptionFormProperties>({
		});

	}

	export interface TokenAlreadyExistsException {
	}
	export interface TokenAlreadyExistsExceptionFormProperties {
	}
	export function CreateTokenAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TokenAlreadyExistsExceptionFormProperties>({
		});

	}


	/** The output for a <a>ContinueUpdateRollback</a> operation. */
	export interface ContinueUpdateRollbackOutput {
	}

	/** The output for a <a>ContinueUpdateRollback</a> operation. */
	export interface ContinueUpdateRollbackOutputFormProperties {
	}
	export function CreateContinueUpdateRollbackOutputFormGroup() {
		return new FormGroup<ContinueUpdateRollbackOutputFormProperties>({
		});

	}


	/** The output for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetOutput {
		Id?: string;
		StackId?: string;
	}

	/** The output for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetOutputFormProperties {
		Id: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChangeSetOutputFormGroup() {
		return new FormGroup<CreateChangeSetOutputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Parameter data type. */
	export interface Parameter {
		ParameterKey?: string;
		ParameterValue?: string;
		UsePreviousValue?: boolean | null;
		ResolvedValue?: string;
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

	export enum Capability { CAPABILITY_IAM = 'CAPABILITY_IAM', CAPABILITY_NAMED_IAM = 'CAPABILITY_NAMED_IAM', CAPABILITY_AUTO_EXPAND = 'CAPABILITY_AUTO_EXPAND' }


	/** A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. */
	export interface RollbackTrigger {

		/** Required */
		Arn: string;

		/** Required */
		Type: string;
	}

	/** A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. */
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


	/** The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack. */
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


	/** Describes the target resource of an import operation. */
	export interface ResourceToImport {

		/** Required */
		ResourceType: string;

		/** Required */
		LogicalResourceId: string;

		/** Required */
		ResourceIdentifier: ResourceIdentifierProperties;
	}

	/** Describes the target resource of an import operation. */
	export interface ResourceToImportFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceToImportFormGroup() {
		return new FormGroup<ResourceToImportFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		StackId?: string;
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
		OperationId?: string;
	}
	export interface CreateStackInstancesOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackInstancesOutputFormGroup() {
		return new FormGroup<CreateStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountFilterType { NONE = 'NONE', INTERSECTION = 'INTERSECTION', DIFFERENCE = 'DIFFERENCE', UNION = 'UNION' }

	export enum RegionConcurrencyType { SEQUENTIAL = 'SEQUENTIAL', PARALLEL = 'PARALLEL' }

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

	export interface CreateStackSetOutput {
		StackSetId?: string;
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

	export interface DeactivateOrganizationsAccessOutput {
	}
	export interface DeactivateOrganizationsAccessOutputFormProperties {
	}
	export function CreateDeactivateOrganizationsAccessOutputFormGroup() {
		return new FormGroup<DeactivateOrganizationsAccessOutputFormProperties>({
		});

	}

	export interface DeactivateTypeOutput {
	}
	export interface DeactivateTypeOutputFormProperties {
	}
	export function CreateDeactivateTypeOutputFormGroup() {
		return new FormGroup<DeactivateTypeOutputFormProperties>({
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
		OperationId?: string;
	}
	export interface DeleteStackInstancesOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackInstancesOutputFormGroup() {
		return new FormGroup<DeleteStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
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


	/** The output for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsOutput {
		AccountLimits?: Array<AccountLimit>;
		NextToken?: string;
	}

	/** The output for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsOutputFormGroup() {
		return new FormGroup<DescribeAccountLimitsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The AccountLimit data type.</p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface AccountLimit {
		Name?: string;
		Value?: number | null;
	}

	/** <p>The AccountLimit data type.</p> <p>CloudFormation has the following limits per account:</p> <ul> <li> <p>Number of concurrent resources</p> </li> <li> <p>Number of stacks</p> </li> <li> <p>Number of stack outputs</p> </li> </ul> <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the <i>CloudFormation User Guide</i>.</p> */
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
		ChangeSetName?: string;
		ChangeSetId?: string;
		StackId?: string;
		StackName?: string;
		Description?: string;
		Parameters?: Array<Parameter>;
		CreationTime?: Date;
		ExecutionStatus?: ExecutionStatus;
		Status?: ChangeSetStatus;
		StatusReason?: string;
		NotificationARNs?: Array<string>;
		RollbackConfiguration?: RollbackConfiguration;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		Changes?: Array<Change>;
		NextToken?: string;
		IncludeNestedStacks?: boolean | null;
		ParentChangeSetId?: string;
		RootChangeSetId?: string;
		OnStackFailure?: OnStackFailure;
	}

	/** The output for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetOutputFormProperties {
		ChangeSetName: FormControl<string | null | undefined>,
		ChangeSetId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExecutionStatus: FormControl<ExecutionStatus | null | undefined>,
		Status: FormControl<ChangeSetStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		IncludeNestedStacks: FormControl<boolean | null | undefined>,
		ParentChangeSetId: FormControl<string | null | undefined>,
		RootChangeSetId: FormControl<string | null | undefined>,
		OnStackFailure: FormControl<OnStackFailure | null | undefined>,
	}
	export function CreateDescribeChangeSetOutputFormGroup() {
		return new FormGroup<DescribeChangeSetOutputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionStatus: new FormControl<ExecutionStatus | null | undefined>(undefined),
			Status: new FormControl<ChangeSetStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			IncludeNestedStacks: new FormControl<boolean | null | undefined>(undefined),
			ParentChangeSetId: new FormControl<string | null | undefined>(undefined),
			RootChangeSetId: new FormControl<string | null | undefined>(undefined),
			OnStackFailure: new FormControl<OnStackFailure | null | undefined>(undefined),
		});

	}

	export enum ExecutionStatus { UNAVAILABLE = 'UNAVAILABLE', AVAILABLE = 'AVAILABLE', EXECUTE_IN_PROGRESS = 'EXECUTE_IN_PROGRESS', EXECUTE_COMPLETE = 'EXECUTE_COMPLETE', EXECUTE_FAILED = 'EXECUTE_FAILED', OBSOLETE = 'OBSOLETE' }

	export enum ChangeSetStatus { CREATE_PENDING = 'CREATE_PENDING', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_COMPLETE = 'CREATE_COMPLETE', DELETE_PENDING = 'DELETE_PENDING', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_COMPLETE = 'DELETE_COMPLETE', DELETE_FAILED = 'DELETE_FAILED', FAILED = 'FAILED' }


	/** <p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
	export interface RollbackConfiguration {
		RollbackTriggers?: Array<RollbackTrigger>;
		MonitoringTimeInMinutes?: number | null;
	}

	/** <p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p> <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack Operations</a>.</p> */
	export interface RollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateRollbackConfigurationFormGroup() {
		return new FormGroup<RollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The <code>Change</code> structure describes the changes CloudFormation will perform if you execute the change set. */
	export interface Change {
		Type?: ChangeType;
		HookInvocationCount?: number | null;
		ResourceChange?: ResourceChange;
	}

	/** The <code>Change</code> structure describes the changes CloudFormation will perform if you execute the change set. */
	export interface ChangeFormProperties {
		Type: FormControl<ChangeType | null | undefined>,
		HookInvocationCount: FormControl<number | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			Type: new FormControl<ChangeType | null | undefined>(undefined),
			HookInvocationCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ChangeType { Resource = 'Resource' }


	/** The <code>ResourceChange</code> structure describes the resource and the action that CloudFormation will perform on it if you execute this change set. */
	export interface ResourceChange {
		Action?: ChangeAction;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
		ResourceType?: string;
		Replacement?: Replacement;
		Scope?: Array<ResourceAttribute>;
		Details?: Array<ResourceChangeDetail>;
		ChangeSetId?: string;
		ModuleInfo?: ModuleInfo;
	}

	/** The <code>ResourceChange</code> structure describes the resource and the action that CloudFormation will perform on it if you execute this change set. */
	export interface ResourceChangeFormProperties {
		Action: FormControl<ChangeAction | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Replacement: FormControl<Replacement | null | undefined>,
		ChangeSetId: FormControl<string | null | undefined>,
	}
	export function CreateResourceChangeFormGroup() {
		return new FormGroup<ResourceChangeFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Replacement: new FormControl<Replacement | null | undefined>(undefined),
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeAction { Add = 'Add', Modify = 'Modify', Remove = 'Remove', Import = 'Import', Dynamic = 'Dynamic' }

	export enum Replacement { True = 'True', False = 'False', Conditional = 'Conditional' }

	export enum ResourceAttribute { Properties = 'Properties', Metadata = 'Metadata', CreationPolicy = 'CreationPolicy', UpdatePolicy = 'UpdatePolicy', DeletionPolicy = 'DeletionPolicy', Tags = 'Tags' }


	/** For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes CloudFormation will make to that resource. */
	export interface ResourceChangeDetail {
		Target?: ResourceTargetDefinition;
		Evaluation?: EvaluationType;
		ChangeSource?: ChangeSource;
		CausingEntity?: string;
	}

	/** For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes CloudFormation will make to that resource. */
	export interface ResourceChangeDetailFormProperties {
		Evaluation: FormControl<EvaluationType | null | undefined>,
		ChangeSource: FormControl<ChangeSource | null | undefined>,
		CausingEntity: FormControl<string | null | undefined>,
	}
	export function CreateResourceChangeDetailFormGroup() {
		return new FormGroup<ResourceChangeDetailFormProperties>({
			Evaluation: new FormControl<EvaluationType | null | undefined>(undefined),
			ChangeSource: new FormControl<ChangeSource | null | undefined>(undefined),
			CausingEntity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The field that CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
	export interface ResourceTargetDefinition {
		Attribute?: ResourceAttribute;
		Name?: string;
		RequiresRecreation?: RequiresRecreation;
	}

	/** The field that CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated. */
	export interface ResourceTargetDefinitionFormProperties {
		Attribute: FormControl<ResourceAttribute | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RequiresRecreation: FormControl<RequiresRecreation | null | undefined>,
	}
	export function CreateResourceTargetDefinitionFormGroup() {
		return new FormGroup<ResourceTargetDefinitionFormProperties>({
			Attribute: new FormControl<ResourceAttribute | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RequiresRecreation: new FormControl<RequiresRecreation | null | undefined>(undefined),
		});

	}

	export enum RequiresRecreation { Never = 'Never', Conditionally = 'Conditionally', Always = 'Always' }

	export enum EvaluationType { Static = 'Static', Dynamic = 'Dynamic' }

	export enum ChangeSource { ResourceReference = 'ResourceReference', ParameterReference = 'ParameterReference', ResourceAttribute = 'ResourceAttribute', DirectModification = 'DirectModification', Automatic = 'Automatic' }


	/** <p>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</p> <p>For more information about modules, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and reuse resource configurations</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface ModuleInfo {
		TypeHierarchy?: string;
		LogicalIdHierarchy?: string;
	}

	/** <p>Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.</p> <p>For more information about modules, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and reuse resource configurations</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface ModuleInfoFormProperties {
		TypeHierarchy: FormControl<string | null | undefined>,
		LogicalIdHierarchy: FormControl<string | null | undefined>,
	}
	export function CreateModuleInfoFormGroup() {
		return new FormGroup<ModuleInfoFormProperties>({
			TypeHierarchy: new FormControl<string | null | undefined>(undefined),
			LogicalIdHierarchy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnStackFailure { DO_NOTHING = 'DO_NOTHING', ROLLBACK = 'ROLLBACK', DELETE = 'DELETE' }

	export interface ChangeSetNotFoundException {
	}
	export interface ChangeSetNotFoundExceptionFormProperties {
	}
	export function CreateChangeSetNotFoundExceptionFormGroup() {
		return new FormGroup<ChangeSetNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeChangeSetHooksOutput {
		ChangeSetId?: string;
		ChangeSetName?: string;
		Hooks?: Array<ChangeSetHook>;
		Status?: ChangeSetHooksStatus;
		NextToken?: string;
		StackId?: string;
		StackName?: string;
	}
	export interface DescribeChangeSetHooksOutputFormProperties {
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		Status: FormControl<ChangeSetHooksStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetHooksOutputFormGroup() {
		return new FormGroup<DescribeChangeSetHooksOutputFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeSetHooksStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the resource, the hook, and the hook version to be invoked. */
	export interface ChangeSetHook {
		InvocationPoint?: HookInvocationPoint;
		FailureMode?: HookFailureMode;
		TypeName?: string;
		TypeVersionId?: string;
		TypeConfigurationVersionId?: string;
		TargetDetails?: ChangeSetHookTargetDetails;
	}

	/** Specifies the resource, the hook, and the hook version to be invoked. */
	export interface ChangeSetHookFormProperties {
		InvocationPoint: FormControl<HookInvocationPoint | null | undefined>,
		FailureMode: FormControl<HookFailureMode | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		TypeConfigurationVersionId: FormControl<string | null | undefined>,
	}
	export function CreateChangeSetHookFormGroup() {
		return new FormGroup<ChangeSetHookFormProperties>({
			InvocationPoint: new FormControl<HookInvocationPoint | null | undefined>(undefined),
			FailureMode: new FormControl<HookFailureMode | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			TypeConfigurationVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HookInvocationPoint { PRE_PROVISION = 'PRE_PROVISION' }

	export enum HookFailureMode { FAIL = 'FAIL', WARN = 'WARN' }


	/** Specifies target details for an activated hook. */
	export interface ChangeSetHookTargetDetails {
		TargetType?: HookTargetType;
		ResourceTargetDetails?: ChangeSetHookResourceTargetDetails;
	}

	/** Specifies target details for an activated hook. */
	export interface ChangeSetHookTargetDetailsFormProperties {
		TargetType: FormControl<HookTargetType | null | undefined>,
	}
	export function CreateChangeSetHookTargetDetailsFormGroup() {
		return new FormGroup<ChangeSetHookTargetDetailsFormProperties>({
			TargetType: new FormControl<HookTargetType | null | undefined>(undefined),
		});

	}

	export enum HookTargetType { RESOURCE = 'RESOURCE' }


	/** Specifies <code>RESOURCE</code> type target details for activated hooks. */
	export interface ChangeSetHookResourceTargetDetails {
		LogicalResourceId?: string;
		ResourceType?: string;
		ResourceAction?: ChangeAction;
	}

	/** Specifies <code>RESOURCE</code> type target details for activated hooks. */
	export interface ChangeSetHookResourceTargetDetailsFormProperties {
		LogicalResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceAction: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateChangeSetHookResourceTargetDetailsFormGroup() {
		return new FormGroup<ChangeSetHookResourceTargetDetailsFormProperties>({
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceAction: new FormControl<ChangeAction | null | undefined>(undefined),
		});

	}

	export enum ChangeSetHooksStatus { PLANNING = 'PLANNING', PLANNED = 'PLANNED', UNAVAILABLE = 'UNAVAILABLE' }

	export interface DescribeOrganizationsAccessOutput {
		Status?: OrganizationStatus;
	}
	export interface DescribeOrganizationsAccessOutputFormProperties {
		Status: FormControl<OrganizationStatus | null | undefined>,
	}
	export function CreateDescribeOrganizationsAccessOutputFormGroup() {
		return new FormGroup<DescribeOrganizationsAccessOutputFormProperties>({
			Status: new FormControl<OrganizationStatus | null | undefined>(undefined),
		});

	}

	export enum OrganizationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DISABLED_PERMANENTLY = 'DISABLED_PERMANENTLY' }

	export interface DescribePublisherOutput {
		PublisherId?: string;
		PublisherStatus?: PublisherStatus;
		IdentityProvider?: IdentityProvider;
		PublisherProfile?: string;
	}
	export interface DescribePublisherOutputFormProperties {
		PublisherId: FormControl<string | null | undefined>,
		PublisherStatus: FormControl<PublisherStatus | null | undefined>,
		IdentityProvider: FormControl<IdentityProvider | null | undefined>,
		PublisherProfile: FormControl<string | null | undefined>,
	}
	export function CreateDescribePublisherOutputFormGroup() {
		return new FormGroup<DescribePublisherOutputFormProperties>({
			PublisherId: new FormControl<string | null | undefined>(undefined),
			PublisherStatus: new FormControl<PublisherStatus | null | undefined>(undefined),
			IdentityProvider: new FormControl<IdentityProvider | null | undefined>(undefined),
			PublisherProfile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublisherStatus { VERIFIED = 'VERIFIED', UNVERIFIED = 'UNVERIFIED' }

	export enum IdentityProvider { AWS_Marketplace = 'AWS_Marketplace', GitHub = 'GitHub', Bitbucket = 'Bitbucket' }

	export interface DescribeStackDriftDetectionStatusOutput {

		/** Required */
		StackId: string;

		/** Required */
		StackDriftDetectionId: string;
		StackDriftStatus?: StackDriftStatus;

		/** Required */
		DetectionStatus: StackDriftDetectionStatus;
		DetectionStatusReason?: string;
		DriftedStackResourceCount?: number | null;

		/** Required */
		Timestamp: Date;
	}
	export interface DescribeStackDriftDetectionStatusOutputFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		StackDriftDetectionId: FormControl<string | null | undefined>,
		StackDriftStatus: FormControl<StackDriftStatus | null | undefined>,

		/** Required */
		DetectionStatus: FormControl<StackDriftDetectionStatus | null | undefined>,
		DetectionStatusReason: FormControl<string | null | undefined>,
		DriftedStackResourceCount: FormControl<number | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStackDriftDetectionStatusOutputFormGroup() {
		return new FormGroup<DescribeStackDriftDetectionStatusOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackDriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined),
			DetectionStatus: new FormControl<StackDriftDetectionStatus | null | undefined>(undefined, [Validators.required]),
			DetectionStatusReason: new FormControl<string | null | undefined>(undefined),
			DriftedStackResourceCount: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StackDriftStatus { DRIFTED = 'DRIFTED', IN_SYNC = 'IN_SYNC', UNKNOWN = 'UNKNOWN', NOT_CHECKED = 'NOT_CHECKED' }

	export enum StackDriftDetectionStatus { DETECTION_IN_PROGRESS = 'DETECTION_IN_PROGRESS', DETECTION_FAILED = 'DETECTION_FAILED', DETECTION_COMPLETE = 'DETECTION_COMPLETE' }


	/** The output for a <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsOutput {
		StackEvents?: Array<StackEvent>;
		NextToken?: string;
	}

	/** The output for a <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackEventsOutputFormGroup() {
		return new FormGroup<DescribeStackEventsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
		ResourceType?: string;

		/** Required */
		Timestamp: Date;
		ResourceStatus?: ResourceStatus;
		ResourceStatusReason?: string;
		ResourceProperties?: string;
		ClientRequestToken?: string;
		HookType?: string;
		HookStatus?: HookStatus;
		HookStatusReason?: string;
		HookInvocationPoint?: HookInvocationPoint;
		HookFailureMode?: HookFailureMode;
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
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		ResourceStatus: FormControl<ResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
		ResourceProperties: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		HookType: FormControl<string | null | undefined>,
		HookStatus: FormControl<HookStatus | null | undefined>,
		HookStatusReason: FormControl<string | null | undefined>,
		HookInvocationPoint: FormControl<HookInvocationPoint | null | undefined>,
		HookFailureMode: FormControl<HookFailureMode | null | undefined>,
	}
	export function CreateStackEventFormGroup() {
		return new FormGroup<StackEventFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<ResourceStatus | null | undefined>(undefined),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			ResourceProperties: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			HookType: new FormControl<string | null | undefined>(undefined),
			HookStatus: new FormControl<HookStatus | null | undefined>(undefined),
			HookStatusReason: new FormControl<string | null | undefined>(undefined),
			HookInvocationPoint: new FormControl<HookInvocationPoint | null | undefined>(undefined),
			HookFailureMode: new FormControl<HookFailureMode | null | undefined>(undefined),
		});

	}

	export enum ResourceStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', CREATE_COMPLETE = 'CREATE_COMPLETE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', DELETE_COMPLETE = 'DELETE_COMPLETE', DELETE_SKIPPED = 'DELETE_SKIPPED', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED', UPDATE_COMPLETE = 'UPDATE_COMPLETE', IMPORT_FAILED = 'IMPORT_FAILED', IMPORT_COMPLETE = 'IMPORT_COMPLETE', IMPORT_IN_PROGRESS = 'IMPORT_IN_PROGRESS', IMPORT_ROLLBACK_IN_PROGRESS = 'IMPORT_ROLLBACK_IN_PROGRESS', IMPORT_ROLLBACK_FAILED = 'IMPORT_ROLLBACK_FAILED', IMPORT_ROLLBACK_COMPLETE = 'IMPORT_ROLLBACK_COMPLETE', UPDATE_ROLLBACK_IN_PROGRESS = 'UPDATE_ROLLBACK_IN_PROGRESS', UPDATE_ROLLBACK_COMPLETE = 'UPDATE_ROLLBACK_COMPLETE', UPDATE_ROLLBACK_FAILED = 'UPDATE_ROLLBACK_FAILED', ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS', ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE', ROLLBACK_FAILED = 'ROLLBACK_FAILED' }

	export enum HookStatus { HOOK_IN_PROGRESS = 'HOOK_IN_PROGRESS', HOOK_COMPLETE_SUCCEEDED = 'HOOK_COMPLETE_SUCCEEDED', HOOK_COMPLETE_FAILED = 'HOOK_COMPLETE_FAILED', HOOK_FAILED = 'HOOK_FAILED' }

	export interface DescribeStackInstanceOutput {
		StackInstance?: StackInstance;
	}
	export interface DescribeStackInstanceOutputFormProperties {
	}
	export function CreateDescribeStackInstanceOutputFormGroup() {
		return new FormGroup<DescribeStackInstanceOutputFormProperties>({
		});

	}


	/** An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, in addition to the ID of the actual stack and the stack status. */
	export interface StackInstance {
		StackSetId?: string;
		Region?: string;
		Account?: string;
		StackId?: string;
		ParameterOverrides?: Array<Parameter>;
		Status?: StackInstanceStatus;
		StackInstanceStatus?: StackInstanceComprehensiveStatus;
		StatusReason?: string;
		OrganizationalUnitId?: string;
		DriftStatus?: StackDriftStatus;
		LastDriftCheckTimestamp?: Date;
		LastOperationId?: string;
	}

	/** An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, in addition to the ID of the actual stack and the stack status. */
	export interface StackInstanceFormProperties {
		StackSetId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Account: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		Status: FormControl<StackInstanceStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
		DriftStatus: FormControl<StackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
		LastOperationId: FormControl<string | null | undefined>,
	}
	export function CreateStackInstanceFormGroup() {
		return new FormGroup<StackInstanceFormProperties>({
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Account: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackInstanceStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
			DriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastOperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackInstanceStatus { CURRENT = 'CURRENT', OUTDATED = 'OUTDATED', INOPERABLE = 'INOPERABLE' }


	/** The detailed status of the stack instance. */
	export interface StackInstanceComprehensiveStatus {
		DetailedStatus?: StackInstanceDetailedStatus;
	}

	/** The detailed status of the stack instance. */
	export interface StackInstanceComprehensiveStatusFormProperties {
		DetailedStatus: FormControl<StackInstanceDetailedStatus | null | undefined>,
	}
	export function CreateStackInstanceComprehensiveStatusFormGroup() {
		return new FormGroup<StackInstanceComprehensiveStatusFormProperties>({
			DetailedStatus: new FormControl<StackInstanceDetailedStatus | null | undefined>(undefined),
		});

	}

	export enum StackInstanceDetailedStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', INOPERABLE = 'INOPERABLE', SKIPPED_SUSPENDED_ACCOUNT = 'SKIPPED_SUSPENDED_ACCOUNT' }

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
		StackName?: string;
		StackId?: string;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string;

		/** Required */
		ResourceType: string;

		/** Required */
		LastUpdatedTimestamp: Date;

		/** Required */
		ResourceStatus: ResourceStatus;
		ResourceStatusReason?: string;
		Description?: string;
		Metadata?: string;
		DriftInformation?: StackResourceDriftInformation;
		ModuleInfo?: ModuleInfo;
	}

	/** Contains detailed information about the specified stack resource. */
	export interface StackResourceDetailFormProperties {
		StackName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<ResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceDetailFormGroup() {
		return new FormGroup<StackResourceDetailFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<ResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformation {

		/** Required */
		StackResourceDriftStatus: StackResourceDriftStatus;
		LastCheckTimestamp?: Date;
	}

	/** Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationFormProperties {

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftInformationFormGroup() {
		return new FormGroup<StackResourceDriftInformationFormProperties>({
			StackResourceDriftStatus: new FormControl<StackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StackResourceDriftStatus { IN_SYNC = 'IN_SYNC', MODIFIED = 'MODIFIED', DELETED = 'DELETED', NOT_CHECKED = 'NOT_CHECKED' }

	export interface DescribeStackResourceDriftsOutput {

		/** Required */
		StackResourceDrifts: Array<StackResourceDrift>;
		NextToken?: string;
	}
	export interface DescribeStackResourceDriftsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackResourceDriftsOutputFormGroup() {
		return new FormGroup<DescribeStackResourceDriftsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
	export interface StackResourceDrift {

		/** Required */
		StackId: string;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;

		/** Required */
		ResourceType: string;
		ExpectedProperties?: string;
		ActualProperties?: string;
		PropertyDifferences?: Array<PropertyDifference>;

		/** Required */
		StackResourceDriftStatus: StackResourceDriftStatus;

		/** Required */
		Timestamp: Date;
		ModuleInfo?: ModuleInfo;
	}

	/** <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> */
	export interface StackResourceDriftFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
		ExpectedProperties: FormControl<string | null | undefined>,
		ActualProperties: FormControl<string | null | undefined>,

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftStatus | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftFormGroup() {
		return new FormGroup<StackResourceDriftFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpectedProperties: new FormControl<string | null | undefined>(undefined),
			ActualProperties: new FormControl<string | null | undefined>(undefined),
			StackResourceDriftStatus: new FormControl<StackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource. */
	export interface PhysicalResourceIdContextKeyValuePair {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource. */
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
		DifferenceType: DifferenceType;
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
		DifferenceType: FormControl<DifferenceType | null | undefined>,
	}
	export function CreatePropertyDifferenceFormGroup() {
		return new FormGroup<PropertyDifferenceFormProperties>({
			PropertyPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpectedValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActualValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DifferenceType: new FormControl<DifferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DifferenceType { ADD = 'ADD', REMOVE = 'REMOVE', NOT_EQUAL = 'NOT_EQUAL' }


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
		StackName?: string;
		StackId?: string;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string;

		/** Required */
		ResourceType: string;

		/** Required */
		Timestamp: Date;

		/** Required */
		ResourceStatus: ResourceStatus;
		ResourceStatusReason?: string;
		Description?: string;
		DriftInformation?: StackResourceDriftInformation;
		ModuleInfo?: ModuleInfo;
	}

	/** The StackResource data type. */
	export interface StackResourceFormProperties {
		StackName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<ResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceFormGroup() {
		return new FormGroup<StackResourceFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<ResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStackSetOutput {
		StackSet?: StackSet;
	}
	export interface DescribeStackSetOutputFormProperties {
	}
	export function CreateDescribeStackSetOutputFormGroup() {
		return new FormGroup<DescribeStackSetOutputFormProperties>({
		});

	}


	/** A structure that contains information about a stack set. A stack set enables you to provision stacks into Amazon Web Services accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires. */
	export interface StackSet {
		StackSetName?: string;
		StackSetId?: string;
		Description?: string;
		Status?: StackSetStatus;
		TemplateBody?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		StackSetARN?: string;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
		AutoDeployment?: AutoDeployment;
		PermissionModel?: PermissionModels;
		OrganizationalUnitIds?: Array<string>;
		ManagedExecution?: ManagedExecution;
		Regions?: Array<string>;
	}

	/** A structure that contains information about a stack set. A stack set enables you to provision stacks into Amazon Web Services accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires. */
	export interface StackSetFormProperties {
		StackSetName: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		StackSetARN: FormControl<string | null | undefined>,
		AdministrationRoleARN: FormControl<string | null | undefined>,
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<PermissionModels | null | undefined>,
	}
	export function CreateStackSetFormGroup() {
		return new FormGroup<StackSetFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			StackSetARN: new FormControl<string | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined),
			PermissionModel: new FormControl<PermissionModels | null | undefined>(undefined),
		});

	}

	export enum StackSetStatus { ACTIVE = 'ACTIVE', DELETED = 'DELETED' }


	/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress isn't included.</p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface StackSetDriftDetectionDetails {
		DriftStatus?: StackSetDriftStatus;
		DriftDetectionStatus?: StackSetDriftDetectionStatus;
		LastDriftCheckTimestamp?: Date;
		TotalStackInstancesCount?: number | null;
		DriftedStackInstancesCount?: number | null;
		InSyncStackInstancesCount?: number | null;
		InProgressStackInstancesCount?: number | null;
		FailedStackInstancesCount?: number | null;
	}

	/** <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress isn't included.</p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface StackSetDriftDetectionDetailsFormProperties {
		DriftStatus: FormControl<StackSetDriftStatus | null | undefined>,
		DriftDetectionStatus: FormControl<StackSetDriftDetectionStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
		TotalStackInstancesCount: FormControl<number | null | undefined>,
		DriftedStackInstancesCount: FormControl<number | null | undefined>,
		InSyncStackInstancesCount: FormControl<number | null | undefined>,
		InProgressStackInstancesCount: FormControl<number | null | undefined>,
		FailedStackInstancesCount: FormControl<number | null | undefined>,
	}
	export function CreateStackSetDriftDetectionDetailsFormGroup() {
		return new FormGroup<StackSetDriftDetectionDetailsFormProperties>({
			DriftStatus: new FormControl<StackSetDriftStatus | null | undefined>(undefined),
			DriftDetectionStatus: new FormControl<StackSetDriftDetectionStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			TotalStackInstancesCount: new FormControl<number | null | undefined>(undefined),
			DriftedStackInstancesCount: new FormControl<number | null | undefined>(undefined),
			InSyncStackInstancesCount: new FormControl<number | null | undefined>(undefined),
			InProgressStackInstancesCount: new FormControl<number | null | undefined>(undefined),
			FailedStackInstancesCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StackSetDriftStatus { DRIFTED = 'DRIFTED', IN_SYNC = 'IN_SYNC', NOT_CHECKED = 'NOT_CHECKED' }

	export enum StackSetDriftDetectionStatus { COMPLETED = 'COMPLETED', FAILED = 'FAILED', PARTIAL_SUCCESS = 'PARTIAL_SUCCESS', IN_PROGRESS = 'IN_PROGRESS', STOPPED = 'STOPPED' }


	/** [Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). */
	export interface AutoDeployment {
		Enabled?: boolean | null;
		RetainStacksOnAccountRemoval?: boolean | null;
	}

	/** [Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). */
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

	export enum PermissionModels { SERVICE_MANAGED = 'SERVICE_MANAGED', SELF_MANAGED = 'SELF_MANAGED' }


	/** Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. */
	export interface ManagedExecution {
		Active?: boolean | null;
	}

	/** Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. */
	export interface ManagedExecutionFormProperties {
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateManagedExecutionFormGroup() {
		return new FormGroup<ManagedExecutionFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeStackSetOperationOutput {
		StackSetOperation?: StackSetOperation;
	}
	export interface DescribeStackSetOperationOutputFormProperties {
	}
	export function CreateDescribeStackSetOperationOutputFormGroup() {
		return new FormGroup<DescribeStackSetOperationOutputFormProperties>({
		});

	}


	/** The structure that contains information about a stack set operation. */
	export interface StackSetOperation {
		OperationId?: string;
		StackSetId?: string;
		Action?: StackSetOperationAction;
		Status?: StackSetOperationStatus;
		OperationPreferences?: StackSetOperationPreferences;
		RetainStacks?: boolean | null;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		CreationTimestamp?: Date;
		EndTimestamp?: Date;
		DeploymentTargets?: DeploymentTargets;
		StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
		StatusReason?: string;
		StatusDetails?: StackSetOperationStatusDetails;
	}

	/** The structure that contains information about a stack set operation. */
	export interface StackSetOperationFormProperties {
		OperationId: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,
		Action: FormControl<StackSetOperationAction | null | undefined>,
		Status: FormControl<StackSetOperationStatus | null | undefined>,
		RetainStacks: FormControl<boolean | null | undefined>,
		AdministrationRoleARN: FormControl<string | null | undefined>,
		ExecutionRoleName: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateStackSetOperationFormGroup() {
		return new FormGroup<StackSetOperationFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<StackSetOperationAction | null | undefined>(undefined),
			Status: new FormControl<StackSetOperationStatus | null | undefined>(undefined),
			RetainStacks: new FormControl<boolean | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackSetOperationAction { CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE', DETECT_DRIFT = 'DETECT_DRIFT' }

	export enum StackSetOperationStatus { RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', STOPPING = 'STOPPING', STOPPED = 'STOPPED', QUEUED = 'QUEUED' }


	/** <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
	export interface StackSetOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}

	/** <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p> */
	export interface StackSetOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateStackSetOperationPreferencesFormGroup() {
		return new FormGroup<StackSetOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>[Service-managed permissions] The Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
	export interface DeploymentTargets {
		Accounts?: Array<string>;
		AccountsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		AccountFilterType?: AccountFilterType;
	}

	/** <p>[Service-managed permissions] The Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p> <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For create and delete operations, specify <code>OrganizationalUnitIds</code>.</p> */
	export interface DeploymentTargetsFormProperties {
		AccountsUrl: FormControl<string | null | undefined>,
		AccountFilterType: FormControl<AccountFilterType | null | undefined>,
	}
	export function CreateDeploymentTargetsFormGroup() {
		return new FormGroup<DeploymentTargetsFormProperties>({
			AccountsUrl: new FormControl<string | null | undefined>(undefined),
			AccountFilterType: new FormControl<AccountFilterType | null | undefined>(undefined),
		});

	}


	/** Detailed information about the StackSet operation. */
	export interface StackSetOperationStatusDetails {
		FailedStackInstancesCount?: number | null;
	}

	/** Detailed information about the StackSet operation. */
	export interface StackSetOperationStatusDetailsFormProperties {
		FailedStackInstancesCount: FormControl<number | null | undefined>,
	}
	export function CreateStackSetOperationStatusDetailsFormGroup() {
		return new FormGroup<StackSetOperationStatusDetailsFormProperties>({
			FailedStackInstancesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output for a <a>DescribeStacks</a> action. */
	export interface DescribeStacksOutput {
		Stacks?: Array<Stack>;
		NextToken?: string;
	}

	/** The output for a <a>DescribeStacks</a> action. */
	export interface DescribeStacksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksOutputFormGroup() {
		return new FormGroup<DescribeStacksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Stack data type. */
	export interface Stack {
		StackId?: string;

		/** Required */
		StackName: string;
		ChangeSetId?: string;
		Description?: string;
		Parameters?: Array<Parameter>;

		/** Required */
		CreationTime: Date;
		DeletionTime?: Date;
		LastUpdatedTime?: Date;
		RollbackConfiguration?: RollbackConfiguration;

		/** Required */
		StackStatus: StackStatus;
		StackStatusReason?: string;
		DisableRollback?: boolean | null;
		NotificationARNs?: Array<string>;
		TimeoutInMinutes?: number | null;
		Capabilities?: Array<Capability>;
		Outputs?: Array<Output>;
		RoleARN?: string;
		Tags?: Array<Tag>;
		EnableTerminationProtection?: boolean | null;
		ParentId?: string;
		RootId?: string;
		DriftInformation?: StackDriftInformation;
		RetainExceptOnCreate?: boolean | null;
	}

	/** The Stack data type. */
	export interface StackFormProperties {
		StackId: FormControl<string | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
		ChangeSetId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		DeletionTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		StackStatus: FormControl<StackStatus | null | undefined>,
		StackStatusReason: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,
		TimeoutInMinutes: FormControl<number | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
		ParentId: FormControl<string | null | undefined>,
		RootId: FormControl<string | null | undefined>,
		RetainExceptOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateStackFormGroup() {
		return new FormGroup<StackFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DeletionTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			StackStatus: new FormControl<StackStatus | null | undefined>(undefined, [Validators.required]),
			StackStatusReason: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
			RootId: new FormControl<string | null | undefined>(undefined),
			RetainExceptOnCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StackStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', CREATE_COMPLETE = 'CREATE_COMPLETE', ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS', ROLLBACK_FAILED = 'ROLLBACK_FAILED', ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED', DELETE_COMPLETE = 'DELETE_COMPLETE', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = 'UPDATE_COMPLETE_CLEANUP_IN_PROGRESS', UPDATE_COMPLETE = 'UPDATE_COMPLETE', UPDATE_FAILED = 'UPDATE_FAILED', UPDATE_ROLLBACK_IN_PROGRESS = 'UPDATE_ROLLBACK_IN_PROGRESS', UPDATE_ROLLBACK_FAILED = 'UPDATE_ROLLBACK_FAILED', UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = 'UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS', UPDATE_ROLLBACK_COMPLETE = 'UPDATE_ROLLBACK_COMPLETE', REVIEW_IN_PROGRESS = 'REVIEW_IN_PROGRESS', IMPORT_IN_PROGRESS = 'IMPORT_IN_PROGRESS', IMPORT_COMPLETE = 'IMPORT_COMPLETE', IMPORT_ROLLBACK_IN_PROGRESS = 'IMPORT_ROLLBACK_IN_PROGRESS', IMPORT_ROLLBACK_FAILED = 'IMPORT_ROLLBACK_FAILED', IMPORT_ROLLBACK_COMPLETE = 'IMPORT_ROLLBACK_COMPLETE' }


	/** The Output data type. */
	export interface Output {
		OutputKey?: string;
		OutputValue?: string;
		Description?: string;
		ExportName?: string;
	}

	/** The Output data type. */
	export interface OutputFormProperties {
		OutputKey: FormControl<string | null | undefined>,
		OutputValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ExportName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ExportName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformation {

		/** Required */
		StackDriftStatus: StackDriftStatus;
		LastCheckTimestamp?: Date;
	}

	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationFormProperties {

		/** Required */
		StackDriftStatus: FormControl<StackDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackDriftInformationFormGroup() {
		return new FormGroup<StackDriftInformationFormProperties>({
			StackDriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeTypeOutput {
		Arn?: string;
		Type?: ThirdPartyType;
		TypeName?: string;
		DefaultVersionId?: string;
		IsDefaultVersion?: boolean | null;
		TypeTestsStatus?: TypeTestsStatus;
		TypeTestsStatusDescription?: string;
		Description?: string;
		Schema?: string;
		ProvisioningType?: ProvisioningType;
		DeprecatedStatus?: DeprecatedStatus;
		LoggingConfig?: LoggingConfig;
		RequiredActivatedTypes?: Array<RequiredActivatedType>;
		ExecutionRoleArn?: string;
		Visibility?: Visibility;
		SourceUrl?: string;
		DocumentationUrl?: string;
		LastUpdated?: Date;
		TimeCreated?: Date;
		ConfigurationSchema?: string;
		PublisherId?: string;
		OriginalTypeName?: string;
		OriginalTypeArn?: string;
		PublicVersionNumber?: string;
		LatestPublicVersion?: string;
		IsActivated?: boolean | null;
		AutoUpdate?: boolean | null;
	}
	export interface DescribeTypeOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		DefaultVersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		TypeTestsStatus: FormControl<TypeTestsStatus | null | undefined>,
		TypeTestsStatusDescription: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		ProvisioningType: FormControl<ProvisioningType | null | undefined>,
		DeprecatedStatus: FormControl<DeprecatedStatus | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		Visibility: FormControl<Visibility | null | undefined>,
		SourceUrl: FormControl<string | null | undefined>,
		DocumentationUrl: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		TimeCreated: FormControl<Date | null | undefined>,
		ConfigurationSchema: FormControl<string | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		OriginalTypeName: FormControl<string | null | undefined>,
		OriginalTypeArn: FormControl<string | null | undefined>,
		PublicVersionNumber: FormControl<string | null | undefined>,
		LatestPublicVersion: FormControl<string | null | undefined>,
		IsActivated: FormControl<boolean | null | undefined>,
		AutoUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeTypeOutputFormGroup() {
		return new FormGroup<DescribeTypeOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			TypeTestsStatus: new FormControl<TypeTestsStatus | null | undefined>(undefined),
			TypeTestsStatusDescription: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			ProvisioningType: new FormControl<ProvisioningType | null | undefined>(undefined),
			DeprecatedStatus: new FormControl<DeprecatedStatus | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			Visibility: new FormControl<Visibility | null | undefined>(undefined),
			SourceUrl: new FormControl<string | null | undefined>(undefined),
			DocumentationUrl: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			TimeCreated: new FormControl<Date | null | undefined>(undefined),
			ConfigurationSchema: new FormControl<string | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			OriginalTypeName: new FormControl<string | null | undefined>(undefined),
			OriginalTypeArn: new FormControl<string | null | undefined>(undefined),
			PublicVersionNumber: new FormControl<string | null | undefined>(undefined),
			LatestPublicVersion: new FormControl<string | null | undefined>(undefined),
			IsActivated: new FormControl<boolean | null | undefined>(undefined),
			AutoUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TypeTestsStatus { PASSED = 'PASSED', FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS', NOT_TESTED = 'NOT_TESTED' }

	export enum ProvisioningType { NON_PROVISIONABLE = 'NON_PROVISIONABLE', IMMUTABLE = 'IMMUTABLE', FULLY_MUTABLE = 'FULLY_MUTABLE' }

	export enum DeprecatedStatus { LIVE = 'LIVE', DEPRECATED = 'DEPRECATED' }


	/** Contains logging configuration information for an extension. */
	export interface LoggingConfig {

		/** Required */
		LogRoleArn: string;

		/** Required */
		LogGroupName: string;
	}

	/** Contains logging configuration information for an extension. */
	export interface LoggingConfigFormProperties {

		/** Required */
		LogRoleArn: FormControl<string | null | undefined>,

		/** Required */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			LogRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>For extensions that are modules, a public third-party extension that must be activated in your account in order for the module itself to be activated.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public modules for use in your account</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface RequiredActivatedType {
		TypeNameAlias?: string;
		OriginalTypeName?: string;
		PublisherId?: string;
		SupportedMajorVersions?: Array<number> | null;
	}

	/** <p>For extensions that are modules, a public third-party extension that must be activated in your account in order for the module itself to be activated.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public modules for use in your account</a> in the <i>CloudFormation User Guide</i>.</p> */
	export interface RequiredActivatedTypeFormProperties {
		TypeNameAlias: FormControl<string | null | undefined>,
		OriginalTypeName: FormControl<string | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
	}
	export function CreateRequiredActivatedTypeFormGroup() {
		return new FormGroup<RequiredActivatedTypeFormProperties>({
			TypeNameAlias: new FormControl<string | null | undefined>(undefined),
			OriginalTypeName: new FormControl<string | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Visibility { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE' }

	export interface DescribeTypeRegistrationOutput {
		ProgressStatus?: RegistrationStatus;
		Description?: string;
		TypeArn?: string;
		TypeVersionArn?: string;
	}
	export interface DescribeTypeRegistrationOutputFormProperties {
		ProgressStatus: FormControl<RegistrationStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TypeArn: FormControl<string | null | undefined>,
		TypeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeRegistrationOutputFormGroup() {
		return new FormGroup<DescribeTypeRegistrationOutputFormProperties>({
			ProgressStatus: new FormControl<RegistrationStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			TypeArn: new FormControl<string | null | undefined>(undefined),
			TypeVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegistrationStatus { COMPLETE = 'COMPLETE', IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED' }

	export interface DetectStackDriftOutput {

		/** Required */
		StackDriftDetectionId: string;
	}
	export interface DetectStackDriftOutputFormProperties {

		/** Required */
		StackDriftDetectionId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackDriftOutputFormGroup() {
		return new FormGroup<DetectStackDriftOutputFormProperties>({
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectStackResourceDriftOutput {

		/** Required */
		StackResourceDrift: StackResourceDrift;
	}
	export interface DetectStackResourceDriftOutputFormProperties {
	}
	export function CreateDetectStackResourceDriftOutputFormGroup() {
		return new FormGroup<DetectStackResourceDriftOutputFormProperties>({
		});

	}

	export interface DetectStackSetDriftOutput {
		OperationId?: string;
	}
	export interface DetectStackSetDriftOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackSetDriftOutputFormGroup() {
		return new FormGroup<DetectStackSetDriftOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for a <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostOutput {
		Url?: string;
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
		StackPolicyBody?: string;
	}

	/** The output for the <a>GetStackPolicy</a> action. */
	export interface GetStackPolicyOutputFormProperties {
		StackPolicyBody: FormControl<string | null | undefined>,
	}
	export function CreateGetStackPolicyOutputFormGroup() {
		return new FormGroup<GetStackPolicyOutputFormProperties>({
			StackPolicyBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for <a>GetTemplate</a> action. */
	export interface GetTemplateOutput {
		TemplateBody?: string;
		StagesAvailable?: Array<TemplateStage>;
	}

	/** The output for <a>GetTemplate</a> action. */
	export interface GetTemplateOutputFormProperties {
		TemplateBody: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateOutputFormGroup() {
		return new FormGroup<GetTemplateOutputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TemplateStage { Original = 'Original', Processed = 'Processed' }


	/** The output for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryOutput {
		Parameters?: Array<ParameterDeclaration>;
		Description?: string;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string;
		ResourceTypes?: Array<string>;
		Version?: string;
		Metadata?: string;
		DeclaredTransforms?: Array<string>;
		ResourceIdentifierSummaries?: Array<ResourceIdentifierSummary>;
		Warnings?: Warnings;
	}

	/** The output for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryOutputFormProperties {
		Description: FormControl<string | null | undefined>,
		CapabilitiesReason: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateSummaryOutputFormGroup() {
		return new FormGroup<GetTemplateSummaryOutputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			CapabilitiesReason: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ParameterDeclaration data type. */
	export interface ParameterDeclaration {
		ParameterKey?: string;
		DefaultValue?: string;
		ParameterType?: string;
		NoEcho?: boolean | null;
		Description?: string;
		ParameterConstraints?: ParameterConstraints;
	}

	/** The ParameterDeclaration data type. */
	export interface ParameterDeclarationFormProperties {
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ParameterType: FormControl<string | null | undefined>,
		NoEcho: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateParameterDeclarationFormGroup() {
		return new FormGroup<ParameterDeclarationFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			ParameterType: new FormControl<string | null | undefined>(undefined),
			NoEcho: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, CloudFormation returns only the <code>AllowedValues</code> property. */
	export interface ParameterConstraints {
		AllowedValues?: Array<string>;
	}

	/** A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, CloudFormation returns only the <code>AllowedValues</code> property. */
	export interface ParameterConstraintsFormProperties {
	}
	export function CreateParameterConstraintsFormGroup() {
		return new FormGroup<ParameterConstraintsFormProperties>({
		});

	}


	/** Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type. */
	export interface ResourceIdentifierSummary {
		ResourceType?: string;
		LogicalResourceIds?: Array<string>;
		ResourceIdentifiers?: Array<string>;
	}

	/** Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type. */
	export interface ResourceIdentifierSummaryFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierSummaryFormGroup() {
		return new FormGroup<ResourceIdentifierSummaryFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains any warnings returned by the <code>GetTemplateSummary</code> API action. */
	export interface Warnings {
		UnrecognizedResourceTypes?: Array<string>;
	}

	/** Contains any warnings returned by the <code>GetTemplateSummary</code> API action. */
	export interface WarningsFormProperties {
	}
	export function CreateWarningsFormGroup() {
		return new FormGroup<WarningsFormProperties>({
		});

	}

	export interface ImportStacksToStackSetOutput {
		OperationId?: string;
	}
	export interface ImportStacksToStackSetOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateImportStacksToStackSetOutputFormGroup() {
		return new FormGroup<ImportStacksToStackSetOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StackNotFoundException {
	}
	export interface StackNotFoundExceptionFormProperties {
	}
	export function CreateStackNotFoundExceptionFormGroup() {
		return new FormGroup<StackNotFoundExceptionFormProperties>({
		});

	}


	/** The output for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsOutput {
		Summaries?: Array<ChangeSetSummary>;
		NextToken?: string;
	}

	/** The output for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsOutputFormGroup() {
		return new FormGroup<ListChangeSetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated. */
	export interface ChangeSetSummary {
		StackId?: string;
		StackName?: string;
		ChangeSetId?: string;
		ChangeSetName?: string;
		ExecutionStatus?: ExecutionStatus;
		Status?: ChangeSetStatus;
		StatusReason?: string;
		CreationTime?: Date;
		Description?: string;
		IncludeNestedStacks?: boolean | null;
		ParentChangeSetId?: string;
		RootChangeSetId?: string;
	}

	/** The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated. */
	export interface ChangeSetSummaryFormProperties {
		StackId: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		ExecutionStatus: FormControl<ExecutionStatus | null | undefined>,
		Status: FormControl<ChangeSetStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IncludeNestedStacks: FormControl<boolean | null | undefined>,
		ParentChangeSetId: FormControl<string | null | undefined>,
		RootChangeSetId: FormControl<string | null | undefined>,
	}
	export function CreateChangeSetSummaryFormGroup() {
		return new FormGroup<ChangeSetSummaryFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			ExecutionStatus: new FormControl<ExecutionStatus | null | undefined>(undefined),
			Status: new FormControl<ChangeSetStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IncludeNestedStacks: new FormControl<boolean | null | undefined>(undefined),
			ParentChangeSetId: new FormControl<string | null | undefined>(undefined),
			RootChangeSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportsOutput {
		Exports?: Array<Export>;
		NextToken?: string;
	}
	export interface ListExportsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsOutputFormGroup() {
		return new FormGroup<ListExportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>Export</code> structure describes the exported output values for a stack. */
	export interface Export {
		ExportingStackId?: string;
		Name?: string;
		Value?: string;
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
		NextToken?: string;
	}
	export interface ListImportsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsOutputFormGroup() {
		return new FormGroup<ListImportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStackInstanceResourceDriftsOutput {
		Summaries?: Array<StackInstanceResourceDriftsSummary>;
		NextToken?: string;
	}
	export interface ListStackInstanceResourceDriftsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstanceResourceDriftsOutputFormGroup() {
		return new FormGroup<ListStackInstanceResourceDriftsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure containing summary information about resource drifts for a stack instance. */
	export interface StackInstanceResourceDriftsSummary {

		/** Required */
		StackId: string;

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string;
		PhysicalResourceIdContext?: Array<PhysicalResourceIdContextKeyValuePair>;

		/** Required */
		ResourceType: string;
		PropertyDifferences?: Array<PropertyDifference>;

		/** Required */
		StackResourceDriftStatus: StackResourceDriftStatus;

		/** Required */
		Timestamp: Date;
	}

	/** The structure containing summary information about resource drifts for a stack instance. */
	export interface StackInstanceResourceDriftsSummaryFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftStatus | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackInstanceResourceDriftsSummaryFormGroup() {
		return new FormGroup<StackInstanceResourceDriftsSummaryFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackResourceDriftStatus: new FormControl<StackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStackInstancesOutput {
		Summaries?: Array<StackInstanceSummary>;
		NextToken?: string;
	}
	export interface ListStackInstancesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackInstancesOutputFormGroup() {
		return new FormGroup<ListStackInstancesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure that contains summary information about a stack instance. */
	export interface StackInstanceSummary {
		StackSetId?: string;
		Region?: string;
		Account?: string;
		StackId?: string;
		Status?: StackInstanceStatus;
		StatusReason?: string;
		StackInstanceStatus?: StackInstanceComprehensiveStatus;
		OrganizationalUnitId?: string;
		DriftStatus?: StackDriftStatus;
		LastDriftCheckTimestamp?: Date;
		LastOperationId?: string;
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
		DriftStatus: FormControl<StackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
		LastOperationId: FormControl<string | null | undefined>,
	}
	export function CreateStackInstanceSummaryFormGroup() {
		return new FormGroup<StackInstanceSummaryFormProperties>({
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Account: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackInstanceStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
			DriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastOperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filter to apply to stack instances */
	export interface StackInstanceFilter {
		Name?: StackInstanceFilterName;
		Values?: string;
	}

	/** The filter to apply to stack instances */
	export interface StackInstanceFilterFormProperties {
		Name: FormControl<StackInstanceFilterName | null | undefined>,
		Values: FormControl<string | null | undefined>,
	}
	export function CreateStackInstanceFilterFormGroup() {
		return new FormGroup<StackInstanceFilterFormProperties>({
			Name: new FormControl<StackInstanceFilterName | null | undefined>(undefined),
			Values: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackInstanceFilterName { DETAILED_STATUS = 'DETAILED_STATUS', LAST_OPERATION_ID = 'LAST_OPERATION_ID', DRIFT_STATUS = 'DRIFT_STATUS' }


	/** The output for a <a>ListStackResources</a> action. */
	export interface ListStackResourcesOutput {
		StackResourceSummaries?: Array<StackResourceSummary>;
		NextToken?: string;
	}

	/** The output for a <a>ListStackResources</a> action. */
	export interface ListStackResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackResourcesOutputFormGroup() {
		return new FormGroup<ListStackResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains high-level information about the specified stack resource. */
	export interface StackResourceSummary {

		/** Required */
		LogicalResourceId: string;
		PhysicalResourceId?: string;

		/** Required */
		ResourceType: string;

		/** Required */
		LastUpdatedTimestamp: Date;

		/** Required */
		ResourceStatus: ResourceStatus;
		ResourceStatusReason?: string;
		DriftInformation?: StackResourceDriftInformationSummary;
		ModuleInfo?: ModuleInfo;
	}

	/** Contains high-level information about the specified stack resource. */
	export interface StackResourceSummaryFormProperties {

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
		PhysicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		ResourceStatus: FormControl<ResourceStatus | null | undefined>,
		ResourceStatusReason: FormControl<string | null | undefined>,
	}
	export function CreateStackResourceSummaryFormGroup() {
		return new FormGroup<StackResourceSummaryFormProperties>({
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhysicalResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceStatus: new FormControl<ResourceStatus | null | undefined>(undefined, [Validators.required]),
			ResourceStatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationSummary {

		/** Required */
		StackResourceDriftStatus: StackResourceDriftStatus;
		LastCheckTimestamp?: Date;
	}

	/** Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration. */
	export interface StackResourceDriftInformationSummaryFormProperties {

		/** Required */
		StackResourceDriftStatus: FormControl<StackResourceDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackResourceDriftInformationSummaryFormGroup() {
		return new FormGroup<StackResourceDriftInformationSummaryFormProperties>({
			StackResourceDriftStatus: new FormControl<StackResourceDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStackSetOperationResultsOutput {
		Summaries?: Array<StackSetOperationResultSummary>;
		NextToken?: string;
	}
	export interface ListStackSetOperationResultsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetOperationResultsOutputFormGroup() {
		return new FormGroup<ListStackSetOperationResultsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure that contains information about a specified operation's results for a given account in a given Region. */
	export interface StackSetOperationResultSummary {
		Account?: string;
		Region?: string;
		Status?: StackSetOperationResultStatus;
		StatusReason?: string;
		AccountGateResult?: AccountGateResult;
		OrganizationalUnitId?: string;
	}

	/** The structure that contains information about a specified operation's results for a given account in a given Region. */
	export interface StackSetOperationResultSummaryFormProperties {
		Account: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Status: FormControl<StackSetOperationResultStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateStackSetOperationResultSummaryFormGroup() {
		return new FormGroup<StackSetOperationResultSummaryFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackSetOperationResultStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackSetOperationResultStatus { PENDING = 'PENDING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** <p>Structure that contains the results of the account gate function which CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
	export interface AccountGateResult {
		Status?: AccountGateStatus;
		StatusReason?: string;
	}

	/** <p>Structure that contains the results of the account gate function which CloudFormation invokes, if present, before proceeding with a stack set operation in an account and Region.</p> <p>For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and Region. CloudFormation invokes the function each time a stack set operation is requested for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and Region, and sets the stack set operation result status for that account and Region to <code>FAILED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p> */
	export interface AccountGateResultFormProperties {
		Status: FormControl<AccountGateStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateAccountGateResultFormGroup() {
		return new FormGroup<AccountGateResultFormProperties>({
			Status: new FormControl<AccountGateStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountGateStatus { SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', SKIPPED = 'SKIPPED' }


	/** The status that operation results are filtered by. */
	export interface OperationResultFilter {
		Name?: OperationResultFilterName;
		Values?: string;
	}

	/** The status that operation results are filtered by. */
	export interface OperationResultFilterFormProperties {
		Name: FormControl<OperationResultFilterName | null | undefined>,
		Values: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultFilterFormGroup() {
		return new FormGroup<OperationResultFilterFormProperties>({
			Name: new FormControl<OperationResultFilterName | null | undefined>(undefined),
			Values: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationResultFilterName { OPERATION_RESULT_STATUS = 'OPERATION_RESULT_STATUS' }

	export interface ListStackSetOperationsOutput {
		Summaries?: Array<StackSetOperationSummary>;
		NextToken?: string;
	}
	export interface ListStackSetOperationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetOperationsOutputFormGroup() {
		return new FormGroup<ListStackSetOperationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structures that contain summary information about the specified operation. */
	export interface StackSetOperationSummary {
		OperationId?: string;
		Action?: StackSetOperationAction;
		Status?: StackSetOperationStatus;
		CreationTimestamp?: Date;
		EndTimestamp?: Date;
		StatusReason?: string;
		StatusDetails?: StackSetOperationStatusDetails;
		OperationPreferences?: StackSetOperationPreferences;
	}

	/** The structures that contain summary information about the specified operation. */
	export interface StackSetOperationSummaryFormProperties {
		OperationId: FormControl<string | null | undefined>,
		Action: FormControl<StackSetOperationAction | null | undefined>,
		Status: FormControl<StackSetOperationStatus | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		EndTimestamp: FormControl<Date | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateStackSetOperationSummaryFormGroup() {
		return new FormGroup<StackSetOperationSummaryFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<StackSetOperationAction | null | undefined>(undefined),
			Status: new FormControl<StackSetOperationStatus | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStackSetsOutput {
		Summaries?: Array<StackSetSummary>;
		NextToken?: string;
	}
	export interface ListStackSetsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackSetsOutputFormGroup() {
		return new FormGroup<ListStackSetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structures that contain summary information about the specified stack set. */
	export interface StackSetSummary {
		StackSetName?: string;
		StackSetId?: string;
		Description?: string;
		Status?: StackSetStatus;
		AutoDeployment?: AutoDeployment;
		PermissionModel?: PermissionModels;
		DriftStatus?: StackDriftStatus;
		LastDriftCheckTimestamp?: Date;
		ManagedExecution?: ManagedExecution;
	}

	/** The structures that contain summary information about the specified stack set. */
	export interface StackSetSummaryFormProperties {
		StackSetName: FormControl<string | null | undefined>,
		StackSetId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,
		PermissionModel: FormControl<PermissionModels | null | undefined>,
		DriftStatus: FormControl<StackDriftStatus | null | undefined>,
		LastDriftCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackSetSummaryFormGroup() {
		return new FormGroup<StackSetSummaryFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined),
			StackSetId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
			PermissionModel: new FormControl<PermissionModels | null | undefined>(undefined),
			DriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined),
			LastDriftCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output for <a>ListStacks</a> action. */
	export interface ListStacksOutput {
		StackSummaries?: Array<StackSummary>;
		NextToken?: string;
	}

	/** The output for <a>ListStacks</a> action. */
	export interface ListStacksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStacksOutputFormGroup() {
		return new FormGroup<ListStacksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The StackSummary Data Type */
	export interface StackSummary {
		StackId?: string;

		/** Required */
		StackName: string;
		TemplateDescription?: string;

		/** Required */
		CreationTime: Date;
		LastUpdatedTime?: Date;
		DeletionTime?: Date;

		/** Required */
		StackStatus: StackStatus;
		StackStatusReason?: string;
		ParentId?: string;
		RootId?: string;
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
		StackStatus: FormControl<StackStatus | null | undefined>,
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
			StackStatus: new FormControl<StackStatus | null | undefined>(undefined, [Validators.required]),
			StackStatusReason: new FormControl<string | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
			RootId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationSummary {

		/** Required */
		StackDriftStatus: StackDriftStatus;
		LastCheckTimestamp?: Date;
	}

	/** Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. */
	export interface StackDriftInformationSummaryFormProperties {

		/** Required */
		StackDriftStatus: FormControl<StackDriftStatus | null | undefined>,
		LastCheckTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStackDriftInformationSummaryFormGroup() {
		return new FormGroup<StackDriftInformationSummaryFormProperties>({
			StackDriftStatus: new FormControl<StackDriftStatus | null | undefined>(undefined, [Validators.required]),
			LastCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTypeRegistrationsOutput {
		RegistrationTokenList?: Array<string>;
		NextToken?: string;
	}
	export interface ListTypeRegistrationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeRegistrationsOutputFormGroup() {
		return new FormGroup<ListTypeRegistrationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypeVersionsOutput {
		TypeVersionSummaries?: Array<TypeVersionSummary>;
		NextToken?: string;
	}
	export interface ListTypeVersionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeVersionsOutputFormGroup() {
		return new FormGroup<ListTypeVersionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a specific version of a CloudFormation extension. */
	export interface TypeVersionSummary {
		Type?: ThirdPartyType;
		TypeName?: string;
		VersionId?: string;
		IsDefaultVersion?: boolean | null;
		Arn?: string;
		TimeCreated?: Date;
		Description?: string;
		PublicVersionNumber?: string;
	}

	/** Contains summary information about a specific version of a CloudFormation extension. */
	export interface TypeVersionSummaryFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		TimeCreated: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PublicVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateTypeVersionSummaryFormGroup() {
		return new FormGroup<TypeVersionSummaryFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			TimeCreated: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			PublicVersionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypesOutput {
		TypeSummaries?: Array<TypeSummary>;
		NextToken?: string;
	}
	export interface ListTypesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesOutputFormGroup() {
		return new FormGroup<ListTypesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about the specified CloudFormation extension. */
	export interface TypeSummary {
		Type?: ThirdPartyType;
		TypeName?: string;
		DefaultVersionId?: string;
		TypeArn?: string;
		LastUpdated?: Date;
		Description?: string;
		PublisherId?: string;
		OriginalTypeName?: string;
		PublicVersionNumber?: string;
		LatestPublicVersion?: string;
		PublisherIdentity?: IdentityProvider;
		PublisherName?: string;
		IsActivated?: boolean | null;
	}

	/** Contains summary information about the specified CloudFormation extension. */
	export interface TypeSummaryFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		DefaultVersionId: FormControl<string | null | undefined>,
		TypeArn: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		OriginalTypeName: FormControl<string | null | undefined>,
		PublicVersionNumber: FormControl<string | null | undefined>,
		LatestPublicVersion: FormControl<string | null | undefined>,
		PublisherIdentity: FormControl<IdentityProvider | null | undefined>,
		PublisherName: FormControl<string | null | undefined>,
		IsActivated: FormControl<boolean | null | undefined>,
	}
	export function CreateTypeSummaryFormGroup() {
		return new FormGroup<TypeSummaryFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined),
			TypeArn: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			OriginalTypeName: new FormControl<string | null | undefined>(undefined),
			PublicVersionNumber: new FormControl<string | null | undefined>(undefined),
			LatestPublicVersion: new FormControl<string | null | undefined>(undefined),
			PublisherIdentity: new FormControl<IdentityProvider | null | undefined>(undefined),
			PublisherName: new FormControl<string | null | undefined>(undefined),
			IsActivated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Category { REGISTERED = 'REGISTERED', ACTIVATED = 'ACTIVATED', THIRD_PARTY = 'THIRD_PARTY', AWS_TYPES = 'AWS_TYPES' }

	export interface PublishTypeOutput {
		PublicTypeArn?: string;
	}
	export interface PublishTypeOutputFormProperties {
		PublicTypeArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishTypeOutputFormGroup() {
		return new FormGroup<PublishTypeOutputFormProperties>({
			PublicTypeArn: new FormControl<string | null | undefined>(undefined),
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

	export interface RegisterPublisherOutput {
		PublisherId?: string;
	}
	export interface RegisterPublisherOutputFormProperties {
		PublisherId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPublisherOutputFormGroup() {
		return new FormGroup<RegisterPublisherOutputFormProperties>({
			PublisherId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTypeOutput {
		RegistrationToken?: string;
	}
	export interface RegisterTypeOutputFormProperties {
		RegistrationToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTypeOutputFormGroup() {
		return new FormGroup<RegisterTypeOutputFormProperties>({
			RegistrationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RollbackStackOutput {
		StackId?: string;
	}
	export interface RollbackStackOutputFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackStackOutputFormGroup() {
		return new FormGroup<RollbackStackOutputFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetTypeConfigurationOutput {
		ConfigurationArn?: string;
	}
	export interface SetTypeConfigurationOutputFormProperties {
		ConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateSetTypeConfigurationOutputFormGroup() {
		return new FormGroup<SetTypeConfigurationOutputFormProperties>({
			ConfigurationArn: new FormControl<string | null | undefined>(undefined),
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

	export interface TestTypeOutput {
		TypeVersionArn?: string;
	}
	export interface TestTypeOutputFormProperties {
		TypeVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateTestTypeOutputFormGroup() {
		return new FormGroup<TestTypeOutputFormProperties>({
			TypeVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for an <a>UpdateStack</a> action. */
	export interface UpdateStackOutput {
		StackId?: string;
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
		OperationId?: string;
	}
	export interface UpdateStackInstancesOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackInstancesOutputFormGroup() {
		return new FormGroup<UpdateStackInstancesOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackSetOutput {
		OperationId?: string;
	}
	export interface UpdateStackSetOutputFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackSetOutputFormGroup() {
		return new FormGroup<UpdateStackSetOutputFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTerminationProtectionOutput {
		StackId?: string;
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
		Description?: string;
		Capabilities?: Array<Capability>;
		CapabilitiesReason?: string;
		DeclaredTransforms?: Array<string>;
	}

	/** The output for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateOutputFormProperties {
		Description: FormControl<string | null | undefined>,
		CapabilitiesReason: FormControl<string | null | undefined>,
	}
	export function CreateValidateTemplateOutputFormGroup() {
		return new FormGroup<ValidateTemplateOutputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			CapabilitiesReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TemplateParameter data type. */
	export interface TemplateParameter {
		ParameterKey?: string;
		DefaultValue?: string;
		NoEcho?: boolean | null;
		Description?: string;
	}

	/** The TemplateParameter data type. */
	export interface TemplateParameterFormProperties {
		ParameterKey: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		NoEcho: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTemplateParameterFormGroup() {
		return new FormGroup<TemplateParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			NoEcho: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivateOrganizationsAccessInput {
	}
	export interface ActivateOrganizationsAccessInputFormProperties {
	}
	export function CreateActivateOrganizationsAccessInputFormGroup() {
		return new FormGroup<ActivateOrganizationsAccessInputFormProperties>({
		});

	}

	export enum VersionBump { MAJOR = 'MAJOR', MINOR = 'MINOR' }

	export interface ActivateTypeInput {
		Type?: ThirdPartyType;
		PublicTypeArn?: string;
		PublisherId?: string;
		TypeName?: string;
		TypeNameAlias?: string;
		AutoUpdate?: boolean | null;
		LoggingConfig?: LoggingConfig;
		ExecutionRoleArn?: string;
		VersionBump?: VersionBump;
		MajorVersion?: number | null;
	}
	export interface ActivateTypeInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		PublicTypeArn: FormControl<string | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		TypeNameAlias: FormControl<string | null | undefined>,
		AutoUpdate: FormControl<boolean | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		VersionBump: FormControl<VersionBump | null | undefined>,
		MajorVersion: FormControl<number | null | undefined>,
	}
	export function CreateActivateTypeInputFormGroup() {
		return new FormGroup<ActivateTypeInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			PublicTypeArn: new FormControl<string | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			TypeNameAlias: new FormControl<string | null | undefined>(undefined),
			AutoUpdate: new FormControl<boolean | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			VersionBump: new FormControl<VersionBump | null | undefined>(undefined),
			MajorVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDescribeTypeConfigurationsInput {

		/** Required */
		TypeConfigurationIdentifiers: Array<TypeConfigurationIdentifier>;
	}
	export interface BatchDescribeTypeConfigurationsInputFormProperties {
	}
	export function CreateBatchDescribeTypeConfigurationsInputFormGroup() {
		return new FormGroup<BatchDescribeTypeConfigurationsInputFormProperties>({
		});

	}

	export enum CallAs { SELF = 'SELF', DELEGATED_ADMIN = 'DELEGATED_ADMIN' }


	/** The input for the <a>CancelUpdateStack</a> action. */
	export interface CancelUpdateStackInput {

		/** Required */
		StackName: string;
		ClientRequestToken?: string;
	}

	/** The input for the <a>CancelUpdateStack</a> action. */
	export interface CancelUpdateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelUpdateStackInputFormGroup() {
		return new FormGroup<CancelUpdateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeSetType { CREATE = 'CREATE', UPDATE = 'UPDATE', IMPORT = 'IMPORT' }


	/** The input for the <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackInput {

		/** Required */
		StackName: string;
		RoleARN?: string;
		ResourcesToSkip?: Array<string>;
		ClientRequestToken?: string;
	}

	/** The input for the <a>ContinueUpdateRollback</a> action. */
	export interface ContinueUpdateRollbackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateContinueUpdateRollbackInputFormGroup() {
		return new FormGroup<ContinueUpdateRollbackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetInput {

		/** Required */
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;
		RoleARN?: string;
		RollbackConfiguration?: RollbackConfiguration;
		NotificationARNs?: Array<string>;
		Tags?: Array<Tag>;

		/** Required */
		ChangeSetName: string;
		ClientToken?: string;
		Description?: string;
		ChangeSetType?: ChangeSetType;
		ResourcesToImport?: Array<ResourceToImport>;
		IncludeNestedStacks?: boolean | null;
		OnStackFailure?: OnStackFailure;
	}

	/** The input for the <a>CreateChangeSet</a> action. */
	export interface CreateChangeSetInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		ChangeSetName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ChangeSetType: FormControl<ChangeSetType | null | undefined>,
		IncludeNestedStacks: FormControl<boolean | null | undefined>,
		OnStackFailure: FormControl<OnStackFailure | null | undefined>,
	}
	export function CreateCreateChangeSetInputFormGroup() {
		return new FormGroup<CreateChangeSetInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ChangeSetType: new FormControl<ChangeSetType | null | undefined>(undefined),
			IncludeNestedStacks: new FormControl<boolean | null | undefined>(undefined),
			OnStackFailure: new FormControl<OnStackFailure | null | undefined>(undefined),
		});

	}

	export enum OnFailure { DO_NOTHING = 'DO_NOTHING', ROLLBACK = 'ROLLBACK', DELETE = 'DELETE' }


	/** The input for <a>CreateStack</a> action. */
	export interface CreateStackInput {

		/** Required */
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		Parameters?: Array<Parameter>;
		DisableRollback?: boolean | null;
		RollbackConfiguration?: RollbackConfiguration;
		TimeoutInMinutes?: number | null;
		NotificationARNs?: Array<string>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;
		RoleARN?: string;
		OnFailure?: OnStackFailure;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
		EnableTerminationProtection?: boolean | null;
		RetainExceptOnCreate?: boolean | null;
	}

	/** The input for <a>CreateStack</a> action. */
	export interface CreateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,
		TimeoutInMinutes: FormControl<number | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		OnFailure: FormControl<OnStackFailure | null | undefined>,
		StackPolicyBody: FormControl<string | null | undefined>,
		StackPolicyURL: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
		RetainExceptOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateStackInputFormGroup() {
		return new FormGroup<CreateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			TimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			OnFailure: new FormControl<OnStackFailure | null | undefined>(undefined),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
			RetainExceptOnCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;
		ParameterOverrides?: Array<Parameter>;
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
		CallAs?: CallAs;
	}
	export interface CreateStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateCreateStackInstancesInputFormGroup() {
		return new FormGroup<CreateStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface CreateStackSetInput {

		/** Required */
		StackSetName: string;
		Description?: string;
		TemplateBody?: string;
		TemplateURL?: string;
		StackId?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		PermissionModel?: PermissionModels;
		AutoDeployment?: AutoDeployment;
		CallAs?: CallAs;
		ClientRequestToken?: string;
		ManagedExecution?: ManagedExecution;
	}
	export interface CreateStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		AdministrationRoleARN: FormControl<string | null | undefined>,
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<PermissionModels | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackSetInputFormGroup() {
		return new FormGroup<CreateStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined),
			PermissionModel: new FormControl<PermissionModels | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeactivateOrganizationsAccessInput {
	}
	export interface DeactivateOrganizationsAccessInputFormProperties {
	}
	export function CreateDeactivateOrganizationsAccessInputFormGroup() {
		return new FormGroup<DeactivateOrganizationsAccessInputFormProperties>({
		});

	}

	export interface DeactivateTypeInput {
		TypeName?: string;
		Type?: ThirdPartyType;
		Arn?: string;
	}
	export interface DeactivateTypeInputFormProperties {
		TypeName: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateTypeInputFormGroup() {
		return new FormGroup<DeactivateTypeInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetInput {

		/** Required */
		ChangeSetName: string;
		StackName?: string;
	}

	/** The input for the <a>DeleteChangeSet</a> action. */
	export interface DeleteChangeSetInputFormProperties {

		/** Required */
		ChangeSetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChangeSetInputFormGroup() {
		return new FormGroup<DeleteChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for <a>DeleteStack</a> action. */
	export interface DeleteStackInput {

		/** Required */
		StackName: string;
		RetainResources?: Array<string>;
		RoleARN?: string;
		ClientRequestToken?: string;
	}

	/** The input for <a>DeleteStack</a> action. */
	export interface DeleteStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackInputFormGroup() {
		return new FormGroup<DeleteStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;
		OperationPreferences?: StackSetOperationPreferences;

		/** Required */
		RetainStacks: boolean;
		OperationId?: string;
		CallAs?: CallAs;
	}
	export interface DeleteStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		RetainStacks: FormControl<boolean | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDeleteStackInstancesInputFormGroup() {
		return new FormGroup<DeleteStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetainStacks: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface DeleteStackSetInput {

		/** Required */
		StackSetName: string;
		CallAs?: CallAs;
	}
	export interface DeleteStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDeleteStackSetInputFormGroup() {
		return new FormGroup<DeleteStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export enum RegistryType { RESOURCE = 'RESOURCE', MODULE = 'MODULE', HOOK = 'HOOK' }

	export interface DeregisterTypeInput {
		Arn?: string;
		Type?: ThirdPartyType;
		TypeName?: string;
		VersionId?: string;
	}
	export interface DeregisterTypeInputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTypeInputFormGroup() {
		return new FormGroup<DeregisterTypeInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsInput {
		NextToken?: string;
	}

	/** The input for the <a>DescribeAccountLimits</a> action. */
	export interface DescribeAccountLimitsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsInputFormGroup() {
		return new FormGroup<DescribeAccountLimitsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChangeSetHooksInput {

		/** Required */
		ChangeSetName: string;
		StackName?: string;
		NextToken?: string;
		LogicalResourceId?: string;
	}
	export interface DescribeChangeSetHooksInputFormProperties {

		/** Required */
		ChangeSetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetHooksInputFormGroup() {
		return new FormGroup<DescribeChangeSetHooksInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetInput {

		/** Required */
		ChangeSetName: string;
		StackName?: string;
		NextToken?: string;
	}

	/** The input for the <a>DescribeChangeSet</a> action. */
	export interface DescribeChangeSetInputFormProperties {

		/** Required */
		ChangeSetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetInputFormGroup() {
		return new FormGroup<DescribeChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationsAccessInput {
		CallAs?: CallAs;
	}
	export interface DescribeOrganizationsAccessInputFormProperties {
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDescribeOrganizationsAccessInputFormGroup() {
		return new FormGroup<DescribeOrganizationsAccessInputFormProperties>({
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface DescribePublisherInput {
		PublisherId?: string;
	}
	export interface DescribePublisherInputFormProperties {
		PublisherId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePublisherInputFormGroup() {
		return new FormGroup<DescribePublisherInputFormProperties>({
			PublisherId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStackDriftDetectionStatusInput {

		/** Required */
		StackDriftDetectionId: string;
	}
	export interface DescribeStackDriftDetectionStatusInputFormProperties {

		/** Required */
		StackDriftDetectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackDriftDetectionStatusInputFormGroup() {
		return new FormGroup<DescribeStackDriftDetectionStatusInputFormProperties>({
			StackDriftDetectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsInput {
		StackName?: string;
		NextToken?: string;
	}

	/** The input for <a>DescribeStackEvents</a> action. */
	export interface DescribeStackEventsInputFormProperties {
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackEventsInputFormGroup() {
		return new FormGroup<DescribeStackEventsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStackInstanceInput {

		/** Required */
		StackSetName: string;

		/** Required */
		StackInstanceAccount: string;

		/** Required */
		StackInstanceRegion: string;
		CallAs?: CallAs;
	}
	export interface DescribeStackInstanceInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		StackInstanceAccount: FormControl<string | null | undefined>,

		/** Required */
		StackInstanceRegion: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDescribeStackInstanceInputFormGroup() {
		return new FormGroup<DescribeStackInstanceInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackInstanceAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackInstanceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface DescribeStackResourceDriftsInput {

		/** Required */
		StackName: string;
		StackResourceDriftStatusFilters?: Array<StackResourceDriftStatus>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeStackResourceDriftsInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeStackResourceDriftsInputFormGroup() {
		return new FormGroup<DescribeStackResourceDriftsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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
		StackName?: string;
		LogicalResourceId?: string;
		PhysicalResourceId?: string;
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
		CallAs?: CallAs;
	}
	export interface DescribeStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDescribeStackSetInputFormGroup() {
		return new FormGroup<DescribeStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface DescribeStackSetOperationInput {

		/** Required */
		StackSetName: string;

		/** Required */
		OperationId: string;
		CallAs?: CallAs;
	}
	export interface DescribeStackSetOperationInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDescribeStackSetOperationInputFormGroup() {
		return new FormGroup<DescribeStackSetOperationInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}


	/** The input for <a>DescribeStacks</a> action. */
	export interface DescribeStacksInput {
		StackName?: string;
		NextToken?: string;
	}

	/** The input for <a>DescribeStacks</a> action. */
	export interface DescribeStacksInputFormProperties {
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStacksInputFormGroup() {
		return new FormGroup<DescribeStacksInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTypeInput {
		Type?: ThirdPartyType;
		TypeName?: string;
		Arn?: string;
		VersionId?: string;
		PublisherId?: string;
		PublicVersionNumber?: string;
	}
	export interface DescribeTypeInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		PublicVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeInputFormGroup() {
		return new FormGroup<DescribeTypeInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			PublicVersionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTypeRegistrationInput {

		/** Required */
		RegistrationToken: string;
	}
	export interface DescribeTypeRegistrationInputFormProperties {

		/** Required */
		RegistrationToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTypeRegistrationInputFormGroup() {
		return new FormGroup<DescribeTypeRegistrationInputFormProperties>({
			RegistrationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectStackDriftInput {

		/** Required */
		StackName: string;
		LogicalResourceIds?: Array<string>;
	}
	export interface DetectStackDriftInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackDriftInputFormGroup() {
		return new FormGroup<DetectStackDriftInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectStackResourceDriftInput {

		/** Required */
		StackName: string;

		/** Required */
		LogicalResourceId: string;
	}
	export interface DetectStackResourceDriftInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDetectStackResourceDriftInputFormGroup() {
		return new FormGroup<DetectStackResourceDriftInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectStackSetDriftInput {

		/** Required */
		StackSetName: string;
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
		CallAs?: CallAs;
	}
	export interface DetectStackSetDriftInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateDetectStackSetDriftInputFormGroup() {
		return new FormGroup<DetectStackSetDriftInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}


	/** The input for an <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostInput {
		TemplateBody?: string;
		TemplateURL?: string;
		Parameters?: Array<Parameter>;
	}

	/** The input for an <a>EstimateTemplateCost</a> action. */
	export interface EstimateTemplateCostInputFormProperties {
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
	}
	export function CreateEstimateTemplateCostInputFormGroup() {
		return new FormGroup<EstimateTemplateCostInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetInput {

		/** Required */
		ChangeSetName: string;
		StackName?: string;
		ClientRequestToken?: string;
		DisableRollback?: boolean | null;
		RetainExceptOnCreate?: boolean | null;
	}

	/** The input for the <a>ExecuteChangeSet</a> action. */
	export interface ExecuteChangeSetInputFormProperties {

		/** Required */
		ChangeSetName: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,
		RetainExceptOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateExecuteChangeSetInputFormGroup() {
		return new FormGroup<ExecuteChangeSetInputFormProperties>({
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			RetainExceptOnCreate: new FormControl<boolean | null | undefined>(undefined),
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
		StackName?: string;
		ChangeSetName?: string;
		TemplateStage?: TemplateStage;
	}

	/** The input for a <a>GetTemplate</a> action. */
	export interface GetTemplateInputFormProperties {
		StackName: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		TemplateStage: FormControl<TemplateStage | null | undefined>,
	}
	export function CreateGetTemplateInputFormGroup() {
		return new FormGroup<GetTemplateInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			TemplateStage: new FormControl<TemplateStage | null | undefined>(undefined),
		});

	}


	/** Options for the <code>GetTemplateSummary</code> API action. */
	export interface TemplateSummaryConfig {
		TreatUnrecognizedResourceTypesAsWarnings?: boolean | null;
	}

	/** Options for the <code>GetTemplateSummary</code> API action. */
	export interface TemplateSummaryConfigFormProperties {
		TreatUnrecognizedResourceTypesAsWarnings: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplateSummaryConfigFormGroup() {
		return new FormGroup<TemplateSummaryConfigFormProperties>({
			TreatUnrecognizedResourceTypesAsWarnings: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The input for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryInput {
		TemplateBody?: string;
		TemplateURL?: string;
		StackName?: string;
		StackSetName?: string;
		CallAs?: CallAs;
		TemplateSummaryConfig?: TemplateSummaryConfig;
	}

	/** The input for the <a>GetTemplateSummary</a> action. */
	export interface GetTemplateSummaryInputFormProperties {
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		StackName: FormControl<string | null | undefined>,
		StackSetName: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateGetTemplateSummaryInputFormGroup() {
		return new FormGroup<GetTemplateSummaryInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			StackName: new FormControl<string | null | undefined>(undefined),
			StackSetName: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export enum HandlerErrorCode { NotUpdatable = 'NotUpdatable', InvalidRequest = 'InvalidRequest', AccessDenied = 'AccessDenied', InvalidCredentials = 'InvalidCredentials', AlreadyExists = 'AlreadyExists', NotFound = 'NotFound', ResourceConflict = 'ResourceConflict', Throttling = 'Throttling', ServiceLimitExceeded = 'ServiceLimitExceeded', NotStabilized = 'NotStabilized', GeneralServiceException = 'GeneralServiceException', ServiceInternalError = 'ServiceInternalError', NetworkFailure = 'NetworkFailure', InternalFailure = 'InternalFailure', InvalidTypeConfiguration = 'InvalidTypeConfiguration', HandlerInternalFailure = 'HandlerInternalFailure', NonCompliant = 'NonCompliant', Unknown = 'Unknown', UnsupportedTarget = 'UnsupportedTarget' }

	export interface ImportStacksToStackSetInput {

		/** Required */
		StackSetName: string;
		StackIds?: Array<string>;
		StackIdsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
		CallAs?: CallAs;
	}
	export interface ImportStacksToStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		StackIdsUrl: FormControl<string | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateImportStacksToStackSetInputFormGroup() {
		return new FormGroup<ImportStacksToStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackIdsUrl: new FormControl<string | null | undefined>(undefined),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}


	/** The input for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsInput {

		/** Required */
		StackName: string;
		NextToken?: string;
	}

	/** The input for the <a>ListChangeSets</a> action. */
	export interface ListChangeSetsInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsInputFormGroup() {
		return new FormGroup<ListChangeSetsInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExportsInput {
		NextToken?: string;
	}
	export interface ListExportsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsInputFormGroup() {
		return new FormGroup<ListExportsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsInput {

		/** Required */
		ExportName: string;
		NextToken?: string;
	}
	export interface ListImportsInputFormProperties {

		/** Required */
		ExportName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsInputFormGroup() {
		return new FormGroup<ListImportsInputFormProperties>({
			ExportName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStackInstanceResourceDriftsInput {

		/** Required */
		StackSetName: string;
		NextToken?: string;
		MaxResults?: number | null;
		StackInstanceResourceDriftStatuses?: Array<StackResourceDriftStatus>;

		/** Required */
		StackInstanceAccount: string;

		/** Required */
		StackInstanceRegion: string;

		/** Required */
		OperationId: string;
		CallAs?: CallAs;
	}
	export interface ListStackInstanceResourceDriftsInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		StackInstanceAccount: FormControl<string | null | undefined>,

		/** Required */
		StackInstanceRegion: FormControl<string | null | undefined>,

		/** Required */
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateListStackInstanceResourceDriftsInputFormGroup() {
		return new FormGroup<ListStackInstanceResourceDriftsInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StackInstanceAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackInstanceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface ListStackInstancesInput {

		/** Required */
		StackSetName: string;
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<StackInstanceFilter>;
		StackInstanceAccount?: string;
		StackInstanceRegion?: string;
		CallAs?: CallAs;
	}
	export interface ListStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StackInstanceAccount: FormControl<string | null | undefined>,
		StackInstanceRegion: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateListStackInstancesInputFormGroup() {
		return new FormGroup<ListStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StackInstanceAccount: new FormControl<string | null | undefined>(undefined),
			StackInstanceRegion: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}


	/** The input for the <a>ListStackResource</a> action. */
	export interface ListStackResourcesInput {

		/** Required */
		StackName: string;
		NextToken?: string;
	}

	/** The input for the <a>ListStackResource</a> action. */
	export interface ListStackResourcesInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStackResourcesInputFormGroup() {
		return new FormGroup<ListStackResourcesInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStackSetOperationResultsInput {

		/** Required */
		StackSetName: string;

		/** Required */
		OperationId: string;
		NextToken?: string;
		MaxResults?: number | null;
		CallAs?: CallAs;
		Filters?: Array<OperationResultFilter>;
	}
	export interface ListStackSetOperationResultsInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		OperationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateListStackSetOperationResultsInputFormGroup() {
		return new FormGroup<ListStackSetOperationResultsInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface ListStackSetOperationsInput {

		/** Required */
		StackSetName: string;
		NextToken?: string;
		MaxResults?: number | null;
		CallAs?: CallAs;
	}
	export interface ListStackSetOperationsInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateListStackSetOperationsInputFormGroup() {
		return new FormGroup<ListStackSetOperationsInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface ListStackSetsInput {
		NextToken?: string;
		MaxResults?: number | null;
		Status?: StackSetStatus;
		CallAs?: CallAs;
	}
	export interface ListStackSetsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Status: FormControl<StackSetStatus | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateListStackSetsInputFormGroup() {
		return new FormGroup<ListStackSetsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<StackSetStatus | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}


	/** The input for <a>ListStacks</a> action. */
	export interface ListStacksInput {
		NextToken?: string;
		StackStatusFilter?: Array<StackStatus>;
	}

	/** The input for <a>ListStacks</a> action. */
	export interface ListStacksInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStacksInputFormGroup() {
		return new FormGroup<ListStacksInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypeRegistrationsInput {
		Type?: ThirdPartyType;
		TypeName?: string;
		TypeArn?: string;
		RegistrationStatusFilter?: RegistrationStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTypeRegistrationsInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		TypeArn: FormControl<string | null | undefined>,
		RegistrationStatusFilter: FormControl<RegistrationStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypeRegistrationsInputFormGroup() {
		return new FormGroup<ListTypeRegistrationsInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			TypeArn: new FormControl<string | null | undefined>(undefined),
			RegistrationStatusFilter: new FormControl<RegistrationStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypeVersionsInput {
		Type?: ThirdPartyType;
		TypeName?: string;
		Arn?: string;
		MaxResults?: number | null;
		NextToken?: string;
		DeprecatedStatus?: DeprecatedStatus;
		PublisherId?: string;
	}
	export interface ListTypeVersionsInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		DeprecatedStatus: FormControl<DeprecatedStatus | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
	}
	export function CreateListTypeVersionsInputFormGroup() {
		return new FormGroup<ListTypeVersionsInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			DeprecatedStatus: new FormControl<DeprecatedStatus | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter criteria to use in determining which extensions to return. */
	export interface TypeFilters {
		Category?: Category;
		PublisherId?: string;
		TypeNamePrefix?: string;
	}

	/** Filter criteria to use in determining which extensions to return. */
	export interface TypeFiltersFormProperties {
		Category: FormControl<Category | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		TypeNamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateTypeFiltersFormGroup() {
		return new FormGroup<TypeFiltersFormProperties>({
			Category: new FormControl<Category | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			TypeNamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypesInput {
		Visibility?: Visibility;
		ProvisioningType?: ProvisioningType;
		DeprecatedStatus?: DeprecatedStatus;
		Type?: ThirdPartyType;
		Filters?: TypeFilters;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTypesInputFormProperties {
		Visibility: FormControl<Visibility | null | undefined>,
		ProvisioningType: FormControl<ProvisioningType | null | undefined>,
		DeprecatedStatus: FormControl<DeprecatedStatus | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesInputFormGroup() {
		return new FormGroup<ListTypesInputFormProperties>({
			Visibility: new FormControl<Visibility | null | undefined>(undefined),
			ProvisioningType: new FormControl<ProvisioningType | null | undefined>(undefined),
			DeprecatedStatus: new FormControl<DeprecatedStatus | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationStatus { PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', SUCCESS = 'SUCCESS', FAILED = 'FAILED' }

	export interface PublishTypeInput {
		Type?: ThirdPartyType;
		Arn?: string;
		TypeName?: string;
		PublicVersionNumber?: string;
	}
	export interface PublishTypeInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		PublicVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreatePublishTypeInputFormGroup() {
		return new FormGroup<PublishTypeInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			PublicVersionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecordHandlerProgressInput {

		/** Required */
		BearerToken: string;

		/** Required */
		OperationStatus: OperationStatus;
		CurrentOperationStatus?: OperationStatus;
		StatusMessage?: string;
		ErrorCode?: HandlerErrorCode;
		ResourceModel?: string;
		ClientRequestToken?: string;
	}
	export interface RecordHandlerProgressInputFormProperties {

		/** Required */
		BearerToken: FormControl<string | null | undefined>,

		/** Required */
		OperationStatus: FormControl<OperationStatus | null | undefined>,
		CurrentOperationStatus: FormControl<OperationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<HandlerErrorCode | null | undefined>,
		ResourceModel: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateRecordHandlerProgressInputFormGroup() {
		return new FormGroup<RecordHandlerProgressInputFormProperties>({
			BearerToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationStatus: new FormControl<OperationStatus | null | undefined>(undefined, [Validators.required]),
			CurrentOperationStatus: new FormControl<OperationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<HandlerErrorCode | null | undefined>(undefined),
			ResourceModel: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterPublisherInput {
		AcceptTermsAndConditions?: boolean | null;
		ConnectionArn?: string;
	}
	export interface RegisterPublisherInputFormProperties {
		AcceptTermsAndConditions: FormControl<boolean | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPublisherInputFormGroup() {
		return new FormGroup<RegisterPublisherInputFormProperties>({
			AcceptTermsAndConditions: new FormControl<boolean | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTypeInput {
		Type?: ThirdPartyType;

		/** Required */
		TypeName: string;

		/** Required */
		SchemaHandlerPackage: string;
		LoggingConfig?: LoggingConfig;
		ExecutionRoleArn?: string;
		ClientRequestToken?: string;
	}
	export interface RegisterTypeInputFormProperties {
		Type: FormControl<ThirdPartyType | null | undefined>,

		/** Required */
		TypeName: FormControl<string | null | undefined>,

		/** Required */
		SchemaHandlerPackage: FormControl<string | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTypeInputFormGroup() {
		return new FormGroup<RegisterTypeInputFormProperties>({
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaHandlerPackage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceSignalStatus { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }

	export interface RollbackStackInput {

		/** Required */
		StackName: string;
		RoleARN?: string;
		ClientRequestToken?: string;
		RetainExceptOnCreate?: boolean | null;
	}
	export interface RollbackStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		RetainExceptOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateRollbackStackInputFormGroup() {
		return new FormGroup<RollbackStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			RetainExceptOnCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The input for the <a>SetStackPolicy</a> action. */
	export interface SetStackPolicyInput {

		/** Required */
		StackName: string;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
	}

	/** The input for the <a>SetStackPolicy</a> action. */
	export interface SetStackPolicyInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		StackPolicyBody: FormControl<string | null | undefined>,
		StackPolicyURL: FormControl<string | null | undefined>,
	}
	export function CreateSetStackPolicyInputFormGroup() {
		return new FormGroup<SetStackPolicyInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetTypeConfigurationInput {
		TypeArn?: string;

		/** Required */
		Configuration: string;
		ConfigurationAlias?: string;
		TypeName?: string;
		Type?: ThirdPartyType;
	}
	export interface SetTypeConfigurationInputFormProperties {
		TypeArn: FormControl<string | null | undefined>,

		/** Required */
		Configuration: FormControl<string | null | undefined>,
		ConfigurationAlias: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
	}
	export function CreateSetTypeConfigurationInputFormGroup() {
		return new FormGroup<SetTypeConfigurationInputFormProperties>({
			TypeArn: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationAlias: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
		});

	}

	export interface SetTypeDefaultVersionInput {
		Arn?: string;
		Type?: ThirdPartyType;
		TypeName?: string;
		VersionId?: string;
	}
	export interface SetTypeDefaultVersionInputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateSetTypeDefaultVersionInputFormGroup() {
		return new FormGroup<SetTypeDefaultVersionInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>SignalResource</a> action. */
	export interface SignalResourceInput {

		/** Required */
		StackName: string;

		/** Required */
		LogicalResourceId: string;

		/** Required */
		UniqueId: string;

		/** Required */
		Status: ResourceSignalStatus;
	}

	/** The input for the <a>SignalResource</a> action. */
	export interface SignalResourceInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,

		/** Required */
		LogicalResourceId: FormControl<string | null | undefined>,

		/** Required */
		UniqueId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<ResourceSignalStatus | null | undefined>,
	}
	export function CreateSignalResourceInputFormGroup() {
		return new FormGroup<SignalResourceInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogicalResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UniqueId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ResourceSignalStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopStackSetOperationInput {

		/** Required */
		StackSetName: string;

		/** Required */
		OperationId: string;
		CallAs?: CallAs;
	}
	export interface StopStackSetOperationInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,

		/** Required */
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateStopStackSetOperationInputFormGroup() {
		return new FormGroup<StopStackSetOperationInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface TestTypeInput {
		Arn?: string;
		Type?: ThirdPartyType;
		TypeName?: string;
		VersionId?: string;
		LogDeliveryBucket?: string;
	}
	export interface TestTypeInputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Type: FormControl<ThirdPartyType | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		LogDeliveryBucket: FormControl<string | null | undefined>,
	}
	export function CreateTestTypeInputFormGroup() {
		return new FormGroup<TestTypeInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ThirdPartyType | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			LogDeliveryBucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for an <a>UpdateStack</a> action. */
	export interface UpdateStackInput {

		/** Required */
		StackName: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean | null;
		StackPolicyDuringUpdateBody?: string;
		StackPolicyDuringUpdateURL?: string;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		ResourceTypes?: Array<string>;
		RoleARN?: string;
		RollbackConfiguration?: RollbackConfiguration;
		StackPolicyBody?: string;
		StackPolicyURL?: string;
		NotificationARNs?: Array<string>;
		Tags?: Array<Tag>;
		DisableRollback?: boolean | null;
		ClientRequestToken?: string;
		RetainExceptOnCreate?: boolean | null;
	}

	/** The input for an <a>UpdateStack</a> action. */
	export interface UpdateStackInputFormProperties {

		/** Required */
		StackName: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,
		StackPolicyDuringUpdateBody: FormControl<string | null | undefined>,
		StackPolicyDuringUpdateURL: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		StackPolicyBody: FormControl<string | null | undefined>,
		StackPolicyURL: FormControl<string | null | undefined>,
		DisableRollback: FormControl<boolean | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		RetainExceptOnCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateStackInputFormGroup() {
		return new FormGroup<UpdateStackInputFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			StackPolicyDuringUpdateBody: new FormControl<string | null | undefined>(undefined),
			StackPolicyDuringUpdateURL: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			StackPolicyBody: new FormControl<string | null | undefined>(undefined),
			StackPolicyURL: new FormControl<string | null | undefined>(undefined),
			DisableRollback: new FormControl<boolean | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			RetainExceptOnCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateStackInstancesInput {

		/** Required */
		StackSetName: string;
		Accounts?: Array<string>;
		DeploymentTargets?: DeploymentTargets;

		/** Required */
		Regions: Array<string>;
		ParameterOverrides?: Array<Parameter>;
		OperationPreferences?: StackSetOperationPreferences;
		OperationId?: string;
		CallAs?: CallAs;
	}
	export interface UpdateStackInstancesInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateUpdateStackInstancesInputFormGroup() {
		return new FormGroup<UpdateStackInstancesInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface UpdateStackSetInput {

		/** Required */
		StackSetName: string;
		Description?: string;
		TemplateBody?: string;
		TemplateURL?: string;
		UsePreviousTemplate?: boolean | null;
		Parameters?: Array<Parameter>;
		Capabilities?: Array<Capability>;
		Tags?: Array<Tag>;
		OperationPreferences?: StackSetOperationPreferences;
		AdministrationRoleARN?: string;
		ExecutionRoleName?: string;
		DeploymentTargets?: DeploymentTargets;
		PermissionModel?: PermissionModels;
		AutoDeployment?: AutoDeployment;
		OperationId?: string;
		Accounts?: Array<string>;
		Regions?: Array<string>;
		CallAs?: CallAs;
		ManagedExecution?: ManagedExecution;
	}
	export interface UpdateStackSetInputFormProperties {

		/** Required */
		StackSetName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
		UsePreviousTemplate: FormControl<boolean | null | undefined>,
		AdministrationRoleARN: FormControl<string | null | undefined>,
		ExecutionRoleName: FormControl<string | null | undefined>,
		PermissionModel: FormControl<PermissionModels | null | undefined>,
		OperationId: FormControl<string | null | undefined>,
		CallAs: FormControl<CallAs | null | undefined>,
	}
	export function CreateUpdateStackSetInputFormGroup() {
		return new FormGroup<UpdateStackSetInputFormProperties>({
			StackSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
			UsePreviousTemplate: new FormControl<boolean | null | undefined>(undefined),
			AdministrationRoleARN: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined),
			PermissionModel: new FormControl<PermissionModels | null | undefined>(undefined),
			OperationId: new FormControl<string | null | undefined>(undefined),
			CallAs: new FormControl<CallAs | null | undefined>(undefined),
		});

	}

	export interface UpdateTerminationProtectionInput {

		/** Required */
		EnableTerminationProtection: boolean;

		/** Required */
		StackName: string;
	}
	export interface UpdateTerminationProtectionInputFormProperties {

		/** Required */
		EnableTerminationProtection: FormControl<boolean | null | undefined>,

		/** Required */
		StackName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTerminationProtectionInputFormGroup() {
		return new FormGroup<UpdateTerminationProtectionInputFormProperties>({
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateInput {
		TemplateBody?: string;
		TemplateURL?: string;
	}

	/** The input for <a>ValidateTemplate</a> action. */
	export interface ValidateTemplateInputFormProperties {
		TemplateBody: FormControl<string | null | undefined>,
		TemplateURL: FormControl<string | null | undefined>,
	}
	export function CreateValidateTemplateInputFormGroup() {
		return new FormGroup<ValidateTemplateInputFormProperties>({
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			TemplateURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization.
		 * Get #Action=ActivateOrganizationsAccess
		 * @return {void} Success
		 */
		GET_ActivateOrganizationsAccess(Action: GET_ActivateOrganizationsAccessAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ActivateOrganizationsAccess?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Activates a public third-party extension, making it available for use in stack templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using public extensions</a> in the <i>CloudFormation User Guide</i>.</p> <p>Once you have activated a public third-party extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
		 * Get #Action=ActivateType
		 * @param {ThirdPartyType} Type <p>The extension type.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
		 * @param {string} PublicTypeArn <p>The Amazon Resource Name (ARN) of the public extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
		 *     Max length: 1024
		 * @param {string} PublisherId <p>The ID of the extension publisher.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
		 *     Min length: 1    Max length: 40
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} TypeNameAlias <p>An alias to assign to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.</p> <p>An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.</p>
		 *     Min length: 10    Max length: 204
		 * @param {boolean} AutoUpdate <p>Whether to automatically update the extension in this account and Region when a new <i>minor</i> version is published by the extension publisher. Major versions released by the publisher must be manually updated.</p> <p>The default is <code>true</code>.</p>
		 * @param {GET_ActivateTypeLoggingConfig} LoggingConfig Contains logging configuration information for an extension.
		 * @param {string} ExecutionRoleArn The name of the IAM execution role to use to activate the extension.
		 *     Min length: 1    Max length: 256
		 * @param {VersionBump} VersionBump <p>Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of <code>AutoUpdate</code>.</p> <ul> <li> <p> <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if one is available.</p> </li> <li> <p> <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if one is available.</p> </li> </ul>
		 * @param {number} MajorVersion <p>The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available <i>minor</i> version of the major version selected.</p> <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not both.</p>
		 *     Minimum: 1    Maximum: 100000
		 * @return {void} Success
		 */
		GET_ActivateType(Type: ThirdPartyType | null | undefined, PublicTypeArn: string | null | undefined, PublisherId: string | null | undefined, TypeName: string | null | undefined, TypeNameAlias: string | null | undefined, AutoUpdate: boolean | null | undefined, LoggingConfig: GET_ActivateTypeLoggingConfig | null | undefined, ExecutionRoleArn: string | null | undefined, VersionBump: VersionBump | null | undefined, MajorVersion: number | null | undefined, Action: GET_ActivateTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ActivateType?Type=' + Type + '&PublicTypeArn=' + (PublicTypeArn == null ? '' : encodeURIComponent(PublicTypeArn)) + '&PublisherId=' + (PublisherId == null ? '' : encodeURIComponent(PublisherId)) + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&TypeNameAlias=' + (TypeNameAlias == null ? '' : encodeURIComponent(TypeNameAlias)) + '&AutoUpdate=' + AutoUpdate + '&LoggingConfig=' + LoggingConfig + '&ExecutionRoleArn=' + (ExecutionRoleArn == null ? '' : encodeURIComponent(ExecutionRoleArn)) + '&VersionBump=' + VersionBump + '&MajorVersion=' + MajorVersion + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
		 * Get #Action=BatchDescribeTypeConfigurations
		 * @param {Array<TypeConfigurationIdentifier>} TypeConfigurationIdentifiers The list of identifiers for the desired extension configurations.
		 *     Minimum items: 1
		 * @return {void} Success
		 */
		GET_BatchDescribeTypeConfigurations(TypeConfigurationIdentifiers: Array<TypeConfigurationIdentifier>, Action: GET_BatchDescribeTypeConfigurationsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchDescribeTypeConfigurations?' + TypeConfigurationIdentifiers.map(z => `TypeConfigurationIdentifiers=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code> state.</p> </note>
		 * Get #Action=CancelUpdateStack
		 * @param {string} StackName <note> <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes all resources in the account.</p> <p>The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:</p> <p> <code>{ "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*" }] }</code> </p> </note> <p>The name or the unique stack ID that's associated with the stack.</p>
		 * @param {string} ClientRequestToken A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully received them.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_CancelUpdateStack(StackName: string, ClientRequestToken: string | null | undefined, Action: GET_CancelUpdateStackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CancelUpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you might have a stack that's rolling back to an old database instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
		 * Get #Action=ContinueUpdateRollback
		 * @param {string} StackName <p>The name or the unique ID of the stack that you want to continue rolling back.</p> <note> <p>Don't specify the name of a nested stack (a stack that was created by using the <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code> resource).</p> </note>
		 *     Min length: 1
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to roll back the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {Array<string>} ResourcesToSkip <p>A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason.</p> <important> <p>Specify this property to skip rolling back resources that CloudFormation can't successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. CloudFormation sets the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.</p> </important> <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources.</p> <p>To skip resources that are part of nested stacks, use the following format: <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or <code>DELETE_FAILED</code>.</p> <note> <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>.</p> </note>
		 * @param {string} ClientRequestToken A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that CloudFormation successfully received them.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_ContinueUpdateRollback(StackName: string, RoleARN: string | null | undefined, ResourcesToSkip: Array<string> | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_ContinueUpdateRollbackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ContinueUpdateRollback?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&' + ResourcesToSkip?.map(z => `ResourcesToSkip=${encodeURIComponent(z)}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that CloudFormation will create. If you create a change set for an existing stack, CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until you execute the change set.</p> <p>To create a change set for the entire stack hierarchy, set <code>IncludeNestedStacks</code> to <code>True</code>.</p>
		 * Get #Action=CreateChangeSet
		 * @param {string} StackName The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.
		 *     Min length: 1
		 * @param {string} TemplateBody <p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {boolean} UsePreviousTemplate Whether to reuse the template that's associated with the stack to create the change set.
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a>Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <note> <p>This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect.</p> <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p> </note> <p>For more information about macros, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom processing on templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling access with Identity and Access Management</a> in the CloudFormation User Guide.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {GET_CreateChangeSetRollbackConfiguration} RollbackConfiguration The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {Array<string>} NotificationARNs The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
		 *     Maximum items: 5
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
		 *     Maximum items: 50
		 * @param {string} ChangeSetName <p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters, and hyphens. It must start with an alphabetical character and can't exceed 128 characters.</p>
		 *     Min length: 1    Max length: 128
		 * @param {string} ClientToken A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that CloudFormation successfully received them.
		 *     Min length: 1    Max length: 128
		 * @param {string} Description A description to help you identify this change set.
		 *     Min length: 1    Max length: 1024
		 * @param {ChangeSetType} ChangeSetType <p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>. To create a change set for an import operation, specify <code>IMPORT</code>.</p> <p>If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995">REVIEW_IN_PROGRESS</a> state until you execute the change set.</p> <p>By default, CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>
		 * @param {Array<ResourceToImport>} ResourcesToImport The resources to import into your stack.
		 *     Maximum items: 200
		 * @param {boolean} IncludeNestedStacks Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to <code>False</code>. To include nested sets in a change set, specify <code>True</code>.
		 * @param {OnStackFailure} OnStackFailure <p>Determines what action will be taken if stack creation fails. If this parameter is specified, the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not be specified. This must be one of these values:</p> <ul> <li> <p> <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only valid when the <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the deletion of the stack fails, the status of the stack is <code>DELETE_FAILED</code>.</p> </li> <li> <p> <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent to specifying <code>true</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p> </li> <li> <p> <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying <code>false</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p> </li> </ul> <p>For nested stacks, when the <code>OnStackFailure</code> parameter is set to <code>DELETE</code> for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.</p>
		 * @return {void} Success
		 */
		GET_CreateChangeSet(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, RollbackConfiguration: GET_CreateChangeSetRollbackConfiguration | null | undefined, NotificationARNs: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, ChangeSetName: string, ClientToken: string | null | undefined, Description: string | null | undefined, ChangeSetType: ChangeSetType | null | undefined, ResourcesToImport: Array<ResourceToImport> | null | undefined, IncludeNestedStacks: boolean | null | undefined, OnStackFailure: OnStackFailure | null | undefined, Action: GET_CreateChangeSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateChangeSet?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + RollbackConfiguration + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&ClientToken=' + (ClientToken == null ? '' : encodeURIComponent(ClientToken)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&ChangeSetType=' + ChangeSetType + '&' + ResourcesToImport?.map(z => `ResourcesToImport=${z}`).join('&') + '&IncludeNestedStacks=' + IncludeNestedStacks + '&OnStackFailure=' + OnStackFailure + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a> operation.
		 * Get #Action=CreateStack
		 * @param {string} StackName <p>The name that's associated with the stack. The name must be unique in the Region in which you are creating the stack.</p> <note> <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters.</p> </note>
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter, but not both.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {boolean} DisableRollback <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p> <p>Default: <code>false</code> </p>
		 * @param {GET_CreateStackRollbackConfiguration} RollbackConfiguration The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {number} TimeoutInMinutes The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will be rolled back.
		 *     Minimum: 1
		 * @param {Array<string>} NotificationARNs The Amazon Simple Notification Service (Amazon SNS) topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).
		 *     Maximum items: 5
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create the stack directly from the template using this capability.</p> <important> <p>You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom processing on templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with for this create stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template resource types: <code>AWS::*</code> (for all Amazon Web Services resources), <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i> </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources of a particular Amazon Web Services service), and <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i> </code> (for a specific Amazon Web Services resource).</p> <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {OnStackFailure} OnFailure <p>Determines what action will be taken if stack creation fails. This must be one of: <code>DO_NOTHING</code>, <code>ROLLBACK</code>, or <code>DELETE</code>. You can specify either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p> <p>Default: <code>ROLLBACK</code> </p>
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in the <i>CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 *     Min length: 1    Max length: 16384
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 *     Min length: 1    Max length: 1350
		 * @param {Array<Tag>} Tags Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
		 *     Maximum items: 50
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry <code>CreateStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @param {boolean} EnableTerminationProtection <p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>. Termination protection is deactivated on stacks by default.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>
		 * @param {boolean} RetainExceptOnCreate This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.
		 * @return {void} Success
		 */
		GET_CreateStack(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, DisableRollback: boolean | null | undefined, RollbackConfiguration: GET_CreateStackRollbackConfiguration | null | undefined, TimeoutInMinutes: number | null | undefined, NotificationARNs: Array<string> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, OnFailure: OnStackFailure | null | undefined, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, Tags: Array<Tag> | null | undefined, ClientRequestToken: string | null | undefined, EnableTerminationProtection: boolean | null | undefined, RetainExceptOnCreate: boolean | null | undefined, Action: GET_CreateStackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&DisableRollback=' + DisableRollback + '&RollbackConfiguration=' + RollbackConfiguration + '&TimeoutInMinutes=' + TimeoutInMinutes + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&OnFailure=' + OnFailure + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&EnableTerminationProtection=' + EnableTerminationProtection + '&RetainExceptOnCreate=' + RetainExceptOnCreate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region. You must specify at least one value for either <code>Accounts</code> or <code>DeploymentTargets</code>, and you must specify at least one value for <code>Regions</code>.
		 * Get #Action=CreateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to create stack instances from.
		 * @param {Array<string>} Accounts <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_CreateStackInstancesDeploymentTargets} DeploymentTargets <p>[Service-managed permissions] The Organizations accounts for which to create stack instances in the specified Amazon Web Services Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts.
		 * @param {Array<Parameter>} ParameterOverrides <p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> <li> <p>To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.</p> </li> <li> <p>To leave all parameters set to their present values, don't specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>
		 * @param {GET_CreateStackInstancesOperationPreferences} OperationPreferences Preferences for how CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_CreateStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_CreateStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, ParameterOverrides: Array<Parameter> | null | undefined, OperationPreferences: GET_CreateStackInstancesOperationPreferences | null | undefined, OperationId: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_CreateStackInstancesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&' + ParameterOverrides?.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a stack set.
		 * Get #Action=CreateStackSet
		 * @param {string} StackSetName <p>The name to associate with the stack set. The name must be unique in the Region where you create your stack set.</p> <note> <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.</p> </note>
		 * @param {string} Description A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
		 *     Min length: 1    Max length: 1024
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {string} StackId The stack ID you are importing into a new stack set. Specify the Amazon Resource Name (ARN) of the stack.
		 * @param {Array<Parameter>} Parameters The input parameters for the stack set template.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for CloudFormation to create the stack set and related stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates reference macros. If your stack set template references one or more macros, you must create the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To create the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets with service-managed permissions don't currently support the use of macros in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail.</p> </important> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.</p> <p>If you specify tags as part of a <code>CreateStackSet</code> action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not created.</p>
		 *     Maximum items: 50
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Name (ARN) of the IAM role to use to create this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a> in the <i>CloudFormation User Guide</i>.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets.</p>
		 *     Min length: 1    Max length: 64
		 * @param {PermissionModels} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. By default, <code>SELF-MANAGED</code> is specified.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {GET_CreateStackSetAutoDeployment} AutoDeployment Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>To create a stack set with service-managed permissions while signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>To create a stack set with service-managed permissions while signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul> <p>Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators.</p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another stack set with the same name. You might retry <code>CreateStackSet</code> requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
		 *     Min length: 1    Max length: 128
		 * @param {GET_CreateStackSetManagedExecution} ManagedExecution Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
		 * @return {void} Success
		 */
		GET_CreateStackSet(StackSetName: string, Description: string | null | undefined, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, StackId: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, Tags: Array<Tag> | null | undefined, AdministrationRoleARN: string | null | undefined, ExecutionRoleName: string | null | undefined, PermissionModel: PermissionModels | null | undefined, AutoDeployment: GET_CreateStackSetAutoDeployment | null | undefined, CallAs: CallAs | null | undefined, ClientRequestToken: string | null | undefined, ManagedExecution: GET_CreateStackSetManagedExecution | null | undefined, Action: GET_CreateStackSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&StackId=' + (StackId == null ? '' : encodeURIComponent(StackId)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + AutoDeployment + '&CallAs=' + CallAs + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&ManagedExecution=' + ManagedExecution + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization.
		 * Get #Action=DeactivateOrganizationsAccess
		 * @return {void} Success
		 */
		GET_DeactivateOrganizationsAccess(Action: GET_DeactivateOrganizationsAccessAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeactivateOrganizationsAccess?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deactivates a public extension that was previously activated in this account and Region.</p> <p>Once deactivated, an extension can't be used in any CloudFormation operation. This includes stack update operations where the stack template includes the extension, even if no updates are being made to the extension. In addition, deactivated extensions aren't automatically updated if a new version of the extension is released.</p>
		 * Get #Action=DeactivateType
		 * @param {string} TypeName <p>The type name of the extension, in this account and Region. If you specified a type name alias when enabling the extension, use the type name alias.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {ThirdPartyType} Type <p>The extension type.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Max length: 1024
		 * @return {void} Success
		 */
		GET_DeactivateType(TypeName: string | null | undefined, Type: ThirdPartyType | null | undefined, Arn: string | null | undefined, Action: GET_DeactivateTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeactivateType?TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Type=' + Type + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, CloudFormation successfully deleted the change set.</p> <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that belong to the stacks hierarchy and will also delete all change sets for nested stacks with the status of <code>REVIEW_IN_PROGRESS</code>.</p>
		 * Get #Action=DeleteChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to delete.
		 *     Min length: 1    Max length: 1600
		 * @param {string} StackName If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's associated with it.
		 *     Min length: 1
		 * @return {void} Success
		 */
		GET_DeleteChangeSet(ChangeSetName: string, StackName: string | null | undefined, Action: GET_DeleteChangeSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the deletion has been completed successfully.
		 * Get #Action=DeleteStack
		 * @param {string} StackName The name or the unique stack ID that's associated with the stack.
		 * @param {Array<string>} RetainResources <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the retained resources.</p> <p>Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to delete the stack. CloudFormation uses the role's credentials to make calls on your behalf.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry <code>DeleteStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_DeleteStack(StackName: string, RetainResources: Array<string> | null | undefined, RoleARN: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_DeleteStackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + RetainResources?.map(z => `RetainResources=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.
		 * Get #Action=DeleteStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to delete stack instances for.
		 * @param {Array<string>} Accounts <p>[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances for.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_DeleteStackInstancesDeploymentTargets} DeploymentTargets <p>[Service-managed permissions] The Organizations accounts from which to delete stack instances.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The Amazon Web Services Regions where you want to delete stack set instances.
		 * @param {GET_DeleteStackInstancesOperationPreferences} OperationPreferences Preferences for how CloudFormation performs this stack set operation.
		 * @param {boolean} RetainStacks <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
		 * @param {string} OperationId <p>The unique identifier for this stack set operation.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_DeleteStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, OperationPreferences: GET_DeleteStackInstancesOperationPreferences | null | undefined, RetainStacks: boolean, OperationId: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_DeleteStackInstancesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&RetainStacks=' + RetainStacks + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a stack set. Before you can delete a stack set, all its member stack instances must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.
		 * Get #Action=DeleteStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteStackSet(StackSetName: string, CallAs: CallAs | null | undefined, Action: GET_DeleteStackSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations.</p> <p>To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry.</p> <p>You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated.</p> <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
		 * Get #Action=DeregisterType
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Max length: 1024
		 * @param {ThirdPartyType} Type <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} VersionId The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_DeregisterType(Arn: string | null | undefined, Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, VersionId: string | null | undefined, Action: GET_DeregisterTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeregisterType?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the <i>CloudFormation User Guide</i>.
		 * Get #Action=DescribeAccountLimits
		 * @param {string} NextToken A string that identifies the next page of limits that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(NextToken: string | null | undefined, Action: GET_DescribeAccountLimitsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.
		 * Get #Action=DescribeChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to describe.
		 *     Min length: 1    Max length: 1600
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
		 *     Min length: 1
		 * @param {string} NextToken A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_DescribeChangeSet(ChangeSetName: string, StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeChangeSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.
		 * Get #Action=DescribeChangeSetHooks
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want to describe.
		 *     Min length: 1    Max length: 1600
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe.
		 *     Min length: 1
		 * @param {string} NextToken A string, provided by the <code>DescribeChangeSetHooks</code> response output, that identifies the next page of information that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @param {string} LogicalResourceId If specified, lists only the hooks related to the specified <code>LogicalResourceId</code>.
		 * @return {void} Success
		 */
		GET_DescribeChangeSetHooks(ChangeSetName: string, StackName: string | null | undefined, NextToken: string | null | undefined, LogicalResourceId: string | null | undefined, Action: GET_DescribeChangeSetHooksAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeChangeSetHooks?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the account's <code>OrganizationAccess</code> status. This API can be called either by the management account or the delegated administrator by using the <code>CallAs</code> parameter. This API can also be called without the <code>CallAs</code> parameter by the management account.
		 * Get #Action=DescribeOrganizationsAccess
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DescribeOrganizationsAccess(CallAs: CallAs | null | undefined, Action: GET_DescribeOrganizationsAccessAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrganizationsAccess?CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a CloudFormation extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p> <p>For more information about registering as a publisher, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i> </p> </li> </ul>
		 * Get #Action=DescribePublisher
		 * @param {string} PublisherId <p>The ID of the extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p>
		 *     Min length: 1    Max length: 40
		 * @return {void} Success
		 */
		GET_DescribePublisher(PublisherId: string | null | undefined, Action: GET_DescribePublisherAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePublisher?PublisherId=' + (PublisherId == null ? '' : encodeURIComponent(PublisherId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
		 * Get #Action=DescribeStackDriftDetectionStatus
		 * @param {string} StackDriftDetectionId <p>The ID of the drift detection results of this operation.</p> <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.</p>
		 *     Min length: 1    Max length: 36
		 * @return {void} Success
		 */
		GET_DescribeStackDriftDetectionStatus(StackDriftDetectionId: string, Action: GET_DescribeStackDriftDetectionStatusAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackDriftDetectionStatus?StackDriftDetectionId=' + (StackDriftDetectionId == null ? '' : encodeURIComponent(StackDriftDetectionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
		 * Get #Action=DescribeStackEvents
		 * @param {string} StackName <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of events that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_DescribeStackEvents(StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeStackEventsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackEvents?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and Amazon Web Services Region.</p> <p>For a list of stack instances that are associated with a specific StackSet, use <a>ListStackInstances</a>.</p>
		 * Get #Action=DescribeStackInstance
		 * @param {string} StackSetName The name or the unique stack ID of the stack set that you want to get stack instance information for.
		 * @param {string} StackInstanceAccount The ID of an Amazon Web Services account that's associated with this stack instance.
		 * @param {string} StackInstanceRegion The name of a Region that's associated with this stack instance.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DescribeStackInstance(StackSetName: string, StackInstanceAccount: string, StackInstanceRegion: string, CallAs: CallAs | null | undefined, Action: GET_DescribeStackInstanceAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackInstance?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get #Action=DescribeStackResource
		 * @param {string} StackName <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResource(StackName: string, LogicalResourceId: string, Action: GET_DescribeStackResourceAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
		 * Get #Action=DescribeStackResourceDrifts
		 * @param {string} StackName The name of the stack for which you want drift information.
		 *     Min length: 1
		 * @param {Array<StackResourceDriftStatus>} StackResourceDriftStatusFilters <p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p> </li> </ul>
		 *     Minimum items: 1    Maximum items: 4
		 * @param {string} NextToken A string that identifies the next page of stack resource drift results.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @return {void} Success
		 */
		GET_DescribeStackResourceDrifts(StackName: string, StackResourceDriftStatusFilters: Array<StackResourceDriftStatus> | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_DescribeStackResourceDriftsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResourceDrifts?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + StackResourceDriftStatusFilters?.map(z => `StackResourceDriftStatusFilters=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
		 * Get #Action=DescribeStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you don't specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>
		 * @param {string} LogicalResourceId <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
		 * @param {string} PhysicalResourceId <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you don't specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>
		 * @return {void} Success
		 */
		GET_DescribeStackResources(StackName: string | null | undefined, LogicalResourceId: string | null | undefined, PhysicalResourceId: string | null | undefined, Action: GET_DescribeStackResourcesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&PhysicalResourceId=' + (PhysicalResourceId == null ? '' : encodeURIComponent(PhysicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the description of the specified StackSet.
		 * Get #Action=DescribeStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set whose description you want.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DescribeStackSet(StackSetName: string, CallAs: CallAs | null | undefined, Action: GET_DescribeStackSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the description of the specified StackSet operation.
		 * Get #Action=DescribeStackSetOperation
		 * @param {string} StackSetName The name or the unique stack ID of the stack set for the stack operation.
		 * @param {string} OperationId The unique ID of the stack set operation.
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DescribeStackSetOperation(StackSetName: string, OperationId: string, CallAs: CallAs | null | undefined, Action: GET_DescribeStackSetOperationAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p> </note>
		 * Get #Action=DescribeStacks
		 * @param {string} StackName <note> <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes all resources in the account. This requires <code>ListStacks</code> and <code>DescribeStacks</code> permissions.</p> <p>The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:</p> <p>{ "Version": "2012-10-17", "Statement": [{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*" }] }</p> </note> <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_DescribeStacks(StackName: string | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeStacksAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeStacks?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns detailed information about an extension that has been registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
		 * Get #Action=DescribeType
		 * @param {ThirdPartyType} Type <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Max length: 1024
		 * @param {string} VersionId <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
		 *     Min length: 1    Max length: 128
		 * @param {string} PublisherId <p>The publisher ID of the extension publisher.</p> <p>Extensions provided by Amazon Web Services are not assigned a publisher ID.</p>
		 *     Min length: 1    Max length: 40
		 * @param {string} PublicVersionNumber The version number of a public third-party extension.
		 *     Min length: 5
		 * @return {void} Success
		 */
		GET_DescribeType(Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, Arn: string | null | undefined, VersionId: string | null | undefined, PublisherId: string | null | undefined, PublicVersionNumber: string | null | undefined, Action: GET_DescribeTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&PublisherId=' + (PublisherId == null ? '' : encodeURIComponent(PublisherId)) + '&PublicVersionNumber=' + (PublicVersionNumber == null ? '' : encodeURIComponent(PublicVersionNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p> <p>When you initiate a registration request using <a>RegisterType</a>, you can then use <a>DescribeTypeRegistration</a> to monitor the progress of that registration request.</p> <p>Once the registration request has completed, use <a>DescribeType</a> to return detailed information about an extension.</p>
		 * Get #Action=DescribeTypeRegistration
		 * @param {string} RegistrationToken <p>The identifier for this registration request.</p> <p>This registration token is generated by CloudFormation when you initiate a registration request using <a>RegisterType</a>.</p>
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_DescribeTypeRegistration(RegistrationToken: string, Action: GET_DescribeTypeRegistrationAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTypeRegistration?RegistrationToken=' + (RegistrationToken == null ? '' : encodeURIComponent(RegistrationToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
		 * Get #Action=DetectStackDrift
		 * @param {string} StackName The name of the stack for which you want to detect drift.
		 *     Min length: 1
		 * @param {Array<string>} LogicalResourceIds The logical names of any resources you want to use as filters.
		 *     Minimum items: 1    Maximum items: 200
		 * @return {void} Success
		 */
		GET_DetectStackDrift(StackName: string, LogicalResourceIds: Array<string> | null | undefined, Action: GET_DetectStackDriftAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&' + LogicalResourceIds?.map(z => `LogicalResourceIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
		 * Get #Action=DetectStackResourceDrift
		 * @param {string} StackName The name of the stack to which the resource belongs.
		 *     Min length: 1
		 * @param {string} LogicalResourceId The logical name of the resource for which to return drift information.
		 * @return {void} Success
		 */
		GET_DetectStackResourceDrift(StackName: string, LogicalResourceId: string, Action: GET_DetectStackResourceDriftAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackResourceDrift?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack set, it performs drift detection on the stack associated with each stack instance in the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p> <p> <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set drift detection operation. Use this operation id with <a>DescribeStackSetOperation</a> to monitor the progress of the drift detection operation. The drift detection operation may take some time, depending on the number of stack instances included in the stack set, in addition to the number of resources included in each stack.</p> <p>Once the operation has completed, use the following actions to return drift information:</p> <ul> <li> <p>Use <a>DescribeStackSet</a> to return detailed information about the stack set, including detailed information about the last <i>completed</i> drift operation performed on the stack set. (Information about drift operations that are in progress isn't included.)</p> </li> <li> <p>Use <a>ListStackInstances</a> to return a list of stack instances belonging to the stack set, including the drift status and last drift time checked of each instance.</p> </li> <li> <p>Use <a>DescribeStackInstance</a> to return detailed information about a specific stack instance, including its drift status and last drift time checked.</p> </li> </ul> <p>For more information about performing a drift detection operation on a stack set, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a>.</p> <p>You can only run a single drift detection operation on a given stack set at one time.</p> <p>To stop a drift detection stack set operation, use <a>StopStackSetOperation</a>.</p>
		 * Get #Action=DetectStackSetDrift
		 * @param {string} StackSetName The name of the stack set on which to perform the drift detection operation.
		 * @param {GET_DetectStackSetDriftOperationPreferences} OperationPreferences <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
		 * @param {string} OperationId  <i>The ID of the stack set operation.</i> 
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DetectStackSetDrift(StackSetName: string, OperationPreferences: GET_DetectStackSetDriftOperationPreferences | null | undefined, OperationId: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_DetectStackSetDriftAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetectStackSetDrift?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
		 * Get #Action=EstimateTemplateCost
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.)</p> <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters.
		 * @return {void} Success
		 */
		GET_EstimateTemplateCost(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Action: GET_EstimateTemplateCostAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EstimateTemplateCost?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p> <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code> must have been set to <code>True</code>.</p>
		 * Get #Action=ExecuteChangeSet
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.
		 *     Min length: 1    Max length: 1600
		 * @param {string} StackName If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute.
		 *     Min length: 1
		 * @param {string} ClientRequestToken A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that CloudFormation successfully received them.
		 *     Min length: 1    Max length: 128
		 * @param {boolean} DisableRollback <p>Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation was specified.</p> <ul> <li> <p> <code>True</code> - if the stack creation fails, do nothing. This is equivalent to specifying <code>DO_NOTHING</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p> </li> <li> <p> <code>False</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying <code>ROLLBACK</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p> </li> </ul> <p>Default: <code>True</code> </p>
		 * @param {boolean} RetainExceptOnCreate This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.
		 * @return {void} Success
		 */
		GET_ExecuteChangeSet(ChangeSetName: string, StackName: string | null | undefined, ClientRequestToken: string | null | undefined, DisableRollback: boolean | null | undefined, RetainExceptOnCreate: boolean | null | undefined, Action: GET_ExecuteChangeSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExecuteChangeSet?ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&DisableRollback=' + DisableRollback + '&RetainExceptOnCreate=' + RetainExceptOnCreate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
		 * Get #Action=GetStackPolicy
		 * @param {string} StackName The name or unique stack ID that's associated with the stack whose policy you want to get.
		 * @return {void} Success
		 */
		GET_GetStackPolicy(StackName: string, Action: GET_GetStackPolicyAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been deleted.</p> <note> <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p> </note>
		 * Get #Action=GetTemplate
		 * @param {string} StackName <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} ChangeSetName The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated template. If you specify a name, you must also specify the <code>StackName</code>.
		 *     Min length: 1    Max length: 1600
		 * @param {TemplateStage} TemplateStage <p>For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify <code>Original</code>. To get the template after CloudFormation has processed all transforms, specify <code>Processed</code>.</p> <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same template. By default, CloudFormation specifies <code>Processed</code>.</p>
		 * @return {void} Success
		 */
		GET_GetTemplate(StackName: string | null | undefined, ChangeSetName: string | null | undefined, TemplateStage: TemplateStage | null | undefined, Action: GET_GetTemplateAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTemplate?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&ChangeSetName=' + (ChangeSetName == null ? '' : encodeURIComponent(ChangeSetName)) + '&TemplateStage=' + TemplateStage + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
		 * Get #Action=GetTemplateSummary
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {string} StackName <p>The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 *     Min length: 1
		 * @param {string} StackSetName <p>The name or unique ID of the stack set from which the stack was created.</p> <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @param {GET_GetTemplateSummaryTemplateSummaryConfig} TemplateSummaryConfig Specifies options for the <code>GetTemplateSummary</code> API action.
		 * @return {void} Success
		 */
		GET_GetTemplateSummary(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, StackName: string | null | undefined, StackSetName: string | null | undefined, CallAs: CallAs | null | undefined, TemplateSummaryConfig: GET_GetTemplateSummaryTemplateSummaryConfig | null | undefined, Action: GET_GetTemplateSummaryAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTemplateSummary?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&CallAs=' + CallAs + '&TemplateSummaryConfig=' + TemplateSummaryConfig + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Import existing stacks into a new stack sets. Use the stack import operation to import up to 10 stacks into a new stack set in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.
		 * Get #Action=ImportStacksToStackSet
		 * @param {string} StackSetName The name of the stack set. The name must be unique in the Region where you create your stack set.
		 * @param {Array<string>} StackIds <p>The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per stack set at a time.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
		 * @param {string} StackIdsUrl <p>The Amazon S3 URL which contains list of stack ids to be inputted.</p> <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
		 *     Min length: 1    Max length: 5120
		 * @param {Array<string>} OrganizationalUnitIds The list of OU ID's to which the stacks being imported has to be mapped as deployment target.
		 * @param {GET_ImportStacksToStackSetOperationPreferences} OperationPreferences <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
		 * @param {string} OperationId A unique, user defined, identifier for the stack set operation.
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>For service managed stack sets, specify <code>DELEGATED_ADMIN</code>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ImportStacksToStackSet(StackSetName: string, StackIds: Array<string> | null | undefined, StackIdsUrl: string | null | undefined, OrganizationalUnitIds: Array<string> | null | undefined, OperationPreferences: GET_ImportStacksToStackSetOperationPreferences | null | undefined, OperationId: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_ImportStacksToStackSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ImportStacksToStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + StackIds?.map(z => `StackIds=${encodeURIComponent(z)}`).join('&') + '&StackIdsUrl=' + (StackIdsUrl == null ? '' : encodeURIComponent(StackIdsUrl)) + '&' + OrganizationalUnitIds?.map(z => `OrganizationalUnitIds=${encodeURIComponent(z)}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.
		 * Get #Action=ListChangeSets
		 * @param {string} StackName The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
		 *     Min length: 1
		 * @param {string} NextToken A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of change sets that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListChangeSets(StackName: string, NextToken: string | null | undefined, Action: GET_ListChangeSetsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListChangeSets?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all exported output values in the account and Region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> Fn::ImportValue</a> function.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> CloudFormation export stack output values</a>.</p>
		 * Get #Action=ListExports
		 * @param {string} NextToken A string (provided by the <a>ListExports</a> response output) that identifies the next page of exported output values that you asked to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListExports(NextToken: string | null | undefined, Action: GET_ListExportsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListExports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>.</p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">Fn::ImportValue</a> function.</p>
		 * Get #Action=ListImports
		 * @param {string} ExportName The name of the exported output value. CloudFormation returns the stack names that are importing this value.
		 * @param {string} NextToken A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListImports(ExportName: string, NextToken: string | null | undefined, Action: GET_ListImportsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListImports?ExportName=' + (ExportName == null ? '' : encodeURIComponent(ExportName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns drift information for resources in a stack instance.</p> <note> <p> <code>ListStackInstanceResourceDrifts</code> returns drift information for the most recent drift detection operation. If an operation is in progress, it may only return partial results.</p> </note>
		 * Get #Action=ListStackInstanceResourceDrifts
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to list drifted resources for.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {Array<StackResourceDriftStatus>} StackInstanceResourceDriftStatuses <p>The resource drift status of the stack instance. </p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p> </li> </ul>
		 *     Minimum items: 1    Maximum items: 4
		 * @param {string} StackInstanceAccount The name of the Amazon Web Services account that you want to list resource drifts for.
		 * @param {string} StackInstanceRegion The name of the Region where you want to list resource drifts.
		 * @param {string} OperationId The unique ID of the drift operation.
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ListStackInstanceResourceDrifts(StackSetName: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, StackInstanceResourceDriftStatuses: Array<StackResourceDriftStatus> | null | undefined, StackInstanceAccount: string, StackInstanceRegion: string, OperationId: string, CallAs: CallAs | null | undefined, Action: GET_ListStackInstanceResourceDriftsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackInstanceResourceDrifts?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + StackInstanceResourceDriftStatuses?.map(z => `StackInstanceResourceDriftStatuses=${z}`).join('&') + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.
		 * Get #Action=ListStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to list stack instances for.
		 * @param {string} NextToken If the previous request didn't return all the remaining results, the response's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {Array<StackInstanceFilter>} Filters The filter to apply to stack instances
		 *     Maximum items: 3
		 * @param {string} StackInstanceAccount The name of the Amazon Web Services account that you want to list stack instances for.
		 * @param {string} StackInstanceRegion The name of the Region where you want to list stack instances.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ListStackInstances(StackSetName: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, Filters: Array<StackInstanceFilter> | null | undefined, StackInstanceAccount: string | null | undefined, StackInstanceRegion: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_ListStackInstancesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + Filters?.map(z => `Filters=${z}`).join('&') + '&StackInstanceAccount=' + (StackInstanceAccount == null ? '' : encodeURIComponent(StackInstanceAccount)) + '&StackInstanceRegion=' + (StackInstanceRegion == null ? '' : encodeURIComponent(StackInstanceRegion)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
		 * Get #Action=ListStackResources
		 * @param {string} StackName <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
		 * @param {string} NextToken A string that identifies the next page of stack resources that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListStackResources(StackName: string, NextToken: string | null | undefined, Action: GET_ListStackResourcesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackResources?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about the results of a stack set operation.
		 * Get #Action=ListStackSetOperationResults
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation results for.
		 * @param {string} OperationId The ID of the stack set operation.
		 *     Min length: 1    Max length: 128
		 * @param {string} NextToken If the previous request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @param {Array<OperationResultFilter>} Filters The filter to apply to operation results.
		 *     Maximum items: 1
		 * @return {void} Success
		 */
		GET_ListStackSetOperationResults(StackSetName: string, OperationId: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, CallAs: CallAs | null | undefined, Filters: Array<OperationResultFilter> | null | undefined, Action: GET_ListStackSetOperationResultsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSetOperationResults?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&CallAs=' + CallAs + '&' + Filters?.map(z => `Filters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about operations performed on a stack set.
		 * Get #Action=ListStackSetOperations
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to get operation summaries for.
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ListStackSetOperations(StackSetName: string, NextToken: string | null | undefined, MaxResults: number | null | undefined, CallAs: CallAs | null | undefined, Action: GET_ListStackSetOperationsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSetOperations?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns summary information about stack sets that are associated with the user.</p> <ul> <li> <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p> </li> <li> <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p> </li> </ul>
		 * Get #Action=ListStackSets
		 * @param {string} NextToken If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {StackSetStatus} Status The status of the stack sets that you want to get summary information about.
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ListStackSets(NextToken: string | null | undefined, MaxResults: number | null | undefined, Status: StackSetStatus | null | undefined, CallAs: CallAs | null | undefined, Action: GET_ListStackSetsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStackSets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
		 * Get #Action=ListStacks
		 * @param {string} NextToken A string that identifies the next page of stacks that you want to retrieve.
		 *     Min length: 1    Max length: 1024
		 * @param {Array<StackStatus>} StackStatusFilter Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.
		 * @return {void} Success
		 */
		GET_ListStacks(NextToken: string | null | undefined, StackStatusFilter: Array<StackStatus> | null | undefined, Action: GET_ListStacksAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListStacks?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&' + StackStatusFilter?.map(z => `StackStatusFilter=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of registration tokens for the specified extension(s).
		 * Get #Action=ListTypeRegistrations
		 * @param {ThirdPartyType} Type <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} TypeArn <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Max length: 1024
		 * @param {RegistrationStatus} RegistrationStatusFilter <p>The current status of the extension registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} NextToken If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListTypeRegistrations(Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, TypeArn: string | null | undefined, RegistrationStatusFilter: RegistrationStatus | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListTypeRegistrationsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypeRegistrations?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&TypeArn=' + (TypeArn == null ? '' : encodeURIComponent(TypeArn)) + '&RegistrationStatusFilter=' + RegistrationStatusFilter + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about the versions of an extension.
		 * Get #Action=ListTypeVersions
		 * @param {ThirdPartyType} Type <p>The kind of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Max length: 1024
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} NextToken If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @param {DeprecatedStatus} DeprecatedStatus <p>The deprecation status of the extension versions that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p> </li> <li> <p> <code>DEPRECATED</code>: The extension version has been deregistered and can no longer be used in CloudFormation operations.</p> </li> </ul> <p>The default is <code>LIVE</code>.</p>
		 * @param {string} PublisherId <p>The publisher ID of the extension publisher.</p> <p>Extensions published by Amazon aren't assigned a publisher ID.</p>
		 *     Min length: 1    Max length: 40
		 * @return {void} Success
		 */
		GET_ListTypeVersions(Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, Arn: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, DeprecatedStatus: DeprecatedStatus | null | undefined, PublisherId: string | null | undefined, Action: GET_ListTypeVersionsAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypeVersions?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&DeprecatedStatus=' + DeprecatedStatus + '&PublisherId=' + (PublisherId == null ? '' : encodeURIComponent(PublisherId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns summary information about extension that have been registered with CloudFormation.
		 * Get #Action=ListTypes
		 * @param {Visibility} Visibility <p>The scope at which the extensions are visible and usable in CloudFormation operations.</p> <p>Valid values include:</p> <ul> <li> <p> <code>PRIVATE</code>: Extensions that are visible and usable within this account and Region. This includes:</p> <ul> <li> <p>Private extensions you have registered in this account and Region.</p> </li> <li> <p>Public extensions that you have activated in this account and Region.</p> </li> </ul> </li> <li> <p> <code>PUBLIC</code>: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services, in addition to third-party publishers.</p> </li> </ul> <p>The default is <code>PRIVATE</code>.</p>
		 * @param {ProvisioningType} ProvisioningType <p>For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p> <p>Valid values include:</p> <ul> <li> <p> <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process updates to the type during stack update operations.</p> </li> <li> <p> <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.</p> </li> <li> <p> <code>NON_PROVISIONABLE</code>: The resource type doesn't include create, read, and delete handlers, and therefore can't actually be provisioned.</p> </li> </ul> <p>The default is <code>FULLY_MUTABLE</code>.</p>
		 * @param {DeprecatedStatus} DeprecatedStatus <p>The deprecation status of the extension that you want to get summary information about.</p> <p>Valid values include:</p> <ul> <li> <p> <code>LIVE</code>: The extension is registered for use in CloudFormation operations.</p> </li> <li> <p> <code>DEPRECATED</code>: The extension has been deregistered and can no longer be used in CloudFormation operations.</p> </li> </ul>
		 * @param {ThirdPartyType} Type The type of extension.
		 * @param {GET_ListTypesFilters} Filters <p>Filter criteria to use in determining which extensions to return.</p> <p>Filters must be compatible with <code>Visibility</code> to return valid results. For example, specifying <code>AWS_TYPES</code> for <code>Category</code> and <code>PRIVATE</code> for <code>Visibility</code> returns an empty list of types, but specifying <code>PUBLIC</code> for <code>Visibility</code> returns the desired list.</p>
		 * @param {number} MaxResults The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} NextToken If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ListTypes(Visibility: Visibility | null | undefined, ProvisioningType: ProvisioningType | null | undefined, DeprecatedStatus: DeprecatedStatus | null | undefined, Type: ThirdPartyType | null | undefined, Filters: GET_ListTypesFilters | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, Action: GET_ListTypesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTypes?Visibility=' + Visibility + '&ProvisioningType=' + ProvisioningType + '&DeprecatedStatus=' + DeprecatedStatus + '&Type=' + Type + '&Filters=' + Filters + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Publishes the specified extension to the CloudFormation registry as a public extension in this Region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
		 * Get #Action=PublishType
		 * @param {ThirdPartyType} Type <p>The type of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Max length: 1024
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} PublicVersionNumber <p>The version number to assign to this version of the extension.</p> <p>Use the following format, and adhere to semantic versioning when assigning a version number to your extension:</p> <p> <code>MAJOR.MINOR.PATCH</code> </p> <p>For more information, see <a href="https://semver.org/">Semantic Versioning 2.0.0</a>.</p> <p>If you don't specify a version number, CloudFormation increments the version number by one minor version release.</p> <p>You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be <code>1.0.0</code>.</p>
		 *     Min length: 5
		 * @return {void} Success
		 */
		GET_PublishType(Type: ThirdPartyType | null | undefined, Arn: string | null | undefined, TypeName: string | null | undefined, PublicVersionNumber: string | null | undefined, Action: GET_PublishTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PublishType?Type=' + Type + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&PublicVersionNumber=' + (PublicVersionNumber == null ? '' : encodeURIComponent(PublicVersionNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Reports progress of a resource handler to CloudFormation.</p> <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>
		 * Get #Action=RecordHandlerProgress
		 * @param {string} BearerToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 *     Min length: 1    Max length: 128
		 * @param {OperationStatus} OperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {OperationStatus} CurrentOperationStatus Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} StatusMessage Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 *     Max length: 1024
		 * @param {HandlerErrorCode} ErrorCode Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 * @param {string} ResourceModel Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 *     Min length: 1    Max length: 16384
		 * @param {string} ClientRequestToken Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_RecordHandlerProgress(BearerToken: string, OperationStatus: OperationStatus, CurrentOperationStatus: OperationStatus | null | undefined, StatusMessage: string | null | undefined, ErrorCode: HandlerErrorCode | null | undefined, ResourceModel: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_RecordHandlerProgressAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RecordHandlerProgress?BearerToken=' + (BearerToken == null ? '' : encodeURIComponent(BearerToken)) + '&OperationStatus=' + OperationStatus + '&CurrentOperationStatus=' + CurrentOperationStatus + '&StatusMessage=' + (StatusMessage == null ? '' : encodeURIComponent(StatusMessage)) + '&ErrorCode=' + ErrorCode + '&ResourceModel=' + (ResourceModel == null ? '' : encodeURIComponent(ResourceModel)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users. This publisher ID applies to your account in all Amazon Web Services Regions.</p> <p>For information about requirements for registering as a public extension publisher, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p/>
		 * Get #Action=RegisterPublisher
		 * @param {boolean} AcceptTermsAndConditions <p>Whether you accept the <a href="https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf">Terms and Conditions</a> for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.</p> <p>The default is <code>false</code>.</p>
		 * @param {string} ConnectionArn <p>If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p>
		 *     Min length: 1    Max length: 256
		 * @return {void} Success
		 */
		GET_RegisterPublisher(AcceptTermsAndConditions: boolean | null | undefined, ConnectionArn: string | null | undefined, Action: GET_RegisterPublisherAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RegisterPublisher?AcceptTermsAndConditions=' + AcceptTermsAndConditions + '&ConnectionArn=' + (ConnectionArn == null ? '' : encodeURIComponent(ConnectionArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p> <ul> <li> <p>Validating the extension schema.</p> </li> <li> <p>Determining which handlers, if any, have been specified for the extension.</p> </li> <li> <p>Making the extension available for use in your account.</p> </li> </ul> <p>For more information about how to develop extensions and ready them for registration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p> <p>Once you have initiated a registration request using <a>RegisterType</a>, you can use <a>DescribeTypeRegistration</a> to monitor the progress of the registration request.</p> <p>Once you have registered a private extension in your account and Region, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
		 * Get #Action=RegisterType
		 * @param {ThirdPartyType} Type The kind of extension.
		 * @param {string} TypeName <p>The name of the extension being registered.</p> <p>We suggest that extension names adhere to the following patterns:</p> <ul> <li> <p>For resource types, <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p> </li> <li> <p>For modules, <i>company_or_organization</i>::<i>service</i>::<i>type</i>::MODULE.</p> </li> <li> <p>For hooks, <i>MyCompany</i>::<i>Testing</i>::<i>MyTestHook</i>.</p> </li> </ul> <note> <p>The following organization namespaces are reserved and can't be used in your extension names:</p> <ul> <li> <p> <code>Alexa</code> </p> </li> <li> <p> <code>AMZN</code> </p> </li> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>AWS</code> </p> </li> <li> <p> <code>Custom</code> </p> </li> <li> <p> <code>Dev</code> </p> </li> </ul> </note>
		 *     Min length: 10    Max length: 204
		 * @param {string} SchemaHandlerPackage <p>A URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register.</p> <p>For information about generating a schema handler package for the extension you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the <i>CloudFormation CLI User Guide</i>.</p> <note> <p>The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs to have <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> permissions for the schema handler package. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a> in the <i>Identity and Access Management User Guide</i>.</p> </note>
		 *     Min length: 1    Max length: 4096
		 * @param {GET_RegisterTypeLoggingConfig} LoggingConfig Specifies logging configuration information for an extension.
		 * @param {string} ExecutionRoleArn <p>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension.</p> <p>For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principle (<code>resources.cloudformation.amazonaws.com</code>). For more information about adding trust relationships, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy">Modifying a role trust policy</a> in the <i>Identity and Access Management User Guide</i>.</p> <p>If your extension calls Amazon Web Services APIs in any of its handlers, you must create an <i> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a> </i> that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.</p>
		 *     Min length: 1    Max length: 256
		 * @param {string} ClientRequestToken A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_RegisterType(Type: ThirdPartyType | null | undefined, TypeName: string, SchemaHandlerPackage: string, LoggingConfig: GET_RegisterTypeLoggingConfig | null | undefined, ExecutionRoleArn: string | null | undefined, ClientRequestToken: string | null | undefined, Action: GET_RegisterTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RegisterType?Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&SchemaHandlerPackage=' + (SchemaHandlerPackage == null ? '' : encodeURIComponent(SchemaHandlerPackage)) + '&LoggingConfig=' + LoggingConfig + '&ExecutionRoleArn=' + (ExecutionRoleArn == null ? '' : encodeURIComponent(ExecutionRoleArn)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> operation.</p> <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p> <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p> <ul> <li> <p> <code>CREATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_COMPLETE</code> </p> </li> <li> <p> <code>UPDATE_ROLLBACK_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_COMPLETE</code> </p> </li> <li> <p> <code>IMPORT_ROLLBACK_COMPLETE</code> </p> </li> </ul>
		 * Get #Action=RollbackStack
		 * @param {string} StackName The name that's associated with the stack.
		 *     Min length: 1
		 * @param {string} RoleARN The Amazon Resource Name (ARN) of an Identity and Access Management role that CloudFormation assumes to rollback the stack.
		 *     Min length: 20    Max length: 2048
		 * @param {string} ClientRequestToken A unique identifier for this <code>RollbackStack</code> request.
		 *     Min length: 1    Max length: 128
		 * @param {boolean} RetainExceptOnCreate This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.
		 * @return {void} Success
		 */
		GET_RollbackStack(StackName: string, RoleARN: string | null | undefined, ClientRequestToken: string | null | undefined, RetainExceptOnCreate: boolean | null | undefined, Action: GET_RollbackStackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RollbackStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&RetainExceptOnCreate=' + RetainExceptOnCreate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets a stack policy for a specified stack.
		 * Get #Action=SetStackPolicy
		 * @param {string} StackName The name or unique stack ID that you want to associate a policy with.
		 * @param {string} StackPolicyBody Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent updates to stack resources</a> in the CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 *     Min length: 1    Max length: 16384
		 * @param {string} StackPolicyURL Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
		 *     Min length: 1    Max length: 1350
		 * @return {void} Success
		 */
		GET_SetStackPolicy(StackName: string, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, Action: GET_SetStackPolicyAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetStackPolicy?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Specifies the configuration data for a registered CloudFormation extension, in the given account and Region.</p> <p>To view the current configuration data for an extension, refer to the <code>ConfigurationSchema</code> element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p> <important> <p>It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more details on dynamic references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify template values</a> in the <i>CloudFormation User Guide</i>.</p> </important>
		 * Get #Action=SetTypeConfiguration
		 * @param {string} TypeArn <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p> <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and Region. For private extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and Region.</p> <p>Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an extension, but not for a specific extension version.</p>
		 *     Max length: 1024
		 * @param {string} Configuration <p>The configuration data for the extension, in this account and Region.</p> <p>The configuration data must be formatted as JSON, and validate against the schema returned in the <code>ConfigurationSchema</code> response element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration">Defining account-level configuration data for an extension</a> in the <i>CloudFormation CLI User Guide</i>.</p>
		 *     Min length: 1    Max length: 204800
		 * @param {string} ConfigurationAlias <p>An alias by which to refer to this extension configuration data.</p> <p>Conditional: Specifying a configuration alias is required when setting a configuration for a resource type extension.</p>
		 *     Min length: 1    Max length: 256
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and <code>TypeName</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {ThirdPartyType} Type <p>The type of extension.</p> <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and <code>TypeName</code>.</p>
		 * @return {void} Success
		 */
		GET_SetTypeConfiguration(TypeArn: string | null | undefined, Configuration: string, ConfigurationAlias: string | null | undefined, TypeName: string | null | undefined, Type: ThirdPartyType | null | undefined, Action: GET_SetTypeConfigurationAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetTypeConfiguration?TypeArn=' + (TypeArn == null ? '' : encodeURIComponent(TypeArn)) + '&Configuration=' + (Configuration == null ? '' : encodeURIComponent(Configuration)) + '&ConfigurationAlias=' + (ConfigurationAlias == null ? '' : encodeURIComponent(ConfigurationAlias)) + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&Type=' + Type + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.
		 * Get #Action=SetTypeDefaultVersion
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Max length: 1024
		 * @param {ThirdPartyType} Type <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 * @param {string} TypeName <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} VersionId The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		GET_SetTypeDefaultVersion(Arn: string | null | undefined, Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, VersionId: string | null | undefined, Action: GET_SetTypeDefaultVersionAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetTypeDefaultVersion?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a signal to the specified resource with a success or failure status. You can use the <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
		 * Get #Action=SignalResource
		 * @param {string} StackName The stack name or unique stack ID that includes the resource that you want to signal.
		 *     Min length: 1
		 * @param {string} LogicalResourceId The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
		 * @param {string} UniqueId A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
		 *     Min length: 1    Max length: 64
		 * @param {ResourceSignalStatus} Status The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.
		 * @return {void} Success
		 */
		GET_SignalResource(StackName: string, LogicalResourceId: string, UniqueId: string, Status: ResourceSignalStatus, Action: GET_SignalResourceAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SignalResource?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&LogicalResourceId=' + (LogicalResourceId == null ? '' : encodeURIComponent(LogicalResourceId)) + '&UniqueId=' + (UniqueId == null ? '' : encodeURIComponent(UniqueId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an in-progress operation on a stack set and its associated stack instances. StackSets will cancel all the unstarted stack instance deployments and wait for those are in-progress to complete.
		 * Get #Action=StopStackSetOperation
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to stop the operation for.
		 * @param {string} OperationId The ID of the stack operation.
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_StopStackSetOperation(StackSetName: string, OperationId: string, CallAs: CallAs | null | undefined, Action: GET_StopStackSetOperationAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StopStackSetOperation?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Tests a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry.</p> <ul> <li> <p>For resource types, this includes passing all contracts tests defined for the type.</p> </li> <li> <p>For modules, this includes determining if the module's model meets all necessary requirements.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.</p> <p>To perform testing, CloudFormation assumes the execution role specified when the type was registered. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p> <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for the extension.</p> <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>.</p>
		 * Get #Action=TestType
		 * @param {string} Arn <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Max length: 1024
		 * @param {ThirdPartyType} Type <p>The type of the extension to test.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 * @param {string} TypeName <p>The name of the extension to test.</p> <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
		 *     Min length: 10    Max length: 204
		 * @param {string} VersionId <p>The version of the extension to test.</p> <p>You can specify the version id with either <code>Arn</code>, or with <code>TypeName</code> and <code>Type</code>.</p> <p>If you don't specify a version, CloudFormation uses the default version of the extension in this account and Region for testing.</p>
		 *     Min length: 1    Max length: 128
		 * @param {string} LogDeliveryBucket <p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p> <p>CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of <code>PASSED</code> or <code>FAILED</code>.</p> <p>The user calling <code>TestType</code> must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:</p> <ul> <li> <p> <code>GetObject</code> </p> </li> <li> <p> <code>PutObject</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
		 *     Min length: 3    Max length: 63
		 * @return {void} Success
		 */
		GET_TestType(Arn: string | null | undefined, Type: ThirdPartyType | null | undefined, TypeName: string | null | undefined, VersionId: string | null | undefined, LogDeliveryBucket: string | null | undefined, Action: GET_TestTypeAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TestType?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Type=' + Type + '&TypeName=' + (TypeName == null ? '' : encodeURIComponent(TypeName)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&LogDeliveryBucket=' + (LogDeliveryBucket == null ? '' : encodeURIComponent(LogDeliveryBucket)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
		 * Get #Action=UpdateStack
		 * @param {string} StackName The name or unique stack ID of the stack to update.
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.)</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {boolean} UsePreviousTemplate <p>Reuse the existing template that is associated with the stack that you are updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>, <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
		 * @param {string} StackPolicyDuringUpdateBody <p>Structure containing the temporary overriding stack policy body. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 *     Min length: 1    Max length: 16384
		 * @param {string} StackPolicyDuringUpdateURL <p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p> <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
		 *     Min length: 1    Max length: 1350
		 * @param {Array<Parameter>} Parameters A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p> <p>If you want to update a stack from a stack template that contains macros <i>and</i> nested stacks, you must update the stack directly from the template using this capability.</p> <important> <p>You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs.</p> <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
		 * @param {Array<string>} ResourceTypes <p>The template resource types that you have permissions to work with for this update stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
		 * @param {string} RoleARN <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to update the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {GET_UpdateStackRollbackConfiguration} RollbackConfiguration The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
		 * @param {string} StackPolicyBody <p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 *     Min length: 1    Max length: 16384
		 * @param {string} StackPolicyURL <p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p> <p>You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.</p>
		 *     Min length: 1    Max length: 1350
		 * @param {Array<string>} NotificationARNs Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack. Specify an empty list to remove all notification topics.
		 *     Maximum items: 5
		 * @param {Array<Tag>} Tags <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.</p> <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.</p>
		 *     Maximum items: 50
		 * @param {boolean} DisableRollback <p>Preserve the state of previously provisioned resources when an operation fails.</p> <p>Default: <code>False</code> </p>
		 * @param {string} ClientRequestToken <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to update a stack with the same name. You might retry <code>UpdateStack</code> requests to ensure that CloudFormation successfully received them.</p> <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a <code>CreateStack</code> operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p> <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @param {boolean} RetainExceptOnCreate This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"> DeletionPolicy</a> attribute.
		 * @return {void} Success
		 */
		GET_UpdateStack(StackName: string, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, StackPolicyDuringUpdateBody: string | null | undefined, StackPolicyDuringUpdateURL: string | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, ResourceTypes: Array<string> | null | undefined, RoleARN: string | null | undefined, RollbackConfiguration: GET_UpdateStackRollbackConfiguration | null | undefined, StackPolicyBody: string | null | undefined, StackPolicyURL: string | null | undefined, NotificationARNs: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, DisableRollback: boolean | null | undefined, ClientRequestToken: string | null | undefined, RetainExceptOnCreate: boolean | null | undefined, Action: GET_UpdateStackAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStack?StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&StackPolicyDuringUpdateBody=' + (StackPolicyDuringUpdateBody == null ? '' : encodeURIComponent(StackPolicyDuringUpdateBody)) + '&StackPolicyDuringUpdateURL=' + (StackPolicyDuringUpdateURL == null ? '' : encodeURIComponent(StackPolicyDuringUpdateURL)) + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + ResourceTypes?.map(z => `ResourceTypes=${encodeURIComponent(z)}`).join('&') + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&RollbackConfiguration=' + RollbackConfiguration + '&StackPolicyBody=' + (StackPolicyBody == null ? '' : encodeURIComponent(StackPolicyBody)) + '&StackPolicyURL=' + (StackPolicyURL == null ? '' : encodeURIComponent(StackPolicyURL)) + '&' + NotificationARNs?.map(z => `NotificationARNs=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&DisableRollback=' + DisableRollback + '&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&RetainExceptOnCreate=' + RetainExceptOnCreate + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the parameter values for stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.</p> <p>You can only update stack instances in Amazon Web Services Regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p> <p>During stack set updates, any parameters overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * Get #Action=UpdateStackInstances
		 * @param {string} StackSetName The name or unique ID of the stack set associated with the stack instances.
		 * @param {Array<string>} Accounts <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts for which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {GET_UpdateStackInstancesDeploymentTargets} DeploymentTargets <p>[Service-managed permissions] The Organizations accounts for which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values.</p> <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
		 * @param {Array<string>} Regions The names of one or more Amazon Web Services Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.
		 * @param {Array<Parameter>} ParameterOverrides <p>A list of input parameters whose values you want to update for the specified stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance update operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> <li> <p>To set an overridden parameter back to the value specified in the stack set, specify a parameter list but don't include the parameter in the list.</p> </li> <li> <p>To leave all parameters set to their present values, don't specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
		 * @param {GET_UpdateStackInstancesOperationPreferences} OperationPreferences Preferences for how CloudFormation performs this stack set operation.
		 * @param {string} OperationId <p>The unique identifier for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
		 *     Min length: 1    Max length: 128
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_UpdateStackInstances(StackSetName: string, Accounts: Array<string> | null | undefined, DeploymentTargets: GET_UpdateStackInstancesDeploymentTargets | null | undefined, Regions: Array<string>, ParameterOverrides: Array<Parameter> | null | undefined, OperationPreferences: GET_UpdateStackInstancesOperationPreferences | null | undefined, OperationId: string | null | undefined, CallAs: CallAs | null | undefined, Action: GET_UpdateStackInstancesAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStackInstances?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&DeploymentTargets=' + DeploymentTargets + '&' + Regions.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&' + ParameterOverrides?.map(z => `ParameterOverrides=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&CallAs=' + CallAs + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the stack set, and associated stack instances in the specified accounts and Amazon Web Services Regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>
		 * Get #Action=UpdateStackSet
		 * @param {string} StackSetName The name or unique ID of the stack set that you want to update.
		 * @param {string} Description A brief description of updates that you are making.
		 *     Min length: 1    Max length: 1024
		 * @param {string} TemplateBody <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>The location of the file that contains the template body. The URL must point to a template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
		 *     Min length: 1    Max length: 1024
		 * @param {boolean} UsePreviousTemplate <p>Use the existing template that's associated with the stack set that you're updating.</p> <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
		 * @param {Array<Parameter>} Parameters A list of input parameters for the stack set template.
		 * @param {Array<Capability>} Capabilities <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack set and its associated stack instances.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new Identity and Access Management (IAM) users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability.</p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p> </li> <li> <p>If you don't specify either of these capabilities, CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some templates reference macros. If your stack set template references one or more macros, you must update the stack set directly from the processed template, without first reviewing the resulting changes in a change set. To update the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> <important> <p>Stack sets with service-managed permissions do not currently support the use of macros in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions, if you reference a macro in your template the stack set operation will fail.</p> </important> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p> <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this stack set. This means:</p> <ul> <li> <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags.</p> </li> <li> <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i> the tags that you want associated with this stack set, even tags you've specified before (for example, when creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the updated list of tags are removed from the stack set, and therefore from the stacks and resources as well.</p> </li> <li> <p>If you specify an empty value, CloudFormation removes all currently associated tags.</p> </li> </ul> <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from the list of tags you specify, CloudFormation assumes that you want to remove those tags from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not updated.</p>
		 *     Maximum items: 50
		 * @param {GET_UpdateStackSetOperationPreferences} OperationPreferences Preferences for how CloudFormation performs this stack set operation.
		 * @param {string} AdministrationRoleARN <p>The Amazon Resource Name (ARN) of the IAM role to use to update this stack set.</p> <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Granting Permissions for Stack Set Operations</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specified a customized administrator role when you created the stack set, you must specify a customized administrator role, even if it is the same customized administrator role used with this stack set previously.</p>
		 *     Min length: 20    Max length: 2048
		 * @param {string} ExecutionRoleName <p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p> <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their stack sets.</p> <p>If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a customized execution role, CloudFormation performs the update using the role previously associated with the stack set, so long as you have permissions to perform operations on the stack set.</p>
		 *     Min length: 1    Max length: 64
		 * @param {GET_UpdateStackSetDeploymentTargets} DeploymentTargets <p>[Service-managed permissions] The Organizations accounts in which to update associated stack instances.</p> <p>To update all the stack instances associated with this stack set, do not specify <code>DeploymentTargets</code> or <code>Regions</code>.</p> <p>If the stack set update includes changes to the template (that is, if <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the <code>Parameters</code>, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>
		 * @param {PermissionModels} PermissionModel <p>Describes how the IAM roles required for stack set operations are created. You cannot modify <code>PermissionModel</code> if there are stack instances associated with your stack set.</p> <ul> <li> <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set Permissions</a>.</p> </li> <li> <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p> </li> </ul>
		 * @param {GET_UpdateStackSetAutoDeployment} AutoDeployment <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU).</p> <p>If you specify <code>AutoDeployment</code>, don't specify <code>DeploymentTargets</code> or <code>Regions</code>.</p>
		 * @param {string} OperationId <p>The unique ID for this stack set operation.</p> <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, CloudFormation generates one automatically.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>.</p>
		 *     Min length: 1    Max length: 128
		 * @param {Array<string>} Accounts <p>[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Amazon Web Services Regions in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, don't specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack instances with their existing stack instance status.</p>
		 * @param {Array<string>} Regions <p>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update stack set instances.</p> <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p> <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.</p>
		 * @param {CallAs} CallAs <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p> <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p> <ul> <li> <p>If you are signed in to the management account, specify <code>SELF</code>.</p> </li> <li> <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p> <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p> </li> </ul>
		 * @param {GET_UpdateStackSetManagedExecution} ManagedExecution Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
		 * @return {void} Success
		 */
		GET_UpdateStackSet(StackSetName: string, Description: string | null | undefined, TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, UsePreviousTemplate: boolean | null | undefined, Parameters: Array<Parameter> | null | undefined, Capabilities: Array<Capability> | null | undefined, Tags: Array<Tag> | null | undefined, OperationPreferences: GET_UpdateStackSetOperationPreferences | null | undefined, AdministrationRoleARN: string | null | undefined, ExecutionRoleName: string | null | undefined, DeploymentTargets: GET_UpdateStackSetDeploymentTargets | null | undefined, PermissionModel: PermissionModels | null | undefined, AutoDeployment: GET_UpdateStackSetAutoDeployment | null | undefined, OperationId: string | null | undefined, Accounts: Array<string> | null | undefined, Regions: Array<string> | null | undefined, CallAs: CallAs | null | undefined, ManagedExecution: GET_UpdateStackSetManagedExecution | null | undefined, Action: GET_UpdateStackSetAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateStackSet?StackSetName=' + (StackSetName == null ? '' : encodeURIComponent(StackSetName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&UsePreviousTemplate=' + UsePreviousTemplate + '&' + Parameters?.map(z => `Parameters=${z}`).join('&') + '&' + Capabilities?.map(z => `Capabilities=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&OperationPreferences=' + OperationPreferences + '&AdministrationRoleARN=' + (AdministrationRoleARN == null ? '' : encodeURIComponent(AdministrationRoleARN)) + '&ExecutionRoleName=' + (ExecutionRoleName == null ? '' : encodeURIComponent(ExecutionRoleName)) + '&DeploymentTargets=' + DeploymentTargets + '&PermissionModel=' + PermissionModel + '&AutoDeployment=' + AutoDeployment + '&OperationId=' + (OperationId == null ? '' : encodeURIComponent(OperationId)) + '&' + Accounts?.map(z => `Accounts=${encodeURIComponent(z)}`).join('&') + '&' + Regions?.map(z => `Regions=${encodeURIComponent(z)}`).join('&') + '&CallAs=' + CallAs + '&ManagedExecution=' + ManagedExecution + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p> <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.</p>
		 * Get #Action=UpdateTerminationProtection
		 * @param {boolean} EnableTerminationProtection Whether to enable termination protection on the specified stack.
		 * @param {string} StackName The name or unique ID of the stack for which you want to set termination protection.
		 *     Min length: 1
		 * @return {void} Success
		 */
		GET_UpdateTerminationProtection(EnableTerminationProtection: boolean, StackName: string, Action: GET_UpdateTerminationProtectionAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateTerminationProtection?EnableTerminationProtection=' + EnableTerminationProtection + '&StackName=' + (StackName == null ? '' : encodeURIComponent(StackName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates a specified template. CloudFormation first checks if the template is valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail, CloudFormation returns a template validation error.
		 * Get #Action=ValidateTemplate
		 * @param {string} TemplateBody <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 *     Min length: 1
		 * @param {string} TemplateURL <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p> <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only <code>TemplateBody</code> is used.</p>
		 *     Min length: 1    Max length: 1024
		 * @return {void} Success
		 */
		GET_ValidateTemplate(TemplateBody: string | null | undefined, TemplateURL: string | null | undefined, Action: GET_ValidateTemplateAction, Version: GET_ActivateOrganizationsAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ValidateTemplate?TemplateBody=' + (TemplateBody == null ? '' : encodeURIComponent(TemplateBody)) + '&TemplateURL=' + (TemplateURL == null ? '' : encodeURIComponent(TemplateURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_ActivateOrganizationsAccessAction { ActivateOrganizationsAccess = 'ActivateOrganizationsAccess' }

	export enum GET_ActivateOrganizationsAccessVersion { '2010-05-15' = '2010-05-15' }

	export interface GET_ActivateTypeLoggingConfig {

		/** Required */
		LogRoleArn: string;

		/** Required */
		LogGroupName: string;
	}
	export interface GET_ActivateTypeLoggingConfigFormProperties {

		/** Required */
		LogRoleArn: FormControl<string | null | undefined>,

		/** Required */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGET_ActivateTypeLoggingConfigFormGroup() {
		return new FormGroup<GET_ActivateTypeLoggingConfigFormProperties>({
			LogRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_ActivateTypeAction { ActivateType = 'ActivateType' }

	export enum GET_BatchDescribeTypeConfigurationsAction { BatchDescribeTypeConfigurations = 'BatchDescribeTypeConfigurations' }

	export enum GET_CancelUpdateStackAction { CancelUpdateStack = 'CancelUpdateStack' }

	export enum GET_ContinueUpdateRollbackAction { ContinueUpdateRollback = 'ContinueUpdateRollback' }

	export interface GET_CreateChangeSetRollbackConfiguration {
		RollbackTriggers?: Array<RollbackTrigger>;
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_CreateChangeSetRollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateChangeSetRollbackConfigurationFormGroup() {
		return new FormGroup<GET_CreateChangeSetRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_CreateChangeSetAction { CreateChangeSet = 'CreateChangeSet' }

	export interface GET_CreateStackRollbackConfiguration {
		RollbackTriggers?: Array<RollbackTrigger>;
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_CreateStackRollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateStackRollbackConfigurationFormGroup() {
		return new FormGroup<GET_CreateStackRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_CreateStackAction { CreateStack = 'CreateStack' }

	export interface GET_CreateStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		AccountsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		AccountFilterType?: AccountFilterType;
	}
	export interface GET_CreateStackInstancesDeploymentTargetsFormProperties {
		AccountsUrl: FormControl<string | null | undefined>,
		AccountFilterType: FormControl<AccountFilterType | null | undefined>,
	}
	export function CreateGET_CreateStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_CreateStackInstancesDeploymentTargetsFormProperties>({
			AccountsUrl: new FormControl<string | null | undefined>(undefined),
			AccountFilterType: new FormControl<AccountFilterType | null | undefined>(undefined),
		});

	}

	export interface GET_CreateStackInstancesOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_CreateStackInstancesOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_CreateStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_CreateStackInstancesOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_CreateStackInstancesAction { CreateStackInstances = 'CreateStackInstances' }

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

	export interface GET_CreateStackSetManagedExecution {
		Active?: boolean | null;
	}
	export interface GET_CreateStackSetManagedExecutionFormProperties {
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_CreateStackSetManagedExecutionFormGroup() {
		return new FormGroup<GET_CreateStackSetManagedExecutionFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_CreateStackSetAction { CreateStackSet = 'CreateStackSet' }

	export enum GET_DeactivateOrganizationsAccessAction { DeactivateOrganizationsAccess = 'DeactivateOrganizationsAccess' }

	export enum GET_DeactivateTypeAction { DeactivateType = 'DeactivateType' }

	export enum GET_DeleteChangeSetAction { DeleteChangeSet = 'DeleteChangeSet' }

	export enum GET_DeleteStackAction { DeleteStack = 'DeleteStack' }

	export interface GET_DeleteStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		AccountsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		AccountFilterType?: AccountFilterType;
	}
	export interface GET_DeleteStackInstancesDeploymentTargetsFormProperties {
		AccountsUrl: FormControl<string | null | undefined>,
		AccountFilterType: FormControl<AccountFilterType | null | undefined>,
	}
	export function CreateGET_DeleteStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_DeleteStackInstancesDeploymentTargetsFormProperties>({
			AccountsUrl: new FormControl<string | null | undefined>(undefined),
			AccountFilterType: new FormControl<AccountFilterType | null | undefined>(undefined),
		});

	}

	export interface GET_DeleteStackInstancesOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_DeleteStackInstancesOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_DeleteStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_DeleteStackInstancesOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_DeleteStackInstancesAction { DeleteStackInstances = 'DeleteStackInstances' }

	export enum GET_DeleteStackSetAction { DeleteStackSet = 'DeleteStackSet' }

	export enum GET_DeregisterTypeAction { DeregisterType = 'DeregisterType' }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 'DescribeAccountLimits' }

	export enum GET_DescribeChangeSetAction { DescribeChangeSet = 'DescribeChangeSet' }

	export enum GET_DescribeChangeSetHooksAction { DescribeChangeSetHooks = 'DescribeChangeSetHooks' }

	export enum GET_DescribeOrganizationsAccessAction { DescribeOrganizationsAccess = 'DescribeOrganizationsAccess' }

	export enum GET_DescribePublisherAction { DescribePublisher = 'DescribePublisher' }

	export enum GET_DescribeStackDriftDetectionStatusAction { DescribeStackDriftDetectionStatus = 'DescribeStackDriftDetectionStatus' }

	export enum GET_DescribeStackEventsAction { DescribeStackEvents = 'DescribeStackEvents' }

	export enum GET_DescribeStackInstanceAction { DescribeStackInstance = 'DescribeStackInstance' }

	export enum GET_DescribeStackResourceAction { DescribeStackResource = 'DescribeStackResource' }

	export enum GET_DescribeStackResourceDriftsAction { DescribeStackResourceDrifts = 'DescribeStackResourceDrifts' }

	export enum GET_DescribeStackResourcesAction { DescribeStackResources = 'DescribeStackResources' }

	export enum GET_DescribeStackSetAction { DescribeStackSet = 'DescribeStackSet' }

	export enum GET_DescribeStackSetOperationAction { DescribeStackSetOperation = 'DescribeStackSetOperation' }

	export enum GET_DescribeStacksAction { DescribeStacks = 'DescribeStacks' }

	export enum GET_DescribeTypeAction { DescribeType = 'DescribeType' }

	export enum GET_DescribeTypeRegistrationAction { DescribeTypeRegistration = 'DescribeTypeRegistration' }

	export enum GET_DetectStackDriftAction { DetectStackDrift = 'DetectStackDrift' }

	export enum GET_DetectStackResourceDriftAction { DetectStackResourceDrift = 'DetectStackResourceDrift' }

	export interface GET_DetectStackSetDriftOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_DetectStackSetDriftOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_DetectStackSetDriftOperationPreferencesFormGroup() {
		return new FormGroup<GET_DetectStackSetDriftOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_DetectStackSetDriftAction { DetectStackSetDrift = 'DetectStackSetDrift' }

	export enum GET_EstimateTemplateCostAction { EstimateTemplateCost = 'EstimateTemplateCost' }

	export enum GET_ExecuteChangeSetAction { ExecuteChangeSet = 'ExecuteChangeSet' }

	export enum GET_GetStackPolicyAction { GetStackPolicy = 'GetStackPolicy' }

	export enum GET_GetTemplateAction { GetTemplate = 'GetTemplate' }

	export interface GET_GetTemplateSummaryTemplateSummaryConfig {
		TreatUnrecognizedResourceTypesAsWarnings?: boolean | null;
	}
	export interface GET_GetTemplateSummaryTemplateSummaryConfigFormProperties {
		TreatUnrecognizedResourceTypesAsWarnings: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_GetTemplateSummaryTemplateSummaryConfigFormGroup() {
		return new FormGroup<GET_GetTemplateSummaryTemplateSummaryConfigFormProperties>({
			TreatUnrecognizedResourceTypesAsWarnings: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_GetTemplateSummaryAction { GetTemplateSummary = 'GetTemplateSummary' }

	export interface GET_ImportStacksToStackSetOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_ImportStacksToStackSetOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_ImportStacksToStackSetOperationPreferencesFormGroup() {
		return new FormGroup<GET_ImportStacksToStackSetOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_ImportStacksToStackSetAction { ImportStacksToStackSet = 'ImportStacksToStackSet' }

	export enum GET_ListChangeSetsAction { ListChangeSets = 'ListChangeSets' }

	export enum GET_ListExportsAction { ListExports = 'ListExports' }

	export enum GET_ListImportsAction { ListImports = 'ListImports' }

	export enum GET_ListStackInstanceResourceDriftsAction { ListStackInstanceResourceDrifts = 'ListStackInstanceResourceDrifts' }

	export enum GET_ListStackInstancesAction { ListStackInstances = 'ListStackInstances' }

	export enum GET_ListStackResourcesAction { ListStackResources = 'ListStackResources' }

	export enum GET_ListStackSetOperationResultsAction { ListStackSetOperationResults = 'ListStackSetOperationResults' }

	export enum GET_ListStackSetOperationsAction { ListStackSetOperations = 'ListStackSetOperations' }

	export enum GET_ListStackSetsAction { ListStackSets = 'ListStackSets' }

	export enum GET_ListStacksAction { ListStacks = 'ListStacks' }

	export enum GET_ListTypeRegistrationsAction { ListTypeRegistrations = 'ListTypeRegistrations' }

	export enum GET_ListTypeVersionsAction { ListTypeVersions = 'ListTypeVersions' }

	export interface GET_ListTypesFilters {
		Category?: Category;
		PublisherId?: string;
		TypeNamePrefix?: string;
	}
	export interface GET_ListTypesFiltersFormProperties {
		Category: FormControl<Category | null | undefined>,
		PublisherId: FormControl<string | null | undefined>,
		TypeNamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateGET_ListTypesFiltersFormGroup() {
		return new FormGroup<GET_ListTypesFiltersFormProperties>({
			Category: new FormControl<Category | null | undefined>(undefined),
			PublisherId: new FormControl<string | null | undefined>(undefined),
			TypeNamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_ListTypesAction { ListTypes = 'ListTypes' }

	export enum GET_PublishTypeAction { PublishType = 'PublishType' }

	export enum GET_RecordHandlerProgressAction { RecordHandlerProgress = 'RecordHandlerProgress' }

	export enum GET_RegisterPublisherAction { RegisterPublisher = 'RegisterPublisher' }

	export interface GET_RegisterTypeLoggingConfig {

		/** Required */
		LogRoleArn: string;

		/** Required */
		LogGroupName: string;
	}
	export interface GET_RegisterTypeLoggingConfigFormProperties {

		/** Required */
		LogRoleArn: FormControl<string | null | undefined>,

		/** Required */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGET_RegisterTypeLoggingConfigFormGroup() {
		return new FormGroup<GET_RegisterTypeLoggingConfigFormProperties>({
			LogRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_RegisterTypeAction { RegisterType = 'RegisterType' }

	export enum GET_RollbackStackAction { RollbackStack = 'RollbackStack' }

	export enum GET_SetStackPolicyAction { SetStackPolicy = 'SetStackPolicy' }

	export enum GET_SetTypeConfigurationAction { SetTypeConfiguration = 'SetTypeConfiguration' }

	export enum GET_SetTypeDefaultVersionAction { SetTypeDefaultVersion = 'SetTypeDefaultVersion' }

	export enum GET_SignalResourceAction { SignalResource = 'SignalResource' }

	export enum GET_StopStackSetOperationAction { StopStackSetOperation = 'StopStackSetOperation' }

	export enum GET_TestTypeAction { TestType = 'TestType' }

	export interface GET_UpdateStackRollbackConfiguration {
		RollbackTriggers?: Array<RollbackTrigger>;
		MonitoringTimeInMinutes?: number | null;
	}
	export interface GET_UpdateStackRollbackConfigurationFormProperties {
		MonitoringTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackRollbackConfigurationFormGroup() {
		return new FormGroup<GET_UpdateStackRollbackConfigurationFormProperties>({
			MonitoringTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateStackAction { UpdateStack = 'UpdateStack' }

	export interface GET_UpdateStackInstancesDeploymentTargets {
		Accounts?: Array<string>;
		AccountsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		AccountFilterType?: AccountFilterType;
	}
	export interface GET_UpdateStackInstancesDeploymentTargetsFormProperties {
		AccountsUrl: FormControl<string | null | undefined>,
		AccountFilterType: FormControl<AccountFilterType | null | undefined>,
	}
	export function CreateGET_UpdateStackInstancesDeploymentTargetsFormGroup() {
		return new FormGroup<GET_UpdateStackInstancesDeploymentTargetsFormProperties>({
			AccountsUrl: new FormControl<string | null | undefined>(undefined),
			AccountFilterType: new FormControl<AccountFilterType | null | undefined>(undefined),
		});

	}

	export interface GET_UpdateStackInstancesOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_UpdateStackInstancesOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackInstancesOperationPreferencesFormGroup() {
		return new FormGroup<GET_UpdateStackInstancesOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateStackInstancesAction { UpdateStackInstances = 'UpdateStackInstances' }

	export interface GET_UpdateStackSetOperationPreferences {
		RegionConcurrencyType?: RegionConcurrencyType;
		RegionOrder?: Array<string>;
		FailureToleranceCount?: number | null;
		FailureTolerancePercentage?: number | null;
		MaxConcurrentCount?: number | null;
		MaxConcurrentPercentage?: number | null;
	}
	export interface GET_UpdateStackSetOperationPreferencesFormProperties {
		RegionConcurrencyType: FormControl<RegionConcurrencyType | null | undefined>,
		FailureToleranceCount: FormControl<number | null | undefined>,
		FailureTolerancePercentage: FormControl<number | null | undefined>,
		MaxConcurrentCount: FormControl<number | null | undefined>,
		MaxConcurrentPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGET_UpdateStackSetOperationPreferencesFormGroup() {
		return new FormGroup<GET_UpdateStackSetOperationPreferencesFormProperties>({
			RegionConcurrencyType: new FormControl<RegionConcurrencyType | null | undefined>(undefined),
			FailureToleranceCount: new FormControl<number | null | undefined>(undefined),
			FailureTolerancePercentage: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentCount: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_UpdateStackSetDeploymentTargets {
		Accounts?: Array<string>;
		AccountsUrl?: string;
		OrganizationalUnitIds?: Array<string>;
		AccountFilterType?: AccountFilterType;
	}
	export interface GET_UpdateStackSetDeploymentTargetsFormProperties {
		AccountsUrl: FormControl<string | null | undefined>,
		AccountFilterType: FormControl<AccountFilterType | null | undefined>,
	}
	export function CreateGET_UpdateStackSetDeploymentTargetsFormGroup() {
		return new FormGroup<GET_UpdateStackSetDeploymentTargetsFormProperties>({
			AccountsUrl: new FormControl<string | null | undefined>(undefined),
			AccountFilterType: new FormControl<AccountFilterType | null | undefined>(undefined),
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

	export interface GET_UpdateStackSetManagedExecution {
		Active?: boolean | null;
	}
	export interface GET_UpdateStackSetManagedExecutionFormProperties {
		Active: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_UpdateStackSetManagedExecutionFormGroup() {
		return new FormGroup<GET_UpdateStackSetManagedExecutionFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateStackSetAction { UpdateStackSet = 'UpdateStackSet' }

	export enum GET_UpdateTerminationProtectionAction { UpdateTerminationProtection = 'UpdateTerminationProtection' }

	export enum GET_ValidateTemplateAction { ValidateTemplate = 'ValidateTemplate' }

}

