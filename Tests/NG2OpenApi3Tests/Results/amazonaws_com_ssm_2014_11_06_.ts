import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddTagsToResourceResult {
	}
	export interface AddTagsToResourceResultFormProperties {
	}
	export function CreateAddTagsToResourceResultFormGroup() {
		return new FormGroup<AddTagsToResourceResultFormProperties>({
		});

	}

	export interface AddTagsToResourceRequest {

		/** Required */
		ResourceType: ResourceTypeForTagging;

		/** Required */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface AddTagsToResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<ResourceTypeForTagging | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceRequestFormGroup() {
		return new FormGroup<AddTagsToResourceRequestFormProperties>({
			ResourceType: new FormControl<ResourceTypeForTagging | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceTypeForTagging { Document = 0, ManagedInstance = 1, MaintenanceWindow = 2, Parameter = 3, PatchBaseline = 4, OpsItem = 5, OpsMetadata = 6, Automation = 7, Association = 8 }


	/** Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Metadata that you assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Amazon Web Services Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata. */
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

	export interface InvalidResourceType {
	}
	export interface InvalidResourceTypeFormProperties {
	}
	export function CreateInvalidResourceTypeFormGroup() {
		return new FormGroup<InvalidResourceTypeFormProperties>({
		});

	}

	export interface InvalidResourceId {
	}
	export interface InvalidResourceIdFormProperties {
	}
	export function CreateInvalidResourceIdFormGroup() {
		return new FormGroup<InvalidResourceIdFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface TooManyTagsError {
	}
	export interface TooManyTagsErrorFormProperties {
	}
	export function CreateTooManyTagsErrorFormGroup() {
		return new FormGroup<TooManyTagsErrorFormProperties>({
		});

	}

	export interface TooManyUpdates {
	}
	export interface TooManyUpdatesFormProperties {
	}
	export function CreateTooManyUpdatesFormGroup() {
		return new FormGroup<TooManyUpdatesFormProperties>({
		});

	}

	export interface AssociateOpsItemRelatedItemResponse {
		AssociationId?: string;
	}
	export interface AssociateOpsItemRelatedItemResponseFormProperties {
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateOpsItemRelatedItemResponseFormGroup() {
		return new FormGroup<AssociateOpsItemRelatedItemResponseFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateOpsItemRelatedItemRequest {

		/** Required */
		OpsItemId: string;

		/** Required */
		AssociationType: string;

		/** Required */
		ResourceType: string;

		/** Required */
		ResourceUri: string;
	}
	export interface AssociateOpsItemRelatedItemRequestFormProperties {

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,

		/** Required */
		AssociationType: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ResourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAssociateOpsItemRelatedItemRequestFormGroup() {
		return new FormGroup<AssociateOpsItemRelatedItemRequestFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssociationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpsItemNotFoundException {
	}
	export interface OpsItemNotFoundExceptionFormProperties {
	}
	export function CreateOpsItemNotFoundExceptionFormGroup() {
		return new FormGroup<OpsItemNotFoundExceptionFormProperties>({
		});

	}

	export interface OpsItemLimitExceededException {
	}
	export interface OpsItemLimitExceededExceptionFormProperties {
	}
	export function CreateOpsItemLimitExceededExceptionFormGroup() {
		return new FormGroup<OpsItemLimitExceededExceptionFormProperties>({
		});

	}

	export interface OpsItemInvalidParameterException {
	}
	export interface OpsItemInvalidParameterExceptionFormProperties {
	}
	export function CreateOpsItemInvalidParameterExceptionFormGroup() {
		return new FormGroup<OpsItemInvalidParameterExceptionFormProperties>({
		});

	}

	export interface OpsItemRelatedItemAlreadyExistsException {
	}
	export interface OpsItemRelatedItemAlreadyExistsExceptionFormProperties {
	}
	export function CreateOpsItemRelatedItemAlreadyExistsExceptionFormGroup() {
		return new FormGroup<OpsItemRelatedItemAlreadyExistsExceptionFormProperties>({
		});

	}


	/** Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled. */
	export interface CancelCommandResult {
	}

	/** Whether or not the command was successfully canceled. There is no guarantee that a request can be canceled. */
	export interface CancelCommandResultFormProperties {
	}
	export function CreateCancelCommandResultFormGroup() {
		return new FormGroup<CancelCommandResultFormProperties>({
		});

	}


	/** <p/> */
	export interface CancelCommandRequest {

		/** Required */
		CommandId: string;
		InstanceIds?: Array<string>;
	}

	/** <p/> */
	export interface CancelCommandRequestFormProperties {

		/** Required */
		CommandId: FormControl<string | null | undefined>,
	}
	export function CreateCancelCommandRequestFormGroup() {
		return new FormGroup<CancelCommandRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidCommandId {
	}
	export interface InvalidCommandIdFormProperties {
	}
	export function CreateInvalidCommandIdFormGroup() {
		return new FormGroup<InvalidCommandIdFormProperties>({
		});

	}

	export interface InvalidInstanceId {
	}
	export interface InvalidInstanceIdFormProperties {
	}
	export function CreateInvalidInstanceIdFormGroup() {
		return new FormGroup<InvalidInstanceIdFormProperties>({
		});

	}

	export interface DuplicateInstanceId {
	}
	export interface DuplicateInstanceIdFormProperties {
	}
	export function CreateDuplicateInstanceIdFormGroup() {
		return new FormGroup<DuplicateInstanceIdFormProperties>({
		});

	}

	export interface CancelMaintenanceWindowExecutionResult {
		WindowExecutionId?: string;
	}
	export interface CancelMaintenanceWindowExecutionResultFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMaintenanceWindowExecutionResultFormGroup() {
		return new FormGroup<CancelMaintenanceWindowExecutionResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelMaintenanceWindowExecutionRequest {

		/** Required */
		WindowExecutionId: string;
	}
	export interface CancelMaintenanceWindowExecutionRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMaintenanceWindowExecutionRequestFormGroup() {
		return new FormGroup<CancelMaintenanceWindowExecutionRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DoesNotExistException {
	}
	export interface DoesNotExistExceptionFormProperties {
	}
	export function CreateDoesNotExistExceptionFormGroup() {
		return new FormGroup<DoesNotExistExceptionFormProperties>({
		});

	}

	export interface CreateActivationResult {
		ActivationId?: string;
		ActivationCode?: string;
	}
	export interface CreateActivationResultFormProperties {
		ActivationId: FormControl<string | null | undefined>,
		ActivationCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateActivationResultFormGroup() {
		return new FormGroup<CreateActivationResultFormProperties>({
			ActivationId: new FormControl<string | null | undefined>(undefined),
			ActivationCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateActivationRequest {
		Description?: string;
		DefaultInstanceName?: string;

		/** Required */
		IamRole: string;
		RegistrationLimit?: number | null;
		ExpirationDate?: Date;
		Tags?: Array<Tag>;
		RegistrationMetadata?: Array<RegistrationMetadataItem>;
	}
	export interface CreateActivationRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		DefaultInstanceName: FormControl<string | null | undefined>,

		/** Required */
		IamRole: FormControl<string | null | undefined>,
		RegistrationLimit: FormControl<number | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateActivationRequestFormGroup() {
		return new FormGroup<CreateActivationRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceName: new FormControl<string | null | undefined>(undefined),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegistrationLimit: new FormControl<number | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Reserved for internal use. */
	export interface RegistrationMetadataItem {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Reserved for internal use. */
	export interface RegistrationMetadataItemFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationMetadataItemFormGroup() {
		return new FormGroup<RegistrationMetadataItemFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidParameters {
	}
	export interface InvalidParametersFormProperties {
	}
	export function CreateInvalidParametersFormGroup() {
		return new FormGroup<InvalidParametersFormProperties>({
		});

	}

	export interface CreateAssociationResult {
		AssociationDescription?: AssociationDescription;
	}
	export interface CreateAssociationResultFormProperties {
	}
	export function CreateCreateAssociationResultFormGroup() {
		return new FormGroup<CreateAssociationResultFormProperties>({
		});

	}


	/** Describes the parameters for a document. */
	export interface AssociationDescription {
		Name?: string;
		InstanceId?: string;
		AssociationVersion?: string;
		Date?: Date;
		LastUpdateAssociationDate?: Date;
		Status?: AssociationStatus;
		Overview?: AssociationOverview;
		DocumentVersion?: string;
		AutomationTargetParameterName?: string;
		Parameters?: Parameters;
		AssociationId?: string;
		Targets?: Array<Target>;
		ScheduleExpression?: string;
		OutputLocation?: InstanceAssociationOutputLocation;
		LastExecutionDate?: Date;
		LastSuccessfulExecutionDate?: Date;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationComplianceSeverity;
		SyncCompliance?: AssociationSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean | null;
		CalendarNames?: Array<string>;
		TargetLocations?: Array<TargetLocation>;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}

	/** Describes the parameters for a document. */
	export interface AssociationDescriptionFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
		LastUpdateAssociationDate: FormControl<Date | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
		LastSuccessfulExecutionDate: FormControl<Date | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateAssociationDescriptionFormGroup() {
		return new FormGroup<AssociationDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			LastUpdateAssociationDate: new FormControl<Date | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulExecutionDate: new FormControl<Date | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			ComplianceSeverity: new FormControl<AssociationComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an association status. */
	export interface AssociationStatus {

		/** Required */
		Date: Date;

		/** Required */
		Name: AssociationStatusName;

		/** Required */
		Message: string;
		AdditionalInfo?: string;
	}

	/** Describes an association status. */
	export interface AssociationStatusFormProperties {

		/** Required */
		Date: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<AssociationStatusName | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		AdditionalInfo: FormControl<string | null | undefined>,
	}
	export function CreateAssociationStatusFormGroup() {
		return new FormGroup<AssociationStatusFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<AssociationStatusName | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdditionalInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationStatusName { Pending = 0, Success = 1, Failed = 2 }


	/** Information about the association. */
	export interface AssociationOverview {
		Status?: string;
		DetailedStatus?: string;
		AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount;
	}

	/** Information about the association. */
	export interface AssociationOverviewFormProperties {
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,
	}
	export function CreateAssociationOverviewFormGroup() {
		return new FormGroup<AssociationOverviewFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociationStatusAggregatedCount {
	}
	export interface AssociationStatusAggregatedCountFormProperties {
	}
	export function CreateAssociationStatusAggregatedCountFormGroup() {
		return new FormGroup<AssociationStatusAggregatedCountFormProperties>({
		});

	}

	export interface Parameters {
	}
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}


	/** <p>An array of search criteria that targets managed nodes using a key-value pair that you specify.</p> <note> <p> One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;,&lt;instance-id-3&gt;</code> </p> </li> <li> <p> <code>Key=tag:&lt;my-tag-key&gt;,Values=&lt;my-tag-value-1&gt;,&lt;my-tag-value-2&gt;</code> </p> </li> <li> <p> <code>Key=tag-key,Values=&lt;my-tag-key-1&gt;,&lt;my-tag-key-2&gt;</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=&lt;resource-group-name&gt;</code> </p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=&lt;resource-type-1&gt;,&lt;resource-type-2&gt;</code> </p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup;Values=&lt;resource-group-name&gt;</code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC</code> </p> <p>This example demonstrates how to target only Amazon Elastic Compute Cloud (Amazon EC2) instances and VPCs in your maintenance window.</p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup,Values=MyResourceGroup</code> </p> </li> <li> <p> <b>State Manager association targets only</b>: <code>Key=InstanceIds,Values=*</code> </p> <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where the association was created.</p> </li> </ul> <p>For more information about how to send commands that target managed nodes using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> */
	export interface Target {
		Key?: string;
		Values?: Array<string>;
	}

	/** <p>An array of search criteria that targets managed nodes using a key-value pair that you specify.</p> <note> <p> One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;,&lt;instance-id-3&gt;</code> </p> </li> <li> <p> <code>Key=tag:&lt;my-tag-key&gt;,Values=&lt;my-tag-value-1&gt;,&lt;my-tag-value-2&gt;</code> </p> </li> <li> <p> <code>Key=tag-key,Values=&lt;my-tag-key-1&gt;,&lt;my-tag-key-2&gt;</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=&lt;resource-group-name&gt;</code> </p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=&lt;resource-type-1&gt;,&lt;resource-type-2&gt;</code> </p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup;Values=&lt;resource-group-name&gt;</code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p> <b>Run Command and Maintenance window targets only</b>: <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> <p>This example demonstrates how to target all resources in the resource group <b>ProductionResourceGroup</b> in your maintenance window.</p> </li> <li> <p> <b>Maintenance window targets only</b>: <code>Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC</code> </p> <p>This example demonstrates how to target only Amazon Elastic Compute Cloud (Amazon EC2) instances and VPCs in your maintenance window.</p> </li> <li> <p> <b>Automation targets only</b>: <code>Key=ResourceGroup,Values=MyResourceGroup</code> </p> </li> <li> <p> <b>State Manager association targets only</b>: <code>Key=InstanceIds,Values=*</code> </p> <p>This example demonstrates how to target all managed instances in the Amazon Web Services Region where the association was created.</p> </li> </ul> <p>For more information about how to send commands that target managed nodes using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Targeting multiple instances</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> */
	export interface TargetFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p> */
	export interface InstanceAssociationOutputLocation {
		S3Location?: S3OutputLocation;
	}

	/** <p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p> */
	export interface InstanceAssociationOutputLocationFormProperties {
	}
	export function CreateInstanceAssociationOutputLocationFormGroup() {
		return new FormGroup<InstanceAssociationOutputLocationFormProperties>({
		});

	}


	/** An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocation {
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
	}

	/** An S3 bucket where you want to store the results of this request. */
	export interface S3OutputLocationFormProperties {
		OutputS3Region: FormControl<string | null | undefined>,
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3OutputLocationFormGroup() {
		return new FormGroup<S3OutputLocationFormProperties>({
			OutputS3Region: new FormControl<string | null | undefined>(undefined),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, UNSPECIFIED = 4 }

	export enum AssociationSyncCompliance { AUTO = 0, MANUAL = 1 }


	/** The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution. */
	export interface TargetLocation {
		Accounts?: Array<string>;
		Regions?: Array<string>;
		TargetLocationMaxConcurrency?: string;
		TargetLocationMaxErrors?: string;
		ExecutionRoleName?: string;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		TargetLocationAlarmConfiguration?: AlarmConfiguration;
	}

	/** The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution. */
	export interface TargetLocationFormProperties {
		TargetLocationMaxConcurrency: FormControl<string | null | undefined>,
		TargetLocationMaxErrors: FormControl<string | null | undefined>,
		ExecutionRoleName: FormControl<string | null | undefined>,
	}
	export function CreateTargetLocationFormGroup() {
		return new FormGroup<TargetLocationFormProperties>({
			TargetLocationMaxConcurrency: new FormControl<string | null | undefined>(undefined),
			TargetLocationMaxErrors: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for the CloudWatch alarm you want to apply to an automation or command. */
	export interface AlarmConfiguration {
		IgnorePollAlarmFailure?: boolean | null;

		/** Required */
		Alarms: Array<Alarm>;
	}

	/** The details for the CloudWatch alarm you want to apply to an automation or command. */
	export interface AlarmConfigurationFormProperties {
		IgnorePollAlarmFailure: FormControl<boolean | null | undefined>,
	}
	export function CreateAlarmConfigurationFormGroup() {
		return new FormGroup<AlarmConfigurationFormProperties>({
			IgnorePollAlarmFailure: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A CloudWatch alarm you apply to an automation or command. */
	export interface Alarm {

		/** Required */
		Name: string;
	}

	/** A CloudWatch alarm you apply to an automation or command. */
	export interface AlarmFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TargetMap {
	}
	export interface TargetMapFormProperties {
	}
	export function CreateTargetMapFormGroup() {
		return new FormGroup<TargetMapFormProperties>({
		});

	}


	/** The details about the state of your CloudWatch alarm. */
	export interface AlarmStateInformation {

		/** Required */
		Name: string;

		/** Required */
		State: ExternalAlarmState;
	}

	/** The details about the state of your CloudWatch alarm. */
	export interface AlarmStateInformationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<ExternalAlarmState | null | undefined>,
	}
	export function CreateAlarmStateInformationFormGroup() {
		return new FormGroup<AlarmStateInformationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<ExternalAlarmState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExternalAlarmState { UNKNOWN = 0, ALARM = 1 }

	export interface CreateAssociationRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string;
		InstanceId?: string;
		Parameters?: Parameters;
		Targets?: Array<Target>;
		ScheduleExpression?: string;
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		AutomationTargetParameterName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationComplianceSeverity;
		SyncCompliance?: AssociationSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean | null;
		CalendarNames?: Array<string>;
		TargetLocations?: Array<TargetLocation>;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;
		Tags?: Array<Tag>;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface CreateAssociationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateCreateAssociationRequestFormGroup() {
		return new FormGroup<CreateAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			ComplianceSeverity: new FormControl<AssociationComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssociationAlreadyExists {
	}
	export interface AssociationAlreadyExistsFormProperties {
	}
	export function CreateAssociationAlreadyExistsFormGroup() {
		return new FormGroup<AssociationAlreadyExistsFormProperties>({
		});

	}

	export interface AssociationLimitExceeded {
	}
	export interface AssociationLimitExceededFormProperties {
	}
	export function CreateAssociationLimitExceededFormGroup() {
		return new FormGroup<AssociationLimitExceededFormProperties>({
		});

	}

	export interface InvalidDocument {
	}
	export interface InvalidDocumentFormProperties {
	}
	export function CreateInvalidDocumentFormGroup() {
		return new FormGroup<InvalidDocumentFormProperties>({
		});

	}

	export interface InvalidDocumentVersion {
	}
	export interface InvalidDocumentVersionFormProperties {
	}
	export function CreateInvalidDocumentVersionFormGroup() {
		return new FormGroup<InvalidDocumentVersionFormProperties>({
		});

	}

	export interface UnsupportedPlatformType {
	}
	export interface UnsupportedPlatformTypeFormProperties {
	}
	export function CreateUnsupportedPlatformTypeFormGroup() {
		return new FormGroup<UnsupportedPlatformTypeFormProperties>({
		});

	}

	export interface InvalidOutputLocation {
	}
	export interface InvalidOutputLocationFormProperties {
	}
	export function CreateInvalidOutputLocationFormGroup() {
		return new FormGroup<InvalidOutputLocationFormProperties>({
		});

	}

	export interface InvalidTarget {
	}
	export interface InvalidTargetFormProperties {
	}
	export function CreateInvalidTargetFormGroup() {
		return new FormGroup<InvalidTargetFormProperties>({
		});

	}

	export interface InvalidSchedule {
	}
	export interface InvalidScheduleFormProperties {
	}
	export function CreateInvalidScheduleFormGroup() {
		return new FormGroup<InvalidScheduleFormProperties>({
		});

	}

	export interface InvalidTargetMaps {
	}
	export interface InvalidTargetMapsFormProperties {
	}
	export function CreateInvalidTargetMapsFormGroup() {
		return new FormGroup<InvalidTargetMapsFormProperties>({
		});

	}

	export interface InvalidTag {
	}
	export interface InvalidTagFormProperties {
	}
	export function CreateInvalidTagFormGroup() {
		return new FormGroup<InvalidTagFormProperties>({
		});

	}

	export interface CreateAssociationBatchResult {
		Successful?: Array<AssociationDescription>;
		Failed?: Array<FailedCreateAssociation>;
	}
	export interface CreateAssociationBatchResultFormProperties {
	}
	export function CreateCreateAssociationBatchResultFormGroup() {
		return new FormGroup<CreateAssociationBatchResultFormProperties>({
		});

	}


	/** Describes a failed association. */
	export interface FailedCreateAssociation {
		Entry?: CreateAssociationBatchRequestEntry;
		Message?: string;
		Fault?: Fault;
	}

	/** Describes a failed association. */
	export interface FailedCreateAssociationFormProperties {
		Message: FormControl<string | null | undefined>,
		Fault: FormControl<Fault | null | undefined>,
	}
	export function CreateFailedCreateAssociationFormGroup() {
		return new FormGroup<FailedCreateAssociationFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Fault: new FormControl<Fault | null | undefined>(undefined),
		});

	}


	/** Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node. */
	export interface CreateAssociationBatchRequestEntry {

		/** Required */
		Name: string;
		InstanceId?: string;
		Parameters?: Parameters;
		AutomationTargetParameterName?: string;
		DocumentVersion?: string;
		Targets?: Array<Target>;
		ScheduleExpression?: string;
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationComplianceSeverity;
		SyncCompliance?: AssociationSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean | null;
		CalendarNames?: Array<string>;
		TargetLocations?: Array<TargetLocation>;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		AlarmConfiguration?: AlarmConfiguration;
	}

	/** Describes the association of a Amazon Web Services Systems Manager document (SSM document) and a managed node. */
	export interface CreateAssociationBatchRequestEntryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateCreateAssociationBatchRequestEntryFormGroup() {
		return new FormGroup<CreateAssociationBatchRequestEntryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			ComplianceSeverity: new FormControl<AssociationComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Fault { Client = 0, Server = 1, Unknown = 2 }

	export interface CreateAssociationBatchRequest {

		/** Required */
		Entries: Array<CreateAssociationBatchRequestEntry>;
	}
	export interface CreateAssociationBatchRequestFormProperties {
	}
	export function CreateCreateAssociationBatchRequestFormGroup() {
		return new FormGroup<CreateAssociationBatchRequestFormProperties>({
		});

	}

	export interface CreateDocumentResult {
		DocumentDescription?: DocumentDescription;
	}
	export interface CreateDocumentResultFormProperties {
	}
	export function CreateCreateDocumentResultFormGroup() {
		return new FormGroup<CreateDocumentResultFormProperties>({
		});

	}


	/** Describes an Amazon Web Services Systems Manager document (SSM document).  */
	export interface DocumentDescription {
		Sha1?: string;
		Hash?: string;
		HashType?: DocumentHashType;
		Name?: string;
		DisplayName?: string;
		VersionName?: string;
		Owner?: string;
		CreatedDate?: Date;
		Status?: DocumentStatus;
		StatusInformation?: string;
		DocumentVersion?: string;
		Description?: string;
		Parameters?: Array<DocumentParameter>;
		PlatformTypes?: Array<PlatformType>;
		DocumentType?: DocumentType;
		SchemaVersion?: string;
		LatestVersion?: string;
		DefaultVersion?: string;
		DocumentFormat?: DocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
		AttachmentsInformation?: Array<AttachmentInformation>;
		Requires?: Array<DocumentRequires>;
		Author?: string;
		ReviewInformation?: Array<ReviewInformation>;
		ApprovedVersion?: string;
		PendingReviewVersion?: string;
		ReviewStatus?: ReviewStatus;
		Category?: Array<string>;
		CategoryEnum?: Array<string>;
	}

	/** Describes an Amazon Web Services Systems Manager document (SSM document).  */
	export interface DocumentDescriptionFormProperties {
		Sha1: FormControl<string | null | undefined>,
		Hash: FormControl<string | null | undefined>,
		HashType: FormControl<DocumentHashType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Status: FormControl<DocumentStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentType | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		LatestVersion: FormControl<string | null | undefined>,
		DefaultVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
		Author: FormControl<string | null | undefined>,
		ApprovedVersion: FormControl<string | null | undefined>,
		PendingReviewVersion: FormControl<string | null | undefined>,
		ReviewStatus: FormControl<ReviewStatus | null | undefined>,
	}
	export function CreateDocumentDescriptionFormGroup() {
		return new FormGroup<DocumentDescriptionFormProperties>({
			Sha1: new FormControl<string | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined),
			HashType: new FormControl<DocumentHashType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DocumentStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<DocumentType | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			LatestVersion: new FormControl<string | null | undefined>(undefined),
			DefaultVersion: new FormControl<string | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			ApprovedVersion: new FormControl<string | null | undefined>(undefined),
			PendingReviewVersion: new FormControl<string | null | undefined>(undefined),
			ReviewStatus: new FormControl<ReviewStatus | null | undefined>(undefined),
		});

	}

	export enum DocumentHashType { Sha256 = 0, Sha1 = 1 }


	/** The status of a document. */
	export enum DocumentStatus { Creating = 0, Active = 1, Updating = 2, Deleting = 3, Failed = 4 }


	/** Parameters specified in a Systems Manager document that run on the server when the command is run.  */
	export interface DocumentParameter {
		Name?: string;
		Type?: DocumentParameterType;
		Description?: string;
		DefaultValue?: string;
	}

	/** Parameters specified in a Systems Manager document that run on the server when the command is run.  */
	export interface DocumentParameterFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<DocumentParameterType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateDocumentParameterFormGroup() {
		return new FormGroup<DocumentParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DocumentParameterType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentParameterType { String = 0, StringList = 1 }

	export enum PlatformType { Windows = 0, Linux = 1, MacOS = 2 }

	export enum DocumentType { Command = 0, Policy = 1, Automation = 2, Session = 3, Package = 4, ApplicationConfiguration = 5, ApplicationConfigurationSchema = 6, DeploymentStrategy = 7, ChangeCalendar = 8, 'Automation.ChangeTemplate' = 9, ProblemAnalysis = 10, ProblemAnalysisTemplate = 11, CloudFormation = 12, ConformancePackTemplate = 13, QuickSetup = 14 }

	export enum DocumentFormat { YAML = 0, JSON = 1, TEXT = 2 }


	/** An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformation {
		Name?: string;
	}

	/** An attribute of an attachment, such as the attachment name. */
	export interface AttachmentInformationFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentInformationFormGroup() {
		return new FormGroup<AttachmentInformationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SSM document required by the current document. */
	export interface DocumentRequires {

		/** Required */
		Name: string;
		Version?: string;
		RequireType?: string;
		VersionName?: string;
	}

	/** An SSM document required by the current document. */
	export interface DocumentRequiresFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		RequireType: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
	}
	export function CreateDocumentRequiresFormGroup() {
		return new FormGroup<DocumentRequiresFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
			RequireType: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the result of a document review request. */
	export interface ReviewInformation {
		ReviewedTime?: Date;
		Status?: ReviewStatus;
		Reviewer?: string;
	}

	/** Information about the result of a document review request. */
	export interface ReviewInformationFormProperties {
		ReviewedTime: FormControl<Date | null | undefined>,
		Status: FormControl<ReviewStatus | null | undefined>,
		Reviewer: FormControl<string | null | undefined>,
	}
	export function CreateReviewInformationFormGroup() {
		return new FormGroup<ReviewInformationFormProperties>({
			ReviewedTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ReviewStatus | null | undefined>(undefined),
			Reviewer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReviewStatus { APPROVED = 0, NOT_REVIEWED = 1, PENDING = 2, REJECTED = 3 }

	export interface CreateDocumentRequest {

		/** Required */
		Content: string;
		Requires?: Array<DocumentRequires>;
		Attachments?: Array<AttachmentsSource>;

		/** Required */
		Name: string;
		DisplayName?: string;
		VersionName?: string;
		DocumentType?: DocumentType;
		DocumentFormat?: DocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateDocumentRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentType | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentRequestFormGroup() {
		return new FormGroup<CreateDocumentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<DocumentType | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSource {
		Key?: AttachmentsSourceKey;
		Values?: Array<string>;
		Name?: string;
	}

	/** Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document. */
	export interface AttachmentsSourceFormProperties {
		Key: FormControl<AttachmentsSourceKey | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentsSourceFormGroup() {
		return new FormGroup<AttachmentsSourceFormProperties>({
			Key: new FormControl<AttachmentsSourceKey | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachmentsSourceKey { SourceUrl = 0, S3FileUrl = 1, AttachmentReference = 2 }

	export interface DocumentAlreadyExists {
	}
	export interface DocumentAlreadyExistsFormProperties {
	}
	export function CreateDocumentAlreadyExistsFormGroup() {
		return new FormGroup<DocumentAlreadyExistsFormProperties>({
		});

	}

	export interface MaxDocumentSizeExceeded {
	}
	export interface MaxDocumentSizeExceededFormProperties {
	}
	export function CreateMaxDocumentSizeExceededFormGroup() {
		return new FormGroup<MaxDocumentSizeExceededFormProperties>({
		});

	}

	export interface InvalidDocumentContent {
	}
	export interface InvalidDocumentContentFormProperties {
	}
	export function CreateInvalidDocumentContentFormGroup() {
		return new FormGroup<InvalidDocumentContentFormProperties>({
		});

	}

	export interface DocumentLimitExceeded {
	}
	export interface DocumentLimitExceededFormProperties {
	}
	export function CreateDocumentLimitExceededFormGroup() {
		return new FormGroup<DocumentLimitExceededFormProperties>({
		});

	}

	export interface InvalidDocumentSchemaVersion {
	}
	export interface InvalidDocumentSchemaVersionFormProperties {
	}
	export function CreateInvalidDocumentSchemaVersionFormGroup() {
		return new FormGroup<InvalidDocumentSchemaVersionFormProperties>({
		});

	}

	export interface CreateMaintenanceWindowResult {
		WindowId?: string;
	}
	export interface CreateMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMaintenanceWindowResultFormGroup() {
		return new FormGroup<CreateMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMaintenanceWindowRequest {

		/** Required */
		Name: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;

		/** Required */
		Schedule: string;
		ScheduleTimezone?: string;
		ScheduleOffset?: number | null;

		/** Required */
		Duration: number;

		/** Required */
		Cutoff: number;

		/** Required */
		AllowUnassociatedTargets: boolean;
		ClientToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMaintenanceWindowRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,

		/** Required */
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,

		/** Required */
		Duration: FormControl<number | null | undefined>,

		/** Required */
		Cutoff: FormControl<number | null | undefined>,

		/** Required */
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMaintenanceWindowRequestFormGroup() {
		return new FormGroup<CreateMaintenanceWindowRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Cutoff: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdempotentParameterMismatch {
	}
	export interface IdempotentParameterMismatchFormProperties {
	}
	export function CreateIdempotentParameterMismatchFormGroup() {
		return new FormGroup<IdempotentParameterMismatchFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateOpsItemResponse {
		OpsItemId?: string;
		OpsItemArn?: string;
	}
	export interface CreateOpsItemResponseFormProperties {
		OpsItemId: FormControl<string | null | undefined>,
		OpsItemArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsItemResponseFormGroup() {
		return new FormGroup<CreateOpsItemResponseFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			OpsItemArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOpsItemRequest {

		/** Required */
		Description: string;
		OpsItemType?: string;
		OperationalData?: OpsItemOperationalData;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;

		/** Required */
		Source: string;

		/** Required */
		Title: string;
		Tags?: Array<Tag>;
		Category?: string;
		Severity?: string;
		ActualStartTime?: Date;
		ActualEndTime?: Date;
		PlannedStartTime?: Date;
		PlannedEndTime?: Date;
		AccountId?: string;
	}
	export interface CreateOpsItemRequestFormProperties {

		/** Required */
		Description: FormControl<string | null | undefined>,
		OpsItemType: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		ActualStartTime: FormControl<Date | null | undefined>,
		ActualEndTime: FormControl<Date | null | undefined>,
		PlannedStartTime: FormControl<Date | null | undefined>,
		PlannedEndTime: FormControl<Date | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsItemRequestFormGroup() {
		return new FormGroup<CreateOpsItemRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OpsItemType: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Category: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			ActualStartTime: new FormControl<Date | null | undefined>(undefined),
			ActualEndTime: new FormControl<Date | null | undefined>(undefined),
			PlannedStartTime: new FormControl<Date | null | undefined>(undefined),
			PlannedEndTime: new FormControl<Date | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpsItemOperationalData {
	}
	export interface OpsItemOperationalDataFormProperties {
	}
	export function CreateOpsItemOperationalDataFormGroup() {
		return new FormGroup<OpsItemOperationalDataFormProperties>({
		});

	}


	/** A notification about the OpsItem. */
	export interface OpsItemNotification {
		Arn?: string;
	}

	/** A notification about the OpsItem. */
	export interface OpsItemNotificationFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateOpsItemNotificationFormGroup() {
		return new FormGroup<OpsItemNotificationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource. */
	export interface RelatedOpsItem {

		/** Required */
		OpsItemId: string;
	}

	/** An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource. */
	export interface RelatedOpsItemFormProperties {

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,
	}
	export function CreateRelatedOpsItemFormGroup() {
		return new FormGroup<RelatedOpsItemFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpsItemAlreadyExistsException {
	}
	export interface OpsItemAlreadyExistsExceptionFormProperties {
	}
	export function CreateOpsItemAlreadyExistsExceptionFormGroup() {
		return new FormGroup<OpsItemAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface OpsItemAccessDeniedException {
	}
	export interface OpsItemAccessDeniedExceptionFormProperties {
	}
	export function CreateOpsItemAccessDeniedExceptionFormGroup() {
		return new FormGroup<OpsItemAccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateOpsMetadataResult {
		OpsMetadataArn?: string;
	}
	export interface CreateOpsMetadataResultFormProperties {
		OpsMetadataArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsMetadataResultFormGroup() {
		return new FormGroup<CreateOpsMetadataResultFormProperties>({
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOpsMetadataRequest {

		/** Required */
		ResourceId: string;
		Metadata?: MetadataMap;
		Tags?: Array<Tag>;
	}
	export interface CreateOpsMetadataRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpsMetadataRequestFormGroup() {
		return new FormGroup<CreateOpsMetadataRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MetadataMap {
	}
	export interface MetadataMapFormProperties {
	}
	export function CreateMetadataMapFormGroup() {
		return new FormGroup<MetadataMapFormProperties>({
		});

	}

	export interface OpsMetadataAlreadyExistsException {
	}
	export interface OpsMetadataAlreadyExistsExceptionFormProperties {
	}
	export function CreateOpsMetadataAlreadyExistsExceptionFormGroup() {
		return new FormGroup<OpsMetadataAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface OpsMetadataTooManyUpdatesException {
	}
	export interface OpsMetadataTooManyUpdatesExceptionFormProperties {
	}
	export function CreateOpsMetadataTooManyUpdatesExceptionFormGroup() {
		return new FormGroup<OpsMetadataTooManyUpdatesExceptionFormProperties>({
		});

	}

	export interface OpsMetadataInvalidArgumentException {
	}
	export interface OpsMetadataInvalidArgumentExceptionFormProperties {
	}
	export function CreateOpsMetadataInvalidArgumentExceptionFormGroup() {
		return new FormGroup<OpsMetadataInvalidArgumentExceptionFormProperties>({
		});

	}

	export interface OpsMetadataLimitExceededException {
	}
	export interface OpsMetadataLimitExceededExceptionFormProperties {
	}
	export function CreateOpsMetadataLimitExceededExceptionFormGroup() {
		return new FormGroup<OpsMetadataLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreatePatchBaselineResult {
		BaselineId?: string;
	}
	export interface CreatePatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePatchBaselineResultFormGroup() {
		return new FormGroup<CreatePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePatchBaselineRequest {
		OperatingSystem?: OperatingSystem;

		/** Required */
		Name: string;
		GlobalFilters?: PatchFilterGroup;
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: PatchAction;
		Description?: string;
		Sources?: Array<PatchSource>;
		ClientToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreatePatchBaselineRequestFormProperties {
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<PatchAction | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePatchBaselineRequestFormGroup() {
		return new FormGroup<CreatePatchBaselineRequestFormProperties>({
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApprovedPatchesComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<PatchAction | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperatingSystem { WINDOWS = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, AMAZON_LINUX_2022 = 3, UBUNTU = 4, REDHAT_ENTERPRISE_LINUX = 5, SUSE = 6, CENTOS = 7, ORACLE_LINUX = 8, DEBIAN = 9, MACOS = 10, RASPBIAN = 11, ROCKY_LINUX = 12, ALMA_LINUX = 13, AMAZON_LINUX_2023 = 14 }


	/** A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroup {

		/** Required */
		PatchFilters: Array<PatchFilter>;
	}

	/** A set of patch filters, typically used for approval rules. */
	export interface PatchFilterGroupFormProperties {
	}
	export function CreatePatchFilterGroupFormGroup() {
		return new FormGroup<PatchFilterGroupFormProperties>({
		});

	}


	/** <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>, <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>.</p> <p>The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office 2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilter {

		/** Required */
		Key: PatchFilterKey;

		/** Required */
		Values: Array<string>;
	}

	/** <p> Defines which patches should be included in a patch baseline.</p> <p>A patch filter consists of a key and a set of values. The filter key is a patch property. For example, the available filter keys for <code>WINDOWS</code> are <code>PATCH_SET</code>, <code>PRODUCT</code>, <code>PRODUCT_FAMILY</code>, <code>CLASSIFICATION</code>, and <code>MSRC_SEVERITY</code>.</p> <p>The filter values define a matching criterion for the patch property indicated by the key. For example, if the filter key is <code>PRODUCT</code> and the filter values are <code>["Office 2013", "Office 2016"]</code>, then the filter accepts all patches where product name is either "Office 2013" or "Office 2016". The filter values can be exact values for the patch property given as a key, or a wildcard (*), which matches all values.</p> <p>You can view lists of valid values for the patch properties by running the <code>DescribePatchProperties</code> command. For information about which patch properties can be used with each major operating system, see <a>DescribePatchProperties</a>.</p> */
	export interface PatchFilterFormProperties {

		/** Required */
		Key: FormControl<PatchFilterKey | null | undefined>,
	}
	export function CreatePatchFilterFormGroup() {
		return new FormGroup<PatchFilterFormProperties>({
			Key: new FormControl<PatchFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatchFilterKey { ARCH = 0, ADVISORY_ID = 1, BUGZILLA_ID = 2, PATCH_SET = 3, PRODUCT = 4, PRODUCT_FAMILY = 5, CLASSIFICATION = 6, CVE_ID = 7, EPOCH = 8, MSRC_SEVERITY = 9, NAME = 10, PATCH_ID = 11, SECTION = 12, PRIORITY = 13, REPOSITORY = 14, RELEASE = 15, SEVERITY = 16, SECURITY = 17, VERSION = 18 }


	/** A set of rules defining the approval rules for a patch baseline. */
	export interface PatchRuleGroup {

		/** Required */
		PatchRules: Array<PatchRule>;
	}

	/** A set of rules defining the approval rules for a patch baseline. */
	export interface PatchRuleGroupFormProperties {
	}
	export function CreatePatchRuleGroupFormGroup() {
		return new FormGroup<PatchRuleGroupFormProperties>({
		});

	}


	/** Defines an approval rule for a patch baseline. */
	export interface PatchRule {

		/** Required */
		PatchFilterGroup: PatchFilterGroup;
		ComplianceLevel?: PatchComplianceLevel;
		ApproveAfterDays?: number | null;
		ApproveUntilDate?: string;
		EnableNonSecurity?: boolean | null;
	}

	/** Defines an approval rule for a patch baseline. */
	export interface PatchRuleFormProperties {
		ComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApproveAfterDays: FormControl<number | null | undefined>,
		ApproveUntilDate: FormControl<string | null | undefined>,
		EnableNonSecurity: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchRuleFormGroup() {
		return new FormGroup<PatchRuleFormProperties>({
			ComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApproveAfterDays: new FormControl<number | null | undefined>(undefined),
			ApproveUntilDate: new FormControl<string | null | undefined>(undefined),
			EnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PatchComplianceLevel { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }

	export enum PatchAction { ALLOW_AS_DEPENDENCY = 0, BLOCK = 1 }


	/** Information about the patches to use to update the managed nodes, including target operating systems and source repository. Applies to Linux managed nodes only. */
	export interface PatchSource {

		/** Required */
		Name: string;

		/** Required */
		Products: Array<string>;

		/** Required */
		Configuration: string;
	}

	/** Information about the patches to use to update the managed nodes, including target operating systems and source repository. Applies to Linux managed nodes only. */
	export interface PatchSourceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreatePatchSourceFormGroup() {
		return new FormGroup<PatchSourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResourceDataSyncResult {
	}
	export interface CreateResourceDataSyncResultFormProperties {
	}
	export function CreateCreateResourceDataSyncResultFormGroup() {
		return new FormGroup<CreateResourceDataSyncResultFormProperties>({
		});

	}

	export interface CreateResourceDataSyncRequest {

		/** Required */
		SyncName: string;
		S3Destination?: ResourceDataSyncS3Destination;
		SyncType?: string;
		SyncSource?: ResourceDataSyncSource;
	}
	export interface CreateResourceDataSyncRequestFormProperties {

		/** Required */
		SyncName: FormControl<string | null | undefined>,
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceDataSyncRequestFormGroup() {
		return new FormGroup<CreateResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SyncType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the target S3 bucket for the resource data sync. */
	export interface ResourceDataSyncS3Destination {

		/** Required */
		BucketName: string;
		Prefix?: string;

		/** Required */
		SyncFormat: ResourceDataSyncS3Format;

		/** Required */
		Region: string;
		AWSKMSKeyARN?: string;
		DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
	}

	/** Information about the target S3 bucket for the resource data sync. */
	export interface ResourceDataSyncS3DestinationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,

		/** Required */
		SyncFormat: FormControl<ResourceDataSyncS3Format | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,
		AWSKMSKeyARN: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncS3DestinationFormGroup() {
		return new FormGroup<ResourceDataSyncS3DestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			SyncFormat: new FormControl<ResourceDataSyncS3Format | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AWSKMSKeyARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceDataSyncS3Format { JsonSerDe = 0 }


	/** Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID. */
	export interface ResourceDataSyncDestinationDataSharing {
		DestinationDataSharingType?: string;
	}

	/** Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID. */
	export interface ResourceDataSyncDestinationDataSharingFormProperties {
		DestinationDataSharingType: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncDestinationDataSharingFormGroup() {
		return new FormGroup<ResourceDataSyncDestinationDataSharingFormProperties>({
			DestinationDataSharingType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSource {

		/** Required */
		SourceType: string;
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

		/** Required */
		SourceRegions: Array<string>;
		IncludeFutureRegions?: boolean | null;
		EnableAllOpsDataSources?: boolean | null;
	}

	/** Information about the source of the data included in the resource data sync. */
	export interface ResourceDataSyncSourceFormProperties {

		/** Required */
		SourceType: FormControl<string | null | undefined>,
		IncludeFutureRegions: FormControl<boolean | null | undefined>,
		EnableAllOpsDataSources: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceDataSyncSourceFormGroup() {
		return new FormGroup<ResourceDataSyncSourceFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncludeFutureRegions: new FormControl<boolean | null | undefined>(undefined),
			EnableAllOpsDataSources: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions. */
	export interface ResourceDataSyncAwsOrganizationsSource {

		/** Required */
		OrganizationSourceType: string;
		OrganizationalUnits?: Array<ResourceDataSyncOrganizationalUnit>;
	}

	/** Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions. */
	export interface ResourceDataSyncAwsOrganizationsSourceFormProperties {

		/** Required */
		OrganizationSourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncAwsOrganizationsSourceFormGroup() {
		return new FormGroup<ResourceDataSyncAwsOrganizationsSourceFormProperties>({
			OrganizationSourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnit {
		OrganizationalUnitId?: string;
	}

	/** The Organizations organizational unit data source for the sync. */
	export interface ResourceDataSyncOrganizationalUnitFormProperties {
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncOrganizationalUnitFormGroup() {
		return new FormGroup<ResourceDataSyncOrganizationalUnitFormProperties>({
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceDataSyncCountExceededException {
	}
	export interface ResourceDataSyncCountExceededExceptionFormProperties {
	}
	export function CreateResourceDataSyncCountExceededExceptionFormGroup() {
		return new FormGroup<ResourceDataSyncCountExceededExceptionFormProperties>({
		});

	}

	export interface ResourceDataSyncAlreadyExistsException {
	}
	export interface ResourceDataSyncAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceDataSyncAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceDataSyncAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceDataSyncInvalidConfigurationException {
	}
	export interface ResourceDataSyncInvalidConfigurationExceptionFormProperties {
	}
	export function CreateResourceDataSyncInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<ResourceDataSyncInvalidConfigurationExceptionFormProperties>({
		});

	}

	export interface DeleteActivationResult {
	}
	export interface DeleteActivationResultFormProperties {
	}
	export function CreateDeleteActivationResultFormGroup() {
		return new FormGroup<DeleteActivationResultFormProperties>({
		});

	}

	export interface DeleteActivationRequest {

		/** Required */
		ActivationId: string;
	}
	export interface DeleteActivationRequestFormProperties {

		/** Required */
		ActivationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActivationRequestFormGroup() {
		return new FormGroup<DeleteActivationRequestFormProperties>({
			ActivationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidActivationId {
	}
	export interface InvalidActivationIdFormProperties {
	}
	export function CreateInvalidActivationIdFormGroup() {
		return new FormGroup<InvalidActivationIdFormProperties>({
		});

	}

	export interface InvalidActivation {
	}
	export interface InvalidActivationFormProperties {
	}
	export function CreateInvalidActivationFormGroup() {
		return new FormGroup<InvalidActivationFormProperties>({
		});

	}

	export interface DeleteAssociationResult {
	}
	export interface DeleteAssociationResultFormProperties {
	}
	export function CreateDeleteAssociationResultFormGroup() {
		return new FormGroup<DeleteAssociationResultFormProperties>({
		});

	}

	export interface DeleteAssociationRequest {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
	}
	export interface DeleteAssociationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssociationRequestFormGroup() {
		return new FormGroup<DeleteAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociationDoesNotExist {
	}
	export interface AssociationDoesNotExistFormProperties {
	}
	export function CreateAssociationDoesNotExistFormGroup() {
		return new FormGroup<AssociationDoesNotExistFormProperties>({
		});

	}

	export interface DeleteDocumentResult {
	}
	export interface DeleteDocumentResultFormProperties {
	}
	export function CreateDeleteDocumentResultFormGroup() {
		return new FormGroup<DeleteDocumentResultFormProperties>({
		});

	}

	export interface DeleteDocumentRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string;
		VersionName?: string;
		Force?: boolean | null;
	}
	export interface DeleteDocumentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDocumentRequestFormGroup() {
		return new FormGroup<DeleteDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidDocumentOperation {
	}
	export interface InvalidDocumentOperationFormProperties {
	}
	export function CreateInvalidDocumentOperationFormGroup() {
		return new FormGroup<InvalidDocumentOperationFormProperties>({
		});

	}

	export interface AssociatedInstances {
	}
	export interface AssociatedInstancesFormProperties {
	}
	export function CreateAssociatedInstancesFormGroup() {
		return new FormGroup<AssociatedInstancesFormProperties>({
		});

	}

	export interface DeleteInventoryResult {
		DeletionId?: string;
		TypeName?: string;
		DeletionSummary?: InventoryDeletionSummary;
	}
	export interface DeleteInventoryResultFormProperties {
		DeletionId: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInventoryResultFormGroup() {
		return new FormGroup<DeleteInventoryResultFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the delete operation. */
	export interface InventoryDeletionSummary {
		TotalCount?: number | null;
		RemainingCount?: number | null;
		SummaryItems?: Array<InventoryDeletionSummaryItem>;
	}

	/** Information about the delete operation. */
	export interface InventoryDeletionSummaryFormProperties {
		TotalCount: FormControl<number | null | undefined>,
		RemainingCount: FormControl<number | null | undefined>,
	}
	export function CreateInventoryDeletionSummaryFormGroup() {
		return new FormGroup<InventoryDeletionSummaryFormProperties>({
			TotalCount: new FormControl<number | null | undefined>(undefined),
			RemainingCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Either a count, remaining count, or a version number in a delete inventory summary. */
	export interface InventoryDeletionSummaryItem {
		Version?: string;
		Count?: number | null;
		RemainingCount?: number | null;
	}

	/** Either a count, remaining count, or a version number in a delete inventory summary. */
	export interface InventoryDeletionSummaryItemFormProperties {
		Version: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
		RemainingCount: FormControl<number | null | undefined>,
	}
	export function CreateInventoryDeletionSummaryItemFormGroup() {
		return new FormGroup<InventoryDeletionSummaryItemFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			RemainingCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteInventoryRequest {

		/** Required */
		TypeName: string;
		SchemaDeleteOption?: InventorySchemaDeleteOption;
		DryRun?: boolean | null;
		ClientToken?: string;
	}
	export interface DeleteInventoryRequestFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		SchemaDeleteOption: FormControl<InventorySchemaDeleteOption | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInventoryRequestFormGroup() {
		return new FormGroup<DeleteInventoryRequestFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaDeleteOption: new FormControl<InventorySchemaDeleteOption | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InventorySchemaDeleteOption { DisableSchema = 0, DeleteSchema = 1 }

	export interface InvalidTypeNameException {
	}
	export interface InvalidTypeNameExceptionFormProperties {
	}
	export function CreateInvalidTypeNameExceptionFormGroup() {
		return new FormGroup<InvalidTypeNameExceptionFormProperties>({
		});

	}

	export interface InvalidOptionException {
	}
	export interface InvalidOptionExceptionFormProperties {
	}
	export function CreateInvalidOptionExceptionFormGroup() {
		return new FormGroup<InvalidOptionExceptionFormProperties>({
		});

	}

	export interface InvalidDeleteInventoryParametersException {
	}
	export interface InvalidDeleteInventoryParametersExceptionFormProperties {
	}
	export function CreateInvalidDeleteInventoryParametersExceptionFormGroup() {
		return new FormGroup<InvalidDeleteInventoryParametersExceptionFormProperties>({
		});

	}

	export interface InvalidInventoryRequestException {
	}
	export interface InvalidInventoryRequestExceptionFormProperties {
	}
	export function CreateInvalidInventoryRequestExceptionFormGroup() {
		return new FormGroup<InvalidInventoryRequestExceptionFormProperties>({
		});

	}

	export interface DeleteMaintenanceWindowResult {
		WindowId?: string;
	}
	export interface DeleteMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeleteMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMaintenanceWindowRequest {

		/** Required */
		WindowId: string;
	}
	export interface DeleteMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeleteMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOpsMetadataResult {
	}
	export interface DeleteOpsMetadataResultFormProperties {
	}
	export function CreateDeleteOpsMetadataResultFormGroup() {
		return new FormGroup<DeleteOpsMetadataResultFormProperties>({
		});

	}

	export interface DeleteOpsMetadataRequest {

		/** Required */
		OpsMetadataArn: string;
	}
	export interface DeleteOpsMetadataRequestFormProperties {

		/** Required */
		OpsMetadataArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOpsMetadataRequestFormGroup() {
		return new FormGroup<DeleteOpsMetadataRequestFormProperties>({
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpsMetadataNotFoundException {
	}
	export interface OpsMetadataNotFoundExceptionFormProperties {
	}
	export function CreateOpsMetadataNotFoundExceptionFormGroup() {
		return new FormGroup<OpsMetadataNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteParameterResult {
	}
	export interface DeleteParameterResultFormProperties {
	}
	export function CreateDeleteParameterResultFormGroup() {
		return new FormGroup<DeleteParameterResultFormProperties>({
		});

	}

	export interface DeleteParameterRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteParameterRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParameterRequestFormGroup() {
		return new FormGroup<DeleteParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ParameterNotFound {
	}
	export interface ParameterNotFoundFormProperties {
	}
	export function CreateParameterNotFoundFormGroup() {
		return new FormGroup<ParameterNotFoundFormProperties>({
		});

	}

	export interface DeleteParametersResult {
		DeletedParameters?: Array<string>;
		InvalidParameters?: Array<string>;
	}
	export interface DeleteParametersResultFormProperties {
	}
	export function CreateDeleteParametersResultFormGroup() {
		return new FormGroup<DeleteParametersResultFormProperties>({
		});

	}

	export interface DeleteParametersRequest {

		/** Required */
		Names: Array<string>;
	}
	export interface DeleteParametersRequestFormProperties {
	}
	export function CreateDeleteParametersRequestFormGroup() {
		return new FormGroup<DeleteParametersRequestFormProperties>({
		});

	}

	export interface DeletePatchBaselineResult {
		BaselineId?: string;
	}
	export interface DeletePatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePatchBaselineResultFormGroup() {
		return new FormGroup<DeletePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePatchBaselineRequest {

		/** Required */
		BaselineId: string;
	}
	export interface DeletePatchBaselineRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePatchBaselineRequestFormGroup() {
		return new FormGroup<DeletePatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteResourceDataSyncResult {
	}
	export interface DeleteResourceDataSyncResultFormProperties {
	}
	export function CreateDeleteResourceDataSyncResultFormGroup() {
		return new FormGroup<DeleteResourceDataSyncResultFormProperties>({
		});

	}

	export interface DeleteResourceDataSyncRequest {

		/** Required */
		SyncName: string;
		SyncType?: string;
	}
	export interface DeleteResourceDataSyncRequestFormProperties {

		/** Required */
		SyncName: FormControl<string | null | undefined>,
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceDataSyncRequestFormGroup() {
		return new FormGroup<DeleteResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SyncType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceDataSyncNotFoundException {
	}
	export interface ResourceDataSyncNotFoundExceptionFormProperties {
	}
	export function CreateResourceDataSyncNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceDataSyncNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		PolicyId: string;

		/** Required */
		PolicyHash: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		PolicyHash: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourcePolicyInvalidParameterException {
	}
	export interface ResourcePolicyInvalidParameterExceptionFormProperties {
	}
	export function CreateResourcePolicyInvalidParameterExceptionFormGroup() {
		return new FormGroup<ResourcePolicyInvalidParameterExceptionFormProperties>({
		});

	}

	export interface ResourcePolicyConflictException {
	}
	export interface ResourcePolicyConflictExceptionFormProperties {
	}
	export function CreateResourcePolicyConflictExceptionFormGroup() {
		return new FormGroup<ResourcePolicyConflictExceptionFormProperties>({
		});

	}

	export interface DeregisterManagedInstanceResult {
	}
	export interface DeregisterManagedInstanceResultFormProperties {
	}
	export function CreateDeregisterManagedInstanceResultFormGroup() {
		return new FormGroup<DeregisterManagedInstanceResultFormProperties>({
		});

	}

	export interface DeregisterManagedInstanceRequest {

		/** Required */
		InstanceId: string;
	}
	export interface DeregisterManagedInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterManagedInstanceRequestFormGroup() {
		return new FormGroup<DeregisterManagedInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
	}
	export interface DeregisterPatchBaselineForPatchGroupResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<DeregisterPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			PatchGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterPatchBaselineForPatchGroupRequest {

		/** Required */
		BaselineId: string;

		/** Required */
		PatchGroup: string;
	}
	export interface DeregisterPatchBaselineForPatchGroupRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<DeregisterPatchBaselineForPatchGroupRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterTargetFromMaintenanceWindowResult {
		WindowId?: string;
		WindowTargetId?: string;
	}
	export interface DeregisterTargetFromMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTargetFromMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeregisterTargetFromMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterTargetFromMaintenanceWindowRequest {

		/** Required */
		WindowId: string;

		/** Required */
		WindowTargetId: string;
		Safe?: boolean | null;
	}
	export interface DeregisterTargetFromMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		WindowTargetId: FormControl<string | null | undefined>,
		Safe: FormControl<boolean | null | undefined>,
	}
	export function CreateDeregisterTargetFromMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeregisterTargetFromMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Safe: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TargetInUseException {
	}
	export interface TargetInUseExceptionFormProperties {
	}
	export function CreateTargetInUseExceptionFormGroup() {
		return new FormGroup<TargetInUseExceptionFormProperties>({
		});

	}

	export interface DeregisterTaskFromMaintenanceWindowResult {
		WindowId?: string;
		WindowTaskId?: string;
	}
	export interface DeregisterTaskFromMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTaskFromMaintenanceWindowResultFormGroup() {
		return new FormGroup<DeregisterTaskFromMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterTaskFromMaintenanceWindowRequest {

		/** Required */
		WindowId: string;

		/** Required */
		WindowTaskId: string;
	}
	export interface DeregisterTaskFromMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTaskFromMaintenanceWindowRequestFormGroup() {
		return new FormGroup<DeregisterTaskFromMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeActivationsResult {
		ActivationList?: Array<Activation>;
		NextToken?: string;
	}
	export interface DescribeActivationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivationsResultFormGroup() {
		return new FormGroup<DescribeActivationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed node. */
	export interface Activation {
		ActivationId?: string;
		Description?: string;
		DefaultInstanceName?: string;
		IamRole?: string;
		RegistrationLimit?: number | null;
		RegistrationsCount?: number | null;
		ExpirationDate?: Date;
		Expired?: boolean | null;
		CreatedDate?: Date;
		Tags?: Array<Tag>;
	}

	/** An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed node. */
	export interface ActivationFormProperties {
		ActivationId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultInstanceName: FormControl<string | null | undefined>,
		IamRole: FormControl<string | null | undefined>,
		RegistrationLimit: FormControl<number | null | undefined>,
		RegistrationsCount: FormControl<number | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Expired: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivationFormGroup() {
		return new FormGroup<ActivationFormProperties>({
			ActivationId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceName: new FormControl<string | null | undefined>(undefined),
			IamRole: new FormControl<string | null | undefined>(undefined),
			RegistrationLimit: new FormControl<number | null | undefined>(undefined),
			RegistrationsCount: new FormControl<number | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Expired: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeActivationsRequest {
		Filters?: Array<DescribeActivationsFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeActivationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivationsRequestFormGroup() {
		return new FormGroup<DescribeActivationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilter {
		FilterKey?: DescribeActivationsFilterKeys;
		FilterValues?: Array<string>;
	}

	/** Filter for the DescribeActivation API. */
	export interface DescribeActivationsFilterFormProperties {
		FilterKey: FormControl<DescribeActivationsFilterKeys | null | undefined>,
	}
	export function CreateDescribeActivationsFilterFormGroup() {
		return new FormGroup<DescribeActivationsFilterFormProperties>({
			FilterKey: new FormControl<DescribeActivationsFilterKeys | null | undefined>(undefined),
		});

	}

	export enum DescribeActivationsFilterKeys { ActivationIds = 0, DefaultInstanceName = 1, IamRole = 2 }

	export interface InvalidFilter {
	}
	export interface InvalidFilterFormProperties {
	}
	export function CreateInvalidFilterFormGroup() {
		return new FormGroup<InvalidFilterFormProperties>({
		});

	}

	export interface InvalidNextToken {
	}
	export interface InvalidNextTokenFormProperties {
	}
	export function CreateInvalidNextTokenFormGroup() {
		return new FormGroup<InvalidNextTokenFormProperties>({
		});

	}

	export interface DescribeAssociationResult {
		AssociationDescription?: AssociationDescription;
	}
	export interface DescribeAssociationResultFormProperties {
	}
	export function CreateDescribeAssociationResultFormGroup() {
		return new FormGroup<DescribeAssociationResultFormProperties>({
		});

	}

	export interface DescribeAssociationRequest {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
		AssociationVersion?: string;
	}
	export interface DescribeAssociationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationRequestFormGroup() {
		return new FormGroup<DescribeAssociationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidAssociationVersion {
	}
	export interface InvalidAssociationVersionFormProperties {
	}
	export function CreateInvalidAssociationVersionFormGroup() {
		return new FormGroup<InvalidAssociationVersionFormProperties>({
		});

	}

	export interface DescribeAssociationExecutionTargetsResult {
		AssociationExecutionTargets?: Array<AssociationExecutionTarget>;
		NextToken?: string;
	}
	export interface DescribeAssociationExecutionTargetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionTargetsResultFormGroup() {
		return new FormGroup<DescribeAssociationExecutionTargetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes information about the specified association execution. */
	export interface AssociationExecutionTarget {
		AssociationId?: string;
		AssociationVersion?: string;
		ExecutionId?: string;
		ResourceId?: string;
		ResourceType?: string;
		Status?: string;
		DetailedStatus?: string;
		LastExecutionDate?: Date;
		OutputSource?: OutputSource;
	}

	/** Includes information about the specified association execution. */
	export interface AssociationExecutionTargetFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssociationExecutionTargetFormGroup() {
		return new FormGroup<AssociationExecutionTargetFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the source where the association execution details are stored. */
	export interface OutputSource {
		OutputSourceId?: string;
		OutputSourceType?: string;
	}

	/** Information about the source where the association execution details are stored. */
	export interface OutputSourceFormProperties {
		OutputSourceId: FormControl<string | null | undefined>,
		OutputSourceType: FormControl<string | null | undefined>,
	}
	export function CreateOutputSourceFormGroup() {
		return new FormGroup<OutputSourceFormProperties>({
			OutputSourceId: new FormControl<string | null | undefined>(undefined),
			OutputSourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssociationExecutionTargetsRequest {

		/** Required */
		AssociationId: string;

		/** Required */
		ExecutionId: string;
		Filters?: Array<AssociationExecutionTargetsFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAssociationExecutionTargetsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionTargetsRequestFormGroup() {
		return new FormGroup<DescribeAssociationExecutionTargetsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters for the association execution. */
	export interface AssociationExecutionTargetsFilter {

		/** Required */
		Key: AssociationExecutionTargetsFilterKey;

		/** Required */
		Value: string;
	}

	/** Filters for the association execution. */
	export interface AssociationExecutionTargetsFilterFormProperties {

		/** Required */
		Key: FormControl<AssociationExecutionTargetsFilterKey | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAssociationExecutionTargetsFilterFormGroup() {
		return new FormGroup<AssociationExecutionTargetsFilterFormProperties>({
			Key: new FormControl<AssociationExecutionTargetsFilterKey | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociationExecutionTargetsFilterKey { Status = 0, ResourceId = 1, ResourceType = 2 }

	export interface AssociationExecutionDoesNotExist {
	}
	export interface AssociationExecutionDoesNotExistFormProperties {
	}
	export function CreateAssociationExecutionDoesNotExistFormGroup() {
		return new FormGroup<AssociationExecutionDoesNotExistFormProperties>({
		});

	}

	export interface DescribeAssociationExecutionsResult {
		AssociationExecutions?: Array<AssociationExecution>;
		NextToken?: string;
	}
	export interface DescribeAssociationExecutionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionsResultFormGroup() {
		return new FormGroup<DescribeAssociationExecutionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes information about the specified association. */
	export interface AssociationExecution {
		AssociationId?: string;
		AssociationVersion?: string;
		ExecutionId?: string;
		Status?: string;
		DetailedStatus?: string;
		CreatedTime?: Date;
		LastExecutionDate?: Date;
		ResourceCountByStatus?: string;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}

	/** Includes information about the specified association. */
	export interface AssociationExecutionFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
		ResourceCountByStatus: FormControl<string | null | undefined>,
	}
	export function CreateAssociationExecutionFormGroup() {
		return new FormGroup<AssociationExecutionFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
			ResourceCountByStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssociationExecutionsRequest {

		/** Required */
		AssociationId: string;
		Filters?: Array<AssociationExecutionFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAssociationExecutionsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssociationExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAssociationExecutionsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters used in the request. */
	export interface AssociationExecutionFilter {

		/** Required */
		Key: AssociationExecutionFilterKey;

		/** Required */
		Value: string;

		/** Required */
		Type: AssociationFilterOperatorType;
	}

	/** Filters used in the request. */
	export interface AssociationExecutionFilterFormProperties {

		/** Required */
		Key: FormControl<AssociationExecutionFilterKey | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<AssociationFilterOperatorType | null | undefined>,
	}
	export function CreateAssociationExecutionFilterFormGroup() {
		return new FormGroup<AssociationExecutionFilterFormProperties>({
			Key: new FormControl<AssociationExecutionFilterKey | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<AssociationFilterOperatorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociationExecutionFilterKey { ExecutionId = 0, Status = 1, CreatedTime = 2 }

	export enum AssociationFilterOperatorType { EQUAL = 0, LESS_THAN = 1, GREATER_THAN = 2 }

	export interface DescribeAutomationExecutionsResult {
		AutomationExecutionMetadataList?: Array<AutomationExecutionMetadata>;
		NextToken?: string;
	}
	export interface DescribeAutomationExecutionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutomationExecutionsResultFormGroup() {
		return new FormGroup<DescribeAutomationExecutionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a specific Automation execution. */
	export interface AutomationExecutionMetadata {
		AutomationExecutionId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		AutomationExecutionStatus?: AutomationExecutionStatus;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		ExecutedBy?: string;
		LogFile?: string;
		Outputs?: AutomationParameterMap;
		Mode?: ExecutionMode;
		ParentAutomationExecutionId?: string;
		CurrentStepName?: string;
		CurrentAction?: string;
		FailureMessage?: string;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;
		ResolvedTargets?: ResolvedTargets;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Target?: string;
		AutomationType?: AutomationType;
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
		AutomationSubtype?: AutomationSubtype;
		ScheduledTime?: Date;
		Runbooks?: Array<Runbook>;
		OpsItemId?: string;
		AssociationId?: string;
		ChangeRequestName?: string;
	}

	/** Details about a specific Automation execution. */
	export interface AutomationExecutionMetadataFormProperties {
		AutomationExecutionId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		AutomationExecutionStatus: FormControl<AutomationExecutionStatus | null | undefined>,
		ExecutionStartTime: FormControl<Date | null | undefined>,
		ExecutionEndTime: FormControl<Date | null | undefined>,
		ExecutedBy: FormControl<string | null | undefined>,
		LogFile: FormControl<string | null | undefined>,
		Mode: FormControl<ExecutionMode | null | undefined>,
		ParentAutomationExecutionId: FormControl<string | null | undefined>,
		CurrentStepName: FormControl<string | null | undefined>,
		CurrentAction: FormControl<string | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
		TargetParameterName: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		AutomationType: FormControl<AutomationType | null | undefined>,
		AutomationSubtype: FormControl<AutomationSubtype | null | undefined>,
		ScheduledTime: FormControl<Date | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		ChangeRequestName: FormControl<string | null | undefined>,
	}
	export function CreateAutomationExecutionMetadataFormGroup() {
		return new FormGroup<AutomationExecutionMetadataFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			AutomationExecutionStatus: new FormControl<AutomationExecutionStatus | null | undefined>(undefined),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			ExecutedBy: new FormControl<string | null | undefined>(undefined),
			LogFile: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ExecutionMode | null | undefined>(undefined),
			ParentAutomationExecutionId: new FormControl<string | null | undefined>(undefined),
			CurrentStepName: new FormControl<string | null | undefined>(undefined),
			CurrentAction: new FormControl<string | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			AutomationType: new FormControl<AutomationType | null | undefined>(undefined),
			AutomationSubtype: new FormControl<AutomationSubtype | null | undefined>(undefined),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			ChangeRequestName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutomationExecutionStatus { Pending = 0, InProgress = 1, Waiting = 2, Success = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7, PendingApproval = 8, Approved = 9, Rejected = 10, Scheduled = 11, RunbookInProgress = 12, PendingChangeCalendarOverride = 13, ChangeCalendarOverrideApproved = 14, ChangeCalendarOverrideRejected = 15, CompletedWithSuccess = 16, CompletedWithFailure = 17 }

	export interface AutomationParameterMap {
	}
	export interface AutomationParameterMapFormProperties {
	}
	export function CreateAutomationParameterMapFormGroup() {
		return new FormGroup<AutomationParameterMapFormProperties>({
		});

	}

	export enum ExecutionMode { Auto = 0, Interactive = 1 }


	/** Information about targets that resolved during the Automation execution. */
	export interface ResolvedTargets {
		ParameterValues?: Array<string>;
		Truncated?: boolean | null;
	}

	/** Information about targets that resolved during the Automation execution. */
	export interface ResolvedTargetsFormProperties {
		Truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateResolvedTargetsFormGroup() {
		return new FormGroup<ResolvedTargetsFormProperties>({
			Truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AutomationType { CrossAccount = 0, Local = 1 }

	export enum AutomationSubtype { ChangeRequest = 0 }


	/** <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note> */
	export interface Runbook {

		/** Required */
		DocumentName: string;
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;
		MaxConcurrency?: string;
		MaxErrors?: string;
		TargetLocations?: Array<TargetLocation>;
	}

	/** <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note> */
	export interface RunbookFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		TargetParameterName: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
	}
	export function CreateRunbookFormGroup() {
		return new FormGroup<RunbookFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAutomationExecutionsRequest {
		Filters?: Array<AutomationExecutionFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAutomationExecutionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutomationExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAutomationExecutionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned. */
	export interface AutomationExecutionFilter {

		/** Required */
		Key: AutomationExecutionFilterKey;

		/** Required */
		Values: Array<string>;
	}

	/** A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned. */
	export interface AutomationExecutionFilterFormProperties {

		/** Required */
		Key: FormControl<AutomationExecutionFilterKey | null | undefined>,
	}
	export function CreateAutomationExecutionFilterFormGroup() {
		return new FormGroup<AutomationExecutionFilterFormProperties>({
			Key: new FormControl<AutomationExecutionFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutomationExecutionFilterKey { DocumentNamePrefix = 0, ExecutionStatus = 1, ExecutionId = 2, ParentExecutionId = 3, CurrentAction = 4, StartTimeBefore = 5, StartTimeAfter = 6, AutomationType = 7, TagKey = 8, TargetResourceGroup = 9, AutomationSubtype = 10, OpsItemId = 11 }

	export interface InvalidFilterKey {
	}
	export interface InvalidFilterKeyFormProperties {
	}
	export function CreateInvalidFilterKeyFormGroup() {
		return new FormGroup<InvalidFilterKeyFormProperties>({
		});

	}

	export interface InvalidFilterValue {
	}
	export interface InvalidFilterValueFormProperties {
	}
	export function CreateInvalidFilterValueFormGroup() {
		return new FormGroup<InvalidFilterValueFormProperties>({
		});

	}

	export interface DescribeAutomationStepExecutionsResult {
		StepExecutions?: Array<StepExecution>;
		NextToken?: string;
	}
	export interface DescribeAutomationStepExecutionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutomationStepExecutionsResultFormGroup() {
		return new FormGroup<DescribeAutomationStepExecutionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about an the execution state of an Automation step. */
	export interface StepExecution {
		StepName?: string;
		Action?: string;
		TimeoutSeconds?: number | null;
		OnFailure?: string;
		MaxAttempts?: number | null;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		StepStatus?: AutomationExecutionStatus;
		ResponseCode?: string;
		Inputs?: NormalStringMap;
		Outputs?: AutomationParameterMap;
		Response?: string;
		FailureMessage?: string;
		FailureDetails?: FailureDetails;
		StepExecutionId?: string;
		OverriddenParameters?: AutomationParameterMap;
		IsEnd?: boolean | null;
		NextStep?: string;
		IsCritical?: boolean | null;
		ValidNextSteps?: Array<string>;
		Targets?: Array<Target>;
		TargetLocation?: TargetLocation;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}

	/** Detailed information about an the execution state of an Automation step. */
	export interface StepExecutionFormProperties {
		StepName: FormControl<string | null | undefined>,
		Action: FormControl<string | null | undefined>,
		TimeoutSeconds: FormControl<number | null | undefined>,
		OnFailure: FormControl<string | null | undefined>,
		MaxAttempts: FormControl<number | null | undefined>,
		ExecutionStartTime: FormControl<Date | null | undefined>,
		ExecutionEndTime: FormControl<Date | null | undefined>,
		StepStatus: FormControl<AutomationExecutionStatus | null | undefined>,
		ResponseCode: FormControl<string | null | undefined>,
		Response: FormControl<string | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
		StepExecutionId: FormControl<string | null | undefined>,
		IsEnd: FormControl<boolean | null | undefined>,
		NextStep: FormControl<string | null | undefined>,
		IsCritical: FormControl<boolean | null | undefined>,
	}
	export function CreateStepExecutionFormGroup() {
		return new FormGroup<StepExecutionFormProperties>({
			StepName: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			OnFailure: new FormControl<string | null | undefined>(undefined),
			MaxAttempts: new FormControl<number | null | undefined>(undefined),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			StepStatus: new FormControl<AutomationExecutionStatus | null | undefined>(undefined),
			ResponseCode: new FormControl<string | null | undefined>(undefined),
			Response: new FormControl<string | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			StepExecutionId: new FormControl<string | null | undefined>(undefined),
			IsEnd: new FormControl<boolean | null | undefined>(undefined),
			NextStep: new FormControl<string | null | undefined>(undefined),
			IsCritical: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NormalStringMap {
	}
	export interface NormalStringMapFormProperties {
	}
	export function CreateNormalStringMapFormGroup() {
		return new FormGroup<NormalStringMapFormProperties>({
		});

	}


	/** Information about an Automation failure. */
	export interface FailureDetails {
		FailureStage?: string;
		FailureType?: string;
		Details?: AutomationParameterMap;
	}

	/** Information about an Automation failure. */
	export interface FailureDetailsFormProperties {
		FailureStage: FormControl<string | null | undefined>,
		FailureType: FormControl<string | null | undefined>,
	}
	export function CreateFailureDetailsFormGroup() {
		return new FormGroup<FailureDetailsFormProperties>({
			FailureStage: new FormControl<string | null | undefined>(undefined),
			FailureType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAutomationStepExecutionsRequest {

		/** Required */
		AutomationExecutionId: string;
		Filters?: Array<StepExecutionFilter>;
		NextToken?: string;
		MaxResults?: number | null;
		ReverseOrder?: boolean | null;
	}
	export interface DescribeAutomationStepExecutionsRequestFormProperties {

		/** Required */
		AutomationExecutionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ReverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAutomationStepExecutionsRequestFormGroup() {
		return new FormGroup<DescribeAutomationStepExecutionsRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ReverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter to limit the amount of step execution information returned by the call. */
	export interface StepExecutionFilter {

		/** Required */
		Key: StepExecutionFilterKey;

		/** Required */
		Values: Array<string>;
	}

	/** A filter to limit the amount of step execution information returned by the call. */
	export interface StepExecutionFilterFormProperties {

		/** Required */
		Key: FormControl<StepExecutionFilterKey | null | undefined>,
	}
	export function CreateStepExecutionFilterFormGroup() {
		return new FormGroup<StepExecutionFilterFormProperties>({
			Key: new FormControl<StepExecutionFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StepExecutionFilterKey { StartTimeBefore = 0, StartTimeAfter = 1, StepExecutionStatus = 2, StepExecutionId = 3, StepName = 4, Action = 5 }

	export interface AutomationExecutionNotFoundException {
	}
	export interface AutomationExecutionNotFoundExceptionFormProperties {
	}
	export function CreateAutomationExecutionNotFoundExceptionFormGroup() {
		return new FormGroup<AutomationExecutionNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeAvailablePatchesResult {
		Patches?: Array<Patch>;
		NextToken?: string;
	}
	export interface DescribeAvailablePatchesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAvailablePatchesResultFormGroup() {
		return new FormGroup<DescribeAvailablePatchesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents metadata about a patch. */
	export interface Patch {
		Id?: string;
		ReleaseDate?: Date;
		Title?: string;
		Description?: string;
		ContentUrl?: string;
		Vendor?: string;
		ProductFamily?: string;
		Product?: string;
		Classification?: string;
		MsrcSeverity?: string;
		KbNumber?: string;
		MsrcNumber?: string;
		Language?: string;
		AdvisoryIds?: Array<string>;
		BugzillaIds?: Array<string>;
		CVEIds?: Array<string>;
		Name?: string;
		Epoch?: number | null;
		Version?: string;
		Release?: string;
		Arch?: string;
		Severity?: string;
		Repository?: string;
	}

	/** Represents metadata about a patch. */
	export interface PatchFormProperties {
		Id: FormControl<string | null | undefined>,
		ReleaseDate: FormControl<Date | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ContentUrl: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		ProductFamily: FormControl<string | null | undefined>,
		Product: FormControl<string | null | undefined>,
		Classification: FormControl<string | null | undefined>,
		MsrcSeverity: FormControl<string | null | undefined>,
		KbNumber: FormControl<string | null | undefined>,
		MsrcNumber: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Epoch: FormControl<number | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Release: FormControl<string | null | undefined>,
		Arch: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		Repository: FormControl<string | null | undefined>,
	}
	export function CreatePatchFormGroup() {
		return new FormGroup<PatchFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ReleaseDate: new FormControl<Date | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ContentUrl: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			ProductFamily: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined),
			Classification: new FormControl<string | null | undefined>(undefined),
			MsrcSeverity: new FormControl<string | null | undefined>(undefined),
			KbNumber: new FormControl<string | null | undefined>(undefined),
			MsrcNumber: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Epoch: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Release: new FormControl<string | null | undefined>(undefined),
			Arch: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			Repository: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAvailablePatchesRequest {
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAvailablePatchesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAvailablePatchesRequestFormGroup() {
		return new FormGroup<DescribeAvailablePatchesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use <code>PatchOrchestratorFilter</code> include the following:</p> <ul> <li> <p> <a>DescribeAvailablePatches</a> </p> </li> <li> <p> <a>DescribeInstancePatches</a> </p> </li> <li> <p> <a>DescribePatchBaselines</a> </p> </li> <li> <p> <a>DescribePatchGroups</a> </p> </li> </ul> */
	export interface PatchOrchestratorFilter {
		Key?: string;
		Values?: Array<string>;
	}

	/** <p>Defines a filter used in Patch Manager APIs. Supported filter keys depend on the API operation that includes the filter. Patch Manager API operations that use <code>PatchOrchestratorFilter</code> include the following:</p> <ul> <li> <p> <a>DescribeAvailablePatches</a> </p> </li> <li> <p> <a>DescribeInstancePatches</a> </p> </li> <li> <p> <a>DescribePatchBaselines</a> </p> </li> <li> <p> <a>DescribePatchGroups</a> </p> </li> </ul> */
	export interface PatchOrchestratorFilterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrchestratorFilterFormGroup() {
		return new FormGroup<PatchOrchestratorFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentResult {
		Document?: DocumentDescription;
	}
	export interface DescribeDocumentResultFormProperties {
	}
	export function CreateDescribeDocumentResultFormGroup() {
		return new FormGroup<DescribeDocumentResultFormProperties>({
		});

	}

	export interface DescribeDocumentRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string;
		VersionName?: string;
	}
	export interface DescribeDocumentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentRequestFormGroup() {
		return new FormGroup<DescribeDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentPermissionResponse {
		AccountIds?: Array<string>;
		AccountSharingInfoList?: Array<AccountSharingInfo>;
		NextToken?: string;
	}
	export interface DescribeDocumentPermissionResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentPermissionResponseFormGroup() {
		return new FormGroup<DescribeDocumentPermissionResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfo {
		AccountId?: string;
		SharedDocumentVersion?: string;
	}

	/** Information includes the Amazon Web Services account ID where the current document is shared and the version shared with that account. */
	export interface AccountSharingInfoFormProperties {
		AccountId: FormControl<string | null | undefined>,
		SharedDocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateAccountSharingInfoFormGroup() {
		return new FormGroup<AccountSharingInfoFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			SharedDocumentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentPermissionRequest {

		/** Required */
		Name: string;

		/** Required */
		PermissionType: DocumentPermissionType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeDocumentPermissionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PermissionType: FormControl<DocumentPermissionType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentPermissionRequestFormGroup() {
		return new FormGroup<DescribeDocumentPermissionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionType: new FormControl<DocumentPermissionType | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentPermissionType { Share = 0 }

	export interface InvalidPermissionType {
	}
	export interface InvalidPermissionTypeFormProperties {
	}
	export function CreateInvalidPermissionTypeFormGroup() {
		return new FormGroup<InvalidPermissionTypeFormProperties>({
		});

	}

	export interface DescribeEffectiveInstanceAssociationsResult {
		Associations?: Array<InstanceAssociation>;
		NextToken?: string;
	}
	export interface DescribeEffectiveInstanceAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectiveInstanceAssociationsResultFormGroup() {
		return new FormGroup<DescribeEffectiveInstanceAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more association documents on the managed node.  */
	export interface InstanceAssociation {
		AssociationId?: string;
		InstanceId?: string;
		Content?: string;
		AssociationVersion?: string;
	}

	/** One or more association documents on the managed node.  */
	export interface InstanceAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAssociationFormGroup() {
		return new FormGroup<InstanceAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEffectiveInstanceAssociationsRequest {

		/** Required */
		InstanceId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeEffectiveInstanceAssociationsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectiveInstanceAssociationsRequestFormGroup() {
		return new FormGroup<DescribeEffectiveInstanceAssociationsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEffectivePatchesForPatchBaselineResult {
		EffectivePatches?: Array<EffectivePatch>;
		NextToken?: string;
	}
	export interface DescribeEffectivePatchesForPatchBaselineResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectivePatchesForPatchBaselineResultFormGroup() {
		return new FormGroup<DescribeEffectivePatchesForPatchBaselineResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatch {
		Patch?: Patch;
		PatchStatus?: PatchStatus;
	}

	/** The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved. */
	export interface EffectivePatchFormProperties {
	}
	export function CreateEffectivePatchFormGroup() {
		return new FormGroup<EffectivePatchFormProperties>({
		});

	}


	/** Information about the approval status of a patch. */
	export interface PatchStatus {
		DeploymentStatus?: PatchDeploymentStatus;
		ComplianceLevel?: PatchComplianceLevel;
		ApprovalDate?: Date;
	}

	/** Information about the approval status of a patch. */
	export interface PatchStatusFormProperties {
		DeploymentStatus: FormControl<PatchDeploymentStatus | null | undefined>,
		ComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApprovalDate: FormControl<Date | null | undefined>,
	}
	export function CreatePatchStatusFormGroup() {
		return new FormGroup<PatchStatusFormProperties>({
			DeploymentStatus: new FormControl<PatchDeploymentStatus | null | undefined>(undefined),
			ComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApprovalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PatchDeploymentStatus { APPROVED = 0, PENDING_APPROVAL = 1, EXPLICIT_APPROVED = 2, EXPLICIT_REJECTED = 3 }

	export interface DescribeEffectivePatchesForPatchBaselineRequest {

		/** Required */
		BaselineId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeEffectivePatchesForPatchBaselineRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectivePatchesForPatchBaselineRequestFormGroup() {
		return new FormGroup<DescribeEffectivePatchesForPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsupportedOperatingSystem {
	}
	export interface UnsupportedOperatingSystemFormProperties {
	}
	export function CreateUnsupportedOperatingSystemFormGroup() {
		return new FormGroup<UnsupportedOperatingSystemFormProperties>({
		});

	}

	export interface DescribeInstanceAssociationsStatusResult {
		InstanceAssociationStatusInfos?: Array<InstanceAssociationStatusInfo>;
		NextToken?: string;
	}
	export interface DescribeInstanceAssociationsStatusResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAssociationsStatusResultFormGroup() {
		return new FormGroup<DescribeInstanceAssociationsStatusResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information about the association. */
	export interface InstanceAssociationStatusInfo {
		AssociationId?: string;
		Name?: string;
		DocumentVersion?: string;
		AssociationVersion?: string;
		InstanceId?: string;
		ExecutionDate?: Date;
		Status?: string;
		DetailedStatus?: string;
		ExecutionSummary?: string;
		ErrorCode?: string;
		OutputUrl?: InstanceAssociationOutputUrl;
		AssociationName?: string;
	}

	/** Status information about the association. */
	export interface InstanceAssociationStatusInfoFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		ExecutionDate: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DetailedStatus: FormControl<string | null | undefined>,
		ExecutionSummary: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAssociationStatusInfoFormGroup() {
		return new FormGroup<InstanceAssociationStatusInfoFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			ExecutionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
			ExecutionSummary: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrl {
		S3OutputUrl?: S3OutputUrl;
	}

	/** The URL of S3 bucket where you want to store the results of this request. */
	export interface InstanceAssociationOutputUrlFormProperties {
	}
	export function CreateInstanceAssociationOutputUrlFormGroup() {
		return new FormGroup<InstanceAssociationOutputUrlFormProperties>({
		});

	}


	/** A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request. */
	export interface S3OutputUrl {
		OutputUrl?: string;
	}

	/** A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request. */
	export interface S3OutputUrlFormProperties {
		OutputUrl: FormControl<string | null | undefined>,
	}
	export function CreateS3OutputUrlFormGroup() {
		return new FormGroup<S3OutputUrlFormProperties>({
			OutputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceAssociationsStatusRequest {

		/** Required */
		InstanceId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeInstanceAssociationsStatusRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAssociationsStatusRequestFormGroup() {
		return new FormGroup<DescribeInstanceAssociationsStatusRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstanceInformationResult {
		InstanceInformationList?: Array<InstanceInformation>;
		NextToken?: string;
	}
	export interface DescribeInstanceInformationResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceInformationResultFormGroup() {
		return new FormGroup<DescribeInstanceInformationResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter for a specific list of managed nodes.  */
	export interface InstanceInformation {
		InstanceId?: string;
		PingStatus?: PingStatus;
		LastPingDateTime?: Date;
		AgentVersion?: string;
		IsLatestVersion?: boolean | null;
		PlatformType?: PlatformType;
		PlatformName?: string;
		PlatformVersion?: string;
		ActivationId?: string;
		IamRole?: string;
		RegistrationDate?: Date;
		ResourceType?: ResourceType;
		Name?: string;
		IPAddress?: string;
		ComputerName?: string;
		AssociationStatus?: string;
		LastAssociationExecutionDate?: Date;
		LastSuccessfulAssociationExecutionDate?: Date;
		AssociationOverview?: InstanceAggregatedAssociationOverview;
		SourceId?: string;
		SourceType?: SourceType;
	}

	/** Describes a filter for a specific list of managed nodes.  */
	export interface InstanceInformationFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		PingStatus: FormControl<PingStatus | null | undefined>,
		LastPingDateTime: FormControl<Date | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
		IsLatestVersion: FormControl<boolean | null | undefined>,
		PlatformType: FormControl<PlatformType | null | undefined>,
		PlatformName: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		ActivationId: FormControl<string | null | undefined>,
		IamRole: FormControl<string | null | undefined>,
		RegistrationDate: FormControl<Date | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IPAddress: FormControl<string | null | undefined>,
		ComputerName: FormControl<string | null | undefined>,
		AssociationStatus: FormControl<string | null | undefined>,
		LastAssociationExecutionDate: FormControl<Date | null | undefined>,
		LastSuccessfulAssociationExecutionDate: FormControl<Date | null | undefined>,
		SourceId: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
	}
	export function CreateInstanceInformationFormGroup() {
		return new FormGroup<InstanceInformationFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			PingStatus: new FormControl<PingStatus | null | undefined>(undefined),
			LastPingDateTime: new FormControl<Date | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
			IsLatestVersion: new FormControl<boolean | null | undefined>(undefined),
			PlatformType: new FormControl<PlatformType | null | undefined>(undefined),
			PlatformName: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			ActivationId: new FormControl<string | null | undefined>(undefined),
			IamRole: new FormControl<string | null | undefined>(undefined),
			RegistrationDate: new FormControl<Date | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IPAddress: new FormControl<string | null | undefined>(undefined),
			ComputerName: new FormControl<string | null | undefined>(undefined),
			AssociationStatus: new FormControl<string | null | undefined>(undefined),
			LastAssociationExecutionDate: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulAssociationExecutionDate: new FormControl<Date | null | undefined>(undefined),
			SourceId: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
		});

	}

	export enum PingStatus { Online = 0, ConnectionLost = 1, Inactive = 2 }

	export enum ResourceType { ManagedInstance = 0, Document = 1, EC2Instance = 2 }


	/** Status information about the aggregated associations. */
	export interface InstanceAggregatedAssociationOverview {
		DetailedStatus?: string;
		InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount;
	}

	/** Status information about the aggregated associations. */
	export interface InstanceAggregatedAssociationOverviewFormProperties {
		DetailedStatus: FormControl<string | null | undefined>,
	}
	export function CreateInstanceAggregatedAssociationOverviewFormGroup() {
		return new FormGroup<InstanceAggregatedAssociationOverviewFormProperties>({
			DetailedStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceAssociationStatusAggregatedCount {
	}
	export interface InstanceAssociationStatusAggregatedCountFormProperties {
	}
	export function CreateInstanceAssociationStatusAggregatedCountFormGroup() {
		return new FormGroup<InstanceAssociationStatusAggregatedCountFormProperties>({
		});

	}

	export enum SourceType { 'AWS::EC2::Instance' = 0, 'AWS::IoT::Thing' = 1, 'AWS::SSM::ManagedInstance' = 2 }

	export interface DescribeInstanceInformationRequest {
		InstanceInformationFilterList?: Array<InstanceInformationFilter>;
		Filters?: Array<InstanceInformationStringFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeInstanceInformationRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceInformationRequestFormGroup() {
		return new FormGroup<DescribeInstanceInformationRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a filter for a specific list of managed nodes. You can filter node information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p> */
	export interface InstanceInformationFilter {

		/** Required */
		key: InstanceInformationFilterKey;

		/** Required */
		valueSet: Array<string>;
	}

	/** <p>Describes a filter for a specific list of managed nodes. You can filter node information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p> */
	export interface InstanceInformationFilterFormProperties {

		/** Required */
		key: FormControl<InstanceInformationFilterKey | null | undefined>,
	}
	export function CreateInstanceInformationFilterFormGroup() {
		return new FormGroup<InstanceInformationFilterFormProperties>({
			key: new FormControl<InstanceInformationFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstanceInformationFilterKey { InstanceIds = 0, AgentVersion = 1, PingStatus = 2, PlatformTypes = 3, ActivationIds = 4, IamRole = 5, ResourceType = 6, AssociationStatus = 7 }


	/** The filters to describe or get information about your managed nodes. */
	export interface InstanceInformationStringFilter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
	}

	/** The filters to describe or get information about your managed nodes. */
	export interface InstanceInformationStringFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateInstanceInformationStringFilterFormGroup() {
		return new FormGroup<InstanceInformationStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInstanceInformationFilterValue {
	}
	export interface InvalidInstanceInformationFilterValueFormProperties {
	}
	export function CreateInvalidInstanceInformationFilterValueFormGroup() {
		return new FormGroup<InvalidInstanceInformationFilterValueFormProperties>({
		});

	}

	export interface DescribeInstancePatchStatesResult {
		InstancePatchStates?: Array<InstancePatchState>;
		NextToken?: string;
	}
	export interface DescribeInstancePatchStatesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesResultFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the high-level patch compliance state for a managed node, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the managed node. */
	export interface InstancePatchState {

		/** Required */
		InstanceId: string;

		/** Required */
		PatchGroup: string;

		/** Required */
		BaselineId: string;
		SnapshotId?: string;
		InstallOverrideList?: string;
		OwnerInformation?: string;
		InstalledCount?: number | null;
		InstalledOtherCount?: number | null;
		InstalledPendingRebootCount?: number | null;
		InstalledRejectedCount?: number | null;
		MissingCount?: number | null;
		FailedCount?: number | null;
		UnreportedNotApplicableCount?: number | null;
		NotApplicableCount?: number | null;

		/** Required */
		OperationStartTime: Date;

		/** Required */
		OperationEndTime: Date;

		/** Required */
		Operation: PatchOperationType;
		LastNoRebootInstallOperationTime?: Date;
		RebootOption?: RebootOption;
		CriticalNonCompliantCount?: number | null;
		SecurityNonCompliantCount?: number | null;
		OtherNonCompliantCount?: number | null;
	}

	/** Defines the high-level patch compliance state for a managed node, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the managed node. */
	export interface InstancePatchStateFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		InstallOverrideList: FormControl<string | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		InstalledCount: FormControl<number | null | undefined>,
		InstalledOtherCount: FormControl<number | null | undefined>,
		InstalledPendingRebootCount: FormControl<number | null | undefined>,
		InstalledRejectedCount: FormControl<number | null | undefined>,
		MissingCount: FormControl<number | null | undefined>,
		FailedCount: FormControl<number | null | undefined>,
		UnreportedNotApplicableCount: FormControl<number | null | undefined>,
		NotApplicableCount: FormControl<number | null | undefined>,

		/** Required */
		OperationStartTime: FormControl<Date | null | undefined>,

		/** Required */
		OperationEndTime: FormControl<Date | null | undefined>,

		/** Required */
		Operation: FormControl<PatchOperationType | null | undefined>,
		LastNoRebootInstallOperationTime: FormControl<Date | null | undefined>,
		RebootOption: FormControl<RebootOption | null | undefined>,
		CriticalNonCompliantCount: FormControl<number | null | undefined>,
		SecurityNonCompliantCount: FormControl<number | null | undefined>,
		OtherNonCompliantCount: FormControl<number | null | undefined>,
	}
	export function CreateInstancePatchStateFormGroup() {
		return new FormGroup<InstancePatchStateFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			InstallOverrideList: new FormControl<string | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			InstalledCount: new FormControl<number | null | undefined>(undefined),
			InstalledOtherCount: new FormControl<number | null | undefined>(undefined),
			InstalledPendingRebootCount: new FormControl<number | null | undefined>(undefined),
			InstalledRejectedCount: new FormControl<number | null | undefined>(undefined),
			MissingCount: new FormControl<number | null | undefined>(undefined),
			FailedCount: new FormControl<number | null | undefined>(undefined),
			UnreportedNotApplicableCount: new FormControl<number | null | undefined>(undefined),
			NotApplicableCount: new FormControl<number | null | undefined>(undefined),
			OperationStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			OperationEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Operation: new FormControl<PatchOperationType | null | undefined>(undefined, [Validators.required]),
			LastNoRebootInstallOperationTime: new FormControl<Date | null | undefined>(undefined),
			RebootOption: new FormControl<RebootOption | null | undefined>(undefined),
			CriticalNonCompliantCount: new FormControl<number | null | undefined>(undefined),
			SecurityNonCompliantCount: new FormControl<number | null | undefined>(undefined),
			OtherNonCompliantCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PatchOperationType { Scan = 0, Install = 1 }

	export enum RebootOption { RebootIfNeeded = 0, NoReboot = 1 }

	export interface DescribeInstancePatchStatesRequest {

		/** Required */
		InstanceIds: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchStatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeInstancePatchStatesForPatchGroupResult {
		InstancePatchStates?: Array<InstancePatchState>;
		NextToken?: string;
	}
	export interface DescribeInstancePatchStatesForPatchGroupResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesForPatchGroupResultFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesForPatchGroupResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstancePatchStatesForPatchGroupRequest {

		/** Required */
		PatchGroup: string;
		Filters?: Array<InstancePatchStateFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchStatesForPatchGroupRequestFormProperties {

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchStatesForPatchGroupRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchStatesForPatchGroupRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope down the information returned by the API.</p> <p> <b>Example</b>: To filter for all managed nodes in a patch group having more than three patches with a <code>FailedCount</code> status, use the following for the filter:</p> <ul> <li> <p>Value for <code>Key</code>: <code>FailedCount</code> </p> </li> <li> <p>Value for <code>Type</code>: <code>GreaterThan</code> </p> </li> <li> <p>Value for <code>Values</code>: <code>3</code> </p> </li> </ul> */
	export interface InstancePatchStateFilter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;

		/** Required */
		Type: InstancePatchStateOperatorType;
	}

	/** <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope down the information returned by the API.</p> <p> <b>Example</b>: To filter for all managed nodes in a patch group having more than three patches with a <code>FailedCount</code> status, use the following for the filter:</p> <ul> <li> <p>Value for <code>Key</code>: <code>FailedCount</code> </p> </li> <li> <p>Value for <code>Type</code>: <code>GreaterThan</code> </p> </li> <li> <p>Value for <code>Values</code>: <code>3</code> </p> </li> </ul> */
	export interface InstancePatchStateFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<InstancePatchStateOperatorType | null | undefined>,
	}
	export function CreateInstancePatchStateFilterFormGroup() {
		return new FormGroup<InstancePatchStateFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<InstancePatchStateOperatorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstancePatchStateOperatorType { Equal = 0, NotEqual = 1, LessThan = 2, GreaterThan = 3 }

	export interface DescribeInstancePatchesResult {
		Patches?: Array<PatchComplianceData>;
		NextToken?: string;
	}
	export interface DescribeInstancePatchesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancePatchesResultFormGroup() {
		return new FormGroup<DescribeInstancePatchesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the state of a patch on a particular managed node as it relates to the patch baseline used to patch the node. */
	export interface PatchComplianceData {

		/** Required */
		Title: string;

		/** Required */
		KBId: string;

		/** Required */
		Classification: string;

		/** Required */
		Severity: string;

		/** Required */
		State: PatchComplianceDataState;

		/** Required */
		InstalledTime: Date;
		CVEIds?: string;
	}

	/** Information about the state of a patch on a particular managed node as it relates to the patch baseline used to patch the node. */
	export interface PatchComplianceDataFormProperties {

		/** Required */
		Title: FormControl<string | null | undefined>,

		/** Required */
		KBId: FormControl<string | null | undefined>,

		/** Required */
		Classification: FormControl<string | null | undefined>,

		/** Required */
		Severity: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<PatchComplianceDataState | null | undefined>,

		/** Required */
		InstalledTime: FormControl<Date | null | undefined>,
		CVEIds: FormControl<string | null | undefined>,
	}
	export function CreatePatchComplianceDataFormGroup() {
		return new FormGroup<PatchComplianceDataFormProperties>({
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KBId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Severity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<PatchComplianceDataState | null | undefined>(undefined, [Validators.required]),
			InstalledTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CVEIds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchComplianceDataState { INSTALLED = 0, INSTALLED_OTHER = 1, INSTALLED_PENDING_REBOOT = 2, INSTALLED_REJECTED = 3, MISSING = 4, NOT_APPLICABLE = 5, FAILED = 6 }

	export interface DescribeInstancePatchesRequest {

		/** Required */
		InstanceId: string;
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeInstancePatchesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInstancePatchesRequestFormGroup() {
		return new FormGroup<DescribeInstancePatchesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeInventoryDeletionsResult {
		InventoryDeletions?: Array<InventoryDeletionStatusItem>;
		NextToken?: string;
	}
	export interface DescribeInventoryDeletionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInventoryDeletionsResultFormGroup() {
		return new FormGroup<DescribeInventoryDeletionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information returned by the <code>DeleteInventory</code> operation. */
	export interface InventoryDeletionStatusItem {
		DeletionId?: string;
		TypeName?: string;
		DeletionStartTime?: Date;
		LastStatus?: InventoryDeletionStatus;
		LastStatusMessage?: string;
		DeletionSummary?: InventoryDeletionSummary;
		LastStatusUpdateTime?: Date;
	}

	/** Status information returned by the <code>DeleteInventory</code> operation. */
	export interface InventoryDeletionStatusItemFormProperties {
		DeletionId: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		DeletionStartTime: FormControl<Date | null | undefined>,
		LastStatus: FormControl<InventoryDeletionStatus | null | undefined>,
		LastStatusMessage: FormControl<string | null | undefined>,
		LastStatusUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInventoryDeletionStatusItemFormGroup() {
		return new FormGroup<InventoryDeletionStatusItemFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			DeletionStartTime: new FormControl<Date | null | undefined>(undefined),
			LastStatus: new FormControl<InventoryDeletionStatus | null | undefined>(undefined),
			LastStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastStatusUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InventoryDeletionStatus { InProgress = 0, Complete = 1 }

	export interface DescribeInventoryDeletionsRequest {
		DeletionId?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeInventoryDeletionsRequestFormProperties {
		DeletionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInventoryDeletionsRequestFormGroup() {
		return new FormGroup<DescribeInventoryDeletionsRequestFormProperties>({
			DeletionId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidDeletionIdException {
	}
	export interface InvalidDeletionIdExceptionFormProperties {
	}
	export function CreateInvalidDeletionIdExceptionFormGroup() {
		return new FormGroup<InvalidDeletionIdExceptionFormProperties>({
		});

	}

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
		WindowExecutionTaskInvocationIdentities?: Array<MaintenanceWindowExecutionTaskInvocationIdentity>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionTaskInvocationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTaskInvocationsResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTaskInvocationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskInvocationIdentity {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		InvocationId?: string;
		ExecutionId?: string;
		TaskType?: MaintenanceWindowTaskType;
		Parameters?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		OwnerInformation?: string;
		WindowTargetId?: string;
	}

	/** Describes the information about a task invocation for a particular target as part of a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskInvocationIdentityFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
		TaskExecutionId: FormControl<string | null | undefined>,
		InvocationId: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionTaskInvocationIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionTaskInvocationIdentityFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined),
			InvocationId: new FormControl<string | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowTaskType { RUN_COMMAND = 0, AUTOMATION = 1, STEP_FUNCTIONS = 2, LAMBDA = 3 }

	export enum MaintenanceWindowExecutionStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, TIMED_OUT = 4, CANCELLING = 5, CANCELLED = 6, SKIPPED_OVERLAPPING = 7 }

	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {

		/** Required */
		WindowExecutionId: string;

		/** Required */
		TaskId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,

		/** Required */
		TaskId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTaskInvocationsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTaskInvocationsRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use <code>MaintenanceWindowFilter&gt;</code> include the following:</p> <ul> <li> <p> <a>DescribeMaintenanceWindowExecutions</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTaskInvocations</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTasks</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindows</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTargets</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTasks</a> </p> </li> </ul> */
	export interface MaintenanceWindowFilter {
		Key?: string;
		Values?: Array<string>;
	}

	/** <p>Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use <code>MaintenanceWindowFilter&gt;</code> include the following:</p> <ul> <li> <p> <a>DescribeMaintenanceWindowExecutions</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTaskInvocations</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTasks</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindows</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTargets</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTasks</a> </p> </li> </ul> */
	export interface MaintenanceWindowFilterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowFilterFormGroup() {
		return new FormGroup<MaintenanceWindowFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionTasksResult {
		WindowExecutionTaskIdentities?: Array<MaintenanceWindowExecutionTaskIdentity>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionTasksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTasksResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTasksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskIdentity {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		TaskArn?: string;
		TaskType?: MaintenanceWindowTaskType;
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}

	/** Information about a task execution performed as part of a maintenance window execution. */
	export interface MaintenanceWindowExecutionTaskIdentityFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
		TaskExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowTaskType | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionTaskIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionTaskIdentityFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionTasksRequest {

		/** Required */
		WindowExecutionId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionTasksRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionTasksRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionTasksRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionsResult {
		WindowExecutions?: Array<MaintenanceWindowExecution>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionsResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the information about an execution of a maintenance window.  */
	export interface MaintenanceWindowExecution {
		WindowId?: string;
		WindowExecutionId?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
	}

	/** Describes the information about an execution of a maintenance window.  */
	export interface MaintenanceWindowExecutionFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateMaintenanceWindowExecutionFormGroup() {
		return new FormGroup<MaintenanceWindowExecutionFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowExecutionsRequest {

		/** Required */
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowExecutionsRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowExecutionsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowExecutionsRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowScheduleResult {
		ScheduledWindowExecutions?: Array<ScheduledWindowExecution>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowScheduleResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowScheduleResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowScheduleResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a scheduled execution for a maintenance window. */
	export interface ScheduledWindowExecution {
		WindowId?: string;
		Name?: string;
		ExecutionTime?: string;
	}

	/** Information about a scheduled execution for a maintenance window. */
	export interface ScheduledWindowExecutionFormProperties {
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduledWindowExecutionFormGroup() {
		return new FormGroup<ScheduledWindowExecutionFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowScheduleRequest {
		WindowId?: string;
		Targets?: Array<Target>;
		ResourceType?: MaintenanceWindowResourceType;
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowScheduleRequestFormProperties {
		WindowId: FormControl<string | null | undefined>,
		ResourceType: FormControl<MaintenanceWindowResourceType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowScheduleRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowScheduleRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<MaintenanceWindowResourceType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowResourceType { INSTANCE = 0, RESOURCE_GROUP = 1 }

	export interface DescribeMaintenanceWindowTargetsResult {
		Targets?: Array<MaintenanceWindowTarget>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowTargetsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTargetsResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTargetsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The target registered with the maintenance window. */
	export interface MaintenanceWindowTarget {
		WindowId?: string;
		WindowTargetId?: string;
		ResourceType?: MaintenanceWindowResourceType;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
	}

	/** The target registered with the maintenance window. */
	export interface MaintenanceWindowTargetFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTargetId: FormControl<string | null | undefined>,
		ResourceType: FormControl<MaintenanceWindowResourceType | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowTargetFormGroup() {
		return new FormGroup<MaintenanceWindowTargetFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<MaintenanceWindowResourceType | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowTargetsRequest {

		/** Required */
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowTargetsRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTargetsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTargetsRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowTasksResult {
		Tasks?: Array<MaintenanceWindowTask>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowTasksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTasksResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTasksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a task defined for a maintenance window. */
	export interface MaintenanceWindowTask {
		WindowId?: string;
		WindowTaskId?: string;
		TaskArn?: string;
		Type?: MaintenanceWindowTaskType;
		Targets?: Array<Target>;
		TaskParameters?: MaintenanceWindowTaskParameters;
		Priority?: number | null;
		LoggingInfo?: LoggingInfo;
		ServiceRoleArn?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Name?: string;
		Description?: string;
		CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
		AlarmConfiguration?: AlarmConfiguration;
	}

	/** Information about a task defined for a maintenance window. */
	export interface MaintenanceWindowTaskFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTaskId: FormControl<string | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		Type: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CutoffBehavior: FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>,
	}
	export function CreateMaintenanceWindowTaskFormGroup() {
		return new FormGroup<MaintenanceWindowTaskFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTaskId: new FormControl<string | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CutoffBehavior: new FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>(undefined),
		});

	}

	export interface MaintenanceWindowTaskParameters {
	}
	export interface MaintenanceWindowTaskParametersFormProperties {
	}
	export function CreateMaintenanceWindowTaskParametersFormGroup() {
		return new FormGroup<MaintenanceWindowTaskParametersFormProperties>({
		});

	}


	/** <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfo {

		/** Required */
		S3BucketName: string;
		S3KeyPrefix?: string;

		/** Required */
		S3Region: string;
	}

	/** <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note> */
	export interface LoggingInfoFormProperties {

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,

		/** Required */
		S3Region: FormControl<string | null | undefined>,
	}
	export function CreateLoggingInfoFormGroup() {
		return new FormGroup<LoggingInfoFormProperties>({
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			S3Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MaintenanceWindowTaskCutoffBehavior { CONTINUE_TASK = 0, CANCEL_TASK = 1 }

	export interface DescribeMaintenanceWindowTasksRequest {

		/** Required */
		WindowId: string;
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowTasksRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowTasksRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowTasksRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsResult {
		WindowIdentities?: Array<MaintenanceWindowIdentity>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the maintenance window. */
	export interface MaintenanceWindowIdentity {
		WindowId?: string;
		Name?: string;
		Description?: string;
		Enabled?: boolean | null;
		Duration?: number | null;
		Cutoff?: number | null;
		Schedule?: string;
		ScheduleTimezone?: string;
		ScheduleOffset?: number | null;
		EndDate?: string;
		StartDate?: string;
		NextExecutionTime?: string;
	}

	/** Information about the maintenance window. */
	export interface MaintenanceWindowIdentityFormProperties {
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Cutoff: FormControl<number | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		NextExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowIdentityFormGroup() {
		return new FormGroup<MaintenanceWindowIdentityFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Cutoff: new FormControl<number | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			NextExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsRequest {
		Filters?: Array<MaintenanceWindowFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsForTargetResult {
		WindowIdentities?: Array<MaintenanceWindowIdentityForTarget>;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowsForTargetResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsForTargetResultFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsForTargetResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maintenance window to which the specified target belongs. */
	export interface MaintenanceWindowIdentityForTarget {
		WindowId?: string;
		Name?: string;
	}

	/** The maintenance window to which the specified target belongs. */
	export interface MaintenanceWindowIdentityForTargetFormProperties {
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowIdentityForTargetFormGroup() {
		return new FormGroup<MaintenanceWindowIdentityForTargetFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMaintenanceWindowsForTargetRequest {

		/** Required */
		Targets: Array<Target>;

		/** Required */
		ResourceType: MaintenanceWindowResourceType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeMaintenanceWindowsForTargetRequestFormProperties {

		/** Required */
		ResourceType: FormControl<MaintenanceWindowResourceType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMaintenanceWindowsForTargetRequestFormGroup() {
		return new FormGroup<DescribeMaintenanceWindowsForTargetRequestFormProperties>({
			ResourceType: new FormControl<MaintenanceWindowResourceType | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOpsItemsResponse {
		NextToken?: string;
		OpsItemSummaries?: Array<OpsItemSummary>;
	}
	export interface DescribeOpsItemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOpsItemsResponseFormGroup() {
		return new FormGroup<DescribeOpsItemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A count of OpsItems. */
	export interface OpsItemSummary {
		CreatedBy?: string;
		CreatedTime?: Date;
		LastModifiedBy?: string;
		LastModifiedTime?: Date;
		Priority?: number | null;
		Source?: string;
		Status?: OpsItemStatus;
		OpsItemId?: string;
		Title?: string;
		OperationalData?: OpsItemOperationalData;
		Category?: string;
		Severity?: string;
		OpsItemType?: string;
		ActualStartTime?: Date;
		ActualEndTime?: Date;
		PlannedStartTime?: Date;
		PlannedEndTime?: Date;
	}

	/** A count of OpsItems. */
	export interface OpsItemSummaryFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Status: FormControl<OpsItemStatus | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		OpsItemType: FormControl<string | null | undefined>,
		ActualStartTime: FormControl<Date | null | undefined>,
		ActualEndTime: FormControl<Date | null | undefined>,
		PlannedStartTime: FormControl<Date | null | undefined>,
		PlannedEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateOpsItemSummaryFormGroup() {
		return new FormGroup<OpsItemSummaryFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OpsItemStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			OpsItemType: new FormControl<string | null | undefined>(undefined),
			ActualStartTime: new FormControl<Date | null | undefined>(undefined),
			ActualEndTime: new FormControl<Date | null | undefined>(undefined),
			PlannedStartTime: new FormControl<Date | null | undefined>(undefined),
			PlannedEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OpsItemStatus { Open = 0, InProgress = 1, Resolved = 2, Pending = 3, TimedOut = 4, Cancelling = 5, Cancelled = 6, Failed = 7, CompletedWithSuccess = 8, CompletedWithFailure = 9, Scheduled = 10, RunbookInProgress = 11, PendingChangeCalendarOverride = 12, ChangeCalendarOverrideApproved = 13, ChangeCalendarOverrideRejected = 14, PendingApproval = 15, Approved = 16, Rejected = 17, Closed = 18 }

	export interface DescribeOpsItemsRequest {
		OpsItemFilters?: Array<OpsItemFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeOpsItemsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOpsItemsRequestFormGroup() {
		return new FormGroup<DescribeOpsItemsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an OpsItem filter. */
	export interface OpsItemFilter {

		/** Required */
		Key: OpsItemFilterKey;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: OpsItemFilterOperator;
	}

	/** Describes an OpsItem filter. */
	export interface OpsItemFilterFormProperties {

		/** Required */
		Key: FormControl<OpsItemFilterKey | null | undefined>,

		/** Required */
		Operator: FormControl<OpsItemFilterOperator | null | undefined>,
	}
	export function CreateOpsItemFilterFormGroup() {
		return new FormGroup<OpsItemFilterFormProperties>({
			Key: new FormControl<OpsItemFilterKey | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<OpsItemFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OpsItemFilterKey { Status = 0, CreatedBy = 1, Source = 2, Priority = 3, Title = 4, OpsItemId = 5, CreatedTime = 6, LastModifiedTime = 7, ActualStartTime = 8, ActualEndTime = 9, PlannedStartTime = 10, PlannedEndTime = 11, OperationalData = 12, OperationalDataKey = 13, OperationalDataValue = 14, ResourceId = 15, AutomationId = 16, Category = 17, Severity = 18, OpsItemType = 19, ChangeRequestByRequesterArn = 20, ChangeRequestByRequesterName = 21, ChangeRequestByApproverArn = 22, ChangeRequestByApproverName = 23, ChangeRequestByTemplate = 24, ChangeRequestByTargetsResourceGroup = 25, InsightByType = 26, AccountId = 27 }

	export enum OpsItemFilterOperator { Equal = 0, Contains = 1, GreaterThan = 2, LessThan = 3 }

	export interface DescribeParametersResult {
		Parameters?: Array<ParameterMetadata>;
		NextToken?: string;
	}
	export interface DescribeParametersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersResultFormGroup() {
		return new FormGroup<DescribeParametersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata includes information like the ARN of the last user and the date/time the parameter was last used. */
	export interface ParameterMetadata {
		Name?: string;
		Type?: ParameterType;
		KeyId?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		Description?: string;
		AllowedPattern?: string;
		Version?: number | null;
		Tier?: ParameterTier;
		Policies?: Array<ParameterInlinePolicy>;
		DataType?: string;
	}

	/** Metadata includes information like the ARN of the last user and the date/time the parameter was last used. */
	export interface ParameterMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterType | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AllowedPattern: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterTier | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterMetadataFormGroup() {
		return new FormGroup<ParameterMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ParameterType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AllowedPattern: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterTier | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterType { String = 0, StringList = 1, SecureString = 2 }

	export enum ParameterTier { Standard = 0, Advanced = 1, 'Intelligent-Tiering' = 2 }


	/** One or more policies assigned to a parameter. */
	export interface ParameterInlinePolicy {
		PolicyText?: string;
		PolicyType?: string;
		PolicyStatus?: string;
	}

	/** One or more policies assigned to a parameter. */
	export interface ParameterInlinePolicyFormProperties {
		PolicyText: FormControl<string | null | undefined>,
		PolicyType: FormControl<string | null | undefined>,
		PolicyStatus: FormControl<string | null | undefined>,
	}
	export function CreateParameterInlinePolicyFormGroup() {
		return new FormGroup<ParameterInlinePolicyFormProperties>({
			PolicyText: new FormControl<string | null | undefined>(undefined),
			PolicyType: new FormControl<string | null | undefined>(undefined),
			PolicyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParametersRequest {
		Filters?: Array<ParametersFilter>;
		ParameterFilters?: Array<ParameterStringFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeParametersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersRequestFormGroup() {
		return new FormGroup<DescribeParametersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is deprecated. Instead, use <a>ParameterStringFilter</a>. */
	export interface ParametersFilter {

		/** Required */
		Key: ParametersFilterKey;

		/** Required */
		Values: Array<string>;
	}

	/** This data type is deprecated. Instead, use <a>ParameterStringFilter</a>. */
	export interface ParametersFilterFormProperties {

		/** Required */
		Key: FormControl<ParametersFilterKey | null | undefined>,
	}
	export function CreateParametersFilterFormGroup() {
		return new FormGroup<ParametersFilterFormProperties>({
			Key: new FormControl<ParametersFilterKey | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ParametersFilterKey { Name = 0, Type = 1, KeyId = 2 }


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ParameterStringFilter {

		/** Required */
		Key: string;
		Option?: string;
		Values?: Array<string>;
	}

	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ParameterStringFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Option: FormControl<string | null | undefined>,
	}
	export function CreateParameterStringFilterFormGroup() {
		return new FormGroup<ParameterStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Option: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidFilterOption {
	}
	export interface InvalidFilterOptionFormProperties {
	}
	export function CreateInvalidFilterOptionFormGroup() {
		return new FormGroup<InvalidFilterOptionFormProperties>({
		});

	}

	export interface DescribePatchBaselinesResult {
		BaselineIdentities?: Array<PatchBaselineIdentity>;
		NextToken?: string;
	}
	export interface DescribePatchBaselinesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchBaselinesResultFormGroup() {
		return new FormGroup<DescribePatchBaselinesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the basic information about a patch baseline. */
	export interface PatchBaselineIdentity {
		BaselineId?: string;
		BaselineName?: string;
		OperatingSystem?: OperatingSystem;
		BaselineDescription?: string;
		DefaultBaseline?: boolean | null;
	}

	/** Defines the basic information about a patch baseline. */
	export interface PatchBaselineIdentityFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		BaselineName: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		BaselineDescription: FormControl<string | null | undefined>,
		DefaultBaseline: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchBaselineIdentityFormGroup() {
		return new FormGroup<PatchBaselineIdentityFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			BaselineName: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			BaselineDescription: new FormControl<string | null | undefined>(undefined),
			DefaultBaseline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribePatchBaselinesRequest {
		Filters?: Array<PatchOrchestratorFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribePatchBaselinesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchBaselinesRequestFormGroup() {
		return new FormGroup<DescribePatchBaselinesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePatchGroupStateResult {
		Instances?: number | null;
		InstancesWithInstalledPatches?: number | null;
		InstancesWithInstalledOtherPatches?: number | null;
		InstancesWithInstalledPendingRebootPatches?: number | null;
		InstancesWithInstalledRejectedPatches?: number | null;
		InstancesWithMissingPatches?: number | null;
		InstancesWithFailedPatches?: number | null;
		InstancesWithNotApplicablePatches?: number | null;
		InstancesWithUnreportedNotApplicablePatches?: number | null;
		InstancesWithCriticalNonCompliantPatches?: number | null;
		InstancesWithSecurityNonCompliantPatches?: number | null;
		InstancesWithOtherNonCompliantPatches?: number | null;
	}
	export interface DescribePatchGroupStateResultFormProperties {
		Instances: FormControl<number | null | undefined>,
		InstancesWithInstalledPatches: FormControl<number | null | undefined>,
		InstancesWithInstalledOtherPatches: FormControl<number | null | undefined>,
		InstancesWithInstalledPendingRebootPatches: FormControl<number | null | undefined>,
		InstancesWithInstalledRejectedPatches: FormControl<number | null | undefined>,
		InstancesWithMissingPatches: FormControl<number | null | undefined>,
		InstancesWithFailedPatches: FormControl<number | null | undefined>,
		InstancesWithNotApplicablePatches: FormControl<number | null | undefined>,
		InstancesWithUnreportedNotApplicablePatches: FormControl<number | null | undefined>,
		InstancesWithCriticalNonCompliantPatches: FormControl<number | null | undefined>,
		InstancesWithSecurityNonCompliantPatches: FormControl<number | null | undefined>,
		InstancesWithOtherNonCompliantPatches: FormControl<number | null | undefined>,
	}
	export function CreateDescribePatchGroupStateResultFormGroup() {
		return new FormGroup<DescribePatchGroupStateResultFormProperties>({
			Instances: new FormControl<number | null | undefined>(undefined),
			InstancesWithInstalledPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithInstalledOtherPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithInstalledPendingRebootPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithInstalledRejectedPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithMissingPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithFailedPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithNotApplicablePatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithUnreportedNotApplicablePatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithCriticalNonCompliantPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithSecurityNonCompliantPatches: new FormControl<number | null | undefined>(undefined),
			InstancesWithOtherNonCompliantPatches: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribePatchGroupStateRequest {

		/** Required */
		PatchGroup: string;
	}
	export interface DescribePatchGroupStateRequestFormProperties {

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchGroupStateRequestFormGroup() {
		return new FormGroup<DescribePatchGroupStateRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePatchGroupsResult {
		Mappings?: Array<PatchGroupPatchBaselineMapping>;
		NextToken?: string;
	}
	export interface DescribePatchGroupsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchGroupsResultFormGroup() {
		return new FormGroup<DescribePatchGroupsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The mapping between a patch group and the patch baseline the patch group is registered with. */
	export interface PatchGroupPatchBaselineMapping {
		PatchGroup?: string;
		BaselineIdentity?: PatchBaselineIdentity;
	}

	/** The mapping between a patch group and the patch baseline the patch group is registered with. */
	export interface PatchGroupPatchBaselineMappingFormProperties {
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreatePatchGroupPatchBaselineMappingFormGroup() {
		return new FormGroup<PatchGroupPatchBaselineMappingFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePatchGroupsRequest {
		MaxResults?: number | null;
		Filters?: Array<PatchOrchestratorFilter>;
		NextToken?: string;
	}
	export interface DescribePatchGroupsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchGroupsRequestFormGroup() {
		return new FormGroup<DescribePatchGroupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePatchPropertiesResult {
		Properties?: Array<PatchPropertyEntry>;
		NextToken?: string;
	}
	export interface DescribePatchPropertiesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchPropertiesResultFormGroup() {
		return new FormGroup<DescribePatchPropertiesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchPropertyEntry {
	}
	export interface PatchPropertyEntryFormProperties {
	}
	export function CreatePatchPropertyEntryFormGroup() {
		return new FormGroup<PatchPropertyEntryFormProperties>({
		});

	}

	export interface DescribePatchPropertiesRequest {

		/** Required */
		OperatingSystem: OperatingSystem;

		/** Required */
		Property: PatchProperty;
		PatchSet?: PatchSet;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribePatchPropertiesRequestFormProperties {

		/** Required */
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,

		/** Required */
		Property: FormControl<PatchProperty | null | undefined>,
		PatchSet: FormControl<PatchSet | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePatchPropertiesRequestFormGroup() {
		return new FormGroup<DescribePatchPropertiesRequestFormProperties>({
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined, [Validators.required]),
			Property: new FormControl<PatchProperty | null | undefined>(undefined, [Validators.required]),
			PatchSet: new FormControl<PatchSet | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchProperty { PRODUCT = 0, PRODUCT_FAMILY = 1, CLASSIFICATION = 2, MSRC_SEVERITY = 3, PRIORITY = 4, SEVERITY = 5 }

	export enum PatchSet { OS = 0, APPLICATION = 1 }

	export interface DescribeSessionsResponse {
		Sessions?: Array<Session>;
		NextToken?: string;
	}
	export interface DescribeSessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSessionsResponseFormGroup() {
		return new FormGroup<DescribeSessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Session Manager connection to a managed node. */
	export interface Session {
		SessionId?: string;
		Target?: string;
		Status?: SessionStatus;
		StartDate?: Date;
		EndDate?: Date;
		DocumentName?: string;
		Owner?: string;
		Reason?: string;
		Details?: string;
		OutputUrl?: SessionManagerOutputUrl;
		MaxSessionDuration?: string;
	}

	/** Information about a Session Manager connection to a managed node. */
	export interface SessionFormProperties {
		SessionId: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		Status: FormControl<SessionStatus | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SessionStatus | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
			MaxSessionDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionStatus { Connected = 0, Connecting = 1, Disconnected = 2, Terminated = 3, Terminating = 4, Failed = 5 }


	/** Reserved for future use. */
	export interface SessionManagerOutputUrl {
		S3OutputUrl?: string;
		CloudWatchOutputUrl?: string;
	}

	/** Reserved for future use. */
	export interface SessionManagerOutputUrlFormProperties {
		S3OutputUrl: FormControl<string | null | undefined>,
		CloudWatchOutputUrl: FormControl<string | null | undefined>,
	}
	export function CreateSessionManagerOutputUrlFormGroup() {
		return new FormGroup<SessionManagerOutputUrlFormProperties>({
			S3OutputUrl: new FormControl<string | null | undefined>(undefined),
			CloudWatchOutputUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSessionsRequest {

		/** Required */
		State: SessionState;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<SessionFilter>;
	}
	export interface DescribeSessionsRequestFormProperties {

		/** Required */
		State: FormControl<SessionState | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSessionsRequestFormGroup() {
		return new FormGroup<DescribeSessionsRequestFormProperties>({
			State: new FormControl<SessionState | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionState { Active = 0, History = 1 }


	/** Describes a filter for Session Manager information. */
	export interface SessionFilter {

		/** Required */
		key: SessionFilterKey;

		/** Required */
		value: string;
	}

	/** Describes a filter for Session Manager information. */
	export interface SessionFilterFormProperties {

		/** Required */
		key: FormControl<SessionFilterKey | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSessionFilterFormGroup() {
		return new FormGroup<SessionFilterFormProperties>({
			key: new FormControl<SessionFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SessionFilterKey { InvokedAfter = 0, InvokedBefore = 1, Target = 2, Owner = 3, Status = 4, SessionId = 5 }

	export interface DisassociateOpsItemRelatedItemResponse {
	}
	export interface DisassociateOpsItemRelatedItemResponseFormProperties {
	}
	export function CreateDisassociateOpsItemRelatedItemResponseFormGroup() {
		return new FormGroup<DisassociateOpsItemRelatedItemResponseFormProperties>({
		});

	}

	export interface DisassociateOpsItemRelatedItemRequest {

		/** Required */
		OpsItemId: string;

		/** Required */
		AssociationId: string;
	}
	export interface DisassociateOpsItemRelatedItemRequestFormProperties {

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,

		/** Required */
		AssociationId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateOpsItemRelatedItemRequestFormGroup() {
		return new FormGroup<DisassociateOpsItemRelatedItemRequestFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpsItemRelatedItemAssociationNotFoundException {
	}
	export interface OpsItemRelatedItemAssociationNotFoundExceptionFormProperties {
	}
	export function CreateOpsItemRelatedItemAssociationNotFoundExceptionFormGroup() {
		return new FormGroup<OpsItemRelatedItemAssociationNotFoundExceptionFormProperties>({
		});

	}

	export interface GetAutomationExecutionResult {
		AutomationExecution?: AutomationExecution;
	}
	export interface GetAutomationExecutionResultFormProperties {
	}
	export function CreateGetAutomationExecutionResultFormGroup() {
		return new FormGroup<GetAutomationExecutionResultFormProperties>({
		});

	}


	/** Detailed information about the current state of an individual Automation execution. */
	export interface AutomationExecution {
		AutomationExecutionId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		ExecutionStartTime?: Date;
		ExecutionEndTime?: Date;
		AutomationExecutionStatus?: AutomationExecutionStatus;
		StepExecutions?: Array<StepExecution>;
		StepExecutionsTruncated?: boolean | null;
		Parameters?: AutomationParameterMap;
		Outputs?: AutomationParameterMap;
		FailureMessage?: string;
		Mode?: ExecutionMode;
		ParentAutomationExecutionId?: string;
		ExecutedBy?: string;
		CurrentStepName?: string;
		CurrentAction?: string;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;
		ResolvedTargets?: ResolvedTargets;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Target?: string;
		TargetLocations?: Array<TargetLocation>;
		ProgressCounters?: ProgressCounters;
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
		AutomationSubtype?: AutomationSubtype;
		ScheduledTime?: Date;
		Runbooks?: Array<Runbook>;
		OpsItemId?: string;
		AssociationId?: string;
		ChangeRequestName?: string;
	}

	/** Detailed information about the current state of an individual Automation execution. */
	export interface AutomationExecutionFormProperties {
		AutomationExecutionId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ExecutionStartTime: FormControl<Date | null | undefined>,
		ExecutionEndTime: FormControl<Date | null | undefined>,
		AutomationExecutionStatus: FormControl<AutomationExecutionStatus | null | undefined>,
		StepExecutionsTruncated: FormControl<boolean | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
		Mode: FormControl<ExecutionMode | null | undefined>,
		ParentAutomationExecutionId: FormControl<string | null | undefined>,
		ExecutedBy: FormControl<string | null | undefined>,
		CurrentStepName: FormControl<string | null | undefined>,
		CurrentAction: FormControl<string | null | undefined>,
		TargetParameterName: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		AutomationSubtype: FormControl<AutomationSubtype | null | undefined>,
		ScheduledTime: FormControl<Date | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		ChangeRequestName: FormControl<string | null | undefined>,
	}
	export function CreateAutomationExecutionFormGroup() {
		return new FormGroup<AutomationExecutionFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			AutomationExecutionStatus: new FormControl<AutomationExecutionStatus | null | undefined>(undefined),
			StepExecutionsTruncated: new FormControl<boolean | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ExecutionMode | null | undefined>(undefined),
			ParentAutomationExecutionId: new FormControl<string | null | undefined>(undefined),
			ExecutedBy: new FormControl<string | null | undefined>(undefined),
			CurrentStepName: new FormControl<string | null | undefined>(undefined),
			CurrentAction: new FormControl<string | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			AutomationSubtype: new FormControl<AutomationSubtype | null | undefined>(undefined),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			ChangeRequestName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution. */
	export interface ProgressCounters {
		TotalSteps?: number | null;
		SuccessSteps?: number | null;
		FailedSteps?: number | null;
		CancelledSteps?: number | null;
		TimedOutSteps?: number | null;
	}

	/** An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution. */
	export interface ProgressCountersFormProperties {
		TotalSteps: FormControl<number | null | undefined>,
		SuccessSteps: FormControl<number | null | undefined>,
		FailedSteps: FormControl<number | null | undefined>,
		CancelledSteps: FormControl<number | null | undefined>,
		TimedOutSteps: FormControl<number | null | undefined>,
	}
	export function CreateProgressCountersFormGroup() {
		return new FormGroup<ProgressCountersFormProperties>({
			TotalSteps: new FormControl<number | null | undefined>(undefined),
			SuccessSteps: new FormControl<number | null | undefined>(undefined),
			FailedSteps: new FormControl<number | null | undefined>(undefined),
			CancelledSteps: new FormControl<number | null | undefined>(undefined),
			TimedOutSteps: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAutomationExecutionRequest {

		/** Required */
		AutomationExecutionId: string;
	}
	export interface GetAutomationExecutionRequestFormProperties {

		/** Required */
		AutomationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetAutomationExecutionRequestFormGroup() {
		return new FormGroup<GetAutomationExecutionRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCalendarStateResponse {
		State?: CalendarState;
		AtTime?: string;
		NextTransitionTime?: string;
	}
	export interface GetCalendarStateResponseFormProperties {
		State: FormControl<CalendarState | null | undefined>,
		AtTime: FormControl<string | null | undefined>,
		NextTransitionTime: FormControl<string | null | undefined>,
	}
	export function CreateGetCalendarStateResponseFormGroup() {
		return new FormGroup<GetCalendarStateResponseFormProperties>({
			State: new FormControl<CalendarState | null | undefined>(undefined),
			AtTime: new FormControl<string | null | undefined>(undefined),
			NextTransitionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CalendarState { OPEN = 0, CLOSED = 1 }

	export interface GetCalendarStateRequest {

		/** Required */
		CalendarNames: Array<string>;
		AtTime?: string;
	}
	export interface GetCalendarStateRequestFormProperties {
		AtTime: FormControl<string | null | undefined>,
	}
	export function CreateGetCalendarStateRequestFormGroup() {
		return new FormGroup<GetCalendarStateRequestFormProperties>({
			AtTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidDocumentType {
	}
	export interface InvalidDocumentTypeFormProperties {
	}
	export function CreateInvalidDocumentTypeFormGroup() {
		return new FormGroup<InvalidDocumentTypeFormProperties>({
		});

	}

	export interface UnsupportedCalendarException {
	}
	export interface UnsupportedCalendarExceptionFormProperties {
	}
	export function CreateUnsupportedCalendarExceptionFormGroup() {
		return new FormGroup<UnsupportedCalendarExceptionFormProperties>({
		});

	}

	export interface GetCommandInvocationResult {
		CommandId?: string;
		InstanceId?: string;
		Comment?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		PluginName?: string;
		ResponseCode?: number | null;
		ExecutionStartDateTime?: string;
		ExecutionElapsedTime?: string;
		ExecutionEndDateTime?: string;
		Status?: CommandInvocationStatus;
		StatusDetails?: string;
		StandardOutputContent?: string;
		StandardOutputUrl?: string;
		StandardErrorContent?: string;
		StandardErrorUrl?: string;
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}
	export interface GetCommandInvocationResultFormProperties {
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		PluginName: FormControl<string | null | undefined>,
		ResponseCode: FormControl<number | null | undefined>,
		ExecutionStartDateTime: FormControl<string | null | undefined>,
		ExecutionElapsedTime: FormControl<string | null | undefined>,
		ExecutionEndDateTime: FormControl<string | null | undefined>,
		Status: FormControl<CommandInvocationStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StandardOutputContent: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,
		StandardErrorContent: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetCommandInvocationResultFormGroup() {
		return new FormGroup<GetCommandInvocationResultFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			PluginName: new FormControl<string | null | undefined>(undefined),
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			ExecutionStartDateTime: new FormControl<string | null | undefined>(undefined),
			ExecutionElapsedTime: new FormControl<string | null | undefined>(undefined),
			ExecutionEndDateTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CommandInvocationStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StandardOutputContent: new FormControl<string | null | undefined>(undefined),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorContent: new FormControl<string | null | undefined>(undefined),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommandInvocationStatus { Pending = 0, InProgress = 1, Delayed = 2, Success = 3, Cancelled = 4, TimedOut = 5, Failed = 6, Cancelling = 7 }


	/** Configuration options for sending command output to Amazon CloudWatch Logs. */
	export interface CloudWatchOutputConfig {
		CloudWatchLogGroupName?: string;
		CloudWatchOutputEnabled?: boolean | null;
	}

	/** Configuration options for sending command output to Amazon CloudWatch Logs. */
	export interface CloudWatchOutputConfigFormProperties {
		CloudWatchLogGroupName: FormControl<string | null | undefined>,
		CloudWatchOutputEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudWatchOutputConfigFormGroup() {
		return new FormGroup<CloudWatchOutputConfigFormProperties>({
			CloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			CloudWatchOutputEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetCommandInvocationRequest {

		/** Required */
		CommandId: string;

		/** Required */
		InstanceId: string;
		PluginName?: string;
	}
	export interface GetCommandInvocationRequestFormProperties {

		/** Required */
		CommandId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		PluginName: FormControl<string | null | undefined>,
	}
	export function CreateGetCommandInvocationRequestFormGroup() {
		return new FormGroup<GetCommandInvocationRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PluginName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPluginName {
	}
	export interface InvalidPluginNameFormProperties {
	}
	export function CreateInvalidPluginNameFormGroup() {
		return new FormGroup<InvalidPluginNameFormProperties>({
		});

	}

	export interface InvocationDoesNotExist {
	}
	export interface InvocationDoesNotExistFormProperties {
	}
	export function CreateInvocationDoesNotExistFormGroup() {
		return new FormGroup<InvocationDoesNotExistFormProperties>({
		});

	}

	export interface GetConnectionStatusResponse {
		Target?: string;
		Status?: ConnectionStatus;
	}
	export interface GetConnectionStatusResponseFormProperties {
		Target: FormControl<string | null | undefined>,
		Status: FormControl<ConnectionStatus | null | undefined>,
	}
	export function CreateGetConnectionStatusResponseFormGroup() {
		return new FormGroup<GetConnectionStatusResponseFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum ConnectionStatus { Connected = 0, NotConnected = 1 }

	export interface GetConnectionStatusRequest {

		/** Required */
		Target: string;
	}
	export interface GetConnectionStatusRequestFormProperties {

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionStatusRequestFormGroup() {
		return new FormGroup<GetConnectionStatusRequestFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDefaultPatchBaselineResult {
		BaselineId?: string;
		OperatingSystem?: OperatingSystem;
	}
	export interface GetDefaultPatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
	}
	export function CreateGetDefaultPatchBaselineResultFormGroup() {
		return new FormGroup<GetDefaultPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetDefaultPatchBaselineRequest {
		OperatingSystem?: OperatingSystem;
	}
	export interface GetDefaultPatchBaselineRequestFormProperties {
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
	}
	export function CreateGetDefaultPatchBaselineRequestFormGroup() {
		return new FormGroup<GetDefaultPatchBaselineRequestFormProperties>({
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetDeployablePatchSnapshotForInstanceResult {
		InstanceId?: string;
		SnapshotId?: string;
		SnapshotDownloadUrl?: string;
		Product?: string;
	}
	export interface GetDeployablePatchSnapshotForInstanceResultFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		SnapshotDownloadUrl: FormControl<string | null | undefined>,
		Product: FormControl<string | null | undefined>,
	}
	export function CreateGetDeployablePatchSnapshotForInstanceResultFormGroup() {
		return new FormGroup<GetDeployablePatchSnapshotForInstanceResultFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			SnapshotDownloadUrl: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeployablePatchSnapshotForInstanceRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		SnapshotId: string;
		BaselineOverride?: BaselineOverride;
	}
	export interface GetDeployablePatchSnapshotForInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateGetDeployablePatchSnapshotForInstanceRequestFormGroup() {
		return new FormGroup<GetDeployablePatchSnapshotForInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the basic information about a patch baseline override. */
	export interface BaselineOverride {
		OperatingSystem?: OperatingSystem;

		/** A set of patch filters, typically used for approval rules. */
		GlobalFilters?: PatchFilterGroup;

		/** A set of rules defining the approval rules for a patch baseline. */
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: PatchAction;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		Sources?: Array<PatchSource>;
	}

	/** Defines the basic information about a patch baseline override. */
	export interface BaselineOverrideFormProperties {
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		RejectedPatchesAction: FormControl<PatchAction | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
	}
	export function CreateBaselineOverrideFormGroup() {
		return new FormGroup<BaselineOverrideFormProperties>({
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<PatchAction | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UnsupportedFeatureRequiredException {
	}
	export interface UnsupportedFeatureRequiredExceptionFormProperties {
	}
	export function CreateUnsupportedFeatureRequiredExceptionFormGroup() {
		return new FormGroup<UnsupportedFeatureRequiredExceptionFormProperties>({
		});

	}

	export interface GetDocumentResult {
		Name?: string;
		CreatedDate?: Date;
		DisplayName?: string;
		VersionName?: string;
		DocumentVersion?: string;
		Status?: DocumentStatus;
		StatusInformation?: string;
		Content?: string;
		DocumentType?: DocumentType;
		DocumentFormat?: DocumentFormat;
		Requires?: Array<DocumentRequires>;
		AttachmentsContent?: Array<AttachmentContent>;
		ReviewStatus?: ReviewStatus;
	}
	export interface GetDocumentResultFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		Status: FormControl<DocumentStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentType | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		ReviewStatus: FormControl<ReviewStatus | null | undefined>,
	}
	export function CreateGetDocumentResultFormGroup() {
		return new FormGroup<GetDocumentResultFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DocumentStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<DocumentType | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			ReviewStatus: new FormControl<ReviewStatus | null | undefined>(undefined),
		});

	}


	/** A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContent {
		Name?: string;
		Size?: number | null;
		Hash?: string;
		HashType?: AttachmentHashType;
		Url?: string;
	}

	/** A structure that includes attributes that describe a document attachment. */
	export interface AttachmentContentFormProperties {
		Name: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		Hash: FormControl<string | null | undefined>,
		HashType: FormControl<AttachmentHashType | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentContentFormGroup() {
		return new FormGroup<AttachmentContentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Hash: new FormControl<string | null | undefined>(undefined),
			HashType: new FormControl<AttachmentHashType | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachmentHashType { Sha256 = 0 }

	export interface GetDocumentRequest {

		/** Required */
		Name: string;
		VersionName?: string;
		DocumentVersion?: string;
		DocumentFormat?: DocumentFormat;
	}
	export interface GetDocumentRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
	}
	export function CreateGetDocumentRequestFormGroup() {
		return new FormGroup<GetDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
		});

	}

	export interface GetInventoryResult {
		Entities?: Array<InventoryResultEntity>;
		NextToken?: string;
	}
	export interface GetInventoryResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInventoryResultFormGroup() {
		return new FormGroup<GetInventoryResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inventory query results. */
	export interface InventoryResultEntity {
		Id?: string;
		Data?: InventoryResultItemMap;
	}

	/** Inventory query results. */
	export interface InventoryResultEntityFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInventoryResultEntityFormGroup() {
		return new FormGroup<InventoryResultEntityFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryResultItemMap {
	}
	export interface InventoryResultItemMapFormProperties {
	}
	export function CreateInventoryResultItemMapFormGroup() {
		return new FormGroup<InventoryResultItemMapFormProperties>({
		});

	}

	export interface GetInventoryRequest {
		Filters?: Array<InventoryFilter>;
		Aggregators?: Array<InventoryAggregator>;
		ResultAttributes?: Array<ResultAttribute>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetInventoryRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetInventoryRequestFormGroup() {
		return new FormGroup<GetInventoryRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
		Type?: InventoryQueryOperatorType;
	}

	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface InventoryFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Type: FormControl<InventoryQueryOperatorType | null | undefined>,
	}
	export function CreateInventoryFilterFormGroup() {
		return new FormGroup<InventoryFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<InventoryQueryOperatorType | null | undefined>(undefined),
		});

	}

	export enum InventoryQueryOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }


	/** Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregator {
		Expression?: string;
		Aggregators?: Array<InventoryAggregator>;
		Groups?: Array<InventoryGroup>;
	}

	/** Specifies the inventory type and attribute for the aggregation execution. */
	export interface InventoryAggregatorFormProperties {
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateInventoryAggregatorFormGroup() {
		return new FormGroup<InventoryAggregatorFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroup {

		/** Required */
		Name: string;

		/** Required */
		Filters: Array<InventoryFilter>;
	}

	/** A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria. */
	export interface InventoryGroupFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateInventoryGroupFormGroup() {
		return new FormGroup<InventoryGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The inventory item result attribute. */
	export interface ResultAttribute {

		/** Required */
		TypeName: string;
	}

	/** The inventory item result attribute. */
	export interface ResultAttributeFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateResultAttributeFormGroup() {
		return new FormGroup<ResultAttributeFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInventoryGroupException {
	}
	export interface InvalidInventoryGroupExceptionFormProperties {
	}
	export function CreateInvalidInventoryGroupExceptionFormGroup() {
		return new FormGroup<InvalidInventoryGroupExceptionFormProperties>({
		});

	}

	export interface InvalidAggregatorException {
	}
	export interface InvalidAggregatorExceptionFormProperties {
	}
	export function CreateInvalidAggregatorExceptionFormGroup() {
		return new FormGroup<InvalidAggregatorExceptionFormProperties>({
		});

	}

	export interface InvalidResultAttributeException {
	}
	export interface InvalidResultAttributeExceptionFormProperties {
	}
	export function CreateInvalidResultAttributeExceptionFormGroup() {
		return new FormGroup<InvalidResultAttributeExceptionFormProperties>({
		});

	}

	export interface GetInventorySchemaResult {
		Schemas?: Array<InventoryItemSchema>;
		NextToken?: string;
	}
	export interface GetInventorySchemaResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInventorySchemaResultFormGroup() {
		return new FormGroup<GetInventorySchemaResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inventory item schema definition. Users can use this to compose inventory query filters. */
	export interface InventoryItemSchema {

		/** Required */
		TypeName: string;
		Version?: string;

		/** Required */
		Attributes: Array<InventoryItemAttribute>;
		DisplayName?: string;
	}

	/** The inventory item schema definition. Users can use this to compose inventory query filters. */
	export interface InventoryItemSchemaFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemSchemaFormGroup() {
		return new FormGroup<InventoryItemSchemaFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttribute {

		/** Required */
		Name: string;

		/** Required */
		DataType: InventoryAttributeDataType;
	}

	/** Attributes are the entries within the inventory item content. It contains name and value. */
	export interface InventoryItemAttributeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DataType: FormControl<InventoryAttributeDataType | null | undefined>,
	}
	export function CreateInventoryItemAttributeFormGroup() {
		return new FormGroup<InventoryItemAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataType: new FormControl<InventoryAttributeDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InventoryAttributeDataType { string = 0, number = 1 }

	export interface GetInventorySchemaRequest {
		TypeName?: string;
		NextToken?: string;
		MaxResults?: number | null;
		Aggregator?: boolean | null;
		SubType?: boolean | null;
	}
	export interface GetInventorySchemaRequestFormProperties {
		TypeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Aggregator: FormControl<boolean | null | undefined>,
		SubType: FormControl<boolean | null | undefined>,
	}
	export function CreateGetInventorySchemaRequestFormGroup() {
		return new FormGroup<GetInventorySchemaRequestFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Aggregator: new FormControl<boolean | null | undefined>(undefined),
			SubType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowResult {
		WindowId?: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		ScheduleOffset?: number | null;
		NextExecutionTime?: string;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		CreatedDate?: Date;
		ModifiedDate?: Date;
	}
	export interface GetMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
		NextExecutionTime: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			NextExecutionTime: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Cutoff: new FormControl<number | null | undefined>(undefined),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowRequest {

		/** Required */
		WindowId: string;
	}
	export interface GetMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMaintenanceWindowExecutionResult {
		WindowExecutionId?: string;
		TaskIds?: Array<string>;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
	}
	export interface GetMaintenanceWindowExecutionResultFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowExecutionRequest {

		/** Required */
		WindowExecutionId: string;
	}
	export interface GetMaintenanceWindowExecutionRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskResult {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		TaskArn?: string;
		ServiceRole?: string;
		Type?: MaintenanceWindowTaskType;
		TaskParameters?: Array<MaintenanceWindowTaskParameters>;
		Priority?: number | null;
		MaxConcurrency?: string;
		MaxErrors?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}
	export interface GetMaintenanceWindowExecutionTaskResultFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
		TaskExecutionId: FormControl<string | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		Type: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskRequest {

		/** Required */
		WindowExecutionId: string;

		/** Required */
		TaskId: string;
	}
	export interface GetMaintenanceWindowExecutionTaskRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,

		/** Required */
		TaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskInvocationResult {
		WindowExecutionId?: string;
		TaskExecutionId?: string;
		InvocationId?: string;
		ExecutionId?: string;
		TaskType?: MaintenanceWindowTaskType;
		Parameters?: string;
		Status?: MaintenanceWindowExecutionStatus;
		StatusDetails?: string;
		StartTime?: Date;
		EndTime?: Date;
		OwnerInformation?: string;
		WindowTargetId?: string;
	}
	export interface GetMaintenanceWindowExecutionTaskInvocationResultFormProperties {
		WindowExecutionId: FormControl<string | null | undefined>,
		TaskExecutionId: FormControl<string | null | undefined>,
		InvocationId: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Parameters: FormControl<string | null | undefined>,
		Status: FormControl<MaintenanceWindowExecutionStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskInvocationResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskInvocationResultFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskExecutionId: new FormControl<string | null | undefined>(undefined),
			InvocationId: new FormControl<string | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
			Parameters: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MaintenanceWindowExecutionStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowExecutionTaskInvocationRequest {

		/** Required */
		WindowExecutionId: string;

		/** Required */
		TaskId: string;

		/** Required */
		InvocationId: string;
	}
	export interface GetMaintenanceWindowExecutionTaskInvocationRequestFormProperties {

		/** Required */
		WindowExecutionId: FormControl<string | null | undefined>,

		/** Required */
		TaskId: FormControl<string | null | undefined>,

		/** Required */
		InvocationId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowExecutionTaskInvocationRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowExecutionTaskInvocationRequestFormProperties>({
			WindowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvocationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMaintenanceWindowTaskResult {
		WindowId?: string;
		WindowTaskId?: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskType?: MaintenanceWindowTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters;
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number | null;
		MaxConcurrency?: string;
		MaxErrors?: string;
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface GetMaintenanceWindowTaskResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTaskId: FormControl<string | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		TaskType: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CutoffBehavior: FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>,
	}
	export function CreateGetMaintenanceWindowTaskResultFormGroup() {
		return new FormGroup<GetMaintenanceWindowTaskResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTaskId: new FormControl<string | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CutoffBehavior: new FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>(undefined),
		});

	}


	/** The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParameters {
		RunCommand?: MaintenanceWindowRunCommandParameters;
		Automation?: MaintenanceWindowAutomationParameters;
		StepFunctions?: MaintenanceWindowStepFunctionsParameters;
		Lambda?: MaintenanceWindowLambdaParameters;
	}

	/** The parameters for task execution. */
	export interface MaintenanceWindowTaskInvocationParametersFormProperties {
	}
	export function CreateMaintenanceWindowTaskInvocationParametersFormGroup() {
		return new FormGroup<MaintenanceWindowTaskInvocationParametersFormProperties>({
		});

	}


	/** <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParameters {
		Comment?: string;

		/** Configuration options for sending command output to Amazon CloudWatch Logs. */
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
		DocumentHash?: string;
		DocumentHashType?: DocumentHashType;
		DocumentVersion?: string;
		NotificationConfig?: NotificationConfig;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		Parameters?: Parameters;
		ServiceRoleArn?: string;
		TimeoutSeconds?: number | null;
	}

	/** <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note> */
	export interface MaintenanceWindowRunCommandParametersFormProperties {
		Comment: FormControl<string | null | undefined>,
		DocumentHash: FormControl<string | null | undefined>,
		DocumentHashType: FormControl<DocumentHashType | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		TimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateMaintenanceWindowRunCommandParametersFormGroup() {
		return new FormGroup<MaintenanceWindowRunCommandParametersFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			DocumentHash: new FormControl<string | null | undefined>(undefined),
			DocumentHashType: new FormControl<DocumentHashType | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configurations for sending notifications. */
	export interface NotificationConfig {
		NotificationArn?: string;
		NotificationEvents?: Array<NotificationEvent>;
		NotificationType?: NotificationType;
	}

	/** Configurations for sending notifications. */
	export interface NotificationConfigFormProperties {
		NotificationArn: FormControl<string | null | undefined>,
		NotificationType: FormControl<NotificationType | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			NotificationArn: new FormControl<string | null | undefined>(undefined),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined),
		});

	}

	export enum NotificationEvent { All = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export enum NotificationType { Command = 0, Invocation = 1 }


	/** The parameters for an <code>AUTOMATION</code> task type. */
	export interface MaintenanceWindowAutomationParameters {
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
	}

	/** The parameters for an <code>AUTOMATION</code> task type. */
	export interface MaintenanceWindowAutomationParametersFormProperties {
		DocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowAutomationParametersFormGroup() {
		return new FormGroup<MaintenanceWindowAutomationParametersFormProperties>({
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParameters {
		Input?: string;
		Name?: string;
	}

	/** <p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note> */
	export interface MaintenanceWindowStepFunctionsParametersFormProperties {
		Input: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowStepFunctionsParametersFormGroup() {
		return new FormGroup<MaintenanceWindowStepFunctionsParametersFormProperties>({
			Input: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The parameters for a <code>LAMBDA</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParameters {
		ClientContext?: string;
		Qualifier?: string;
		Payload?: string;
	}

	/** <p>The parameters for a <code>LAMBDA</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Lambda tasks, Systems Manager ignores any values specified for TaskParameters and LoggingInfo.</p> </note> */
	export interface MaintenanceWindowLambdaParametersFormProperties {
		ClientContext: FormControl<string | null | undefined>,
		Qualifier: FormControl<string | null | undefined>,
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceWindowLambdaParametersFormGroup() {
		return new FormGroup<MaintenanceWindowLambdaParametersFormProperties>({
			ClientContext: new FormControl<string | null | undefined>(undefined),
			Qualifier: new FormControl<string | null | undefined>(undefined),
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMaintenanceWindowTaskRequest {

		/** Required */
		WindowId: string;

		/** Required */
		WindowTaskId: string;
	}
	export interface GetMaintenanceWindowTaskRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetMaintenanceWindowTaskRequestFormGroup() {
		return new FormGroup<GetMaintenanceWindowTaskRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOpsItemResponse {
		OpsItem?: OpsItem;
	}
	export interface GetOpsItemResponseFormProperties {
	}
	export function CreateGetOpsItemResponseFormGroup() {
		return new FormGroup<GetOpsItemResponseFormProperties>({
		});

	}


	/** <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> */
	export interface OpsItem {
		CreatedBy?: string;
		OpsItemType?: string;
		CreatedTime?: Date;
		Description?: string;
		LastModifiedBy?: string;
		LastModifiedTime?: Date;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: OpsItemStatus;
		OpsItemId?: string;
		Version?: string;
		Title?: string;
		Source?: string;
		OperationalData?: OpsItemOperationalData;
		Category?: string;
		Severity?: string;
		ActualStartTime?: Date;
		ActualEndTime?: Date;
		PlannedStartTime?: Date;
		PlannedEndTime?: Date;
		OpsItemArn?: string;
	}

	/** <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> */
	export interface OpsItemFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		OpsItemType: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<OpsItemStatus | null | undefined>,
		OpsItemId: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		ActualStartTime: FormControl<Date | null | undefined>,
		ActualEndTime: FormControl<Date | null | undefined>,
		PlannedStartTime: FormControl<Date | null | undefined>,
		PlannedEndTime: FormControl<Date | null | undefined>,
		OpsItemArn: FormControl<string | null | undefined>,
	}
	export function CreateOpsItemFormGroup() {
		return new FormGroup<OpsItemFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			OpsItemType: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OpsItemStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			ActualStartTime: new FormControl<Date | null | undefined>(undefined),
			ActualEndTime: new FormControl<Date | null | undefined>(undefined),
			PlannedStartTime: new FormControl<Date | null | undefined>(undefined),
			PlannedEndTime: new FormControl<Date | null | undefined>(undefined),
			OpsItemArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpsItemRequest {

		/** Required */
		OpsItemId: string;
		OpsItemArn?: string;
	}
	export interface GetOpsItemRequestFormProperties {

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,
		OpsItemArn: FormControl<string | null | undefined>,
	}
	export function CreateGetOpsItemRequestFormGroup() {
		return new FormGroup<GetOpsItemRequestFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OpsItemArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpsMetadataResult {
		ResourceId?: string;
		Metadata?: MetadataMap;
		NextToken?: string;
	}
	export interface GetOpsMetadataResultFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOpsMetadataResultFormGroup() {
		return new FormGroup<GetOpsMetadataResultFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpsMetadataRequest {

		/** Required */
		OpsMetadataArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetOpsMetadataRequestFormProperties {

		/** Required */
		OpsMetadataArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOpsMetadataRequestFormGroup() {
		return new FormGroup<GetOpsMetadataRequestFormProperties>({
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpsSummaryResult {
		Entities?: Array<OpsEntity>;
		NextToken?: string;
	}
	export interface GetOpsSummaryResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOpsSummaryResultFormGroup() {
		return new FormGroup<GetOpsSummaryResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the query. */
	export interface OpsEntity {
		Id?: string;
		Data?: OpsEntityItemMap;
	}

	/** The result of the query. */
	export interface OpsEntityFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOpsEntityFormGroup() {
		return new FormGroup<OpsEntityFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpsEntityItemMap {
	}
	export interface OpsEntityItemMapFormProperties {
	}
	export function CreateOpsEntityItemMapFormGroup() {
		return new FormGroup<OpsEntityItemMapFormProperties>({
		});

	}

	export interface GetOpsSummaryRequest {
		SyncName?: string;
		Filters?: Array<OpsFilter>;
		Aggregators?: Array<OpsAggregator>;
		ResultAttributes?: Array<OpsResultAttribute>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetOpsSummaryRequestFormProperties {
		SyncName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetOpsSummaryRequestFormGroup() {
		return new FormGroup<GetOpsSummaryRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter for viewing OpsData summaries. */
	export interface OpsFilter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
		Type?: InventoryQueryOperatorType;
	}

	/** A filter for viewing OpsData summaries. */
	export interface OpsFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Type: FormControl<InventoryQueryOperatorType | null | undefined>,
	}
	export function CreateOpsFilterFormGroup() {
		return new FormGroup<OpsFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<InventoryQueryOperatorType | null | undefined>(undefined),
		});

	}


	/** One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregator {
		AggregatorType?: string;
		TypeName?: string;
		AttributeName?: string;
		Values?: OpsAggregatorValueMap;
		Filters?: Array<OpsFilter>;
		Aggregators?: Array<OpsAggregator>;
	}

	/** One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few. */
	export interface OpsAggregatorFormProperties {
		AggregatorType: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateOpsAggregatorFormGroup() {
		return new FormGroup<OpsAggregatorFormProperties>({
			AggregatorType: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpsAggregatorValueMap {
	}
	export interface OpsAggregatorValueMapFormProperties {
	}
	export function CreateOpsAggregatorValueMapFormGroup() {
		return new FormGroup<OpsAggregatorValueMapFormProperties>({
		});

	}


	/** The OpsItem data type to return. */
	export interface OpsResultAttribute {

		/** Required */
		TypeName: string;
	}

	/** The OpsItem data type to return. */
	export interface OpsResultAttributeFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateOpsResultAttributeFormGroup() {
		return new FormGroup<OpsResultAttributeFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetParameterResult {
		Parameter?: Parameter;
	}
	export interface GetParameterResultFormProperties {
	}
	export function CreateGetParameterResultFormGroup() {
		return new FormGroup<GetParameterResultFormProperties>({
		});

	}


	/** An Amazon Web Services Systems Manager parameter in Parameter Store. */
	export interface Parameter {
		Name?: string;
		Type?: ParameterType;
		Value?: string;
		Version?: number | null;
		Selector?: string;
		SourceResult?: string;
		LastModifiedDate?: Date;
		ARN?: string;
		DataType?: string;
	}

	/** An Amazon Web Services Systems Manager parameter in Parameter Store. */
	export interface ParameterFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterType | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Selector: FormControl<string | null | undefined>,
		SourceResult: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ParameterType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Selector: new FormControl<string | null | undefined>(undefined),
			SourceResult: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetParameterRequest {

		/** Required */
		Name: string;
		WithDecryption?: boolean | null;
	}
	export interface GetParameterRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,
	}
	export function CreateGetParameterRequestFormGroup() {
		return new FormGroup<GetParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidKeyId {
	}
	export interface InvalidKeyIdFormProperties {
	}
	export function CreateInvalidKeyIdFormGroup() {
		return new FormGroup<InvalidKeyIdFormProperties>({
		});

	}

	export interface ParameterVersionNotFound {
	}
	export interface ParameterVersionNotFoundFormProperties {
	}
	export function CreateParameterVersionNotFoundFormGroup() {
		return new FormGroup<ParameterVersionNotFoundFormProperties>({
		});

	}

	export interface GetParameterHistoryResult {
		Parameters?: Array<ParameterHistory>;
		NextToken?: string;
	}
	export interface GetParameterHistoryResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParameterHistoryResultFormGroup() {
		return new FormGroup<GetParameterHistoryResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about parameter usage. */
	export interface ParameterHistory {
		Name?: string;
		Type?: ParameterType;
		KeyId?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		Description?: string;
		Value?: string;
		AllowedPattern?: string;
		Version?: number | null;
		Labels?: Array<string>;
		Tier?: ParameterTier;
		Policies?: Array<ParameterInlinePolicy>;
		DataType?: string;
	}

	/** Information about parameter usage. */
	export interface ParameterHistoryFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ParameterType | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		AllowedPattern: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterTier | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateParameterHistoryFormGroup() {
		return new FormGroup<ParameterHistoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ParameterType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			AllowedPattern: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterTier | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetParameterHistoryRequest {

		/** Required */
		Name: string;
		WithDecryption?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetParameterHistoryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParameterHistoryRequestFormGroup() {
		return new FormGroup<GetParameterHistoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetParametersResult {
		Parameters?: Array<Parameter>;
		InvalidParameters?: Array<string>;
	}
	export interface GetParametersResultFormProperties {
	}
	export function CreateGetParametersResultFormGroup() {
		return new FormGroup<GetParametersResultFormProperties>({
		});

	}

	export interface GetParametersRequest {

		/** Required */
		Names: Array<string>;
		WithDecryption?: boolean | null;
	}
	export interface GetParametersRequestFormProperties {
		WithDecryption: FormControl<boolean | null | undefined>,
	}
	export function CreateGetParametersRequestFormGroup() {
		return new FormGroup<GetParametersRequestFormProperties>({
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetParametersByPathResult {
		Parameters?: Array<Parameter>;
		NextToken?: string;
	}
	export interface GetParametersByPathResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParametersByPathResultFormGroup() {
		return new FormGroup<GetParametersByPathResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetParametersByPathRequest {

		/** Required */
		Path: string;
		Recursive?: boolean | null;
		ParameterFilters?: Array<ParameterStringFilter>;
		WithDecryption?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetParametersByPathRequestFormProperties {

		/** Required */
		Path: FormControl<string | null | undefined>,
		Recursive: FormControl<boolean | null | undefined>,
		WithDecryption: FormControl<boolean | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetParametersByPathRequestFormGroup() {
		return new FormGroup<GetParametersByPathRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Recursive: new FormControl<boolean | null | undefined>(undefined),
			WithDecryption: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPatchBaselineResult {
		BaselineId?: string;
		Name?: string;
		OperatingSystem?: OperatingSystem;
		GlobalFilters?: PatchFilterGroup;
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: PatchAction;
		PatchGroups?: Array<string>;
		CreatedDate?: Date;
		ModifiedDate?: Date;
		Description?: string;
		Sources?: Array<PatchSource>;
	}
	export interface GetPatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<PatchAction | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetPatchBaselineResultFormGroup() {
		return new FormGroup<GetPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<PatchAction | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPatchBaselineRequest {

		/** Required */
		BaselineId: string;
	}
	export interface GetPatchBaselineRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateGetPatchBaselineRequestFormGroup() {
		return new FormGroup<GetPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
		OperatingSystem?: OperatingSystem;
	}
	export interface GetPatchBaselineForPatchGroupResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		PatchGroup: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
	}
	export function CreateGetPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<GetPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			PatchGroup: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetPatchBaselineForPatchGroupRequest {

		/** Required */
		PatchGroup: string;
		OperatingSystem?: OperatingSystem;
	}
	export interface GetPatchBaselineForPatchGroupRequestFormProperties {

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
	}
	export function CreateGetPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<GetPatchBaselineForPatchGroupRequestFormProperties>({
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
		});

	}

	export interface GetResourcePoliciesResponse {
		NextToken?: string;
		Policies?: Array<GetResourcePoliciesResponseEntry>;
	}
	export interface GetResourcePoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesResponseFormGroup() {
		return new FormGroup<GetResourcePoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). */
	export interface GetResourcePoliciesResponseEntry {
		PolicyId?: string;
		PolicyHash?: string;
		Policy?: string;
	}

	/** A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). */
	export interface GetResourcePoliciesResponseEntryFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		PolicyHash: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesResponseEntryFormGroup() {
		return new FormGroup<GetResourcePoliciesResponseEntryFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyHash: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePoliciesRequest {

		/** Required */
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetResourcePoliciesRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourcePoliciesRequestFormGroup() {
		return new FormGroup<GetResourcePoliciesRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The query result body of the GetServiceSetting API operation. */
	export interface GetServiceSettingResult {
		ServiceSetting?: ServiceSetting;
	}

	/** The query result body of the GetServiceSetting API operation. */
	export interface GetServiceSettingResultFormProperties {
	}
	export function CreateGetServiceSettingResultFormGroup() {
		return new FormGroup<GetServiceSettingResultFormProperties>({
		});

	}


	/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> */
	export interface ServiceSetting {
		SettingId?: string;
		SettingValue?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		ARN?: string;
		Status?: string;
	}

	/** <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> */
	export interface ServiceSettingFormProperties {
		SettingId: FormControl<string | null | undefined>,
		SettingValue: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateServiceSettingFormGroup() {
		return new FormGroup<ServiceSettingFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined),
			SettingValue: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body of the GetServiceSetting API operation. */
	export interface GetServiceSettingRequest {

		/** Required */
		SettingId: string;
	}

	/** The request body of the GetServiceSetting API operation. */
	export interface GetServiceSettingRequestFormProperties {

		/** Required */
		SettingId: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSettingRequestFormGroup() {
		return new FormGroup<GetServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceSettingNotFound {
	}
	export interface ServiceSettingNotFoundFormProperties {
	}
	export function CreateServiceSettingNotFoundFormGroup() {
		return new FormGroup<ServiceSettingNotFoundFormProperties>({
		});

	}

	export interface LabelParameterVersionResult {
		InvalidLabels?: Array<string>;
		ParameterVersion?: number | null;
	}
	export interface LabelParameterVersionResultFormProperties {
		ParameterVersion: FormControl<number | null | undefined>,
	}
	export function CreateLabelParameterVersionResultFormGroup() {
		return new FormGroup<LabelParameterVersionResultFormProperties>({
			ParameterVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LabelParameterVersionRequest {

		/** Required */
		Name: string;
		ParameterVersion?: number | null;

		/** Required */
		Labels: Array<string>;
	}
	export interface LabelParameterVersionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ParameterVersion: FormControl<number | null | undefined>,
	}
	export function CreateLabelParameterVersionRequestFormGroup() {
		return new FormGroup<LabelParameterVersionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ParameterVersionLabelLimitExceeded {
	}
	export interface ParameterVersionLabelLimitExceededFormProperties {
	}
	export function CreateParameterVersionLabelLimitExceededFormGroup() {
		return new FormGroup<ParameterVersionLabelLimitExceededFormProperties>({
		});

	}

	export interface ListAssociationVersionsResult {
		AssociationVersions?: Array<AssociationVersionInfo>;
		NextToken?: string;
	}
	export interface ListAssociationVersionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationVersionsResultFormGroup() {
		return new FormGroup<ListAssociationVersionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the association version. */
	export interface AssociationVersionInfo {
		AssociationId?: string;
		AssociationVersion?: string;
		CreatedDate?: Date;
		Name?: string;
		DocumentVersion?: string;
		Parameters?: Parameters;
		Targets?: Array<Target>;
		ScheduleExpression?: string;
		OutputLocation?: InstanceAssociationOutputLocation;
		AssociationName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationComplianceSeverity;
		SyncCompliance?: AssociationSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean | null;
		CalendarNames?: Array<string>;
		TargetLocations?: Array<TargetLocation>;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;
	}

	/** Information about the association version. */
	export interface AssociationVersionInfoFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateAssociationVersionInfoFormGroup() {
		return new FormGroup<AssociationVersionInfoFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			ComplianceSeverity: new FormControl<AssociationComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAssociationVersionsRequest {

		/** Required */
		AssociationId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAssociationVersionsRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationVersionsRequestFormGroup() {
		return new FormGroup<ListAssociationVersionsRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociationsResult {
		Associations?: Array<Association>;
		NextToken?: string;
	}
	export interface ListAssociationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsResultFormGroup() {
		return new FormGroup<ListAssociationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node. */
	export interface Association {
		Name?: string;
		InstanceId?: string;
		AssociationId?: string;
		AssociationVersion?: string;
		DocumentVersion?: string;
		Targets?: Array<Target>;
		LastExecutionDate?: Date;
		Overview?: AssociationOverview;
		ScheduleExpression?: string;
		AssociationName?: string;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;
	}

	/** Describes an association of a Amazon Web Services Systems Manager document (SSM document) and a managed node. */
	export interface AssociationFormProperties {
		Name: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		LastExecutionDate: FormControl<Date | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateAssociationFormGroup() {
		return new FormGroup<AssociationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			LastExecutionDate: new FormControl<Date | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAssociationsRequest {
		AssociationFilterList?: Array<AssociationFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAssociationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsRequestFormGroup() {
		return new FormGroup<ListAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter. */
	export interface AssociationFilter {

		/** Required */
		key: AssociationFilterKey;

		/** Required */
		value: string;
	}

	/** Describes a filter. */
	export interface AssociationFilterFormProperties {

		/** Required */
		key: FormControl<AssociationFilterKey | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAssociationFilterFormGroup() {
		return new FormGroup<AssociationFilterFormProperties>({
			key: new FormControl<AssociationFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociationFilterKey { InstanceId = 0, Name = 1, AssociationId = 2, AssociationStatusName = 3, LastExecutedBefore = 4, LastExecutedAfter = 5, AssociationName = 6, ResourceGroupName = 7 }

	export interface ListCommandInvocationsResult {
		CommandInvocations?: Array<CommandInvocation>;
		NextToken?: string;
	}
	export interface ListCommandInvocationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommandInvocationsResultFormGroup() {
		return new FormGroup<ListCommandInvocationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An invocation is a copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocation {
		CommandId?: string;
		InstanceId?: string;
		InstanceName?: string;
		Comment?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		RequestedDateTime?: Date;
		Status?: CommandInvocationStatus;
		StatusDetails?: string;
		TraceOutput?: string;
		StandardOutputUrl?: string;
		StandardErrorUrl?: string;
		CommandPlugins?: Array<CommandPlugin>;
		ServiceRole?: string;
		NotificationConfig?: NotificationConfig;
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
	}

	/** An invocation is a copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. A command invocation returns status and detail information about a command you ran.  */
	export interface CommandInvocationFormProperties {
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceName: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		RequestedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<CommandInvocationStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		TraceOutput: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
	}
	export function CreateCommandInvocationFormGroup() {
		return new FormGroup<CommandInvocationFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceName: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			RequestedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CommandInvocationStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			TraceOutput: new FormControl<string | null | undefined>(undefined),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes plugin details. */
	export interface CommandPlugin {
		Name?: string;
		Status?: CommandPluginStatus;
		StatusDetails?: string;
		ResponseCode?: number | null;
		ResponseStartDateTime?: Date;
		ResponseFinishDateTime?: Date;
		Output?: string;
		StandardOutputUrl?: string;
		StandardErrorUrl?: string;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
	}

	/** Describes plugin details. */
	export interface CommandPluginFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<CommandPluginStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		ResponseCode: FormControl<number | null | undefined>,
		ResponseStartDateTime: FormControl<Date | null | undefined>,
		ResponseFinishDateTime: FormControl<Date | null | undefined>,
		Output: FormControl<string | null | undefined>,
		StandardOutputUrl: FormControl<string | null | undefined>,
		StandardErrorUrl: FormControl<string | null | undefined>,
		OutputS3Region: FormControl<string | null | undefined>,
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCommandPluginFormGroup() {
		return new FormGroup<CommandPluginFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<CommandPluginStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			ResponseStartDateTime: new FormControl<Date | null | undefined>(undefined),
			ResponseFinishDateTime: new FormControl<Date | null | undefined>(undefined),
			Output: new FormControl<string | null | undefined>(undefined),
			StandardOutputUrl: new FormControl<string | null | undefined>(undefined),
			StandardErrorUrl: new FormControl<string | null | undefined>(undefined),
			OutputS3Region: new FormControl<string | null | undefined>(undefined),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommandPluginStatus { Pending = 0, InProgress = 1, Success = 2, TimedOut = 3, Cancelled = 4, Failed = 5 }

	export interface ListCommandInvocationsRequest {
		CommandId?: string;
		InstanceId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<CommandFilter>;
		Details?: boolean | null;
	}
	export interface ListCommandInvocationsRequestFormProperties {
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Details: FormControl<boolean | null | undefined>,
	}
	export function CreateListCommandInvocationsRequestFormGroup() {
		return new FormGroup<ListCommandInvocationsRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes a command filter.</p> <note> <p>A managed node ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the node yet.</p> </note> */
	export interface CommandFilter {

		/** Required */
		key: CommandFilterKey;

		/** Required */
		value: string;
	}

	/** <p>Describes a command filter.</p> <note> <p>A managed node ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the node yet.</p> </note> */
	export interface CommandFilterFormProperties {

		/** Required */
		key: FormControl<CommandFilterKey | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCommandFilterFormGroup() {
		return new FormGroup<CommandFilterFormProperties>({
			key: new FormControl<CommandFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommandFilterKey { InvokedAfter = 0, InvokedBefore = 1, Status = 2, ExecutionStage = 3, DocumentName = 4 }

	export interface ListCommandsResult {
		Commands?: Array<Command>;
		NextToken?: string;
	}
	export interface ListCommandsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommandsResultFormGroup() {
		return new FormGroup<ListCommandsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a command request. */
	export interface Command {
		CommandId?: string;
		DocumentName?: string;
		DocumentVersion?: string;
		Comment?: string;
		ExpiresAfter?: Date;
		Parameters?: Parameters;
		InstanceIds?: Array<string>;
		Targets?: Array<Target>;
		RequestedDateTime?: Date;
		Status?: CommandStatus;
		StatusDetails?: string;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		TargetCount?: number | null;
		CompletedCount?: number | null;
		ErrorCount?: number | null;
		DeliveryTimedOutCount?: number | null;
		ServiceRole?: string;
		NotificationConfig?: NotificationConfig;
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
		TimeoutSeconds?: number | null;
		AlarmConfiguration?: AlarmConfiguration;
		TriggeredAlarms?: Array<AlarmStateInformation>;
	}

	/** Describes a command request. */
	export interface CommandFormProperties {
		CommandId: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		ExpiresAfter: FormControl<Date | null | undefined>,
		RequestedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<CommandStatus | null | undefined>,
		StatusDetails: FormControl<string | null | undefined>,
		OutputS3Region: FormControl<string | null | undefined>,
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		TargetCount: FormControl<number | null | undefined>,
		CompletedCount: FormControl<number | null | undefined>,
		ErrorCount: FormControl<number | null | undefined>,
		DeliveryTimedOutCount: FormControl<number | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		TimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			ExpiresAfter: new FormControl<Date | null | undefined>(undefined),
			RequestedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CommandStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined),
			OutputS3Region: new FormControl<string | null | undefined>(undefined),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			TargetCount: new FormControl<number | null | undefined>(undefined),
			CompletedCount: new FormControl<number | null | undefined>(undefined),
			ErrorCount: new FormControl<number | null | undefined>(undefined),
			DeliveryTimedOutCount: new FormControl<number | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CommandStatus { Pending = 0, InProgress = 1, Success = 2, Cancelled = 3, Failed = 4, TimedOut = 5, Cancelling = 6 }

	export interface ListCommandsRequest {
		CommandId?: string;
		InstanceId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<CommandFilter>;
	}
	export interface ListCommandsRequestFormProperties {
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommandsRequestFormGroup() {
		return new FormGroup<ListCommandsRequestFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComplianceItemsResult {
		ComplianceItems?: Array<ComplianceItem>;
		NextToken?: string;
	}
	export interface ListComplianceItemsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComplianceItemsResultFormGroup() {
		return new FormGroup<ListComplianceItemsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on. */
	export interface ComplianceItem {
		ComplianceType?: string;
		ResourceType?: string;
		ResourceId?: string;
		Id?: string;
		Title?: string;
		Status?: ComplianceStatus;
		Severity?: PatchComplianceLevel;
		ExecutionSummary?: ComplianceExecutionSummary;
		Details?: ComplianceItemDetails;
	}

	/** Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, and so on. */
	export interface ComplianceItemFormProperties {
		ComplianceType: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Status: FormControl<ComplianceStatus | null | undefined>,
		Severity: FormControl<PatchComplianceLevel | null | undefined>,
	}
	export function CreateComplianceItemFormGroup() {
		return new FormGroup<ComplianceItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ComplianceStatus | null | undefined>(undefined),
			Severity: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
		});

	}

	export enum ComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }


	/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummary {

		/** Required */
		ExecutionTime: Date;
		ExecutionId?: string;
		ExecutionType?: string;
	}

	/** A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'. */
	export interface ComplianceExecutionSummaryFormProperties {

		/** Required */
		ExecutionTime: FormControl<Date | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		ExecutionType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceExecutionSummaryFormGroup() {
		return new FormGroup<ComplianceExecutionSummaryFormProperties>({
			ExecutionTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			ExecutionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComplianceItemDetails {
	}
	export interface ComplianceItemDetailsFormProperties {
	}
	export function CreateComplianceItemDetailsFormGroup() {
		return new FormGroup<ComplianceItemDetailsFormProperties>({
		});

	}

	export interface ListComplianceItemsRequest {
		Filters?: Array<ComplianceStringFilter>;
		ResourceIds?: Array<string>;
		ResourceTypes?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListComplianceItemsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComplianceItemsRequestFormGroup() {
		return new FormGroup<ListComplianceItemsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilter {
		Key?: string;
		Values?: Array<string>;
		Type?: ComplianceQueryOperatorType;
	}

	/** One or more filters. Use a filter to return a more specific list of results. */
	export interface ComplianceStringFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Type: FormControl<ComplianceQueryOperatorType | null | undefined>,
	}
	export function CreateComplianceStringFilterFormGroup() {
		return new FormGroup<ComplianceStringFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ComplianceQueryOperatorType | null | undefined>(undefined),
		});

	}

	export enum ComplianceQueryOperatorType { EQUAL = 0, NOT_EQUAL = 1, BEGIN_WITH = 2, LESS_THAN = 3, GREATER_THAN = 4 }

	export interface ListComplianceSummariesResult {
		ComplianceSummaryItems?: Array<ComplianceSummaryItem>;
		NextToken?: string;
	}
	export interface ListComplianceSummariesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComplianceSummariesResultFormGroup() {
		return new FormGroup<ListComplianceSummariesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of compliance information by compliance type. */
	export interface ComplianceSummaryItem {
		ComplianceType?: string;
		CompliantSummary?: CompliantSummary;
		NonCompliantSummary?: NonCompliantSummary;
	}

	/** A summary of compliance information by compliance type. */
	export interface ComplianceSummaryItemFormProperties {
		ComplianceType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceSummaryItemFormGroup() {
		return new FormGroup<ComplianceSummaryItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
	export interface CompliantSummary {
		CompliantCount?: number | null;
		SeveritySummary?: SeveritySummary;
	}

	/** A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type. */
	export interface CompliantSummaryFormProperties {
		CompliantCount: FormControl<number | null | undefined>,
	}
	export function CreateCompliantSummaryFormGroup() {
		return new FormGroup<CompliantSummaryFormProperties>({
			CompliantCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The number of managed nodes found for each patch severity level defined in the request filter. */
	export interface SeveritySummary {
		CriticalCount?: number | null;
		HighCount?: number | null;
		MediumCount?: number | null;
		LowCount?: number | null;
		InformationalCount?: number | null;
		UnspecifiedCount?: number | null;
	}

	/** The number of managed nodes found for each patch severity level defined in the request filter. */
	export interface SeveritySummaryFormProperties {
		CriticalCount: FormControl<number | null | undefined>,
		HighCount: FormControl<number | null | undefined>,
		MediumCount: FormControl<number | null | undefined>,
		LowCount: FormControl<number | null | undefined>,
		InformationalCount: FormControl<number | null | undefined>,
		UnspecifiedCount: FormControl<number | null | undefined>,
	}
	export function CreateSeveritySummaryFormGroup() {
		return new FormGroup<SeveritySummaryFormProperties>({
			CriticalCount: new FormControl<number | null | undefined>(undefined),
			HighCount: new FormControl<number | null | undefined>(undefined),
			MediumCount: new FormControl<number | null | undefined>(undefined),
			LowCount: new FormControl<number | null | undefined>(undefined),
			InformationalCount: new FormControl<number | null | undefined>(undefined),
			UnspecifiedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A summary of resources that aren't compliant. The summary is organized according to resource type. */
	export interface NonCompliantSummary {
		NonCompliantCount?: number | null;
		SeveritySummary?: SeveritySummary;
	}

	/** A summary of resources that aren't compliant. The summary is organized according to resource type. */
	export interface NonCompliantSummaryFormProperties {
		NonCompliantCount: FormControl<number | null | undefined>,
	}
	export function CreateNonCompliantSummaryFormGroup() {
		return new FormGroup<NonCompliantSummaryFormProperties>({
			NonCompliantCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListComplianceSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComplianceSummariesRequestFormGroup() {
		return new FormGroup<ListComplianceSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDocumentMetadataHistoryResponse {
		Name?: string;
		DocumentVersion?: string;
		Author?: string;
		Metadata?: DocumentMetadataResponseInfo;
		NextToken?: string;
	}
	export interface ListDocumentMetadataHistoryResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		Author: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentMetadataHistoryResponseFormGroup() {
		return new FormGroup<ListDocumentMetadataHistoryResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the response to a document review request. */
	export interface DocumentMetadataResponseInfo {
		ReviewerResponse?: Array<DocumentReviewerResponseSource>;
	}

	/** Details about the response to a document review request. */
	export interface DocumentMetadataResponseInfoFormProperties {
	}
	export function CreateDocumentMetadataResponseInfoFormGroup() {
		return new FormGroup<DocumentMetadataResponseInfoFormProperties>({
		});

	}


	/** Information about a reviewer's response to a document review request. */
	export interface DocumentReviewerResponseSource {
		CreateTime?: Date;
		UpdatedTime?: Date;
		ReviewStatus?: ReviewStatus;
		Comment?: Array<DocumentReviewCommentSource>;
		Reviewer?: string;
	}

	/** Information about a reviewer's response to a document review request. */
	export interface DocumentReviewerResponseSourceFormProperties {
		CreateTime: FormControl<Date | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		ReviewStatus: FormControl<ReviewStatus | null | undefined>,
		Reviewer: FormControl<string | null | undefined>,
	}
	export function CreateDocumentReviewerResponseSourceFormGroup() {
		return new FormGroup<DocumentReviewerResponseSourceFormProperties>({
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ReviewStatus: new FormControl<ReviewStatus | null | undefined>(undefined),
			Reviewer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about comments added to a document review request. */
	export interface DocumentReviewCommentSource {
		Type?: DocumentReviewCommentType;
		Content?: string;
	}

	/** Information about comments added to a document review request. */
	export interface DocumentReviewCommentSourceFormProperties {
		Type: FormControl<DocumentReviewCommentType | null | undefined>,
		Content: FormControl<string | null | undefined>,
	}
	export function CreateDocumentReviewCommentSourceFormGroup() {
		return new FormGroup<DocumentReviewCommentSourceFormProperties>({
			Type: new FormControl<DocumentReviewCommentType | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentReviewCommentType { Comment = 0 }

	export interface ListDocumentMetadataHistoryRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string;

		/** Required */
		Metadata: DocumentMetadataEnum;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDocumentMetadataHistoryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,

		/** Required */
		Metadata: FormControl<DocumentMetadataEnum | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDocumentMetadataHistoryRequestFormGroup() {
		return new FormGroup<ListDocumentMetadataHistoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<DocumentMetadataEnum | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DocumentMetadataEnum { DocumentReviews = 0 }

	export interface ListDocumentVersionsResult {
		DocumentVersions?: Array<DocumentVersionInfo>;
		NextToken?: string;
	}
	export interface ListDocumentVersionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentVersionsResultFormGroup() {
		return new FormGroup<ListDocumentVersionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version information about the document. */
	export interface DocumentVersionInfo {
		Name?: string;
		DisplayName?: string;
		DocumentVersion?: string;
		VersionName?: string;
		CreatedDate?: Date;
		IsDefaultVersion?: boolean | null;
		DocumentFormat?: DocumentFormat;
		Status?: DocumentStatus;
		StatusInformation?: string;
		ReviewStatus?: ReviewStatus;
	}

	/** Version information about the document. */
	export interface DocumentVersionInfoFormProperties {
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		Status: FormControl<DocumentStatus | null | undefined>,
		StatusInformation: FormControl<string | null | undefined>,
		ReviewStatus: FormControl<ReviewStatus | null | undefined>,
	}
	export function CreateDocumentVersionInfoFormGroup() {
		return new FormGroup<DocumentVersionInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			Status: new FormControl<DocumentStatus | null | undefined>(undefined),
			StatusInformation: new FormControl<string | null | undefined>(undefined),
			ReviewStatus: new FormControl<ReviewStatus | null | undefined>(undefined),
		});

	}

	export interface ListDocumentVersionsRequest {

		/** Required */
		Name: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDocumentVersionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentVersionsRequestFormGroup() {
		return new FormGroup<ListDocumentVersionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentsResult {
		DocumentIdentifiers?: Array<DocumentIdentifier>;
		NextToken?: string;
	}
	export interface ListDocumentsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentsResultFormGroup() {
		return new FormGroup<ListDocumentsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the name of a SSM document. */
	export interface DocumentIdentifier {
		Name?: string;
		CreatedDate?: Date;
		DisplayName?: string;
		Owner?: string;
		VersionName?: string;
		PlatformTypes?: Array<PlatformType>;
		DocumentVersion?: string;
		DocumentType?: DocumentType;
		SchemaVersion?: string;
		DocumentFormat?: DocumentFormat;
		TargetType?: string;
		Tags?: Array<Tag>;
		Requires?: Array<DocumentRequires>;
		ReviewStatus?: ReviewStatus;
		Author?: string;
	}

	/** Describes the name of a SSM document. */
	export interface DocumentIdentifierFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentType: FormControl<DocumentType | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
		ReviewStatus: FormControl<ReviewStatus | null | undefined>,
		Author: FormControl<string | null | undefined>,
	}
	export function CreateDocumentIdentifierFormGroup() {
		return new FormGroup<DocumentIdentifierFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<DocumentType | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
			ReviewStatus: new FormControl<ReviewStatus | null | undefined>(undefined),
			Author: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentsRequest {
		DocumentFilterList?: Array<DocumentFilter>;
		Filters?: Array<DocumentKeyValuesFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDocumentsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentsRequestFormGroup() {
		return new FormGroup<ListDocumentsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilter {

		/** Required */
		key: DocumentFilterKey;

		/** Required */
		value: string;
	}

	/** This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>. */
	export interface DocumentFilterFormProperties {

		/** Required */
		key: FormControl<DocumentFilterKey | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFilterFormGroup() {
		return new FormGroup<DocumentFilterFormProperties>({
			key: new FormControl<DocumentFilterKey | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentFilterKey { Name = 0, Owner = 1, PlatformTypes = 2, DocumentType = 3 }


	/** <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:</p> <dl> <dt>DocumentType</dt> <dd> <ul> <li> <p> <code>ApplicationConfiguration</code> </p> </li> <li> <p> <code>ApplicationConfigurationSchema</code> </p> </li> <li> <p> <code>Automation</code> </p> </li> <li> <p> <code>ChangeCalendar</code> </p> </li> <li> <p> <code>Command</code> </p> </li> <li> <p> <code>Package</code> </p> </li> <li> <p> <code>Policy</code> </p> </li> <li> <p> <code>Session</code> </p> </li> </ul> </dd> <dt>Owner</dt> <dd> <p>Note that only one <code>Owner</code> can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <ul> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>Private</code> </p> </li> <li> <p> <code>Public</code> </p> </li> <li> <p> <code>Self</code> </p> </li> <li> <p> <code>ThirdParty</code> </p> </li> </ul> </dd> <dt>PlatformTypes</dt> <dd> <ul> <li> <p> <code>Linux</code> </p> </li> <li> <p> <code>Windows</code> </p> </li> </ul> </dd> </dl> <p> <code>Name</code> is another Amazon Web Services-provided key. If you use <code>Name</code> as a key, you can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>You can also use the <code>TargetType</code> Amazon Web Services-provided key. For a list of valid resource type values that can be used with this key, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key-value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a key called region and are using the Amazon Web Services CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilter {
		Key?: string;
		Values?: Array<string>;
	}

	/** <p>One or more filters. Use a filter to return a more specific list of documents.</p> <p>For keys, you can specify one or more tags that have been applied to a document. </p> <p>You can also use Amazon Web Services-provided keys, some of which have specific allowed values. These keys and their associated values are as follows:</p> <dl> <dt>DocumentType</dt> <dd> <ul> <li> <p> <code>ApplicationConfiguration</code> </p> </li> <li> <p> <code>ApplicationConfigurationSchema</code> </p> </li> <li> <p> <code>Automation</code> </p> </li> <li> <p> <code>ChangeCalendar</code> </p> </li> <li> <p> <code>Command</code> </p> </li> <li> <p> <code>Package</code> </p> </li> <li> <p> <code>Policy</code> </p> </li> <li> <p> <code>Session</code> </p> </li> </ul> </dd> <dt>Owner</dt> <dd> <p>Note that only one <code>Owner</code> can be specified in a request. For example: <code>Key=Owner,Values=Self</code>.</p> <ul> <li> <p> <code>Amazon</code> </p> </li> <li> <p> <code>Private</code> </p> </li> <li> <p> <code>Public</code> </p> </li> <li> <p> <code>Self</code> </p> </li> <li> <p> <code>ThirdParty</code> </p> </li> </ul> </dd> <dt>PlatformTypes</dt> <dd> <ul> <li> <p> <code>Linux</code> </p> </li> <li> <p> <code>Windows</code> </p> </li> </ul> </dd> </dl> <p> <code>Name</code> is another Amazon Web Services-provided key. If you use <code>Name</code> as a key, you can use a name prefix to return a list of documents. For example, in the Amazon Web Services CLI, to return a list of all documents that begin with <code>Te</code>, run the following command:</p> <p> <code>aws ssm list-documents --filters Key=Name,Values=Te</code> </p> <p>You can also use the <code>TargetType</code> Amazon Web Services-provided key. For a list of valid resource type values that can be used with this key, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the <i>CloudFormation User Guide</i>.</p> <p>If you specify more than two keys, only documents that are identified by all the tags are returned in the results. If you specify more than two values for a key, documents that are identified by any of the values are returned in the results.</p> <p>To specify a custom key-value pair, use the format <code>Key=tag:tagName,Values=valueName</code>.</p> <p>For example, if you created a key called region and are using the Amazon Web Services CLI to call the <code>list-documents</code> command: </p> <p> <code>aws ssm list-documents --filters Key=tag:region,Values=east,west Key=Owner,Values=Self</code> </p> */
	export interface DocumentKeyValuesFilterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateDocumentKeyValuesFilterFormGroup() {
		return new FormGroup<DocumentKeyValuesFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInventoryEntriesResult {
		TypeName?: string;
		InstanceId?: string;
		SchemaVersion?: string;
		CaptureTime?: string;
		Entries?: Array<InventoryItemEntry>;
		NextToken?: string;
	}
	export interface ListInventoryEntriesResultFormProperties {
		TypeName: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		SchemaVersion: FormControl<string | null | undefined>,
		CaptureTime: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInventoryEntriesResultFormGroup() {
		return new FormGroup<ListInventoryEntriesResultFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			SchemaVersion: new FormControl<string | null | undefined>(undefined),
			CaptureTime: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryItemEntry {
	}
	export interface InventoryItemEntryFormProperties {
	}
	export function CreateInventoryItemEntryFormGroup() {
		return new FormGroup<InventoryItemEntryFormProperties>({
		});

	}

	export interface ListInventoryEntriesRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		TypeName: string;
		Filters?: Array<InventoryFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListInventoryEntriesRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInventoryEntriesRequestFormGroup() {
		return new FormGroup<ListInventoryEntriesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListOpsItemEventsResponse {
		NextToken?: string;
		Summaries?: Array<OpsItemEventSummary>;
	}
	export interface ListOpsItemEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsItemEventsResponseFormGroup() {
		return new FormGroup<ListOpsItemEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an OpsItem event or that associated an OpsItem with a related item. */
	export interface OpsItemEventSummary {
		OpsItemId?: string;
		EventId?: string;
		Source?: string;
		DetailType?: string;
		Detail?: string;
		CreatedBy?: OpsItemIdentity;
		CreatedTime?: Date;
	}

	/** Summary information about an OpsItem event or that associated an OpsItem with a related item. */
	export interface OpsItemEventSummaryFormProperties {
		OpsItemId: FormControl<string | null | undefined>,
		EventId: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DetailType: FormControl<string | null | undefined>,
		Detail: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateOpsItemEventSummaryFormGroup() {
		return new FormGroup<OpsItemEventSummaryFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			EventId: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<string | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the user or resource that created an OpsItem event. */
	export interface OpsItemIdentity {
		Arn?: string;
	}

	/** Information about the user or resource that created an OpsItem event. */
	export interface OpsItemIdentityFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateOpsItemIdentityFormGroup() {
		return new FormGroup<OpsItemIdentityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOpsItemEventsRequest {
		Filters?: Array<OpsItemEventFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListOpsItemEventsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsItemEventsRequestFormGroup() {
		return new FormGroup<ListOpsItemEventsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.  */
	export interface OpsItemEventFilter {

		/** Required */
		Key: OpsItemEventFilterKey;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: OpsItemEventFilterOperator;
	}

	/** Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.  */
	export interface OpsItemEventFilterFormProperties {

		/** Required */
		Key: FormControl<OpsItemEventFilterKey | null | undefined>,

		/** Required */
		Operator: FormControl<OpsItemEventFilterOperator | null | undefined>,
	}
	export function CreateOpsItemEventFilterFormGroup() {
		return new FormGroup<OpsItemEventFilterFormProperties>({
			Key: new FormControl<OpsItemEventFilterKey | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<OpsItemEventFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OpsItemEventFilterKey { OpsItemId = 0 }

	export enum OpsItemEventFilterOperator { Equal = 0 }

	export interface ListOpsItemRelatedItemsResponse {
		NextToken?: string;
		Summaries?: Array<OpsItemRelatedItemSummary>;
	}
	export interface ListOpsItemRelatedItemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsItemRelatedItemsResponseFormGroup() {
		return new FormGroup<ListOpsItemRelatedItemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about related-item resources for an OpsItem. */
	export interface OpsItemRelatedItemSummary {
		OpsItemId?: string;
		AssociationId?: string;
		ResourceType?: string;
		AssociationType?: string;
		ResourceUri?: string;

		/** Information about the user or resource that created an OpsItem event. */
		CreatedBy?: OpsItemIdentity;
		CreatedTime?: Date;

		/** Information about the user or resource that created an OpsItem event. */
		LastModifiedBy?: OpsItemIdentity;
		LastModifiedTime?: Date;
	}

	/** Summary information about related-item resources for an OpsItem. */
	export interface OpsItemRelatedItemSummaryFormProperties {
		OpsItemId: FormControl<string | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		AssociationType: FormControl<string | null | undefined>,
		ResourceUri: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateOpsItemRelatedItemSummaryFormGroup() {
		return new FormGroup<OpsItemRelatedItemSummaryFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			AssociationType: new FormControl<string | null | undefined>(undefined),
			ResourceUri: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOpsItemRelatedItemsRequest {
		OpsItemId?: string;
		Filters?: Array<OpsItemRelatedItemsFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListOpsItemRelatedItemsRequestFormProperties {
		OpsItemId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsItemRelatedItemsRequestFormGroup() {
		return new FormGroup<ListOpsItemRelatedItemsRequestFormProperties>({
			OpsItemId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter for a specific list of related-item resources.  */
	export interface OpsItemRelatedItemsFilter {

		/** Required */
		Key: OpsItemRelatedItemsFilterKey;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: OpsItemEventFilterOperator;
	}

	/** Describes a filter for a specific list of related-item resources.  */
	export interface OpsItemRelatedItemsFilterFormProperties {

		/** Required */
		Key: FormControl<OpsItemRelatedItemsFilterKey | null | undefined>,

		/** Required */
		Operator: FormControl<OpsItemEventFilterOperator | null | undefined>,
	}
	export function CreateOpsItemRelatedItemsFilterFormGroup() {
		return new FormGroup<OpsItemRelatedItemsFilterFormProperties>({
			Key: new FormControl<OpsItemRelatedItemsFilterKey | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<OpsItemEventFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OpsItemRelatedItemsFilterKey { ResourceType = 0, AssociationId = 1, ResourceUri = 2 }

	export interface ListOpsMetadataResult {
		OpsMetadataList?: Array<OpsMetadata>;
		NextToken?: string;
	}
	export interface ListOpsMetadataResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsMetadataResultFormGroup() {
		return new FormGroup<ListOpsMetadataResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operational metadata for an application in Application Manager. */
	export interface OpsMetadata {
		ResourceId?: string;
		OpsMetadataArn?: string;
		LastModifiedDate?: Date;
		LastModifiedUser?: string;
		CreationDate?: Date;
	}

	/** Operational metadata for an application in Application Manager. */
	export interface OpsMetadataFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		OpsMetadataArn: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedUser: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateOpsMetadataFormGroup() {
		return new FormGroup<OpsMetadataFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedUser: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOpsMetadataRequest {
		Filters?: Array<OpsMetadataFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListOpsMetadataRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOpsMetadataRequestFormGroup() {
		return new FormGroup<ListOpsMetadataRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter to limit the number of OpsMetadata objects displayed. */
	export interface OpsMetadataFilter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
	}

	/** A filter to limit the number of OpsMetadata objects displayed. */
	export interface OpsMetadataFilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateOpsMetadataFilterFormGroup() {
		return new FormGroup<OpsMetadataFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourceComplianceSummariesResult {
		ResourceComplianceSummaryItems?: Array<ResourceComplianceSummaryItem>;
		NextToken?: string;
	}
	export interface ListResourceComplianceSummariesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceComplianceSummariesResultFormGroup() {
		return new FormGroup<ListResourceComplianceSummariesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compliance summary information for a specific resource.  */
	export interface ResourceComplianceSummaryItem {
		ComplianceType?: string;
		ResourceType?: string;
		ResourceId?: string;
		Status?: ComplianceStatus;
		OverallSeverity?: PatchComplianceLevel;
		ExecutionSummary?: ComplianceExecutionSummary;
		CompliantSummary?: CompliantSummary;
		NonCompliantSummary?: NonCompliantSummary;
	}

	/** Compliance summary information for a specific resource.  */
	export interface ResourceComplianceSummaryItemFormProperties {
		ComplianceType: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Status: FormControl<ComplianceStatus | null | undefined>,
		OverallSeverity: FormControl<PatchComplianceLevel | null | undefined>,
	}
	export function CreateResourceComplianceSummaryItemFormGroup() {
		return new FormGroup<ResourceComplianceSummaryItemFormProperties>({
			ComplianceType: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ComplianceStatus | null | undefined>(undefined),
			OverallSeverity: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
		});

	}

	export interface ListResourceComplianceSummariesRequest {
		Filters?: Array<ComplianceStringFilter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourceComplianceSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceComplianceSummariesRequestFormGroup() {
		return new FormGroup<ListResourceComplianceSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourceDataSyncResult {
		ResourceDataSyncItems?: Array<ResourceDataSyncItem>;
		NextToken?: string;
	}
	export interface ListResourceDataSyncResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceDataSyncResultFormGroup() {
		return new FormGroup<ListResourceDataSyncResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a resource data sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItem {
		SyncName?: string;
		SyncType?: string;
		SyncSource?: ResourceDataSyncSourceWithState;
		S3Destination?: ResourceDataSyncS3Destination;
		LastSyncTime?: Date;
		LastSuccessfulSyncTime?: Date;
		SyncLastModifiedTime?: Date;
		LastStatus?: LastResourceDataSyncStatus;
		SyncCreatedTime?: Date;
		LastSyncStatusMessage?: string;
	}

	/** Information about a resource data sync configuration, including its current status and last successful sync. */
	export interface ResourceDataSyncItemFormProperties {
		SyncName: FormControl<string | null | undefined>,
		SyncType: FormControl<string | null | undefined>,
		LastSyncTime: FormControl<Date | null | undefined>,
		LastSuccessfulSyncTime: FormControl<Date | null | undefined>,
		SyncLastModifiedTime: FormControl<Date | null | undefined>,
		LastStatus: FormControl<LastResourceDataSyncStatus | null | undefined>,
		SyncCreatedTime: FormControl<Date | null | undefined>,
		LastSyncStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResourceDataSyncItemFormGroup() {
		return new FormGroup<ResourceDataSyncItemFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined),
			SyncType: new FormControl<string | null | undefined>(undefined),
			LastSyncTime: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulSyncTime: new FormControl<Date | null | undefined>(undefined),
			SyncLastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastStatus: new FormControl<LastResourceDataSyncStatus | null | undefined>(undefined),
			SyncCreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastSyncStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p> */
	export interface ResourceDataSyncSourceWithState {
		SourceType?: string;
		AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
		SourceRegions?: Array<string>;
		IncludeFutureRegions?: boolean | null;
		State?: string;
		EnableAllOpsDataSources?: boolean | null;
	}

	/** <p>The data type name for including resource data sync state. There are four sync states:</p> <p> <code>OrganizationNotExists</code> (Your organization doesn't exist)</p> <p> <code>NoPermissions</code> (The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Amazon Web Services Systems Manager Explorer.)</p> <p> <code>InvalidOrganizationalUnit</code> (You specified or selected an invalid unit in the resource data sync configuration.)</p> <p> <code>TrustedAccessDisabled</code> (You disabled Systems Manager access in the organization in Organizations.)</p> */
	export interface ResourceDataSyncSourceWithStateFormProperties {
		SourceType: FormControl<string | null | undefined>,
		IncludeFutureRegions: FormControl<boolean | null | undefined>,
		State: FormControl<string | null | undefined>,
		EnableAllOpsDataSources: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceDataSyncSourceWithStateFormGroup() {
		return new FormGroup<ResourceDataSyncSourceWithStateFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
			IncludeFutureRegions: new FormControl<boolean | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			EnableAllOpsDataSources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LastResourceDataSyncStatus { Successful = 0, Failed = 1, InProgress = 2 }

	export interface ListResourceDataSyncRequest {
		SyncType?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourceDataSyncRequestFormProperties {
		SyncType: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceDataSyncRequestFormGroup() {
		return new FormGroup<ListResourceDataSyncRequestFormProperties>({
			SyncType: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		TagList?: Array<Tag>;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceType: ResourceTypeForTagging;

		/** Required */
		ResourceId: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<ResourceTypeForTagging | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceType: new FormControl<ResourceTypeForTagging | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDocumentPermissionResponse {
	}
	export interface ModifyDocumentPermissionResponseFormProperties {
	}
	export function CreateModifyDocumentPermissionResponseFormGroup() {
		return new FormGroup<ModifyDocumentPermissionResponseFormProperties>({
		});

	}

	export interface ModifyDocumentPermissionRequest {

		/** Required */
		Name: string;

		/** Required */
		PermissionType: DocumentPermissionType;
		AccountIdsToAdd?: Array<string>;
		AccountIdsToRemove?: Array<string>;
		SharedDocumentVersion?: string;
	}
	export interface ModifyDocumentPermissionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PermissionType: FormControl<DocumentPermissionType | null | undefined>,
		SharedDocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateModifyDocumentPermissionRequestFormGroup() {
		return new FormGroup<ModifyDocumentPermissionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionType: new FormControl<DocumentPermissionType | null | undefined>(undefined, [Validators.required]),
			SharedDocumentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentPermissionLimit {
	}
	export interface DocumentPermissionLimitFormProperties {
	}
	export function CreateDocumentPermissionLimitFormGroup() {
		return new FormGroup<DocumentPermissionLimitFormProperties>({
		});

	}

	export interface PutComplianceItemsResult {
	}
	export interface PutComplianceItemsResultFormProperties {
	}
	export function CreatePutComplianceItemsResultFormGroup() {
		return new FormGroup<PutComplianceItemsResultFormProperties>({
		});

	}

	export interface PutComplianceItemsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: string;

		/** Required */
		ComplianceType: string;

		/** Required */
		ExecutionSummary: ComplianceExecutionSummary;

		/** Required */
		Items: Array<ComplianceItemEntry>;
		ItemContentHash?: string;
		UploadType?: ComplianceUploadType;
	}
	export interface PutComplianceItemsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ComplianceType: FormControl<string | null | undefined>,
		ItemContentHash: FormControl<string | null | undefined>,
		UploadType: FormControl<ComplianceUploadType | null | undefined>,
	}
	export function CreatePutComplianceItemsRequestFormGroup() {
		return new FormGroup<PutComplianceItemsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ItemContentHash: new FormControl<string | null | undefined>(undefined),
			UploadType: new FormControl<ComplianceUploadType | null | undefined>(undefined),
		});

	}


	/** Information about a compliance item. */
	export interface ComplianceItemEntry {
		Id?: string;
		Title?: string;

		/** Required */
		Severity: PatchComplianceLevel;

		/** Required */
		Status: ComplianceStatus;
		Details?: ComplianceItemDetails;
	}

	/** Information about a compliance item. */
	export interface ComplianceItemEntryFormProperties {
		Id: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,

		/** Required */
		Severity: FormControl<PatchComplianceLevel | null | undefined>,

		/** Required */
		Status: FormControl<ComplianceStatus | null | undefined>,
	}
	export function CreateComplianceItemEntryFormGroup() {
		return new FormGroup<ComplianceItemEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<PatchComplianceLevel | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ComplianceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComplianceUploadType { COMPLETE = 0, PARTIAL = 1 }

	export interface InvalidItemContentException {
	}
	export interface InvalidItemContentExceptionFormProperties {
	}
	export function CreateInvalidItemContentExceptionFormGroup() {
		return new FormGroup<InvalidItemContentExceptionFormProperties>({
		});

	}

	export interface TotalSizeLimitExceededException {
	}
	export interface TotalSizeLimitExceededExceptionFormProperties {
	}
	export function CreateTotalSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<TotalSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface ItemSizeLimitExceededException {
	}
	export interface ItemSizeLimitExceededExceptionFormProperties {
	}
	export function CreateItemSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<ItemSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface ComplianceTypeCountLimitExceededException {
	}
	export interface ComplianceTypeCountLimitExceededExceptionFormProperties {
	}
	export function CreateComplianceTypeCountLimitExceededExceptionFormGroup() {
		return new FormGroup<ComplianceTypeCountLimitExceededExceptionFormProperties>({
		});

	}

	export interface PutInventoryResult {
		Message?: string;
	}
	export interface PutInventoryResultFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePutInventoryResultFormGroup() {
		return new FormGroup<PutInventoryResultFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutInventoryRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		Items: Array<InventoryItem>;
	}
	export interface PutInventoryRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreatePutInventoryRequestFormGroup() {
		return new FormGroup<PutInventoryRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information collected from managed nodes based on your inventory policy document */
	export interface InventoryItem {

		/** Required */
		TypeName: string;

		/** Required */
		SchemaVersion: string;

		/** Required */
		CaptureTime: string;
		ContentHash?: string;
		Content?: Array<InventoryItemEntry>;
		Context?: InventoryItemContentContext;
	}

	/** Information collected from managed nodes based on your inventory policy document */
	export interface InventoryItemFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,

		/** Required */
		CaptureTime: FormControl<string | null | undefined>,
		ContentHash: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemFormGroup() {
		return new FormGroup<InventoryItemFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CaptureTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryItemContentContext {
	}
	export interface InventoryItemContentContextFormProperties {
	}
	export function CreateInventoryItemContentContextFormGroup() {
		return new FormGroup<InventoryItemContentContextFormProperties>({
		});

	}

	export interface ItemContentMismatchException {
	}
	export interface ItemContentMismatchExceptionFormProperties {
	}
	export function CreateItemContentMismatchExceptionFormGroup() {
		return new FormGroup<ItemContentMismatchExceptionFormProperties>({
		});

	}

	export interface CustomSchemaCountLimitExceededException {
	}
	export interface CustomSchemaCountLimitExceededExceptionFormProperties {
	}
	export function CreateCustomSchemaCountLimitExceededExceptionFormGroup() {
		return new FormGroup<CustomSchemaCountLimitExceededExceptionFormProperties>({
		});

	}

	export interface UnsupportedInventorySchemaVersionException {
	}
	export interface UnsupportedInventorySchemaVersionExceptionFormProperties {
	}
	export function CreateUnsupportedInventorySchemaVersionExceptionFormGroup() {
		return new FormGroup<UnsupportedInventorySchemaVersionExceptionFormProperties>({
		});

	}

	export interface UnsupportedInventoryItemContextException {
	}
	export interface UnsupportedInventoryItemContextExceptionFormProperties {
	}
	export function CreateUnsupportedInventoryItemContextExceptionFormGroup() {
		return new FormGroup<UnsupportedInventoryItemContextExceptionFormProperties>({
		});

	}

	export interface InvalidInventoryItemContextException {
	}
	export interface InvalidInventoryItemContextExceptionFormProperties {
	}
	export function CreateInvalidInventoryItemContextExceptionFormGroup() {
		return new FormGroup<InvalidInventoryItemContextExceptionFormProperties>({
		});

	}

	export interface SubTypeCountLimitExceededException {
	}
	export interface SubTypeCountLimitExceededExceptionFormProperties {
	}
	export function CreateSubTypeCountLimitExceededExceptionFormGroup() {
		return new FormGroup<SubTypeCountLimitExceededExceptionFormProperties>({
		});

	}

	export interface PutParameterResult {
		Version?: number | null;
		Tier?: ParameterTier;
	}
	export interface PutParameterResultFormProperties {
		Version: FormControl<number | null | undefined>,
		Tier: FormControl<ParameterTier | null | undefined>,
	}
	export function CreatePutParameterResultFormGroup() {
		return new FormGroup<PutParameterResultFormProperties>({
			Version: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<ParameterTier | null | undefined>(undefined),
		});

	}

	export interface PutParameterRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Value: string;
		Type?: ParameterType;
		KeyId?: string;
		Overwrite?: boolean | null;
		AllowedPattern?: string;
		Tags?: Array<Tag>;
		Tier?: ParameterTier;
		Policies?: string;
		DataType?: string;
	}
	export interface PutParameterRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		Type: FormControl<ParameterType | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		Overwrite: FormControl<boolean | null | undefined>,
		AllowedPattern: FormControl<string | null | undefined>,
		Tier: FormControl<ParameterTier | null | undefined>,
		Policies: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreatePutParameterRequestFormGroup() {
		return new FormGroup<PutParameterRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ParameterType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			Overwrite: new FormControl<boolean | null | undefined>(undefined),
			AllowedPattern: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<ParameterTier | null | undefined>(undefined),
			Policies: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParameterLimitExceeded {
	}
	export interface ParameterLimitExceededFormProperties {
	}
	export function CreateParameterLimitExceededFormGroup() {
		return new FormGroup<ParameterLimitExceededFormProperties>({
		});

	}

	export interface ParameterAlreadyExists {
	}
	export interface ParameterAlreadyExistsFormProperties {
	}
	export function CreateParameterAlreadyExistsFormGroup() {
		return new FormGroup<ParameterAlreadyExistsFormProperties>({
		});

	}

	export interface HierarchyLevelLimitExceededException {
	}
	export interface HierarchyLevelLimitExceededExceptionFormProperties {
	}
	export function CreateHierarchyLevelLimitExceededExceptionFormGroup() {
		return new FormGroup<HierarchyLevelLimitExceededExceptionFormProperties>({
		});

	}

	export interface HierarchyTypeMismatchException {
	}
	export interface HierarchyTypeMismatchExceptionFormProperties {
	}
	export function CreateHierarchyTypeMismatchExceptionFormGroup() {
		return new FormGroup<HierarchyTypeMismatchExceptionFormProperties>({
		});

	}

	export interface InvalidAllowedPatternException {
	}
	export interface InvalidAllowedPatternExceptionFormProperties {
	}
	export function CreateInvalidAllowedPatternExceptionFormGroup() {
		return new FormGroup<InvalidAllowedPatternExceptionFormProperties>({
		});

	}

	export interface ParameterMaxVersionLimitExceeded {
	}
	export interface ParameterMaxVersionLimitExceededFormProperties {
	}
	export function CreateParameterMaxVersionLimitExceededFormGroup() {
		return new FormGroup<ParameterMaxVersionLimitExceededFormProperties>({
		});

	}

	export interface ParameterPatternMismatchException {
	}
	export interface ParameterPatternMismatchExceptionFormProperties {
	}
	export function CreateParameterPatternMismatchExceptionFormGroup() {
		return new FormGroup<ParameterPatternMismatchExceptionFormProperties>({
		});

	}

	export interface UnsupportedParameterType {
	}
	export interface UnsupportedParameterTypeFormProperties {
	}
	export function CreateUnsupportedParameterTypeFormGroup() {
		return new FormGroup<UnsupportedParameterTypeFormProperties>({
		});

	}

	export interface PoliciesLimitExceededException {
	}
	export interface PoliciesLimitExceededExceptionFormProperties {
	}
	export function CreatePoliciesLimitExceededExceptionFormGroup() {
		return new FormGroup<PoliciesLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidPolicyTypeException {
	}
	export interface InvalidPolicyTypeExceptionFormProperties {
	}
	export function CreateInvalidPolicyTypeExceptionFormGroup() {
		return new FormGroup<InvalidPolicyTypeExceptionFormProperties>({
		});

	}

	export interface InvalidPolicyAttributeException {
	}
	export interface InvalidPolicyAttributeExceptionFormProperties {
	}
	export function CreateInvalidPolicyAttributeExceptionFormGroup() {
		return new FormGroup<InvalidPolicyAttributeExceptionFormProperties>({
		});

	}

	export interface IncompatiblePolicyException {
	}
	export interface IncompatiblePolicyExceptionFormProperties {
	}
	export function CreateIncompatiblePolicyExceptionFormGroup() {
		return new FormGroup<IncompatiblePolicyExceptionFormProperties>({
		});

	}

	export interface PutResourcePolicyResponse {
		PolicyId?: string;
		PolicyHash?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		PolicyId: FormControl<string | null | undefined>,
		PolicyHash: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
		PolicyId?: string;
		PolicyHash?: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,
		PolicyHash: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourcePolicyLimitExceededException {
	}
	export interface ResourcePolicyLimitExceededExceptionFormProperties {
	}
	export function CreateResourcePolicyLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourcePolicyLimitExceededExceptionFormProperties>({
		});

	}

	export interface RegisterDefaultPatchBaselineResult {
		BaselineId?: string;
	}
	export interface RegisterDefaultPatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDefaultPatchBaselineResultFormGroup() {
		return new FormGroup<RegisterDefaultPatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterDefaultPatchBaselineRequest {

		/** Required */
		BaselineId: string;
	}
	export interface RegisterDefaultPatchBaselineRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDefaultPatchBaselineRequestFormGroup() {
		return new FormGroup<RegisterDefaultPatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterPatchBaselineForPatchGroupResult {
		BaselineId?: string;
		PatchGroup?: string;
	}
	export interface RegisterPatchBaselineForPatchGroupResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPatchBaselineForPatchGroupResultFormGroup() {
		return new FormGroup<RegisterPatchBaselineForPatchGroupResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			PatchGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterPatchBaselineForPatchGroupRequest {

		/** Required */
		BaselineId: string;

		/** Required */
		PatchGroup: string;
	}
	export interface RegisterPatchBaselineForPatchGroupRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,

		/** Required */
		PatchGroup: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPatchBaselineForPatchGroupRequestFormGroup() {
		return new FormGroup<RegisterPatchBaselineForPatchGroupRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface RegisterTargetWithMaintenanceWindowResult {
		WindowTargetId?: string;
	}
	export interface RegisterTargetWithMaintenanceWindowResultFormProperties {
		WindowTargetId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTargetWithMaintenanceWindowResultFormGroup() {
		return new FormGroup<RegisterTargetWithMaintenanceWindowResultFormProperties>({
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTargetWithMaintenanceWindowRequest {

		/** Required */
		WindowId: string;

		/** Required */
		ResourceType: MaintenanceWindowResourceType;

		/** Required */
		Targets: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
		ClientToken?: string;
	}
	export interface RegisterTargetWithMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<MaintenanceWindowResourceType | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTargetWithMaintenanceWindowRequestFormGroup() {
		return new FormGroup<RegisterTargetWithMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<MaintenanceWindowResourceType | null | undefined>(undefined, [Validators.required]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTaskWithMaintenanceWindowResult {
		WindowTaskId?: string;
	}
	export interface RegisterTaskWithMaintenanceWindowResultFormProperties {
		WindowTaskId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTaskWithMaintenanceWindowResultFormGroup() {
		return new FormGroup<RegisterTaskWithMaintenanceWindowResultFormProperties>({
			WindowTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTaskWithMaintenanceWindowRequest {

		/** Required */
		WindowId: string;
		Targets?: Array<Target>;

		/** Required */
		TaskArn: string;
		ServiceRoleArn?: string;

		/** Required */
		TaskType: MaintenanceWindowTaskType;
		TaskParameters?: MaintenanceWindowTaskParameters;
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number | null;
		MaxConcurrency?: string;
		MaxErrors?: string;
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		ClientToken?: string;
		CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface RegisterTaskWithMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,

		/** Required */
		TaskType: FormControl<MaintenanceWindowTaskType | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		CutoffBehavior: FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>,
	}
	export function CreateRegisterTaskWithMaintenanceWindowRequestFormGroup() {
		return new FormGroup<RegisterTaskWithMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			TaskType: new FormControl<MaintenanceWindowTaskType | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			CutoffBehavior: new FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>(undefined),
		});

	}

	export interface FeatureNotAvailableException {
	}
	export interface FeatureNotAvailableExceptionFormProperties {
	}
	export function CreateFeatureNotAvailableExceptionFormGroup() {
		return new FormGroup<FeatureNotAvailableExceptionFormProperties>({
		});

	}

	export interface RemoveTagsFromResourceResult {
	}
	export interface RemoveTagsFromResourceResultFormProperties {
	}
	export function CreateRemoveTagsFromResourceResultFormGroup() {
		return new FormGroup<RemoveTagsFromResourceResultFormProperties>({
		});

	}

	export interface RemoveTagsFromResourceRequest {

		/** Required */
		ResourceType: ResourceTypeForTagging;

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsFromResourceRequestFormProperties {

		/** Required */
		ResourceType: FormControl<ResourceTypeForTagging | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceRequestFormGroup() {
		return new FormGroup<RemoveTagsFromResourceRequestFormProperties>({
			ResourceType: new FormControl<ResourceTypeForTagging | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result body of the ResetServiceSetting API operation. */
	export interface ResetServiceSettingResult {
		ServiceSetting?: ServiceSetting;
	}

	/** The result body of the ResetServiceSetting API operation. */
	export interface ResetServiceSettingResultFormProperties {
	}
	export function CreateResetServiceSettingResultFormGroup() {
		return new FormGroup<ResetServiceSettingResultFormProperties>({
		});

	}


	/** The request body of the ResetServiceSetting API operation. */
	export interface ResetServiceSettingRequest {

		/** Required */
		SettingId: string;
	}

	/** The request body of the ResetServiceSetting API operation. */
	export interface ResetServiceSettingRequestFormProperties {

		/** Required */
		SettingId: FormControl<string | null | undefined>,
	}
	export function CreateResetServiceSettingRequestFormGroup() {
		return new FormGroup<ResetServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeSessionResponse {
		SessionId?: string;
		TokenValue?: string;
		StreamUrl?: string;
	}
	export interface ResumeSessionResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
		TokenValue: FormControl<string | null | undefined>,
		StreamUrl: FormControl<string | null | undefined>,
	}
	export function CreateResumeSessionResponseFormGroup() {
		return new FormGroup<ResumeSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			TokenValue: new FormControl<string | null | undefined>(undefined),
			StreamUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResumeSessionRequest {

		/** Required */
		SessionId: string;
	}
	export interface ResumeSessionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateResumeSessionRequestFormGroup() {
		return new FormGroup<ResumeSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendAutomationSignalResult {
	}
	export interface SendAutomationSignalResultFormProperties {
	}
	export function CreateSendAutomationSignalResultFormGroup() {
		return new FormGroup<SendAutomationSignalResultFormProperties>({
		});

	}

	export interface SendAutomationSignalRequest {

		/** Required */
		AutomationExecutionId: string;

		/** Required */
		SignalType: SignalType;
		Payload?: AutomationParameterMap;
	}
	export interface SendAutomationSignalRequestFormProperties {

		/** Required */
		AutomationExecutionId: FormControl<string | null | undefined>,

		/** Required */
		SignalType: FormControl<SignalType | null | undefined>,
	}
	export function CreateSendAutomationSignalRequestFormGroup() {
		return new FormGroup<SendAutomationSignalRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignalType: new FormControl<SignalType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SignalType { Approve = 0, Reject = 1, StartStep = 2, StopStep = 3, Resume = 4 }

	export interface AutomationStepNotFoundException {
	}
	export interface AutomationStepNotFoundExceptionFormProperties {
	}
	export function CreateAutomationStepNotFoundExceptionFormGroup() {
		return new FormGroup<AutomationStepNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidAutomationSignalException {
	}
	export interface InvalidAutomationSignalExceptionFormProperties {
	}
	export function CreateInvalidAutomationSignalExceptionFormGroup() {
		return new FormGroup<InvalidAutomationSignalExceptionFormProperties>({
		});

	}

	export interface SendCommandResult {
		Command?: Command;
	}
	export interface SendCommandResultFormProperties {
	}
	export function CreateSendCommandResultFormGroup() {
		return new FormGroup<SendCommandResultFormProperties>({
		});

	}

	export interface SendCommandRequest {
		InstanceIds?: Array<string>;
		Targets?: Array<Target>;

		/** Required */
		DocumentName: string;
		DocumentVersion?: string;
		DocumentHash?: string;
		DocumentHashType?: DocumentHashType;
		TimeoutSeconds?: number | null;
		Comment?: string;
		Parameters?: Parameters;
		OutputS3Region?: string;
		OutputS3BucketName?: string;
		OutputS3KeyPrefix?: string;
		MaxConcurrency?: string;
		MaxErrors?: string;
		ServiceRoleArn?: string;
		NotificationConfig?: NotificationConfig;
		CloudWatchOutputConfig?: CloudWatchOutputConfig;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface SendCommandRequestFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentHash: FormControl<string | null | undefined>,
		DocumentHashType: FormControl<DocumentHashType | null | undefined>,
		TimeoutSeconds: FormControl<number | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		OutputS3Region: FormControl<string | null | undefined>,
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateSendCommandRequestFormGroup() {
		return new FormGroup<SendCommandRequestFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			DocumentHash: new FormControl<string | null | undefined>(undefined),
			DocumentHashType: new FormControl<DocumentHashType | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			OutputS3Region: new FormControl<string | null | undefined>(undefined),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidOutputFolder {
	}
	export interface InvalidOutputFolderFormProperties {
	}
	export function CreateInvalidOutputFolderFormGroup() {
		return new FormGroup<InvalidOutputFolderFormProperties>({
		});

	}

	export interface InvalidRole {
	}
	export interface InvalidRoleFormProperties {
	}
	export function CreateInvalidRoleFormGroup() {
		return new FormGroup<InvalidRoleFormProperties>({
		});

	}

	export interface InvalidNotificationConfig {
	}
	export interface InvalidNotificationConfigFormProperties {
	}
	export function CreateInvalidNotificationConfigFormGroup() {
		return new FormGroup<InvalidNotificationConfigFormProperties>({
		});

	}

	export interface StartAssociationsOnceResult {
	}
	export interface StartAssociationsOnceResultFormProperties {
	}
	export function CreateStartAssociationsOnceResultFormGroup() {
		return new FormGroup<StartAssociationsOnceResultFormProperties>({
		});

	}

	export interface StartAssociationsOnceRequest {

		/** Required */
		AssociationIds: Array<string>;
	}
	export interface StartAssociationsOnceRequestFormProperties {
	}
	export function CreateStartAssociationsOnceRequestFormGroup() {
		return new FormGroup<StartAssociationsOnceRequestFormProperties>({
		});

	}

	export interface InvalidAssociation {
	}
	export interface InvalidAssociationFormProperties {
	}
	export function CreateInvalidAssociationFormGroup() {
		return new FormGroup<InvalidAssociationFormProperties>({
		});

	}

	export interface StartAutomationExecutionResult {
		AutomationExecutionId?: string;
	}
	export interface StartAutomationExecutionResultFormProperties {
		AutomationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartAutomationExecutionResultFormGroup() {
		return new FormGroup<StartAutomationExecutionResultFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAutomationExecutionRequest {

		/** Required */
		DocumentName: string;
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
		ClientToken?: string;
		Mode?: ExecutionMode;
		TargetParameterName?: string;
		Targets?: Array<Target>;
		TargetMaps?: Array<TargetMap>;
		MaxConcurrency?: string;
		MaxErrors?: string;
		TargetLocations?: Array<TargetLocation>;
		Tags?: Array<Tag>;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface StartAutomationExecutionRequestFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Mode: FormControl<ExecutionMode | null | undefined>,
		TargetParameterName: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
	}
	export function CreateStartAutomationExecutionRequestFormGroup() {
		return new FormGroup<StartAutomationExecutionRequestFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ExecutionMode | null | undefined>(undefined),
			TargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutomationDefinitionNotFoundException {
	}
	export interface AutomationDefinitionNotFoundExceptionFormProperties {
	}
	export function CreateAutomationDefinitionNotFoundExceptionFormGroup() {
		return new FormGroup<AutomationDefinitionNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidAutomationExecutionParametersException {
	}
	export interface InvalidAutomationExecutionParametersExceptionFormProperties {
	}
	export function CreateInvalidAutomationExecutionParametersExceptionFormGroup() {
		return new FormGroup<InvalidAutomationExecutionParametersExceptionFormProperties>({
		});

	}

	export interface AutomationExecutionLimitExceededException {
	}
	export interface AutomationExecutionLimitExceededExceptionFormProperties {
	}
	export function CreateAutomationExecutionLimitExceededExceptionFormGroup() {
		return new FormGroup<AutomationExecutionLimitExceededExceptionFormProperties>({
		});

	}

	export interface AutomationDefinitionVersionNotFoundException {
	}
	export interface AutomationDefinitionVersionNotFoundExceptionFormProperties {
	}
	export function CreateAutomationDefinitionVersionNotFoundExceptionFormGroup() {
		return new FormGroup<AutomationDefinitionVersionNotFoundExceptionFormProperties>({
		});

	}

	export interface StartChangeRequestExecutionResult {
		AutomationExecutionId?: string;
	}
	export interface StartChangeRequestExecutionResultFormProperties {
		AutomationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeRequestExecutionResultFormGroup() {
		return new FormGroup<StartChangeRequestExecutionResultFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChangeRequestExecutionRequest {
		ScheduledTime?: Date;

		/** Required */
		DocumentName: string;
		DocumentVersion?: string;
		Parameters?: AutomationParameterMap;
		ChangeRequestName?: string;
		ClientToken?: string;
		AutoApprove?: boolean | null;

		/** Required */
		Runbooks: Array<Runbook>;
		Tags?: Array<Tag>;
		ScheduledEndTime?: Date;
		ChangeDetails?: string;
	}
	export interface StartChangeRequestExecutionRequestFormProperties {
		ScheduledTime: FormControl<Date | null | undefined>,

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ChangeRequestName: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		AutoApprove: FormControl<boolean | null | undefined>,
		ScheduledEndTime: FormControl<Date | null | undefined>,
		ChangeDetails: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeRequestExecutionRequestFormGroup() {
		return new FormGroup<StartChangeRequestExecutionRequestFormProperties>({
			ScheduledTime: new FormControl<Date | null | undefined>(undefined),
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ChangeRequestName: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			AutoApprove: new FormControl<boolean | null | undefined>(undefined),
			ScheduledEndTime: new FormControl<Date | null | undefined>(undefined),
			ChangeDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutomationDefinitionNotApprovedException {
	}
	export interface AutomationDefinitionNotApprovedExceptionFormProperties {
	}
	export function CreateAutomationDefinitionNotApprovedExceptionFormGroup() {
		return new FormGroup<AutomationDefinitionNotApprovedExceptionFormProperties>({
		});

	}

	export interface StartSessionResponse {
		SessionId?: string;
		TokenValue?: string;
		StreamUrl?: string;
	}
	export interface StartSessionResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
		TokenValue: FormControl<string | null | undefined>,
		StreamUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionResponseFormGroup() {
		return new FormGroup<StartSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			TokenValue: new FormControl<string | null | undefined>(undefined),
			StreamUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSessionRequest {

		/** Required */
		Target: string;
		DocumentName?: string;
		Reason?: string;
		Parameters?: SessionManagerParameters;
	}
	export interface StartSessionRequestFormProperties {

		/** Required */
		Target: FormControl<string | null | undefined>,
		DocumentName: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionRequestFormGroup() {
		return new FormGroup<StartSessionRequestFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentName: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionManagerParameters {
	}
	export interface SessionManagerParametersFormProperties {
	}
	export function CreateSessionManagerParametersFormGroup() {
		return new FormGroup<SessionManagerParametersFormProperties>({
		});

	}

	export interface TargetNotConnected {
	}
	export interface TargetNotConnectedFormProperties {
	}
	export function CreateTargetNotConnectedFormGroup() {
		return new FormGroup<TargetNotConnectedFormProperties>({
		});

	}

	export interface StopAutomationExecutionResult {
	}
	export interface StopAutomationExecutionResultFormProperties {
	}
	export function CreateStopAutomationExecutionResultFormGroup() {
		return new FormGroup<StopAutomationExecutionResultFormProperties>({
		});

	}

	export interface StopAutomationExecutionRequest {

		/** Required */
		AutomationExecutionId: string;
		Type?: StopType;
	}
	export interface StopAutomationExecutionRequestFormProperties {

		/** Required */
		AutomationExecutionId: FormControl<string | null | undefined>,
		Type: FormControl<StopType | null | undefined>,
	}
	export function CreateStopAutomationExecutionRequestFormGroup() {
		return new FormGroup<StopAutomationExecutionRequestFormProperties>({
			AutomationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<StopType | null | undefined>(undefined),
		});

	}

	export enum StopType { Complete = 0, Cancel = 1 }

	export interface InvalidAutomationStatusUpdateException {
	}
	export interface InvalidAutomationStatusUpdateExceptionFormProperties {
	}
	export function CreateInvalidAutomationStatusUpdateExceptionFormGroup() {
		return new FormGroup<InvalidAutomationStatusUpdateExceptionFormProperties>({
		});

	}

	export interface TerminateSessionResponse {
		SessionId?: string;
	}
	export interface TerminateSessionResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionResponseFormGroup() {
		return new FormGroup<TerminateSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TerminateSessionRequest {

		/** Required */
		SessionId: string;
	}
	export interface TerminateSessionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionRequestFormGroup() {
		return new FormGroup<TerminateSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnlabelParameterVersionResult {
		RemovedLabels?: Array<string>;
		InvalidLabels?: Array<string>;
	}
	export interface UnlabelParameterVersionResultFormProperties {
	}
	export function CreateUnlabelParameterVersionResultFormGroup() {
		return new FormGroup<UnlabelParameterVersionResultFormProperties>({
		});

	}

	export interface UnlabelParameterVersionRequest {

		/** Required */
		Name: string;

		/** Required */
		ParameterVersion: number;

		/** Required */
		Labels: Array<string>;
	}
	export interface UnlabelParameterVersionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ParameterVersion: FormControl<number | null | undefined>,
	}
	export function CreateUnlabelParameterVersionRequestFormGroup() {
		return new FormGroup<UnlabelParameterVersionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssociationResult {
		AssociationDescription?: AssociationDescription;
	}
	export interface UpdateAssociationResultFormProperties {
	}
	export function CreateUpdateAssociationResultFormGroup() {
		return new FormGroup<UpdateAssociationResultFormProperties>({
		});

	}

	export interface UpdateAssociationRequest {

		/** Required */
		AssociationId: string;
		Parameters?: Parameters;
		DocumentVersion?: string;
		ScheduleExpression?: string;
		OutputLocation?: InstanceAssociationOutputLocation;
		Name?: string;
		Targets?: Array<Target>;
		AssociationName?: string;
		AssociationVersion?: string;
		AutomationTargetParameterName?: string;
		MaxErrors?: string;
		MaxConcurrency?: string;
		ComplianceSeverity?: AssociationComplianceSeverity;
		SyncCompliance?: AssociationSyncCompliance;
		ApplyOnlyAtCronInterval?: boolean | null;
		CalendarNames?: Array<string>;
		TargetLocations?: Array<TargetLocation>;
		ScheduleOffset?: number | null;
		TargetMaps?: Array<TargetMap>;

		/** The details for the CloudWatch alarm you want to apply to an automation or command. */
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface UpdateAssociationRequestFormProperties {

		/** Required */
		AssociationId: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AssociationName: FormControl<string | null | undefined>,
		AssociationVersion: FormControl<string | null | undefined>,
		AutomationTargetParameterName: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		ComplianceSeverity: FormControl<AssociationComplianceSeverity | null | undefined>,
		SyncCompliance: FormControl<AssociationSyncCompliance | null | undefined>,
		ApplyOnlyAtCronInterval: FormControl<boolean | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAssociationRequestFormGroup() {
		return new FormGroup<UpdateAssociationRequestFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AssociationName: new FormControl<string | null | undefined>(undefined),
			AssociationVersion: new FormControl<string | null | undefined>(undefined),
			AutomationTargetParameterName: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			ComplianceSeverity: new FormControl<AssociationComplianceSeverity | null | undefined>(undefined),
			SyncCompliance: new FormControl<AssociationSyncCompliance | null | undefined>(undefined),
			ApplyOnlyAtCronInterval: new FormControl<boolean | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidUpdate {
	}
	export interface InvalidUpdateFormProperties {
	}
	export function CreateInvalidUpdateFormGroup() {
		return new FormGroup<InvalidUpdateFormProperties>({
		});

	}

	export interface AssociationVersionLimitExceeded {
	}
	export interface AssociationVersionLimitExceededFormProperties {
	}
	export function CreateAssociationVersionLimitExceededFormGroup() {
		return new FormGroup<AssociationVersionLimitExceededFormProperties>({
		});

	}

	export interface UpdateAssociationStatusResult {
		AssociationDescription?: AssociationDescription;
	}
	export interface UpdateAssociationStatusResultFormProperties {
	}
	export function CreateUpdateAssociationStatusResultFormGroup() {
		return new FormGroup<UpdateAssociationStatusResultFormProperties>({
		});

	}

	export interface UpdateAssociationStatusRequest {

		/** Required */
		Name: string;

		/** Required */
		InstanceId: string;

		/** Required */
		AssociationStatus: AssociationStatus;
	}
	export interface UpdateAssociationStatusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssociationStatusRequestFormGroup() {
		return new FormGroup<UpdateAssociationStatusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StatusUnchanged {
	}
	export interface StatusUnchangedFormProperties {
	}
	export function CreateStatusUnchangedFormGroup() {
		return new FormGroup<StatusUnchangedFormProperties>({
		});

	}

	export interface UpdateDocumentResult {
		DocumentDescription?: DocumentDescription;
	}
	export interface UpdateDocumentResultFormProperties {
	}
	export function CreateUpdateDocumentResultFormGroup() {
		return new FormGroup<UpdateDocumentResultFormProperties>({
		});

	}

	export interface UpdateDocumentRequest {

		/** Required */
		Content: string;
		Attachments?: Array<AttachmentsSource>;

		/** Required */
		Name: string;
		DisplayName?: string;
		VersionName?: string;
		DocumentVersion?: string;
		DocumentFormat?: DocumentFormat;
		TargetType?: string;
	}
	export interface UpdateDocumentRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
		DocumentFormat: FormControl<DocumentFormat | null | undefined>,
		TargetType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDocumentRequestFormGroup() {
		return new FormGroup<UpdateDocumentRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
			DocumentFormat: new FormControl<DocumentFormat | null | undefined>(undefined),
			TargetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentVersionLimitExceeded {
	}
	export interface DocumentVersionLimitExceededFormProperties {
	}
	export function CreateDocumentVersionLimitExceededFormGroup() {
		return new FormGroup<DocumentVersionLimitExceededFormProperties>({
		});

	}

	export interface DuplicateDocumentContent {
	}
	export interface DuplicateDocumentContentFormProperties {
	}
	export function CreateDuplicateDocumentContentFormGroup() {
		return new FormGroup<DuplicateDocumentContentFormProperties>({
		});

	}

	export interface DuplicateDocumentVersionName {
	}
	export interface DuplicateDocumentVersionNameFormProperties {
	}
	export function CreateDuplicateDocumentVersionNameFormGroup() {
		return new FormGroup<DuplicateDocumentVersionNameFormProperties>({
		});

	}

	export interface UpdateDocumentDefaultVersionResult {
		Description?: DocumentDefaultVersionDescription;
	}
	export interface UpdateDocumentDefaultVersionResultFormProperties {
	}
	export function CreateUpdateDocumentDefaultVersionResultFormGroup() {
		return new FormGroup<UpdateDocumentDefaultVersionResultFormProperties>({
		});

	}


	/** A default version of a document. */
	export interface DocumentDefaultVersionDescription {
		Name?: string;
		DefaultVersion?: string;
		DefaultVersionName?: string;
	}

	/** A default version of a document. */
	export interface DocumentDefaultVersionDescriptionFormProperties {
		Name: FormControl<string | null | undefined>,
		DefaultVersion: FormControl<string | null | undefined>,
		DefaultVersionName: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDefaultVersionDescriptionFormGroup() {
		return new FormGroup<DocumentDefaultVersionDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DefaultVersion: new FormControl<string | null | undefined>(undefined),
			DefaultVersionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentDefaultVersionRequest {

		/** Required */
		Name: string;

		/** Required */
		DocumentVersion: string;
	}
	export interface UpdateDocumentDefaultVersionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDocumentDefaultVersionRequestFormGroup() {
		return new FormGroup<UpdateDocumentDefaultVersionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDocumentMetadataResponse {
	}
	export interface UpdateDocumentMetadataResponseFormProperties {
	}
	export function CreateUpdateDocumentMetadataResponseFormGroup() {
		return new FormGroup<UpdateDocumentMetadataResponseFormProperties>({
		});

	}

	export interface UpdateDocumentMetadataRequest {

		/** Required */
		Name: string;
		DocumentVersion?: string;

		/** Required */
		DocumentReviews: DocumentReviews;
	}
	export interface UpdateDocumentMetadataRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDocumentMetadataRequestFormGroup() {
		return new FormGroup<UpdateDocumentMetadataRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a document approval review. */
	export interface DocumentReviews {

		/** Required */
		Action: DocumentReviewAction;
		Comment?: Array<DocumentReviewCommentSource>;
	}

	/** Information about a document approval review. */
	export interface DocumentReviewsFormProperties {

		/** Required */
		Action: FormControl<DocumentReviewAction | null | undefined>,
	}
	export function CreateDocumentReviewsFormGroup() {
		return new FormGroup<DocumentReviewsFormProperties>({
			Action: new FormControl<DocumentReviewAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentReviewAction { SendForReview = 0, UpdateReview = 1, Approve = 2, Reject = 3 }

	export interface UpdateMaintenanceWindowResult {
		WindowId?: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		ScheduleOffset?: number | null;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
	}
	export interface UpdateMaintenanceWindowResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Cutoff: new FormControl<number | null | undefined>(undefined),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowRequest {

		/** Required */
		WindowId: string;
		Name?: string;
		Description?: string;
		StartDate?: string;
		EndDate?: string;
		Schedule?: string;
		ScheduleTimezone?: string;
		ScheduleOffset?: number | null;
		Duration?: number | null;
		Cutoff?: number | null;
		AllowUnassociatedTargets?: boolean | null;
		Enabled?: boolean | null;
		Replace?: boolean | null;
	}
	export interface UpdateMaintenanceWindowRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ScheduleTimezone: FormControl<string | null | undefined>,
		ScheduleOffset: FormControl<number | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Cutoff: FormControl<number | null | undefined>,
		AllowUnassociatedTargets: FormControl<boolean | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ScheduleTimezone: new FormControl<string | null | undefined>(undefined),
			ScheduleOffset: new FormControl<number | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Cutoff: new FormControl<number | null | undefined>(undefined),
			AllowUnassociatedTargets: new FormControl<boolean | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTargetResult {
		WindowId?: string;
		WindowTargetId?: string;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
	}
	export interface UpdateMaintenanceWindowTargetResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTargetId: FormControl<string | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTargetResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTargetResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTargetId: new FormControl<string | null | undefined>(undefined),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTargetRequest {

		/** Required */
		WindowId: string;

		/** Required */
		WindowTargetId: string;
		Targets?: Array<Target>;
		OwnerInformation?: string;
		Name?: string;
		Description?: string;
		Replace?: boolean | null;
	}
	export interface UpdateMaintenanceWindowTargetRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		WindowTargetId: FormControl<string | null | undefined>,
		OwnerInformation: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTargetRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTargetRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowTargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OwnerInformation: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTaskResult {
		WindowId?: string;
		WindowTaskId?: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskParameters?: MaintenanceWindowTaskParameters;
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number | null;
		MaxConcurrency?: string;
		MaxErrors?: string;
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface UpdateMaintenanceWindowTaskResultFormProperties {
		WindowId: FormControl<string | null | undefined>,
		WindowTaskId: FormControl<string | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CutoffBehavior: FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTaskResultFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTaskResultFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined),
			WindowTaskId: new FormControl<string | null | undefined>(undefined),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CutoffBehavior: new FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>(undefined),
		});

	}

	export interface UpdateMaintenanceWindowTaskRequest {

		/** Required */
		WindowId: string;

		/** Required */
		WindowTaskId: string;
		Targets?: Array<Target>;
		TaskArn?: string;
		ServiceRoleArn?: string;
		TaskParameters?: MaintenanceWindowTaskParameters;
		TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
		Priority?: number | null;
		MaxConcurrency?: string;
		MaxErrors?: string;
		LoggingInfo?: LoggingInfo;
		Name?: string;
		Description?: string;
		Replace?: boolean | null;
		CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
		AlarmConfiguration?: AlarmConfiguration;
	}
	export interface UpdateMaintenanceWindowTaskRequestFormProperties {

		/** Required */
		WindowId: FormControl<string | null | undefined>,

		/** Required */
		WindowTaskId: FormControl<string | null | undefined>,
		TaskArn: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MaxConcurrency: FormControl<string | null | undefined>,
		MaxErrors: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
		CutoffBehavior: FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>,
	}
	export function CreateUpdateMaintenanceWindowTaskRequestFormGroup() {
		return new FormGroup<UpdateMaintenanceWindowTaskRequestFormProperties>({
			WindowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WindowTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskArn: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			MaxConcurrency: new FormControl<string | null | undefined>(undefined),
			MaxErrors: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
			CutoffBehavior: new FormControl<MaintenanceWindowTaskCutoffBehavior | null | undefined>(undefined),
		});

	}

	export interface UpdateManagedInstanceRoleResult {
	}
	export interface UpdateManagedInstanceRoleResultFormProperties {
	}
	export function CreateUpdateManagedInstanceRoleResultFormGroup() {
		return new FormGroup<UpdateManagedInstanceRoleResultFormProperties>({
		});

	}

	export interface UpdateManagedInstanceRoleRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		IamRole: string;
	}
	export interface UpdateManagedInstanceRoleRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		IamRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateManagedInstanceRoleRequestFormGroup() {
		return new FormGroup<UpdateManagedInstanceRoleRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOpsItemResponse {
	}
	export interface UpdateOpsItemResponseFormProperties {
	}
	export function CreateUpdateOpsItemResponseFormGroup() {
		return new FormGroup<UpdateOpsItemResponseFormProperties>({
		});

	}

	export interface UpdateOpsItemRequest {
		Description?: string;
		OperationalData?: OpsItemOperationalData;
		OperationalDataToDelete?: Array<string>;
		Notifications?: Array<OpsItemNotification>;
		Priority?: number | null;
		RelatedOpsItems?: Array<RelatedOpsItem>;
		Status?: OpsItemStatus;

		/** Required */
		OpsItemId: string;
		Title?: string;
		Category?: string;
		Severity?: string;
		ActualStartTime?: Date;
		ActualEndTime?: Date;
		PlannedStartTime?: Date;
		PlannedEndTime?: Date;
		OpsItemArn?: string;
	}
	export interface UpdateOpsItemRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<OpsItemStatus | null | undefined>,

		/** Required */
		OpsItemId: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		Severity: FormControl<string | null | undefined>,
		ActualStartTime: FormControl<Date | null | undefined>,
		ActualEndTime: FormControl<Date | null | undefined>,
		PlannedStartTime: FormControl<Date | null | undefined>,
		PlannedEndTime: FormControl<Date | null | undefined>,
		OpsItemArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOpsItemRequestFormGroup() {
		return new FormGroup<UpdateOpsItemRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<OpsItemStatus | null | undefined>(undefined),
			OpsItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<string | null | undefined>(undefined),
			ActualStartTime: new FormControl<Date | null | undefined>(undefined),
			ActualEndTime: new FormControl<Date | null | undefined>(undefined),
			PlannedStartTime: new FormControl<Date | null | undefined>(undefined),
			PlannedEndTime: new FormControl<Date | null | undefined>(undefined),
			OpsItemArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOpsMetadataResult {
		OpsMetadataArn?: string;
	}
	export interface UpdateOpsMetadataResultFormProperties {
		OpsMetadataArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOpsMetadataResultFormGroup() {
		return new FormGroup<UpdateOpsMetadataResultFormProperties>({
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOpsMetadataRequest {

		/** Required */
		OpsMetadataArn: string;
		MetadataToUpdate?: MetadataMap;
		KeysToDelete?: Array<string>;
	}
	export interface UpdateOpsMetadataRequestFormProperties {

		/** Required */
		OpsMetadataArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOpsMetadataRequestFormGroup() {
		return new FormGroup<UpdateOpsMetadataRequestFormProperties>({
			OpsMetadataArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpsMetadataKeyLimitExceededException {
	}
	export interface OpsMetadataKeyLimitExceededExceptionFormProperties {
	}
	export function CreateOpsMetadataKeyLimitExceededExceptionFormGroup() {
		return new FormGroup<OpsMetadataKeyLimitExceededExceptionFormProperties>({
		});

	}

	export interface UpdatePatchBaselineResult {
		BaselineId?: string;
		Name?: string;
		OperatingSystem?: OperatingSystem;
		GlobalFilters?: PatchFilterGroup;
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: PatchAction;
		CreatedDate?: Date;
		ModifiedDate?: Date;
		Description?: string;
		Sources?: Array<PatchSource>;
	}
	export interface UpdatePatchBaselineResultFormProperties {
		BaselineId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<PatchAction | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		ModifiedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePatchBaselineResultFormGroup() {
		return new FormGroup<UpdatePatchBaselineResultFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<PatchAction | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			ModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePatchBaselineRequest {

		/** Required */
		BaselineId: string;
		Name?: string;
		GlobalFilters?: PatchFilterGroup;
		ApprovalRules?: PatchRuleGroup;
		ApprovedPatches?: Array<string>;
		ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
		ApprovedPatchesEnableNonSecurity?: boolean | null;
		RejectedPatches?: Array<string>;
		RejectedPatchesAction?: PatchAction;
		Description?: string;
		Sources?: Array<PatchSource>;
		Replace?: boolean | null;
	}
	export interface UpdatePatchBaselineRequestFormProperties {

		/** Required */
		BaselineId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ApprovedPatchesComplianceLevel: FormControl<PatchComplianceLevel | null | undefined>,
		ApprovedPatchesEnableNonSecurity: FormControl<boolean | null | undefined>,
		RejectedPatchesAction: FormControl<PatchAction | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Replace: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePatchBaselineRequestFormGroup() {
		return new FormGroup<UpdatePatchBaselineRequestFormProperties>({
			BaselineId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			ApprovedPatchesComplianceLevel: new FormControl<PatchComplianceLevel | null | undefined>(undefined),
			ApprovedPatchesEnableNonSecurity: new FormControl<boolean | null | undefined>(undefined),
			RejectedPatchesAction: new FormControl<PatchAction | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Replace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceDataSyncResult {
	}
	export interface UpdateResourceDataSyncResultFormProperties {
	}
	export function CreateUpdateResourceDataSyncResultFormGroup() {
		return new FormGroup<UpdateResourceDataSyncResultFormProperties>({
		});

	}

	export interface UpdateResourceDataSyncRequest {

		/** Required */
		SyncName: string;

		/** Required */
		SyncType: string;

		/** Required */
		SyncSource: ResourceDataSyncSource;
	}
	export interface UpdateResourceDataSyncRequestFormProperties {

		/** Required */
		SyncName: FormControl<string | null | undefined>,

		/** Required */
		SyncType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceDataSyncRequestFormGroup() {
		return new FormGroup<UpdateResourceDataSyncRequestFormProperties>({
			SyncName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SyncType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceDataSyncConflictException {
	}
	export interface ResourceDataSyncConflictExceptionFormProperties {
	}
	export function CreateResourceDataSyncConflictExceptionFormGroup() {
		return new FormGroup<ResourceDataSyncConflictExceptionFormProperties>({
		});

	}


	/** The result body of the UpdateServiceSetting API operation. */
	export interface UpdateServiceSettingResult {
	}

	/** The result body of the UpdateServiceSetting API operation. */
	export interface UpdateServiceSettingResultFormProperties {
	}
	export function CreateUpdateServiceSettingResultFormGroup() {
		return new FormGroup<UpdateServiceSettingResultFormProperties>({
		});

	}


	/** The request body of the UpdateServiceSetting API operation. */
	export interface UpdateServiceSettingRequest {

		/** Required */
		SettingId: string;

		/** Required */
		SettingValue: string;
	}

	/** The request body of the UpdateServiceSetting API operation. */
	export interface UpdateServiceSettingRequestFormProperties {

		/** Required */
		SettingId: FormControl<string | null | undefined>,

		/** Required */
		SettingValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceSettingRequestFormGroup() {
		return new FormGroup<UpdateServiceSettingRequestFormProperties>({
			SettingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SettingValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComplianceSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3, INFORMATIONAL = 4, UNSPECIFIED = 5 }


	/** The inventory result item. */
	export interface InventoryResultItem {

		/** Required */
		TypeName: string;

		/** Required */
		SchemaVersion: string;
		CaptureTime?: string;
		ContentHash?: string;

		/** Required */
		Content: Array<InventoryItemEntry>;
	}

	/** The inventory result item. */
	export interface InventoryResultItemFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersion: FormControl<string | null | undefined>,
		CaptureTime: FormControl<string | null | undefined>,
		ContentHash: FormControl<string | null | undefined>,
	}
	export function CreateInventoryResultItemFormGroup() {
		return new FormGroup<InventoryResultItemFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CaptureTime: new FormControl<string | null | undefined>(undefined),
			ContentHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the values for a task parameter. */
	export interface MaintenanceWindowTaskParameterValueExpression {
		Values?: Array<string>;
	}

	/** Defines the values for a task parameter. */
	export interface MaintenanceWindowTaskParameterValueExpressionFormProperties {
	}
	export function CreateMaintenanceWindowTaskParameterValueExpressionFormGroup() {
		return new FormGroup<MaintenanceWindowTaskParameterValueExpressionFormProperties>({
		});

	}


	/** Metadata to assign to an Application Manager application. */
	export interface MetadataValue {
		Value?: string;
	}

	/** Metadata to assign to an Application Manager application. */
	export interface MetadataValueFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataValueFormGroup() {
		return new FormGroup<MetadataValueFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpsEntityItemEntry {
	}
	export interface OpsEntityItemEntryFormProperties {
	}
	export function CreateOpsEntityItemEntryFormGroup() {
		return new FormGroup<OpsEntityItemEntryFormProperties>({
		});

	}


	/** The OpsData summary. */
	export interface OpsEntityItem {
		CaptureTime?: string;
		Content?: Array<OpsEntityItemEntry>;
	}

	/** The OpsData summary. */
	export interface OpsEntityItemFormProperties {
		CaptureTime: FormControl<string | null | undefined>,
	}
	export function CreateOpsEntityItemFormGroup() {
		return new FormGroup<OpsEntityItemFormProperties>({
			CaptureTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OpsFilterOperatorType { Equal = 0, NotEqual = 1, BeginWith = 2, LessThan = 3, GreaterThan = 4, Exists = 5 }

	export enum OpsItemDataType { SearchableString = 0, String = 1 }


	/** An object that defines the value of the key and its type in the OperationalData map. */
	export interface OpsItemDataValue {
		Value?: string;
		Type?: OpsItemDataType;
	}

	/** An object that defines the value of the key and its type in the OperationalData map. */
	export interface OpsItemDataValueFormProperties {
		Value: FormControl<string | null | undefined>,
		Type: FormControl<OpsItemDataType | null | undefined>,
	}
	export function CreateOpsItemDataValueFormGroup() {
		return new FormGroup<OpsItemDataValueFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<OpsItemDataType | null | undefined>(undefined),
		});

	}

	export enum OpsItemRelatedItemsFilterOperator { Equal = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i> are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:</p> <ul> <li> <p> <code>Key=Owner,Value=DbAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=SysAdmin</code> </p> </li> <li> <p> <code>Key=Owner,Value=Dev</code> </p> </li> <li> <p> <code>Key=Stack,Value=Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Pre-Production</code> </p> </li> <li> <p> <code>Key=Stack,Value=Test</code> </p> </li> </ul> <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags.</p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters.</p> <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonSSM.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResult> {
			return this.http.post<AddTagsToResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.
		 * Post #X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem
		 * @return {AssociateOpsItemRelatedItemResponse} Success
		 */
		AssociateOpsItemRelatedItem(requestBody: AssociateOpsItemRelatedItemRequest): Observable<AssociateOpsItemRelatedItemResponse> {
			return this.http.post<AssociateOpsItemRelatedItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
		 * Post #X-Amz-Target=AmazonSSM.CancelCommand
		 * @return {CancelCommandResult} Success
		 */
		CancelCommand(requestBody: CancelCommandRequest): Observable<CancelCommandResult> {
			return this.http.post<CancelCommandResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CancelCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.
		 * Post #X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution
		 * @return {CancelMaintenanceWindowExecutionResult} Success
		 */
		CancelMaintenanceWindowExecution(requestBody: CancelMaintenanceWindowExecutionRequest): Observable<CancelMaintenanceWindowExecutionResult> {
			return this.http.post<CancelMaintenanceWindowExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p> <note> <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called <i>managed nodes</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateActivation
		 * @return {CreateActivationResult} Success
		 */
		CreateActivation(requestBody: CreateActivationRequest): Observable<CreateActivationResult> {
			return this.http.post<CreateActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service.
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociation
		 * @return {CreateAssociationResult} Success
		 */
		CreateAssociation(requestBody: CreateAssociationRequest): Observable<CreateAssociationResult> {
			return this.http.post<CreateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.</p> <p>When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.</p> <p>If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
		 * Post #X-Amz-Target=AmazonSSM.CreateAssociationBatch
		 * @return {CreateAssociationBatchResult} Success
		 */
		CreateAssociationBatch(requestBody: CreateAssociationBatchRequest): Observable<CreateAssociationBatchResult> {
			return this.http.post<CreateAssociationBatchResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateAssociationBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.
		 * Post #X-Amz-Target=AmazonSSM.CreateDocument
		 * @return {CreateDocumentResult} Success
		 */
		CreateDocument(requestBody: CreateDocumentRequest): Observable<CreateDocumentResult> {
			return this.http.post<CreateDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new maintenance window.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateMaintenanceWindow
		 * @return {CreateMaintenanceWindowResult} Success
		 */
		CreateMaintenanceWindow(requestBody: CreateMaintenanceWindowRequest): Observable<CreateMaintenanceWindowResult> {
			return this.http.post<CreateMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.CreateOpsItem
		 * @return {CreateOpsItemResponse} Success
		 */
		CreateOpsItem(requestBody: CreateOpsItemRequest): Observable<CreateOpsItemResponse> {
			return this.http.post<CreateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
		 * Post #X-Amz-Target=AmazonSSM.CreateOpsMetadata
		 * @return {CreateOpsMetadataResult} Success
		 */
		CreateOpsMetadata(requestBody: CreateOpsMetadataRequest): Observable<CreateOpsMetadataResult> {
			return this.http.post<CreateOpsMetadataResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateOpsMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a patch baseline.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreatePatchBaseline
		 * @return {CreatePatchBaselineResult} Success
		 */
		CreatePatchBaseline(requestBody: CreatePatchBaselineRequest): Observable<CreatePatchBaselineResult> {
			return this.http.post<CreatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: <code>SyncToDestination</code> and <code>SyncFromSource</code>.</p> <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring resource data sync for Inventory</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or <code>EntireOrganization</code> by using Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the <a>ListResourceDataSync</a>.</p> <note> <p>By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. </p> </note>
		 * Post #X-Amz-Target=AmazonSSM.CreateResourceDataSync
		 * @return {CreateResourceDataSyncResult} Success
		 */
		CreateResourceDataSync(requestBody: CreateResourceDataSyncRequest): Observable<CreateResourceDataSyncResult> {
			return this.http.post<CreateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.CreateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.
		 * Post #X-Amz-Target=AmazonSSM.DeleteActivation
		 * @return {DeleteActivationResult} Success
		 */
		DeleteActivation(requestBody: DeleteActivationRequest): Observable<DeleteActivationResult> {
			return this.http.post<DeleteActivationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteActivation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the <code>Targets</code> parameter, then you must delete the association by using the association ID.</p> <p>When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteAssociation
		 * @return {DeleteAssociationResult} Success
		 */
		DeleteAssociation(requestBody: DeleteAssociationRequest): Observable<DeleteAssociationResult> {
			return this.http.post<DeleteAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>
		 * Post #X-Amz-Target=AmazonSSM.DeleteDocument
		 * @return {DeleteDocumentResult} Success
		 */
		DeleteDocument(requestBody: DeleteDocumentRequest): Observable<DeleteDocumentResult> {
			return this.http.post<DeleteDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
		 * Post #X-Amz-Target=AmazonSSM.DeleteInventory
		 * @return {DeleteInventoryResult} Success
		 */
		DeleteInventory(requestBody: DeleteInventoryRequest): Observable<DeleteInventoryResult> {
			return this.http.post<DeleteInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow
		 * @return {DeleteMaintenanceWindowResult} Success
		 */
		DeleteMaintenanceWindow(requestBody: DeleteMaintenanceWindowRequest): Observable<DeleteMaintenanceWindowResult> {
			return this.http.post<DeleteMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete OpsMetadata related to an application.
		 * Post #X-Amz-Target=AmazonSSM.DeleteOpsMetadata
		 * @return {DeleteOpsMetadataResult} Success
		 */
		DeleteOpsMetadata(requestBody: DeleteOpsMetadataRequest): Observable<DeleteOpsMetadataResult> {
			return this.http.post<DeleteOpsMetadataResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteOpsMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
		 * Post #X-Amz-Target=AmazonSSM.DeleteParameter
		 * @return {DeleteParameterResult} Success
		 */
		DeleteParameter(requestBody: DeleteParameterRequest): Observable<DeleteParameterResult> {
			return this.http.post<DeleteParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
		 * Post #X-Amz-Target=AmazonSSM.DeleteParameters
		 * @return {DeleteParametersResult} Success
		 */
		DeleteParameters(requestBody: DeleteParametersRequest): Observable<DeleteParametersResult> {
			return this.http.post<DeleteParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DeletePatchBaseline
		 * @return {DeletePatchBaselineResult} Success
		 */
		DeletePatchBaseline(requestBody: DeletePatchBaselineRequest): Observable<DeletePatchBaselineResult> {
			return this.http.post<DeletePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeletePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.
		 * Post #X-Amz-Target=AmazonSSM.DeleteResourceDataSync
		 * @return {DeleteResourceDataSyncResult} Success
		 */
		DeleteResourceDataSync(requestBody: DeleteResourceDataSyncRequest): Observable<DeleteResourceDataSyncResult> {
			return this.http.post<DeleteResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
		 * Post #X-Amz-Target=AmazonSSM.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterManagedInstance
		 * @return {DeregisterManagedInstanceResult} Success
		 */
		DeregisterManagedInstance(requestBody: DeregisterManagedInstanceRequest): Observable<DeregisterManagedInstanceResult> {
			return this.http.post<DeregisterManagedInstanceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterManagedInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a patch group from a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup
		 * @return {DeregisterPatchBaselineForPatchGroupResult} Success
		 */
		DeregisterPatchBaselineForPatchGroup(requestBody: DeregisterPatchBaselineForPatchGroupRequest): Observable<DeregisterPatchBaselineForPatchGroupResult> {
			return this.http.post<DeregisterPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a target from a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow
		 * @return {DeregisterTargetFromMaintenanceWindowResult} Success
		 */
		DeregisterTargetFromMaintenanceWindow(requestBody: DeregisterTargetFromMaintenanceWindowRequest): Observable<DeregisterTargetFromMaintenanceWindowResult> {
			return this.http.post<DeregisterTargetFromMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a task from a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow
		 * @return {DeregisterTaskFromMaintenanceWindowResult} Success
		 */
		DeregisterTaskFromMaintenanceWindow(requestBody: DeregisterTaskFromMaintenanceWindowRequest): Observable<DeregisterTaskFromMaintenanceWindowResult> {
			return this.http.post<DeregisterTaskFromMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeActivations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeActivationsResult} Success
		 */
		DescribeActivations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeActivationsRequest): Observable<DescribeActivationsResult> {
			return this.http.post<DescribeActivationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeActivations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the association for the specified target or managed node. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociation
		 * @return {DescribeAssociationResult} Success
		 */
		DescribeAssociation(requestBody: DescribeAssociationRequest): Observable<DescribeAssociationResult> {
			return this.http.post<DescribeAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Views information about a specific execution of a specific association.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAssociationExecutionTargetsResult} Success
		 */
		DescribeAssociationExecutionTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAssociationExecutionTargetsRequest): Observable<DescribeAssociationExecutionTargetsResult> {
			return this.http.post<DescribeAssociationExecutionTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Views all executions for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAssociationExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAssociationExecutionsResult} Success
		 */
		DescribeAssociationExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAssociationExecutionsRequest): Observable<DescribeAssociationExecutionsResult> {
			return this.http.post<DescribeAssociationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about all active and terminated Automation executions.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAutomationExecutionsResult} Success
		 */
		DescribeAutomationExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAutomationExecutionsRequest): Observable<DescribeAutomationExecutionsResult> {
			return this.http.post<DescribeAutomationExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about all active and terminated step executions in an Automation workflow.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAutomationStepExecutionsResult} Success
		 */
		DescribeAutomationStepExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAutomationStepExecutionsRequest): Observable<DescribeAutomationStepExecutionsResult> {
			return this.http.post<DescribeAutomationStepExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patches eligible to be included in a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.DescribeAvailablePatches
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAvailablePatchesResult} Success
		 */
		DescribeAvailablePatches(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAvailablePatchesRequest): Observable<DescribeAvailablePatchesResult> {
			return this.http.post<DescribeAvailablePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeAvailablePatches?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified Amazon Web Services Systems Manager document (SSM document).
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocument
		 * @return {DescribeDocumentResult} Success
		 */
		DescribeDocument(requestBody: DescribeDocumentRequest): Observable<DescribeDocumentResult> {
			return this.http.post<DescribeDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (<i>All</i>).
		 * Post #X-Amz-Target=AmazonSSM.DescribeDocumentPermission
		 * @return {DescribeDocumentPermissionResponse} Success
		 */
		DescribeDocumentPermission(requestBody: DescribeDocumentPermissionRequest): Observable<DescribeDocumentPermissionResponse> {
			return this.http.post<DescribeDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * All associations for the managed node(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEffectiveInstanceAssociationsResult} Success
		 */
		DescribeEffectiveInstanceAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEffectiveInstanceAssociationsRequest): Observable<DescribeEffectiveInstanceAssociationsResult> {
			return this.http.post<DescribeEffectiveInstanceAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.
		 * Post #X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEffectivePatchesForPatchBaselineResult} Success
		 */
		DescribeEffectivePatchesForPatchBaseline(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEffectivePatchesForPatchBaselineRequest): Observable<DescribeEffectivePatchesForPatchBaselineResult> {
			return this.http.post<DescribeEffectivePatchesForPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The status of the associations for the managed node(s).
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstanceAssociationsStatusResult} Success
		 */
		DescribeInstanceAssociationsStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstanceAssociationsStatusRequest): Observable<DescribeInstanceAssociationsStatusResult> {
			return this.http.post<DescribeInstanceAssociationsStatusResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about one or more of your managed nodes, including the operating system platform, SSM Agent version, association status, and IP address. This operation does not return information for nodes that are either Stopped or Terminated.</p> <p>If you specify one or more node IDs, the operation returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.</p> <note> <p>The <code>IamRole</code> field returned for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This operation does not return the IAM role for EC2 instances.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstanceInformation
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstanceInformationResult} Success
		 */
		DescribeInstanceInformation(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstanceInformationRequest): Observable<DescribeInstanceInformationResult> {
			return this.http.post<DescribeInstanceInformationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstanceInformation?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state of one or more managed nodes.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstancePatchStatesResult} Success
		 */
		DescribeInstancePatchStates(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstancePatchStatesRequest): Observable<DescribeInstancePatchStatesResult> {
			return this.http.post<DescribeInstancePatchStatesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the high-level patch state for the managed nodes in the specified patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstancePatchStatesForPatchGroupResult} Success
		 */
		DescribeInstancePatchStatesForPatchGroup(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstancePatchStatesForPatchGroupRequest): Observable<DescribeInstancePatchStatesForPatchGroupResult> {
			return this.http.post<DescribeInstancePatchStatesForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInstancePatches
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstancePatchesResult} Success
		 */
		DescribeInstancePatches(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstancePatchesRequest): Observable<DescribeInstancePatchesResult> {
			return this.http.post<DescribeInstancePatchesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInstancePatches?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specific delete inventory operation.
		 * Post #X-Amz-Target=AmazonSSM.DescribeInventoryDeletions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInventoryDeletionsResult} Success
		 */
		DescribeInventoryDeletions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInventoryDeletionsRequest): Observable<DescribeInventoryDeletionsResult> {
			return this.http.post<DescribeInventoryDeletionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowExecutionTaskInvocationsResult} Success
		 */
		DescribeMaintenanceWindowExecutionTaskInvocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowExecutionTaskInvocationsRequest): Observable<DescribeMaintenanceWindowExecutionTaskInvocationsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTaskInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a given maintenance window execution, lists the tasks that were run.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowExecutionTasksResult} Success
		 */
		DescribeMaintenanceWindowExecutionTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowExecutionTasksRequest): Observable<DescribeMaintenanceWindowExecutionTasksResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowExecutionsResult} Success
		 */
		DescribeMaintenanceWindowExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowExecutionsRequest): Observable<DescribeMaintenanceWindowExecutionsResult> {
			return this.http.post<DescribeMaintenanceWindowExecutionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about upcoming executions of a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowScheduleResult} Success
		 */
		DescribeMaintenanceWindowSchedule(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowScheduleRequest): Observable<DescribeMaintenanceWindowScheduleResult> {
			return this.http.post<DescribeMaintenanceWindowScheduleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets registered with the maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowTargetsResult} Success
		 */
		DescribeMaintenanceWindowTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowTargetsRequest): Observable<DescribeMaintenanceWindowTargetsResult> {
			return this.http.post<DescribeMaintenanceWindowTargetsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the tasks in a maintenance window.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowTasksResult} Success
		 */
		DescribeMaintenanceWindowTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowTasksRequest): Observable<DescribeMaintenanceWindowTasksResult> {
			return this.http.post<DescribeMaintenanceWindowTasksResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the maintenance windows in an Amazon Web Services account.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowsResult} Success
		 */
		DescribeMaintenanceWindows(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowsRequest): Observable<DescribeMaintenanceWindowsResult> {
			return this.http.post<DescribeMaintenanceWindowsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the maintenance window targets or tasks that a managed node is associated with.
		 * Post #X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMaintenanceWindowsForTargetResult} Success
		 */
		DescribeMaintenanceWindowsForTarget(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMaintenanceWindowsForTargetRequest): Observable<DescribeMaintenanceWindowsForTargetResult> {
			return this.http.post<DescribeMaintenanceWindowsForTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.DescribeOpsItems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOpsItemsResponse} Success
		 */
		DescribeOpsItems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOpsItemsRequest): Observable<DescribeOpsItemsResponse> {
			return this.http.post<DescribeOpsItemsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeOpsItems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>DescribeParameters</code> retrieves whatever the original key alias was referencing.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.DescribeParameters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeParametersResult} Success
		 */
		DescribeParameters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeParametersRequest): Observable<DescribeParametersResult> {
			return this.http.post<DescribeParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeParameters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the patch baselines in your Amazon Web Services account.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchBaselines
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePatchBaselinesResult} Success
		 */
		DescribePatchBaselines(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePatchBaselinesRequest): Observable<DescribePatchBaselinesResult> {
			return this.http.post<DescribePatchBaselinesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchBaselines?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns high-level aggregated patch compliance state information for a patch group.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroupState
		 * @return {DescribePatchGroupStateResult} Success
		 */
		DescribePatchGroupState(requestBody: DescribePatchGroupStateRequest): Observable<DescribePatchGroupStateResult> {
			return this.http.post<DescribePatchGroupStateResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroupState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all patch groups that have been registered with patch baselines.
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePatchGroupsResult} Success
		 */
		DescribePatchGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePatchGroupsRequest): Observable<DescribePatchGroupsResult> {
			return this.http.post<DescribePatchGroupsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>DEBIAN</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>MACOS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> </p> </dd> <dt>ORACLE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>CLASSIFICATION</code> | <code>SEVERITY</code> </p> </dd> <dt>UBUNTU</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRIORITY</code> </p> </dd> <dt>WINDOWS</dt> <dd> <p>Valid properties: <code>PRODUCT</code> | <code>PRODUCT_FAMILY</code> | <code>CLASSIFICATION</code> | <code>MSRC_SEVERITY</code> </p> </dd> </dl>
		 * Post #X-Amz-Target=AmazonSSM.DescribePatchProperties
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePatchPropertiesResult} Success
		 */
		DescribePatchProperties(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePatchPropertiesRequest): Observable<DescribePatchPropertiesResult> {
			return this.http.post<DescribePatchPropertiesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribePatchProperties?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
		 * Post #X-Amz-Target=AmazonSSM.DescribeSessions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSessionsResponse} Success
		 */
		DescribeSessions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSessionsRequest): Observable<DescribeSessionsResponse> {
			return this.http.post<DescribeSessionsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DescribeSessions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.
		 * Post #X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem
		 * @return {DisassociateOpsItemRelatedItemResponse} Success
		 */
		DisassociateOpsItemRelatedItem(requestBody: DisassociateOpsItemRelatedItemRequest): Observable<DisassociateOpsItemRelatedItemResponse> {
			return this.http.post<DisassociateOpsItemRelatedItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get detailed information about a particular Automation execution.
		 * Post #X-Amz-Target=AmazonSSM.GetAutomationExecution
		 * @return {GetAutomationExecutionResult} Success
		 */
		GetAutomationExecution(requestBody: GetAutomationExecutionRequest): Observable<GetAutomationExecutionResult> {
			return this.http.post<GetAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p> <p>If you specify more than one calendar in a request, the command returns the status of <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is <code>CLOSED</code>.</p> <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetCalendarState
		 * @return {GetCalendarStateResponse} Success
		 */
		GetCalendarState(requestBody: GetCalendarStateRequest): Observable<GetCalendarStateResponse> {
			return this.http.post<GetCalendarStateResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCalendarState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about command execution for an invocation or plugin.</p> <p> <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes, use <a>ListCommands</a>.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetCommandInvocation
		 * @return {GetCommandInvocationResult} Success
		 */
		GetCommandInvocation(requestBody: GetCommandInvocationRequest): Observable<GetCommandInvocationResult> {
			return this.http.post<GetCommandInvocationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetCommandInvocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
		 * Post #X-Amz-Target=AmazonSSM.GetConnectionStatus
		 * @return {GetConnectionStatusResponse} Success
		 */
		GetConnectionStatus(requestBody: GetConnectionStatusRequest): Observable<GetConnectionStatusResponse> {
			return this.http.post<GetConnectionStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetConnectionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you don't specify an operating system value, the default patch baseline for Windows is returned.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline
		 * @return {GetDefaultPatchBaselineResult} Success
		 */
		GetDefaultPatchBaseline(requestBody: GetDefaultPatchBaselineRequest): Observable<GetDefaultPatchBaselineResult> {
			return this.http.post<GetDefaultPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p> <note> <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the <code>AWS-RunShellScript</code> document or the <code>AWS-RunPowerShellScript</code> document.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance
		 * @return {GetDeployablePatchSnapshotForInstanceResult} Success
		 */
		GetDeployablePatchSnapshotForInstance(requestBody: GetDeployablePatchSnapshotForInstanceRequest): Observable<GetDeployablePatchSnapshotForInstanceResult> {
			return this.http.post<GetDeployablePatchSnapshotForInstanceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
		 * Post #X-Amz-Target=AmazonSSM.GetDocument
		 * @return {GetDocumentResult} Success
		 */
		GetDocument(requestBody: GetDocumentRequest): Observable<GetDocumentResult> {
			return this.http.post<GetDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query inventory information. This includes managed node status, such as <code>Stopped</code> or <code>Terminated</code>.
		 * Post #X-Amz-Target=AmazonSSM.GetInventory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInventoryResult} Success
		 */
		GetInventory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInventoryRequest): Observable<GetInventoryResult> {
			return this.http.post<GetInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
		 * Post #X-Amz-Target=AmazonSSM.GetInventorySchema
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInventorySchemaResult} Success
		 */
		GetInventorySchema(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInventorySchemaRequest): Observable<GetInventorySchemaResult> {
			return this.http.post<GetInventorySchemaResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetInventorySchema?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindow
		 * @return {GetMaintenanceWindowResult} Success
		 */
		GetMaintenanceWindow(requestBody: GetMaintenanceWindowRequest): Observable<GetMaintenanceWindowResult> {
			return this.http.post<GetMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a specific a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution
		 * @return {GetMaintenanceWindowExecutionResult} Success
		 */
		GetMaintenanceWindowExecution(requestBody: GetMaintenanceWindowExecutionRequest): Observable<GetMaintenanceWindowExecutionResult> {
			return this.http.post<GetMaintenanceWindowExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details about a specific task run as part of a maintenance window execution.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask
		 * @return {GetMaintenanceWindowExecutionTaskResult} Success
		 */
		GetMaintenanceWindowExecutionTask(requestBody: GetMaintenanceWindowExecutionTaskRequest): Observable<GetMaintenanceWindowExecutionTaskResult> {
			return this.http.post<GetMaintenanceWindowExecutionTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a specific task running on a specific target.
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation
		 * @return {GetMaintenanceWindowExecutionTaskInvocationResult} Success
		 */
		GetMaintenanceWindowExecutionTaskInvocation(requestBody: GetMaintenanceWindowExecutionTaskInvocationRequest): Observable<GetMaintenanceWindowExecutionTaskInvocationResult> {
			return this.http.post<GetMaintenanceWindowExecutionTaskInvocationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details of a maintenance window task.</p> <note> <p>For maintenance window tasks without a specified target, you can't supply values for <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a placeholder value of <code>1</code>, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.</p> </note> <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask
		 * @return {GetMaintenanceWindowTaskResult} Success
		 */
		GetMaintenanceWindowTask(requestBody: GetMaintenanceWindowTaskRequest): Observable<GetMaintenanceWindowTaskResult> {
			return this.http.post<GetMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetOpsItem
		 * @return {GetOpsItemResponse} Success
		 */
		GetOpsItem(requestBody: GetOpsItemRequest): Observable<GetOpsItemResponse> {
			return this.http.post<GetOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View operational metadata related to an application in Application Manager.
		 * Post #X-Amz-Target=AmazonSSM.GetOpsMetadata
		 * @return {GetOpsMetadataResult} Success
		 */
		GetOpsMetadata(requestBody: GetOpsMetadataRequest): Observable<GetOpsMetadataResult> {
			return this.http.post<GetOpsMetadataResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer.
		 * Post #X-Amz-Target=AmazonSSM.GetOpsSummary
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetOpsSummaryResult} Success
		 */
		GetOpsSummary(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetOpsSummaryRequest): Observable<GetOpsSummaryResult> {
			return this.http.post<GetOpsSummaryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetOpsSummary?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about a single parameter by specifying the parameter name.</p> <note> <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.GetParameter
		 * @return {GetParameterResult} Success
		 */
		GetParameter(requestBody: GetParameterRequest): Observable<GetParameterResult> {
			return this.http.post<GetParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the history of all changes to a parameter.</p> <important> <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, <code>GetParameterHistory</code> retrieves whatever the original key alias was referencing.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.GetParameterHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParameterHistoryResult} Success
		 */
		GetParameterHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetParameterHistoryRequest): Observable<GetParameterHistoryResult> {
			return this.http.post<GetParameterHistoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameterHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about one or more parameters by specifying multiple parameter names.</p> <note> <p>To get information about a single parameter, you can use the <a>GetParameter</a> operation instead.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.GetParameters
		 * @return {GetParametersResult} Success
		 */
		GetParameters(requestBody: GetParametersRequest): Observable<GetParametersResult> {
			return this.http.post<GetParametersResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve information about one or more parameters in a specific hierarchy. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>
		 * Post #X-Amz-Target=AmazonSSM.GetParametersByPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetParametersByPathResult} Success
		 */
		GetParametersByPath(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetParametersByPathRequest): Observable<GetParametersByPathResult> {
			return this.http.post<GetParametersByPathResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetParametersByPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a patch baseline.
		 * Post #X-Amz-Target=AmazonSSM.GetPatchBaseline
		 * @return {GetPatchBaselineResult} Success
		 */
		GetPatchBaseline(requestBody: GetPatchBaselineRequest): Observable<GetPatchBaselineResult> {
			return this.http.post<GetPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the patch baseline that should be used for the specified patch group.
		 * Post #X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup
		 * @return {GetPatchBaselineForPatchGroupResult} Success
		 */
		GetPatchBaselineForPatchGroup(requestBody: GetPatchBaselineForPatchGroupRequest): Observable<GetPatchBaselineForPatchGroupResult> {
			return this.http.post<GetPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of the <code>Policy</code> object.
		 * Post #X-Amz-Target=AmazonSSM.GetResourcePolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetResourcePoliciesResponse} Success
		 */
		GetResourcePolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetResourcePoliciesRequest): Observable<GetResourcePoliciesResponse> {
			return this.http.post<GetResourcePoliciesResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetResourcePolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of <code>false</code>. This means the user can't use this feature unless they change the setting to <code>true</code> and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Query the current service setting for the Amazon Web Services account. </p>
		 * Post #X-Amz-Target=AmazonSSM.GetServiceSetting
		 * @return {GetServiceSettingResult} Success
		 */
		GetServiceSetting(requestBody: GetServiceSettingRequest): Observable<GetServiceSettingResult> {
			return this.http.post<GetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.GetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.LabelParameterVersion
		 * @return {LabelParameterVersionResult} Success
		 */
		LabelParameterVersion(requestBody: LabelParameterVersionRequest): Observable<LabelParameterVersionResult> {
			return this.http.post<LabelParameterVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.LabelParameterVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all versions of an association for a specific association ID.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociationVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociationVersionsResult} Success
		 */
		ListAssociationVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssociationVersionsRequest): Observable<ListAssociationVersionsResult> {
			return this.http.post<ListAssociationVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociationVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.
		 * Post #X-Amz-Target=AmazonSSM.ListAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssociationsResult} Success
		 */
		ListAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAssociationsRequest): Observable<ListAssociationsResult> {
			return this.http.post<ListAssociationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs <code>SendCommand</code> against three managed nodes, then a command invocation is created for each requested managed node ID. <code>ListCommandInvocations</code> provide status about command execution.
		 * Post #X-Amz-Target=AmazonSSM.ListCommandInvocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandInvocationsResult} Success
		 */
		ListCommandInvocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandInvocationsRequest): Observable<ListCommandInvocationsResult> {
			return this.http.post<ListCommandInvocationsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommandInvocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the commands requested by users of the Amazon Web Services account.
		 * Post #X-Amz-Target=AmazonSSM.ListCommands
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCommandsResult} Success
		 */
		ListCommands(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCommandsRequest): Observable<ListCommandsResult> {
			return this.http.post<ListCommandsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListCommands?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceItems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComplianceItemsResult} Success
		 */
		ListComplianceItems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComplianceItemsRequest): Observable<ListComplianceItemsResult> {
			return this.http.post<ListComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceItems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListComplianceSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComplianceSummariesResult} Success
		 */
		ListComplianceSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComplianceSummariesRequest): Observable<ListComplianceSummariesResult> {
			return this.http.post<ListComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListComplianceSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about approval reviews for a version of a change template in Change Manager.
		 * Post #X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory
		 * @return {ListDocumentMetadataHistoryResponse} Success
		 */
		ListDocumentMetadataHistory(requestBody: ListDocumentMetadataHistoryRequest): Observable<ListDocumentMetadataHistoryResponse> {
			return this.http.post<ListDocumentMetadataHistoryResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all versions for a document.
		 * Post #X-Amz-Target=AmazonSSM.ListDocumentVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentVersionsResult} Success
		 */
		ListDocumentVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentVersionsRequest): Observable<ListDocumentVersionsResult> {
			return this.http.post<ListDocumentVersionsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocumentVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.
		 * Post #X-Amz-Target=AmazonSSM.ListDocuments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentsResult} Success
		 */
		ListDocuments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentsRequest): Observable<ListDocumentsResult> {
			return this.http.post<ListDocumentsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListDocuments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of inventory items returned by the request.
		 * Post #X-Amz-Target=AmazonSSM.ListInventoryEntries
		 * @return {ListInventoryEntriesResult} Success
		 */
		ListInventoryEntries(requestBody: ListInventoryEntriesRequest): Observable<ListInventoryEntriesResult> {
			return this.http.post<ListInventoryEntriesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListInventoryEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.
		 * Post #X-Amz-Target=AmazonSSM.ListOpsItemEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOpsItemEventsResponse} Success
		 */
		ListOpsItemEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOpsItemEventsRequest): Observable<ListOpsItemEventsResponse> {
			return this.http.post<ListOpsItemEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListOpsItemEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.
		 * Post #X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOpsItemRelatedItemsResponse} Success
		 */
		ListOpsItemRelatedItems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOpsItemRelatedItemsRequest): Observable<ListOpsItemRelatedItemsResponse> {
			return this.http.post<ListOpsItemRelatedItemsResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.
		 * Post #X-Amz-Target=AmazonSSM.ListOpsMetadata
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOpsMetadataResult} Success
		 */
		ListOpsMetadata(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOpsMetadataRequest): Observable<ListOpsMetadataResult> {
			return this.http.post<ListOpsMetadataResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListOpsMetadata?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
		 * Post #X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceComplianceSummariesResult} Success
		 */
		ListResourceComplianceSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceComplianceSummariesRequest): Observable<ListResourceComplianceSummariesResult> {
			return this.http.post<ListResourceComplianceSummariesResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
		 * Post #X-Amz-Target=AmazonSSM.ListResourceDataSync
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceDataSyncResult} Success
		 */
		ListResourceDataSync(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceDataSyncRequest): Observable<ListResourceDataSyncResult> {
			return this.http.post<ListResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListResourceDataSync?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the tags assigned to the specified resource.</p> <p>For information about the ID format for each supported resource type, see <a>AddTagsToResource</a>.</p>
		 * Post #X-Amz-Target=AmazonSSM.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.
		 * Post #X-Amz-Target=AmazonSSM.ModifyDocumentPermission
		 * @return {ModifyDocumentPermissionResponse} Success
		 */
		ModifyDocumentPermission(requestBody: ModifyDocumentPermissionRequest): Observable<ModifyDocumentPermissionResponse> {
			return this.http.post<ModifyDocumentPermissionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ModifyDocumentPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonSSM.PutComplianceItems
		 * @return {PutComplianceItemsResult} Success
		 */
		PutComplianceItems(requestBody: PutComplianceItemsRequest): Observable<PutComplianceItemsResult> {
			return this.http.post<PutComplianceItemsResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutComplianceItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
		 * Post #X-Amz-Target=AmazonSSM.PutInventory
		 * @return {PutInventoryResult} Success
		 */
		PutInventory(requestBody: PutInventoryRequest): Observable<PutInventoryResult> {
			return this.http.post<PutInventoryResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a parameter to the system.
		 * Post #X-Amz-Target=AmazonSSM.PutParameter
		 * @return {PutParameterResult} Success
		 */
		PutParameter(requestBody: PutParameterRequest): Observable<PutParameterResult> {
			return this.http.post<PutParameterResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, <code>OpsItemGroup</code> is the only resource that supports Systems Manager resource policies. The resource policy for <code>OpsItemGroup</code> enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
		 * Post #X-Amz-Target=AmazonSSM.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
		 * Post #X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline
		 * @return {RegisterDefaultPatchBaselineResult} Success
		 */
		RegisterDefaultPatchBaseline(requestBody: RegisterDefaultPatchBaselineRequest): Observable<RegisterDefaultPatchBaselineResult> {
			return this.http.post<RegisterDefaultPatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a patch baseline for a patch group.
		 * Post #X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup
		 * @return {RegisterPatchBaselineForPatchGroupResult} Success
		 */
		RegisterPatchBaselineForPatchGroup(requestBody: RegisterPatchBaselineForPatchGroupRequest): Observable<RegisterPatchBaselineForPatchGroupResult> {
			return this.http.post<RegisterPatchBaselineForPatchGroupResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a target with a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow
		 * @return {RegisterTargetWithMaintenanceWindowResult} Success
		 */
		RegisterTargetWithMaintenanceWindow(requestBody: RegisterTargetWithMaintenanceWindowRequest): Observable<RegisterTargetWithMaintenanceWindowResult> {
			return this.http.post<RegisterTargetWithMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new task to a maintenance window.
		 * Post #X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow
		 * @return {RegisterTaskWithMaintenanceWindowResult} Success
		 */
		RegisterTaskWithMaintenanceWindow(requestBody: RegisterTaskWithMaintenanceWindowRequest): Observable<RegisterTaskWithMaintenanceWindowResult> {
			return this.http.post<RegisterTaskWithMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tag keys from the specified resource.
		 * Post #X-Amz-Target=AmazonSSM.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResult> {
			return this.http.post<RemoveTagsFromResourceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. </p>
		 * Post #X-Amz-Target=AmazonSSM.ResetServiceSetting
		 * @return {ResetServiceSettingResult} Success
		 */
		ResetServiceSetting(requestBody: ResetServiceSettingRequest): Observable<ResetServiceSettingResult> {
			return this.http.post<ResetServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.ResetServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.ResumeSession
		 * @return {ResumeSessionResponse} Success
		 */
		ResumeSession(requestBody: ResumeSessionRequest): Observable<ResumeSessionResponse> {
			return this.http.post<ResumeSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.ResumeSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a signal to an Automation execution to change the current behavior or status of the execution.
		 * Post #X-Amz-Target=AmazonSSM.SendAutomationSignal
		 * @return {SendAutomationSignalResult} Success
		 */
		SendAutomationSignal(requestBody: SendAutomationSignalRequest): Observable<SendAutomationSignalResult> {
			return this.http.post<SendAutomationSignalResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.SendAutomationSignal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs commands on one or more managed nodes.
		 * Post #X-Amz-Target=AmazonSSM.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest): Observable<SendCommandResult> {
			return this.http.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.SendCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.
		 * Post #X-Amz-Target=AmazonSSM.StartAssociationsOnce
		 * @return {StartAssociationsOnceResult} Success
		 */
		StartAssociationsOnce(requestBody: StartAssociationsOnceRequest): Observable<StartAssociationsOnceResult> {
			return this.http.post<StartAssociationsOnceResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAssociationsOnce', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates execution of an Automation runbook.
		 * Post #X-Amz-Target=AmazonSSM.StartAutomationExecution
		 * @return {StartAutomationExecutionResult} Success
		 */
		StartAutomationExecution(requestBody: StartAutomationExecutionRequest): Observable<StartAutomationExecutionResult> {
			return this.http.post<StartAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.
		 * Post #X-Amz-Target=AmazonSSM.StartChangeRequestExecution
		 * @return {StartChangeRequestExecutionResult} Success
		 */
		StartChangeRequestExecution(requestBody: StartChangeRequestExecutionRequest): Observable<StartChangeRequestExecutionResult> {
			return this.http.post<StartChangeRequestExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartChangeRequestExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.StartSession
		 * @return {StartSessionResponse} Success
		 */
		StartSession(requestBody: StartSessionRequest): Observable<StartSessionResponse> {
			return this.http.post<StartSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.StartSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop an Automation that is currently running.
		 * Post #X-Amz-Target=AmazonSSM.StopAutomationExecution
		 * @return {StopAutomationExecutionResult} Success
		 */
		StopAutomationExecution(requestBody: StopAutomationExecutionRequest): Observable<StopAutomationExecutionResult> {
			return this.http.post<StopAutomationExecutionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.StopAutomationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.
		 * Post #X-Amz-Target=AmazonSSM.TerminateSession
		 * @return {TerminateSessionResponse} Success
		 */
		TerminateSession(requestBody: TerminateSessionRequest): Observable<TerminateSessionResponse> {
			return this.http.post<TerminateSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.TerminateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a label or labels from a parameter.
		 * Post #X-Amz-Target=AmazonSSM.UnlabelParameterVersion
		 * @return {UnlabelParameterVersionResult} Success
		 */
		UnlabelParameterVersion(requestBody: UnlabelParameterVersionRequest): Observable<UnlabelParameterVersionResult> {
			return this.http.post<UnlabelParameterVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UnlabelParameterVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call <code>UpdateAssociation</code>, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the <code>Name</code> parameter. Before calling this API action, we recommend that you call the <a>DescribeAssociation</a> API operation and make a note of all optional parameters required for your <code>UpdateAssociation</code> call.</p> <p>In order to call this API operation, a user, group, or role must be granted permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;</code> </p> <important> <p>When you update an association, the association immediately runs against the specified targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association during the next schedule run.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.UpdateAssociation
		 * @return {UpdateAssociationResult} Success
		 */
		UpdateAssociation(requestBody: UpdateAssociationRequest): Observable<UpdateAssociationResult> {
			return this.http.post<UpdateAssociationResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.</p> <p> <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the <code>InstanceId</code> legacy parameter.</p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateAssociationStatus
		 * @return {UpdateAssociationStatusResult} Success
		 */
		UpdateAssociationStatus(requestBody: UpdateAssociationStatusRequest): Observable<UpdateAssociationStatusResult> {
			return this.http.post<UpdateAssociationStatusResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateAssociationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more values for an SSM document.
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocument
		 * @return {UpdateDocumentResult} Success
		 */
		UpdateDocument(requestBody: UpdateDocumentRequest): Observable<UpdateDocumentResult> {
			return this.http.post<UpdateDocumentResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Set the default version of a document. </p> <note> <p>If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the <code>apply-only-at-cron-interval</code> parameter.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion
		 * @return {UpdateDocumentDefaultVersionResult} Success
		 */
		UpdateDocumentDefaultVersion(requestBody: UpdateDocumentDefaultVersionRequest): Observable<UpdateDocumentDefaultVersionResult> {
			return this.http.post<UpdateDocumentDefaultVersionResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information related to approval reviews for a specific version of a change template in Change Manager.
		 * Post #X-Amz-Target=AmazonSSM.UpdateDocumentMetadata
		 * @return {UpdateDocumentMetadataResponse} Success
		 */
		UpdateDocumentMetadata(requestBody: UpdateDocumentMetadataRequest): Observable<UpdateDocumentMetadataResponse> {
			return this.http.post<UpdateDocumentMetadataResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p> <note> <p>The value you specify for <code>Duration</code> determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start after 5 PM.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow
		 * @return {UpdateMaintenanceWindowResult} Success
		 */
		UpdateMaintenanceWindow(requestBody: UpdateMaintenanceWindowRequest): Observable<UpdateMaintenanceWindowResult> {
			return this.http.post<UpdateMaintenanceWindowResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field isn't modified.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget
		 * @return {UpdateMaintenanceWindowTargetResult} Success
		 */
		UpdateMaintenanceWindowTarget(requestBody: UpdateMaintenanceWindowTargetRequest): Observable<UpdateMaintenanceWindowTargetResult> {
			return this.http.post<UpdateMaintenanceWindowTargetResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p> <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p> </li> <li> <p> <code>ServiceRoleArn</code> </p> </li> <li> <p> <code>TaskInvocationParameters</code> </p> </li> <li> <p> <code>Priority</code> </p> </li> <li> <p> <code>MaxConcurrency</code> </p> </li> <li> <p> <code>MaxErrors</code> </p> </li> </ul> <note> <p>One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering maintenance window tasks without targets</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> </note> <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for this request. Optional fields that aren't specified are set to null.</p> <important> <p>When you update a maintenance window task that has options specified in <code>TaskInvocationParameters</code>, you must provide again all the <code>TaskInvocationParameters</code> values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified <code>TaskInvocationParameters</code> values for <code>Comment</code>, <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p> </important>
		 * Post #X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask
		 * @return {UpdateMaintenanceWindowTaskResult} Success
		 */
		UpdateMaintenanceWindowTask(requestBody: UpdateMaintenanceWindowTaskRequest): Observable<UpdateMaintenanceWindowTaskResult> {
			return this.http.post<UpdateMaintenanceWindowTaskResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.
		 * Post #X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole
		 * @return {UpdateManagedInstanceRoleResult} Success
		 */
		UpdateManagedInstanceRole(requestBody: UpdateManagedInstanceRoleRequest): Observable<UpdateManagedInstanceRoleResult> {
			return this.http.post<UpdateManagedInstanceRoleResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateOpsItem
		 * @return {UpdateOpsItemResponse} Success
		 */
		UpdateOpsItem(requestBody: UpdateOpsItemRequest): Observable<UpdateOpsItemResponse> {
			return this.http.post<UpdateOpsItemResponse>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateOpsItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
		 * Post #X-Amz-Target=AmazonSSM.UpdateOpsMetadata
		 * @return {UpdateOpsMetadataResult} Success
		 */
		UpdateOpsMetadata(requestBody: UpdateOpsMetadataRequest): Observable<UpdateOpsMetadataResult> {
			return this.http.post<UpdateOpsMetadataResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateOpsMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported operating system type, see <a>PatchFilter</a>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdatePatchBaseline
		 * @return {UpdatePatchBaselineResult} Success
		 */
		UpdatePatchBaseline(requestBody: UpdatePatchBaselineRequest): Observable<UpdatePatchBaselineResult> {
			return this.http.post<UpdatePatchBaselineResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdatePatchBaseline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't edit that sync later and choose the <code>Include all accounts from my Organizations configuration</code> option. Instead, you must delete the first resource data sync, and create a new one.</p> <note> <p>This API operation only supports a resource data sync that was created with a SyncFromSource <code>SyncType</code>.</p> </note>
		 * Post #X-Amz-Target=AmazonSSM.UpdateResourceDataSync
		 * @return {UpdateResourceDataSyncResult} Success
		 */
		UpdateResourceDataSync(requestBody: UpdateResourceDataSyncRequest): Observable<UpdateResourceDataSyncResult> {
			return this.http.post<UpdateResourceDataSyncResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateResourceDataSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API operation to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p> <p>Update the service setting for the account. </p>
		 * Post #X-Amz-Target=AmazonSSM.UpdateServiceSetting
		 * @return {UpdateServiceSettingResult} Success
		 */
		UpdateServiceSetting(requestBody: UpdateServiceSettingRequest): Observable<UpdateServiceSettingResult> {
			return this.http.post<UpdateServiceSettingResult>(this.baseUri + '#X-Amz-Target=AmazonSSM.UpdateServiceSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { 'AmazonSSM.AddTagsToResource' = 0 }

	export enum AssociateOpsItemRelatedItemX_Amz_Target { 'AmazonSSM.AssociateOpsItemRelatedItem' = 0 }

	export enum CancelCommandX_Amz_Target { 'AmazonSSM.CancelCommand' = 0 }

	export enum CancelMaintenanceWindowExecutionX_Amz_Target { 'AmazonSSM.CancelMaintenanceWindowExecution' = 0 }

	export enum CreateActivationX_Amz_Target { 'AmazonSSM.CreateActivation' = 0 }

	export enum CreateAssociationX_Amz_Target { 'AmazonSSM.CreateAssociation' = 0 }

	export enum CreateAssociationBatchX_Amz_Target { 'AmazonSSM.CreateAssociationBatch' = 0 }

	export enum CreateDocumentX_Amz_Target { 'AmazonSSM.CreateDocument' = 0 }

	export enum CreateMaintenanceWindowX_Amz_Target { 'AmazonSSM.CreateMaintenanceWindow' = 0 }

	export enum CreateOpsItemX_Amz_Target { 'AmazonSSM.CreateOpsItem' = 0 }

	export enum CreateOpsMetadataX_Amz_Target { 'AmazonSSM.CreateOpsMetadata' = 0 }

	export enum CreatePatchBaselineX_Amz_Target { 'AmazonSSM.CreatePatchBaseline' = 0 }

	export enum CreateResourceDataSyncX_Amz_Target { 'AmazonSSM.CreateResourceDataSync' = 0 }

	export enum DeleteActivationX_Amz_Target { 'AmazonSSM.DeleteActivation' = 0 }

	export enum DeleteAssociationX_Amz_Target { 'AmazonSSM.DeleteAssociation' = 0 }

	export enum DeleteDocumentX_Amz_Target { 'AmazonSSM.DeleteDocument' = 0 }

	export enum DeleteInventoryX_Amz_Target { 'AmazonSSM.DeleteInventory' = 0 }

	export enum DeleteMaintenanceWindowX_Amz_Target { 'AmazonSSM.DeleteMaintenanceWindow' = 0 }

	export enum DeleteOpsMetadataX_Amz_Target { 'AmazonSSM.DeleteOpsMetadata' = 0 }

	export enum DeleteParameterX_Amz_Target { 'AmazonSSM.DeleteParameter' = 0 }

	export enum DeleteParametersX_Amz_Target { 'AmazonSSM.DeleteParameters' = 0 }

	export enum DeletePatchBaselineX_Amz_Target { 'AmazonSSM.DeletePatchBaseline' = 0 }

	export enum DeleteResourceDataSyncX_Amz_Target { 'AmazonSSM.DeleteResourceDataSync' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'AmazonSSM.DeleteResourcePolicy' = 0 }

	export enum DeregisterManagedInstanceX_Amz_Target { 'AmazonSSM.DeregisterManagedInstance' = 0 }

	export enum DeregisterPatchBaselineForPatchGroupX_Amz_Target { 'AmazonSSM.DeregisterPatchBaselineForPatchGroup' = 0 }

	export enum DeregisterTargetFromMaintenanceWindowX_Amz_Target { 'AmazonSSM.DeregisterTargetFromMaintenanceWindow' = 0 }

	export enum DeregisterTaskFromMaintenanceWindowX_Amz_Target { 'AmazonSSM.DeregisterTaskFromMaintenanceWindow' = 0 }

	export enum DescribeActivationsX_Amz_Target { 'AmazonSSM.DescribeActivations' = 0 }

	export enum DescribeAssociationX_Amz_Target { 'AmazonSSM.DescribeAssociation' = 0 }

	export enum DescribeAssociationExecutionTargetsX_Amz_Target { 'AmazonSSM.DescribeAssociationExecutionTargets' = 0 }

	export enum DescribeAssociationExecutionsX_Amz_Target { 'AmazonSSM.DescribeAssociationExecutions' = 0 }

	export enum DescribeAutomationExecutionsX_Amz_Target { 'AmazonSSM.DescribeAutomationExecutions' = 0 }

	export enum DescribeAutomationStepExecutionsX_Amz_Target { 'AmazonSSM.DescribeAutomationStepExecutions' = 0 }

	export enum DescribeAvailablePatchesX_Amz_Target { 'AmazonSSM.DescribeAvailablePatches' = 0 }

	export enum DescribeDocumentX_Amz_Target { 'AmazonSSM.DescribeDocument' = 0 }

	export enum DescribeDocumentPermissionX_Amz_Target { 'AmazonSSM.DescribeDocumentPermission' = 0 }

	export enum DescribeEffectiveInstanceAssociationsX_Amz_Target { 'AmazonSSM.DescribeEffectiveInstanceAssociations' = 0 }

	export enum DescribeEffectivePatchesForPatchBaselineX_Amz_Target { 'AmazonSSM.DescribeEffectivePatchesForPatchBaseline' = 0 }

	export enum DescribeInstanceAssociationsStatusX_Amz_Target { 'AmazonSSM.DescribeInstanceAssociationsStatus' = 0 }

	export enum DescribeInstanceInformationX_Amz_Target { 'AmazonSSM.DescribeInstanceInformation' = 0 }

	export enum DescribeInstancePatchStatesX_Amz_Target { 'AmazonSSM.DescribeInstancePatchStates' = 0 }

	export enum DescribeInstancePatchStatesForPatchGroupX_Amz_Target { 'AmazonSSM.DescribeInstancePatchStatesForPatchGroup' = 0 }

	export enum DescribeInstancePatchesX_Amz_Target { 'AmazonSSM.DescribeInstancePatches' = 0 }

	export enum DescribeInventoryDeletionsX_Amz_Target { 'AmazonSSM.DescribeInventoryDeletions' = 0 }

	export enum DescribeMaintenanceWindowExecutionTaskInvocationsX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations' = 0 }

	export enum DescribeMaintenanceWindowExecutionTasksX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowExecutionTasks' = 0 }

	export enum DescribeMaintenanceWindowExecutionsX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowExecutions' = 0 }

	export enum DescribeMaintenanceWindowScheduleX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowSchedule' = 0 }

	export enum DescribeMaintenanceWindowTargetsX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowTargets' = 0 }

	export enum DescribeMaintenanceWindowTasksX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowTasks' = 0 }

	export enum DescribeMaintenanceWindowsX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindows' = 0 }

	export enum DescribeMaintenanceWindowsForTargetX_Amz_Target { 'AmazonSSM.DescribeMaintenanceWindowsForTarget' = 0 }

	export enum DescribeOpsItemsX_Amz_Target { 'AmazonSSM.DescribeOpsItems' = 0 }

	export enum DescribeParametersX_Amz_Target { 'AmazonSSM.DescribeParameters' = 0 }

	export enum DescribePatchBaselinesX_Amz_Target { 'AmazonSSM.DescribePatchBaselines' = 0 }

	export enum DescribePatchGroupStateX_Amz_Target { 'AmazonSSM.DescribePatchGroupState' = 0 }

	export enum DescribePatchGroupsX_Amz_Target { 'AmazonSSM.DescribePatchGroups' = 0 }

	export enum DescribePatchPropertiesX_Amz_Target { 'AmazonSSM.DescribePatchProperties' = 0 }

	export enum DescribeSessionsX_Amz_Target { 'AmazonSSM.DescribeSessions' = 0 }

	export enum DisassociateOpsItemRelatedItemX_Amz_Target { 'AmazonSSM.DisassociateOpsItemRelatedItem' = 0 }

	export enum GetAutomationExecutionX_Amz_Target { 'AmazonSSM.GetAutomationExecution' = 0 }

	export enum GetCalendarStateX_Amz_Target { 'AmazonSSM.GetCalendarState' = 0 }

	export enum GetCommandInvocationX_Amz_Target { 'AmazonSSM.GetCommandInvocation' = 0 }

	export enum GetConnectionStatusX_Amz_Target { 'AmazonSSM.GetConnectionStatus' = 0 }

	export enum GetDefaultPatchBaselineX_Amz_Target { 'AmazonSSM.GetDefaultPatchBaseline' = 0 }

	export enum GetDeployablePatchSnapshotForInstanceX_Amz_Target { 'AmazonSSM.GetDeployablePatchSnapshotForInstance' = 0 }

	export enum GetDocumentX_Amz_Target { 'AmazonSSM.GetDocument' = 0 }

	export enum GetInventoryX_Amz_Target { 'AmazonSSM.GetInventory' = 0 }

	export enum GetInventorySchemaX_Amz_Target { 'AmazonSSM.GetInventorySchema' = 0 }

	export enum GetMaintenanceWindowX_Amz_Target { 'AmazonSSM.GetMaintenanceWindow' = 0 }

	export enum GetMaintenanceWindowExecutionX_Amz_Target { 'AmazonSSM.GetMaintenanceWindowExecution' = 0 }

	export enum GetMaintenanceWindowExecutionTaskX_Amz_Target { 'AmazonSSM.GetMaintenanceWindowExecutionTask' = 0 }

	export enum GetMaintenanceWindowExecutionTaskInvocationX_Amz_Target { 'AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation' = 0 }

	export enum GetMaintenanceWindowTaskX_Amz_Target { 'AmazonSSM.GetMaintenanceWindowTask' = 0 }

	export enum GetOpsItemX_Amz_Target { 'AmazonSSM.GetOpsItem' = 0 }

	export enum GetOpsMetadataX_Amz_Target { 'AmazonSSM.GetOpsMetadata' = 0 }

	export enum GetOpsSummaryX_Amz_Target { 'AmazonSSM.GetOpsSummary' = 0 }

	export enum GetParameterX_Amz_Target { 'AmazonSSM.GetParameter' = 0 }

	export enum GetParameterHistoryX_Amz_Target { 'AmazonSSM.GetParameterHistory' = 0 }

	export enum GetParametersX_Amz_Target { 'AmazonSSM.GetParameters' = 0 }

	export enum GetParametersByPathX_Amz_Target { 'AmazonSSM.GetParametersByPath' = 0 }

	export enum GetPatchBaselineX_Amz_Target { 'AmazonSSM.GetPatchBaseline' = 0 }

	export enum GetPatchBaselineForPatchGroupX_Amz_Target { 'AmazonSSM.GetPatchBaselineForPatchGroup' = 0 }

	export enum GetResourcePoliciesX_Amz_Target { 'AmazonSSM.GetResourcePolicies' = 0 }

	export enum GetServiceSettingX_Amz_Target { 'AmazonSSM.GetServiceSetting' = 0 }

	export enum LabelParameterVersionX_Amz_Target { 'AmazonSSM.LabelParameterVersion' = 0 }

	export enum ListAssociationVersionsX_Amz_Target { 'AmazonSSM.ListAssociationVersions' = 0 }

	export enum ListAssociationsX_Amz_Target { 'AmazonSSM.ListAssociations' = 0 }

	export enum ListCommandInvocationsX_Amz_Target { 'AmazonSSM.ListCommandInvocations' = 0 }

	export enum ListCommandsX_Amz_Target { 'AmazonSSM.ListCommands' = 0 }

	export enum ListComplianceItemsX_Amz_Target { 'AmazonSSM.ListComplianceItems' = 0 }

	export enum ListComplianceSummariesX_Amz_Target { 'AmazonSSM.ListComplianceSummaries' = 0 }

	export enum ListDocumentMetadataHistoryX_Amz_Target { 'AmazonSSM.ListDocumentMetadataHistory' = 0 }

	export enum ListDocumentVersionsX_Amz_Target { 'AmazonSSM.ListDocumentVersions' = 0 }

	export enum ListDocumentsX_Amz_Target { 'AmazonSSM.ListDocuments' = 0 }

	export enum ListInventoryEntriesX_Amz_Target { 'AmazonSSM.ListInventoryEntries' = 0 }

	export enum ListOpsItemEventsX_Amz_Target { 'AmazonSSM.ListOpsItemEvents' = 0 }

	export enum ListOpsItemRelatedItemsX_Amz_Target { 'AmazonSSM.ListOpsItemRelatedItems' = 0 }

	export enum ListOpsMetadataX_Amz_Target { 'AmazonSSM.ListOpsMetadata' = 0 }

	export enum ListResourceComplianceSummariesX_Amz_Target { 'AmazonSSM.ListResourceComplianceSummaries' = 0 }

	export enum ListResourceDataSyncX_Amz_Target { 'AmazonSSM.ListResourceDataSync' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonSSM.ListTagsForResource' = 0 }

	export enum ModifyDocumentPermissionX_Amz_Target { 'AmazonSSM.ModifyDocumentPermission' = 0 }

	export enum PutComplianceItemsX_Amz_Target { 'AmazonSSM.PutComplianceItems' = 0 }

	export enum PutInventoryX_Amz_Target { 'AmazonSSM.PutInventory' = 0 }

	export enum PutParameterX_Amz_Target { 'AmazonSSM.PutParameter' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'AmazonSSM.PutResourcePolicy' = 0 }

	export enum RegisterDefaultPatchBaselineX_Amz_Target { 'AmazonSSM.RegisterDefaultPatchBaseline' = 0 }

	export enum RegisterPatchBaselineForPatchGroupX_Amz_Target { 'AmazonSSM.RegisterPatchBaselineForPatchGroup' = 0 }

	export enum RegisterTargetWithMaintenanceWindowX_Amz_Target { 'AmazonSSM.RegisterTargetWithMaintenanceWindow' = 0 }

	export enum RegisterTaskWithMaintenanceWindowX_Amz_Target { 'AmazonSSM.RegisterTaskWithMaintenanceWindow' = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { 'AmazonSSM.RemoveTagsFromResource' = 0 }

	export enum ResetServiceSettingX_Amz_Target { 'AmazonSSM.ResetServiceSetting' = 0 }

	export enum ResumeSessionX_Amz_Target { 'AmazonSSM.ResumeSession' = 0 }

	export enum SendAutomationSignalX_Amz_Target { 'AmazonSSM.SendAutomationSignal' = 0 }

	export enum SendCommandX_Amz_Target { 'AmazonSSM.SendCommand' = 0 }

	export enum StartAssociationsOnceX_Amz_Target { 'AmazonSSM.StartAssociationsOnce' = 0 }

	export enum StartAutomationExecutionX_Amz_Target { 'AmazonSSM.StartAutomationExecution' = 0 }

	export enum StartChangeRequestExecutionX_Amz_Target { 'AmazonSSM.StartChangeRequestExecution' = 0 }

	export enum StartSessionX_Amz_Target { 'AmazonSSM.StartSession' = 0 }

	export enum StopAutomationExecutionX_Amz_Target { 'AmazonSSM.StopAutomationExecution' = 0 }

	export enum TerminateSessionX_Amz_Target { 'AmazonSSM.TerminateSession' = 0 }

	export enum UnlabelParameterVersionX_Amz_Target { 'AmazonSSM.UnlabelParameterVersion' = 0 }

	export enum UpdateAssociationX_Amz_Target { 'AmazonSSM.UpdateAssociation' = 0 }

	export enum UpdateAssociationStatusX_Amz_Target { 'AmazonSSM.UpdateAssociationStatus' = 0 }

	export enum UpdateDocumentX_Amz_Target { 'AmazonSSM.UpdateDocument' = 0 }

	export enum UpdateDocumentDefaultVersionX_Amz_Target { 'AmazonSSM.UpdateDocumentDefaultVersion' = 0 }

	export enum UpdateDocumentMetadataX_Amz_Target { 'AmazonSSM.UpdateDocumentMetadata' = 0 }

	export enum UpdateMaintenanceWindowX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindow' = 0 }

	export enum UpdateMaintenanceWindowTargetX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindowTarget' = 0 }

	export enum UpdateMaintenanceWindowTaskX_Amz_Target { 'AmazonSSM.UpdateMaintenanceWindowTask' = 0 }

	export enum UpdateManagedInstanceRoleX_Amz_Target { 'AmazonSSM.UpdateManagedInstanceRole' = 0 }

	export enum UpdateOpsItemX_Amz_Target { 'AmazonSSM.UpdateOpsItem' = 0 }

	export enum UpdateOpsMetadataX_Amz_Target { 'AmazonSSM.UpdateOpsMetadata' = 0 }

	export enum UpdatePatchBaselineX_Amz_Target { 'AmazonSSM.UpdatePatchBaseline' = 0 }

	export enum UpdateResourceDataSyncX_Amz_Target { 'AmazonSSM.UpdateResourceDataSync' = 0 }

	export enum UpdateServiceSettingX_Amz_Target { 'AmazonSSM.UpdateServiceSetting' = 0 }

}

